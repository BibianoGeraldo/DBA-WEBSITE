'use client';
import { useRouter } from 'next/navigation';
import { useRevealObserver } from '@/hooks/useRevealObserver';
import { ContactStrip } from '@/components/sections/ContactStrip';
import { Arrow } from '@/components/ui/Arrow';

const INVEST_HERO_IMG = 'https://picsum.photos/seed/dba-maputo-aerial/2400/900';

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

export default function InvestmentPage() {
  const router = useRouter();
  useRevealObserver();

  return (
    <main className="page-enter invest-page">
      <section className="invest-hero">
        <div className="container">
          <h1 data-reveal className="invest-hero__title">
            Invista em Moçambique com clareza, conformidade e velocidade.
          </h1>
          <p data-reveal data-delay="120" className="invest-hero__lede">
            Acompanhamento liderado por Partners entrada no mercado, execução de investimento e
            conformidade contínua, com um ponto único de contacto.
          </p>
        </div>
        <div className="invest-hero__divider" />
      </section>

      <section className="invest-body">
        <div className="container">
          <div data-reveal="zoom" className="invest-photo" style={{ backgroundImage: `url(${INVEST_HERO_IMG})` }} role="img" aria-label="Vista aérea de Maputo" />
          <div data-stagger className="invest-ctas">
            <InvestCTACard variant="blue" title="Submeter critérios de investimento" subtitle="(Deal Alerts)" cta="Submeter" onClick={() => router.push('/contact')} />
            <InvestCTACard variant="green" title="Marcar Reunião" subtitle="(30 minutos)" cta="Marcar Reunião" onClick={() => router.push('/contact')} />
          </div>
        </div>
      </section>

      <ContactStrip />
    </main>
  );
}
