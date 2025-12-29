
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
    title: 'Propósito e Cultura: senso de dono na prática',
    description: 'Transformação de mentalidade para elevar o padrão de entrega e alinhamento do time.',
    forWho: 'Equipe geral e líderes que precisam elevar padrão e alinhamento.',
    resolve: 'Falta de autorresponsabilidade, time “no automático”, baixo compromisso com o combinado, cultura que não vira atitude.',
    result: 'Time com clareza do “porquê”, senso de dono e padrões de comportamento que sustentam entrega e reduzem rotatividade.',
    iconName: 'Zap',
  },
  {
    id: 2,
    title: 'Intraempreendedorismo e Resolução de Problemas',
    description: 'Desenvolvimento de autonomia e iniciativa para equipes que buscam excelência operacional.',
    forWho: 'Equipes operacionais, administrativas e comerciais que precisam de mais autonomia.',
    resolve: 'Dependência excessiva do líder, “passa problema pra frente”, reclamação sem ação, pouca iniciativa e melhoria contínua fraca.',
    result: 'Pessoas que assumem problemas e entregam soluções com autonomia, agilizando processos e focando em resultados.',
    iconName: 'TrendingUp',
  },
  {
    id: 3,
    title: 'Profissional do Hoje/Futuro: postura, comunicação e adaptabilidade',
    description: 'Preparação completa em soft skills críticas para o mercado moderno e dinâmica de trabalho.',
    forWho: 'Equipe geral e turmas jovens (aprendizes/estagiários/novos colaboradores).',
    resolve: 'Postura profissional inconsistente, comunicação fraca, dificuldade de adaptação, insegurança e baixa maturidade no trabalho.',
    result: 'Colaboradores mais preparados, comunicativos e adaptáveis, com soft skills que impactam clima, atendimento e performance.',
    iconName: 'Users',
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