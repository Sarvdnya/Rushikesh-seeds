import { useState } from 'react';
import { ArrowRight, ArrowUpRight, Sprout } from 'lucide-react';
import { company, images } from '../data/company';

export default function Hero() {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <section id="home" className="relative isolate overflow-hidden bg-cream">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(115%_100%_at_88%_0%,#e5f0da_0%,#f7f6ef_52%,#eef5e6_100%)]" />
        <div className="absolute -left-24 top-32 h-72 w-72 rounded-full bg-leaf/20 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-brand/10 blur-3xl" />
      </div>

      <div className="container-x pb-16 pt-28 sm:pt-32 lg:pb-24 lg:pt-36">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <p
              className="hero-in eyebrow inline-flex items-center gap-2.5 rounded-full border border-brand/20 bg-white/70 px-4 py-2 text-[0.68rem] tracking-[0.18em] backdrop-blur-sm sm:text-xs"
              style={{ animationDelay: '60ms' }}
            >
              <Sprout size={14} className="text-leaf" aria-hidden="true" />
              Quality Seeds. Better Harvests.
            </p>

            <h1
              className="hero-in mt-6 font-display font-extrabold leading-[1.05] tracking-tight text-forest"
              style={{ fontSize: 'clamp(2.3rem, 1.4rem + 3.7vw, 3.6rem)', animationDelay: '160ms' }}
            >
              Growing Better Harvests Through Quality Seeds
            </h1>

            <p
              className="hero-in mt-6 max-w-xl text-base leading-relaxed text-ink/75 md:text-lg"
              style={{ animationDelay: '280ms' }}
            >
              Rushikesh Seeds is committed to providing quality vegetable and agricultural seeds through
              reliable seed production, careful processing, quality assurance, and farmer-focused solutions.
            </p>

            <div className="hero-in mt-9 flex flex-col gap-3 sm:flex-row sm:items-center" style={{ animationDelay: '400ms' }}>
              <a href="#offerings" className="btn btn-primary w-full sm:w-auto">
                Explore Our Offerings <ArrowRight size={17} aria-hidden="true" />
              </a>
              <a href="#contact" className="btn btn-outline-dark w-full sm:w-auto">
                Contact Us
              </a>
            </div>

            <div
              className="hero-in mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-forest/10 pt-6 text-sm font-medium text-ink/70"
              style={{ animationDelay: '520ms' }}
            >
              <span className="inline-flex items-center gap-2">
                <Sprout size={16} className="text-brand" aria-hidden="true" />
                Established {company.establishedYear}
              </span>
              <span className="hidden h-1 w-1 rounded-full bg-forest/25 sm:block" aria-hidden="true" />
              <span>
                {company.city}, {company.state}
              </span>
              <span className="hidden h-1 w-1 rounded-full bg-forest/25 sm:block" aria-hidden="true" />
              <span>Vegetable &amp; field crop seeds</span>
            </div>
          </div>

          <div className="hero-in relative" style={{ animationDelay: '240ms' }}>
            <div
              className="absolute -right-5 -top-5 h-24 w-24 rounded-full border border-brand/20 bg-white/50 sm:h-28 sm:w-28"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-[2rem] border border-forest/10 bg-white shadow-[0_45px_95px_-60px_rgba(23,63,43,0.95)]">
              {imageFailed ? (
                <div className="h-[19rem] w-full bg-[radial-gradient(circle_at_30%_25%,#79b84a_0%,#287a43_45%,#173f2b_100%)] sm:h-[23rem] lg:h-[29rem]" />
              ) : (
                <img
                  src={images.hero}
                  alt="Healthy crop fields growing across the Indian countryside"
                  className="h-[19rem] w-full object-cover object-center sm:h-[23rem] lg:h-[29rem]"
                  fetchPriority="high"
                  decoding="async"
                  onError={() => setImageFailed(true)}
                />
              )}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-forest-deep/45 to-transparent" />
            </div>

            <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl border border-forest/10 bg-white/95 px-4 py-3 shadow-[0_25px_55px_-40px_rgba(23,63,43,0.95)] backdrop-blur-sm sm:left-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <Sprout size={18} aria-hidden="true" />
              </span>
              <span>
                <span className="block text-[0.65rem] font-bold uppercase tracking-[0.16em] text-ink/50">
                  Since {company.establishedYear}
                </span>
                <span className="block font-display text-[0.95rem] font-extrabold text-forest">
                  {company.city}, {company.state}
                </span>
              </span>
            </div>

            <a
              href="#about"
              className="absolute right-4 top-4 hidden items-center gap-1.5 rounded-full bg-white/90 px-3.5 py-2 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-forest shadow-[0_18px_40px_-30px_rgba(23,63,43,0.95)] transition-colors hover:bg-white sm:inline-flex"
            >
              Our story <ArrowUpRight size={13} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
