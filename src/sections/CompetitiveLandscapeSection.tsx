import Reveal from '../components/Reveal';
import { competitors } from '../data/company';

const columns = [
  'Competitor',
  'Product Range',
  'Market Presence',
  'Key Strengths',
  'Competitive Advantage',
];

export default function CompetitiveLandscapeSection() {
  return (
    <section id="landscape" className="section-pad bg-stone">
      <div className="container-x">
        <Reveal>
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
            <span className="h-[2px] w-8 shrink-0 bg-accent sm:w-10" aria-hidden="true" />
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-forest sm:text-3xl">
              Competitive Landscape
            </h2>
            <span
              className="h-px flex-1 bg-gradient-to-r from-accent/60 via-accent/20 to-transparent"
              aria-hidden="true"
            />
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10 overflow-hidden rounded-2xl border border-forest/12 shadow-[0_35px_80px_-65px_rgba(23,63,43,0.9)]">
            <div
              className="overflow-x-auto focus-visible:outline-none"
              tabIndex={0}
              role="region"
              aria-label="Competitor comparison table"
            >
              <table className="w-full min-w-[860px] border-collapse text-left">
                <caption className="sr-only">
                  Comparison of Rushikesh Seeds and key competitors across product range, market presence, key
                  strengths and competitive advantage.
                </caption>
                <thead>
                  <tr className="bg-forest text-white">
                    {columns.map((column) => (
                      <th
                        key={column}
                        scope="col"
                        className="px-4 py-3.5 text-[0.68rem] font-bold uppercase tracking-[0.12em] md:px-5 md:py-4 md:text-xs"
                      >
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {competitors.map((row, index) => (
                    <tr
                      key={row.name}
                      className={`border-t border-forest/10 transition-colors duration-200 ${
                        index % 2 === 1 ? 'bg-mint/60' : 'bg-white'
                      } hover:bg-brand/5`}
                    >
                      <th
                        scope="row"
                        className="px-4 py-3.5 text-[0.82rem] font-extrabold text-forest md:px-5 md:py-4 md:text-sm"
                      >
                        {row.name}
                      </th>
                      <td className="px-4 py-3.5 text-[0.82rem] leading-relaxed text-ink/75 md:px-5 md:py-4 md:text-sm">
                        {row.productRange}
                      </td>
                      <td className="px-4 py-3.5 text-[0.82rem] leading-relaxed text-ink/75 md:px-5 md:py-4 md:text-sm">
                        {row.marketPresence}
                      </td>
                      <td className="px-4 py-3.5 text-[0.82rem] leading-relaxed text-ink/75 md:px-5 md:py-4 md:text-sm">
                        {row.keyStrengths}
                      </td>
                      <td className="px-4 py-3.5 text-[0.82rem] leading-relaxed text-ink/75 md:px-5 md:py-4 md:text-sm">
                        {row.advantage}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
