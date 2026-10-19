import { useState, type FormEvent } from 'react';
import { Check, Copy, ExternalLink, Mail, MapPin, Pencil, Phone, Send } from 'lucide-react';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { company, mapLink } from '../data/company';

type FormValues = {
  name: string;
  contact: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const emptyValues: FormValues = { name: '', contact: '', subject: '', message: '' };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (values.name.trim().length < 2) {
    errors.name = 'Please enter your name.';
  }

  const contact = values.contact.trim();
  const digits = contact.replace(/\D/g, '');
  if (!contact) {
    errors.contact = 'Please add a phone number or email address we can reply to.';
  } else if (!EMAIL_PATTERN.test(contact) && digits.length < 10) {
    errors.contact = 'Enter a valid phone number (at least 10 digits) or email address.';
  }

  if (values.subject.trim().length < 3) {
    errors.subject = 'Please add a short subject.';
  }

  if (values.message.trim().length < 10) {
    errors.message = 'Please write a message of at least 10 characters.';
  }

  return errors;
}

function buildMessage(values: FormValues) {
  return [
    `Name: ${values.name.trim()}`,
    `Contact: ${values.contact.trim()}`,
    `Subject: ${values.subject.trim()}`,
    '',
    'Message:',
    values.message.trim(),
    '',
    '— Sent from rushikeshseeds website',
  ].join('\n');
}

