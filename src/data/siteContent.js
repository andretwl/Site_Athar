export const proofMetrics = [
  {
    value: '360',
    label: 'Visão de operação',
    detail: 'Consigo conectar aquisição, conteúdo, automação, dados, CRM e execução interna em um único fluxo.'
  },
  {
    value: 'Rápido',
    label: 'Entrega inicial',
    detail: 'Posso estruturar páginas, tracking, campanhas, fluxos e organização operacional em pouco tempo.'
  },
  {
    value: 'IA + Ops',
    label: 'Perfil híbrido',
    detail: 'Uno inteligência artificial, marketing digital, automação e ferramentas de gestão para a equipe trabalhar melhor.'
  },
  {
    value: 'Campanhas',
    label: 'Aderência prática',
    detail: 'Experiência útil para campanhas políticas, produtos estratégicos e operações que exigem velocidade e coordenação.'
  }
]

export const presentationServices = [
  {
    eyebrow: 'Campanhas políticas',
    title: 'Experiência real em operação de campanha',
    description:
      'Já trabalhei em campanhas políticas e entendo a pressão por velocidade, clareza de mensagem, coordenação de equipe e leitura constante de resultado.'
  },
  {
    eyebrow: 'Engajamento e narrativa',
    title: 'Jogos online e chatbots avançados para campanha',
    description:
      'Já criei jogos online para campanhas políticas e chatbots avançados que respondiam com base em arquivos de texto definidos pelos administradores da campanha, respeitando o jeito de falar do candidato e suas propostas de governo.'
  },
  {
    eyebrow: 'Aquisição e presença digital',
    title: 'Anúncios, sites e tracking prontos para rodar',
    description:
      'Posso estruturar campanhas de anúncios, landing pages, sites rápidos, pixels, eventos, analytics e acompanhamento de visitantes para orientar decisões.'
  },
  {
    eyebrow: 'Conteúdo e escala',
    title: 'IA aplicada a texto, vídeo e produção criativa',
    description:
      'Uso IA para criar, revisar, adaptar e editar conteúdo em vários formatos, acelerando peças de campanha, mensagens, roteiros, textos e materiais multimídia.'
  },
  {
    eyebrow: 'Operação e gestão',
    title: 'Times mais organizados com ferramentas certas',
    description:
      'Estruturo fluxos de trabalho, automações e gestão de tarefas em ferramentas como ClickUp, Monday e equivalentes para coordenar equipes e entregas.'
  }
]

export const audiencePillars = [
  {
    eyebrow: 'Para campanhas e operações',
    title: 'Sistemas de decisão, não apenas ferramentas isoladas',
    description:
      'Meu foco está em como a informação circula pela equipe: entrada de dados, conteúdo, memória, interface, acompanhamento e ação operacional.'
  },
  {
    eyebrow: 'Para times de produto e marketing',
    title: 'Velocidade de prototipagem com disciplina de infraestrutura',
    description:
      'Consigo construir a camada visível do produto enquanto também resolvo runtime, dados, integrações e restrições de deploy por trás dela.'
  },
  {
    eyebrow: 'Para liderança analítica',
    title: 'Pensamento orientado a dados, automação e contexto',
    description:
      'Meu padrão de trabalho se encaixa melhor onde rastreabilidade, busca, contexto, histórico e clareza de operação importam mais do que um chatbot solto.'
  }
]

