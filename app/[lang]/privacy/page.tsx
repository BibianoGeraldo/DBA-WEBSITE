'use client';
import { LegalDoc, type LegalContent } from '@/components/sections/LegalDoc';
import { useLanguage } from '@/contexts/LanguageContext';

const PT: LegalContent = {
  title: 'Política de Privacidade',
  updatedLabel: 'Última atualização',
  updated: 'Junho de 2026',
  intro:
    'A dBA respeita a sua privacidade. Esta política descreve que dados pessoais recolhemos através deste website, para que fins e quais os seus direitos.',
  sections: [
    {
      h: 'Responsável pelo tratamento',
      body: ['dBA, Maputo, Moçambique. Contacto: info@dba.co.mz.'],
    },
    {
      h: 'Que dados recolhemos',
      body: [
        'Dados de contacto que nos fornece voluntariamente através do formulário de contacto: nome, email, telefone, área de interesse e a mensagem que escrever.',
        'Não recolhemos dados de navegação para fins de analítica nem partilhamos dados com terceiros para publicidade.',
      ],
    },
    {
      h: 'Para que usamos os seus dados',
      body: [
        'Os dados de contacto são utilizados exclusivamente para responder ao seu pedido e dar seguimento à sua questão. A base legal é o seu consentimento e o interesse legítimo em responder a contactos comerciais.',
      ],
    },
    {
      h: 'Conservação',
      body: [
        'Conservamos os dados de contacto apenas durante o tempo necessário para tratar o seu pedido e cumprir obrigações legais aplicáveis, sendo depois eliminados.',
      ],
    },
    {
      h: 'Os seus direitos',
      body: [
        'Pode solicitar o acesso, a correção ou a eliminação dos seus dados pessoais, bem como opor-se ao seu tratamento, contactando-nos em info@dba.co.mz.',
      ],
    },
    {
      h: 'Cookies',
      body: [
        'Este site utiliza apenas um cookie funcional para recordar o idioma escolhido. Consulte a nossa Política de Cookies para mais detalhes.',
      ],
    },
  ],
};

const EN: LegalContent = {
  title: 'Privacy Policy',
  updatedLabel: 'Last updated',
  updated: 'June 2026',
  intro:
    'dBA respects your privacy. This policy describes what personal data we collect through this website, for what purposes, and your rights.',
  sections: [
    {
      h: 'Data controller',
      body: ['dBA, Maputo, Mozambique. Contact: info@dba.co.mz.'],
    },
    {
      h: 'What data we collect',
      body: [
        'Contact details you provide voluntarily through the contact form: name, email, phone, area of interest and the message you write.',
        'We do not collect browsing data for analytics, nor share data with third parties for advertising.',
      ],
    },
    {
      h: 'How we use your data',
      body: [
        'Contact details are used solely to respond to your request and follow up on your enquiry. The legal basis is your consent and our legitimate interest in responding to business contacts.',
      ],
    },
    {
      h: 'Retention',
      body: [
        'We keep contact details only for as long as needed to handle your request and meet applicable legal obligations, after which they are deleted.',
      ],
    },
    {
      h: 'Your rights',
      body: [
        'You may request access to, correction or deletion of your personal data, and object to its processing, by contacting us at info@dba.co.mz.',
      ],
    },
    {
      h: 'Cookies',
      body: [
        'This site uses only one functional cookie to remember your chosen language. See our Cookie Policy for details.',
      ],
    },
  ],
};

export default function PrivacyPage() {
  const { lang } = useLanguage();
  return <LegalDoc content={lang === 'EN' ? EN : PT} />;
}
