import Link from 'next/link';
import { ArrowRight, BadgeCheck, BriefcaseBusiness, Building2, Compass, ShieldCheck } from 'lucide-react';
import { PageShell } from '@/components/ui/PageShell';

const points = [
  'Customer-focused delivery and collaborative client relationships.',
  'Technology expertise spanning engineering, enterprise systems, and digital services.',
  'Customized solutions aligned to each organization’s challenges and goals.',
  'Quality-oriented implementation, support, and long-term business continuity.',
];

const companyMetrics = [
  { value: '9+', label: 'Years of field experience' },
  { value: '350+', label: 'Projects done around the world' },
  { value: '99%', label: 'Client satisfaction' },
  { value: '2015', label: 'Year established' },
  { value: '2 mins', label: 'Response time' },
];

export default function AboutPage() {
  return (
    <PageShell title="About Us | Lakshya Software Technologies" description="Learn about Lakshya Software Technologies, its business focus, and its technology-driven delivery approach.">
      <section className="mx-auto max-w-container px-4 py-16 lg:px-8">
        <nav className="mb-8 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-blue-300">Home</Link>
            <span>/</span>
            <span className="text-slate-200">About Us</span>
          </div>
        </nav>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-blue-300">Company introduction</div>
            <h1 className="mt-4 font-display text-5xl font-semibold tracking-[-0.06em] text-white">Technology expertise. Business understanding. Measurable progress.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
              Lakshya Software Technologies is a technology-focused company delivering customized digital and enterprise solutions. Its focus includes software development, engineering, technology consulting, implementation, application support, testing, maintenance, and talent acquisition.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400">
              The company brings together engineering discipline, enterprise technology understanding, and a customer-first mindset to create solutions that support long-term business growth and operational stability.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-500">
                Contact Us <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/solutions" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-medium text-white transition hover:border-blue-400/40 hover:bg-white/10">
                Explore Solutions
              </Link>
            </div>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.18),transparent_25%),linear-gradient(135deg,#101827,#0e1728)] p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <Compass className="h-8 w-8 text-blue-300" />
                <div className="mt-5 font-display text-2xl font-semibold text-white">Vision</div>
                <p className="mt-2 text-sm text-slate-300">Business aligned innovation with practical execution.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <Building2 className="h-8 w-8 text-emerald-300" />
                <div className="mt-5 font-display text-2xl font-semibold text-white">Focus</div>
                <p className="mt-2 text-sm text-slate-300">Technology capability across enterprise and engineering domains.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <BriefcaseBusiness className="h-8 w-8 text-violet-300" />
                <div className="mt-5 font-display text-2xl font-semibold text-white">Delivery</div>
                <p className="mt-2 text-sm text-slate-300">Structured development, implementation, and support.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <ShieldCheck className="h-8 w-8 text-amber-300" />
                <div className="mt-5 font-display text-2xl font-semibold text-white">Quality</div>
                <p className="mt-2 text-sm text-slate-300">Reliability, consistency, and customer confidence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[radial-gradient(ellipse_at_top,_rgba(37,99,235,0.16),transparent_65%),linear-gradient(180deg,#0b1220,#080c14)] py-16 sm:py-20">
        <div className="mx-auto max-w-container px-4 lg:px-8">
          <div className="mb-9 max-w-2xl">
            <div className="text-xs uppercase tracking-[0.2em] text-blue-300">Our impact</div>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-[-0.05em] text-white">Experience you can measure.</h2>
            <p className="mt-3 text-slate-400">A track record built through dependable delivery and lasting client relationships.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {companyMetrics.map(({ value, label }) => (
              <article key={label} className="group rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-[0_12px_40px_rgba(2,8,23,0.18)] transition duration-200 hover:-translate-y-1 hover:border-blue-400/40 hover:shadow-[0_18px_48px_rgba(37,99,235,0.12)]">
                <div className="h-1 w-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-300 transition-all group-hover:w-16" />
                <div className="mt-6 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">{value}</div>
                <p className="mt-3 min-h-12 text-sm leading-relaxed text-slate-400">{label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-950/80 py-20">
        <div className="mx-auto max-w-container px-4 lg:px-8">
          <div className="mb-8 max-w-xl">
            <div className="text-xs uppercase tracking-[0.2em] text-blue-300">What sets us apart</div>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-[-0.05em] text-white">A balanced mix of technology depth and business understanding.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {points.map((point) => (
              <div key={point} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <BadgeCheck className="h-6 w-6 text-blue-300" />
                <p className="mt-4 text-base leading-relaxed text-slate-300">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
