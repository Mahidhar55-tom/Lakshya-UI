import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight, ChevronDown, ExternalLink, Menu, X } from 'lucide-react';
import { navItems } from '@/data/company';

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 text-slate-700 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex min-h-[76px] max-w-container items-center justify-between gap-5 px-4 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2.5 text-slate-950" aria-label="Lakshya Software Technologies home">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 font-display text-xl font-bold text-blue-600">L</span>
          <span>
            <span className="block font-display text-lg font-bold leading-tight tracking-tight">Lakshya</span>
            <span className="mt-0.5 block text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-500">Software Technologies</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 text-[13px] font-medium xl:flex">
          {navItems.map((item) => (
            <div key={item.label} className="group relative">
              {item.children ? (
                <>
                  <Link href={item.href || '/'} className="flex items-center gap-1 rounded-lg px-1 py-3 transition-colors hover:text-blue-600 focus-visible:text-blue-600">
                    {item.label}
                    <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
                  </Link>
                  <div className="invisible absolute left-0 top-full z-50 w-[320px] -translate-y-1 rounded-2xl border border-slate-200 bg-white p-2 opacity-0 shadow-[0_20px_60px_rgba(15,35,70,0.16)] transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    <Link href={item.href || '/'} className="mb-1 flex items-center justify-between rounded-xl bg-blue-50 px-3 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-blue-700">
                      Explore {item.label}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                    <div className="max-h-[65vh] overflow-y-auto">
                      {item.children.map((child) => (
                        <Link key={child.label} href={child.href} className="block rounded-lg px-3 py-2.5 text-sm text-slate-600 transition hover:translate-x-0.5 hover:bg-slate-50 hover:text-blue-700">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link href={item.href || '/'} className="rounded-lg px-1 py-3 transition-colors hover:text-blue-600 focus-visible:text-blue-600">
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 xl:flex">
          <Link href="/careers" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-blue-700">
            Join Talent Network
          </Link>
          <a href="https://portal.lakshya-tech.com/#/" className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3.5 py-2.5 text-xs font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700">
            <ExternalLink className="h-3.5 w-3.5" />
            Login
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 xl:hidden"
          onClick={() => setOpen((state) => !state)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div id="mobile-navigation" className="border-t border-slate-200 bg-white xl:hidden">
          <nav className="mx-auto max-w-container space-y-1 px-4 py-4 text-sm">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <div className="rounded-xl border border-slate-100 p-3">
                    <Link href={item.href || '/'} className="mb-1 inline-flex px-2 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-blue-700" onClick={() => setOpen(false)}>
                      {item.label} overview
                    </Link>
                    {item.children.map((child) => (
                      <Link key={child.label} href={child.href} className="block rounded-lg px-2 py-2 text-slate-600 hover:bg-slate-50 hover:text-blue-700" onClick={() => setOpen(false)}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link href={item.href || '/'} className="block rounded-xl px-3 py-2.5 text-slate-700 hover:bg-blue-50 hover:text-blue-700" onClick={() => setOpen(false)}>
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Link href="/careers" className="mt-2 block rounded-xl bg-blue-600 px-3 py-3 text-center font-semibold text-white" onClick={() => setOpen(false)}>
              Join Talent Network
            </Link>
            <a href="https://portal.lakshya-tech.com/#/" className="mt-2 flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-3 py-3 font-semibold text-slate-700">
              <ExternalLink className="h-4 w-4" />
              Login
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
