'use client';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/ui/Logo';
import { Icon } from '@/components/ui/Icon';
import { EcosystemLauncher } from './EcosystemLauncher';
import { useScrolled } from '@/hooks/useScrolled';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/hooks/useTranslation';

export function Header() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const scrolled = useScrolled();
  const { lang, setLang } = useLanguage();
  const t = useTranslation();

  const lc = lang.toLowerCase();
  const NAV_LINKS = [
    { href: `/${lc}`,             label: t.nav.home },
    { href: `/${lc}/about`,       label: t.nav.about },
    { href: `/${lc}/industries`,  label: t.nav.industries },
    { href: `/${lc}/services`,    label: t.nav.services },
    { href: `/${lc}/investment`,  label: t.nav.investment },
    { href: `/${lc}/esg`,         label: t.nav.esg },
    { href: `/${lc}/contact`,     label: t.nav.contact },
  ];

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';
    return () => { document.documentElement.style.overflow = ''; };
  }, [open]);

  useEffect(() => { setOpen(false); }, [pathname]);

  const isActive = (href: string) => {
    if (href === `/${lc}`) return pathname === `/${lc}`;
    return pathname.startsWith(href);
  };

  return (
    <>
      <div className={`header-wrap ${scrolled ? 'is-scrolled' : ''}`}>
        <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
          <div className="container header__row">
            <Link href={`/${lc}`} className="header__brand" aria-label="dBA, página inicial" onClick={() => setOpen(false)}>
              <Logo size={40} withWordmark={false} />
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
