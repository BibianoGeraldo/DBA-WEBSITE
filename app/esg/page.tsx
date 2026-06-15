'use client';
import { useRouter } from 'next/navigation';
import { useRevealObserver } from '@/hooks/useRevealObserver';
import { ContactStrip } from '@/components/sections/ContactStrip';
import { Arrow } from '@/components/ui/Arrow';
import { useTranslation } from '@/hooks/useTranslation';
import type { TEsgArea } from '@/lib/translations';

function AreaCard({ title, body, img }: TEsgArea) {
  return (
    <div className="esg-area-card">
      <div className="esg-area-card__img" style={{ backgroundImage: `url(${img})` }} role="img" aria-label={title} />
      <div className="esg-area-card__content">
        <h3 className="esg-area-card__title">{title}</h3>
        <p className="esg-area-card__body">{body}</p>
      </div>
    </div>
  );
}

export default function EsgPage() {
  const router = useRouter();
  const t = useTranslation();
  useRevealObserver();

  return (
    <main className="page-enter esg-page">
      <section className="esg-hero">
        <div className="container">
          <h1 data-reveal className="esg-hero__title">{t.esg.heroTitle}</h1>
          <p data-reveal data-delay="120" className="esg-hero__lede">{t.esg.heroLede}</p>
        </div>
        <div className="esg-hero__divider" />
      </section>

      <section className="esg-body">
        <div className="container">
          <h2 data-reveal className="esg-areas__heading">{t.esg.areasTitle}</h2>
          <div data-stagger className="esg-areas__grid">
            {t.esgAreas.map(a => (
              <AreaCard key={a.title} title={a.title} body={a.body} img={a.img} />
            ))}
          </div>
          <div data-reveal className="esg-cta">
            <button onClick={() => router.push('/contact')} className="esg-cta__btn">
              <span>{t.esg.ctaBtn}</span>
              <span className="esg-cta__arrow"><Arrow size={13} /></span>
            </button>
          </div>
        </div>
      </section>

      <ContactStrip />
    </main>
  );
}
