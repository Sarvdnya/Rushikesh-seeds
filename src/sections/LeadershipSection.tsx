import { GraduationCap, UserRound } from 'lucide-react';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { leadership } from '../data/company';

export default function LeadershipSection() {
  return (
    <section id="leadership" className="section-pad bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="Leadership"
          title="Leadership Behind Our Vision"
          description="The people shaping how Rushikesh Seeds produces, checks and delivers seed."
          align="center"
        />

        <Reveal delay={90}>
          <article className="card mt-12 overflow-hidden">
            <div className="grid gap-0 md:grid-cols-[16rem_1fr]">
              <div className="flex flex-col items-center justify-center gap-5 bg-forest px-8 py-12 text-center">
                <span
                  className="flex h-28 w-28 items-center justify-center rounded-full border border-leaf/40 bg-gradient-to-br from-brand to-forest-deep font-display text-4xl font-extrabold text-white shadow-[0_20px_45px_-20px_rgba(0,0,0,0.9)]"
                  aria-hidden="true"
                >
                  {leadership.initials}
                </span>
                <div>
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-leaf">
                    {leadership.role}
                  </p>
                  <p className="mt-2 font-display text-xl font-extrabold leading-snug text-white">
                    {leadership.name}
                  </p>
                </div>
              </div>

              <div className="p-7 md:p-10">
                <div className="flex items-center gap-3 text-brand">
                  <UserRound size={20} aria-hidden="true" />
                  <h3 className="font-display text-xl font-extrabold tracking-tight text-forest md:text-2xl">
                    {leadership.name}
                  </h3>
                </div>
                <p className="mt-1 text-sm font-semibold uppercase tracking-[0.16em] text-ink/50">
                  {leadership.role}, Rushikesh Seeds
                </p>

                <div className="mt-5 flex flex-wrap gap-2.5">
                  {leadership.credentials.map((credential) => (
                    <span
                      key={credential}
                      className="inline-flex items-center gap-1.5 rounded-full bg-cream px-3.5 py-1.5 text-[0.78rem] font-semibold text-forest ring-1 ring-forest/10"
                    >
                      <GraduationCap size={14} className="text-brand" aria-hidden="true" />
                      {credential}
                    </span>
                  ))}
                </div>

                <div className="mt-6 space-y-4">
                  {leadership.bio.map((paragraph) => (
                    <p key={paragraph.slice(0, 32)} className="text-[0.97rem] leading-relaxed text-ink/70">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <p className="mt-6 border-t border-forest/10 pt-5 text-xs leading-relaxed text-ink/50">
                  A verified portrait of Mr. Ajit Anil Khot has not been supplied, so an initials mark is used
                  here until an approved photograph is available.
                </p>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
