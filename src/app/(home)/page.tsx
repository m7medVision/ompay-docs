import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center bg-fd-background px-6 text-center h-[calc(100vh-64px)]">
      <div className="mx-auto max-w-3xl flex flex-col items-center">
        {/* Logo handling for light/dark mode */}
        <div className="relative mb-8 h-12 w-48 block dark:hidden">
          <Image
            src="/logo/ompay_light.png"
            alt="Ompay"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="relative mb-8 h-12 w-48 hidden dark:block">
          <Image
            src="/logo/ompay_dark.png"
            alt="Ompay"
            fill
            className="object-contain"
            priority
          />
        </div>

        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-fd-foreground sm:text-5xl md:text-6xl">
          Developer Documentation
        </h1>

        <p className="mb-10 text-lg text-fd-muted-foreground sm:text-xl max-w-2xl">
          Everything you need to integrate Ompay's payment gateway. 
          Explore our guides, API reference, and SDKs to build seamless checkout experiences.
        </p>

        <div className="flex flex-col w-full justify-center gap-4 sm:w-auto sm:flex-row">
          <Link
            href="/docs"
              className="inline-flex h-12 items-center justify-center rounded-full bg-fd-primary px-8 text-base font-semibold text-fd-primary-foreground transition-colors hover:opacity-90 shadow-md"
          >
            Getting Started
          </Link>
          <Link
            href="/docs/api-reference"
            className="inline-flex h-12 items-center justify-center rounded-full border border-fd-border bg-fd-card px-8 text-base font-semibold text-fd-foreground transition-colors hover:bg-fd-accent"
          >
            API Reference
          </Link>
        </div>
      </div>
    </main>
  );
}
