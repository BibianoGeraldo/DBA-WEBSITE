'use client';
import { useRouter } from 'next/navigation';
import { Arrow } from '@/components/ui/Arrow';
import { useWipe } from '@/hooks/useWipe';
import { useRevealObserver } from '@/hooks/useRevealObserver';
import { ContactBlock } from '@/components/sections/ContactBlock';
import { ServicesCarousel } from '@/components/pages/home/ServicesCarousel';
import { WhyCard } from '@/components/pages/home/WhyCard';
import { LeadershipCarousel } from '@/components/pages/home/LeadershipCarousel';
import { SERVICES } from '@/lib/data';

const HOME_HERO_IMG = 'https://picsum.photos/seed/dba-handshake/2400/560';
const QUEM_SOMOS_IMGS = {
  bulb:     'https://picsum.photos/seed/dba-office/600/600',
  building: 'https://picsum.photos/seed/dba-team/600/600',
};

function shade(hex: string, pct: number): string {
  const m = hex.match(/^#?([a-f0-9]{6})$/i);
  if (!m) return hex;
  const n = parseInt(m[1], 16);
  let r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  const t = pct < 0 ? 0 : 255, p = Math.abs(pct) / 100;
  r = Math.round((t - r) * p + r);
  g = Math.round((t - g) * p + g);
  b = Math.round((t - b) * p + b);
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function AudienceCard({ title, body, cta, color, colorHex, to }: { title: string; body: string; cta: string; color: string; colorHex: string; to: string }) {
  const router = useRouter();
  const wipe = useWipe();
  return (
    <div style={{ background: color, borderRadius: 22, padding: '36px 36px 28px', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 28, color: '#fff' }}>
      <div>
        <h3 style={{ color: '#fff', fontSize: 'clamp(22px, 2.2vw, 32px)', fontWeight: 500, letterSpacing: '-0.02em', marginBottom: 18, lineHeight: 1.1 }}>{title}</h3>
        <p style={{ color: 'rgba(255,255,255,.92)', fontSize: 15, lineHeight: 1.55, maxWidth: 460 }}>{body}</p>
      </div>
      <button ref={wipe.ref} className="audience-cta btn-wipe" onClick={() => router.push(to)} onMouseEnter={wipe.onMouseEnter} onMouseLeave={wipe.onMouseLeave}
        style={{ '--wipe-bg': shade(colorHex, -38), alignSelf: 'flex-start', background: '#fff', border: 0, borderRadius: 999, cursor: 'pointer' } as React.CSSProperties}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 18, padding: '6px 6px 6px 26px', fontSize: 15.5, fontWeight: 500, color: colorHex }}>
          <span className="wipe-text">{cta}</span>
          <span className="btn-circle" style={{ width: 38, height: 38, borderRadius: '50%', background: `linear-gradient(135deg, ${shade(colorHex, 10)} 0%, ${colorHex} 50%, ${shade(colorHex, -25)} 100%)`, color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            <Arrow size={14} />
          </span>
        </span>
        <span className="wipe-filled" aria-hidden="true" style={{ gap: 18, padding: '6px 6px 6px 26px', fontSize: 15.5, fontWeight: 500, color: '#fff' }}>
          <span className="wipe-text">{cta}</span>
          <span className="btn-circle" style={{ width: 38, height: 38, borderRadius: '50%', background: '#fff', color: 'var(--wipe-bg, var(--c-blue))', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            <Arrow size={14} />
          </span>
        </span>
      </button>
    </div>
  );
}

function IndustryPill({ color, label, href }: { color: string; label: string; href: string }) {
  const router = useRouter();
  return (
    <button className="ind-pill" onClick={() => router.push(href)}
      style={{ background: color, color: '#fff', border: 0, borderRadius: 999, height: 64, padding: '0 20px', fontSize: 16, fontWeight: 500, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
      {label}
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: .75 }}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="13 6 19 12 13 18"/></svg>
    </button>
  );
}

export default function HomePage() {
  const wipeAbout = useWipe();
  const router = useRouter();
  useRevealObserver();

  return (
    <main className="page-enter">
      <section style={{ position: 'relative' }}>
        <div className="container" style={{ paddingTop: 48, paddingBottom: 40, textAlign: 'center' }}>
          <h1 data-reveal style={{ marginBottom: 32, maxWidth: 1180, marginLeft: 'auto', marginRight: 'auto', fontSize: 'clamp(30px, 3.6vw, 48px)', fontWeight: 500, letterSpacing: '-0.025em', lineHeight: 1.1 }}>
            Consultoria com legado de Big 4.<br/>Excelência local, padrões internacionais.
          </h1>
          <p data-reveal data-delay="120" className="lede" style={{ margin: '0 auto', maxWidth: 720, fontSize: 'clamp(17px, 1.4vw, 21px)', color: 'var(--c-text)', lineHeight: 1.4 }}>
            Energia, ESG e investimento climático do research a prontidão para investimento.
          </p>
          <p data-reveal data-delay="220" style={{ margin: '28px auto 0', color: 'var(--c-mute)', fontSize: 14 }}>
            Mais de 100 projectos entregues com sucesso em diferentes sectores da economia.
          </p>
        </div>
        <div className="container" data-reveal="zoom" data-delay="300">
          <div style={{ borderRadius: 18, overflow: 'hidden', aspectRatio: '21/3.2', position: 'relative', boxShadow: 'var(--shadow-sm)' }}>
            <div className="img-hero-frame" style={{ position: 'absolute', inset: 0, backgroundImage: `url(${HOME_HERO_IMG})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
          </div>
        </div>
      </section>

      <section className="section section--tight" style={{ paddingTop: 24 }}>
        <div className="container">
          <div data-stagger style={{ display: 'grid', gridTemplateColumns: '55fr 45fr', gap: 20 }}>
            <AudienceCard title="Sou uma grande empresa" body="Apoio especializado para multinacionais e grandes grupos com operações em Moçambique." cta="Explorar os nossos serviços Corporate" color="var(--c-blue)" colorHex="#0165dd" to="/services" />
            <AudienceCard title="Sou uma PME" body="Descubra soluções criadas à medida para Pequenas e Médias Empresas moçambicanas" cta="Aceder ao PME-HUB" color="var(--c-green)" colorHex="#11bf74" to="/contact" />
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.05fr)', gap: 80, alignItems: 'center' }}>
          <div data-reveal>
            <h2 style={{ fontSize: 'clamp(26px, 2.8vw, 40px)', fontWeight: 500, marginBottom: 28 }}>Quem somos?</h2>
            <p style={{ fontSize: 16, color: 'var(--c-mute)', lineHeight: 1.65, maxWidth: 520, marginBottom: 40 }}>
              Fundada em 2023 por sócios com mais de 36 anos de experiência em Big Four, combinamos conhecimento local com padrões internacionais para oferecer serviços de excelência.
            </p>
            <button ref={wipeAbout.ref} onClick={() => router.push('/about')} className="btn-wipe"
              onMouseEnter={wipeAbout.onMouseEnter} onMouseLeave={wipeAbout.onMouseLeave}
              style={{ '--wipe-bg': 'var(--c-blue)', background: 'var(--c-bg-2)', border: 0, borderRadius: 999, cursor: 'pointer' } as React.CSSProperties}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 18, padding: '6px 6px 6px 24px', fontSize: 15, fontWeight: 500, color: 'var(--c-blue)' }}>
                <span className="wipe-text">Conheça-nos melhor</span>
                <span className="btn-circle" style={{ width: 38, height: 38, borderRadius: '50%', background: 'linear-gradient(135deg, #2589ee 0%, #0165dd 50%, #0a3e80 100%)', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Arrow size={14} />
                </span>
              </span>
              <span className="wipe-filled" aria-hidden="true" style={{ gap: 18, padding: '6px 6px 6px 24px', fontSize: 15, fontWeight: 500, color: '#fff' }}>
                <span className="wipe-text">Conheça-nos melhor</span>
                <span className="btn-circle" style={{ width: 38, height: 38, borderRadius: '50%', background: '#fff', color: 'var(--c-blue)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Arrow size={14} />
                </span>
              </span>
            </button>
          </div>
          <div data-reveal="right" data-stagger style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            {(['bulb', 'building'] as const).map(v => (
              <div key={v} style={{ aspectRatio: '1/1', borderRadius: 20, overflow: 'hidden', backgroundImage: `url(${QUEM_SOMOS_IMGS[v]})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div data-reveal="zoom" style={{ borderRadius: '20px 20px 0 0', overflow: 'hidden', aspectRatio: '21/5', position: 'relative', boxShadow: 'var(--shadow-sm)', marginBottom: 40 }}>
            <div className="img-hero-frame" style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://picsum.photos/seed/dba-why/2400/560)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
          </div>
          <h2 data-reveal style={{ textAlign: 'center', fontSize: 'clamp(24px, 2.6vw, 36px)', fontWeight: 500, marginBottom: 48 }}>Porquê Trabalhar Connosco?</h2>
          <div data-stagger style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            <WhyCard mesh="triangle" color="#1d6fa9" big="36+" label="Anos de Experiência" body="Nossa equipa possui mais de 36 anos de experiência acumulada em firmas Big Four." />
            <WhyCard mesh="sphere"   color="#0a0a0a" big="Moz"  label="Conhecimento Local"  body="Conhecimento profundo do contexto legal e fiscal moçambicano." />
            <WhyCard mesh="diamond"  color="#c8243d" big="Team" label="Equipa Sénior"       body="Equipa sénior envolvida diretamente em todos os projetos do início ao fim." />
            <WhyCard mesh="mobius"   color="#0a8f55" big="Bounds" label="Relações de Confiança" body="Construímos relações de longo prazo baseadas em confiança e entrega de valor." />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div data-reveal style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2 style={{ fontSize: 'clamp(26px, 2.8vw, 40px)', fontWeight: 500, marginBottom: 22 }}>Nossa equipa de liderança</h2>
            <p style={{ fontSize: 17, color: 'var(--c-mute)', lineHeight: 1.55, maxWidth: 720, marginInline: 'auto' }}>
              Conheça os especialistas por trás da DB &amp; Associados, com vasta experiência no mercado e compromisso com a excelência.
            </p>
          </div>
          <LeadershipCarousel />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ServicesCarousel services={SERVICES} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div data-reveal style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2 style={{ fontSize: 'clamp(28px, 3vw, 44px)', fontWeight: 600, letterSpacing: '-0.025em', marginBottom: 24 }}>Indústrias</h2>
            <p style={{ fontSize: 16, color: 'var(--c-mute)', lineHeight: 1.6, maxWidth: 1000, marginInline: 'auto' }}>
              Apoiamos empresas locais e multinacionais em sectores estratégicos da economia moçambicana.
            </p>
          </div>
          <div data-stagger style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            <IndustryPill color="#0165dd" label="Energia"          href="/industries#energia" />
            <IndustryPill color="#11bf74" label="Telecomunicações" href="/industries#telecomunicacoes" />
            <IndustryPill color="#0a0a0a" label="Grande Consumo"   href="/industries#grande-consumo" />
            <IndustryPill color="#c8243d" label="Sector Público"   href="/industries#sector-publico" />
          </div>
        </div>
      </section>

      <ContactBlock />
    </main>
  );
}
