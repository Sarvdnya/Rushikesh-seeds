import { Facebook, Instagram, Phone, Youtube } from 'lucide-react';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { company, socials } from '../data/company';

const icons = {
  instagram: Instagram,
  facebook: Facebook,
  youtube: Youtube,
} as const;

export default function SocialSection() {
  return (
    <section id="social" className="section-pad bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="Follow along"
          title="Stay Connected with Rushikesh Seeds"
          description="Field updates, seasonal reminders and company news — published on our official channels as they go live."
          align="center"
        />

        <Reveal delay={90}>
          <ul className="mx-auto mt-10 flex max-w-3xl flex-col gap-4 sm:flex-row sm:justify-center">
            {socials.map((social) => {
              const Icon = icons[social.id];
              const isLinked = social.url.trim().length > 0;

              const inner = (
                <>
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cream text-forest ring-1 ring-forest/10">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <span className="flex flex-col items-start leading-tight">
                    <span className="font-display text-[0.98rem] font-extrabold text-forest">
                      {social.label}
                    </span>
                    <span className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-ink/50">
                      {isLinked ? 'Official profile' : 'Link to be verified'}
                    </span>
                  </span>
                </>
              );

              return (
                <li key={social.id} className="flex-1">
                  {isLinked ? (
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card flex w-full items-center gap-3.5 px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="card flex w-full items-center gap-3.5 px-5 py-4 opacity-90">
                      {inner}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={160}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-ink/60">
            Official social profile links are published here only after they are verified — we never link to
            unconfirmed accounts. Until then, reach the team directly on{' '}
            <a href={`tel:${company.phone.tel}`} className="font-semibold text-brand underline-offset-4 hover:underline">
              {company.phone.display}
            </a>{' '}
            or{' '}
            <a href={`mailto:${company.email}`} className="font-semibold text-brand underline-offset-4 hover:underline">
              {company.email}
            </a>
            .
          </p>
        </Reveal>

        <Reveal delay={220}>
          <div className="mt-8 text-center">
            <a href="#contact" className="btn btn-outline-dark">
              <Phone size={16} aria-hidden="true" /> Talk to Rushikesh Seeds
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
