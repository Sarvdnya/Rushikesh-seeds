import { PackageCheck, Settings, Sprout, UsersRound } from 'lucide-react';
import Reveal from '../components/Reveal';
import { usps } from '../data/company';

const icons = {
  sprout: Sprout,
  settings: Settings,
  'users-round': UsersRound,
  'package-check': PackageCheck,
} as const;

export default function UspSection() {
  return (
    <section id="usp" className="section-pad bg-forest">
      <div className="container-x">
        <Reveal>
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
            <span className="h-[2px] w-8 shrink-0 bg-accent sm:w-10" aria-hidden="true" />
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              Key Distinctions: Our USP
            </h2>
            <span
              className="h-px flex-1 bg-gradient-to-r from-accent/60 via-accent/20 to-transparent"
              aria-hidden="true"
            />
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-6">
          {usps.map((usp, index) => {
            const Icon = icons[usp.icon];
            return (
              <Reveal key={usp.id} delay={index * 80} className="h-full">
                <article className="group flex h-full flex-col items-center rounded-2xl border border-brand/20 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/45 hover:shadow-[0_30px_60px_-48px_rgba(23,63,43,0.85)] sm:p-7">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-brand/25 text-brand transition-colors duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                    <Icon size={24} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-extrabold leading-snug tracking-tight text-forest">
                    {usp.title}
                  </h3>
                  <p className="mt-3 text-[0.94rem] leading-relaxed text-ink/70">{usp.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
