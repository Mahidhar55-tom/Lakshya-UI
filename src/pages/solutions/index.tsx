import Link from 'next/link';
import { ArrowRight, BrainCircuit, CircuitBoard, Cpu, Globe, Layers3, Rocket } from 'lucide-react';
import { PageShell } from '@/components/ui/PageShell';
import { ConceptIllustration } from '@/components/ui/ConceptIllustration';
import { solutionCatalog } from '@/data/company';

const solutionIcons = [CircuitBoard, Cpu, Globe, Layers3, Rocket, BrainCircuit];

export default function SolutionsOverviewPage() {
  return (
    <PageShell title="Solutions | Lakshya Software Technologies" description="Explore Lakshya's technology solutions spanning VLSI, IoT, embedded systems, automotive, AI, and system design.">
      <section className="mx-auto max-w-container px-4 py-16 lg:px-8">
        <nav className="mb-8 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-blue-300">Home</Link>
            <span>/</span>
            <span className="text-slate-200">Solutions</span>
          </div>
        </nav>

        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.2em] text-blue-300">Solutions overview</div>
          <h1 className="mt-4 font-display text-5xl font-semibold tracking-[-0.06em] text-white">Integrated technology solutions for modern enterprises.</h1>
          <p className="mt-6 text-lg text-slate-300">Lakshya supports digital transformation, engineering programs, connected systems, and intelligent business operations across a broad technology landscape.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {solutionCatalog.map((solution, index) => {
            const Icon = solutionIcons[index % solutionIcons.length];
            return (
              <article key={solution.slug} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="mb-5">
                  <ConceptIllustration
                    compact
                    icon={Icon}
                    title={solution.title}
                    subtitle={solution.capabilities.slice(0, 2).join(' · ')}
                  />
                </div>
                <p className="text-base leading-relaxed text-slate-300">{solution.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {solution.capabilities.slice(0, 2).map((cap) => (
                    <span key={cap} className="rounded-full border border-white/10 bg-slate-950/60 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-slate-300">{cap}</span>
                  ))}
                </div>
                <Link href={`/solutions/${solution.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-blue-300 transition hover:text-blue-200">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            );
          })}
        </div>
      </section>
    </PageShell>
  );
}
