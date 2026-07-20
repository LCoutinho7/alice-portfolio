/**
 * Fonte centralizada de dados dos serviços.
 * Consumida por assets/js/service-details.js para montar
 * service-details.html dinamicamente a partir de ?service=<slug>.
 */
(function (window) {
  "use strict";

  var SERVICES = [
    {
      slug: "ui-ux-design",
      title: "UI & UX Design",
      pageDescription: "Como Alice conduz o processo de UI & UX Design, da pesquisa à entrega junto ao time de engenharia.",
      introTitle: "Um processo pensado para reduzir risco",
      introText: "Cada projeto de UI & UX Design começa com entendimento real do problema, não com telas prontas. É esse cuidado que garante decisões de design sustentáveis a longo prazo.",
      mainTitle: "Interfaces desenhadas com pesquisa, testadas com usuários reais",
      mainParagraphs: [
        "O trabalho de UI & UX Design de Alice combina entrevistas com stakeholders, pesquisa com usuários e prototipação para transformar requisitos de negócio em interfaces claras, consistentes e fáceis de usar. Cada decisão visual é justificada por um objetivo de produto ou uma necessidade real identificada durante a pesquisa.",
        "O processo é colaborativo: reuniões de alinhamento frequentes, documentação acessível e abertura para ajustes conforme o produto evolui. Essa proximidade evita retrabalho e mantém o time de negócio, design e engenharia na mesma página.",
        "Alice já aplicou esse processo em produtos SaaS, plataformas financeiras e marketplaces, sempre priorizando decisões que equilibram experiência do usuário, viabilidade técnica e objetivos de negócio. O resultado são interfaces que sustentam o crescimento do produto ao longo do tempo, reduzindo fricção e facilitando a manutenção pelo time de engenharia."
      ],
      benefits: [
        "Wireframes e protótipos navegáveis em Figma, validados com usuários antes da implementação.",
        "Design systems documentados para manter consistência entre telas e squads.",
        "Handoff estruturado, com specs claras para o time de engenharia."
      ],
      processTitle: "Como o processo funciona",
      processSteps: [
        "Entrevistas com stakeholders e pesquisa com usuários",
        "Arquitetura da informação e fluxos de navegação",
        "Wireframes e testes de usabilidade",
        "Interfaces de alta fidelidade e handoff para desenvolvimento"
      ],
      technologies: ["Figma", "FigJam", "Maze", "Design Systems"],
      image: {
        src: "assets/img/services/ui-ux-design.svg",
        alt: "Sessão de pesquisa e prototipação de interfaces conduzida por Alice"
      },
      seo: {
        title: "UI & UX Design — Alice Almeida",
        description: "Saiba como funciona o processo de UI & UX Design de Alice Almeida, da pesquisa à implementação junto ao time de engenharia."
      }
    },
    {
      slug: "design-systems",
      title: "Design Systems",
      pageDescription: "Como Alice estrutura design systems que unificam produtos e aceleram squads de design e engenharia.",
      introTitle: "Consistência que escala com o produto",
      introText: "Um design system só funciona quando reflete decisões reais de produto, não um catálogo isolado de componentes. É esse alinhamento que Alice busca desde o primeiro token.",
      mainTitle: "Bibliotecas de componentes documentadas para squads multiplataforma",
      mainParagraphs: [
        "Alice estrutura design systems a partir de tokens de cor, tipografia e espaçamento compartilhados, garantindo que cada componente nasça com um propósito claro e documentado, não apenas com uma aparência consistente.",
        "A governança do sistema inclui diretrizes de acessibilidade, padrões de interação e uma documentação viva, atualizada junto com o produto, para que squads diferentes evoluam suas telas sem perder consistência entre si.",
        "Esse trabalho já foi aplicado em produtos B2B multiplataforma, unificando a experiência entre times que antes reimplementavam os mesmos componentes de formas distintas, reduzindo retrabalho e acelerando a entrega de novas funcionalidades."
      ],
      benefits: [
        "Tokens de cor, tipografia e espaçamento documentados e versionados.",
        "Componentes com estados e variantes claros, prontos para uso em produção.",
        "Diretrizes de acessibilidade e governança para manter consistência entre squads."
      ],
      processTitle: "Como o design system é construído",
      processSteps: [
        "Auditoria de componentes e padrões existentes",
        "Definição de tokens de cor, tipografia e espaçamento",
        "Construção da biblioteca de componentes",
        "Documentação e adoção pelos squads"
      ],
      technologies: ["Figma", "Storybook", "React", "Design Tokens"],
      image: {
        src: "assets/img/services/design-systems.svg",
        alt: "Biblioteca de componentes e tokens de um design system"
      },
      seo: {
        title: "Design Systems — Alice Almeida",
        description: "Como Alice estrutura design systems com tokens, componentes documentados e governança para produtos multiplataforma."
      }
    },
    {
      slug: "frontend-development",
      title: "Front-end Development",
      pageDescription: "Como Alice implementa interfaces em React, Next.js e TypeScript com fidelidade ao design e atenção a performance.",
      introTitle: "Do design ao código, sem perder fidelidade",
      introText: "Implementar uma interface bem desenhada exige o mesmo nível de detalhe do design original. Alice trata cada componente de código como parte do mesmo sistema visual.",
      mainTitle: "Interfaces implementadas com performance, acessibilidade e fidelidade ao design",
      mainParagraphs: [
        "Alice desenvolve interfaces em React, Next.js e TypeScript, priorizando componentes reutilizáveis que reproduzem fielmente o design aprovado, sem atalhos que comprometam a experiência final.",
        "Cada implementação considera integração com APIs, responsividade e acessibilidade desde o início, evitando retrabalho posterior e garantindo que a interface funcione bem em diferentes dispositivos e contextos de uso.",
        "Testes automatizados e revisão contínua de performance fazem parte do processo, resultando em produtos que carregam rápido, respondem bem a interações e são fáceis de manter pelo time de engenharia ao longo do tempo."
      ],
      benefits: [
        "Componentes reutilizáveis em React e TypeScript, alinhados ao design system.",
        "Integração com APIs e atenção a responsividade e acessibilidade.",
        "Testes automatizados e monitoramento de performance em produção."
      ],
      processTitle: "Como a implementação é conduzida",
      processSteps: [
        "Análise do design e definição da arquitetura de componentes",
        "Implementação em React, Next.js e TypeScript",
        "Integração com APIs e testes",
        "Revisão de performance e acessibilidade"
      ],
      technologies: ["React", "Next.js", "TypeScript", "Jest"],
      image: {
        src: "assets/img/services/frontend-development.svg",
        alt: "Ambiente de desenvolvimento front-end com editor de código e pré-visualização de componente"
      },
      seo: {
        title: "Front-end Development — Alice Almeida",
        description: "Como Alice implementa interfaces em React, Next.js e TypeScript com fidelidade ao design, performance e acessibilidade."
      }
    },
    {
      slug: "prototipacao-figma",
      title: "Prototipação em Figma",
      pageDescription: "Como Alice usa protótipos navegáveis no Figma para validar decisões de produto antes da implementação.",
      introTitle: "Validar antes de implementar",
      introText: "Um protótipo navegável revela problemas de fluxo que uma tela estática não mostra. Por isso, cada decisão importante passa por validação antes de chegar ao código.",
      mainTitle: "Protótipos navegáveis que antecipam problemas de fluxo",
      mainParagraphs: [
        "Alice constrói protótipos navegáveis no Figma a partir de wireframes e fluxos já validados, permitindo testar a experiência completa antes de qualquer linha de código ser escrita.",
        "Esses protótipos são usados em testes com usuários reais, revelando pontos de fricção e ajustes necessários enquanto ainda é barato corrigi-los, evitando retrabalho na etapa de desenvolvimento.",
        "Componentes reutilizáveis e conexões bem documentadas no protótipo também servem como referência direta para o time de engenharia, reduzindo ambiguidade no momento do handoff."
      ],
      benefits: [
        "Fluxos completos navegáveis, testáveis com usuários antes da implementação.",
        "Componentes reutilizáveis que aceleram a criação de novos protótipos.",
        "Documentação de conexões e estados, pronta para o handoff com engenharia."
      ],
      processTitle: "Como o protótipo é construído",
      processSteps: [
        "Wireframes e definição do fluxo principal",
        "Montagem do protótipo navegável no Figma",
        "Testes com usuários e ajustes",
        "Documentação para o time de engenharia"
      ],
      technologies: ["Figma", "FigJam", "Maze", "Design Systems"],
      image: {
        src: "assets/img/services/prototipacao-figma.svg",
        alt: "Telas conectadas por um fluxo de navegação em um protótipo no Figma"
      },
      seo: {
        title: "Prototipação em Figma — Alice Almeida",
        description: "Como Alice usa protótipos navegáveis no Figma para validar fluxos e reduzir retrabalho antes da implementação."
      }
    },
    {
      slug: "consultoria-produto",
      title: "Consultoria de Produto",
      pageDescription: "Como Alice apoia a definição de estratégia, priorização e roadmap entre negócio, design e engenharia.",
      introTitle: "Clareza antes de qualquer entrega",
      introText: "Priorizar sem entender o problema é um risco caro. Alice ajuda times a alinhar estratégia e roadmap antes de comprometer tempo de design e engenharia.",
      mainTitle: "Estratégia de produto alinhada entre negócio, design e engenharia",
      mainParagraphs: [
        "Alice apoia times na etapa de descoberta, ajudando a definir com clareza qual problema está sendo resolvido antes de qualquer decisão de design ou desenvolvimento.",
        "Esse trabalho envolve workshops de priorização, construção de roadmap e alinhamento direto entre áreas de negócio, design e engenharia, reduzindo decisões tomadas de forma isolada.",
        "O resultado é um roteiro de produto compartilhado, com riscos mapeados e prioridades claras, o que evita retrabalho e mantém o time focado no que realmente move o produto adiante."
      ],
      benefits: [
        "Workshops de descoberta e definição clara do problema a ser resolvido.",
        "Roadmap priorizado com riscos mapeados e alinhado entre as áreas.",
        "Acompanhamento contínuo para ajustar prioridades conforme o produto evolui."
      ],
      processTitle: "Como a consultoria é conduzida",
      processSteps: [
        "Descoberta e definição do problema",
        "Priorização e construção do roadmap",
        "Alinhamento entre negócio, design e engenharia",
        "Acompanhamento e melhoria contínua"
      ],
      technologies: ["FigJam", "Notion", "Roadmapping", "Análise de métricas"],
      image: {
        src: "assets/img/services/consultoria-produto.svg",
        alt: "Workshop de estratégia de produto com priorização e roadmap"
      },
      seo: {
        title: "Consultoria de Produto — Alice Almeida",
        description: "Como Alice apoia a definição de estratégia, priorização e roadmap entre negócio, design e engenharia."
      }
    },
    {
      slug: "landing-pages-web-design",
      title: "Landing Pages & Web Design",
      pageDescription: "Como Alice desenha e desenvolve landing pages e sites responsivos focados em comunicar valor com clareza.",
      introTitle: "Clareza que conduz à conversão",
      introText: "Uma landing page eficaz comunica valor antes de pedir qualquer ação. Alice desenha cada seção pensando no que o visitante precisa entender primeiro.",
      mainTitle: "Sites e landing pages responsivos pensados para conversão",
      mainParagraphs: [
        "Alice desenha e implementa landing pages e sites institucionais com hierarquia visual clara, priorizando a mensagem principal antes de qualquer elemento decorativo.",
        "Cada página é construída com responsividade real desde o início, garantindo boa leitura e usabilidade tanto em desktop quanto em dispositivos móveis, sem versões reduzidas do conteúdo.",
        "O processo inclui atenção a performance e SEO técnico, já que uma landing page bem desenhada perde efeito se demorar para carregar ou não for encontrada pelos canais certos."
      ],
      benefits: [
        "Hierarquia visual clara, com foco na mensagem antes da decoração.",
        "Responsividade real entre desktop e mobile, sem conteúdo reduzido.",
        "Atenção a performance e SEO técnico desde a implementação."
      ],
      processTitle: "Como a página é construída",
      processSteps: [
        "Definição da mensagem principal e hierarquia de conteúdo",
        "Design responsivo para desktop e mobile",
        "Implementação com atenção a performance",
        "Revisão de SEO técnico e acessibilidade"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      image: {
        src: "assets/img/services/landing-pages-web-design.svg",
        alt: "Landing page responsiva em versões desktop e mobile"
      },
      seo: {
        title: "Landing Pages & Web Design — Alice Almeida",
        description: "Como Alice desenha e desenvolve landing pages e sites responsivos focados em comunicar valor com clareza."
      }
    }
  ];

  window.SERVICES = SERVICES;
})(window);
