import './global.css';
import type { Viewport } from 'next';
import { baseUrl, createMetadata } from '@/lib/metadata';
import { appName } from '@/lib/shared';
import { Body } from '@/app/layout.client';
import { Provider } from '@/app/provider';
import type { ReactNode } from 'react';
import { Geist, Geist_Mono } from 'next/font/google';
import { TreeContextProvider } from 'fumadocs-ui/contexts/tree';
import { source } from '@/lib/source';
import { NextProvider } from 'fumadocs-core/framework/next';

export const metadata = createMetadata({
  title: {
    template: `%s | ${appName}`,
    default: appName,
  },
  description: `${appName} Developer Documentation — integrate payment gateway, explore API references and SDKs.`,
  metadataBase: baseUrl,
});

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0A' },
    { media: '(prefers-color-scheme: light)', color: '#fff' },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <Body>
        <NextProvider>
          <TreeContextProvider tree={source.getPageTree()}>
            <Provider>{children}</Provider>
          </TreeContextProvider>
        </NextProvider>
      </Body>
    </html>
  );
}
