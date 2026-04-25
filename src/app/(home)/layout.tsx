import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions, docsMenuItems, linkItems } from '@/lib/layout.shared';
import {
  NavbarMenu,
  NavbarMenuContent,
  NavbarMenuLink,
  NavbarMenuTrigger,
} from 'fumadocs-ui/layouts/home/navbar';
import { Book, Code, Cpu, Key, Wrench } from 'lucide-react';

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <HomeLayout
      {...baseOptions()}
      links={[
        {
          type: 'menu',
          on: 'menu',
          text: 'Docs',
          items: docsMenuItems,
        },
        {
          type: 'custom',
          on: 'nav',
          children: (
            <NavbarMenu>
              <NavbarMenuTrigger>Docs</NavbarMenuTrigger>
              <NavbarMenuContent>
                <NavbarMenuLink href="/docs" className="md:row-span-2">
                  <Book className="bg-fd-primary text-fd-primary-foreground p-1 mb-2 rounded-md" />
                  <p className="font-medium">Getting Started</p>
                  <p className="text-fd-muted-foreground text-sm">
                    Quickstart guide and authentication setup.
                  </p>
                </NavbarMenuLink>

                <NavbarMenuLink href="/docs/integrations" className="lg:col-start-2">
                  <Cpu className="bg-fd-primary text-fd-primary-foreground p-1 mb-2 rounded-md" />
                  <p className="font-medium">Integrations</p>
                  <p className="text-fd-muted-foreground text-sm">
                    Bank-hosted and merchant-hosted payment flows.
                  </p>
                </NavbarMenuLink>

                <NavbarMenuLink href="/docs/api-reference" className="lg:col-start-2">
                  <Code className="bg-fd-primary text-fd-primary-foreground p-1 mb-2 rounded-md" />
                  <p className="font-medium">API Reference</p>
                  <p className="text-fd-muted-foreground text-sm">
                    Full REST API endpoints and schemas.
                  </p>
                </NavbarMenuLink>

                <NavbarMenuLink href="/docs/reference" className="lg:col-start-3 lg:row-start-1">
                  <Wrench className="bg-fd-primary text-fd-primary-foreground p-1 mb-2 rounded-md" />
                  <p className="font-medium">Reference</p>
                  <p className="text-fd-muted-foreground text-sm">
                    Signatures, webhooks, and test cards.
                  </p>
                </NavbarMenuLink>

                <NavbarMenuLink href="/docs/sdks" className="lg:col-start-3 lg:row-start-2">
                  <Key className="bg-fd-primary text-fd-primary-foreground p-1 mb-2 rounded-md" />
                  <p className="font-medium">SDKs</p>
                  <p className="text-fd-muted-foreground text-sm">
                    Client libraries for Node.js and the browser.
                  </p>
                </NavbarMenuLink>
              </NavbarMenuContent>
            </NavbarMenu>
          ),
        },
        ...linkItems,
      ]}
    >
      {children}
    </HomeLayout>
  );
}
