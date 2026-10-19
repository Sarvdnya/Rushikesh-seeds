import { Info } from 'lucide-react';
import Reveal from '../components/Reveal';
import { images, marketSize } from '../data/company';

type PanelData = {
  title: string;
  text: string;
  stats: { value: string; label: string }[];
};

type MarketPanelProps = {
  panel: PanelData;
  mapSrc: string;
  mapAlt: string;
  mapFirst?: boolean;
  delay?: number;
};

function MarketPanel({ panel, mapSrc, mapAlt, mapFirst = false, delay = 0 }: MarketPanelProps) {
  return (
    <Reveal delay={delay}>
      <div className="rounded-3xl border border-forest/12 bg-white p-6 shadow-[0_35px_80px_-65px_rgba(23,63,43,0.9)] sm:p-8 lg:p-10">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className={mapFirst ? 'lg:order-last' : ''}>
            <h3 className="font-display text-xl font-extrabold tracking-tight text-forest sm:text-2xl">
              {panel.title}
            </h3>
            <p className="mt-4 text-[0.98rem] leading-relaxed text-ink/75">{panel.text}</p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {panel.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-brand/15 bg-mint/60 px-2 py-4 text-center"
                >
                  <p className="font-display text-lg font-extrabold tracking-tight text-forest sm:text-xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-brand">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`flex items-center justify-center rounded-2xl bg-mint/70 p-6 sm:p-8 ${
              mapFirst ? 'lg:order-first' : ''
            }`}
          >
            <img
              src={mapSrc}
              alt={mapAlt}
              className="h-auto w-full max-w-[340px]"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function MarketSizeSection() {
  return (
    <section id="market" className="section-pad bg-mist">
      <div className="container-x">
        <Reveal>
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
            <span className="h-[2px] w-8 shrink-0 bg-accent sm:w-10" aria-hidden="true" />
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-forest sm:text-3xl">
              Market Size
            </h2>
            <span
              className="h-px flex-1 bg-gradient-to-r from-accent/60 via-accent/20 to-transparent"
              aria-hidden="true"
            />
          </div>
        </Reveal>

        <div className="mt-10 flex flex-col gap-8 lg:mt-12">
          <MarketPanel
            panel={marketSize.global}
            mapSrc={images.worldMap}
            mapAlt="World map silhouette representing global seed markets"
          />
          <MarketPanel
            panel={marketSize.india}
            mapSrc={images.indiaMap}
            mapAlt="Map silhouette of India representing the domestic seed market"
            mapFirst
            delay={90}
          />
        </div>

        <Reveal delay={140}>
          <p className="mt-8 flex items-center justify-center gap-2 text-center text-xs font-medium text-ink/55">
            <Info size={14} className="shrink-0 text-brand" aria-hidden="true" />
            {marketSize.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
