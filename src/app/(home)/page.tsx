import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center flex-1 pb-16">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center text-center px-6 py-24 md:py-32 bg-gradient-to-b from-transparent to-fd-muted/30">
        <div className="relative w-48 h-16 md:w-64 md:h-20 mb-8 hidden dark:block">
          <Image 
            src="/logo/ompay_dark.png" 
            alt="Ompay Logo" 
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="relative w-48 h-16 md:w-64 md:h-20 mb-8 dark:hidden block">
          <Image 
            src="/logo/ompay_light.png" 
            alt="Ompay Logo" 
            fill
            className="object-contain"
            priority
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-fd-foreground">
          Ompay Developer Documentation
        </h1>
        <p className="text-lg md:text-xl text-fd-muted-foreground max-w-[600px] mb-10">
          Everything you need to integrate with Ompay's powerful payment gateway. Explore our APIs, SDKs, and comprehensive guides.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/docs"
            className="inline-flex items-center justify-center h-12 px-8 rounded-full font-medium text-fd-primary-foreground bg-fd-primary hover:bg-fd-primary/90 transition-colors"
          >
            Get Started
          </Link>
          <Link
            href="/docs/api"
            className="inline-flex items-center justify-center h-12 px-8 rounded-full font-medium border border-fd-border bg-transparent hover:bg-fd-muted transition-colors"
          >
            API Reference
          </Link>
        </div>
      </section>

      {/* Features/Quick Links Section */}
      <section className="w-full max-w-5xl px-6 grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div className="flex flex-col p-6 rounded-2xl border border-fd-border bg-fd-card">
          <div className="w-12 h-12 rounded-lg bg-fd-primary/10 flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-fd-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-fd-card-foreground">Quickstart</h3>
          <p className="text-fd-muted-foreground mb-4 flex-1">
            Get up and running with Ompay in minutes. Follow our step-by-step integration guides.
          </p>
          <Link href="/docs" className="text-fd-primary font-medium hover:underline inline-flex items-center">
            Read Guide &rarr;
          </Link>
        </div>

        <div className="flex flex-col p-6 rounded-2xl border border-fd-border bg-fd-card">
          <div className="w-12 h-12 rounded-lg bg-fd-primary/10 flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-fd-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-fd-card-foreground">API Reference</h3>
          <p className="text-fd-muted-foreground mb-4 flex-1">
            Detailed endpoints, request/response formats, and authentication details for our REST API.
          </p>
          <Link href="/docs/api" className="text-fd-primary font-medium hover:underline inline-flex items-center">
            Explore API &rarr;
          </Link>
        </div>

        <div className="flex flex-col p-6 rounded-2xl border border-fd-border bg-fd-card">
          <div className="w-12 h-12 rounded-lg bg-fd-primary/10 flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-fd-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-fd-card-foreground">Security & Webhooks</h3>
          <p className="text-fd-muted-foreground mb-4 flex-1">
            Learn about securing your integration, verifying webhooks, and testing in our sandbox.
          </p>
          <Link href="/docs" className="text-fd-primary font-medium hover:underline inline-flex items-center">
            View Security Docs &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
