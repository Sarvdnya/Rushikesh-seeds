import {
  Handshake,
  HeartHandshake,
  Megaphone,
  PackageCheck,
  Sprout,
  Truck,
  type LucideIcon,
} from 'lucide-react';
import type { ReactNode } from 'react';
import Reveal from '../components/Reveal';
import { goToMarket, revenueStatement, revenueStreams } from '../data/company';

const revenueIcons: Record<string, LucideIcon> = {
  sprout: Sprout,
  truck: Truck,
  handshake: Handshake,
  'package-check': PackageCheck,
};

const gtmIcons: Record<string, LucideIcon> = {
  megaphone: Megaphone,
  handshake: Handshake,
  'heart-handshake': HeartHandshake,
};

const spokes = [
  { x: 18, y: 28 },
  { x: 18, y: 72 },
  { x: 82, y: 28 },
  { x: 82, y: 72 },
];

function SubHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="flex items-center gap-3 font-display text-xl font-extrabold tracking-tight text-forest sm:text-2xl">
      <span className="h-6 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />
      {children}
    </h3>
  );
}

function RevenueCard({ index }: { index: number }) {
  const stream = revenueStreams[index];
  const Icon = revenueIcons[stream.icon];
  return (
    <div className="relative rounded-2xl border border-forest/12 bg-white p-5 shadow-[0_30px_70px_-60px_rgba(23,63,43,0.95)] lg:p-6">
      <span
        className="absolute inset-y-5 left-0 w-[3px] rounded-full bg-accent/70"
        aria-hidden="true"
      />
      <div className="flex gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-mint text-brand">
          <Icon size={20} aria-hidden="true" />
        </span>
        <div>
          <h4 className="font-display text-base font-extrabold leading-snug tracking-tight text-forest">
            {stream.title}
          </h4>
          <p className="mt-1.5 text-[0.9rem] leading-relaxed text-ink/70">{stream.description}</p>
        </div>
      </div>
    </div>
  );
}

export default function RevenueStrategySection() {
  return (
    <section id="revenue" className="section-pad bg-mint">
      <div className="container-x">
        <Reveal>
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
            <span className="h-[2px] w-8 shrink-0 bg-accent sm:w-10" aria-hidden="true" />
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-forest sm:text-3xl">
              Revenue Model &amp; Go To Market Strategy
            </h2>
            <span
              className="h-px flex-1 bg-gradient-to-r from-accent/60 via-accent/20 to-transparent"
              aria-hidden="true"
            />
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div className="mt-10">
            <SubHeading>Revenue Model</SubHeading>
          </div>
        </Reveal>

        <div className="relative mt-8 hidden lg:block">
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {spokes.map((point) => (
              <line
                key={`${point.x}-${point.y}`}
                x1="50"
                y1="50"
                x2={point.x}
                y2={point.y}
                stroke="#e2491f"
                strokeOpacity="0.4"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              />
            ))}
          </svg>

          <div className="relative grid grid-cols-[1fr_auto_1fr] items-center gap-6 xl:gap-10">
            <div className="flex flex-col gap-6">
              <RevenueCard index={0} />
              <RevenueCard index={1} />
            </div>

            <div className="flex justify-center">
              <div className="flex h-40 w-40 flex-col items-center justify-center rounded-full bg-forest px-4 text-center text-white shadow-[0_35px_70px_-45px_rgba(23,63,43,0.95)] ring-4 ring-brand/20 xl:h-44 xl:w-44">
                <span className="font-display text-lg font-extrabold leading-tight tracking-tight xl:text-xl">
                  Revenue
                  <br />
                  Model
                </span>
                <span className="mt-2 h-[3px] w-8 rounded-full bg-accent/80" aria-hidden="true" />
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <RevenueCard index={2} />
              <RevenueCard index={3} />
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 lg:hidden">
          {revenueStreams.map((stream, index) => (
            <Reveal key={stream.id} delay={index * 60}>
              <RevenueCard index={index} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mx-auto mt-10 max-w-4xl rounded-2xl border border-accent/25 bg-accent/5 px-6 py-5 text-center text-[0.95rem] font-medium italic leading-relaxed text-ink/80">
            {revenueStatement}
          </p>
        </Reveal>

        <div className="mt-14 border-t border-forest/10 pt-14 sm:mt-16 sm:pt-16">
          <Reveal>
            <div>
              <SubHeading>Go To Market Strategy</SubHeading>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {goToMarket.map((strategy, index) => {
              const Icon = gtmIcons[strategy.icon];
              return (
                <Reveal key={strategy.id} delay={index * 70} className="h-full">
                  <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-forest/12 bg-white shadow-[0_35px_80px_-65px_rgba(23,63,43,0.9)]">
                    <div className="flex items-center gap-3 bg-forest px-5 py-4 text-white">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/12 text-leaf">
                        <Icon size={18} aria-hidden="true" />
                      </span>
                      <h4 className="font-display text-[0.98rem] font-extrabold leading-snug tracking-tight">
                        {strategy.title}
                      </h4>
                    </div>

                    <div className="border-t border-white/10 bg-brand/12 px-5 py-4">
                      <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-forest">
                        Core Activities
                      </p>
                      <p className="mt-2 text-[0.9rem] leading-relaxed text-ink/80">{strategy.core}</p>
                    </div>

                    <div className="flex-1 border-t border-forest/10 bg-mint px-5 py-4">
                      <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-brand">
                        Enablers
                      </p>
                      <p className="mt-2 text-[0.9rem] leading-relaxed text-ink/80">{strategy.enablers}</p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
