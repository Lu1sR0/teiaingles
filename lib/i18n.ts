export type Language = "en"

export interface Translations {
  [key: string]: string | Translations
}

export const translations: Translations = {
  // Navigation
  nav: {
    home: "Home",
    about: "About Us",
    whatWeDo: "What We Do",
    creators: "Creators",
    reports: "Reports",
    participate: "Participate",
  },
  // Home page
  home: {
    hero: {
      subtitle: "Impactful introduction",
      title1: "STRATEGIC",
      title2: "COMMUNICATION",
      title3: "FOR DEMOCRACY",
      societyText: "FOR A TRULY DEMOCRATIC SOCIETY",
      description:
        "Teia de Criadores is a civil society organization that works to strengthen content creators, campaigns, and social impact initiatives. We combine production and communication intelligence to amplify voices, defend rights, and confront inequalities across networks and territories.",
      cta: "Learn more",
    },
    stats: {
      title: "OUR IMPACT",
      creators: "Active Creators",
      views: "Views",
      campaigns: "Campaigns",
      partners: "Partner Organizations",
    },
    whatWeDo: {
      subtitle: "What we do",
      title1: "IMPACT",
      title2: "CAMPAIGNS",
      description:
        "We develop campaigns that connect politics, culture, youth, and rights. More than 16 million views on social media in our first year.",
      cta: "View campaigns",
    },
    creators: {
      subtitle: "Creators",
      title1: "OUR",
      title2: "NETWORK",
      description:
        "Meet our network of creators and popular communicators who use social networks to strengthen democracy.",
      cta: "Meet creators",
    },
    newsletter: {
      title: "RECEIVE TEIA NEWS STRAIGHT TO YOUR EMAIL",
      description: "Get updates about democratic communication and social transformation directly to your inbox",
      placeholder: "your@email.com",
      cta: "Subscribe",
    },
    ctas: {
      ecosystem: {
        title: "JOIN OUR ECOSYSTEM",
        description: "Join our network of creators and communicators committed to social transformation",
        cta: "Join the Network",
      },
      budget: {
        title: "GET A QUOTE WITH US",
        description: "Purpose-driven communication services for organizations, campaigns, and leaders",
        cta: "Request a Quote",
      },
    },
  },
  // About page
  about: {
    title: "About Us",
    subtitle: "Strategic communication for a truly democratic society",
    description1:
      "At Teia, every film, video, or post starts with a simple question: how can communication change people's lives? That's what drives our team. Together, we don't just produce content—we create meaning, open space for new voices, and help shift the conversation.",
    mission: {
      title: "Mission",
      text: "Build a democratic culture rooted in human rights capable of resisting and advancing amid cultural warfare and anti-democratic threats.",
    },
    team: {
      title: "Our Team",
      cofounders: "Associated Co-founders",
    },
    manifesto: {
      title: "Our Manifesto",
      text1:
        "Teia de Criadores was born in November 2023 as a direct response to the challenges threatening democracy and human rights. Amid polarization, misinformation, and the erosion of public debate, we chose a path: use communication to provoke movement.",
      text2:
        "From the start, we had a clear ambition: change how messages circulate, who speaks, who listens, and who gains voice. The opening of our headquarters in downtown Belo Horizonte, equipped with studios and state-of-the-art infrastructure, marked more than a beginning. It was proof that quality communication is possible—built collectively, with courage—without surrendering to hate or silence.",
      text3:
        "In a short time, we created powerful campaigns, strengthened networks, and established Teia as a space for digital activism, social justice, and communication innovation.",
      text4:
        "We're not just an organization. We're a team that believes communication, when collective and strategic, can open paths to change.",
      text5:
        "What we've built so far is just the beginning. We continue weaving, together, a new narrative for greater justice and democracy.",
    },
  },
  whatWeDo: {
    title: "What We Do",
    subtitle: "Strategic campaigns, collaborative methodology, and purpose-driven content",
    campaigns: {
      title: "Main campaigns",
      description:
        "We transform ideas into videos, graphics, reports, podcasts, and digital narratives that mobilize people. We work to strengthen organizations and support those who want to communicate with purpose.",
      totalImpact: "Total Impact",
      impact: {
        views: "Views on networks",
        creators: "Active creators",
        partners: "Partner organizations",
      },
    },
    content: {
      title: "Our content",
      description: "From social feed to studio, we produce with quality and purpose. Our formats include:",
      types: [
        {
          title: "Videos for social media",
          description: "Reels, interviews, thematic series",
        },
        {
          title: "Campaign and civic event coverage",
          description: "Documentation and amplification of important events",
        },
        {
          title: "Podcasts and video columns",
          description: "Long-form content for deeper understanding",
        },
        {
          title: "Graphics, texts, and digital campaigns",
          description: "Visual and textual material for various platforms",
        },
      ],
    },
    cta: {
      title: "WANT AN IMPACT CAMPAIGN?",
      description:
        "We develop strategic campaigns that connect important causes with the right people. Let's build together a communication that transforms.",
      button: "Request a Quote",
    },
  },
  creators: {
    title: "Creators",
    subtitle:
      "Meet our network of creators and popular communicators using social networks to strengthen democracy",
    profiles: {
      babiAmaral:
        'Actress, audiovisual producer, and content creator, Babi transforms daily life into art. She speaks candidly about the joys and challenges of motherhood and balancing all aspects of adult life.',
      biaNogueira:
        "Actress and singer, Bia combines art, female empowerment, and mental health in everything she creates. Her voice bridges creative power and social transformation.",
      claraTannure:
        "Singer, communicator, and creator of the podcast Tudo às Claras, Clara also works with Não Era Amor, supporting women victims of violence. A voice that brings together art and social commitment.",
      lorraineBatista:
        "Founder of Conecta Cabana, Lorrayne brings to life a community journal that values voices and experiences, strengthening grassroots communication.",
      darioMoura:
        "Communication advisor, philosopher, and electronics technologist, Dário produces content about cannabis legalization and human rights, always with a critical and activist perspective.",
      fernandaTeixeira:
        "Fashion, identity, resistance, and political consciousness meet in Chernopreta's content. Fernanda creates to wear ideas and provoke reflection.",
      fillipeGibran:
        "Pastor, lawyer, and theologian, Filipe brings together faith and justice to deconstruct religious fundamentalism and propose a more plural and equal society.",
      gabiDomingues:
        "Drag queen, makeup artist, singer, actress, and host, Bella La Pierre is pure performance and enthusiasm. A striking figure in BH's carnival, she's a voice and body celebrating cultural diversity.",
      hazeite:
        "Host of the podcast Zero Brava, Hazeite interviews rap and hip-hop artists, giving visibility to culture that pulses through streets and underground scenes.",
      isadoraNascimento:
        "Lawyer, inclusion and diversity consultant, and coordinator at the National PcD Secretariat. Isadora transforms her work into content and mobilization for a more accessible society.",
      jamineMiranda:
        "With courage and authenticity, Jamine portrays the experiences of Black and lesbian women breaking femininity patterns, creating representation and power.",
      joaoSaraiva:
        "A translator of complexities, João Saraiva transforms social impact topics, communication, and leadership into accessible, direct, and purposeful content.",
      lauraSabino:
        "Multi-platform creator on YouTube, Instagram, TikTok, and Twitch, Laura translates complex topics about history, politics, and current events in an engaging way.",
      liviaTeodoro:
        "Historian, podcaster, and 30+ influencer, Lívia uses sharp humor to make social debates lighter, more direct, and closer to everyday reality.",
      lucasOliver:
        "Geographer, teacher, and climate scientist, Lucas brings scientific communication about geography and climate change to diverse audiences, bridging academic rigor with popular language.",
      thiagoAlmeida:
        "MC, researcher, cultural producer, and content creator, O Monge makes Hip Hop Culture his language of expression, study, and social transformation.",
      carlosEFersi:
        "Carlos and Fersi run PodMadres, where humor, culture, and LGBT+ activism walk together. A space of affection, representation, and great conversations.",
      thiagoDaniel:
        "Creator of the podcast Podônibus, which blends humor and catharsis in stories of romantic disappointments to hear while waiting for the bus. Also an activist for Tarifa Zero in BH, joining communication and popular mobilization.",
      rafaVentura:
        "LGBT+ artist moving between TV, stages, internet, streets, and carnival. Rafa is political body and poetic voice, creating between mockery and affection.",
      raonySalvador:
        "Journalist, teacher, and host of Arreda Crise, Raony interviews experts on democracy, environment, and contemporary culture, connecting journalism and citizenship.",
      robertoAndres:
        "Urban planner, UFMG professor, and strategist of Nossas, Roberto speaks about sustainable cities and the right to the city. Founder of the BH do Futuro project, rethinking the city from new urban possibilities.",
      tomtom:
        "With a sharp eye for urban culture, Tomtom speaks about hangouts, fashion, and city life. Creator of the podcast Clube do Rolê, opening conversations about the right to the city through cultural movements.",
      zotha:
        "Independent journalist, co-founder and director of Teia. He works on audiovisual creation to bring political information in a popular way, connecting journalism and citizenship.",
    },
    cta: {
      title: "Want to be part of our network?",
      description:
        "If you create content committed to social transformation, come build with us a more democratic communication.",
      button: "Join our ecosystem",
    },
  },
  reports: {
    title: "Reports",
    subtitle:
      "We believe in transparency as part of how we work. Here you'll find Teia's annual reports—documents detailing what we've accomplished, the paths we've taken, and the impacts we've helped create.",
    download: "Download PDF",
    list: {
      impact2024: {
        title: "2024 Impact Report",
        description:
          "Complete overview of activities, campaigns, and results achieved in our first year of operation.",
        date: "December 2024",
        pages: "24 pages",
      },
      mapping: {
        title: "Creator Mapping - Analysis",
        description: "Survey of leading content creators and popular communicators.",
        date: "November 2024",
        pages: "16 pages",
      },
      elections: {
        title: "2024 Elections Analysis",
        description: "Study on digital behavior and network engagement during municipal elections.",
        date: "October 2024",
        pages: "32 pages",
      },
      guide: {
        title: "Democratic Communication Guide",
        description: "Practical manual with strategies and best practices for political communication on social media.",
        date: "September 2024",
        pages: "48 pages",
      },
      disinformation: {
        title: "Research: Disinformation Analysis",
        description:
          "Investigation into the main channels and strategies of disinformation.",
        date: "August 2024",
        pages: "28 pages",
      },
      methodology: {
        title: "Teia Methodology",
        description: "Technical document detailing our collaborative work methodology and co-creation.",
        date: "July 2024",
        pages: "20 pages",
      },
    },
    cta: {
      title: "Receive our reports first",
      description:
        "Subscribe to our newsletter and be first to receive our studies and analysis on democratic communication.",
      button: "Subscribe to newsletter",
    },
  },
  campaigns: {
    title: "Campaigns",
    subtitle: "Strategic campaigns, collaborative methodology, and purpose-driven content",
    ourCampaigns: "Our Campaigns",
    totalImpact: "Total Impact",
    mainCampaigns: "Main Campaigns",
    averageEngagement: "Average Engagement",
    totalShares: "Total Shares",
    completed: "Completed",
    politicalMobilization: "Political Mobilization",
    cultureAndPolitics: "Culture and Politics",
    politicalEducation: "Political Education",
    publicPolicies: "Public Policies",
    viewFullCampaign: "View Full Campaign",
    wantImpactCampaign: "Want an impact campaign?",
    impactDescription:
      "We develop strategic campaigns that connect important causes with the right people. Let's build together a communication that transforms.",
    requestQuote: "Request a Quote",
  },
  newsletter: {
    form: {
      description: "Get updates about democratic communication and social transformation",
      fields: {
        emailPlaceholder: "your@email.com",
      },
    },
  },
  footer: {
    description: "Strategic communication for a truly democratic society.",
    navigation: "Navigation",
    participate: "Participate",
    contact: "Contact",
    links: {
      ecosystem: "Join the ecosystem",
      budget: "Request a quote",
      newsletter: "Newsletter",
    },
    copyright: "All rights reserved.",
  },
  common: {
    million: "million",
  },
  budget: {
    title: "Get a Quote",
    subtitle: "Purpose-driven communication services",
    services: {
      title: "WHAT WE OFFER",
      description:
        "Teia de Criadores offers purpose-driven communication services. We serve individuals, organizations, collectives, campaigns, and leaders seeking strategic, high-quality content with impact, aligned with human rights and social justice.",
      commitment:
        "Our team combines technique, listening, and engagement to deliver materials that strengthen narratives, mobilize audiences, and connect causes with the right people.",
      list: {
        video: "Video production",
        podcast: "Podcast/videocast recording",
        socialMedia: "Social media management",
        press: "Press relations",
        design: "Graphic design and visual identity",
        strategy: "Communication strategy",
      },
    },
    form: {
      title: "Request your quote",
      description: "Fill out the form below with details about your project",
      fields: {
        name: "Full name",
        email: "Email",
        organization: "Organization/Company",
        phone: "Phone",
        services: "Services of interest",
        description: "Project description",
        descriptionPlaceholder: "Describe your project, goals, target audience, and any relevant information",
        timeline: "Desired timeline",
        timelinePlaceholder: "Ex: 30 days, urgent, flexible",
        budget: "Estimated budget",
        budgetPlaceholder: "Ex: $5,000, up to $10,000, to be defined",
      },
      attachments: {
        title: "Attachments (briefs, references)",
        description: "Drag files here or click to select",
        formats: "PDF, DOC, JPG, PNG up to 10MB",
      },
      submit: "Request quote",
      successMessage: "Request sent! We'll get in touch soon.",
    },
    commitment: {
      title: "Our commitment",
      description:
        "We work only with projects aligned with human rights and social justice. Let's build together a communication that transforms.",
    },
  },
  ecosystem: {
    title: "Join Our Ecosystem",
    subtitle: "Join our network of creators and communicators committed to social transformation",
    description:
      "At Teia de Criadores, we believe communication is also political action. That's why we've built a diverse ecosystem of creators, popular communicators, civil society organizations, and social leaders who use social networks to strengthen democracy.",
    howItWorks: {
      title: "How our network works",
      description1:
        "If you create content, communicate with your territory, have a powerful project, or want to put your voice toward social transformation, come with us!",
      description2:
        "Teia's network is made up of creators and organizations with access to our studios, technical support (editing, design, production, consulting), digital communication training, and participation in collective campaigns. All in a collaborative model where we exchange knowledge, experiences, and strengthen each other.",
      description3:
        "We're always looking for new voices committed to human rights, social justice, and building plural, responsible, and powerful communication.",
    },
    services: {
      title: "WHAT WE OFFER",
      description: "Professional communication services to strengthen your voice and amplify your social impact",
      video: {
        title: "Video production",
        description: "Scriptwriting, filming, and professional editing",
      },
      podcast: {
        title: "Podcast/videocast recording",
        description: "Equipped studio and complete post-production",
      },
      socialMedia: {
        title: "Social media management",
        description: "Strategy, content creation, and management",
      },
      press: {
        title: "Press relations",
        description: "Press release production and media relationships",
      },
      design: {
        title: "Graphic design and visual identity",
        description: "Creation of visual materials and branding",
      },
      strategy: {
        title: "Communication strategy",
        description: "Strategic planning and content creation",
      },
      studio: {
        title: "Studio Access",
        description:
          "Use our equipped studios in downtown BH for professional content recording, trainings, and network meetings",
      },
    },
    form: {
      title: "Apply to our network",
      description: "Fill out the form below and tell us more about you and your work",
      fields: {
        name: "Full name",
        email: "Email",
        links: "Links (social media, portfolio, etc.)",
        linksPlaceholder:
          "Paste here the links to your social media profiles, portfolio, or other relevant materials",
        area: "Area of activity",
        areaPlaceholder: "Select your main area",
        motivation: "Why do you want to join Teia?",
        motivationPlaceholder:
          "Tell us about your motivation, your projects, and how you'd like to contribute to our ecosystem",
      },
      areas: {
        humanRights: "Human Rights",
        culture: "Culture",
        education: "Education",
        environment: "Environment",
        politics: "Politics",
        technology: "Technology",
        youth: "Youth",
        feminism: "Feminism",
        diversity: "Diversity",
        other: "Other",
      },
      submit: "Submit application",
      successMessage: "Form submitted! We'll be in touch soon.",
    },
    cta: {
      title: "We're always looking for new voices",
      description:
        "Committed to human rights, social justice, and building plural, responsible, and powerful communication.",
    },
  },
}

export function getTranslation(lang: Language, key: string): string {
  const keys = key.split(".")
  let value: any = translations

  for (const k of keys) {
    if (value && typeof value === "object" && k in value) {
      value = value[k]
    } else {
      return key
    }
  }

  return typeof value === "string" ? value : key
}
