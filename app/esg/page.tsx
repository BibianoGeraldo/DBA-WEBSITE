'use client';
import { Fragment } from 'react';
import { useRevealObserver } from '@/hooks/useRevealObserver';
import { ContactStrip } from '@/components/sections/ContactStrip';
import { ESG_PROGRAMS } from '@/lib/data';

function EsgTile({ label, img }: { label: string; img: string }) {
  return (
    <div className="esg-tile">
      <div className="esg-tile__img" style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }} role="img" aria-label={label.replace(/\n/g, ' ')} />
      <div className="esg-tile__label">
        {label.split('\n').map((line, i, arr) => (
          <Fragment key={i}>{line}{i < arr.length - 1 && <br />}</Fragment>
        ))}
      </div>
    </div>
  );
}

export default function EsgPage() {
  useRevealObserver();

  return (
    <main className="page-enter esg-page">
      <section className="esg-hero">
        <div className="container">
          <h1 data-reveal className="esg-hero__title">
            A firma de referência para investimento alinhado com o clima em Moçambique.
          </h1>
        </div>
        <div className="esg-hero__divider" />
      </section>

      <section className="esg-body">
        <div className="container">
          <div data-stagger className="esg-row esg-row--3">
            {ESG_PROGRAMS.slice(0, 3).map(p => (
              <EsgTile key={p.label} label={p.label} img={p.img} />
            ))}
          </div>
          <div data-stagger className="esg-row esg-row--2">
            {ESG_PROGRAMS.slice(3).map(p => (
              <EsgTile key={p.label} label={p.label} img={p.img} />
            ))}
          </div>
        </div>
      </section>

      <ContactStrip />
    </main>
  );
}
