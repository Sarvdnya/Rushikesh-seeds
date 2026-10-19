import Reveal from './Reveal';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  tone?: 'dark' | 'light';
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'dark',
  className = '',
}: SectionHeadingProps) {
  const isLight = tone === 'light';
  const centered = align === 'center';

  return (
    <Reveal className={`${centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'} ${className}`}>
      <p className={`eyebrow ${isLight ? 'text-leaf' : ''}`}>{eyebrow}</p>
      <h2
        className={`mt-4 font-extrabold ${isLight ? 'text-white' : 'text-ink'}`}
        style={{ fontSize: 'clamp(1.85rem, 1.15rem + 2.5vw, 2.85rem)', lineHeight: 1.1, letterSpacing: '-0.02em' }}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-5 text-base leading-relaxed md:text-lg ${isLight ? 'text-white/75' : 'text-ink/70'}`}>
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
