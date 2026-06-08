'use client';
import { useRouter } from 'next/navigation';
import { useRevealObserver } from '@/hooks/useRevealObserver';
import { ContactStrip } from '@/components/sections/ContactStrip';
import { Arrow } from '@/components/ui/Arrow';

const AREAS = [
  {
    title: 'Programas de investimento ESG',
    body: 'Estruturamos programas e iniciativas ESG alinhados com prioridades de investimento, impacto, sustentabilidade e desenvolvimento local.',
    img: '/INVESTIMENTO.jpg',
  },
  {
    title: 'Desenvolvimento de negócio alinhado com o clima',
    body: 'Apoiamos empresas e investidores na criação, avaliação e implementação de modelos de negócio alinhados com a transição climática e energética.',
    img: '/densevolvimentoi.jpg',
  },
  {
    title: 'Bioenergia, Biocombustíveis & Clean Cooking',
    body: 'Apoiamos projectos de bioenergia, biocombustíveis, clean cooking e acesso à energia, desde a análise de mercado até à estruturação técnica, económica e financeira.',
    img: '/bioenergia.jpg',
  },
  {
    title: 'Avaliação socioeconómica',
    body: 'Desenvolvemos análises socioeconómicas, estudos de impacto e avaliação de benefícios para comunidades, investidores, doadores e instituições públicas.',
    img: '/socioenconomica.jpg',
  },
  {
    title: 'Preparação de documentos para DFIs',
    body: 'Apoiamos a preparação de concept notes, investment prospectuses, business cases, estudos de viabilidade e documentação para DFIs, doadores e financiadores internacionais.',
    img: '/preparacao%20de%20documentos.jpg',
  },
];

function AreaCard({ title, body, img }: { title: string; body: string; img: string }) {
  return (
    <div className="esg-area-card">
      <div className="esg-area-card__img" style={{ backgroundImage: `url(${img})` }} role="img" aria-label={title} />
      <div className="esg-area-card__content">
        <h3 className="esg-area-card__title">{title}</h3>
        <p className="esg-area-card__body">{body}</p>
      </div>
    </div>
  );
}

export default function EsgPage() {
  const router = useRouter();
  useRevealObserver();

  return (
    <main className="page-enter esg-page">
      <section className="esg-hero">
        <div className="container">
          <h1 data-reveal className="esg-hero__title">
            Apoiamos investimento climático, ESG e desenvolvimento sustentável em Moçambique.
          </h1>
          <p data-reveal data-delay="120" className="esg-hero__lede">
            Apoiamos empresas, investidores, DFIs, doadores e organizações de desenvolvimento na estruturação, avaliação e documentação de projectos ESG, clima, energia, bioenergia, clean cooking e impacto socioeconómico.
          </p>
        </div>
        <div className="esg-hero__divider" />
      </section>

      <section className="esg-body">
        <div className="container">
          <h2 data-reveal className="esg-areas__heading">Áreas de actuação</h2>
          <div data-stagger className="esg-areas__grid">
            {AREAS.map(a => (
              <AreaCard key={a.title} title={a.title} body={a.body} img={a.img} />
            ))}
          </div>
          <div data-reveal className="esg-cta">
            <button onClick={() => router.push('/contact')} className="esg-cta__btn">
              <span>Falar com a equipa ESG &amp; Climate</span>
              <span className="esg-cta__arrow"><Arrow size={13} /></span>
            </button>
          </div>
        </div>
      </section>

      <ContactStrip />
    </main>
  );
}
