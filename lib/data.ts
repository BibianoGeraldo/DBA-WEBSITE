export interface SocialLink {
  label: string;
  href: string;
  path: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/102394690/',
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/61586591864903/',
    path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/dba.consultingmz/',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/258852222016',
    path: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z',
  },
];

export interface Service {
  id: string;
  icon: string;
  title: string;
  short: string;
  body: string;
  areas: string[];
}

export const SERVICES: Service[] = [
  {
    id: 'fiscal',
    icon: 'tax',
    title: 'Consultoria Fiscal',
    short: 'Conformidade, optimização e representatividade local.',
    body: 'Ajudamos empresas a navegar pelo complexo sistema fiscal moçambicano com confiança e segurança. Oferecemos apoio completo desde a conformidade até à optimização fiscal, com assessoria contínua e representatividade local.',
    areas: [
      'Planeamento e optimização fiscal',
      'Controlo cambial e fiscalidade internacional',
      'Incentivos fiscais e isenções',
      'Due diligence fiscal',
      'Preços de transferência',
      'Cumprimento fiscal e reporte',
      'Contencioso e resolução de litígios fiscais',
    ],
  },
  {
    id: 'accounting',
    icon: 'book',
    title: 'Contabilidade, Reporting & Outsourcing',
    short: 'Reporting fiável e conformidade estatutária.',
    body: 'Gestão contabilística e financeira com rigor e eficiência. Cuidamos dos seus processos para que se foque no que realmente importa: fazer crescer o seu negócio.',
    areas: [
      'Escrituração e reconciliações',
      'Processamento salarial e gestão de activos',
      'Gestão de contas a pagar e a receber',
      'Preparação para auditorias externas',
      'Relatórios financeiros e contas anuais',
      'Apoio a sistemas ERP e backoffice',
    ],
  },
  {
    id: 'valuation',
    icon: 'chart',
    title: 'Avaliação de Empresas & Assessoria Financeira',
    short: 'Decisões estratégicas com análises robustas.',
    body: 'Apoiamos decisões estratégicas com análises financeiras robustas e estudos de viabilidade orientados para resultados.',
    areas: [
      'Apoio à obtenção de financiamento (bancário, grants e investidores)',
      'Estudos de viabilidade económica',
      'Modelação financeira e análises de sensibilidade',
      'Avaliação de empresas e activos',
      'Apoio a fusões, aquisições e desinvestimento',
      'Capital raising & project finance',
    ],
  },
  {
    id: 'hr',
    icon: 'people',
    title: 'Recursos Humanos',
    short: 'Estruturar equipas, fortalecer liderança.',
    body: 'Apoiamos empresas a estruturar equipas, fortalecer liderança e garantir processos sólidos de RH e payroll com foco em eficiência, conformidade e desempenho.',
    areas: [
      'Estruturação de departamentos e organogramas',
      'Recrutamento, formação e desenvolvimento de talento',
      'Gestão estratégica de recursos humanos',
      'Modelos de competências e avaliação de desempenho',
    ],
  },
  {
    id: 'academy',
    icon: 'academy',
    title: 'Academia DBA',
    short: 'Cursos especializados para equipas de gestão.',
    body: 'Cursos especializados em fiscalidade, contabilidade, liderança e outras áreas de negócio. Formação dedicada a equipas de finanças, compliance e gestão.',
    areas: [
      'Formação técnica nas áreas de fiscalidade, contabilidade, liderança e compliance',
      'Programas à medida para empresas e equipas de gestão',
      'Sessões presenciais ou online com especialistas seniores',
    ],
  },
  {
    id: 'tech',
    icon: 'tech',
    title: 'Tecnologia e Automação',
    short: 'ERP, RPA, cloud transformação digital.',
    body: 'Implementação de ERP, automação de processos (RPA), soluções cloud e transformação digital. Apoiamos a transformação digital dos processos de gestão com foco em eficiência e controlo.',
    areas: [
      'Migração e análise de dados',
      'Automação de processos com RPA',
      'Implementação e optimização de sistemas ERP',
      'Soluções cloud e suporte técnico',
      'Consultoria tecnológica e de processos',
    ],
  },
];

export interface TeamMember {
  name: string;
  role: string;
  photo: string;
  bio: string;
}

