import Link from 'next/link';
import {
  ArrowDownRight,
  ArrowRight,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  Cpu,
  Layers3,
  Sparkles,
  Star,
  UsersRound,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { PageShell } from '@/components/ui/PageShell';

const orbitCards = [
  {
    className: 'left-[1%] top-[6%] w-[175px] sm:left-[5%] sm:w-[205px]',
    icon: BrainCircuit,
    title: 'Prime vendor',
    metric: 'IT Solutions',
    detail: 'Enterprise delivery',
    color: 'text-sky-200 bg-sky-300/20',
  },
  {
    className: 'right-[0%] top-[22%] w-[174px] sm:right-[3%] sm:w-[205px]',
    icon: UsersRound,
    title: 'Talent',
    metric: '450+',
    detail: 'Active professionals',
    color: 'text-violet-200 bg-violet-300/20',
  },
  {
    className: 'left-[2%] bottom-[23%] w-[174px] sm:left-[4%] sm:w-[195px]',
    icon: CheckCircle2,
    title: 'Projects',
    metric: '300+',
    detail: 'Delivered',
    color: 'text-emerald-100 bg-emerald-300/20',
  },
  {
    className: 'right-[0%] bottom-[4%] w-[180px] sm:right-[3%] sm:w-[215px]',
    icon: BriefcaseBusiness,
    title: 'Retail AI',
    metric: '94%',
    detail: 'Forecast accuracy',
    color: 'text-emerald-100 bg-emerald-300/20',
  },
];

export default function HomePage() {
  return (
    <PageShell
      title="Lakshya Software Technologies"
      description="Technology consulting, engineering, software, and talent solutions to help businesses move forward."
    >
      <section className="hero-photo relative isolate flex min-h-[calc(100vh-76px)] items-center overflow-hidden text-white">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_76%_45%,rgba(75,157,255,0.28),transparent_38%),linear-gradient(180deg,rgba(8,19,40,0.08),rgba(8,19,40,0.25))]" />
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-20 [background-image:linear-gradient(rgba(220,237,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(220,237,255,.12)_1px,transparent_1px)] [background-size:80px_80px] [mask-image:linear-gradient(90deg,transparent,black)]" />

        <div className="mx-auto grid w-full max-w-container items-center gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-0 lg:px-8 lg:py-12">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 max-w-xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/10 px-4 py-2 text-xs font-semibold tracking-wide text-white shadow-lg backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-cyan-200" />
              Technology consulting &amp; talent partner
            </div>
            <p className="mt-7 text-lg font-semibold text-white/90 sm:text-xl">Enterprise Technology Partner</p>
            <h1 className="mt-2 font-display text-5xl font-bold leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              We Build
              <span className="block font-serif italic font-semibold text-cyan-200">Futures</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-blue-50/90 sm:text-lg sm:leading-8">
              We bring technology, engineering, and people together to help ambitious teams solve real business challenges.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {['Software solutions', 'Engineering', 'Talent consulting'].map((capability, index) => (
                <span key={capability} className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/95 backdrop-blur-sm">
                  <span className={`h-1.5 w-1.5 rounded-full ${index === 1 ? 'bg-violet-200' : index === 2 ? 'bg-emerald-200' : 'bg-sky-200'}`} />
                  {capability}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/solutions"
                className="group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-blue-700 shadow-lg transition duration-200 hover:-translate-y-0.5 hover:bg-blue-50"
              >
                Explore solutions
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/50 bg-white/10 px-5 py-3 font-semibold text-white backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:bg-white/20"
              >
                Schedule consultation
              </Link>
            </div>
            <Link href="/careers" className="group mt-3 inline-flex items-center gap-2 rounded-lg border border-white/25 bg-blue-300/20 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-blue-300/30">
              Join our talent network
              <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.12 }}
            className="relative mx-auto h-[410px] w-full max-w-[690px] sm:h-[500px] lg:h-[590px]"
            aria-label="Illustration of connected engineering, talent, and technology capabilities"
          >
            <div className="orbit-ring absolute left-1/2 top-1/2 h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 sm:h-[360px] sm:w-[360px] lg:h-[410px] lg:w-[410px]" />
            <div className="orbit-ring-dashed absolute left-1/2 top-1/2 h-[335px] w-[335px] -translate-x-1/2 -translate-y-1/2 sm:h-[440px] sm:w-[440px] lg:h-[510px] lg:w-[510px]" />
            <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/10 blur-3xl sm:h-[300px] sm:w-[300px]" />
            <div className="dashboard-float absolute left-1/2 top-1/2 z-10 flex h-[68px] w-[68px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-white/40 bg-white/20 text-white shadow-[0_14px_45px_rgba(4,20,50,.28)] backdrop-blur-xl sm:h-[82px] sm:w-[82px]">
              <Cpu className="h-8 w-8 sm:h-10 sm:w-10" />
            </div>

            <div className="absolute left-[13%] top-[33%] hidden h-3 w-3 rounded-full bg-cyan-200 shadow-[0_0_24px_rgba(103,232,249,.9)] sm:block" />
            <div className="absolute right-[17%] top-[14%] hidden h-2.5 w-2.5 rounded-full bg-amber-200 shadow-[0_0_22px_rgba(253,230,138,.9)] sm:block" />
            <div className="absolute bottom-[18%] right-[22%] hidden h-3 w-3 rounded-full bg-violet-200 shadow-[0_0_24px_rgba(196,181,253,.9)] sm:block" />

            {orbitCards.map(({ className, icon: Icon, title, metric, detail, color }) => (
              <div key={title} className={`network-card absolute z-20 rounded-2xl border border-white/40 bg-white/25 p-3.5 shadow-[0_18px_48px_rgba(4,20,50,.22)] backdrop-blur-xl sm:p-4 ${className}`}>
                <div className="flex items-center gap-2.5">
                  <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl ${color}`}>
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="min-w-0 truncate text-xs font-bold text-white sm:text-sm">{title}</span>
                </div>
                <div className="mt-2 font-display text-xl font-bold leading-tight text-white sm:text-2xl">{metric}</div>
                <div className="mt-0.5 truncate text-[10px] text-blue-50/85 sm:text-xs">{detail}</div>
                {title === 'Retail AI' && (
                  <>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/25">
                      <div className="dashboard-bar h-full w-[88%] rounded-full bg-emerald-300" />
                    </div>
                    <div className="mt-1 text-[9px] text-emerald-100">Stockout ↓ &nbsp; −42%</div>
                  </>
                )}
              </div>
            ))}

            <div className="network-card absolute left-[36%] top-[1%] z-20 w-[175px] rounded-2xl border border-white/40 bg-white/25 p-3.5 shadow-[0_18px_48px_rgba(4,20,50,.22)] backdrop-blur-xl sm:left-[36%] sm:w-[205px] sm:p-4">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-300/25 text-amber-100">
                    <BrainCircuit className="h-4 w-4" />
                  </span>
                  <span className="text-xs font-bold text-white">Medical AI</span>
                </div>
                <span className="rounded-full bg-emerald-300/25 px-2 py-1 text-[9px] font-bold text-emerald-100">LIVE</span>
              </div>
              <div className="mt-3 flex items-center justify-between text-[10px] text-blue-50/85">
                <span>Coding Accuracy</span>
                <span className="font-bold text-white">95%+</span>
              </div>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/25">
                <div className="dashboard-bar h-full w-[95%] rounded-full bg-gradient-to-r from-sky-300 to-emerald-200" />
              </div>
              <div className="mt-2.5 flex items-center justify-between text-[9px] text-blue-50/80">
                <span>Claims/day</span>
                <span className="font-semibold text-white">2,400+</span>
              </div>
              <div className="mt-1 flex items-center justify-between text-[9px] text-blue-50/80">
                <span>Revenue ↑</span>
                <span className="font-semibold text-emerald-100">+34%</span>
              </div>
            </div>

            <div className="absolute bottom-0 left-1/2 z-30 w-max -translate-x-1/2 rounded-2xl border border-emerald-200/30 bg-slate-950/65 px-4 py-2.5 shadow-xl backdrop-blur-xl sm:left-[32%] sm:translate-x-0">
              <div className="flex items-center gap-2 text-xs font-semibold text-white">
                <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,.8)]" />
                <Star className="h-3.5 w-3.5 fill-amber-200 text-amber-200" />
                19+ Clients
              </div>
            </div>

            <div className="absolute bottom-[1%] left-[12%] z-30 hidden rounded-xl border border-white/35 bg-sky-300/25 px-3 py-2 text-[10px] font-semibold text-white shadow-lg backdrop-blur sm:block">
              Tier-1 IT staffing
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-14 text-slate-900 sm:py-16">
        <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">What we do</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">Technology and talent, working together.</h2>
            <p className="mt-4 leading-relaxed text-slate-600">Explore our core capabilities and find the right starting point for your next initiative.</p>
          </div>
          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {[
              { title: 'Technology solutions', description: 'Software, cloud, enterprise platforms, and intelligent applications.', href: '/solutions', icon: Layers3 },
              { title: 'Engineering services', description: 'Embedded systems, VLSI, IoT, and system design capabilities.', href: '/services', icon: Cpu },
              { title: 'Talent & careers', description: 'Connect with our team and explore opportunities to grow together.', href: '/careers', icon: UsersRound },
            ].map(({ title, description, href, icon: Icon }) => (
              <Link key={title} href={href} className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-xl">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
