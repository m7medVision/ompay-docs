import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col justify-center gap-8 px-6 py-16 text-center">
      <div className="space-y-4">
        <div className="mx-auto w-20">
          <svg viewBox="0 0 241.1 212.9" className="w-full">
            <defs>
              <style>{`.b{fill:#2d13ea;}`}</style>
            </defs>
            <polygon className="b" points="100.8 184.8 56.1 140.2 56.1 106.4 117.7 167.9 100.8 184.8"/>
            <polygon className="b" points="140.3 184.8 184.9 140.2 184.9 106.4 123.4 167.9 140.3 184.8"/>
            <polygon className="b" points="72.7 212.9 0 140.3 0 106.5 89.6 196 72.7 212.9"/>
            <polygon className="b" points="168.4 212.9 151.5 196 241.1 106.5 241.1 140.3 168.4 212.9"/>
            <polygon className="b" points="100.8 28.1 56.1 72.8 56.1 106.6 117.7 45 100.8 28.1"/>
            <polygon className="b" points="140.3 28.1 184.9 72.8 184.9 106.6 123.4 45 140.3 28.1"/>
            <polygon className="b" points="72.7 0 0 72.7 0 106.5 89.6 16.9 72.7 0"/>
            <polygon className="b" points="168.4 0 151.5 16.9 241.1 106.5 241.1 72.7 168.4 0"/>
          </svg>
        </div>
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-fd-muted-foreground">
          OMPAY Payment Gateway
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Integration docs for hosted and direct payment flows.
        </h1>
        <p className="mx-auto max-w-2xl text-fd-muted-foreground sm:text-lg">
          Bank-hosted checkout, merchant-hosted APIs, webhook validation, sandbox test cards, and the unofficial `ompay.js` SDK in one place.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link
          href="/docs"
          className="inline-flex h-11 items-center justify-center rounded-xl bg-fd-primary px-5 font-medium text-fd-primary-foreground transition-opacity hover:opacity-90"
        >
          Open docs
        </Link>
        <Link
          href="/docs/api-reference"
          className="inline-flex h-11 items-center justify-center rounded-xl border px-5 font-medium transition-colors hover:bg-fd-accent"
        >
          API reference
        </Link>
      </div>

      <div className="grid gap-4 text-left sm:grid-cols-3">
        <Link href="/docs/integrations/bank-hosted" className="rounded-2xl border p-5 transition-colors hover:bg-fd-accent">
          <h2 className="font-semibold">Bank Hosted</h2>
          <p className="mt-2 text-sm text-fd-muted-foreground">
            Redirect customers to OMPAY checkout and verify the final payment status server-side.
          </p>
        </Link>
        <Link href="/docs/integrations/merchant-hosted" className="rounded-2xl border p-5 transition-colors hover:bg-fd-accent">
          <h2 className="font-semibold">Merchant Hosted</h2>
          <p className="mt-2 text-sm text-fd-muted-foreground">
            Create orders, encrypt card data, handle 3DS, manage refunds, and work with saved cards.
          </p>
        </Link>
        <Link href="/docs/sdks/ompay-js" className="rounded-2xl border p-5 transition-colors hover:bg-fd-accent">
          <h2 className="font-semibold">ompay.js SDK</h2>
          <p className="mt-2 text-sm text-fd-muted-foreground">
            Use the TypeScript SDK to wrap checkout, merchant-hosted operations, signatures, and test flows.
          </p>
        </Link>
      </div>
    </main>
  );
}
