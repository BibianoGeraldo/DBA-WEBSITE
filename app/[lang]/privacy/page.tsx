'use client';
import { LegalDoc, type LegalContent } from '@/components/sections/LegalDoc';
import { useLanguage } from '@/contexts/LanguageContext';

const PT: LegalContent = {
  title: 'Política de Privacidade',
  updatedLabel: 'Última actualização',
  updated: 'Junho de 2026',
  intro: '',
  sections: [
    {
      h: '1. Responsável pelo Tratamento',
      body: [
        'A dB & Associados, Lda. ("dBA"), com sede em Maputo, Moçambique, é a entidade responsável pelo tratamento dos dados pessoais recolhidos através do website.',
        'Contacto geral: info@dba.co.mz',
        'Contacto para assuntos de privacidade: privacy@dba.co.mz',
      ],
    },
    {
      h: '2. Âmbito de Aplicação',
      body: [
        'A presente Política de Privacidade aplica-se ao tratamento de dados pessoais recolhidos através do website www.dba.co.mz.',
        'A dBA compromete-se a tratar os dados pessoais de forma lícita, transparente e segura, em conformidade com a legislação aplicável, incluindo a Lei n.º 24/2021 de Moçambique e, quando aplicável, o Regulamento Geral sobre a Protecção de Dados da União Europeia (RGPD).',
      ],
    },
    {
      h: '3. Dados Pessoais Recolhidos',
      body: [
        'A dBA recolhe apenas os dados pessoais que o utilizador fornece voluntariamente através dos formulários de contacto disponíveis no website, nomeadamente:',
        { list: ['Nome', 'Endereço de correio electrónico', 'Número de telefone', 'Área de interesse', 'Mensagem enviada pelo utilizador'] },
        'A dBA não recolhe dados pessoais para fins de publicidade comportamental nem vende ou cede dados pessoais a terceiros para fins comerciais.',
      ],
    },
    {
      h: '4. Finalidades e Base Legal do Tratamento',
      body: [
        'Os dados pessoais recolhidos são utilizados exclusivamente para:',
        { list: [
          'Responder a pedidos de contacto',
          'Prestar informações sobre os serviços solicitados',
          'Dar seguimento a consultas comerciais ou institucionais',
          'Manter comunicações relacionadas com o pedido efectuado pelo utilizador',
        ]},
        'O tratamento dos dados pessoais baseia-se:',
        { list: [
          'No consentimento do titular dos dados; e/ou',
          'No interesse legítimo da dBA em responder a pedidos de contacto e gerir relações pré-contratuais ou comerciais.',
        ]},
        'Sempre que o tratamento se baseie no consentimento, este poderá ser retirado a qualquer momento através de comunicação para privacy@dba.co.mz, sem prejuízo da licitude do tratamento efectuado anteriormente.',
      ],
    },
    {
      h: '5. Conservação dos Dados',
      body: [
        'Os dados pessoais serão conservados apenas durante o período necessário para cumprir as finalidades para as quais foram recolhidos.',
        'Salvo obrigação legal em contrário, os dados serão conservados por um período máximo de 24 meses após o último contacto registado, sendo posteriormente eliminados ou anonimizados de forma segura.',
      ],
    },
    {
      h: '6. Partilha de Dados e Subcontratantes',
      body: [
        'A dBA não comercializa dados pessoais nem os partilha com terceiros para fins publicitários.',
        'No entanto, poderá recorrer a prestadores de serviços tecnológicos necessários ao funcionamento do website, alojamento informático, serviços de correio electrónico, segurança digital ou manutenção técnica. Estes prestadores actuam exclusivamente de acordo com as instruções da dBA e estão sujeitos a obrigações de confidencialidade e protecção de dados adequadas.',
      ],
    },
    {
      h: '7. Transferências Internacionais de Dados',
      body: [
        'Os dados pessoais poderão ser tratados em Moçambique ou noutros países onde se encontrem os prestadores de serviços tecnológicos utilizados pela dBA.',
        'Sempre que ocorra uma transferência internacional de dados, a dBA adoptará medidas adequadas para assegurar um nível de protecção compatível com a legislação aplicável, incluindo cláusulas contratuais apropriadas ou outros mecanismos legalmente reconhecidos.',
      ],
    },
    {
      h: '8. Segurança dos Dados',
      body: [
        'A dBA adopta medidas técnicas e organizativas adequadas para proteger os dados pessoais contra acesso não autorizado, utilização indevida, alteração, divulgação, perda ou destruição acidental.',
        'Apesar dos esforços implementados, nenhuma transmissão de dados através da Internet pode ser garantida como absolutamente segura.',
      ],
    },
    {
      h: '9. Direitos dos Titulares dos Dados',
      body: [
        'Nos termos da legislação aplicável, o titular dos dados poderá exercer os seguintes direitos:',
        { list: [
          'Direito de acesso',
          'Direito de rectificação',
          'Direito ao apagamento',
          'Direito de oposição',
          'Direito à limitação do tratamento',
          'Direito à portabilidade dos dados, quando aplicável',
          'Direito de retirar o consentimento a qualquer momento',
        ]},
        'Os pedidos relacionados com o exercício destes direitos deverão ser enviados para: privacy@dba.co.mz',
        'A dBA responderá aos pedidos dentro de um prazo razoável e nos termos legalmente previstos.',
      ],
    },
    {
      h: '10. Direito de Reclamação',
      body: [
        'Caso considere que o tratamento dos seus dados pessoais não respeita a legislação aplicável, poderá apresentar reclamação junto das autoridades competentes de supervisão e protecção de dados.',
        'Os utilizadores residentes na União Europeia poderão igualmente apresentar reclamação junto da autoridade de controlo competente do respectivo Estado-Membro.',
      ],
    },
    {
      h: '11. Cookies',
      body: [
        'Este website utiliza apenas cookies estritamente necessários ao seu funcionamento e, quando aplicável, cookies funcionais destinados a memorizar preferências seleccionadas pelo utilizador, como o idioma de navegação.',
        'Os cookies utilizados não recolhem informação para fins de publicidade, perfilagem comportamental ou rastreamento comercial.',
        'Para mais informações, consulte a Política de Cookies.',
      ],
    },
    {
      h: '12. Alterações à Presente Política',
      body: [
        'A dBA reserva-se o direito de actualizar ou alterar a presente Política de Privacidade sempre que necessário para reflectir alterações legais, regulamentares ou operacionais.',
        'A versão mais recente estará sempre disponível nesta página, acompanhada da respectiva data de actualização.',
      ],
    },
  ],
};

