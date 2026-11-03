import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageShell } from '@/components/ui/PageShell';

const jobs = [
  { title: 'Software Engineer', location: 'Hyderabad', type: 'Full-time' },
  { title: 'Business Analyst', location: 'Remote', type: 'Full-time' },
  { title: 'Technical Consultant', location: 'Hybrid', type: 'Project-based' },
];

export default function CareersPage() {
  return (
    <PageShell title="Careers | Lakshya Software Technologies" description="Explore career opportunities and technology roles at Lakshya Software Technologies.">
      <section className="mx-auto max-w-container px-4 py-16 lg:px-8">
        <nav className="mb-8 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-blue-300">Home</Link>
            <span>/</span>
            <span className="text-slate-200">Careers</span>
          </div>
        </nav>

        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.2em] text-blue-300">Careers</div>
          <h1 className="mt-4 font-display text-5xl font-semibold tracking-[-0.06em] text-white">Build your future with Lakshya.</h1>
          <p className="mt-6 text-lg text-slate-300">Lakshya values technology professionals who enjoy collaborative work, continuous learning, and meaningful contribution across enterprise and engineering projects.</p>
        </div>

        <div className="mt-12 space-y-5">
          {jobs.map((job) => (
            <article key={job.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 lg:flex lg:items-center lg:justify-between">
              <div>
                <div className="font-display text-2xl font-semibold text-white">{job.title}</div>
                <div className="mt-3 flex flex-wrap gap-2 text-sm text-slate-300">
                  <span className="rounded-full border border-white/10 bg-slate-950/60 px-2.5 py-1">{job.location}</span>
                  <span className="rounded-full border border-white/10 bg-slate-950/60 px-2.5 py-1">{job.type}</span>
                </div>
              </div>
              <button className="mt-5 inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 font-medium text-white transition hover:bg-blue-500 lg:mt-0">
                Apply Now <ArrowRight className="h-4 w-4" />
              </button>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
