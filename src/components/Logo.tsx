import { company } from '../data/company';

type LogoProps = {
  tone?: 'dark' | 'light';
  className?: string;
};

export default function Logo({ tone = 'dark', className = '' }: LogoProps) {
  const isLight = tone === 'light';

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 64 64" className="h-9 w-9 shrink-0" role="img" aria-label={`${company.name} logo`}>
        <rect width="64" height="64" rx="16" fill={isLight ? '#F7F6EF' : '#173F2B'} />
        <path d="M32 50V27" stroke="#79B84A" strokeWidth="4.5" strokeLinecap="round" />
        <path d="M32 30c0-9.4 7.6-17 17-17 0 9.4-7.6 17-17 17Z" fill="#79B84A" />
        <path d="M32 38c-8.3 0-15-6.7-15-15 8.3 0 15 6.7 15 15Z" fill="#287A43" />
        <circle cx="32" cy="51" r="3.4" fill={isLight ? '#173F2B' : '#F7F6EF'} />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.05rem] font-extrabold tracking-tight sm:text-lg ${
            isLight ? 'text-white' : 'text-forest'
          }`}
        >
          Rushikesh <span className={isLight ? 'text-leaf' : 'text-brand'}>Seeds</span>
        </span>
        <span
          className={`mt-1 hidden text-[0.6rem] font-semibold uppercase tracking-[0.18em] sm:block ${
            isLight ? 'text-white/60' : 'text-ink/55'
          }`}
        >
          Jalna · Maharashtra
        </span>
      </span>
    </span>
  );
}
