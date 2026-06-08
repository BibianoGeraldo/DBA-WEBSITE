'use client';
import { useRef, useState, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { useRevealObserver } from '@/hooks/useRevealObserver';
import { ContactStrip } from '@/components/sections/ContactStrip';
import { Icon } from '@/components/ui/Icon';
import { ChevronLeft, ChevronRight } from '@/components/ui/Arrow';
import { TEAM, SOCIAL_LINKS, VALUES } from '@/lib/data';

const ABOUT_HERO_IMG = '/about1.png';

type Person = typeof TEAM[0];

function ValueCard({ v }: { v: typeof VALUES[0] }) {
  return (
    <div className={`value-card ${v.dark ? 'value-card--dark' : ''}`}>
      <div className="value-card__head">
        <span className="value-card__icon"><Icon name={v.i} size={14} /></span>
        <span className="value-card__title">{v.t}</span>
      </div>
      <p className="value-card__desc">{v.d}</p>
    </div>
  );
}

function TeamModal({ person, onClose }: { person: Person; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [onClose]);

  return createPortal(
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(0,0,0,.52)', backdropFilter: 'blur(4px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '24px 16px', animation: 'fadeIn .2s ease',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: '#fff', borderRadius: 24, overflow: 'hidden',
          width: '100%', maxWidth: 560,
          display: 'flex', flexDirection: 'column',
          boxShadow: '0 32px 64px -16px rgba(0,0,0,.32)',
          animation: 'slideUp .25s cubic-bezier(0.34,1.1,0.64,1)',
          maxHeight: '90vh',
        }}
      >
        {/* Header with photo */}
        <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr', position: 'relative', minHeight: 160 }}>
          <div style={{ background: '#e8ecf0', position: 'relative' }}>
            {person.photo
              ? <Image src={person.photo} alt={person.name} fill style={{ objectFit: 'cover', objectPosition: 'top center' }} />
              : <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #0165dd22, #11bf7422)' }} />}
          </div>
          <div style={{ background: '#11bf74', padding: '28px 24px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
            <div style={{ fontSize: 20, fontWeight: 700, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.2 }}>{person.name}</div>
            {person.role && (
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,.85)', marginTop: 6, lineHeight: 1.45 }}>{person.role}</div>
            )}
          </div>
          <button
            onClick={onClose}
            style={{
              position: 'absolute', top: 14, right: 14,
              width: 32, height: 32, borderRadius: '50%',
              background: 'rgba(0,0,0,.18)', border: 0,
              color: '#fff', cursor: 'pointer', display: 'inline-flex',
              alignItems: 'center', justifyContent: 'center',
            }}
          >
            <Icon name="x" size={14} />
          </button>
        </div>

        {/* Bio */}
        <div style={{ padding: '28px 28px 24px', overflowY: 'auto', flex: 1 }}>
          {person.bio
            ? <p style={{ fontSize: 15, color: '#444', lineHeight: 1.7, margin: 0 }}>{person.bio}</p>
            : <p style={{ fontSize: 14, color: '#999', fontStyle: 'italic' }}>Bio em breve.</p>}
        </div>

        {/* Footer */}
        {person.linkedin && (
          <div style={{ padding: '16px 28px 24px', borderTop: '1px solid rgba(0,0,0,.07)', display: 'flex', alignItems: 'center', gap: 12 }}>
            <a
              href={person.linkedin} target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                fontSize: 13.5, fontWeight: 500, color: '#0165dd',
                textDecoration: 'none',
              }}
            >
              <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d={SOCIAL_LINKS[0].path} /></svg>
              Ver perfil no LinkedIn
            </a>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}

function TeamCard({ person, onOpen }: { person: Person; onOpen: () => void }) {
  return (
    <div data-team-card className="team-card" onClick={onOpen}>
      <div className="team-card__inner">
        <div className="team-card__face team-card__front">
          {person.photo
            ? <Image src={person.photo} alt={person.name} fill style={{ objectFit: 'cover', objectPosition: 'top center' }} />
            : <div style={{ background: '#c8cdd2', width: '100%', height: '100%' }} />}
          <div className="team-card__overlay">
            <div className="team-card__name">{person.name}</div>
            {person.role && <div className="team-card__role">{person.role}</div>}
          </div>
        </div>
        <div className="team-card__face team-card__back">
          <div className="team-card__name" style={{ color: '#fff' }}>{person.name}</div>
          {person.role && <div className="team-card__role" style={{ fontSize: 11.5, marginTop: 6, lineHeight: 1.4 }}>{person.role}</div>}
          {person.bio && (
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,.88)', lineHeight: 1.6, margin: '12px 0 0', flex: 1 }}>
              {person.bio.length > 220 ? person.bio.slice(0, person.bio.lastIndexOf(' ', 220)) : person.bio}
              {person.bio.length > 220 && (
                <>… <span style={{ fontWeight: 700, color: '#fff', cursor: 'pointer' }}>Ver mais</span></>
              )}
            </p>
          )}
          {person.linkedin && (
            <div style={{ marginTop: 14 }}>
              <a href={person.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="team-card__back-linkedin"
                onClick={e => e.stopPropagation()}>
                <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" style={{ display: 'block' }}><path d={SOCIAL_LINKS[0].path} /></svg>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function AboutPage() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [selected, setSelected] = useState<Person | null>(null);
  useRevealObserver();

  const updateScrollState = useCallback(() => {
    const t = trackRef.current;
    if (!t) return;
    const padLeft = parseFloat(getComputedStyle(t).paddingLeft) || 0;
    setAtStart(t.scrollLeft <= padLeft + 4);
    setAtEnd(t.scrollLeft + t.clientWidth >= t.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const t = trackRef.current;
    if (!t) return;
    updateScrollState();
    t.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);
    return () => { t.removeEventListener('scroll', updateScrollState); window.removeEventListener('resize', updateScrollState); };
  }, [updateScrollState]);

  const scrollBy = (dir: number) => {
    const t = trackRef.current;
    if (!t) return;
    const card = t.querySelector<HTMLElement>('[data-team-card]');
    const step = card ? card.offsetWidth + 16 : 280;
    t.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  return (
    <main className="page-enter about-page">
      <section className="about-hero">
        <div className="container">
          <h1 data-reveal className="about-hero__title">Construída para a complexidade de fazer negócios em Moçambique.</h1>
          <p data-reveal data-delay="120" className="about-hero__lede">
            A dBA reúne Partners e Directores com mais de 40 anos de experiência acumulada em firmas Big Four, redes internacionais de auditoria e consultoria, multinacionais e projectos estratégicos em Moçambique.
          </p>
          <div data-stagger className="about-hero__stats">
            <div className="about-hero__stat"><span className="about-hero__stat-value">40+</span><span className="about-hero__stat-label">Anos de experiência acumulada</span></div>
            <div className="about-hero__stat"><span className="about-hero__stat-value">Big Four</span><span className="about-hero__stat-label">Alumni &amp; Leadership</span></div>
            <div className="about-hero__stat"><span className="about-hero__stat-value">8</span><span className="about-hero__stat-label">Áreas de serviço</span></div>
            <div className="about-hero__stat"><span className="about-hero__stat-value">100+</span><span className="about-hero__stat-label">Projectos entregues</span></div>
          </div>
        </div>
        <div className="about-hero__divider" />
      </section>

      <section className="about-values">
        <div className="container">
          <div className="about-values__split">
            <div data-reveal="left" className="about-values__photo" style={{ backgroundImage: `url(${ABOUT_HERO_IMG})` }} role="img" aria-label="Aperto de mão entre profissionais" />
            <div data-stagger className="about-values__grid">
              {VALUES.map(v => <ValueCard key={v.t} v={v} />)}
            </div>
          </div>
        </div>
      </section>

      <section className="about-team">
        <div className="container">
          <h2 data-reveal className="about-team__title">A nossa equipa de liderança</h2>
          <div style={{ position: 'relative' }}>
            {!atStart && <button className="svc-arrow svc-arrow--left" aria-label="Anterior" onClick={() => scrollBy(-1)}><ChevronLeft /></button>}
            {!atEnd && <button className="svc-arrow svc-arrow--right" aria-label="Próximo" onClick={() => scrollBy(1)}><ChevronRight /></button>}
            <div ref={trackRef} className="about-team__track svc-carousel-track">
              {TEAM.map(p => <TeamCard key={p.name} person={p} onOpen={() => setSelected(p)} />)}
            </div>
          </div>
          <p className="about-team__note">
            Todos os projectos são liderados ou directamente supervisionados por um Partner dBA nomeado.<br />
            Não operamos um modelo de pura delegação.
          </p>
        </div>
      </section>

      {selected && <TeamModal person={selected} onClose={() => setSelected(null)} />}

      <ContactStrip />
    </main>
  );
}
