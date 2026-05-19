'use client';
import { useRef, useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from '@/components/ui/Arrow';
import { TEAM, SOCIAL_LINKS } from '@/lib/data';

function TeamCard({ person }: { person: typeof TEAM[0] }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div data-team-card className={`team-card${flipped ? ' is-flipped' : ''}`} onClick={() => setFlipped(f => !f)}>
      <div className="team-card__inner">
        <div className="team-card__face team-card__front">
          {person.photo
            ? <Image src={person.photo} alt={person.name} fill sizes="(max-width: 768px) 100vw, 256px" style={{ objectFit: 'cover', objectPosition: 'top center' }} />
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
          <a href={SOCIAL_LINKS[0].href} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="team-card__back-linkedin"
            onClick={e => e.stopPropagation()}>
            <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" style={{ display: 'block' }}><path d={SOCIAL_LINKS[0].path} /></svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export function LeadershipCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

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
    const step = card ? card.offsetWidth + 16 : 256;
    t.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  return (
    <div style={{ position: 'relative' }}>
      {!atStart && <button className="svc-arrow svc-arrow--left" aria-label="Anterior" onClick={() => scrollBy(-1)}><ChevronLeft /></button>}
      {!atEnd && <button className="svc-arrow svc-arrow--right" aria-label="Próximo" onClick={() => scrollBy(1)}><ChevronRight /></button>}
      <div ref={trackRef} className="about-team__track svc-carousel-track">
        {TEAM.map(p => <TeamCard key={p.name} person={p} />)}
      </div>
    </div>
  );
}
