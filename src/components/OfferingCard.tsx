import { ArrowUpRight } from 'lucide-react';
import type { Offering } from '../data/company';

type OfferingCardProps = {
  offering: Offering;
  index: number;
};

export default function OfferingCard({ offering, index }: OfferingCardProps) {
  return (
    <article className="group card flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_40px_70px_-45px_rgba(23,63,43,0.95)]">
      <div className="relative aspect-[16/10] overflow-hidden bg-cream">
        <img
          src={offering.image}
          alt={offering.alt}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest/55 via-forest/5 to-transparent" />
        <span className="absolute left-4 top-4 inline-flex h-9 items-center rounded-full bg-white/90 px-3 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-forest">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <h3 className="font-display text-lg font-extrabold tracking-tight text-forest md:text-xl">
          {offering.title}
        </h3>
        <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink/70">{offering.description}</p>
        <a
          href={offering.href}
          className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full text-sm font-semibold text-brand transition-colors hover:text-forest"
          aria-label={`Learn more about ${offering.title}`}
        >
          Learn More
          <ArrowUpRight
            size={16}
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </div>
    </article>
  );
}