export const TEAM: TeamMember[] = [
  {
    name: 'Dércio da Barca',
    role: 'Managing Partner | Especialista em Fiscalidade e Estratégia',
    photo: '/Team/dercio-da-barca.png',
    bio: 'Ex-Partner da Deloitte Moçambique, com 18 anos de experiência na liderança de equipas fiscais e de consultoria. Reconhecido pela abordagem estratégica, capacidade de execução e visão de longo prazo.',
  },
  {
    name: 'Ivan Veloso',
    role: 'Managing Partner | Especialista em Fiscalidade e Estratégia',
    photo: '/Team/ivan-veloso.png',
    bio: 'Experiência sénior em planeamento fiscal, M&A e estruturação cross-border para grupos multinacionais com operações em Moçambique.',
  },
  { name: 'Arlindo Gordhandas', role: '',                                                                     photo: '/Team/arlindo-gordhandas.png', bio: '' },
  { name: 'Fausto Massunga',    role: '',                                                                     photo: '/Team/fausto-massunga.png',    bio: '' },
  { name: 'Marlo Boaventura',   role: '',                                                                     photo: '/Team/marlo-boaventura.png',   bio: '' },
];

export interface EcosystemItem {
  label: string;
  icon: string;
  color: string;
  href: string;
}

export const ECOSYSTEM_ITEMS: EcosystemItem[] = [
  { label: 'Consultoria Fiscal', icon: 'tax',      color: '#0165dd', href: 'https://dba.co.mz/fiscal' },
  { label: 'Contabilidade',      icon: 'book',     color: '#11bf74', href: 'https://dba.co.mz/contabilidade' },
  { label: 'Avaliação',          icon: 'chart',    color: '#7e22ce', href: 'https://dba.co.mz/avaliacao' },
  { label: 'Recursos Humanos',   icon: 'people',   color: '#cf5a18', href: 'https://dba.co.mz/rh' },
  { label: 'Academia DBA',       icon: 'academy',  color: '#c8243d', href: 'https://academia.dba.co.mz' },
  { label: 'Tecnologia',         icon: 'tech',     color: '#00283c', href: 'https://dba.co.mz/tecnologia' },
  { label: 'ESG & Climate',      icon: 'leaf',     color: '#0a8f55', href: 'https://esg.dba.co.mz' },
  { label: 'Investment Support', icon: 'compass',  color: '#0a6ea8', href: 'https://investment.dba.co.mz' },
  { label: 'Indústrias',         icon: 'building', color: '#cf8a18', href: 'https://dba.co.mz/industrias' },
];

export interface Industry {
  id: string;
  title: string;
  paras: string[];
  pillarsLabel?: string;
  pillars?: [string, string][];
  outro?: string;
}

export const INDUSTRIES_LEFT: Industry[] = [
  {
    id: 'servicos-financeiros',
    title: 'Serviços Financeiros',
    paras: [
      'O sector financeiro enfrenta uma transformação profunda, impulsionada pela digitalização e pelas novas exigências do mercado. Em Moçambique, este contexto exige inovação, confiança e crescimento sustentável.',
      'Na dBA, apoiamos instituições financeiras na modernização de processos, integração de soluções digitais e reforço da relação com o cliente. Combinamos conhecimento local e visão global para promover um sistema financeiro mais transparente, inclusivo e inovador.',
    ],
  },
  {
    id: 'telecomunicacoes',
    title: 'Telecomunicações',
    paras: [
      'O sector das telecomunicações é um motor essencial do desenvolvimento em Moçambique, impulsionando a transformação digital e aproximando empresas, instituições e cidadãos.',
      'Apesar dos desafios de infraestrutura e regulação, o sector apresenta um enorme potencial de crescimento. Na dBA, vemos as telecomunicações como um ecossistema estratégico que conecta pessoas, acelera a economia e molda o futuro com soluções sustentáveis e inovadoras.',
    ],
  },
  {
    id: 'grande-consumo',
    title: 'Grande Consumo (FMCG)',
    paras: [
      'É um dos sectores mais dinâmicos da economia, marcada pela elevada rotatividade de produtos essenciais como alimentos, bebidas, cuidados pessoais e domésticos.',
      'Na dBA, ajudamos as organizações deste sector a transformar desafios em oportunidades, aproveitando dados, inovação e estratégia para antecipar tendências e impulsionar crescimento sustentável.',
    ],
  },
  {
    id: 'agricultura',
    title: 'Agricultura & Agroindustria',
    paras: ['Eficiência operacional, compliance, estruturação financeira e apoio a investimento do campo a transformação.'],
  },
  {
    id: 'industria',
    title: 'Indústria & Manufatura',
    paras: ['Optimização de processos, controlo de custos, compliance e reporting para operações complexas.'],
  },
  {
    id: 'ongs',
    title: 'ONGs/Doadores',
    paras: ['Conformidade, reporting e controlo interno alinhados com requisitos de financiadores internacionais.'],
  },
];

