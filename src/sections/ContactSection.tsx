import { ExternalLink, Mail, MapPin, Phone } from 'lucide-react';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { company, mapLink } from '../data/company';

export default function ContactSection() {
  const contactCards = [
    {
      icon: Phone,
      label: 'Call us',
      value: company.phone.display,
      hint: 'Monday to Saturday, during office hours',
      href: `tel:${company.phone.tel}`,
      hrefLabel: `Call Rushikesh Seeds at ${company.phone.display}`,
    },
    {
      icon: Mail,
      label: 'Email us',
      value: company.email,
      hint: 'Seeds, dealership and distribution enquiries',
      href: `mailto:${company.email}`,
      hrefLabel: `Email Rushikesh Seeds at ${company.email}`,
    },
  ];

  return (
    <section id="contact" className="section-pad bg-forest">
      <div className="container-x">
        <SectionHeading
          eyebrow="Get in touch"
          title="Let's Grow Together"
          description="Whether you are a farmer, dealer, distributor or business partner — reach out and the Rushikesh Seeds team will get back to you."
          align="center"
          tone="light"
        />

        <div className="mx-auto mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {contactCards.map((card, index) => (
            <Reveal key={card.label} delay={index * 70}>
              <a
                href={card.href}
                aria-label={card.hrefLabel}
                className="card group flex h-full items-center gap-4 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <card.icon size={21} aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[0.7rem] font-bold uppercase tracking-[0.18em] text-ink/65">
                    {card.label}
                  </span>
                  <span className="mt-1 block break-words font-display text-[1.02rem] font-extrabold text-forest">
                    {card.value}
                  </span>
                  <span className="mt-1 block text-[0.8rem] leading-relaxed text-ink/70">{card.hint}</span>
                </span>
              </a>
            </Reveal>
          ))}

          <Reveal delay={140} className="sm:col-span-2">
            <div className="card flex h-full flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-forest text-leaf">
                  <MapPin size={21} aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <span className="block text-[0.7rem] font-bold uppercase tracking-[0.18em] text-ink/65">
                    Address
                  </span>
                  <address className="mt-1 not-italic leading-relaxed text-ink/75">
                    {company.address.line1}
                    <br />
                    {company.address.line2}
                    <br />
                    {company.address.line3}
                  </address>
                </div>
              </div>
              <a
                href={mapLink(company.address.full)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full bg-cream px-4 py-2 text-[0.82rem] font-semibold text-forest ring-1 ring-forest/12 transition-colors hover:bg-forest hover:text-white hover:ring-forest"
              >
                Open in Maps <ExternalLink size={14} aria-hidden="true" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={200} className="sm:col-span-2">
            <div className="rounded-[1.5rem] border border-dashed border-leaf/40 bg-white/10 p-5">
              <p className="text-center text-[0.87rem] leading-relaxed text-white/85">
                <strong className="font-semibold text-leaf">Office hours enquiry:</strong> for seasonal
                availability, dealership or distribution discussions, call or email the team directly — contact
                details above.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
