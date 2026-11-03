import Link from 'next/link';
import { ArrowRight, BrainCircuit, CheckCircle2, CircuitBoard, Cpu, Globe, Layers3, Rocket } from 'lucide-react';
import { PageShell } from '@/components/ui/PageShell';
import { ConceptIllustration } from '@/components/ui/ConceptIllustration';
import { solutionCatalog } from '@/data/company';

const solutionIcons = [CircuitBoard, Cpu, Globe, Layers3, Rocket, BrainCircuit];

export async function getStaticPaths() {
  return {
    paths: solutionCatalog.map((item) => ({ params: { slug: item.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const solution = solutionCatalog.find((item) => item.slug === params.slug);

  if (!solution) {
    return { notFound: true };
  }

  return {
    props: { solution },
  };
}

export default function SolutionDetailPage({ solution }: { solution: (typeof solutionCatalog)[number] }) {
  const solutionIndex = solutionCatalog.findIndex((item) => item.slug === solution.slug);
  const Icon = solutionIcons[solutionIndex % solutionIcons.length];

  return (
    <PageShell title={`${solution.title} | Lakshya Software Technologies`} description={solution.summary}>
      <section className="mx-auto max-w-container px-4 py-16 lg:px-8">
        <nav className="mb-8 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-blue-300">Home</Link>
            <span>/</span>
            <Link href="/solutions" className="hover:text-blue-300">Solutions</Link>
            <span>/</span>
            <span className="text-slate-200">{solution.title}</span>
          </div>
        </nav>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-blue-300">Solution</div>
            <h1 className="mt-4 font-display text-5xl font-semibold tracking-[-0.06em] text-white">{solution.title}</h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300">{solution.overview}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {solution.capabilities.map((cap) => (
                <span key={cap} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs uppercase tracking-[0.12em] text-slate-300">{cap}</span>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-500">
                Talk to Our Experts <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/solutions" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-medium text-white transition hover:border-blue-400/40 hover:bg-white/10">
                View All Solutions
              </Link>
            </div>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.18),transparent_25%),linear-gradient(135deg,#101827,#0e1728)] p-6">
            <ConceptIllustration
              icon={Icon}
              title={solution.title}
              subtitle={solution.summary}
            />
            <div className="mt-6">
              <div className="text-xs uppercase tracking-[0.18em] text-blue-300">Business value</div>
              <ul className="mt-4 space-y-3 text-slate-300">
                {solution.capabilities.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
