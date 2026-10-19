import Reveal from '../components/Reveal';
import { fundUtilization } from '../data/company';

const RADIUS = 70;
const STROKE = 26;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const GAP = 3;

function buildSegments() {
  const { allocations, total } = fundUtilization;
  let acc = 0;
  return allocations.map((allocation) => {
    const length = (allocation.value / total) * CIRCUMFERENCE;
    const segment = { ...allocation, dash: Math.max(length - GAP, 0.5), offset: -acc };
    acc += length;
    return segment;
  });
}

export default function FundUtilizationSection() {
  const { allocations, chartTitle, total } = fundUtilization;
  const segments = buildSegments();
  const chartLabel = allocations.map((a) => `${a.area} ${a.value}%`).join(', ');

  return (
    <section id="fund" className="section-pad bg-cream">
      <div className="container-x">
        <Reveal>
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
            <span className="h-[2px] w-8 shrink-0 bg-accent sm:w-10" aria-hidden="true" />
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-forest sm:text-3xl">
              Fund Utilization
            </h2>
            <span
              className="h-px flex-1 bg-gradient-to-r from-accent/60 via-accent/20 to-transparent"
              aria-hidden="true"
            />
          </div>
        </Reveal>

        <div className="mt-10 grid gap-8 md:grid-cols-[3fr_2fr] md:gap-6 lg:mt-12 lg:gap-10">
          <Reveal className="min-w-0">
            <div className="overflow-hidden rounded-2xl border border-forest/12 bg-white shadow-[0_35px_80px_-65px_rgba(23,63,43,0.9)]">
              <div
                className="overflow-x-auto focus-visible:outline-none"
                tabIndex={0}
                role="region"
                aria-label="Fund utilization table"
              >
                <table className="w-full border-collapse text-left">
                  <caption className="sr-only">
                    Fund utilization across key areas, as a percentage of the total.
                  </caption>
                  <thead>
                    <tr className="bg-forest text-white">
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-[0.7rem] font-bold uppercase tracking-[0.12em] md:px-5 md:py-4 md:text-xs"
                      >
                        Utilization Area
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-right text-[0.7rem] font-bold uppercase tracking-[0.12em] md:px-5 md:py-4 md:text-xs"
                      >
                        Percentage (%)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {allocations.map((allocation, index) => (
                      <tr
                        key={allocation.area}
                        className={`border-t border-forest/10 ${
                          index % 2 === 1 ? 'bg-mint/50' : 'bg-white'
                        }`}
                      >
                        <th
                          scope="row"
                          className="px-4 py-3.5 text-[0.85rem] font-semibold leading-snug text-ink md:px-5 md:py-4 md:text-sm"
                        >
                          {allocation.area}
                        </th>
                        <td className="whitespace-nowrap px-4 py-3.5 text-right font-display text-[0.85rem] font-extrabold tabular-nums text-forest md:px-5 md:py-4 md:text-sm">
                          {allocation.value}%
                        </td>
                      </tr>
                    ))}
                    <tr className="border-t-2 border-forest/25 bg-mint/80">
                      <th
                        scope="row"
                        className="px-4 py-3.5 text-[0.85rem] font-extrabold uppercase tracking-wide text-forest md:px-5 md:py-4 md:text-sm"
                      >
                        Total
                      </th>
                      <td className="whitespace-nowrap px-4 py-3.5 text-right font-display text-[0.9rem] font-extrabold tabular-nums text-forest md:px-5 md:py-4 md:text-sm">
                        {total}%
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>

          <Reveal delay={90} className="min-w-0">
            <div className="rounded-3xl border border-forest/12 bg-white p-6 shadow-[0_35px_80px_-65px_rgba(23,63,43,0.9)] sm:p-8">
              <h3 className="text-center font-display text-lg font-extrabold tracking-tight text-forest sm:text-xl">
                {chartTitle}
              </h3>

              <div className="mt-6 flex justify-center">
                <svg
                  viewBox="0 0 200 200"
                  role="img"
                  aria-label={`Fund utilization doughnut chart: ${chartLabel}.`}
                  className="h-auto w-full max-w-[13rem] sm:max-w-[15rem]"
                >
                  <title>{chartTitle} fund utilization distribution</title>
                  <g transform="rotate(-90 100 100)">
                    {segments.map((segment) => (
                      <circle
                        key={segment.area}
                        cx="100"
                        cy="100"
                        r={RADIUS}
                        fill="none"
                        stroke={segment.color}
                        strokeWidth={STROKE}
                        strokeDasharray={`${segment.dash} ${CIRCUMFERENCE - segment.dash}`}
                        strokeDashoffset={segment.offset}
                      />
                    ))}
                  </g>
                  <circle cx="100" cy="100" r={RADIUS - STROKE / 2} fill="#ffffff" />
                  <text
                    x="100"
                    y="97"
                    textAnchor="middle"
                    fontSize="26"
                    fontWeight="800"
                    fill="#173f2b"
                  >
                    100%
                  </text>
                  <text
                    x="100"
                    y="117"
                    textAnchor="middle"
                    fontSize="10.5"
                    fontWeight="700"
                    letterSpacing="1.5"
                    fill="#287a43"
                  >
                    TOTAL
                  </text>
                </svg>
              </div>

              <ul className="mt-6 flex flex-col gap-2.5">
                {allocations.map((allocation) => (
                  <li
                    key={allocation.area}
                    className="flex items-start justify-between gap-3 rounded-xl border border-forest/10 bg-cream px-3.5 py-2.5"
                  >
                    <span className="flex items-start gap-2.5">
                      <span
                        className="mt-[0.3rem] h-3 w-3 shrink-0 rounded-full"
                        style={{ backgroundColor: allocation.color }}
                        aria-hidden="true"
                      />
                      <span className="text-[0.85rem] font-medium leading-snug text-ink/80">
                        {allocation.area}
                      </span>
                    </span>
                    <span className="shrink-0 font-display text-sm font-extrabold tabular-nums text-forest">
                      {allocation.value}%
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
