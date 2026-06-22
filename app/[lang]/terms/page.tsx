'use client';
import { LegalDoc, type LegalContent } from '@/components/sections/LegalDoc';
import { useLanguage } from '@/contexts/LanguageContext';

const PT: LegalContent = {
  title: 'Termos e Condições',
  updatedLabel: 'Última actualização',
  updated: 'Junho de 2026',
  intro:
    'Ao aceder e utilizar este website, o utilizador aceita os presentes Termos e Condições. Caso não concorde com qualquer uma das disposições aqui previstas, deverá cessar a utilização do website.',
  sections: [
    {
      h: 'Utilização do Website',
      body: [
        'O website da dB & Associados, Lda. ("dBA") destina-se exclusivamente à divulgação institucional da empresa, dos seus serviços, iniciativas e conteúdos informativos.',
        'O utilizador compromete-se a utilizar o website de forma lícita, não praticando quaisquer actos que possam comprometer o seu funcionamento, segurança ou integridade.',
      ],
    },
    {
      h: 'Conteúdo Informativo',
      body: [
        'A informação disponibilizada neste website tem carácter meramente informativo e não constitui aconselhamento profissional, jurídico, fiscal, contabilístico ou de qualquer outra natureza.',
        'Qualquer decisão tomada com base na informação disponibilizada deverá ser precedida de consulta profissional adequada.',
      ],
    },
    {
      h: 'Propriedade Intelectual',
      body: [
        'Todos os conteúdos presentes neste website, incluindo textos, imagens, gráficos, logótipos, marcas, elementos visuais e outros materiais, são propriedade da dB & Associados, Lda. ou utilizados mediante autorização dos respectivos titulares.',
        'A reprodução, distribuição, modificação ou utilização destes conteúdos sem autorização prévia por escrito é proibida, salvo nos casos permitidos por lei.',
      ],
    },
    {
      h: 'Limitação de Responsabilidade',
      body: [
        'A dBA procura assegurar que a informação disponibilizada no website é correcta e actualizada. Contudo, não garante que o conteúdo esteja permanentemente livre de erros, omissões ou interrupções.',
        'Na máxima medida permitida pela lei aplicável, a dBA não poderá ser responsabilizada por quaisquer danos directos, indirectos ou consequenciais resultantes da utilização ou impossibilidade de utilização deste website.',
      ],
    },
    {
      h: 'Ligações para Websites de Terceiros',
      body: [
        'O website poderá conter ligações para websites de terceiros. Essas ligações são disponibilizadas apenas para conveniência do utilizador.',
        'A dBA não controla, aprova ou assume responsabilidade pelos conteúdos, políticas ou práticas desses websites.',
      ],
    },
    {
      h: 'Alterações',
      body: [
        'A dBA reserva-se o direito de actualizar, modificar ou substituir os presentes Termos e Condições a qualquer momento. A versão mais recente estará sempre disponível nesta página e produzirá efeitos a partir da sua publicação.',
      ],
    },
    {
      h: 'Lei Aplicável',
      body: [
        'Os presentes Termos e Condições são regidos e interpretados de acordo com a legislação da República de Moçambique.',
        'Para quaisquer questões relacionadas com estes Termos e Condições, poderá contactar a dBA através de info@dba.co.mz.',
      ],
    },
  ],
};

const EN: LegalContent = {
  title: 'Terms and Conditions',
  updatedLabel: 'Last updated',
  updated: 'June 2026',
  intro:
    'By accessing and using this website, the user accepts these Terms and Conditions. If you do not agree with any of the provisions set out herein, you should cease using the website.',
  sections: [
    {
      h: 'Use of the Website',
      body: [
        'The website of dB & Associados, Lda. ("dBA") is intended exclusively for the institutional promotion of the company, its services, initiatives and informational content.',
        'The user undertakes to use the website lawfully and not to engage in any acts that may compromise its operation, security or integrity.',
      ],
    },
    {
      h: 'Informational Content',
      body: [
        'The information provided on this website is for informational purposes only and does not constitute professional, legal, tax, accounting or any other form of advice.',
        'Any decision made on the basis of the information provided should be preceded by appropriate professional consultation.',
      ],
    },
    {
      h: 'Intellectual Property',
      body: [
        'All content on this website, including texts, images, graphics, logos, trademarks, visual elements and other materials, is the property of dB & Associados, Lda. or used with the authorisation of the respective rights holders.',
        'Reproduction, distribution, modification or use of this content without prior written authorisation is prohibited, except as permitted by law.',
      ],
    },
    {
      h: 'Limitation of Liability',
      body: [
        'dBA endeavours to ensure that the information provided on the website is accurate and up to date. However, it does not guarantee that the content is permanently free from errors, omissions or interruptions.',
        'To the fullest extent permitted by applicable law, dBA shall not be liable for any direct, indirect or consequential damages resulting from the use of, or inability to use, this website.',
      ],
    },
    {
      h: 'Links to Third-Party Websites',
      body: [
        'The website may contain links to third-party websites. Such links are provided solely for the convenience of the user.',
        'dBA does not control, endorse or assume responsibility for the content, policies or practices of those websites.',
      ],
    },
    {
      h: 'Changes',
      body: [
        'dBA reserves the right to update, modify or replace these Terms and Conditions at any time. The most recent version will always be available on this page and will take effect upon publication.',
      ],
    },
    {
      h: 'Governing Law',
      body: [
        'These Terms and Conditions are governed by and construed in accordance with the laws of the Republic of Mozambique.',
        'For any questions relating to these Terms and Conditions, you may contact dBA at info@dba.co.mz.',
      ],
    },
  ],
};

export default function TermsPage() {
  const { lang } = useLanguage();
  return <LegalDoc content={lang === 'EN' ? EN : PT} />;
}
