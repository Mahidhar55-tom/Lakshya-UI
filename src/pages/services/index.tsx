import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageShell } from '@/components/ui/PageShell';
import { serviceCatalog } from '@/data/company';

export default function ServicesOverviewPage() {
  return (
    <PageShell title="Services | Lakshya Software Technologies" description="Explore Lakshya's software, enterprise, cloud, AI, business, and engineering services.">
      <section className="mx-auto max-w-container px-4 py-16 lg:px-8">
        <nav className="mb-8 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-blue-300">Home</Link>
            <span>/</span>
            <span className="text-slate-200">Services</span>
          </div>
        </nav>

        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.2em] text-blue-300">Services overview</div>
          <h1 className="mt-4 font-display text-5xl font-semibold tracking-[-0.06em] text-white">Technology services designed around business continuity and growth.</h1>
          <p className="mt-6 text-lg text-slate-300">Lakshya supports enterprise transformation through software engineering, process optimization, cloud enablement, digital services, and specialized consulting.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {serviceCatalog.map((service) => (
            <article key={service.slug} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="font-display text-2xl font-semibold text-white">{service.title}</h2>
              <p className="mt-4 text-base leading-relaxed text-slate-300">{service.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {service.capabilities.slice(0, 2).map((cap) => (
                  <span key={cap} className="rounded-full border border-white/10 bg-slate-950/60 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-slate-300">{cap}</span>
                ))}
              </div>
              <Link href={`/services/${service.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-blue-300 transition hover:text-blue-200">
                Explore Service <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
