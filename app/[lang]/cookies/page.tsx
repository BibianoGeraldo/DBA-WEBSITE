'use client';
import { LegalDoc, type LegalContent } from '@/components/sections/LegalDoc';
import { useLanguage } from '@/contexts/LanguageContext';

const PT: LegalContent = {
  title: 'Política de Cookies',
  updatedLabel: 'Última actualização',
  updated: 'Junho de 2026',
  intro:
    'A presente Política de Cookies explica como a dB & Associados, Lda. ("dBA") utiliza cookies no website www.dba.co.mz. Actualmente, este website utiliza apenas cookies estritamente necessários ao seu funcionamento. Não utilizamos cookies para publicidade comportamental ou rastreamento de utilizadores entre diferentes websites.',
  sections: [
    {
      h: 'O que são cookies',
      body: [
        'Os cookies são pequenos ficheiros de texto armazenados no dispositivo do utilizador quando visita um website. Permitem que determinadas preferências e funcionalidades sejam recordadas entre visitas.',
      ],
    },
    {
      h: 'Cookies utilizados',
      body: [
        'Cookie de preferência de idioma ("lang")',
        'Este cookie permite memorizar o idioma seleccionado pelo utilizador (Português ou Inglês), assegurando que essa preferência seja mantida em futuras visitas ao website.',
        'Finalidade: Funcional e estritamente necessária ao funcionamento do selector de idioma.',
        'Duração: Até 12 meses.',
        'Tipo: Cookie próprio (first-party cookie).',
      ],
    },
    {
      h: 'Consentimento',
      body: [
        'O cookie utilizado neste website é estritamente necessário para disponibilizar uma funcionalidade expressamente solicitada pelo utilizador. Por esse motivo, não requer consentimento prévio nos termos da legislação aplicável.',
      ],
    },
    {
      h: 'Gestão de Cookies',
      body: [
        'O utilizador pode, a qualquer momento, eliminar ou bloquear cookies através das definições do seu navegador.',
        'Caso o cookie de idioma seja removido, o website poderá voltar a apresentar o idioma predefinido ou o idioma detectado no navegador do utilizador numa visita futura.',
      ],
    },
    {
      h: 'Alterações à Política de Cookies',
      body: [
        'A dBA reserva-se o direito de actualizar ou alterar a presente Política de Cookies a qualquer momento. A versão mais recente estará sempre disponível nesta página, acompanhada da respectiva data de actualização.',
      ],
    },
    {
      h: 'Contacto',
      body: [
        'Para qualquer questão relacionada com esta Política de Cookies, poderá contactar a dBA através de: info@dba.co.mz.',
      ],
    },
  ],
};

const EN: LegalContent = {
  title: 'Cookie Policy',
  updatedLabel: 'Last updated',
  updated: 'June 2026',
  intro:
    'This Cookie Policy explains how dB & Associados, Lda. ("dBA") uses cookies on the website www.dba.co.mz. This website currently uses only strictly necessary cookies for its operation. We do not use cookies for behavioural advertising or cross-site user tracking.',
  sections: [
    {
      h: 'What are cookies',
      body: [
        'Cookies are small text files stored on the user\'s device when visiting a website. They allow certain preferences and functionalities to be remembered between visits.',
      ],
    },
    {
      h: 'Cookies used',
      body: [
        'Language preference cookie ("lang")',
        'This cookie stores the language selected by the user (Portuguese or English), ensuring that preference is maintained on future visits to the website.',
        'Purpose: Functional and strictly necessary for the operation of the language selector.',
        'Duration: Up to 12 months.',
        'Type: First-party cookie.',
      ],
    },
    {
      h: 'Consent',
      body: [
        'The cookie used on this website is strictly necessary to provide a functionality expressly requested by the user. For this reason, it does not require prior consent under applicable legislation.',
      ],
    },
    {
      h: 'Managing Cookies',
      body: [
        'Users may, at any time, delete or block cookies through their browser settings.',
        'If the language cookie is removed, the website may revert to the default language or the language detected in the user\'s browser on a future visit.',
      ],
    },
    {
      h: 'Changes to the Cookie Policy',
      body: [
        'dBA reserves the right to update or amend this Cookie Policy at any time. The most recent version will always be available on this page, accompanied by the respective update date.',
      ],
    },
    {
      h: 'Contact',
      body: [
        'For any questions relating to this Cookie Policy, you may contact dBA at: info@dba.co.mz.',
      ],
    },
  ],
};

export default function CookiesPage() {
  const { lang } = useLanguage();
  return <LegalDoc content={lang === 'EN' ? EN : PT} />;
}
