'use client';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
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
  const [mounted, setMounted] = useState(false);
  const [lang, setLang] = useState<'PT' | 'EN'>('PT');
  const pathname = usePathname();
  const scrolled = useScrolled();

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';
    return () => { document.documentElement.style.overflow = ''; };
  }, [open]);

  useEffect(() => { setOpen(false); }, [pathname]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <div className={`header-wrap ${scrolled ? 'is-scrolled' : ''}`}>
        <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
          <div className="container header__row">
            <Link href="/" className="header__brand" aria-label="dBA – DB & Associados, página inicial" onClick={() => setOpen(false)}>
              <Logo size={40} />
            </Link>

            <nav className="nav">
              {NAV_LINKS.map(l => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`nav__link ${isActive(l.href) ? 'is-active' : ''}`}
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
              <button
                className="menu-toggle"
                onClick={() => setOpen(o => !o)}
                aria-label={open ? 'Fechar menu' : 'Abrir menu'}
                aria-expanded={open}
              >
                <Icon name={open ? 'x' : 'menu'} size={20} />
              </button>
            </div>
          </div>
        </header>
      </div>

      {mounted && createPortal(
        <div className={`mobile-nav${open ? ' is-open' : ''}`} aria-hidden={!open}>
          <div className="mobile-nav__inner">
            {NAV_LINKS.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className={`mobile-nav__link${isActive(l.href) ? ' is-active' : ''}`}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
