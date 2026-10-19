import type { ReactNode } from 'react';

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'light' | 'outline-light' | 'outline-dark';
  className?: string;
  ariaLabel?: string;
  onClick?: () => void;
};

export default function ButtonLink({
  href,
  children,
  variant = 'primary',
  className = '',
  ariaLabel,
  onClick,
}: ButtonLinkProps) {
  return (
    <a href={href} className={`btn btn-${variant} ${className}`} aria-label={ariaLabel} onClick={onClick}>
      {children}
    </a>
  );
}
