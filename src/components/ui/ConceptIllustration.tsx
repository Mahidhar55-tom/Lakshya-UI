import type { LucideIcon } from 'lucide-react';

type ConceptIllustrationProps = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  compact?: boolean;
};

export function ConceptIllustration({ icon: Icon, title, subtitle, compact = false }: ConceptIllustrationProps) {
  return (
    <div
      role="img"
      aria-label={`${title}: ${subtitle}`}
      className={`relative isolate flex overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/15 via-slate-900 to-emerald-500/10 ${compact ? 'h-28 items-center gap-4 p-4' : 'min-h-64 flex-col justify-between p-5'}`}
    >
      <div className="pointer-events-none absolute -right-7 -top-10 -z-10 h-40 w-40 rounded-full bg-blue-400/10 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-12 left-1/4 -z-10 h-36 w-36 rounded-full bg-emerald-300/10 blur-2xl" />

      <div className={`flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.07] text-emerald-200 shadow-lg ${compact ? 'h-12 w-12 shrink-0' : 'h-14 w-14'}`}>
        <Icon className={compact ? 'h-6 w-6' : 'h-7 w-7'} aria-hidden="true" />
      </div>

      <div className={compact ? 'min-w-0' : 'mt-7'}>
        <p className="truncate font-display text-base font-semibold text-white">{title}</p>
        <p className={`text-slate-300 ${compact ? 'mt-0.5 truncate text-xs' : 'mt-1 text-sm leading-relaxed'}`}>{subtitle}</p>
      </div>

      {!compact && (
        <div className="mt-5 flex items-center gap-2" aria-hidden="true">
          <span className="h-1.5 w-12 rounded-full bg-blue-300/75" />
          <span className="h-1.5 w-8 rounded-full bg-emerald-300/75" />
          <span className="h-1.5 w-5 rounded-full bg-violet-300/75" />
        </div>
      )}
    </div>
  );
}