const EN: LegalContent = {
  title: 'Privacy Policy',
  updatedLabel: 'Last updated',
  updated: 'June 2026',
  intro: '',
  sections: [
    {
      h: '1. Data Controller',
      body: [
        'dB & Associados, Lda. ("dBA"), headquartered in Maputo, Mozambique, is the entity responsible for processing personal data collected through this website.',
        'General contact: info@dba.co.mz',
        'Privacy contact: privacy@dba.co.mz',
      ],
    },
    {
      h: '2. Scope',
      body: [
        'This Privacy Policy applies to the processing of personal data collected through the website www.dba.co.mz.',
        'dBA is committed to processing personal data lawfully, transparently and securely, in accordance with applicable legislation, including Law No. 24/2021 of Mozambique and, where applicable, the General Data Protection Regulation (GDPR) of the European Union.',
      ],
    },
    {
      h: '3. Personal Data Collected',
      body: [
        'dBA collects only the personal data that users voluntarily provide through the contact forms available on the website, namely:',
        { list: ['Name', 'Email address', 'Phone number', 'Area of interest', 'Message sent by the user'] },
        'dBA does not collect personal data for behavioural advertising purposes, nor does it sell or transfer personal data to third parties for commercial purposes.',
      ],
    },
    {
      h: '4. Purposes and Legal Basis for Processing',
      body: [
        'The personal data collected is used exclusively to:',
        { list: [
          'Respond to contact requests',
          'Provide information about the services requested',
          'Follow up on commercial or institutional enquiries',
          'Maintain communications related to the request made by the user',
        ]},
        'The processing of personal data is based on:',
        { list: [
          'The consent of the data subject; and/or',
          'The legitimate interest of dBA in responding to contact requests and managing pre-contractual or commercial relationships.',
        ]},
        'Where processing is based on consent, it may be withdrawn at any time by contacting privacy@dba.co.mz, without prejudice to the lawfulness of processing carried out prior to withdrawal.',
      ],
    },
    {
      h: '5. Data Retention',
      body: [
        'Personal data will be retained only for as long as necessary to fulfil the purposes for which it was collected.',
        'Unless otherwise required by law, data will be retained for a maximum period of 24 months after the last recorded contact, after which it will be securely deleted or anonymised.',
      ],
    },
    {
      h: '6. Data Sharing and Processors',
      body: [
        'dBA does not sell personal data or share it with third parties for advertising purposes.',
        'However, dBA may engage technology service providers necessary for the operation of the website, including hosting, email, digital security or technical maintenance services. These providers act solely in accordance with dBA\'s instructions and are subject to appropriate confidentiality and data protection obligations.',
      ],
    },
    {
      h: '7. International Data Transfers',
      body: [
        'Personal data may be processed in Mozambique or in other countries where dBA\'s technology service providers are located.',
        'Whenever an international data transfer occurs, dBA will adopt appropriate measures to ensure a level of protection compatible with applicable legislation, including appropriate contractual clauses or other legally recognised mechanisms.',
      ],
    },
    {
      h: '8. Data Security',
      body: [
        'dBA adopts appropriate technical and organisational measures to protect personal data against unauthorised access, misuse, alteration, disclosure, accidental loss or destruction.',
        'Despite the measures implemented, no data transmission over the Internet can be guaranteed to be absolutely secure.',
      ],
    },
    {
      h: '9. Rights of Data Subjects',
      body: [
        'Under applicable legislation, data subjects may exercise the following rights:',
        { list: [
          'Right of access',
          'Right to rectification',
          'Right to erasure',
          'Right to object',
          'Right to restriction of processing',
          'Right to data portability, where applicable',
          'Right to withdraw consent at any time',
        ]},
        'Requests related to the exercise of these rights should be sent to: privacy@dba.co.mz',
        'dBA will respond to requests within a reasonable timeframe and in accordance with applicable legal requirements.',
      ],
    },
    {
      h: '10. Right to Lodge a Complaint',
      body: [
        'If you believe that the processing of your personal data does not comply with applicable legislation, you may lodge a complaint with the competent data protection supervisory authority.',
        'Users residing in the European Union may also lodge a complaint with the supervisory authority of their Member State.',
      ],
    },
    {
      h: '11. Cookies',
      body: [
        'This website uses only cookies that are strictly necessary for its operation and, where applicable, functional cookies intended to remember user-selected preferences, such as the browsing language.',
        'The cookies used do not collect information for advertising, behavioural profiling or commercial tracking purposes.',
        'For more information, please consult our Cookie Policy.',
      ],
    },
    {
      h: '12. Changes to This Policy',
      body: [
        'dBA reserves the right to update or amend this Privacy Policy whenever necessary to reflect legal, regulatory or operational changes.',
        'The most recent version will always be available on this page, accompanied by the respective update date.',
      ],
    },
  ],
};

export default function PrivacyPage() {
  const { lang } = useLanguage();
  return <LegalDoc content={lang === 'EN' ? EN : PT} />;
}
