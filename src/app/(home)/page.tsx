import Image from 'next/image';
import { cn } from '@/lib/cn';
import Link from 'next/link';
import { cva } from 'class-variance-authority';
import {
  BatteryChargingIcon,
  FileIcon,
  FileTextIcon,
  Heart,
  SearchIcon,
  TerminalIcon,
  TimerIcon,
  CreditCard,
  Zap,
  ShieldCheck,
  Code2,
  Cpu
} from 'lucide-react';

const headingVariants = cva('font-medium tracking-tight', {
  variants: {
    variant: {
      h2: 'text-3xl lg:text-4xl',
      h3: 'text-xl lg:text-2xl',
    },
  },
});

const buttonVariants = cva(
  'inline-flex items-center justify-center px-5 py-3 rounded-full font-medium tracking-tight transition-colors',
  {
    variants: {
      variant: {
        primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-500/20',
        secondary: 'border border-fd-border bg-fd-secondary text-fd-secondary-foreground hover:bg-fd-accent',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

const cardVariants = cva('rounded-2xl text-sm p-6 shadow-lg relative overflow-hidden', {
  variants: {
    variant: {
      secondary: 'bg-blue-950/30 border border-blue-900/50 text-blue-100',
      default: 'border border-fd-border bg-fd-card/50 backdrop-blur-sm text-fd-card-foreground',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export default function Page() {
  return (
    <main className="text-fd-foreground pt-4 pb-6 md:pb-12 bg-fd-background min-h-screen">
      {/* HERO SECTION */}
      <div className="relative flex min-h-[600px] h-[75vh] max-h-[900px] border border-fd-border/50 rounded-[2.5rem] overflow-hidden mx-auto w-full max-w-[1400px] bg-fd-card/30 backdrop-blur-xl shadow-2xl">
        {/* Animated/Gradient Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/20 via-fd-background to-fd-background -z-10" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />

        <div className="flex flex-col z-10 px-4 size-full md:p-16 justify-center max-md:items-center max-md:text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400 backdrop-blur-md shadow-inner">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Ompay API v2.0 is now live
          </div>
          
          <h1 className="text-5xl my-4 leading-[1.1] font-bold tracking-tight xl:text-[5.5rem] xl:mb-8 max-w-4xl">
            Build seamless
            <br className="hidden md:block" /> payments,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500">your style</span>.
          </h1>
          
          <p className="text-lg md:text-xl text-fd-muted-foreground max-w-2xl mb-10 leading-relaxed font-light">
            The developer-first payment gateway. Complete control over your checkout experience with our elegant, composable APIs and powerful SDKs.
          </p>

          <div className="flex flex-row items-center justify-start gap-4 flex-wrap w-fit">
            <Link href="/docs" className={cn(buttonVariants(), 'max-sm:text-sm px-8 h-14 text-base')}>
              Start Integrating
            </Link>
            <Link
              href="/docs/api"
              className={cn(buttonVariants({ variant: 'secondary' }), 'max-sm:text-sm px-8 h-14 text-base')}
            >
              Explore API Reference
            </Link>
          </div>
        </div>

        {/* Abstract Hero Graphic */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 hidden lg:block opacity-80 pointer-events-none">
           <div className="absolute inset-0 bg-gradient-to-l from-fd-background to-transparent z-10" />
<div className="w-full h-full border border-blue-500/20 rounded-l-[3rem] bg-blue-500/5 backdrop-blur-sm grid grid-cols-6 grid-rows-6 gap-4 p-8 transform rotate-12 scale-125 translate-x-20">
             {Array.from({ length: 36 }).map((_, i) => (
               <div key={i} className="bg-blue-500/10 rounded-lg animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
             ))}
           </div>
        </div>
      </div>

      {/* BENTO GRID SECTION */}
      <div className="grid grid-cols-1 gap-6 mt-12 px-6 mx-auto w-full max-w-[1400px] md:px-12 lg:grid-cols-3 lg:mt-20">
        <p className="text-2xl tracking-tight leading-snug font-light col-span-full md:text-4xl xl:text-5xl text-fd-foreground mb-8">
          Ompay is a <span className="text-blue-500 font-medium">Developer-first</span> payment
          infrastructure for <span className="text-blue-500 font-medium">Modern Teams</span>. 
          Bringing powerful features for your checkout workflows, with high customizability to fit your exact needs.
        </p>

        {/* Try It Out Terminal (Spans 2 columns) */}
        <div className="relative p-1 rounded-[2rem] lg:col-span-2 z-2 overflow-hidden bg-gradient-to-br from-blue-500/20 to-transparent">
          <div className="mx-auto w-full h-full p-6 bg-fd-card/80 backdrop-blur-xl text-fd-card-foreground border border-fd-border rounded-[1.8rem] shadow-2xl flex flex-col">
            <div className="flex flex-row gap-4 items-center mb-6">
              <h2 className="text-blue-500 content-center font-mono font-bold uppercase border border-blue-500/50 bg-blue-500/10 px-4 py-1.5 rounded-full text-sm tracking-wider">
                Quickstart
              </h2>
              <div className="hidden sm:flex flex-1 bg-fd-background rounded-full px-5 py-2 font-mono text-sm text-fd-muted-foreground border border-fd-border items-center justify-between">
                <span>npm install @ompay/node</span>
                <Code2 className="size-4 text-blue-500/50" />
              </div>
            </div>

            <div className="relative bg-[#0d1117] rounded-2xl mt-auto border border-white/10 shadow-2xl overflow-hidden flex-1 flex flex-col">
              <div className="flex flex-row items-center gap-3 border-b border-white/5 p-4 text-gray-400 bg-white/[0.02]">
                <TerminalIcon className="size-4 text-blue-400" />
                <span className="text-xs font-mono tracking-wider">server.js</span>
                <div className="ms-auto flex gap-2 me-2">
                  <div className="size-3 rounded-full bg-red-500/80" />
                  <div className="size-3 rounded-full bg-yellow-500/80" />
                  <div className="size-3 rounded-full bg-green-500/80" />
                </div>
              </div>
              <div className="p-6 text-sm font-mono text-gray-300 overflow-x-auto leading-relaxed">
                <p><span className="text-purple-400">import</span> <span className="text-blue-300">Ompay</span> <span className="text-purple-400">from</span> <span className="text-green-300">'@ompay/node'</span>;</p>
                <p className="mt-4"><span className="text-purple-400">const</span> ompay = <span className="text-purple-400">new</span> <span className="text-yellow-200">Ompay</span>(process.env.<span className="text-blue-300">OMPAY_SECRET_KEY</span>);</p>
                <p className="mt-4"><span className="text-purple-400">const</span> charge = <span className="text-purple-400">await</span> ompay.charges.<span className="text-blue-200">create</span>({`{`}</p>
                <p className="pl-4">amount: <span className="text-orange-300">2000</span>, <span className="text-gray-500">// $20.00</span></p>
                <p className="pl-4">currency: <span className="text-green-300">'usd'</span>,</p>
                <p className="pl-4">source: <span className="text-green-300">'tok_visa'</span>,</p>
                <p className="pl-4">description: <span className="text-green-300">'Test Charge'</span></p>
                <p>{`});`}</p>
                <p className="mt-4"><span className="text-blue-300">console</span>.<span className="text-blue-200">log</span>(charge.status); <span className="text-gray-500">// 'succeeded'</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Framework Agnostic (1 column) */}
        <div className={cn(cardVariants(), 'flex flex-col')}>
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-2xl rounded-full" />
          <h3 className={cn(headingVariants({ variant: 'h3', className: 'mb-4' }))}>
            Language Agnostic
          </h3>
          <p className="mb-8 text-fd-muted-foreground flex-1">
            Official SDKs for Node.js, Python, PHP, Go, Ruby, and Java — portable to any stack you choose to build with. Rest easy knowing our libraries are actively maintained.
          </p>
          <div className="flex flex-row gap-4 mt-auto bg-fd-background border border-fd-border text-fd-foreground rounded-2xl p-5 items-center">
            <div className="p-3 bg-blue-500/10 rounded-xl">
              <Cpu className="size-6 text-blue-500" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm">Universal REST API</span>
              <span className="text-xs text-fd-muted-foreground">Always available</span>
            </div>
          </div>
        </div>

        {/* Composable Structure (1 column) */}
        <div className={cn(cardVariants({ className: 'flex flex-col' }))}>
          <h3 className={cn(headingVariants({ variant: 'h3', className: 'mb-4' }))}>
            A truly modular API.
          </h3>
          <p className="mb-8 text-fd-muted-foreground text-sm">
            Separated as <span className="text-blue-500 font-medium">Charges</span> →{' '}
            <span className="text-blue-500 font-medium">Customers</span> → <span className="text-blue-500 font-medium">Webhooks</span>,
            offering the high composability that engineers love. Use only what you need.
          </p>
          <div className="mt-auto flex flex-col gap-3">
            {[
              { name: 'ompay-checkout', desc: 'Drop-in UI for instant conversions.' },
              { name: 'ompay-core', desc: 'Headless API client for full control.' },
              { name: 'ompay-webhooks', desc: 'Secure event verification.' },
            ].map((item) => (
              <div key={item.name} className="flex flex-col text-sm gap-1 p-3 rounded-xl border border-fd-border bg-fd-background/50 hover:bg-fd-secondary transition-colors">
                <p className="font-mono text-blue-400 text-xs">{item.name}</p>
                <p className="text-xs text-fd-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Search Component Mock (1 column) */}
        <div className={cn(cardVariants(), 'flex flex-col')}>
          <h3 className={cn(headingVariants({ variant: 'h3', className: 'mb-4' }))}>
            Find exactly what you need.
          </h3>
          <p className="mb-6 text-fd-muted-foreground text-sm">
            Lightning fast search across all our API references, integration guides, and SDK documentation.
          </p>
          <SearchMock />
        </div>

        {/* Features List (1 column) */}
        <div className={cn(cardVariants(), 'flex flex-col border-blue-500/20 bg-blue-500/[0.02]')}>
          <Heart className="size-8 text-blue-500 mb-6" />
          <h3 className={cn(headingVariants({ variant: 'h3', className: 'mb-4' }))}>
            Built for Scale.
          </h3>
          <p className="mb-8 text-fd-muted-foreground text-sm">
            From your first transaction to your millionth, Ompay's infrastructure scales seamlessly with your business.
          </p>
          <ul className="flex flex-col gap-5 mt-auto">
            <li className="flex items-start gap-3">
              <ShieldCheck className="size-5 text-blue-500 shrink-0 mt-0.5" />
              <span className="text-sm font-medium text-fd-foreground">PCI-DSS Level 1</span>
            </li>
            <li className="flex items-start gap-3">
              <Zap className="size-5 text-blue-500 shrink-0 mt-0.5" />
              <span className="text-sm font-medium text-fd-foreground">99.99% Uptime SLA</span>
            </li>
            <li className="flex items-start gap-3">
              <CreditCard className="size-5 text-blue-500 shrink-0 mt-0.5" />
              <span className="text-sm font-medium text-fd-foreground">135+ Currencies</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

const searchItemVariants = cva('rounded-lg p-3 text-sm text-fd-foreground transition-all duration-200');

function SearchMock() {
  return (
    <div className="flex select-none flex-col mt-auto bg-fd-background rounded-2xl border border-fd-border shadow-xl overflow-hidden relative">
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-fd-background to-transparent z-10 pointer-events-none" />
      <div className="inline-flex items-center gap-3 px-5 py-4 text-sm text-fd-muted-foreground border-b border-fd-border bg-fd-card/50">
        <SearchIcon className="size-4 text-blue-500" />
        <span className="font-mono text-xs">Search documentation...</span>
      </div>
      <div className="p-2 flex flex-col gap-1">
        {[
          ['Create a Charge', 'Learn how to process a credit card.'],
          ['Authentication', 'Secure your API requests.'],
          ['Webhooks', 'Listen for asynchronous events.'],
        ].map(([title, description], i) => (
          <div key={i} className={cn(searchItemVariants(), i === 0 ? 'bg-blue-500/10 border border-blue-500/20' : 'hover:bg-fd-secondary border border-transparent')}>
            <div className="flex flex-row items-center gap-3">
              <FileTextIcon className={cn("size-4", i === 0 ? "text-blue-500" : "text-fd-muted-foreground")} />
              <p className={cn("font-medium", i === 0 && "text-blue-500")}>{title}</p>
              {i === 0 && <p className="ms-auto text-[10px] font-mono bg-blue-500/20 text-blue-500 px-2 py-1 rounded-md">Enter ↵</p>}
            </div>
            <p className={cn("text-xs mt-1 ps-7", i === 0 ? "text-blue-400" : "text-fd-muted-foreground")}>{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
