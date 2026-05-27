'use client';
import { useRef, useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { useRevealObserver } from '@/hooks/useRevealObserver';
import { ContactStrip } from '@/components/sections/ContactStrip';
import { Icon } from '@/components/ui/Icon';
import { ChevronLeft, ChevronRight } from '@/components/ui/Arrow';
import { TEAM, SOCIAL_LINKS, VALUES } from '@/lib/data';

const ABOUT_HERO_IMG = 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80';

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

function TeamCard({ person }: { person: typeof TEAM[0] }) {
  return (
    <div data-team-card className="team-card">
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
          {person.bio && <p className="team-card__back-bio">{person.bio}</p>}
          <a href={person.linkedin ?? SOCIAL_LINKS[0].href} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="team-card__back-linkedin">
            <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" style={{ display: 'block' }}><path d={SOCIAL_LINKS[0].path} /></svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function AboutPage() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
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
          <h1 data-reveal className="about-hero__title">Construída para a complexidade de fazer negócio em Moçambique.</h1>
          <p data-reveal data-delay="120" className="about-hero__lede">
            A DBA reúne consultores sénior com conhecimento local profundo e padrões de nível internacional ao serviço de investidores, multinacionais e empresas locais com ambição.
          </p>
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
          <h2 data-reveal className="about-team__title">Equipa</h2>
          <div style={{ position: 'relative' }}>
            {!atStart && <button className="svc-arrow svc-arrow--left" aria-label="Anterior" onClick={() => scrollBy(-1)}><ChevronLeft /></button>}
            {!atEnd && <button className="svc-arrow svc-arrow--right" aria-label="Próximo" onClick={() => scrollBy(1)}><ChevronRight /></button>}
            <div ref={trackRef} className="about-team__track svc-carousel-track">
              {TEAM.map(p => <TeamCard key={p.name} person={p} />)}
            </div>
          </div>
          <p className="about-team__note">
            Todos os engagements são liderados ou directamente supervisionados por um Partner DBA nomeado.<br />
            Não operamos um modelo de pura delegação.
          </p>
        </div>
      </section>

      <ContactStrip />
    </main>
  );
}
