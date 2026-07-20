/**
 * Fonte centralizada de dados dos projetos do portfólio.
 * Consumida por assets/js/portfolio-details.js para montar
 * portfolio-details.html dinamicamente a partir de ?project=<slug>.
 */
(function (window) {
  "use strict";

  function projectImages(slug, title, screens) {
    var base = "assets/img/portfolio/projects/" + slug + "/";
    var images = [
      { src: base + "cover.png", alt: title, caption: title }
    ];
    screens.forEach(function (caption, index) {
      images.push({
        src: base + "screen-0" + (index + 1) + ".png",
        alt: title + " — " + caption,
        caption: caption
      });
    });
    return images;
  }

  var PORTFOLIO_PROJECTS = [
    {
      id: "painel-financeiro-saas",
      slug: "painel-financeiro-saas",
      title: "Painel financeiro SaaS",
      subtitle: "Redesign de dashboard para gestão de fluxo de caixa em tempo real",
      pageHeading: "Redesenho de dashboard financeiro para gestão de fluxo de caixa",
      pageDescription: "Um estudo de caso sobre o redesenho de um painel financeiro para gestão de fluxo de caixa.",
      category: "Design de Produto, UX Design",
      client: "Aurora Financial",
      projectDate: "Fevereiro de 2024",
      projectUrl: "https://www.aurorafinancial.com.br",
      projectUrlLabel: "www.aurorafinancial.com.br",
      overviewTitle: "Redesenho de dashboard financeiro para gestão de fluxo de caixa",
      overview: "O desafio era simplificar um painel financeiro sobrecarregado, usado diariamente por times de operações para acompanhar entradas, saídas e projeções de caixa.",
      challenge: "Usuários levavam minutos para localizar indicadores essenciais em meio a gráficos redundantes e uma hierarquia de informação pouco clara.",
      process: "Após entrevistas com usuários e mapeamento dos principais fluxos, o projeto envolveu a reestruturação da arquitetura da informação e a criação de um design system dedicado.",
      solution: "A interface final organiza saldo, entradas, saídas e projeções em uma leitura sequencial, com componentes reutilizáveis implementados em React.",
      results: "O resultado foi uma redução perceptível no tempo de leitura dos indicadores e uma queda nos chamados de suporte relacionados à navegação do painel.",
      technologies: ["Figma", "React", "TypeScript", "Design Tokens"],
      images: projectImages("painel-financeiro-saas", "Painel financeiro SaaS", [
        "Visão geral do painel",
        "Extrato de transações",
        "Projeção de fluxo de caixa"
      ]),
      relatedLinks: []
    },
    {
      id: "design-system-aurora",
      slug: "design-system-aurora",
      title: "Design system Aurora",
      subtitle: "Biblioteca de componentes para produtos B2B multiplataforma",
      pageHeading: "Design system para produtos B2B multiplataforma",
      pageDescription: "Um estudo de caso sobre a construção de um design system para acelerar produtos B2B multiplataforma.",
      category: "Design Systems, UI Design",
      client: "Vetor Tech",
      projectDate: "Setembro de 2023",
      projectUrl: "https://www.vetortech.com.br",
      projectUrlLabel: "www.vetortech.com.br",
      overviewTitle: "Design system para produtos B2B multiplataforma",
      overview: "A Vetor Tech mantinha três produtos B2B com interfaces inconsistentes, construídas por squads diferentes sem um vocabulário visual compartilhado.",
      challenge: "Cada equipe reimplementava os mesmos componentes de formas distintas, o que aumentava o retrabalho e dificultava a manutenção do front-end.",
      process: "O projeto começou com uma auditoria de componentes existentes, seguida da definição de tokens de cor, tipografia e espaçamento compartilhados entre os produtos.",
      solution: "Foi criada uma biblioteca de componentes documentada no Figma e espelhada em código, cobrindo formulários, tabelas, navegação e estados de feedback.",
      results: "A adoção do design system reduziu o tempo de entrega de novas telas e unificou a experiência visual entre os três produtos da empresa.",
      technologies: ["Figma", "React", "Storybook", "Design Tokens"],
      images: projectImages("design-system-aurora", "Design system Aurora", [
        "Fundamentos de cor e tipografia",
        "Biblioteca de componentes",
        "Aplicação no produto"
      ]),
      relatedLinks: []
    },
    {
      id: "identidade-visual-nortelab",
      slug: "identidade-visual-nortelab",
      title: "Identidade visual Nortelab",
      subtitle: "Sistema de marca para startup de healthtech",
      pageHeading: "Identidade visual para uma startup de healthtech",
      pageDescription: "Um estudo de caso sobre a criação de um sistema de marca para a Nortelab, startup de healthtech.",
      category: "Identidade Visual, Branding",
      client: "Nortelab",
      projectDate: "Maio de 2023",
      projectUrl: "https://www.nortelab.com.br",
      projectUrlLabel: "www.nortelab.com.br",
      overviewTitle: "Identidade visual para uma startup de healthtech",
      overview: "A Nortelab precisava de uma identidade visual que transmitisse confiança técnica sem parecer distante, já que seu público inclui médicos e pacientes.",
      challenge: "A marca provisória da empresa não comunicava a seriedade do produto nem se sustentava em diferentes aplicações, de cartão de visita a interface digital.",
      process: "O trabalho partiu da construção de um símbolo geométrico associado à ideia de precisão, seguido da definição de paleta, tipografia e tom de voz.",
      solution: "O sistema final inclui papelaria, assinatura de e-mail e diretrizes de aplicação digital, garantindo consistência entre materiais impressos e produto.",
      results: "A nova identidade passou a ser usada em todos os pontos de contato da empresa, do site institucional às telas do aplicativo.",
      technologies: ["Figma", "Illustrator", "Brand Guidelines"],
      images: projectImages("identidade-visual-nortelab", "Identidade visual Nortelab", [
        "Construção da marca",
        "Aplicações de papelaria",
        "Aplicação digital"
      ]),
      relatedLinks: []
    },
    {
      id: "ebook-ux-research",
      slug: "ebook-ux-research",
      title: "E-book de UX Research",
      subtitle: "Design editorial de material educativo sobre pesquisa com usuários",
      pageHeading: "Design editorial para um e-book sobre pesquisa com usuários",
      pageDescription: "Um estudo de caso sobre o design editorial de um e-book educativo sobre UX Research.",
      category: "Design Editorial, UX Writing",
      client: "Estúdio Formato",
      projectDate: "Agosto de 2023",
      projectUrl: "https://www.estudioformato.com.br",
      projectUrlLabel: "www.estudioformato.com.br",
      overviewTitle: "Design editorial para um e-book sobre pesquisa com usuários",
      overview: "O Estúdio Formato precisava transformar um material técnico sobre pesquisa com usuários em uma publicação digital acessível para designers em início de carreira.",
      challenge: "O conteúdo original era denso e não possuía nenhuma diagramação pensada para leitura confortável em telas.",
      process: "A diagramação foi construída em torno de uma grade tipográfica clara, com destaque para dados de pesquisa, citações e exercícios práticos.",
      solution: "O resultado é um e-book com hierarquia visual definida, ilustrações de apoio e um sumário navegável por capítulos.",
      results: "A publicação passou a ser usada como material de referência interno e distribuída como conteúdo educativo para a comunidade de design.",
      technologies: ["InDesign", "Illustrator", "Editorial Design"],
      images: projectImages("ebook-ux-research", "E-book de UX Research", [
        "Sumário e abertura de capítulo",
        "Página de dados da pesquisa",
        "Leitura no tablet"
      ]),
      relatedLinks: []
    },
    {
      id: "app-agendamento-clinicas",
      slug: "app-agendamento-clinicas",
      title: "App de agendamento para clínicas",
      subtitle: "Fluxo de marcação de consultas simplificado para reduzir abandono",
      pageHeading: "Redesenho do fluxo de agendamento para clínicas médicas",
      pageDescription: "Um estudo de caso sobre a simplificação do fluxo de agendamento de consultas para reduzir abandono.",
      category: "Design de Produto, UX Design",
      client: "Clínica Vitalle",
      projectDate: "Janeiro de 2024",
      projectUrl: "https://www.clinicavitalle.com.br",
      projectUrlLabel: "www.clinicavitalle.com.br",
      overviewTitle: "Redesenho do fluxo de agendamento para clínicas médicas",
      overview: "A Clínica Vitalle enfrentava uma alta taxa de abandono no agendamento de consultas pelo aplicativo, especialmente na etapa de escolha de horário.",
      challenge: "O fluxo original exigia muitas etapas e não deixava claro o que acontecia após a confirmação da consulta.",
      process: "Testes com usuários indicaram pontos de fricção na seleção de datas e na ausência de feedback visual durante a confirmação.",
      solution: "O novo fluxo reduz o agendamento a três etapas objetivas, com confirmação clara e um painel de consultas centralizado.",
      results: "Após o lançamento, a clínica registrou uma queda no abandono do fluxo e menos ligações para reagendamento manual.",
      technologies: ["Figma", "Flutter", "User Testing"],
      images: projectImages("app-agendamento-clinicas", "App de agendamento para clínicas", [
        "Seleção de horário",
        "Confirmação da consulta",
        "Minhas consultas"
      ]),
      relatedLinks: []
    },
    {
      id: "marketplace-b2b",
      slug: "marketplace-b2b",
      title: "Marketplace B2B",
      subtitle: "Interface de catálogo e checkout para operações entre empresas",
      pageHeading: "Redesenho de catálogo e checkout para um marketplace B2B",
      pageDescription: "Um estudo de caso sobre o redesenho da jornada de compra em um marketplace voltado a operações entre empresas.",
      category: "Design de Produto, UI Design",
      client: "Comerza",
      projectDate: "Novembro de 2023",
      projectUrl: "https://www.comerza.com.br",
      projectUrlLabel: "www.comerza.com.br",
      overviewTitle: "Redesenho de catálogo e checkout para um marketplace B2B",
      overview: "A Comerza operava um marketplace B2B cujo catálogo e checkout ainda seguiam padrões de e-commerce voltados ao consumidor final.",
      challenge: "Compradores corporativos precisavam comparar grandes volumes de itens e fechar pedidos com condições específicas, algo que a interface original não suportava bem.",
      process: "O projeto mapeou a jornada de compra corporativa e propôs uma navegação por catálogo mais densa, com filtros avançados e cotação de pedidos.",
      solution: "O checkout final passou a exibir resumo de pedido, condições comerciais e status de aprovação em uma única tela.",
      results: "A nova experiência reduziu o tempo médio de fechamento de pedidos e aumentou a recorrência de compra entre contas corporativas.",
      technologies: ["Figma", "React", "Design Systems"],
      images: projectImages("marketplace-b2b", "Marketplace B2B", [
        "Catálogo de produtos",
        "Página do produto",
        "Carrinho e checkout"
      ]),
      relatedLinks: []
    },
    {
      id: "rebranding-estudio-cedro",
      slug: "rebranding-estudio-cedro",
      title: "Rebranding Estúdio Cedro",
      subtitle: "Nova identidade visual para agência de arquitetura",
      pageHeading: "Rebranding completo para uma agência de arquitetura",
      pageDescription: "Um estudo de caso sobre o rebranding do Estúdio Cedro, agência de arquitetura.",
      category: "Identidade Visual, Branding",
      client: "Estúdio Cedro",
      projectDate: "Junho de 2023",
      projectUrl: "https://www.estudiocedro.com.br",
      projectUrlLabel: "www.estudiocedro.com.br",
      overviewTitle: "Rebranding completo para uma agência de arquitetura",
      overview: "O Estúdio Cedro havia crescido além da identidade visual original, criada nos primeiros anos da agência e sem relação com o portfólio atual de projetos.",
      challenge: "A marca antiga não refletia a maturidade dos projetos entregues nem se sustentava bem em materiais institucionais e sinalização de obra.",
      process: "O rebranding partiu da construção de um novo símbolo geométrico inspirado em elementos estruturais, seguido de testes de aplicação em diferentes suportes.",
      solution: "O sistema final cobre papelaria, sinalização de canteiro de obras e material institucional, com uma paleta terrosa alinhada ao setor.",
      results: "A nova identidade passou a representar a agência em apresentações a clientes e em todos os projetos entregues desde então.",
      technologies: ["Illustrator", "Brand Guidelines", "Signage Design"],
      images: projectImages("rebranding-estudio-cedro", "Rebranding Estúdio Cedro", [
        "Construção do símbolo",
        "Sinalização",
        "Material institucional"
      ]),
      relatedLinks: []
    },
    {
      id: "relatorio-anual",
      slug: "relatorio-anual",
      title: "Relatório anual",
      subtitle: "Diagramação de relatório institucional para empresa de tecnologia",
      pageHeading: "Diagramação de relatório anual para uma empresa de tecnologia",
      pageDescription: "Um estudo de caso sobre a diagramação de um relatório institucional anual.",
      category: "Design Editorial, Design de Produto",
      client: "Lumen Tecnologia",
      projectDate: "Março de 2023",
      projectUrl: "https://www.lumentecnologia.com.br",
      projectUrlLabel: "www.lumentecnologia.com.br",
      overviewTitle: "Diagramação de relatório anual para uma empresa de tecnologia",
      overview: "A Lumen Tecnologia precisava transformar dados de desempenho anual em um relatório institucional claro para investidores e colaboradores.",
      challenge: "As versões anteriores do relatório concentravam informação em blocos de texto extensos, dificultando a leitura dos indicadores mais relevantes.",
      process: "O trabalho envolveu a definição de uma grade editorial consistente, com destaque visual para indicadores, linha do tempo e marcos do ano.",
      solution: "O relatório final organiza abertura de seções, indicadores e linha do tempo em um sistema visual coeso, mantendo legibilidade em impressão e PDF.",
      results: "A nova diagramação foi adotada como padrão para os relatórios seguintes da empresa.",
      technologies: ["InDesign", "Data Visualization", "Editorial Design"],
      images: projectImages("relatorio-anual", "Relatório anual", [
        "Abertura de seção",
        "Página de indicadores",
        "Linha do tempo"
      ]),
      relatedLinks: []
    },
    {
      id: "onboarding-fintech",
      slug: "onboarding-fintech",
      title: "Onboarding para fintech",
      subtitle: "Nova jornada de cadastro com redução de etapas e fricção",
      pageHeading: "Redesenho da jornada de onboarding de uma fintech",
      pageDescription: "Um estudo de caso sobre a redução de etapas e fricção no onboarding de uma fintech.",
      category: "Design de Produto, UX Design",
      client: "Zenith Pagamentos",
      projectDate: "Outubro de 2023",
      projectUrl: "https://www.zenithpagamentos.com.br",
      projectUrlLabel: "www.zenithpagamentos.com.br",
      overviewTitle: "Redesenho da jornada de onboarding de uma fintech",
      overview: "A Zenith Pagamentos identificou uma alta desistência durante o cadastro de novos clientes, concentrada nas etapas de verificação de identidade.",
      challenge: "O fluxo original pedia informações redundantes em telas separadas, sem indicar quanto faltava para concluir o cadastro.",
      process: "O redesenho consolidou etapas relacionadas, introduziu um indicador de progresso e simplificou a verificação de identidade.",
      solution: "A nova jornada leva o usuário da criação da conta à confirmação em poucas telas objetivas, com feedback claro a cada etapa.",
      results: "Após o lançamento, a fintech registrou mais cadastros concluídos e uma redução no tempo médio de onboarding.",
      technologies: ["Figma", "React Native", "User Testing"],
      images: projectImages("onboarding-fintech", "Onboarding para fintech", [
        "Verificação de identidade",
        "Preferências da conta",
        "Conta criada"
      ]),
      relatedLinks: []
    },
    {
      id: "portal-do-cliente",
      slug: "portal-do-cliente",
      title: "Portal do cliente",
      subtitle: "Área logada com relatórios, faturas e suporte centralizados",
      pageHeading: "Redesenho do portal logado para clientes B2B",
      pageDescription: "Um estudo de caso sobre a centralização de faturas, relatórios e suporte em um portal do cliente.",
      category: "Design de Produto, UI Design",
      client: "Órbita Serviços",
      projectDate: "Abril de 2024",
      projectUrl: "https://www.orbitaservicos.com.br",
      projectUrlLabel: "www.orbitaservicos.com.br",
      overviewTitle: "Redesenho do portal logado para clientes B2B",
      overview: "Clientes da Órbita Serviços precisavam acessar sistemas separados para consultar faturas, relatórios de uso e abrir chamados de suporte.",
      challenge: "A dispersão de informações em múltiplas ferramentas gerava dúvidas recorrentes e aumentava o volume de atendimento humano.",
      process: "O projeto mapeou as tarefas mais frequentes dos clientes e propôs um portal único organizado por faturas, relatórios e central de suporte.",
      solution: "O portal final reúne histórico de faturas, relatórios de uso detalhados e abertura de chamados em uma navegação lateral única.",
      results: "A centralização reduziu o volume de tickets abertos por dúvidas de cobrança e aumentou o uso self-service da plataforma.",
      technologies: ["Figma", "React", "Design Systems"],
      images: projectImages("portal-do-cliente", "Portal do cliente", [
        "Faturas",
        "Relatórios de uso",
        "Central de suporte"
      ]),
      relatedLinks: []
    },
    {
      id: "marca-pessoal-camila-reis",
      slug: "marca-pessoal-camila-reis",
      title: "Marca pessoal Camila Reis",
      subtitle: "Identidade visual para consultoria de carreira",
      pageHeading: "Identidade de marca pessoal para uma consultoria de carreira",
      pageDescription: "Um estudo de caso sobre a criação de uma marca pessoal para a consultora de carreira Camila Reis.",
      category: "Identidade Visual, Branding",
      client: "Camila Reis Consultoria",
      projectDate: "Julho de 2023",
      projectUrl: "https://www.camilareis.com.br",
      projectUrlLabel: "www.camilareis.com.br",
      overviewTitle: "Identidade de marca pessoal para uma consultoria de carreira",
      overview: "Camila Reis atuava como consultora de carreira sem uma identidade visual própria, usando materiais genéricos em redes sociais e no site pessoal.",
      challenge: "A ausência de uma marca consistente dificultava o reconhecimento da consultora entre um público que decide por afinidade e confiança.",
      process: "O projeto partiu de um monograma que representasse a consultora de forma pessoal, mas profissional, aplicado depois a site e redes sociais.",
      solution: "O sistema final cobre papelaria pessoal, site e templates de posts, mantendo uma paleta e tipografia consistentes em todos os canais.",
      results: "A nova marca passou a ser usada em toda a comunicação pública da consultora, do site pessoal às redes sociais.",
      technologies: ["Figma", "Illustrator", "Brand Guidelines"],
      images: projectImages("marca-pessoal-camila-reis", "Marca pessoal Camila Reis", [
        "Papelaria pessoal",
        "Site pessoal",
        "Redes sociais"
      ]),
      relatedLinks: []
    },
    {
      id: "guia-de-acessibilidade",
      slug: "guia-de-acessibilidade",
      title: "Guia de acessibilidade",
      subtitle: "Publicação digital com diretrizes de acessibilidade para times de produto",
      pageHeading: "Publicação digital de diretrizes de acessibilidade",
      pageDescription: "Um estudo de caso sobre a criação de um guia digital de acessibilidade para times de produto.",
      category: "Design Editorial, Acessibilidade",
      client: "Coletivo Acesso",
      projectDate: "Dezembro de 2023",
      projectUrl: "https://www.coletivoacesso.com.br",
      projectUrlLabel: "www.coletivoacesso.com.br",
      overviewTitle: "Publicação digital de diretrizes de acessibilidade",
      overview: "O Coletivo Acesso precisava consolidar boas práticas de acessibilidade dispersas em documentos internos em uma única publicação de referência.",
      challenge: "Times de produto diferentes aplicavam critérios de acessibilidade de forma inconsistente, sem um material único para consulta rápida.",
      process: "O guia foi estruturado por diretriz, com exemplos de contraste, leitura e navegação, sempre comparando abordagens antes e depois.",
      solution: "A publicação final organiza cada diretriz em uma página objetiva, com checklist de verificação ao final de cada seção.",
      results: "O guia passou a ser adotado como referência obrigatória em revisões de design dos times de produto.",
      technologies: ["Figma", "Editorial Design", "WCAG"],
      images: projectImages("guia-de-acessibilidade", "Guia de acessibilidade", [
        "Página de diretriz",
        "Checklist de verificação",
        "Antes e depois"
      ]),
      relatedLinks: []
    }
  ];

  window.PORTFOLIO_PROJECTS = PORTFOLIO_PROJECTS;
})(window);
