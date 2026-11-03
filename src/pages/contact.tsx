import { FormEvent, useState } from 'react';
import { PageShell } from '@/components/ui/PageShell';
import { company } from '@/data/company';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = String(form.get('email') || '');
    const name = String(form.get('name') || '');

    if (!name.trim() || !email.trim()) {
      setStatus('error');
      return;
    }

    setLoading(true);
    setStatus('idle');

    await new Promise((resolve) => setTimeout(resolve, 700));

    setLoading(false);
    setStatus('success');
    event.currentTarget.reset();
  };

  return (
    <PageShell title="Contact Us | Lakshya Software Technologies" description="Contact Lakshya to discuss enterprise, engineering, cloud, and digital technology requirements.">
      <section className="mx-auto max-w-container px-4 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-blue-300">Contact</div>
            <h1 className="mt-4 font-display text-5xl font-semibold tracking-[-0.06em] text-white">Tell us about your project.</h1>
            <div className="mt-8 space-y-4 text-slate-300">
              <p><span className="font-medium text-white">Email:</span> {company.email}</p>
              <p><span className="font-medium text-white">Phone:</span> {company.phone}</p>
              <p><span className="font-medium text-white">Address:</span> {company.address}</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-[28px] border border-white/10 bg-white/5 p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm text-slate-300">
                Name
                <input name="name" required className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-500 focus:border-blue-500" placeholder="Your name" />
              </label>
              <label className="text-sm text-slate-300">
                Email
                <input name="email" type="email" required className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-blue-500" placeholder="you@example.com" />
              </label>
              <label className="sm:col-span-2 text-sm text-slate-300">
                Company
                <input name="company" className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-blue-500" placeholder="Business name" />
              </label>
              <label className="sm:col-span-2 text-sm text-slate-300">
                Project details
                <textarea name="message" rows={5} required className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-blue-500" placeholder="Tell us about your needs" />
              </label>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <button type="submit" disabled={loading} className="rounded-full bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-500 disabled:opacity-70">
                {loading ? 'Sending...' : 'Send Enquiry'}
              </button>
              {status === 'success' && <span className="text-sm text-emerald-300">Thanks! Your message has been prepared for integration.</span>}
              {status === 'error' && <span className="text-sm text-red-300">Please provide your name and email.</span>}
            </div>
          </form>
        </div>
      </section>
    </PageShell>
  );
}
