'use client';
import { useRouter } from 'next/navigation';
import { useRevealObserver } from '@/hooks/useRevealObserver';
import { ContactStrip } from '@/components/sections/ContactStrip';
import { Arrow } from '@/components/ui/Arrow';

const INVEST_HERO_IMG = '/INVESTMENT1.jpg';

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

function SupportBlock({ title, body }: { title: string; body: string }) {
  return (
    <div style={{ padding: '28px 28px 24px', background: 'var(--c-bg-2)', borderRadius: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
      <h4 style={{ fontSize: 17, fontWeight: 600, letterSpacing: '-0.015em', color: 'var(--c-ink)', lineHeight: 1.2 }}>{title}</h4>
      <p style={{ fontSize: 14, color: 'var(--c-mute)', lineHeight: 1.6 }}>{body}</p>
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
            Acompanhamento liderado por Partners na entrada no mercado, estruturação de investimento, execução local e conformidade contínua — com a dBA como ponto único de contacto em Moçambique.
          </p>
        </div>
        <div className="invest-hero__divider" />
      </section>

      <section className="invest-body">
        <div className="container">
          <div data-reveal="zoom" className="invest-photo" style={{ backgroundImage: `url(${INVEST_HERO_IMG})` }} role="img" aria-label="Vista aérea de Maputo" />

          <div data-reveal style={{ marginTop: 64, marginBottom: 48 }}>
            <h2 style={{ fontSize: 'clamp(22px, 2.4vw, 34px)', fontWeight: 500, letterSpacing: '-0.02em', marginBottom: 36 }}>Como apoiamos investidores</h2>
            <div data-stagger style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 18 }}>
              <SupportBlock
                title="Entrada no mercado"
                body="Estruturação inicial, constituição de sociedade, licenciamento, enquadramento fiscal e apoio à implementação local."
              />
              <SupportBlock
                title="Estruturação fiscal e cambial"
                body="Planeamento fiscal, controlo cambial, análise de incentivos, repatriamento de fundos e conformidade com obrigações locais."
              />
              <SupportBlock
                title="Due diligence e suporte à transacção"
                body="Apoio fiscal, financeiro, contabilístico e operacional em processos de aquisição, investimento, parceria ou desinvestimento."
              />
              <SupportBlock
                title="Execução e conformidade contínua"
                body="Apoio em contabilidade, reporting, payroll, compliance fiscal, governance, controlos internos e coordenação com stakeholders locais."
              />
            </div>
          </div>

          <div data-stagger className="invest-ctas">
            <InvestCTACard
              variant="blue"
              title="Receber oportunidades alinhadas com o seu perfil"
              subtitle="Submeta os seus critérios de investimento para receber oportunidades, sectores e projectos alinhados com o seu mandato."
              cta="Submeter critérios"
              onClick={() => router.push('/contact')}
            />
            <InvestCTACard
              variant="green"
              title="Falar com um Partner dBA"
              subtitle="Marque uma conversa de 30 minutos para discutir entrada no mercado, estruturação, riscos, compliance ou oportunidades em Moçambique."
              cta="Marcar reunião"
              onClick={() => router.push('/contact')}
            />
          </div>

          <p data-reveal style={{ marginTop: 48, fontSize: 14.5, color: 'var(--c-mute)', lineHeight: 1.65, maxWidth: 820, textAlign: 'center', marginInline: 'auto' }}>
            A dBA apoia investidores, multinacionais, grupos locais e instituições na navegação do ambiente fiscal, financeiro, regulatório e operacional moçambicano, combinando conhecimento local, liderança sénior e padrões internacionais.
          </p>
        </div>
      </section>

      <ContactStrip />
    </main>
  );
}
