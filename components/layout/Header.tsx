'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/ui/Logo';
import { Icon } from '@/components/ui/Icon';
import { EcosystemLauncher } from './EcosystemLauncher';
import { useScrolled } from '@/hooks/useScrolled';

const NAV_LINKS = [
  { href: '/',           label: 'Início' },
  { href: '/about',      label: 'Quem somos' },
  { href: '/industries', label: 'Indústrias' },
  { href: '/services',   label: 'Serviços' },
  { href: '/investment', label: 'Investment Support' },
  { href: '/esg',        label: 'ESG & Climate' },
  { href: '/contact',    label: 'Contactos' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<'PT' | 'EN'>('PT');
  const pathname = usePathname();
  const scrolled = useScrolled();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <div className={`header-wrap ${scrolled ? 'is-scrolled' : ''}`}>
      <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="container header__row">
          <Link href="/" className="header__brand" onClick={() => setOpen(false)}>
            <Logo size={40} />
          </Link>

          <nav className={`nav ${open ? 'is-open' : ''}`}>
            {NAV_LINKS.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className={`nav__link ${isActive(l.href) ? 'is-active' : ''}`}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="header__cta">
            <EcosystemLauncher />
            <div className="lang lang--pills" role="group" aria-label="Language">
              <button className={lang === 'PT' ? 'is-active' : ''} onClick={() => setLang('PT')} aria-label="Português">PT</button>
              <button className={lang === 'EN' ? 'is-active' : ''} onClick={() => setLang('EN')} aria-label="English">EN</button>
            </div>
            <button className="menu-toggle" onClick={() => setOpen(o => !o)} aria-label="Menu">
              <Icon name={open ? 'x' : 'menu'} size={20} />
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
