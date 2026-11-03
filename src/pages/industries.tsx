import Link from 'next/link';
import { BriefcaseBusiness, Cpu, Factory, GraduationCap, Landmark, Settings2 } from 'lucide-react';
import { PageShell } from '@/components/ui/PageShell';
import { ConceptIllustration } from '@/components/ui/ConceptIllustration';
import { industryCatalog } from '@/data/company';

const industryIcons = [Settings2, BriefcaseBusiness, Factory, Cpu, GraduationCap, Landmark];

export default function IndustriesPage() {
  return (
    <PageShell title="Industries | Lakshya Software Technologies" description="Industries served by Lakshya, supported by verified business areas and technology focus.">
      <section className="mx-auto max-w-container px-4 py-16 lg:px-8">
        <nav className="mb-8 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-blue-300">Home</Link>
            <span>/</span>
            <span className="text-slate-200">Industries</span>
          </div>
        </nav>

        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.2em] text-blue-300">Industries we serve</div>
          <h1 className="mt-4 font-display text-5xl font-semibold tracking-[-0.06em] text-white">Technology support for sectors shaped by operational complexity.</h1>
          <p className="mt-6 text-lg text-slate-300">Lakshya works across business areas that align with its technology, enterprise, engineering, and digital transformation capabilities.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {industryCatalog.map((industry, index) => (
            <article key={industry} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="mb-5">
                <ConceptIllustration
                  compact
                  icon={industryIcons[index % industryIcons.length]}
                  title={industry}
                  subtitle="Technology shaped around this industry"
                />
              </div>
              <p className="mt-4 text-base leading-relaxed text-slate-300">Industry-focused digital and technology capabilities designed around operational needs and strategic modernization.</p>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
