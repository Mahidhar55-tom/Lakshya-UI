import Link from 'next/link';
import { PageShell } from '@/components/ui/PageShell';

export default function Custom404() {
  return (
    <PageShell title="Page Not Found | Lakshya Software Technologies" description="The requested page could not be found.">
      <section className="mx-auto max-w-container px-4 py-24 text-center lg:px-8">
        <div className="text-xs uppercase tracking-[0.2em] text-blue-300">404</div>
        <h1 className="mt-4 font-display text-5xl font-semibold tracking-[-0.06em] text-white">Page not found</h1>
        <p className="mt-4 text-lg text-slate-300">The page you are looking for does not exist or has moved.</p>
        <Link href="/" className="mt-8 inline-flex items-center rounded-full bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-500">
          Back to Home
        </Link>
      </section>
    </PageShell>
  );
}
