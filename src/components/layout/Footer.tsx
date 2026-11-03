import Link from 'next/link';
import { company } from '@/data/company';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-bg py-10">
      <div className="mx-auto grid max-w-container gap-8 px-4 md:grid-cols-2 lg:grid-cols-5 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/15 text-lg font-semibold text-blue-300">L</div>
            <div>
              <div className="font-display text-lg font-semibold">Lakshya</div>
            </div>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">{company.description}</p>
        </div>
        <div>
          <h3 className="font-medium text-white">Solutions</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-400 [&_a]:transition-colors [&_a:hover]:text-emerald-300">
            <li><Link href="/solutions/vlsi-engineering-silicon-design">VLSI Engineering</Link></li>
            <li><Link href="/solutions/embedded-systems">Embedded Systems</Link></li>
            <li><Link href="/solutions/iot">IoT</Link></li>
            <li><Link href="/solutions/system-design-engineering">System Design</Link></li>
            <li><Link href="/solutions/automotive-smart-solutions">Automotive Solutions</Link></li>
            <li><Link href="/solutions/ai-advanced-analytics">AI &amp; Analytics</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium text-white">Services</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-400 [&_a]:transition-colors [&_a:hover]:text-emerald-300">
            <li><Link href="/services/software-development">Software Development</Link></li>
            <li><Link href="/services/erp-crm">ERP &amp; CRM</Link></li>
            <li><Link href="/services/cloud-services">Cloud Services</Link></li>
            <li><Link href="/services/business-process-management">BPM</Link></li>
            <li><Link href="/services/human-capital-management">HCM</Link></li>
            <li><Link href="/services/ai-machine-learning">AI &amp; ML</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium text-white">Company</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-400 [&_a]:transition-colors [&_a:hover]:text-emerald-300">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium text-white">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-400">
            <li><a href={`mailto:${company.email}`}>{company.email}</a></li>
            <li><a href={`tel:${company.phone.replace(/\s+/g, '')}`}>{company.phone}</a></li>
            <li>{company.address}</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-8 flex max-w-container items-center justify-between border-t border-white/10 px-4 pt-6 text-sm text-slate-400 lg:px-8">
        <span>© {new Date().getFullYear()} Lakshya Software Technologies.</span>
        <span>All rights reserved.</span>
      </div>
    </footer>
  );
}
