import { ChartNoAxesCombined, Factory, Settings, TrendingUp, type LucideIcon } from 'lucide-react';
import Reveal from '../components/Reveal';
import { growthMilestones } from '../data/company';

const milestoneIcons: Record<string, LucideIcon> = {
  'chart-no-axes-combined': ChartNoAxesCombined,
  'trending-up': TrendingUp,
  settings: Settings,
  factory: Factory,
};

function MilestoneBadge({ icon, number }: { icon: string; number: string }) {
  const Icon = milestoneIcons[icon];
  return (
    <span className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-forest text-leaf shadow-[0_22px_45px_-28px_rgba(23,63,43,0.95)] ring-4 ring-brand/15 transition duration-300 group-hover:bg-brand group-hover:ring-brand/25">
      <Icon size={26} aria-hidden="true" />
      <span className="absolute -right-1 -top-1 flex h-7 min-w-7 items-center justify-center rounded-full bg-accent px-1 text-[0.62rem] font-extrabold tracking-wide text-white ring-2 ring-white">
        {number}
      </span>
    </span>
  );
}

export default function AimToScaleSection() {
  return (
    <section id="scaleup" className="section-pad bg-white">
      <div className="container-x">
        <Reveal>
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
            <span className="h-[2px] w-8 shrink-0 bg-accent sm:w-10" aria-hidden="true" />
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-forest sm:text-3xl">
              Aim To Scale Up Plan
            </h2>
            <span
              className="h-px flex-1 bg-gradient-to-r from-accent/60 via-accent/20 to-transparent"
              aria-hidden="true"
            />
          </div>
        </Reveal>

        <ol className="relative mt-12 hidden gap-6 md:grid md:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          <span
            className="pointer-events-none absolute left-[11.6%] right-[11.6%] top-8 hidden h-px bg-gradient-to-r from-brand/35 via-brand/20 to-brand/35 lg:block"
            aria-hidden="true"
          />
          {growthMilestones.map((milestone, index) => (
            <li key={milestone.number}>
              <Reveal delay={index * 70} className="h-full">
                <div className="group flex h-full flex-col items-center text-center">
                  <MilestoneBadge icon={milestone.icon} number={milestone.number} />
                  <div className="mt-5 flex w-full flex-1 flex-col rounded-2xl border border-forest/10 bg-cream px-5 py-5 transition duration-300 group-hover:-translate-y-1 group-hover:border-brand/25 group-hover:shadow-[0_30px_60px_-45px_rgba(23,63,43,0.9)]">
                    <h3 className="font-display text-base font-extrabold leading-snug tracking-tight text-forest sm:text-[1.05rem]">
                      {milestone.title}
                    </h3>
                    <p className="mt-2 text-[0.9rem] leading-relaxed text-ink/70">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <div className="mt-12 md:hidden">
          <ol className="flex flex-col gap-5">
            {growthMilestones.map((milestone, index) => (
              <li key={milestone.number}>
                <Reveal delay={index * 60}>
                  <div className="group relative flex items-start gap-4">
                    {index < growthMilestones.length - 1 && (
                      <span
                        className="pointer-events-none absolute left-8 top-8 h-[calc(100%+1.25rem)] w-px bg-brand/20"
                        aria-hidden="true"
                      />
                    )}
                    <MilestoneBadge icon={milestone.icon} number={milestone.number} />
                    <div className="flex-1 rounded-2xl border border-forest/10 bg-cream px-4 py-4 text-left transition duration-300 group-hover:border-brand/25">
                      <h3 className="font-display text-base font-extrabold leading-snug tracking-tight text-forest">
                        {milestone.title}
                      </h3>
                      <p className="mt-1.5 text-[0.9rem] leading-relaxed text-ink/70">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
