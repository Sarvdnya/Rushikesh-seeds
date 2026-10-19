import { useState } from 'react';
import { ArrowRight, ChevronDown, Sprout } from 'lucide-react';
import { company, images } from '../data/company';

export default function Hero() {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <section id="home" className="relative isolate flex min-h-[38rem] items-center overflow-hidden bg-forest lg:min-h-[46rem]">
      <div className="absolute inset-0 -z-10">
        {imageFailed ? (
          <div className="h-full w-full bg-[radial-gradient(circle_at_25%_20%,#287a43_0%,#173f2b_55%,#0f2b1d_100%)]" />
        ) : (
          <img
            src={images.hero}
            alt="Lush green paddy fields stretching across the countryside in India"
            className="h-full w-full object-cover object-center"
            fetchPriority="high"
            decoding="async"
            onError={() => setImageFailed(true)}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/95 via-forest/85 to-forest/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-transparent to-forest-deep/40" />
      </div>

      <div className="container-x w-full pb-24 pt-36 md:pt-44 lg:pb-32">
        <div className="max-w-3xl">
          <p
            className="hero-in inline-flex items-center gap-3 rounded-full border border-leaf/40 bg-leaf/10 px-4 py-2 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-leaf sm:text-xs"
            style={{ animationDelay: '60ms' }}
          >
            Quality <span className="text-leaf/60">•</span> Purity <span className="text-leaf/60">•</span> Performance
          </p>

          <h1
            className="hero-in mt-7 font-extrabold leading-[1.03] tracking-tight text-white"
            style={{ fontSize: 'clamp(2.35rem, 1.35rem + 4.2vw, 4.3rem)', animationDelay: '180ms' }}
          >
            Growing a Better Tomorrow, One Seed at a Time.
          </h1>

          <p
            className="hero-in mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg md:text-xl"
            style={{ animationDelay: '320ms' }}
          >
            Discover Rushikesh Seeds — committed to quality vegetable and field crop seeds, reliable
            agricultural solutions, and farmer-focused growth.
          </p>

          <div className="hero-in mt-9 flex flex-col gap-3 sm:flex-row sm:items-center" style={{ animationDelay: '460ms' }}>
            <a href="#seeds" className="btn btn-light w-full sm:w-auto">
              Explore Our Seeds <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a href="#contact" className="btn btn-outline-light w-full sm:w-auto">
              Get in Touch
            </a>
          </div>

          <div
            className="hero-in mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/15 pt-6 text-sm text-white/70"
            style={{ animationDelay: '600ms' }}
          >
            <span className="inline-flex items-center gap-2">
              <Sprout size={16} className="text-leaf" aria-hidden="true" />
              Established {company.establishedYear}
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-white/40 sm:block" aria-hidden="true" />
            <span>Headquartered in {company.city}, {company.state}</span>
            <span className="hidden h-1 w-1 rounded-full bg-white/40 sm:block" aria-hidden="true" />
            <span>Vegetable &amp; field crop seeds</span>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute inset-x-0 bottom-6 z-10 mx-auto hidden w-fit flex-col items-center gap-1.5 text-white/65 transition-colors hover:text-leaf md:flex"
        aria-label="Scroll to the next section"
      >
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.28em]">Scroll</span>
        <ChevronDown size={20} className="scroll-nudge" aria-hidden="true" />
      </a>
    </section>
  );
}
