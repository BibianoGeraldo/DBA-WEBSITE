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
  detail: string;
  areas: string[];
}

export const SERVICES: Service[] = [
  {
    id: 'fiscal',
    icon: 'tax',
    title: 'Consultoria Fiscal',
    short: 'Conformidade, optimização e representatividade local.',
    body: 'Ajudamos empresas a navegar pelo sistema fiscal moçambicano com segurança, rigor e visão estratégica. Prestamos apoio em compliance, planeamento fiscal, controvérsia, due diligence, preços de transferência, reembolsos, incentivos e controlo cambial.',
    detail: 'Apoiamos empresas, investidores e grupos económicos na gestão dos seus desafios fiscais em Moçambique, combinando conhecimento profundo da legislação local, experiência em firmas Big Four e uma abordagem prática orientada para decisões de negócio.\n\nPrestamos apoio em compliance, planeamento fiscal, controlo cambial, preços de transferência, due diligence, incentivos fiscais, reembolsos, contencioso e resolução de litígios fiscais.',
    areas: [
      'Planeamento e optimização fiscal',
      'Fiscalidade internacional e controlo cambial',
      'Incentivos fiscais e isenções',
      'Due diligence fiscal',
      'Preços de transferência',
      'Compliance fiscal e reporting',
      'Contencioso e resolução de litígios fiscais',
      'Reembolsos fiscais e regularização de créditos',
    ],
  },
  {
    id: 'audit',
    icon: 'check',
    title: 'Auditoria & Assurance',
    short: 'Rigor técnico, independência e confiança na informação financeira.',
    body: 'Prestamos serviços de auditoria, assurance e revisão de processos com foco em rigor técnico, independência, transparência e reforço da confiança na informação financeira.',
    detail: 'Apoiamos empresas, instituições e organizações na avaliação das suas demonstrações financeiras, controlos internos, processos de governação e mecanismos de conformidade, contribuindo para decisões mais seguras e maior credibilidade perante accionistas, financiadores, reguladores e demais stakeholders.',
    areas: [
      'Auditoria externa às demonstrações financeiras',
      'Auditoria interna e revisão de processos',
      'Assurance e procedimentos acordados',
      'Avaliação de controlos internos',
      'Revisão de compliance e governação',
      'Preparação para auditorias externas',
      'Apoio a comités de auditoria e órgãos de governação',
      'Revisão de reporting financeiro e processos contabilísticos',
    ],
  },
  {
    id: 'accounting',
    icon: 'book',
    title: 'Contabilidade, Reporting & Outsourcing',
    short: 'Reporting fiável e conformidade estatutária.',
    body: 'Apoiamos empresas na gestão contabilística, reporting financeiro, payroll, reconciliações, preparação de demonstrações financeiras e organização de processos internos, permitindo maior controlo, eficiência e conformidade.',
    detail: 'Apoiamos empresas na gestão contabilística, financeira e administrativa com rigor, eficiência e foco na conformidade. Assumimos processos críticos de backoffice para que a gestão tenha informação fiável, controlo financeiro e mais tempo para se concentrar no crescimento do negócio.\n\nPrestamos apoio em escrituração, reconciliações, payroll, contas a pagar e a receber, reporting financeiro, contas anuais, preparação para auditoria, organização documental e suporte a sistemas ERP.',
    areas: [
      'Escrituração contabilística e reconciliações',
      'Processamento salarial e gestão de activos',
      'Gestão de contas a pagar e a receber',
      'Preparação para auditorias externas',
      'Reporting financeiro e contas anuais',
      'Apoio a sistemas ERP e backoffice',
      'Payroll e obrigações declarativas',
      'Organização documental e controlo interno',
    ],
  },
  {
    id: 'valuation',
    icon: 'chart',
    title: 'Avaliação de Empresas & Assessoria Financeira',
    short: 'Decisões estratégicas com análises robustas.',
    body: 'Apoiamos decisões estratégicas com análises financeiras robustas, estudos de viabilidade, avaliação de empresas, modelação financeira, apoio a financiamento, capital raising, project finance e suporte a transacções.',
    detail: 'Apoiamos empresas, investidores e empreendedores na tomada de decisões financeiras estratégicas, através de análises robustas, modelos financeiros, estudos de viabilidade, avaliações independentes e apoio à estruturação de financiamento.\n\nCombinamos rigor técnico, conhecimento do mercado moçambicano e visão prática de negócio para apoiar decisões de investimento, crescimento, aquisição, venda, captação de capital e reestruturação financeira.',
    areas: [
      'Avaliação de empresas e activos',
      'Estudos de viabilidade económica e financeira',
      'Modelação financeira e análises de sensibilidade',
      'Apoio à obtenção de financiamento bancário, grants e investidores',
      'Capital raising e project finance',
      'Apoio a fusões, aquisições e desinvestimento',
      'Business plans e investment memoranda',
      'Análise financeira para decisões estratégicas',
    ],
  },
  {
    id: 'hr',
    icon: 'people',
    title: 'Recursos Humanos',
    short: 'Estruturar equipas, fortalecer liderança.',
    body: 'Apoiamos empresas na estruturação de equipas, modelos de competências, avaliação de desempenho, desenvolvimento de talento, mudança organizacional, payroll e processos de RH alinhados com a estratégia do negócio.',
    detail: 'Apoiamos empresas na estruturação da função de recursos humanos, desenvolvimento de talento, fortalecimento da liderança e criação de processos organizacionais alinhados com a estratégia do negócio.\n\nCombinamos experiência em gestão de pessoas, organização, cultura, desempenho e payroll para ajudar empresas a construir equipas mais fortes, produtivas e preparadas para crescer.',
    areas: [
      'Estruturação de departamentos de RH e organogramas',
      'Gestão estratégica de recursos humanos',
      'Modelos de competências e avaliação de desempenho',
      'Recrutamento, formação e desenvolvimento de talento',
      'Career development e planos de sucessão',
      'Change management e cultura organizacional',
      'Payroll e processos administrativos de RH',
      'Assessment centers e diagnóstico organizacional',
    ],
  },
  {
    id: 'tech',
    icon: 'tech',
    title: 'Tecnologia & Automação',
    short: 'ERP, RPA, cloud e transformação digital.',
    body: 'Apoiamos empresas na transformação digital de processos financeiros, fiscais e operacionais, através de ERP, automação, RPA, soluções cloud, análise de dados e ferramentas de controlo de gestão.',
    detail: 'Apoiamos empresas na transformação digital de processos financeiros, fiscais, contabilísticos e operacionais, com foco em eficiência, controlo, qualidade da informação e melhor tomada de decisão.\n\nCombinamos conhecimento de negócio, processos e tecnologia para implementar soluções práticas de ERP, automação, RPA, cloud, análise de dados e optimização de fluxos de trabalho.',
    areas: [
      'Implementação e optimização de sistemas ERP',
      'Automação de processos financeiros, fiscais e operacionais',
      'Migração, tratamento e análise de dados',
      'Soluções cloud e suporte técnico',
      'Consultoria tecnológica e redesenho de processos',
      'Dashboards e ferramentas de controlo de gestão',
      'RPA e integração entre sistemas',
      'Apoio à digitalização de backoffice',
    ],
  },
  {
    id: 'esg',
    icon: 'leaf',
    title: 'ESG & Climate Advisory',
    short: 'Investimento climático, ESG e desenvolvimento sustentável.',
    body: 'Apoiamos empresas, investidores e organizações de desenvolvimento na estruturação, avaliação e documentação de projectos ESG, clima, energia, bioenergia, clean cooking e impacto socioeconómico.',
    detail: 'Apoiamos empresas, investidores e organizações de desenvolvimento na estruturação, avaliação e documentação de projectos ESG, clima, energia, bioenergia, clean cooking e impacto socioeconómico.',
    areas: [
      'Programas de investimento ESG',
      'Desenvolvimento de negócio alinhado com o clima',
      'Bioenergia, Biocombustíveis & Clean Cooking',
      'Avaliação socioeconómica',
      'Preparação de documentos para DFIs',
    ],
  },
  {
    id: 'academy',
    icon: 'academy',
    title: 'Academia dBA',
    short: 'Cursos especializados para equipas de gestão.',
    body: 'Desenvolvemos cursos e formações especializadas em fiscalidade, contabilidade, finanças, liderança, compliance, gestão e outras áreas críticas para equipas empresariais e instituições.',
    detail: 'Desenvolvemos formações técnicas e executivas para equipas de finanças, fiscalidade, contabilidade, compliance, liderança e gestão, com conteúdos adaptados à realidade moçambicana e às necessidades específicas de cada organização.\n\nA Academia dBA combina experiência prática, conhecimento técnico e abordagem aplicada, ajudando empresas a reforçar competências internas, melhorar processos e preparar as suas equipas para decisões mais rigorosas.',
    areas: [
      'Formação técnica em fiscalidade, contabilidade e compliance',
      'Programas à medida para empresas e equipas de gestão',
      'Sessões presenciais e online com especialistas séniores',
      'Workshops executivos para liderança e tomada de decisão',
      'Formação em reporting, controlo interno e gestão financeira',
      'Capacitação em temas fiscais, laborais e regulatórios',
      'Programas de desenvolvimento de competências para equipas',
      'Academias internas para empresas e instituições',
    ],
  },
];

