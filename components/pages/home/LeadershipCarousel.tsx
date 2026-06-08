'use client';
import { useRef, useState, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from '@/components/ui/Arrow';
import { Icon } from '@/components/ui/Icon';
import { TEAM, SOCIAL_LINKS } from '@/lib/data';

type Person = typeof TEAM[0];

function TeamModal({ person, onClose }: { person: Person; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [onClose]);

  return createPortal(
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(0,0,0,.52)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px 16px', animation: 'fadeIn .2s ease' }}>
      <div onClick={e => e.stopPropagation()} style={{ background: '#fff', borderRadius: 24, overflow: 'hidden', width: '100%', maxWidth: 560, display: 'flex', flexDirection: 'column', boxShadow: '0 32px 64px -16px rgba(0,0,0,.32)', animation: 'slideUp .25s cubic-bezier(0.34,1.1,0.64,1)', maxHeight: '90vh' }}>
        <div style={{ display: 'flex', position: 'relative' }}>
          <div style={{ width: 140, flexShrink: 0, background: '#e8ecf0', position: 'relative', minHeight: 160, overflow: 'hidden' }}>
            {person.photo
              ? <Image src={person.photo} alt={person.name} fill style={{ objectFit: 'cover', objectPosition: 'top center' }} />
              : <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #0165dd22, #11bf7422)' }} />}
          </div>
          <div style={{ flex: 1, background: '#11bf74', padding: '28px 24px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
            <div style={{ fontSize: 20, fontWeight: 700, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.2 }}>{person.name}</div>
            {person.role && <div style={{ fontSize: 12, color: 'rgba(255,255,255,.85)', marginTop: 6, lineHeight: 1.45 }}>{person.role}</div>}
          </div>
          <button onClick={onClose} style={{ position: 'absolute', top: 14, right: 14, width: 32, height: 32, borderRadius: '50%', background: 'rgba(0,0,0,.18)', border: 0, color: '#fff', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="x" size={14} />
          </button>
        </div>
        <div style={{ padding: '28px 28px 24px', overflowY: 'auto', flex: 1 }}>
          {person.bio
            ? <p style={{ fontSize: 15, color: '#444', lineHeight: 1.7, margin: 0 }}>{person.bio}</p>
            : <p style={{ fontSize: 14, color: '#999', fontStyle: 'italic' }}>Bio em breve.</p>}
        </div>
        {person.linkedin && (
          <div style={{ padding: '16px 28px 24px', borderTop: '1px solid rgba(0,0,0,.07)' }}>
            <a href={person.linkedin} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13.5, fontWeight: 500, color: '#0165dd', textDecoration: 'none' }}>
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

function TeamCard({ person }: { person: Person }) {
  const [selected, setSelected] = useState(false);

  return (
    <>
      <div data-team-card className="team-card" onClick={() => setSelected(true)}>
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
                  className="team-card__back-linkedin" onClick={e => e.stopPropagation()}>
                  <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" style={{ display: 'block' }}><path d={SOCIAL_LINKS[0].path} /></svg>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      {selected && <TeamModal person={person} onClose={() => setSelected(false)} />}
    </>
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
