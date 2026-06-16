'use client';
import { LegalDoc, type LegalContent } from '@/components/sections/LegalDoc';
import { useLanguage } from '@/contexts/LanguageContext';

const PT: LegalContent = {
  title: 'Política de Cookies',
  updatedLabel: 'Última atualização',
  updated: 'Junho de 2026',
  intro:
    'Esta página explica como o website da dBA utiliza cookies. Usamos apenas um cookie estritamente funcional. Não usamos cookies de publicidade, marketing ou de seguimento (tracking).',
  sections: [
    {
      h: 'O que são cookies',
      body: [
        'Cookies são pequenos ficheiros de texto guardados no seu navegador quando visita um website. Permitem que o site recorde preferências entre visitas.',
      ],
    },
    {
      h: 'Cookies que utilizamos',
      body: [
        'Cookie de preferência de idioma («lang»): guarda o idioma que escolheu (Português ou Inglês) para que essa preferência seja respeitada quando regressa ao site, incluindo ao entrar pela página inicial.',
        'Finalidade: funcional (necessário ao funcionamento do seletor de idioma). Duração: 12 meses. Tipo: cookie primário (first-party), legível apenas por este site.',
        'Por ser um cookie estritamente necessário ao funcionamento pedido pelo utilizador, está isento de consentimento prévio nos termos da regulamentação aplicável.',
      ],
    },
    {
      h: 'O que NÃO utilizamos',
      body: [
        'Não utilizamos Google Analytics nem qualquer outra ferramenta de analítica, não usamos pixels de redes sociais, nem cookies de publicidade ou de seguimento entre sites.',
      ],
    },
    {
      h: 'Como gerir ou remover cookies',
      body: [
        'Pode apagar ou bloquear cookies nas definições do seu navegador. Se remover o cookie de idioma, o site voltará a apresentar o idioma por defeito ou o idioma do seu navegador na próxima visita.',
      ],
    },
    {
      h: 'Contacto',
      body: ['Para qualquer questão sobre esta política, contacte-nos em info@dba.co.mz.'],
    },
  ],
};

const EN: LegalContent = {
  title: 'Cookie Policy',
  updatedLabel: 'Last updated',
  updated: 'June 2026',
  intro:
    'This page explains how the dBA website uses cookies. We use only one strictly functional cookie. We do not use advertising, marketing or tracking cookies.',
  sections: [
    {
      h: 'What cookies are',
      body: [
        'Cookies are small text files stored in your browser when you visit a website. They let the site remember preferences between visits.',
      ],
    },
    {
      h: 'Cookies we use',
      body: [
        'Language preference cookie ("lang"): stores the language you selected (Portuguese or English) so your preference is honoured when you return, including when you land on the home page.',
        'Purpose: functional (required for the language switcher to work). Duration: 12 months. Type: first-party cookie, readable only by this site.',
        'As a strictly necessary cookie serving a function explicitly requested by the user, it is exempt from prior consent under applicable regulations.',
      ],
    },
    {
      h: 'What we do NOT use',
      body: [
        'We do not use Google Analytics or any other analytics tool, social-media pixels, or advertising/cross-site tracking cookies.',
      ],
    },
    {
      h: 'Managing or removing cookies',
      body: [
        'You can delete or block cookies in your browser settings. If you remove the language cookie, the site will show the default or your browser language again on your next visit.',
      ],
    },
    {
      h: 'Contact',
      body: ['For any question about this policy, contact us at info@dba.co.mz.'],
    },
  ],
};

export default function CookiesPage() {
  const { lang } = useLanguage();
  return <LegalDoc content={lang === 'EN' ? EN : PT} />;
}
