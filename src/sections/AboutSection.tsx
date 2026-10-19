import Reveal from '../components/Reveal';
import { company, images } from '../data/company';

const introductionParagraphs = [
  'Rushikesh Seeds is an emerging agricultural seed company established in 2022 and headquartered in Jalna, Maharashtra. The company operates in the agricultural sector with a focus on the manufacturing, processing, and packaging of high-quality vegetable seeds and field crop seeds.',
  'With a commitment to supporting farmers and enhancing agricultural productivity, Rushikesh Seeds provides a diverse range of seeds developed to meet the requirements of modern farming practices. The company follows quality-focused processes in seed selection, processing, and packaging to ensure better performance, reliability, and value for farmers.',
  'Driven by innovation, farmer-centric solutions, and sustainable agricultural growth, Rushikesh Seeds aims to become a trusted name in the seed industry by delivering superior-quality products and contributing to the advancement of the agricultural community.',
];

const pillars = [
  { id: 'mission', title: 'Mission', text: company.mission },
  { id: 'vision', title: 'Vision', text: company.vision },
];

function AccentRule({ width }: { width: string }) {
  return (
    <>
      <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
      <span className={`h-[2px] shrink-0 bg-accent ${width}`} aria-hidden="true" />
    </>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="section-pad bg-white">
      <div className="container-x">
        <Reveal>
          <div className="flex items-center gap-3 sm:gap-4">
            <AccentRule width="w-8 sm:w-10" />
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
              Introduction
            </h2>
            <span
              className="h-px flex-1 bg-gradient-to-r from-accent/60 via-accent/20 to-transparent"
              aria-hidden="true"
            />
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">
            {introductionParagraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="text-[1.02rem] leading-relaxed text-ink/80 md:text-[1.09rem] md:leading-[1.85]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-2 lg:gap-14">
          <Reveal className="order-1">
            <div className="grid gap-3 sm:aspect-[3/2] sm:grid-cols-3 sm:gap-4">
              <div className="overflow-hidden bg-cream sm:col-span-2">
                <img
                  src={images.production}
                  alt="A hand holding freshly harvested seeds above fertile, sown soil"
                  className="h-52 w-full object-cover object-center sm:h-full"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="overflow-hidden bg-cream">
                <img
                  src={images.cotton}
                  alt="A healthy agricultural plant with green leaves and open white cotton bolls"
                  className="h-52 w-full object-cover object-center sm:h-full"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </Reveal>

          <div className="order-2 flex flex-col gap-8 lg:justify-center lg:gap-10">
            {pillars.map((pillar, index) => (
              <Reveal key={pillar.id} delay={index * 100}>
                <div>
                  <div className="flex items-center gap-3">
                    <AccentRule width="w-6" />
                    <h3 className="text-[0.82rem] font-extrabold uppercase tracking-[0.2em] text-ink">
                      {pillar.title}
                    </h3>
                    <span
                      className="h-px flex-1 bg-gradient-to-r from-accent/50 via-accent/15 to-transparent"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="mt-4 text-[1.02rem] italic leading-relaxed text-ink/80">{pillar.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
