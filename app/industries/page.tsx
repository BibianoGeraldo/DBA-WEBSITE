'use client';
import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useRevealObserver } from '@/hooks/useRevealObserver';
import { ContactStrip } from '@/components/sections/ContactStrip';
import { useTranslation } from '@/hooks/useTranslation';
import type { TIndustry } from '@/lib/translations';

const INDUSTRY_HERO_IMG = '/industrias1.jpg';

function IndustryCard({ item }: { item: TIndustry }) {
  return (
    <article id={item.id} className="ind-card">
      <h3 className="ind-card__title">{item.title}</h3>
      {item.paras.map((p, idx) => <p key={idx} className="ind-card__p">{p}</p>)}
      {item.pillarsLabel && <p className="ind-card__p ind-card__p--label">{item.pillarsLabel}</p>}
      {item.pillars && (
        <ul className="ind-card__list">
          {item.pillars.map(([tv, d]) => (
            <li key={tv}><strong>{tv}:</strong>{d}</li>
          ))}
        </ul>
      )}
      {item.outro && <p className="ind-card__p">{item.outro}</p>}
    </article>
  );
}

function IndustriesPageInner() {
  const t = useTranslation();
  const searchParams = useSearchParams();
  const to = searchParams.get('to');
  useRevealObserver();

  useEffect(() => {
    const target = to || window.location.hash.replace('#', '');
    if (!target) return;
    const timer = setTimeout(() => {
      const el = document.getElementById(target);
      if (!el) return;
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el.classList.add('ind-card--hl');
      setTimeout(() => el.classList.remove('ind-card--hl'), 2200);
    }, 400);
    return () => clearTimeout(timer);
  }, [to]);

  return (
    <main className="page-enter ind-page">
      <section className="ind-hero">
        <div className="container">
          <h1 data-reveal className="ind-hero__title">{t.industries.heroTitle}</h1>
          <p data-reveal data-delay="120" className="ind-hero__lede">{t.industries.heroLede}</p>
        </div>
        <div className="ind-hero__divider" />
      </section>

      <section className="ind-image">
        <div className="container" data-reveal="zoom" data-delay="200">
          <div className="ind-image__frame" style={{ backgroundImage: `url(${INDUSTRY_HERO_IMG})` }} role="img" aria-label={t.industries.ariaImg} />
        </div>
      </section>

      <section className="ind-grid-section">
        <div className="container">
          <div className="ind-grid">
            <div data-reveal="left" className="ind-col">
              {t.industriesLeft.map(i => <IndustryCard key={i.id} item={i} />)}
            </div>
            <div data-reveal="right" className="ind-col">
              {t.industriesRight.map(i => <IndustryCard key={i.id} item={i} />)}
            </div>
          </div>
        </div>
      </section>

      <section className="ind-esg">
        <div className="container">
          <div data-stagger className="ind-esg__row">
            {t.esgPills.map(label => <div key={label} className="ind-esg__pill">{label}</div>)}
          </div>
        </div>
      </section>

      <ContactStrip />
    </main>
  );
}

export default function IndustriesPage() {
  return (
    <Suspense>
      <IndustriesPageInner />
    </Suspense>
  );
}
