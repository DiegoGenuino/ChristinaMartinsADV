export type VideoProvider = 'youtube' | 'file';

export interface ImageAsset {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export interface NavigationLink {
  href: string;
  label: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface IdentityConfig {
  siteName: string;
  legalName: string;
  professionalName: string;
  professionalRole: string;
  professionalDescription: string;
  professionalImage: string;
  logo?: ImageAsset;
  registration: string;
}

export interface ContactConfig {
  whatsappUrl: string;
  primaryCtaLabel: string;
}

export interface HeaderConfig {
  brandHref: string;
  brandLabel: string;
  primaryNavigationLabel: string;
  mobileNavigationLabel: string;
  menuOpenLabel: string;
  links: NavigationLink[];
}

export interface HeroConfig {
  id: string;
  image: ImageAsset & {
    srcset: Array<{ src: string; width: number }>;
    sizes: string;
  };
  trust: {
    text: string;
    avatars: string[];
  };
  title: Array<{ text: string; highlighted?: boolean }>;
  description: string;
  primaryCtaLabel: string;
  secondaryCta: NavigationLink;
  scrollTarget: string;
  scrollLabel: string;
}

export interface StatsConfig {
  id: string;
  label: string;
  items: Array<{ value: string; label: string }>;
}

export interface AboutConfig {
  id: string;
  image: ImageAsset & {
    srcset: Array<{ src: string; width: number }>;
    sizes: string;
  };
  cardName: string;
  cardDetail: string;
  eyebrow: string;
  credentials: Array<{ icon: string; text: string }>;
}

export interface PracticeSectionConfig {
  id: string;
  title: string;
  highlightedTitle: string;
  description: string;
  items: Array<{ icon: string; title: string; description: string }>;
}

export interface UrgencySectionConfig {
  id: string;
  title: string;
  highlightedTitle: string;
  description: string;
  closingText: string;
  ctaLabel: string;
  listLabel: string;
  items: Array<{ title: string; description: string }>;
}

export interface ProcessSectionConfig {
  id: string;
  title: string;
  highlightedTitle: string;
  description: string;
  stepsLabel: string;
  stepLabel: string;
  items: Array<{ title: string; description: string; detail: string }>;
}

export interface DifferentialsSectionConfig {
  id: string;
  titlePrefix: string;
  highlightedTitle: string;
  titleSuffix: string;
  tabsLabel: string;
  ctaLabel: string;
  items: Array<{ icon: string; title: string; description: string }>;
}

export type ReviewsSource = 'google' | 'manual';

export interface ReviewItem {
  quote: string;
  name: string;
  details: string;
  rating: number | null;
  avatar: string;
  avatarPosition: string;
  publishedAt: string | null;
  publishedAtLabel: string;
  googleMapsUrl: string;
  authorProfileUrl: string;
  source: 'google' | 'manual';
}

export type ManualReviewItem = Pick<
  ReviewItem,
  'quote' | 'name' | 'details' | 'rating' | 'avatar' | 'avatarPosition'
> & Partial<Pick<ReviewItem, 'publishedAt' | 'publishedAtLabel' | 'googleMapsUrl' | 'authorProfileUrl'>>;

export interface ReviewsSectionConfig {
  enabled: boolean;
  id: string;
  title: string;
  highlightedTitle: string;
  platformLogo: ImageAsset;
  source: ReviewsSource;
  maxRating: number;
  ratingUnavailableLabel: string;
  orderingNotice: string;
  google: {
    placeId: string;
    limit: number;
    reviewsUrl: string;
  };
  fallbacks: {
    quote: string;
    name: string;
    details: string;
    avatar: string;
    avatarPosition: string;
    publishedAtLabel: string;
  };
  manualItems: ManualReviewItem[];
}

export interface FaqSectionConfig {
  id: string;
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  description: string;
  ctaLabel: string;
  items: FaqItem[];
}

export interface FooterConfig {
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  description: string;
  links: NavigationLink[];
  copyrightSuffix: string;
  backToTopLabel: string;
  backToTopHref: string;
  whatsapp: {
    regionLabel: string;
    closeLabel: string;
    image: ImageAsset;
    senderName: string;
    message: string;
    actionLabel: string;
    buttonLabel: string;
  };
}

export interface VideoSectionConfig {
  enabled: boolean;
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  description: string;
  provider: VideoProvider;
  videoId: string;
  videoUrl: string;
  poster: string;
  posterAlt: string;
  playLabel: string;
  caption: string;
}

export interface LocationSectionConfig {
  enabled: boolean;
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  description: string;
  address: string;
  mapQuery: string;
  mapTitle: string;
  directionsLabel: string;
}

export interface AiDiscoveryConfig {
  enabled: boolean;
  llmsPath: string;
  markdownPath: string;
  summary: string;
  usageNote: string;
}

export interface SeoConfig {
  siteUrl: string;
  locale: string;
  language: string;
  homePageTitle: string;
  defaultTitle: string;
  titleTemplate: string;
  defaultDescription: string;
  defaultImage: string;
  defaultImageAlt: string;
  defaultImageWidth: number;
  defaultImageHeight: number;
  themeColor: string;
  favicon: string;
  keywords: string[];
  areaServed: string;
  knowsAbout: string[];
  sitemap: Array<{
    path: string;
    changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly';
    priority: number;
  }>;
}

export type DeploymentMode = 'auto' | 'git' | 'upload';

export interface DeploymentConfig {
  mode: DeploymentMode;
  projectName: string;
  subdomain: string;
  baseDomain: string;
  cnameTarget: string;
}

export interface SiteConfig {
  identity: IdentityConfig;
  contact: ContactConfig;
  header: HeaderConfig;
  hero: HeroConfig;
  stats: StatsConfig;
  about: AboutConfig;
  practiceSection: PracticeSectionConfig;
  urgencySection: UrgencySectionConfig;
  differentialsSection: DifferentialsSectionConfig;
  processSection: ProcessSectionConfig;
  reviewsSection: ReviewsSectionConfig;
  faqSection: FaqSectionConfig;
  footer: FooterConfig;
  seo: SeoConfig;
  videoSection: VideoSectionConfig;
  locationSection: LocationSectionConfig;
  aiDiscovery: AiDiscoveryConfig;
  deployment: DeploymentConfig;
}

export const siteConfig = {
  "identity": {
    "siteName": "Christina Martins Advogada",
    "legalName": "Christina Aguiar Martins Advogada",
    "professionalName": "Christina Aguiar Martins",
    "professionalRole": "Advogada",
    "professionalDescription": "Advogada especialista com atuação focada em Direito Previdenciário (INSS, LOAS e Aposentadorias), Direito do Trabalho e Direito de Família, oferecendo suporte jurídico humanizado e estratégico de forma presencial e online para todo o Brasil.",
    "professionalImage": "/images/christina-martins-1080.webp",
    "logo": {
      "src": "/images/christina-martins-logo.svg",
      "width": 660,
      "height": 96,
      "alt": "Christina Aguiar Martins — Advogada"
    },
    "registration": "OAB/SP 360.536"
  },
  "contact": {
    "whatsappUrl": "https://wa.me/5511930708264?text=Olá%2C%20Dra.%20Christina.%20Gostaria%20de%20informações%20sobre%20o%20atendimento%20jurídico.",
    "primaryCtaLabel": "Falar com a advogada"
  },
  "header": {
    "brandHref": "#inicio",
    "brandLabel": "Christina Martins Advogada — início",
    "primaryNavigationLabel": "Navegação principal",
    "mobileNavigationLabel": "Navegação mobile",
    "menuOpenLabel": "Abrir menu",
    "links": [
      {
        "href": "#sobre",
        "label": "A advogada"
      },
      {
        "href": "#especialidades",
        "label": "Áreas de atuação"
      },
      {
        "href": "#diferenciais",
        "label": "Atendimento"
      },
      {
        "href": "#faq",
        "label": "Dúvidas"
      }
    ]
  },
  "hero": {
    "id": "inicio",
    "image": {
      "src": "/images/christina-martins-hero-studio-640.webp",
      "width": 640,
      "height": 1138,
      "alt": "Dra. Christina Aguiar Martins",
      "srcset": [
        {
          "src": "/images/christina-martins-hero-studio-640.webp",
          "width": 640
        }
      ],
      "sizes": "(max-width: 780px) 100vw, min(64vw, 1000px)"
    },
    "trust": {
      "text": "Presencial em São Paulo · Online em todo o Brasil",
      "avatars": []
    },
    "title": [
      {
        "text": "Orientação para seus direitos "
      },
      {
        "text": "previdenciários",
        "highlighted": true
      },
      {
        "text": ", "
      },
      {
        "text": "trabalhistas",
        "highlighted": true
      },
      {
        "text": " e de "
      },
      {
        "text": "família.",
        "highlighted": true
      }
    ],
    "description": "Um atendimento atento à sua história, com orientação clara sobre os caminhos jurídicos possíveis. Na Bela Vista, em São Paulo, e online em todo o Brasil.",
    "primaryCtaLabel": "Conversar com a advogada",
    "secondaryCta": {
      "href": "#sobre",
      "label": "Conheça minha atuação"
    },
    "scrollTarget": "#numeros",
    "scrollLabel": "Conheça o atendimento"
  },
  "stats": {
    "id": "numeros",
    "label": "Informações do atendimento",
    "items": [
      {
        "value": "4,9/5",
        "label": "Nota no Google Maps · dossiê de 16/09/2026"
      },
      {
        "value": "11",
        "label": "Avaliações no Google Maps · dossiê de 16/09/2026"
      },
      {
        "value": "São Paulo",
        "label": "Atendimento presencial na Bela Vista"
      },
      {
        "value": "Brasil",
        "label": "Atendimento online em todo o país"
      }
    ]
  },
  "about": {
    "id": "sobre",
    "image": {
      "src": "/images/christina-martins-560.webp",
      "width": 560,
      "height": 700,
      "alt": "Dra. Christina Aguiar Martins, advogada em São Paulo",
      "srcset": [
        {
          "src": "/images/christina-martins-560.webp",
          "width": 560
        },
        {
          "src": "/images/christina-martins-1080.webp",
          "width": 1080
        }
      ],
      "sizes": "(max-width: 780px) calc(100vw - 34px), 392px"
    },
    "cardName": "Dra. Christina Aguiar Martins",
    "cardDetail": "Advogada · OAB/SP 360.536",
    "eyebrow": "Conheça a Dra. Christina Martins",
    "credentials": [
      {
        "icon": "lucide:circle-check",
        "text": "OAB/SP 360.536"
      },
      {
        "icon": "lucide:circle-check",
        "text": "Atuação em Previdenciário, Trabalho e Família"
      },
      {
        "icon": "lucide:circle-check",
        "text": "Escritório na Bela Vista, em São Paulo"
      },
      {
        "icon": "lucide:circle-check",
        "text": "Atendimento online em todo o Brasil"
      }
    ]
  },
  "practiceSection": {
    "id": "especialidades",
    "title": "Áreas de",
    "highlightedTitle": "atuação",
    "description": "Orientação jurídica para diferentes momentos da sua vida, do acesso a benefícios às relações de trabalho e de família.",
    "items": [
      {
        "icon": "lucide:shield-check",
        "title": "Direito Previdenciário (INSS)",
        "description": "Assessoria para concessão e revisão de benefícios do INSS, incluindo LOAS/BPC, Aposentadorias, Pensão por Morte, Auxílio-Doença e Aposentadoria por Invalidez."
      },
      {
        "icon": "lucide:briefcase",
        "title": "Direito do Trabalho",
        "description": "Defesa dos direitos do trabalhador em rescisão contratual, justa causa indevida, cobrança de FGTS, acidentes de trabalho, horas extras, acúmulo de função e assédio moral."
      },
      {
        "icon": "lucide:users",
        "title": "Direito de Família e Sucessões",
        "description": "Suporte jurídico sensível e atento em processos de divórcio, pensão alimentícia, guarda, inventário, União Homoafetiva e contratos de união estável."
      }
    ]
  },
  "urgencySection": {
    "id": "quando-buscar-ajuda",
    "title": "Quando buscar",
    "highlightedTitle": "orientação jurídica?",
    "description": "Uma negativa do INSS, uma mudança no trabalho ou uma questão familiar pode trazer dúvidas. Entender os documentos e os prazos é um primeiro passo para avaliar a situação.",
    "closingText": "Conte sua situação para que os próximos passos possam ser avaliados de forma individual.",
    "ctaLabel": "Conversar sobre meu caso",
    "listLabel": "Situações para buscar orientação jurídica",
    "items": [
      {
        "title": "Benefício do INSS negado",
        "description": "A decisão e os documentos ajudam a compreender os motivos da negativa e avaliar as alternativas cabíveis."
      },
      {
        "title": "Dúvidas sobre aposentadoria ou BPC/LOAS",
        "description": "O histórico de contribuições e as informações pessoais precisam ser analisados conforme o benefício pretendido."
      },
      {
        "title": "Demissão ou direitos trabalhistas",
        "description": "Contratos, recibos e registros da relação de trabalho ajudam a organizar a análise do caso."
      },
      {
        "title": "Divórcio, guarda ou pensão alimentícia",
        "description": "Questões familiares merecem uma avaliação cuidadosa dos fatos e dos interesses envolvidos."
      },
      {
        "title": "Inventário ou união estável",
        "description": "A documentação e o contexto familiar orientam a análise dos procedimentos possíveis."
      }
    ]
  },
  "differentialsSection": {
    "id": "diferenciais",
    "titlePrefix": "Um atendimento com",
    "highlightedTitle": "atenção",
    "titleSuffix": "à sua história.",
    "tabsLabel": "Como a Dra. Christina Martins atende",
    "ctaLabel": "Agendar atendimento",
    "items": [
      {
        "icon": "lucide:map-pin",
        "title": "Presencial na Bela Vista",
        "description": "Atendimento em São Paulo, na Rua Santo Amaro, 544, mediante agendamento."
      },
      {
        "icon": "lucide:monitor",
        "title": "Online em todo o Brasil",
        "description": "Consultas e envio de documentos podem ser organizados à distância, conforme as necessidades do caso."
      },
      {
        "icon": "lucide:messages-square",
        "title": "Orientação em linguagem clara",
        "description": "O atendimento busca tornar documentos, alternativas e próximos passos mais compreensíveis."
      },
      {
        "icon": "lucide:files",
        "title": "Análise individual do caso",
        "description": "Fatos, documentos e prazos são considerados em conjunto para avaliar os caminhos jurídicos possíveis."
      },
      {
        "icon": "lucide:lock-keyhole",
        "title": "Ética e sigilo profissional",
        "description": "As informações compartilhadas no atendimento são tratadas com cuidado e sigilo profissional."
      }
    ]
  },
  "processSection": {
    "id": "como-funciona",
    "title": "Do primeiro contato aos",
    "highlightedTitle": "próximos passos.",
    "description": "Cada situação tem suas particularidades. Conheça as etapas que orientam o atendimento jurídico.",
    "stepsLabel": "Etapas do atendimento jurídico",
    "stepLabel": "Etapa",
    "items": [
      {
        "title": "Contato inicial",
        "description": "Apresente sua situação pelo WhatsApp e informe se existe algum prazo em andamento.",
        "detail": "O contato inicial permite organizar o agendamento e os documentos necessários."
      },
      {
        "title": "Análise dos documentos",
        "description": "A advogada avalia as informações e a documentação pertinentes ao caso.",
        "detail": "Se necessário, serão solicitados documentos ou esclarecimentos complementares."
      },
      {
        "title": "Orientação sobre alternativas",
        "description": "Os caminhos possíveis, as condições do serviço e os próximos passos são explicados.",
        "detail": "A definição do trabalho depende da análise individual e da contratação."
      },
      {
        "title": "Acompanhamento jurídico",
        "description": "Após a contratação, o atendimento segue conforme o serviço acordado.",
        "detail": "Orientações e atualizações ajudam a acompanhar as etapas relevantes."
      }
    ]
  },
  "reviewsSection": {
    "enabled": true,
    "id": "avaliacoes",
    "title": "O que dizem sobre o",
    "highlightedTitle": "atendimento",
    "platformLogo": {
      "src": "/images/google-icon.png",
      "width": 41,
      "height": 41,
      "alt": "Google"
    },
    "source": "google",
    "maxRating": 5,
    "ratingUnavailableLabel": "Avaliação não disponível",
    "orderingNotice": "Avaliações selecionadas por relevância.",
    "google": {
      "placeId": "ChIJ52kDI9pZzpQRlUzGkyAN83Q",
      "limit": 3,
      "reviewsUrl": "https://share.google/IJa9eUEXaCCS09uLJ"
    },
    "fallbacks": {
      "quote": "Comentário não disponível",
      "name": "Usuário do Google",
      "details": "Não disponível",
      "avatar": "/images/google-icon.png",
      "avatarPosition": "center",
      "publishedAtLabel": "Data não disponível"
    },
    "manualItems": [
      {
        "quote": "Excelente advogada. Além de ser super profissional, confiável, sempre atenciosa e esclareceu todas as minhas dúvidas.",
        "name": "Cliente Verificado",
        "details": "Fonte: Cronoshare · relato fornecido",
        "rating": 5,
        "avatar": "/images/google-icon.png",
        "avatarPosition": "center"
      }
    ]
  },
  "faqSection": {
    "id": "faq",
    "eyebrow": "Dúvidas frequentes",
    "title": "Informação clara desde o",
    "highlightedTitle": "primeiro contato",
    "description": "Informações gerais sobre o atendimento. A orientação para cada caso depende de análise individual.",
    "ctaLabel": "Falar sobre meu caso",
    "items": [
      {
        "question": "Quais são as áreas de atuação da Dra. Christina?",
        "answer": "A atuação abrange Direito Previdenciário, Direito do Trabalho e Direito de Família e Sucessões, incluindo demandas relacionadas ao INSS, relações de trabalho e questões familiares."
      },
      {
        "question": "Onde é realizado o atendimento presencial?",
        "answer": "O escritório está na Rua Santo Amaro, 544, Bela Vista, São Paulo · SP, CEP 01315-000. Entre em contato pelo WhatsApp para agendar e confirmar o horário."
      },
      {
        "question": "Posso ser atendido online fora de São Paulo?",
        "answer": "Sim. Há atendimento online em todo o Brasil. O formato e as etapas são combinados conforme a necessidade do caso."
      },
      {
        "question": "Quais documentos preciso separar para o atendimento?",
        "answer": "Os documentos variam conforme a demanda. No primeiro contato, apresente um resumo da situação e informe eventuais prazos; a advogada orientará quais registros serão necessários para a análise."
      },
      {
        "question": "Como agendar uma consulta?",
        "answer": "Use os botões de WhatsApp do site para conversar com a Dra. Christina e consultar disponibilidade, formato e condições do atendimento."
      },
      {
        "question": "A consulta garante um resultado no processo?",
        "answer": "Não. A análise permite esclarecer alternativas e possíveis riscos. Cada demanda depende dos fatos, dos documentos e das decisões dos órgãos competentes, sem garantia de resultado."
      }
    ]
  },
  "footer": {
    "eyebrow": "Atendimento presencial e online",
    "title": "Vamos conversar sobre",
    "highlightedTitle": "seus direitos?",
    "description": "Direito Previdenciário, do Trabalho e de Família e Sucessões. Rua Santo Amaro, 544, Bela Vista, São Paulo · SP. WhatsApp: (11) 93070-8264.",
    "links": [
      {
        "href": "#sobre",
        "label": "A advogada"
      },
      {
        "href": "#especialidades",
        "label": "Áreas de atuação"
      },
      {
        "href": "#diferenciais",
        "label": "Atendimento"
      },
      {
        "href": "#faq",
        "label": "Dúvidas"
      },
      {
        "href": "https://www.instagram.com/adv_christinamartins",
        "label": "Instagram"
      },
      {
        "href": "https://share.google/IJa9eUEXaCCS09uLJ",
        "label": "Google Maps"
      },
      {
        "href": "https://www.cronoshare.com.br/servicos/advogado-trabalhista/sao-paulo/sao-paulo/b/centro",
        "label": "Fonte do depoimento"
      }
    ],
    "copyrightSuffix": "Todos os direitos reservados.",
    "backToTopLabel": "Voltar ao topo",
    "backToTopHref": "#inicio",
    "whatsapp": {
      "regionLabel": "Atendimento pelo WhatsApp",
      "closeLabel": "Fechar convite",
      "image": {
        "src": "/images/christina-martins-avatar.webp",
        "width": 48,
        "height": 48,
        "alt": "Dra. Christina Martins"
      },
      "senderName": "Dra. Christina Martins",
      "message": "Olá! Gostaria de agendar um atendimento? Converse comigo pelo WhatsApp.",
      "actionLabel": "Iniciar conversa",
      "buttonLabel": "Abrir atendimento pelo WhatsApp"
    }
  },
  "seo": {
    "siteUrl": "https://christinamartinsadvocacia.feito.website",
    "locale": "pt_BR",
    "language": "pt-BR",
    "homePageTitle": "Previdenciário, Trabalhista e Família em São Paulo",
    "defaultTitle": "Christina Martins Advogada | Previdenciário, Trabalhista e Família em São Paulo",
    "titleTemplate": "%s | Christina Martins Advogada",
    "defaultDescription": "Christina Martins Advogada: Direito Previdenciário, Trabalhista e de Família. Atendimento na Bela Vista, São Paulo, e online em todo o Brasil.",
    "defaultImage": "/images/christina-martins-og.webp",
    "defaultImageAlt": "Christina Aguiar Martins Advogada · Previdenciário, Trabalhista, Família e Sucessões. São Paulo e atendimento online em todo o Brasil.",
    "defaultImageWidth": 1200,
    "defaultImageHeight": 630,
    "themeColor": "#1e293b",
    "favicon": "/images/christina-martins-favicon.svg",
    "keywords": [
      "advogada previdenciária são paulo",
      "advogado trabalhista bela vista sp",
      "pedido loas inss",
      "aposentadoria inss",
      "advogado de familia sao paulo",
      "reversão de justa causa"
    ],
    "areaServed": "São Paulo - SP e Atendimento Online em todo o Brasil",
    "knowsAbout": [
      "Direito Previdenciário",
      "LOAS/BPC",
      "Aposentadorias e Pensões",
      "Direito do Trabalho",
      "Direito de Família",
      "Divórcio e Inventário"
    ],
    "sitemap": [
      {
        "path": "/",
        "changeFrequency": "monthly",
        "priority": 1
      }
    ]
  },
  "videoSection": {
    "enabled": false,
    "eyebrow": "Apresentação institucional",
    "title": "Conheça minha",
    "highlightedTitle": "atuação.",
    "description": "Apresentação da Dra. Christina Aguiar Martins.",
    "provider": "youtube",
    "videoId": "",
    "videoUrl": "",
    "poster": "",
    "posterAlt": "",
    "playLabel": "Assistir apresentação",
    "caption": ""
  },
  "locationSection": {
    "enabled": true,
    "eyebrow": "Localização",
    "title": "Atendimento na",
    "highlightedTitle": "Bela Vista.",
    "description": "Atendimento presencial em São Paulo mediante agendamento e online em todo o Brasil. Confirme o horário pelo WhatsApp antes de sua visita.",
    "address": "Rua Santo Amaro, 544 · Bela Vista, São Paulo · SP, CEP 01315-000",
    "mapQuery": "Christina Aguiar Martins Advogada R. Santo Amaro, 544 - Bela Vista, São Paulo - SP",
    "mapTitle": "Localização de Christina Aguiar Martins Advogada na Bela Vista, São Paulo",
    "directionsLabel": "Abrir no Google Maps"
  },
  "aiDiscovery": {
    "enabled": true,
    "llmsPath": "/llms.txt",
    "markdownPath": "/index.md",
    "summary": "Christina Aguiar Martins Advogada atua em Direito Previdenciário, Direito do Trabalho e Direito de Família e Sucessões, na Rua Santo Amaro, 544, Bela Vista, São Paulo · SP, e online em todo o Brasil. Contato pelo WhatsApp: +55 11 93070-8264. Instagram: https://www.instagram.com/adv_christinamartins.",
    "usageNote": "Conteúdo institucional e informativo, baseado nos dados fornecidos. Christina Aguiar Martins: OAB/SP 360.536. Não substitui análise jurídica individual e não representa promessa de resultado."
  },
  "deployment": {
    "mode": "auto",
    "projectName": "christina-martins-advocacia",
    "subdomain": "christinamartinsadvocacia",
    "baseDomain": "feito.website",
    "cnameTarget": "cname.vercel-dns-0.com"
  }
} satisfies SiteConfig;