export const projectCards = [
  {
    title: 'Unity_Linux_LLM',
    path: '/mnt/data/Projects_SSD/Unity_Projects/Unity_Linux_LLM',
    summary:
      'Protótipo híbrido em Unity que conecta retrieval local, chat via LocalAI, Qdrant e memória opcional via Cognee em um fluxo interativo com agentes.',
    tags: ['Unity', 'C#', 'LocalAI', 'Qdrant', 'RAG'],
    outcome:
      'Mostra que consigo unir interface de produto, retrieval, diagnóstico de runtime e orquestração de IA em um único sistema.'
  },
  {
    title: 'pc-resource-agent-team',
    path: '/mnt/data/Projects_SSD/pc-resource-agent-team',
    summary:
      'Superfície operacional para fluxos de LocalAI e Cognee, incluindo health checks, publicação e automações voltadas à infraestrutura.',
    tags: ['Operações', 'Automação', 'LocalAI', 'Cognee'],
    outcome:
      'Relevante para equipes que precisam de sistemas internos com controle explícito e menos opacidade operacional.'
  },
  {
    title: 'Cognee',
    path: '/mnt/data/Projects_SSD/cognee',
    summary:
      'Plataforma de grafo de conhecimento e memória de longo prazo usada para contexto persistente, ingestão, recall e fluxos estruturados de memória.',
    tags: ['Knowledge Graphs', 'Memória', 'Python', 'APIs'],
    outcome:
      'Demonstra experiência com sistemas de memória persistente que podem apoiar pesquisa, coordenação e continuidade operacional.'
  },
  {
    title: 'LocalAI',
    path: '/mnt/data/Projects_SSD/LocalAI',
    summary:
      'Engine local de inferência compatível com OpenAI cobrindo chat, embeddings, multimodalidade, modularidade de backends e deploy com privacidade.',
    tags: ['Inferência', 'APIs compatíveis com OpenAI', 'Deploy'],
    outcome:
      'Útil para organizações que querem capacidade real de IA sob seu próprio controle, sem depender totalmente de APIs terceiras.'
  },
  {
    title: 'Camada de ferramentas com Qdrant',
    path: '/mnt/data/Projects_SSD/qdrant-client',
    summary:
      'Camada de busca vetorial e retrieval presente no workspace junto com armazenamento local, fluxos de indexação e experimentos de busca.',
    tags: ['Vector DB', 'Retrieval', 'Busca'],
    outcome:
      'Ajuda em busca semântica, recuperação de documentos e organização de conhecimento distribuído em fontes fragmentadas.'
  },
  {
    title: 'Exploração de escala remota com Modal',
    path: '/mnt/data/Projects_SSD/modal-examples',
    summary:
      'Superfície de exploração para inferência remota mais forte quando sistemas locais precisam evoluir para execução com suporte de nuvem.',
    tags: ['Modal', 'vLLM', 'Escala'],
    outcome:
      'Mostra que consigo planejar a passagem de protótipos locais para infraestruturas mais robustas quando o caso de uso exige.'
  }
]

export const flagshipProject = {
  title: 'TransfereGov API — Painel de Inteligência Parlamentar',
  period: 'Projeto principal',
  path: '/mnt/data/Projects_SSD/tranfere_gov_api',
  summary:
    'Pipeline completo de dados do sistema Transferegov (Emendas PIX e Transferências Especiais) do Governo Federal: extração, validação, enriquecimento com mais de 15 fontes públicas, inteligência artificial com RAG multi-analista e entrega em dashboard e API.',
  tags: ['Python 3.11', 'PostgreSQL', 'Pydantic', 'FastAPI', 'Dash/Plotly', 'Qdrant', 'LocalAI', 'RAG v7', 'MCP'],
  outcome:
    'Sistema de inteligência parlamentar: classifica deputados entre governo, oposição e independentes, mede alinhamento político, detecta anomalias e fisiologismo, monitora emendas por município e gera documentos oficiais automaticamente.',
  stats: [
    { value: '43', label: 'endpoints de API REST' },
    { value: '74', label: 'gráficos interativos' },
    { value: '15+', label: 'fontes de dados públicas' },
    { value: '7', label: 'analistas de IA (RAG v7)' }
  ],
  deliverables: [
    {
      title: 'Monitoramento de emendas',
      text: 'Extração e acompanhamento de Emendas PIX e discricionárias por parlamentar, município e situação, com histórico completo.'
    },
    {
      title: 'Perfis de parlamentares',
      text: 'Dossiês analíticos gerados por IA com classificação política, áreas temáticas, discursos, votações e proposições.'
    },
    {
      title: 'Análise de alinhamento',
      text: 'Triângulo político deputado × prefeito × governador com dados eleitorais do TSE cruzados com emendas.'
    },
    {
      title: 'Riscos e auditoria',
      text: 'Alertas de anomalias, processos judiciais (DataJud), compras públicas e indicadores sociais por município.'
    },
    {
      title: 'Finanças públicas',
      text: 'Dados SICONFI (DCA + RREO) de municípios e estados: arrecadação, receitas e despesas para embasar decisão.'
    },
    {
      title: 'Redação oficial',
      text: 'Geração automática de ofícios, notas técnicas, pareceres e despachos seguindo o Manual de Redação da Presidência.'
    }
  ]
}

