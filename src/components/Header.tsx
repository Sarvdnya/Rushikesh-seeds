import { useEffect, useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import Logo from './Logo';
import { company, navLinks } from '../data/company';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);

      const probe = window.scrollY + 160;
      let current = navLinks[0].href;
      for (const link of navLinks) {
        const el = document.querySelector(link.href);
        if (el instanceof HTMLElement && el.offsetTop <= probe) current = link.href;
      }
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 6) {
        current = navLinks[navLinks.length - 1].href;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const linkClasses = (href: string) =>
    `rounded-full px-2.5 py-2 text-[0.85rem] font-semibold transition-colors duration-200 ${
      active === href ? 'bg-brand/10 text-brand' : 'text-forest/85 hover:bg-brand/5 hover:text-brand'
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled || open
          ? 'border-forest/10 bg-white/95 shadow-[0_14px_34px_-28px_rgba(23,63,43,0.95)] backdrop-blur-md'
          : 'border-transparent bg-white/85 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto grid h-[4.5rem] w-full max-w-[80rem] grid-cols-[1fr_auto_1fr] items-center gap-3 px-5 sm:px-8">
        <a
          href="#home"
          className="shrink-0 justify-self-start rounded-xl"
          aria-label="Rushikesh Seeds — back to top"
        >
          <Logo />
        </a>

        <nav aria-label="Primary" className="hidden items-center justify-center gap-0.5 xl:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={linkClasses(link.href)}
              aria-current={active === link.href ? 'true' : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2 justify-self-end sm:gap-3">
          <a
            href={`tel:${company.phone.tel}`}
            className="hidden items-center gap-2 rounded-full px-3 py-2 text-[0.85rem] font-semibold text-forest/75 transition-colors duration-200 hover:bg-brand/5 hover:text-brand xl:inline-flex"
            aria-label={`Call Rushikesh Seeds at ${company.phone.display}`}
          >
            <Phone size={15} aria-hidden="true" />
            {company.phone.display}
          </a>
          <a href="#contact" className="btn btn-primary hidden px-5 py-2.5 text-sm sm:inline-flex">
            Contact Us
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-forest/15 text-forest transition-colors hover:bg-brand/5 xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-forest/10 bg-white transition-[max-height,opacity] duration-300 xl:hidden ${
          open ? 'max-h-[38rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav aria-label="Mobile" className="mx-auto flex w-full max-w-[80rem] flex-col gap-1 px-5 py-4 sm:px-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-xl px-3 py-3 text-[0.95rem] font-semibold transition-colors ${
                active === link.href ? 'bg-brand/10 text-brand' : 'text-forest/85 hover:bg-cream hover:text-brand'
              }`}
              onClick={() => setOpen(false)}
              aria-current={active === link.href ? 'true' : undefined}
            >
              {link.label}
            </a>
          ))}
          <a
            href={`tel:${company.phone.tel}`}
            className="mt-1 inline-flex items-center gap-2 rounded-xl px-3 py-3 text-[0.95rem] font-semibold text-forest/85 transition-colors hover:bg-cream hover:text-brand"
            onClick={() => setOpen(false)}
          >
            <Phone size={16} aria-hidden="true" /> {company.phone.display}
          </a>
          <a href="#contact" className="btn btn-primary mt-3 w-full" onClick={() => setOpen(false)}>
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
}
