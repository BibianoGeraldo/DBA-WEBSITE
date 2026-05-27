'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useRevealObserver } from '@/hooks/useRevealObserver';
import { ContactBlock } from '@/components/sections/ContactBlock';
import { Icon } from '@/components/ui/Icon';
import { Arrow } from '@/components/ui/Arrow';
import { SERVICES, type Service } from '@/lib/data';

const SERVICES_HERO_IMG = 'https://picsum.photos/seed/dba-services/2400/800';

const TINT_BY_ICON: Record<string, { bg: string; fg: string }> = {
  tax:     { bg: '#ffe7e2', fg: '#c8243d' },
  book:    { bg: '#dceaff', fg: '#0165dd' },
  chart:   { bg: '#e3f8ee', fg: '#0a8f55' },
  people:  { bg: '#f0e2f5', fg: '#7e22ce' },
  academy: { bg: '#fff4cf', fg: '#cf8a18' },
  tech:    { bg: '#e3eff5', fg: '#1d6fa9' },
};

function ServiceTile({ s, featured, onOpen, onMeet, onMouseEnter, onMouseLeave }: {
  s: Service; featured: boolean;
  onOpen: () => void; onMeet: () => void;
  onMouseEnter: () => void; onMouseLeave: () => void;
}) {
  const tint     = TINT_BY_ICON[s.icon] || { bg: 'var(--c-blue-soft)', fg: 'var(--c-blue)' };
  const bg       = featured ? '#0165dd' : 'var(--c-bg-2)';
  const titleClr = featured ? '#fff' : 'var(--c-ink)';
  const bodyClr  = featured ? 'rgba(255,255,255,.94)' : 'var(--c-mute)';
  const iconBg   = featured ? 'rgba(255,255,255,.18)' : tint.bg;
  const iconFg   = featured ? '#fff' : tint.fg;
  const pillBg   = featured ? '#fff' : '#0165dd';
  const pillFg   = featured ? '#0165dd' : '#fff';
  const arrowBg  = featured ? '#0165dd' : '#fff';
  const arrowFg  = featured ? '#fff' : '#0165dd';
  const d = '.35s ease';
  return (
    <div onClick={onOpen} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
      style={{ background: bg, borderRadius: 18, padding: '28px 26px 24px', display: 'flex', flexDirection: 'column', minHeight: 320, transition: `background-color ${d}, box-shadow ${d}`, boxShadow: featured ? '0 14px 30px -16px rgba(1,101,221,.45)' : 'none', cursor: 'pointer' }}>
      <div style={{ width: 40, height: 40, borderRadius: 10, background: iconBg, color: iconFg, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18, transition: `background-color ${d}, color ${d}` }}>
        <Icon name={s.icon} size={20} />
      </div>
      <h3 style={{ color: titleClr, fontSize: 19, fontWeight: 600, letterSpacing: '-0.015em', lineHeight: 1.18, marginBottom: 14, transition: `color ${d}` }}>{s.title}</h3>
      <p style={{ color: bodyClr, fontSize: 13.5, lineHeight: 1.55, flex: 1, transition: `color ${d}` }}>{s.body}</p>
      <button onClick={(e) => { e.stopPropagation(); onMeet(); }}
        style={{ marginTop: 22, alignSelf: 'flex-start', background: pillBg, color: pillFg, border: 0, borderRadius: 999, padding: '5px 5px 5px 16px', display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 13, fontWeight: 500, cursor: 'pointer', transition: `background-color ${d}, color ${d}` }}>
        <span>Marcar Reunião</span>
        <span style={{ width: 28, height: 28, borderRadius: '50%', background: arrowBg, color: arrowFg, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', transition: `background-color ${d}, color ${d}` }}>
          <Arrow size={12} />
        </span>
      </button>
    </div>
  );
}

export default function ServicesPage() {
  const router = useRouter();
  const [hoverId, setHoverId] = useState<string | null>(null);
  useRevealObserver();

  return (
    <main className="page-enter svc-page">
      <section className="svc-hero">
        <div className="container">
          <h1 data-reveal className="svc-hero__title">Serviços</h1>
          <p data-reveal data-delay="120" className="svc-hero__lede">
            Soluções integradas de consultoria adaptadas à realidade do mercado moçambicano.
            Da auditoria à assessoria estratégica, cada serviço é desenhado para gerar valor mensurável ao negócio do cliente.
          </p>
        </div>
        <div className="svc-hero__divider" />
      </section>

      <section className="svc-image">
        <div className="container" data-reveal="zoom" data-delay="200">
          <div className="svc-image__frame" style={{ backgroundImage: `url(${SERVICES_HERO_IMG})` }} role="img" aria-label="Consultoria empresarial" />
        </div>
      </section>

      <section className="section svc-list">
        <div className="container">
          <div data-stagger className="svc-grid">
            {SERVICES.map(s => (
              <ServiceTile key={s.id} s={s}
                featured={s.id === hoverId}
                onMouseEnter={() => setHoverId(s.id)}
                onMouseLeave={() => setHoverId(null)}
                onOpen={() => router.push(`/services/${s.id}`)}
                onMeet={() => router.push('/contact')}
              />
            ))}
          </div>
        </div>
      </section>

      <ContactBlock />
    </main>
  );
}
