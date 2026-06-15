'use client';
import { useRouter } from 'next/navigation';
import { Arrow } from '@/components/ui/Arrow';
import { useWipe } from '@/hooks/useWipe';
import { useRevealObserver } from '@/hooks/useRevealObserver';
import { ContactBlock } from '@/components/sections/ContactBlock';
import { ServicesCarousel } from '@/components/pages/home/ServicesCarousel';
import { WhyCard } from '@/components/pages/home/WhyCard';
import { LeadershipCarousel } from '@/components/pages/home/LeadershipCarousel';
import { useTranslation } from '@/hooks/useTranslation';

const HOME_HERO_IMG = '/home1.jpg';
const QUEM_SOMOS_IMGS = {
  bulb:     '/home2.jpg',
  building: '/home3.jpg',
};

function shade(hex: string, pct: number): string {
  const m = hex.match(/^#?([a-f0-9]{6})$/i);
  if (!m) return hex;
  const n = parseInt(m[1], 16);
  let r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  const tv = pct < 0 ? 0 : 255, p = Math.abs(pct) / 100;
  r = Math.round((tv - r) * p + r);
  g = Math.round((tv - g) * p + g);
  b = Math.round((tv - b) * p + b);
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function AudienceCard({ title, body, cta, color, colorHex, to }: { title: string; body: string; cta: string; color: string; colorHex: string; to: string }) {
  const router = useRouter();
  const wipe = useWipe();
  return (
    <div className="audience-card" style={{ background: color, borderRadius: 22, padding: '36px 36px 28px', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 28, color: '#fff' }}>
      <div>
        <h3 style={{ color: '#fff', fontSize: 'clamp(22px, 2.2vw, 32px)', fontWeight: 500, letterSpacing: '-0.02em', marginBottom: 18, lineHeight: 1.1 }}>{title}</h3>
        <p style={{ color: 'rgba(255,255,255,.92)', fontSize: 15, lineHeight: 1.55, maxWidth: 460 }}>{body}</p>
      </div>
      <button ref={wipe.ref} className="audience-cta btn-wipe" onClick={() => to.startsWith('http') ? window.open(to, '_blank', 'noopener,noreferrer') : router.push(to)} onMouseEnter={wipe.onMouseEnter} onMouseLeave={wipe.onMouseLeave}
        style={{ '--wipe-bg': shade(colorHex, -38), alignSelf: 'flex-start', cursor: 'pointer', borderRadius: 999 } as React.CSSProperties}>
        <span className="btn-wipe-inner" style={{ background: '#fff' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 18, padding: '6px 6px 6px 26px', fontSize: 15.5, fontWeight: 500, color: colorHex }}>
            <span className="wipe-text">{cta}</span>
            <span className="btn-circle" style={{ width: 38, height: 38, borderRadius: '50%', backgroundColor: colorHex, color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Arrow size={14} />
            </span>
          </span>
          <span className="wipe-filled" aria-hidden="true" />
        </span>
      </button>
    </div>
  );
}

function IndustryPill({ color, label, href }: { color: string; label: string; href: string }) {
  const router = useRouter();
  const handleClick = () => {
    const [path, hash] = href.split('#');
    router.push(hash ? `${path}?to=${hash}` : href);
  };
  return (
    <button className="ind-pill" onClick={handleClick}
      style={{ background: color, color: '#fff', border: 0, borderRadius: 999, height: 64, padding: '0 20px', fontSize: 16, fontWeight: 500, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
      {label}
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: .75 }}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="13 6 19 12 13 18"/></svg>
    </button>
  );
}

export default function HomePage() {
  const wipeAbout = useWipe();
  const router = useRouter();
  const t = useTranslation();
  useRevealObserver();

  return (
    <main className="page-enter">
      <section style={{ position: 'relative' }}>
        <div className="container" style={{ paddingTop: 48, paddingBottom: 40, textAlign: 'center' }}>
          <h1 data-reveal style={{ marginBottom: 32, maxWidth: 1180, marginLeft: 'auto', marginRight: 'auto', fontSize: 'clamp(30px, 3.6vw, 48px)', fontWeight: 500, letterSpacing: '-0.025em', lineHeight: 1.1 }}>
            {t.home.heroTitle.split('\n').map((line, i) => (
              <span key={i}>{line}{i === 0 && <br/>}</span>
            ))}
          </h1>
          <p data-reveal data-delay="120" className="lede" style={{ margin: '0 auto', maxWidth: 720, fontSize: 'clamp(17px, 1.4vw, 21px)', color: 'var(--c-text)', lineHeight: 1.4 }}>
            {t.home.heroLede}
          </p>
          <p data-reveal data-delay="220" style={{ margin: '28px auto 0', color: 'var(--c-mute)', fontSize: 14 }}>
            {t.home.heroNote}
          </p>
        </div>
        <div className="container" data-reveal="zoom" data-delay="300">
          <div className="hero-banner">
            <div className="img-hero-frame" style={{ position: 'absolute', inset: 0, backgroundImage: `url(${HOME_HERO_IMG})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
          </div>
        </div>
      </section>

      <section className="section section--tight" style={{ paddingTop: 24 }}>
        <div className="container">
          <div data-stagger className="audience-grid">
            <AudienceCard title={t.home.audienceLarge} body={t.home.audienceLargeBody} cta={t.home.audienceLargeCta} color="var(--c-blue)" colorHex="#0165dd" to="/services" />
            <AudienceCard title={t.home.audienceSme}   body={t.home.audienceSmeBody}   cta={t.home.audienceSmeCta}   color="var(--c-green)" colorHex="#11bf74" to="https://dbapmehub.co.mz/" />
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container about-split">
          <div data-reveal>
            <h2 style={{ fontSize: 'clamp(26px, 2.8vw, 40px)', fontWeight: 500, marginBottom: 28 }}>{t.home.aboutTitle}</h2>
            <p style={{ fontSize: 16, color: 'var(--c-mute)', lineHeight: 1.65, maxWidth: 520, marginBottom: 40 }}>
              {t.home.aboutBody}
            </p>
            <button ref={wipeAbout.ref} onClick={() => router.push('/about')} className="btn-wipe"
              onMouseEnter={wipeAbout.onMouseEnter} onMouseLeave={wipeAbout.onMouseLeave}
              style={{ '--wipe-bg': 'var(--c-blue)', cursor: 'pointer', borderRadius: 999 } as React.CSSProperties}>
              <span className="btn-wipe-inner" style={{ background: 'var(--c-bg-2)' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 18, padding: '6px 6px 6px 24px', fontSize: 15, fontWeight: 500, color: 'var(--c-blue)' }}>
                  <span className="wipe-text">{t.home.aboutCta}</span>
                  <span className="btn-circle" style={{ width: 38, height: 38, borderRadius: '50%', backgroundColor: '#0165dd', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Arrow size={14} />
                  </span>
                </span>
                <span className="wipe-filled" aria-hidden="true" />
              </span>
            </button>
          </div>
          <div data-reveal="right" data-stagger className="about-imgs">
            {(['bulb', 'building'] as const).map(v => (
              <div key={v} style={{ aspectRatio: '1/1', borderRadius: 20, overflow: 'hidden', backgroundImage: `url(${QUEM_SOMOS_IMGS[v]})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div data-reveal="zoom" className="why-banner">
            <div className="img-hero-frame" style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/home4.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
          </div>
          <h2 data-reveal style={{ textAlign: 'center', fontSize: 'clamp(24px, 2.6vw, 36px)', fontWeight: 500, marginBottom: 48 }}>{t.home.whyTitle}</h2>
          <div data-stagger className="why-grid">
            <WhyCard mesh="triangle" color="#1d6fa9" big="40+" label={t.home.why40Label}     body={t.home.why40Body} />
            <WhyCard mesh="sphere"   color="#0a0a0a" big="Moz"    label={t.home.whyMozLabel}   body={t.home.whyMozBody} />
            <WhyCard mesh="diamond"  color="#c8243d" big="Senior" label={t.home.whySeniorLabel} body={t.home.whySeniorBody} />
            <WhyCard mesh="mobius"   color="#0a8f55" big="Trust"  label={t.home.whyTrustLabel}  body={t.home.whyTrustBody} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div data-reveal style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2 style={{ fontSize: 'clamp(26px, 2.8vw, 40px)', fontWeight: 500, marginBottom: 22 }}>{t.home.teamTitle}</h2>
            <p style={{ fontSize: 17, color: 'var(--c-mute)', lineHeight: 1.55, maxWidth: 720, marginInline: 'auto' }}>
              {t.home.teamLede}
            </p>
          </div>
          <LeadershipCarousel />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ServicesCarousel services={t.servicesData} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div data-reveal style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2 style={{ fontSize: 'clamp(28px, 3vw, 44px)', fontWeight: 600, letterSpacing: '-0.025em', marginBottom: 24 }}>{t.home.industriesTitle}</h2>
            <p style={{ fontSize: 16, color: 'var(--c-mute)', lineHeight: 1.6, maxWidth: 1000, marginInline: 'auto' }}>
              {t.home.industriesLede}
            </p>
          </div>
          <div data-stagger className="ind-pills-grid">
            <IndustryPill color="#0165dd" label={t.home.pillEnergy} href="/industries#energia" />
            <IndustryPill color="#11bf74" label={t.home.pillTelco}  href="/industries#telecomunicacoes" />
            <IndustryPill color="#0a0a0a" label={t.home.pillFmcg}   href="/industries#grande-consumo" />
            <IndustryPill color="#c8243d" label={t.home.pillAll}    href="/industries" />
          </div>
        </div>
      </section>

      <ContactBlock />
    </main>
  );
}
