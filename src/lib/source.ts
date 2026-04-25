import { docs } from 'collections/server';
import { loader } from 'fumadocs-core/source';
import { lucideIconsPlugin } from 'fumadocs-core/source/lucide-icons';
import { openapiPlugin, openapiSource, type OpenAPIPageData } from 'fumadocs-openapi/server';
import { openapi } from './openapi';
import { docsContentRoute, docsImageRoute, docsRoute } from './shared';

// See https://fumadocs.dev/docs/headless/source-api for more info
export const source = loader(
  {
    docs: docs.toFumadocsSource(),
    openapi: await openapiSource(openapi, {
      baseDir: 'api-reference/endpoints',
      meta: true,
    }),
  },
  {
    baseUrl: docsRoute,
    plugins: [lucideIconsPlugin(), openapiPlugin()],
  },
);

export type SitePage = (typeof source)['$inferPage'];

export function isOpenAPIPage(page: SitePage): page is SitePage & { data: OpenAPIPageData } {
  return 'getAPIPageProps' in page.data;
}

export function getPageImage(page: SitePage) {
  const segments = [...page.slugs, 'image.png'];

  return {
    segments,
    url: `${docsImageRoute}/${segments.join('/')}`,
  };
}

export function getPageMarkdownUrl(page: SitePage) {
  const segments = [...page.slugs, 'content.md'];

  return {
    segments,
    url: `${docsContentRoute}/${segments.join('/')}`,
  };
}

export async function getLLMText(page: SitePage) {
  if (isOpenAPIPage(page)) {
    return `# ${page.data.title} (${page.url})

\`\`\`json
${JSON.stringify(page.data.getSchema().bundled, null, 2)}
\`\`\``;
  }

  const processed = await page.data.getText('processed');

  return `# ${page.data.title} (${page.url})

${processed}`;
}
