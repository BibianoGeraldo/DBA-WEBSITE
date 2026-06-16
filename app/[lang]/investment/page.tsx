'use client';
import { useRouter } from 'next/navigation';
import { useRevealObserver } from '@/hooks/useRevealObserver';
import { ContactStrip } from '@/components/sections/ContactStrip';
import { Arrow } from '@/components/ui/Arrow';
import { useTranslation } from '@/hooks/useTranslation';
import { useLanguage } from '@/contexts/LanguageContext';

const INVEST_HERO_IMG = '/INVESTMENT1.jpg';

function InvestCTACard({ variant, title, subtitle, cta, onClick }: {
  variant: 'blue' | 'green'; title: string; subtitle: string; cta: string; onClick: () => void;
}) {
  const p = variant === 'green'
    ? { base: '#11bf74', light: '#3acd8e', dark: '#0c8f57' }
    : { base: '#0165dd', light: '#2589ee', dark: '#0a3e80' };
  return (
    <div className={`invest-cta invest-cta--${variant}`} style={{ background: p.base }}>
      <div>
        <h3 className="invest-cta__title">{title}</h3>
        <div className="invest-cta__subtitle">{subtitle}</div>
      </div>
      <button onClick={onClick} className="invest-cta__btn" style={{ color: p.base }}>
        <span>{cta}</span>
        <span className="invest-cta__arrow" style={{ background: `linear-gradient(135deg, ${p.light} 0%, ${p.base} 50%, ${p.dark} 100%)` }}>
          <Arrow size={12} />
        </span>
      </button>
    </div>
  );
}

function SupportBlock({ title, body }: { title: string; body: string }) {
  return (
    <div style={{ padding: '28px 28px 24px', background: 'var(--c-bg-2)', borderRadius: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
      <h4 style={{ fontSize: 17, fontWeight: 600, letterSpacing: '-0.015em', color: 'var(--c-ink)', lineHeight: 1.2 }}>{title}</h4>
      <p style={{ fontSize: 14, color: 'var(--c-mute)', lineHeight: 1.6 }}>{body}</p>
    </div>
  );
}

export default function InvestmentPage() {
  const router = useRouter();
  const t = useTranslation();
  const { lang } = useLanguage();
  const lc = lang.toLowerCase();
  useRevealObserver();

  return (
    <main className="page-enter invest-page">
      <section className="invest-hero">
        <div className="container">
          <h1 data-reveal className="invest-hero__title">{t.investment.heroTitle}</h1>
          <p data-reveal data-delay="120" className="invest-hero__lede">{t.investment.heroLede}</p>
        </div>
        <div className="invest-hero__divider" />
      </section>

      <section className="invest-body">
        <div className="container">
          <div data-reveal="zoom" className="invest-photo" style={{ backgroundImage: `url(${INVEST_HERO_IMG})` }} role="img" aria-label={t.investment.ariaImg} />

          <div data-reveal style={{ marginTop: 64, marginBottom: 48 }}>
            <h2 style={{ fontSize: 'clamp(22px, 2.4vw, 34px)', fontWeight: 500, letterSpacing: '-0.02em', marginBottom: 36 }}>{t.investment.howTitle}</h2>
            <div data-stagger style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 18 }}>
              <SupportBlock title={t.investment.block1Title} body={t.investment.block1Body} />
              <SupportBlock title={t.investment.block2Title} body={t.investment.block2Body} />
              <SupportBlock title={t.investment.block3Title} body={t.investment.block3Body} />
              <SupportBlock title={t.investment.block4Title} body={t.investment.block4Body} />
            </div>
          </div>

          <div data-stagger className="invest-ctas">
            <InvestCTACard variant="blue"  title={t.investment.cta1Title} subtitle={t.investment.cta1Sub} cta={t.investment.cta1Btn} onClick={() => router.push(`/${lc}/contact`)} />
            <InvestCTACard variant="green" title={t.investment.cta2Title} subtitle={t.investment.cta2Sub} cta={t.investment.cta2Btn} onClick={() => router.push(`/${lc}/contact`)} />
          </div>

          <p data-reveal style={{ marginTop: 48, fontSize: 14.5, color: 'var(--c-mute)', lineHeight: 1.65, maxWidth: 820, textAlign: 'center', marginInline: 'auto' }}>
            {t.investment.bottomPara}
          </p>
        </div>
      </section>

      <ContactStrip />
    </main>
  );
}