export interface TeamMember {
  name: string;
  role: string;
  photo: string;
  bio: string;
  linkedin?: string;
}

export const TEAM: TeamMember[] = [
  {
    name: 'Dércio da Barca',
    role: 'Managing Partner | Fiscalidade & Estratégia',
    photo: '/Team/dercio-da-barca.png',
    bio: 'Ex-Country Tax & Legal Partner da Deloitte Moçambique, com mais de 17 anos de experiência em firmas Big Four. Assessora empresas nacionais e internacionais em fiscalidade, investimento, M&A, controvérsia fiscal, compliance, reporting e controlo cambial. Reconhecido pela visão estratégica, abordagem prática e capacidade de liderar equipas multidisciplinares em projectos complexos.',
    linkedin: 'https://www.linkedin.com/in/dercio-da-barca-40079629/',
  },
  {
    name: 'Ivan Veloso',
    role: 'Partner | Fiscalidade',
    photo: '/Team/ivan-veloso.png',
    bio: 'Partner de Fiscalidade com mais de 15 anos de experiência em consultoria fiscal e financeira, incluindo funções de liderança em firmas internacionais como RSM, Deloitte e EY. Especialista em planeamento fiscal, compliance, M&A, telecomunicações, Oil & Gas e controlo cambial. Apoia empresas na estruturação de soluções fiscais alinhadas com os seus objectivos de negócio.',
    linkedin: 'https://www.linkedin.com/in/ivan-veloso-93430850/',
  },
  {
    name: 'Arlindo Gordhandás',
    role: 'Tax Director | Fiscalidade & Compliance',
    photo: '/Team/arlindo-gordhandas.png',
    bio: 'Tax Director com mais de 15 anos de experiência em auditoria, fiscalidade e contabilidade em Moçambique. Tem forte conhecimento do sistema fiscal moçambicano, IFRS e matérias de compliance, planeamento fiscal, investimento estrangeiro, segurança social e due diligence. Actua junto de clientes corporativos na resolução de matérias fiscais e contabilísticas complexas.',
    linkedin: 'https://www.linkedin.com/in/arlindo-gordhandas-a50341a1/',
  },
  {
    name: 'Fausto Massunga',
    role: 'Partner | Accounting & Outsourcing',
    photo: '/Team/fausto-massunga.png',
    bio: 'Certified Accountant com mais de 16 anos de experiência em contabilidade, fiscalidade, consultoria e financial advisory. Tem experiência em Deloitte & Touche, Area-Chave e projectos internacionais da Deloitte Consulting. Especialista em IAS/IFRS, reporting financeiro, outsourcing contabilístico e apoio à estruturação da função financeira das empresas.',
    linkedin: 'https://www.linkedin.com/in/fausto-massunga-4376aa167/',
  },
  {
    name: 'Marlo Boaventura',
    role: 'Partner | Financial Advisory',
    photo: '/Team/marlo-boaventura.png',
    bio: 'Profissional de investimento com 18 anos de experiência em corporate banking, investment banking, private equity e venture capital. Tem experiência em financial modelling, valuations, project finance, capital raising e apoio a transacções. Trabalhou com empresas nacionais e internacionais em sectores como agricultura, FMCG, serviços financeiros e investimento.',
    linkedin: 'https://www.linkedin.com/in/marlo-machavela-2103401a/',
  },
  {
    name: 'Eugénia Pião',
    role: 'Partner | Human Capital',
    photo: '',
    bio: 'Especialista em gestão de pessoas e desenvolvimento organizacional, com mais de 22 anos de experiência, incluindo 12 anos em Moçambique. Foi Strategic Advisor na EY e Head of People Solutions na RSM. Apoia empresas na estruturação de soluções de recursos humanos, desenvolvimento de talento, cultura, performance e transformação organizacional.',
    linkedin: 'https://www.linkedin.com/in/eugenia-piao/',
  },
  {
    name: 'Victor Matavel',
    role: 'ESG & Climate Advisory',
    photo: '',
    bio: 'Economista com 12 anos de experiência profissional, incluindo funções em organizações multinacionais como GE e Baker Hughes. Actua em projectos de energia, bioenergia, clean cooking, ESG, desenvolvimento de mercado e investimento climático. Tem trabalhado com governos, DFIs, doadores e sector privado em iniciativas de impacto e transição energética.',
  },
  {
    name: 'Fernando Muacha',
    role: 'Audit & Assurance',
    photo: '',
    bio: 'Auditor certificado pela OCAM, com mais de 18 anos de experiência em auditoria externa, análise financeira, controlo interno, governação e conformidade. Trabalhou na Deloitte Moçambique entre 2009 e 2024, exercendo funções progressivas de liderança em auditoria. Tem experiência em sectores como imobiliário, construção, agricultura, indústria, energia, telecomunicações, sector público e entidades reguladas.',
  },
];

