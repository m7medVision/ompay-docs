import type { Metadata } from 'next/types';
import { appName } from './shared';

export function createMetadata(override: Metadata): Metadata {
  return {
    ...override,
    openGraph: {
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      siteName: appName,
      ...override.openGraph,
    },
    twitter: {
      card: 'summary_large_image',
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      ...override.twitter,
    },
  };
}

export const baseUrl = new URL(
  process.env.NODE_ENV === 'development' || !process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? 'http://localhost:3000'
    : `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`,
);
