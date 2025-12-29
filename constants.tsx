
import { Lecture, NavLink, FAQItem } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Palestras', href: '#palestras' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'Contato', href: '#contato' },
];

export const LECTURES: Lecture[] = [
  {
    id: 1,
    title: 'Cultura de Entrega',
    description: 'Focada em transformar a mentalidade de "fazer por fazer" em uma cultura de dono.',
    resolve: 'Falta de compromisso com prazos e baixa proatividade na resolução de problemas.',
    result: 'Equipes engajadas que entregam valor real, reduzindo retrabalho e aumentando a autonomia.',
    iconName: 'Zap',
  },
  {
    id: 2,
    title: 'Postura Profissional',
    description: 'O guia definitivo de comportamento, etiqueta e imagem no ambiente corporativo moderno.',
    resolve: 'Conflitos interpessoais, comunicação inadequada e falta de seriedade no ambiente de trabalho.',
    result: 'Melhoria imediata no clima organizacional e na percepção de valor da equipe perante clientes.',
    iconName: 'Users',
  },
  {
    id: 3,
    title: 'Profissional do Futuro',
    description: 'Como se manter relevante em um mercado em constante mudança tecnológica e social.',
    resolve: 'Obsolescência profissional e resistência à adoção de novas tecnologias/processos.',
    result: 'Profissionais adaptáveis, mentalidade de aprendizado contínuo e domínio de soft skills críticas.',
    iconName: 'TrendingUp',
  },
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: 'Qual o tempo médio de cada palestra?',
    answer: 'Nossas palestras padrão têm duração de 90 minutos, incluindo um tempo final dedicado para perguntas e respostas (Q&A).'
  },
  {
    question: 'Vocês emitem nota fiscal?',
    answer: 'Sim, emitimos Nota Fiscal de serviços para todas as contratações, seja para pessoa física ou jurídica.'
  },
  {
    question: 'A palestra pode ser personalizada?',
    answer: 'Com certeza. Realizamos um briefing prévio para entender as dores específicas da sua empresa ou instituição e ajustar os exemplos práticos.'
  },
  {
    question: 'Atendem em todo o Brasil?',
    answer: 'Sim, realizamos palestras presenciais em todo o território nacional e também no formato online via streaming.'
  }
];