export const INDUSTRIES_RIGHT: Industry[] = [
  {
    id: 'energia',
    title: 'Energia & Recursos Minerais',
    paras: [
      'A energia e os recursos minerais são pilares do desenvolvimento económico de Moçambique e da África Austral. Mais do que sectores estratégicos, representam o poder de transformar potencial em impacto.',
      'Na dBA, acreditamos que o setor está num ponto de viragem. O desafio é garantir disponibilidade e rentabilidade com sustentabilidade, transparência e inovação.',
    ],
    pillarsLabel: 'A nossa atuação centra-se em três eixos:',
    pillars: [
      ['Eficiência e Inovação', 'tecnologias que aumentam produtividade e reduzem custos.'],
      ['Sustentabilidade e Transição Energética', 'descarbonização, energias renováveis e economia circular.'],
      ['Impacto Social e Económico', 'inclusão e fortalecimento das comunidades locais.'],
    ],
    outro: 'Inspirados nas melhores práticas globais, adaptamos soluções à realidade moçambicana e Africana, ajudando empresas a liderar uma transformação energética com propósito e resultados concretos.',
  },
  {
    id: 'sector-publico',
    title: 'Sector Público',
    paras: [
      'O sector público em Moçambique enfrenta o desafio de equilibrar resiliência, sustentabilidade e inovação, criando valor real para a sociedade através de serviços eficientes e inclusivos.',
      'Na dBA, apoiamos instituições públicas na definição de estratégias que reforçam a transparência e impulsionam o desenvolvimento sustentável.',
    ],
  },
  {
    id: 'transporte',
    title: 'Transporte & Logística',
    paras: [
      'O sector de transportes e logística é vital para a integração económica e a competitividade dos mercados.',
      'Na dBA, promovemos inovação, eficiência e sustentabilidade. Ajudamos organizações a reforçar a resiliência e otimizar custos.',
    ],
  },
  {
    id: 'imobiliario',
    title: 'Imobiliário & Construção',
    paras: ['Estruturação fiscal, controlo financeiro, governação e reporting para projectos e carteiras.'],
  },
  {
    id: 'saude',
    title: 'Saúde & Farmacêutico',
    paras: ['Governação, compliance e robustez financeira num sector altamente regulado.'],
  },
  {
    id: 'hotelaria',
    title: 'Hotelaria & Turismo',
    paras: ['Eficiência, estruturação e compliance para negócios sazonais.'],
  },
];

export const ESG_PILLS = [
  'Energy Access & Renewables',
  'Bioenergy & Biofuels',
  'Climate & ESG Programmes',
  'Development Finance',
];

export const ESG_PROGRAMS = [
  { label: 'Programas de\ninvestimento ESG',                      img: 'https://picsum.photos/seed/esg-solar/440/440' },
  { label: 'Desenvolvimento de\nNegócio Alinhado com\no Clima',   img: 'https://picsum.photos/seed/climate-wind/440/440' },
  { label: 'Bioenergia\nBiocombustíveis\nClean Cooking',          img: 'https://picsum.photos/seed/bioenergy-cook/440/440' },
  { label: 'Avaliação\nSocioeconómica',                           img: 'https://picsum.photos/seed/community-moz/440/440' },
  { label: 'Preparação de\nDocumentos para\nDFIs',                img: 'https://picsum.photos/seed/dfi-finance/440/440' },
];

export const CONTACT_DIRECTS = [
  { area: 'Contabilidade & Outsourcing', email: 'outsourcing@dba.co.mz' },
  { area: 'Fiscalidade',                 email: 'fiscal@dba.co.mz' },
  { area: 'Geral',                       email: 'info@dba.co.mz' },
  { area: 'PME-HUB',                     email: 'pmehub@dba.co.mz' },
  { area: 'Recrutamento',                email: 'recrutamento@dba.co.mz' },
];

export const VALUES = [
  { t: 'Excelência',        d: 'Entregamos com qualidade, foco no detalhe e melhoria contínua.',     i: 'spark',  dark: false },
  { t: 'Transparência',     d: 'Standards internacionais e disciplina técnica em cada entrega.',      i: 'spark',  dark: true  },
  { t: 'Rigor',             d: 'Standards internacionais e disciplina técnica em cada entrega.',      i: 'check',  dark: true  },
  { t: 'Agilidade',         d: 'Resposta rápida, pragmática e com ownership.',                       i: 'bolt',   dark: false },
  { t: 'Confidencialidade', d: 'Protecção total da informação e do negócio do cliente.',              i: 'shield', dark: false },
  { t: 'Impacto',           d: 'Construimos soluções que geram valor e sustentabilidade.',            i: 'heart',  dark: true  },
];
