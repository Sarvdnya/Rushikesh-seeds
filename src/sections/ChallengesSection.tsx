import { CalendarRange, Leaf, ShieldCheck, Truck, Users } from 'lucide-react';
import Reveal from '../components/Reveal';
import { challenges } from '../data/company';

const icons = {
  'shield-check': ShieldCheck,
  users: Users,
  truck: Truck,
  'calendar-range': CalendarRange,
} as const;

export default function ChallengesSection() {
  return (
    <section id="challenges" className="section-pad relative overflow-hidden bg-mint">
      <div
        className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-leaf/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-28 -right-20 h-72 w-72 rounded-full bg-brand/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-x relative">
        <Reveal className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand/10 text-brand">
              <Leaf size={16} aria-hidden="true" />
            </span>
            <span className="h-px w-10 bg-brand/40" aria-hidden="true" />
            <span className="eyebrow">Key Challenges</span>
          </div>
          <h2 className="h2 mt-5 text-forest">
            Key Challenges in Seed Manufacturing &amp; Agri-Input Industry
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink/70 md:text-lg">
            Understanding the challenges that shape seed quality, farmer access, and reliable
            agricultural supply.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:gap-6">
          {challenges.map((challenge, index) => {
            const Icon = icons[challenge.icon];
            const featured = index === challenges.length - 1;
            return (
              <Reveal key={challenge.id} delay={index * 80} className="h-full">
                <article
                  className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_35px_65px_-48px_rgba(23,63,43,0.9)] sm:p-8 ${
                    featured
                      ? 'border-brand/25 bg-gradient-to-br from-mint via-white to-mint hover:border-brand/50'
                      : 'border-forest/10 bg-white hover:border-brand/40'
                  }`}
                >
                  <span
                    className={`absolute inset-y-0 left-0 w-1 transition-all duration-300 ${
                      featured
                        ? 'bg-gradient-to-b from-brand to-leaf'
                        : 'bg-brand/25 group-hover:bg-brand/70'
                    }`}
                    aria-hidden="true"
                  />
                  {featured ? (
                    <span
                      className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full border border-brand/15"
                      aria-hidden="true"
                    />
                  ) : null}

                  <div className="relative flex items-start justify-between gap-4">
                    <span className="inline-flex h-9 items-center justify-center rounded-lg border border-forest/10 bg-mint px-2.5 font-display text-xs font-extrabold tracking-[0.12em] text-brand">
                      {challenge.number}
                    </span>
                    <span
                      className={`inline-flex h-12 w-12 items-center justify-center rounded-xl border transition-colors duration-300 ${
                        featured
                          ? 'border-brand bg-brand text-white'
                          : 'border-brand/25 text-brand group-hover:bg-brand group-hover:text-white'
                      }`}
                    >
                      <Icon size={22} aria-hidden="true" />
                    </span>
                  </div>

                  <h3 className="relative mt-6 font-display text-lg font-extrabold leading-snug tracking-tight text-forest">
                    {challenge.title}
                  </h3>
                  <p className="relative mt-3 text-[0.95rem] leading-relaxed text-ink/70">
                    {challenge.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
