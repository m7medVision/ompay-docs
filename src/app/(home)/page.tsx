import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="relative flex h-[calc(100vh-64px)] w-full flex-col items-center justify-center overflow-hidden bg-fd-background text-fd-foreground">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center px-6 text-center">
        {/* Pill Badge */}
        <div className="mb-6 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-400 backdrop-blur-sm">
          The payment gateway you love.
        </div>

        {/* Hero Title */}
        <h1 className="mb-6 text-5xl font-extrabold tracking-tight md:text-7xl">
          Build seamless payments, <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            your style.
          </span>
        </h1>
        
        <p className="mb-10 max-w-xl text-lg text-fd-muted-foreground">
          Everything you need to integrate with Ompay's powerful payment gateway. 
          Explore our APIs, SDKs, and comprehensive developer guides.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/docs"
            className="inline-flex h-12 items-center justify-center rounded-full bg-blue-600 px-8 font-semibold text-white transition-colors hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
          >
            Getting Started
          </Link>
          <Link
            href="/docs/api"
            className="inline-flex h-12 items-center justify-center rounded-full border border-fd-border bg-fd-card/50 px-8 font-semibold text-fd-foreground backdrop-blur-md transition-colors hover:bg-fd-muted"
          >
            API Reference
          </Link>
        </div>
      </div>
    </main>
  );
}