export interface EcosystemItem {
  label: string;
  icon: string;
  color: string;
  href: string;
}

export const ECOSYSTEM_ITEMS: EcosystemItem[] = [
  { label: 'Consultoria Fiscal',     icon: 'tax',     color: '#0165dd', href: '/services/fiscal' },
  { label: 'Auditoria & Assurance',  icon: 'check',   color: '#0a6ea8', href: '/services/audit' },
  { label: 'Contabilidade',          icon: 'book',    color: '#11bf74', href: '/services/accounting' },
  { label: 'Avaliação Financeira',   icon: 'chart',   color: '#7e22ce', href: '/services/valuation' },
  { label: 'Recursos Humanos',       icon: 'people',  color: '#cf5a18', href: '/services/hr' },
  { label: 'Tecnologia & Automação', icon: 'tech',    color: '#00283c', href: '/services/tech' },
  { label: 'ESG & Climate',          icon: 'leaf',    color: '#0a8f55', href: '/services/esg' },
  { label: 'Academia dBA',           icon: 'academy', color: '#c8243d', href: '/services/academy' },
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
  'Acesso à Energia & Renováveis',
  'Bioenergia & Biocombustíveis',
  'Programas ESG & Clima',
  'Financiamento para o Desenvolvimento',
];

export const ESG_PROGRAMS = [
  { label: 'Programas de\ninvestimento ESG',                      img: 'https://picsum.photos/seed/esg-solar/440/440' },
  { label: 'Desenvolvimento de\nNegócio Alinhado com\no Clima',   img: 'https://picsum.photos/seed/climate-wind/440/440' },
  { label: 'Bioenergia\nBiocombustíveis\nClean Cooking',          img: 'https://picsum.photos/seed/bioenergy-cook/440/440' },
  { label: 'Avaliação\nSocioeconómica',                           img: 'https://picsum.photos/seed/community-moz/440/440' },
  { label: 'Preparação de\nDocumentos para\nDFIs',                img: 'https://picsum.photos/seed/dfi-finance/440/440' },
];

export const CONTACT_DIRECTS = [
  { area: 'Geral', email: 'info@dba.co.mz' },
];

export const VALUES = [
  { t: 'Excelência',        d: 'Entregamos com qualidade, atenção ao detalhe e melhoria contínua.',                              i: 'spark',  dark: false },
  { t: 'Transparência',     d: 'Mantemos comunicação clara, disciplina técnica e responsabilidade em cada entrega.',              i: 'spark',  dark: true  },
  { t: 'Rigor',             d: 'Aplicamos precisão técnica, pensamento crítico e controlo de qualidade em cada análise.',         i: 'check',  dark: true  },
  { t: 'Agilidade',         d: 'Respondemos com rapidez, pragmatismo e ownership.',                                               i: 'bolt',   dark: false },
  { t: 'Confidencialidade', d: 'Protegemos a informação, os dados e os interesses estratégicos dos nossos clientes.',             i: 'shield', dark: false },
  { t: 'Impacto',           d: 'Construímos soluções que geram valor, confiança e sustentabilidade.',                             i: 'heart',  dark: true  },
];
