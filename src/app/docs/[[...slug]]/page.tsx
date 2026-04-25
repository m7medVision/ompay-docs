import { getPageImage, getPageMarkdownUrl, source } from '@/lib/source';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
  MarkdownCopyButton,
  ViewOptionsPopover,
} from 'fumadocs-ui/layouts/docs/page';
import { findSiblings } from 'fumadocs-core/page-tree';
import { Card, Cards } from 'fumadocs-ui/components/card';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/components/mdx';
import type { Metadata } from 'next';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { gitConfig } from '@/lib/shared';
import { createMetadata } from '@/lib/metadata';

export default async function Page(props: PageProps<'/docs/[[...slug]]'>) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  if (page.type === 'openapi') {
    const { APIPage: OpenAPIPage } = await import('@/components/api-page');
    const openapiData = page.data as unknown as {
      title: string;
      getAPIPageProps: () => { document: string; operations?: { path: string; method: string }[] };
    };
    const apiPageProps = openapiData.getAPIPageProps();
    return (
      <DocsPage full>
        <h1 className="text-[1.75em] font-semibold">{openapiData.title}</h1>
        <DocsBody>
          <OpenAPIPage
            document={apiPageProps.document}
            operations={apiPageProps.operations as Parameters<typeof OpenAPIPage>[0]['operations']}
          />
        </DocsBody>
      </DocsPage>
    );
  }

  const Mdx = page.data.body;

  const markdownUrl = getPageMarkdownUrl(page).url;
  const githubUrl =
    gitConfig.user && gitConfig.repo
      ? `https://github.com/${gitConfig.user}/${gitConfig.repo}/blob/${gitConfig.branch}/content/docs/${page.path}`
      : undefined;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription className="mb-0">
        {page.data.description}
      </DocsDescription>
      <div className="flex flex-row flex-wrap gap-2 items-center border-b pb-6">
        <MarkdownCopyButton markdownUrl={markdownUrl} />
        {githubUrl && (
          <ViewOptionsPopover
            markdownUrl={markdownUrl}
            githubUrl={githubUrl}
          />
        )}
      </div>
      <DocsBody>
        <Mdx
          components={getMDXComponents({
            a: createRelativeLink(source, page),
          })}
        />
        {page.data.index ? <DocsCategory url={page.url} /> : null}
      </DocsBody>
    </DocsPage>
  );
}

function DocsCategory({ url }: { url: string }) {
  const siblings = findSiblings(source.getPageTree(), url);
  if (!siblings || siblings.length === 0) return null;

  return (
    <Cards className="not-prose mt-8">
      {siblings.map((sibling) =>
        sibling.type === 'page' ? (
          <Card
            key={sibling.url}
            title={sibling.name}
            description={(sibling as { description?: string }).description}
            href={sibling.url}
          />
        ) : null,
      )}
    </Cards>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(
  props: PageProps<'/docs/[[...slug]]'>,
): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) return createMetadata({ title: 'Not Found' });

  const description =
    page.data.description ??
    'OMPAY payment gateway documentation — APIs, integrations, and SDKs.';

  return createMetadata({
    title: page.data.title,
    description,
    openGraph: {
      url: page.url,
      images: getPageImage(page).url,
    },
  });
}
