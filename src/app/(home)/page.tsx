import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Zap, ShieldCheck, Globe, Code2 } from 'lucide-react';

const features = [
  { icon: Zap, label: 'Instant payouts', sub: 'Sub-second settlement' },
  { icon: ShieldCheck, label: 'Bank-grade security', sub: 'PCI-DSS Level 1' },
  { icon: Globe, label: '135+ currencies', sub: 'Global coverage' },
  { icon: Code2, label: 'Developer-first', sub: 'RESTful API' },
];

const steps = [
  { num: '01', title: 'Create payment intent', code: "ompay.paymentIntents.create({ amount: 2000, currency: 'usd' })" },
  { num: '02', title: 'Embed checkout', code: '<OmpayProvider clientSecret={clientSecret} />' },
  { num: '03', title: 'Confirm & fulfill', code: 'webhook → fulfill order → send receipt' },
];

export default function HomePage() {
  return (
    <main className="relative h-[calc(100dvh-64px)] overflow-hidden bg-[#030611]">
      {/* Layered background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(37,99,235,0.25),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(14,165,233,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(30,58,138,0.08)_0%,transparent_40%)]" />

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(148,163,184,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.5)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]" />

      {/* Top-right glow */}
      <div className="absolute right-0 top-0 size-[600px] rounded-full bg-blue-500/10 blur-[120px]" />
      {/* Bottom-left glow */}
      <div className="absolute bottom-0 left-0 size-[500px] rounded-full bg-indigo-500/10 blur-[100px]" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6">
        {/* Logo */}
        <div className="mb-16 flex items-center gap-4">
          <div className="relative h-12 w-40">
            <Image src="/logo/ompay_dark.png" alt="Ompay" fill className="object-contain" priority />
          </div>
          <div className="h-6 w-px bg-white/10" />
          <span className="text-sm font-medium text-white/50">Developer Documentation</span>
        </div>

        {/* Hero text */}
        <div className="mb-16 max-w-3xl text-center">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
            </span>
            API v2.0 — Now with instant webhooks
          </p>

          <h1 className="mb-6 text-5xl font-black leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
            <span className="text-white">The payments infrastructure</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              developers love.
            </span>
          </h1>

          <p className="mx-auto max-w-xl text-lg text-slate-400 leading-relaxed">
            Build powerful payment experiences with clean APIs, reliable webhooks, and an
            integration your customers will notice.
          </p>
        </div>

        {/* CTA buttons */}
        <div className="mb-20 flex items-center gap-4">
          <Link
            href="/docs"
            className="group inline-flex h-12 items-center gap-2 rounded-full bg-blue-500 px-7 font-semibold text-white shadow-[0_0_40px_rgba(37,99,235,0.4)] transition-all hover:bg-blue-400 hover:shadow-[0_0_60px_rgba(37,99,235,0.5)]"
          >
            Start building
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/docs/api-reference"
            className="inline-flex h-12 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10"
          >
            View API reference
          </Link>
        </div>

        {/* Features row */}
        <div className="mb-16 grid w-full max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
          {features.map(({ icon: Icon, label, sub }) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.03] p-4 backdrop-blur-sm"
            >
              <div className="flex size-10 items-center justify-center rounded-xl bg-blue-500/10">
                <Icon className="size-5 text-blue-400" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{label}</p>
                <p className="text-xs text-slate-500">{sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Code flow */}
        <div className="w-full max-w-4xl">
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden">
            <div className="flex items-center gap-2 border-b border-white/5 px-5 py-4">
              <div className="size-3 rounded-full bg-red-500/60" />
              <div className="size-3 rounded-full bg-yellow-400/60" />
              <div className="size-3 rounded-full bg-emerald-500/60" />
              <span className="ml-4 text-xs font-mono text-slate-500">integration steps</span>
            </div>
            <div className="grid grid-cols-1 divide-y divide-white/5 md:grid-cols-3 md:divide-y-0 md:divide-x">
              {steps.map(({ num, title, code }) => (
                <div key={num} className="p-6">
                  <p className="mb-3 font-mono text-xs text-blue-400">{num}</p>
                  <p className="mb-4 text-sm font-semibold text-white">{title}</p>
                  <div className="rounded-xl border border-white/5 bg-black/40 p-3">
                    <code className="text-xs font-mono text-slate-300 leading-relaxed">{code}</code>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#030611] to-transparent pointer-events-none" />
    </main>
  );
}