export default function ContactSection() {
  const [values, setValues] = useState<FormValues>(emptyValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'invalid' | 'ready'>('idle');
  const [copied, setCopied] = useState(false);

  const mailtoHref = `mailto:${company.email}?subject=${encodeURIComponent(
    values.subject.trim() || 'Website enquiry',
  )}&body=${encodeURIComponent(buildMessage(values))}`;

  const update = (field: keyof FormValues) => (event: { target: { value: string } }) => {
    setValues((previous) => ({ ...previous, [field]: event.target.value }));
    setErrors((previous) => (previous[field] ? { ...previous, [field]: undefined } : previous));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);

    const firstInvalid = (Object.keys(found) as (keyof FormValues)[])[0];
    if (firstInvalid) {
      setStatus('invalid');
      document.getElementById(`contact-${firstInvalid}`)?.focus();
      return;
    }

    setStatus('ready');
    setCopied(false);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(buildMessage(values));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const contactCards = [
    {
      icon: Phone,
      label: 'Call us',
      value: company.phone.display,
      href: `tel:${company.phone.tel}`,
      hrefLabel: `Call Rushikesh Seeds at ${company.phone.display}`,
    },
    {
      icon: Mail,
      label: 'Email us',
      value: company.email,
      href: `mailto:${company.email}`,
      hrefLabel: `Email Rushikesh Seeds at ${company.email}`,
    },
  ];

  return (
    <section id="contact" className="section-pad bg-cream">
      <div className="container-x">
        <SectionHeading
          eyebrow="Get in touch"
          title="Let's Grow Together"
          description="Whether you are a farmer, dealer, distributor or business partner — reach out and the Rushikesh Seeds team will get back to you."
          align="center"
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.15fr] lg:gap-10">
          <div className="flex flex-col gap-4">
            {contactCards.map((card) => (
              <Reveal key={card.label}>
                <a href={card.href} aria-label={card.hrefLabel} className="card group flex items-center gap-4 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                    <card.icon size={21} aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[0.7rem] font-bold uppercase tracking-[0.18em] text-ink/50">
                      {card.label}
                    </span>
                    <span className="mt-1 block break-words font-display text-[1.02rem] font-extrabold text-forest">
                      {card.value}
                    </span>
                  </span>
                </a>
              </Reveal>
            ))}

            <Reveal delay={90}>
              <div className="card p-5">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-forest text-leaf">
                    <MapPin size={21} aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <span className="block text-[0.7rem] font-bold uppercase tracking-[0.18em] text-ink/50">
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
                  className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-cream px-4 py-2 text-[0.82rem] font-semibold text-forest ring-1 ring-forest/12 transition-colors hover:bg-forest hover:text-white hover:ring-forest"
                >
                  Open in Maps <ExternalLink size={14} aria-hidden="true" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="rounded-[1.5rem] border border-dashed border-brand/40 bg-brand/5 p-5">
                <p className="text-[0.87rem] leading-relaxed text-ink/70">
                  <strong className="font-semibold text-forest">Office hours enquiry:</strong> for seasonal
                  availability, dealership or distribution discussions, call or email the team directly —
                  contact details above.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={80}>
            <div className="card p-6 md:p-8">
              <h3 className="font-display text-xl font-extrabold tracking-tight text-forest md:text-2xl">
                Send an enquiry
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">
                Fill in your details — this form checks them and prepares a ready-to-send email to{' '}
                <span className="font-semibold text-brand">{company.email}</span>.
              </p>

              <form noValidate onSubmit={handleSubmit} className="mt-6 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="field-label" htmlFor="contact-name">
                      Your name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      className="field-input"
                      placeholder="e.g. Suresh Patil"
                      value={values.name}
                      onChange={update('name')}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'contact-name-error' : undefined}
                    />
                    {errors.name ? (
                      <span className="field-error" id="contact-name-error" role="alert">
                        {errors.name}
                      </span>
                    ) : null}
                  </div>

                  <div>
                    <label className="field-label" htmlFor="contact-contact">
                      Phone or email
                    </label>
                    <input
                      id="contact-contact"
                      name="contact"
                      type="text"
                      autoComplete="tel"
                      className="field-input"
                      placeholder="+91 … or you@email.com"
                      value={values.contact}
                      onChange={update('contact')}
                      aria-invalid={Boolean(errors.contact)}
                      aria-describedby={errors.contact ? 'contact-contact-error' : undefined}
                    />
                    {errors.contact ? (
                      <span className="field-error" id="contact-contact-error" role="alert">
                        {errors.contact}
                      </span>
                    ) : null}
                  </div>
                </div>

                <div>
                  <label className="field-label" htmlFor="contact-subject">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    className="field-input"
                    placeholder="e.g. Dealership enquiry for Jalna district"
                    value={values.subject}
                    onChange={update('subject')}
                    aria-invalid={Boolean(errors.subject)}
                    aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
                  />
                  {errors.subject ? (
                    <span className="field-error" id="contact-subject-error" role="alert">
                      {errors.subject}
                    </span>
                  ) : null}
                </div>

                <div>
                  <label className="field-label" htmlFor="contact-message">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    className="field-input resize-y"
                    placeholder="Tell us what you are looking for — seeds, dealership, distribution or support."
                    value={values.message}
                    onChange={update('message')}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'contact-message-error' : undefined}
                  />
                  {errors.message ? (
                    <span className="field-error" id="contact-message-error" role="alert">
                      {errors.message}
                    </span>
                  ) : null}
                </div>

                <button type="submit" className="btn btn-primary w-full">
                  <Send size={16} aria-hidden="true" /> Prepare my message
                </button>

                <p className="text-xs leading-relaxed text-ink/55">
                  This site has no server-side form handling. Nothing is sent automatically — after checking
                  your details, you choose how to deliver the message.
                </p>
              </form>

              {status === 'invalid' ? (
                <div
                  className="mt-5 rounded-xl border border-orange-300 bg-orange-50 px-4 py-3 text-sm text-orange-900"
                  role="alert"
                >
                  Please correct the highlighted fields and submit again.
                </div>
              ) : null}

              {status === 'ready' ? (
                <div className="mt-5 rounded-2xl border border-brand/30 bg-brand/5 p-5" role="status">
                  <p className="flex items-center gap-2 font-display text-base font-extrabold text-forest">
                    <Check size={18} className="text-brand" aria-hidden="true" />
                    Your message is ready to send
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">
                    Nothing has been transmitted yet. Open your email app — the message below is already
                    filled in and addressed to {company.email}.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <a href={mailtoHref} className="btn btn-primary px-5 py-2.5 text-sm">
                      <Mail size={15} aria-hidden="true" /> Open email app
                    </a>
                    <button type="button" onClick={handleCopy} className="btn btn-outline-dark px-5 py-2.5 text-sm">
                      {copied ? (
                        <>
                          <Check size={15} aria-hidden="true" /> Copied
                        </>
                      ) : (
                        <>
                          <Copy size={15} aria-hidden="true" /> Copy message
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() => setStatus('idle')}
                      className="btn btn-outline-dark px-5 py-2.5 text-sm"
                    >
                      <Pencil size={15} aria-hidden="true" /> Edit
                    </button>
                  </div>
                </div>
              ) : null}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
