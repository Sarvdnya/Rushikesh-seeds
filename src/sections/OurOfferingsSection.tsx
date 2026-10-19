import Reveal from '../components/Reveal';
import { expertise, offeringTimeline, valueAdded } from '../data/company';

type FeatureGroupProps = {
  label: string;
  items: string[];
  delay?: number;
};

function FeatureGroup({ label, items, delay = 0 }: FeatureGroupProps) {
  return (
    <Reveal delay={delay}>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch sm:gap-5">
        <div className="flex items-center justify-center rounded-lg bg-forest px-4 py-2.5 sm:w-12 sm:shrink-0 sm:px-0 sm:py-4">
          <span className="text-xs font-bold uppercase tracking-[0.28em] text-white sm:[writing-mode:vertical-rl] sm:rotate-180">
            {label}
          </span>
        </div>
        <ul className="flex-1">
          {items.map((item) => (
            <li
              key={item}
              className="border-b border-forest/10 py-2.5 text-[0.95rem] font-medium italic leading-relaxed text-ink/75 last:border-b-0"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

export default function OurOfferingsSection() {
  return (
    <section id="offerings" className="section-pad bg-white">
      <div className="container-x">
        <Reveal>
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
            <span className="h-[2px] w-8 shrink-0 bg-accent sm:w-10" aria-hidden="true" />
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-forest sm:text-3xl">
              Our Offerings
            </h2>
            <span
              className="h-px flex-1 bg-gradient-to-r from-accent/60 via-accent/20 to-transparent"
              aria-hidden="true"
            />
          </div>
        </Reveal>

        <div className="mt-10 grid gap-12 lg:mt-14 lg:grid-cols-[52fr_48fr] lg:items-start lg:gap-16">
          <Reveal>
            <ol className="relative border-l-2 border-brand/15">
              {offeringTimeline.map((item) => (
                <li key={item.number} className="relative pb-7 pl-7 last:pb-0">
                  <span
                    className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-brand bg-white"
                    aria-hidden="true"
                  />
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-xs font-extrabold tracking-[0.18em] text-brand">
                      {item.number}.
                    </span>
                    <h3 className="font-display text-lg font-extrabold leading-snug tracking-tight text-forest">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-1.5 text-[0.95rem] leading-relaxed text-ink/70">{item.description}</p>
                </li>
              ))}
            </ol>
          </Reveal>

          <div className="flex flex-col gap-10 lg:gap-12">
            <FeatureGroup label="Value Added" items={valueAdded} />
            <FeatureGroup label="Expertise" items={expertise} delay={90} />
          </div>
        </div>
      </div>
    </section>
  );
}
