'use client';
import { useState, useRef, useCallback, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useRevealObserver } from '@/hooks/useRevealObserver';
import { ContactStrip } from '@/components/sections/ContactStrip';
import { Arrow, ChevronLeft, ChevronRight } from '@/components/ui/Arrow';
import { SERVICES, type Service } from '@/lib/data';

const SERVICE_DETAIL_IMGS: Record<string, string> = {
  fiscal:     'https://picsum.photos/seed/svc-fiscal/680/680',
  accounting: 'https://picsum.photos/seed/svc-accounting/680/680',
  valuation:  'https://picsum.photos/seed/svc-valuation/680/680',
  hr:         'https://picsum.photos/seed/svc-hr/680/680',
  academy:    'https://picsum.photos/seed/svc-academy/680/680',
  tech:       'https://picsum.photos/seed/svc-tech/680/680',
};

function OtherServiceCard({ s, onClick }: { s: Service; onClick: () => void }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      data-svc-other-card
      style={{
        display: 'flex', flexDirection: 'column', cursor: 'pointer',
        borderRadius: 28, overflow: 'hidden',
        background: hover ? '#11bf74' : 'var(--c-bg-2)',
        flex: '0 0 240px', width: 240,
        scrollSnapAlign: 'start',
        transform: hover ? 'translateY(-12px)' : 'none',
        transition: 'background-color .35s ease, transform .35s cubic-bezier(.2,.65,.2,1)',
        paddingTop: 12,
      }}
    >
      <div style={{ color: hover ? '#fff' : 'var(--c-ink)', padding: '22px 20px', fontSize: 14, fontWeight: 600, lineHeight: 1.25, letterSpacing: '-0.005em', minHeight: 88, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, transition: 'color .35s ease', flex: '0 0 auto' }}>
        <span>{s.title}</span>
        <span style={{ width: 26, height: 26, borderRadius: '50%', background: hover ? '#fff' : 'rgba(0,0,0,.08)', color: hover ? '#11bf74' : 'var(--c-ink)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 26px', transition: 'background-color .35s ease, color .35s ease' }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="13 6 19 12 13 18"/>
          </svg>
        </span>
      </div>
      <div style={{ flex: 1, minHeight: 200, overflow: 'hidden', borderTopLeftRadius: 28, borderTopRightRadius: 28, backgroundImage: `url(https://picsum.photos/seed/svc-${s.id}-thumb/400/300)`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
    </div>
  );
}

export default function ServiceDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  useRevealObserver();

  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateScrollState = useCallback(() => {
    const t = trackRef.current;
    if (!t) return;
    setAtStart(t.scrollLeft <= 4);
    setAtEnd(t.scrollLeft + t.clientWidth >= t.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const t = trackRef.current;
    if (!t) return;
    updateScrollState();
    t.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);
    return () => {
      t.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [updateScrollState]);

  const scrollBy = (dir: number) => {
    const t = trackRef.current;
    if (!t) return;
    const card = t.querySelector<HTMLElement>('[data-svc-other-card]');
    const step = card ? card.offsetWidth + 16 : 256;
    t.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  const s = SERVICES.find(x => x.id === id);
  if (!s) return (
    <main className="page-enter" style={{ paddingTop: 'calc(var(--header-h) + 80px)', textAlign: 'center', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div>
        <h1 style={{ fontSize: 'clamp(22px, 2.5vw, 32px)', fontWeight: 500, marginBottom: 16 }}>Serviço não encontrado</h1>
        <p style={{ color: 'var(--c-mute)', marginBottom: 32 }}>O serviço que procura não existe ou foi removido.</p>
        <a href="/services" className="btn btn--primary">Ver todos os serviços</a>
      </div>
    </main>
  );

  const others = SERVICES.filter(x => x.id !== s.id);
  const half = Math.ceil(s.areas.length / 2);
  const colA = s.areas.slice(0, half);
  const colB = s.areas.slice(half);
  const imgUrl = SERVICE_DETAIL_IMGS[s.id] ?? `https://picsum.photos/seed/svc-${s.id}/680/680`;

  return (
    <main className="page-enter">
      <section className="svc-hero">
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 data-reveal style={{ fontSize: 'clamp(28px, 3vw, 44px)', fontWeight: 500, marginBottom: 24 }}>{s.title}</h1>
          <p data-reveal data-delay="100" style={{ fontSize: 15, color: 'var(--c-mute)', lineHeight: 1.65, maxWidth: 720, marginInline: 'auto' }}>{s.body}</p>
        </div>
        <div className="svc-hero__divider" />
      </section>

      <section className="svc-detail-body">
        <div className="container svc-detail-layout">
          <div data-reveal="left" className="svc-detail-img">
            <div style={{ width: '100%', height: '100%', backgroundImage: `url(${imgUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
          </div>

          <div data-reveal="right" className="svc-detail-content">
            <h2 style={{ fontSize: 'clamp(22px, 2.2vw, 32px)', fontWeight: 500 }}>Áreas de actuação</h2>

            <div className="svc-areas-grid">
              {[colA, colB].map((col, idx) => (
                <ul key={idx} style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
                  {col.map(a => (
                    <li key={a} style={{ display: 'grid', gridTemplateColumns: '18px 1fr', gap: 12, alignItems: 'start', fontSize: 14, color: 'var(--c-blue)', fontWeight: 500 }}>
                      <span style={{ width: 18, height: 18, borderRadius: '50%', background: 'var(--c-blue)', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginTop: 1 }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="5 12 10 17 19 7"/></svg>
                      </span>
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              ))}
            </div>

            <button onClick={() => router.push('/contact')}
              style={{ alignSelf: 'flex-start', background: 'var(--c-bg-2)', border: 0, borderRadius: 999, padding: '6px 6px 6px 22px', display: 'inline-flex', alignItems: 'center', gap: 14, fontSize: 14, fontWeight: 500, color: 'var(--c-blue)', cursor: 'pointer' }}>
              <span>Marcar Reunião</span>
              <span style={{ width: 32, height: 32, borderRadius: '50%', background: '#0165dd', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <Arrow size={13} />
              </span>
            </button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 data-reveal style={{ textAlign: 'center', fontSize: 'clamp(24px, 2.8vw, 38px)', fontWeight: 500, marginBottom: 40, lineHeight: 1.2 }}>
            Conheça mais dos nossos<br/>Serviços &amp; Produtos
          </h2>
          <div style={{ position: 'relative' }}>
            {!atStart && (
              <button className="svc-arrow svc-arrow--left" aria-label="Anterior" onClick={() => scrollBy(-1)}>
                <ChevronLeft />
              </button>
            )}
            {!atEnd && (
              <button className="svc-arrow svc-arrow--right" aria-label="Próximo" onClick={() => scrollBy(1)}>
                <ChevronRight />
              </button>
            )}
            <div
              ref={trackRef}
              className="svc-carousel-track"
              style={{ display: 'flex', gap: 16, overflowX: 'auto', overflowY: 'visible', scrollSnapType: 'x mandatory', padding: '8px 0 24px' }}
            >
              {others.map(o => (
                <OtherServiceCard key={o.id} s={o} onClick={() => router.push(`/services/${o.id}`)} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactStrip />
    </main>
  );
}
