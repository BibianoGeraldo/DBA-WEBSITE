'use client';
import { LegalDoc, type LegalContent } from '@/components/sections/LegalDoc';
import { useLanguage } from '@/contexts/LanguageContext';

const PT: LegalContent = {
  title: 'Termos & Condições',
  updatedLabel: 'Última atualização',
  updated: 'Junho de 2026',
  intro:
    'A utilização deste website implica a aceitação dos presentes termos. Caso não concorde, agradecemos que não utilize o site.',
  sections: [
    {
      h: 'Conteúdo do site',
      body: [
        'O conteúdo deste website tem caráter meramente informativo sobre os serviços da dBA e não constitui aconselhamento profissional, fiscal, contabilístico ou jurídico. Qualquer decisão deve ser precedida de consulta formal com a dBA.',
      ],
    },
    {
      h: 'Propriedade intelectual',
      body: [
        'A marca dBA, o logótipo, os textos, imagens e demais elementos do site são propriedade da dBA ou dos seus licenciantes e estão protegidos por lei. Não é permitida a sua reprodução sem autorização prévia.',
      ],
    },
    {
      h: 'Limitação de responsabilidade',
      body: [
        'A dBA procura manter a informação do site atualizada e correta, mas não garante a ausência de erros ou a disponibilidade ininterrupta. A dBA não se responsabiliza por danos decorrentes da utilização do site.',
      ],
    },
    {
      h: 'Ligações externas',
      body: [
        'Este site pode conter ligações para sites de terceiros. A dBA não controla nem se responsabiliza pelo conteúdo desses sites.',
      ],
    },
    {
      h: 'Lei aplicável',
      body: [
        'Os presentes termos são regidos pela lei da República de Moçambique. Para qualquer questão, contacte info@dba.co.mz.',
      ],
    },
  ],
};

const EN: LegalContent = {
  title: 'Terms & Conditions',
  updatedLabel: 'Last updated',
  updated: 'June 2026',
  intro:
    'Use of this website implies acceptance of these terms. If you do not agree, please do not use the site.',
  sections: [
    {
      h: 'Site content',
      body: [
        'The content of this website is purely informational about dBA services and does not constitute professional, tax, accounting or legal advice. Any decision should be preceded by a formal consultation with dBA.',
      ],
    },
    {
      h: 'Intellectual property',
      body: [
        'The dBA brand, logo, texts, images and other site elements are the property of dBA or its licensors and are protected by law. Reproduction without prior authorisation is not permitted.',
      ],
    },
    {
      h: 'Limitation of liability',
      body: [
        'dBA strives to keep the site information up to date and accurate, but does not guarantee it is error-free or continuously available. dBA is not liable for damages arising from use of the site.',
      ],
    },
    {
      h: 'External links',
      body: [
        'This site may contain links to third-party websites. dBA does not control and is not responsible for the content of those sites.',
      ],
    },
    {
      h: 'Governing law',
      body: [
        'These terms are governed by the law of the Republic of Mozambique. For any question, contact info@dba.co.mz.',
      ],
    },
  ],
};

export default function TermsPage() {
  const { lang } = useLanguage();
  return <LegalDoc content={lang === 'EN' ? EN : PT} />;
}
