import { Handshake, PackageCheck, Settings, ShieldCheck, Truck } from 'lucide-react';
import Reveal from '../components/Reveal';
import { solutions } from '../data/company';

const icons = {
  settings: Settings,
  handshake: Handshake,
  truck: Truck,
  'shield-check': ShieldCheck,
  'package-check': PackageCheck,
} as const;

export default function SolutionsSection() {
  return (
    <section id="seeds" className="section-pad bg-white">
      <div className="container-x">
        <Reveal>
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
            <span className="h-[2px] w-8 shrink-0 bg-accent sm:w-10" aria-hidden="true" />
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-forest sm:text-3xl">
              Solutions for Hybrid Vegetable Seed Business
            </h2>
            <span
              className="h-px flex-1 bg-gradient-to-r from-accent/60 via-accent/20 to-transparent"
              aria-hidden="true"
            />
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:gap-6">
          {solutions.map((solution, index) => {
            const Icon = icons[solution.icon];
            const wide = index === solutions.length - 1;
            return (
              <Reveal key={solution.id} delay={index * 70} className={wide ? 'h-full sm:col-span-2' : 'h-full'}>
                <article className="group flex h-full items-start gap-4 rounded-2xl border border-accent/30 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_30px_60px_-45px_rgba(23,63,43,0.85)] sm:p-7">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent/40 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-extrabold leading-snug tracking-tight text-forest">
                      {solution.title}
                    </h3>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-ink/70 sm:max-w-2xl">
                      {solution.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
