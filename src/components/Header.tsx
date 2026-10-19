import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Logo from './Logo';
import { navLinks } from '../data/company';

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
    `relative rounded-md px-1 py-1 text-sm font-semibold transition-colors duration-200 ${
      active === href ? 'text-brand' : 'text-ink/75 hover:text-brand'
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'bg-white/95 shadow-[0_10px_30px_-24px_rgba(23,63,43,0.9)] backdrop-blur-md' : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="container-x flex h-[4.5rem] items-center justify-between gap-4">
        <a href="#home" className="shrink-0 rounded-md" aria-label="Rushikesh Seeds — back to top">
          <Logo />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={linkClasses(link.href)} aria-current={active === link.href ? 'true' : undefined}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contact" className="btn btn-primary hidden px-5 py-2.5 text-sm sm:inline-flex">
            Contact Us
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-forest/15 text-forest transition-colors hover:bg-cream lg:hidden"
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
        className={`overflow-hidden border-t border-forest/10 bg-white transition-[max-height,opacity] duration-300 lg:hidden ${
          open ? 'max-h-[26rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav aria-label="Mobile" className="container-x flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-xl px-3 py-3 text-[0.95rem] font-semibold transition-colors ${
                active === link.href ? 'bg-brand/10 text-brand' : 'text-ink/80 hover:bg-cream hover:text-brand'
              }`}
              onClick={() => setOpen(false)}
              aria-current={active === link.href ? 'true' : undefined}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn btn-primary mt-3 w-full"
            onClick={() => setOpen(false)}
          >
            <Phone size={16} aria-hidden="true" /> Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
}
