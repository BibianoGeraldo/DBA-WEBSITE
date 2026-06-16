'use client';
import Link from 'next/link';
import { LogoWordmark } from '@/components/ui/Logo';
import { useTranslation } from '@/hooks/useTranslation';
import { useLanguage } from '@/contexts/LanguageContext';

export function Footer() {
  const t = useTranslation();
  const { lang } = useLanguage();
  const lc = lang.toLowerCase();
  return (
    <footer style={{ background: '#fff', borderTop: '4px solid #0165dd', padding: '56px 0 48px', textAlign: 'center' }}>
      <div className="container">
        <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 28 }}>
          <LogoWordmark height={64} />
          <div style={{ fontSize: 14, color: 'var(--c-mute)' }}>
            dBA – {new Date().getFullYear()}. {t.footer.rights}
          </div>
          <div style={{ display: 'flex', gap: 20, fontSize: 13, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link href={`/${lc}/privacy`} className="footer-link">{t.footer.privacy}</Link>
            <Link href={`/${lc}/terms`} className="footer-link">{t.footer.terms}</Link>
            <Link href={`/${lc}/cookies`} className="footer-link">{t.footer.cookies}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