export const pipelineStages = [
  {
    step: '01',
    title: 'Extração',
    text: 'Coleta de Planos de Ação da API pública do Transferegov, Portal da Transparência e sistema de discricionárias, com paginação, retry e cache.'
  },
  {
    step: '02',
    title: 'Validação',
    text: 'Schemas Pydantic garantem integridade dos dados antes de entrar no banco.'
  },
  {
    step: '03',
    title: 'PostgreSQL',
    text: '25+ tabelas, views de negócio e funções upsert idempotentes com migrations versionadas.'
  },
  {
    step: '04',
    title: 'Enriquecimento',
    text: '15+ fontes: IBGE, BrasilAPI, Câmara, Senado, TSE, SICONFI, FNDE, TCU, DataJud, Compras e Diário Oficial.'
  },
  {
    step: '05',
    title: 'RAG v7',
    text: 'Qdrant + LocalAI: 23 tipos de chunks, 7 analistas especialistas e multi-query com 15 consultas temáticas.'
  },
  {
    step: '06',
    title: 'Entrega',
    text: 'Dashboard com 74 gráficos (Dash/Plotly), API REST com 43 endpoints (FastAPI) e integração MCP.'
  }
]

export const politicalSkillGroups = [
  {
    group: 'Engenharia de dados',
    skills: [
      { name: 'Python 3.11', level: 95, desc: 'ETL/ELT, scripts e orquestração de pipelines' },
      { name: 'PostgreSQL', level: 92, desc: '25+ tabelas, views, upserts e migrations' },
      { name: 'Pydantic', level: 90, desc: 'Validação de schemas em todos os ingestores' },
      { name: 'pandas / DuckDB', level: 88, desc: 'Transformações e análise de grandes volumes' },
      { name: 'APIs públicas gov.br', level: 94, desc: 'Integração com mais de 15 fontes federais' }
    ]
  },
  {
    group: 'IA e retrieval',
    skills: [
      { name: 'RAG multi-analista', level: 92, desc: '7 analistas especialistas com quality check próprio' },
      { name: 'Qdrant', level: 90, desc: 'Busca vetorial, 23 tipos de chunks e fusão RRF' },
      { name: 'LocalAI', level: 93, desc: 'Orquestração de modelos locais com gestão de VRAM' },
      { name: 'vLLM', level: 85, desc: 'Inferência local e em nuvem (Modal)' },
      { name: 'Embeddings', level: 84, desc: 'Indexação semântica de 768 dimensões' }
    ]
  },
  {
    group: 'Web, API e entrega',
    skills: [
      { name: 'FastAPI', level: 91, desc: 'API REST com 43 endpoints e Swagger' },
      { name: 'Dash / Plotly', level: 88, desc: 'Dashboard com 74 gráficos interativos' },
      { name: 'React / Vite', level: 87, desc: 'SPA frontend do painel' },
      { name: 'MCP', level: 86, desc: 'Servidor e ferramentas Model Context Protocol' },
      { name: 'Docker / Cloudflare', level: 84, desc: 'Containers, deploy e Pages' }
    ]
  },
  {
    group: 'Análise política aplicada',
    skills: [
      { name: 'Classificação política', level: 93, desc: 'Governo / Oposição / Independente por deputado' },
      { name: 'Alinhamento partidário', level: 90, desc: 'Deputado × prefeito × governador (TSE + emendas)' },
      { name: 'Finanças públicas', level: 89, desc: 'SICONFI DCA + RREO de municípios e estados' },
      { name: 'Dados eleitorais TSE', level: 88, desc: 'Prefeitos, vereadores e governadores eleitos' },
      { name: 'Detecção de anomalias', level: 87, desc: 'Red flags, fisiologismo e risco judicial' }
    ]
  }
]

export const resumeHighlights = [
  {
    period: 'Estratégia',
    title: 'Infraestrutura de IA com foco no resultado do produto',
    summary:
      'Desenho sistemas em que runtime, fluxo de dados, conteúdo, automação e interface são pensados juntos, não em silos.'
  },
  {
    period: 'Confiabilidade',
    title: 'Verdade operacional acima de discurso bonito',
    summary:
      'Minha preferência é validar APIs, estado de serviço, tracking, integrações e caminhos reais de dados antes de confiar em qualquer narrativa.'
  },
  {
    period: 'Marketing e dados',
    title: 'Encaixe forte para produtos estratégicos e campanhas',
    summary:
      'Meu perfil funciona melhor em ambientes onde marketing, analytics, operação, acompanhamento e software interno precisam se reforçar mutuamente.'
  },
  {
    period: 'Execução',
    title: 'Amplitude real de implementação',
    summary:
      'A base atual cobre Python, JavaScript, C#, runtime local de IA, pipelines de retrieval, automação e entrega frontend.'
  }
]
