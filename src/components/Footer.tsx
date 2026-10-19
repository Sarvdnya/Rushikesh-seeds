import { ExternalLink, Mail, MapPin, Phone } from 'lucide-react';
import Logo from './Logo';
import { company, mapLink, navLinks, offerings, socials } from '../data/company';

export default function Footer() {
  const year = new Date().getFullYear();
  const verifiedSocials = socials.filter((social) => social.url.trim().length > 0);

  return (
    <footer className="bg-forest-deep text-white">
      <div className="container-x py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <Logo tone="light" />
            <p className="mt-5 font-display text-[0.95rem] font-semibold italic text-leaf">
              {company.tagline}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/65">{company.footerIntro}</p>

            {verifiedSocials.length > 0 ? (
              <div className="mt-5 flex flex-wrap gap-3">
                {verifiedSocials.map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-white/75 underline-offset-4 transition-colors hover:text-leaf hover:underline"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            ) : null}
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="font-display text-[0.72rem] font-bold uppercase tracking-[0.2em] text-leaf">
              Quick Links
            </h2>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Seeds and offerings">
            <h2 className="font-display text-[0.72rem] font-bold uppercase tracking-[0.2em] text-leaf">
              Seeds &amp; Offerings
            </h2>
            <ul className="mt-5 space-y-3">
              {offerings.map((offering) => (
                <li key={offering.id}>
                  <a
                    href={offering.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {offering.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-[0.72rem] font-bold uppercase tracking-[0.2em] text-leaf">
              Contact
            </h2>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a
                  href={`tel:${company.phone.tel}`}
                  className="flex items-start gap-2.5 text-white/75 transition-colors hover:text-white"
                >
                  <Phone size={16} className="mt-0.5 shrink-0 text-leaf" aria-hidden="true" />
                  <span>{company.phone.display}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-start gap-2.5 break-all text-white/75 transition-colors hover:text-white"
                >
                  <Mail size={16} className="mt-0.5 shrink-0 text-leaf" aria-hidden="true" />
                  <span>{company.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-white/75">
                <MapPin size={16} className="mt-0.5 shrink-0 text-leaf" aria-hidden="true" />
                <address className="not-italic leading-relaxed">
                  {company.address.line1}
                  <br />
                  {company.address.line2}
                  <br />
                  {company.address.line3}
                </address>
              </li>
              <li>
                <a
                  href={mapLink(company.address.full)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-semibold text-leaf underline-offset-4 hover:underline"
                >
                  Open in Maps <ExternalLink size={14} aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/12 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/55">
            © {year} {company.name} · {company.city}, {company.state}, {company.country}. All rights reserved.
          </p>
          <p className="text-xs text-white/45">
            {company.tagline} · Established {company.establishedYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
