import { company } from '../data/company';

type LogoProps = {
  tone?: 'dark' | 'light';
  className?: string;
};

export default function Logo({ tone = 'dark', className = '' }: LogoProps) {
  const isLight = tone === 'light';

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span
        className={
          isLight
            ? 'inline-flex items-center justify-center rounded-xl bg-white p-1.5 shadow-[0_12px_28px_-22px_rgba(23,63,43,0.95)]'
            : 'inline-flex items-center'
        }
      >
        <img
          src="/1000212718.png"
          alt={`${company.name} logo`}
          width={1483}
          height={1061}
          className="h-11 w-auto sm:h-12"
          decoding="async"
        />
      </span>
    </span>
  );
}
