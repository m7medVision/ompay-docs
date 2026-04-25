import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-fd-background text-fd-foreground">
      {/* Background glow effects - using Ompay blue theme */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] md:w-[800px] md:h-[600px] bg-blue-600/20 blur-[100px] rounded-full pointer-events-none" />
      
      {/* Optional faint dot pattern or radial gradient over background could go here */}

      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center px-6 py-24 text-center">
        {/* Pill Badge */}
        <div className="mb-8 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-400 backdrop-blur-sm">
          The payment gateway you love.
        </div>

        {/* Hero Title */}
        <h1 className="mb-8 text-5xl font-extrabold tracking-tight md:text-7xl">
          Build seamless payments, <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            your style.
          </span>
        </h1>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
          <Link
            href="/docs"
            className="inline-flex h-12 items-center justify-center rounded-full bg-blue-600 px-8 font-semibold text-white transition-colors hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
          >
            Getting Started
          </Link>
          <Link
            href="/docs/api"
            className="inline-flex h-12 items-center justify-center rounded-full border border-fd-border bg-fd-card px-8 font-semibold text-fd-foreground transition-colors hover:bg-fd-muted"
          >
            API Reference
          </Link>
        </div>
      </div>

      {/* Interface Mockup below */}
      <div className="relative z-10 mt-12 mb-24 w-full max-w-5xl px-6">
        <div className="relative flex min-h-[400px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-fd-border bg-fd-card/50 shadow-2xl backdrop-blur-md p-8">
          {/* Subtle top border glow */}
          <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
          
          <div className="hidden dark:block">
            <Image
              src="/logo/ompay_dark.png"
              alt="Ompay Dark Logo"
              width={250}
              height={80}
              className="opacity-90 drop-shadow-lg"
              priority
            />
          </div>
          <div className="block dark:hidden">
            <Image
              src="/logo/ompay_light.png"
              alt="Ompay Light Logo"
              width={250}
              height={80}
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
}
