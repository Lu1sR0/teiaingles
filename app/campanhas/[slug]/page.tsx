"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Eye, Users, Target, Play, Share2, BarChart3, ArrowRight } from "lucide-react"
import Link from "next/link"
import { ScrollAnimation } from "@/components/scroll-animations"
import { FloatingParticles } from "@/components/floating-particles"
import { useParams } from "next/navigation"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"

export default function CampanhaDetalhePage() {
  const params = useParams()
  const slug = params.slug as string
  const { t } = useLanguage()

  // Dados das campanhas (em um projeto real, viria de uma API)
  const campaignData: Record<string, any> = {
    "bh-nas-urnas": {
      title: "BH nas Urnas",
      subtitle: "Mobilização Jovem para o Conselho Tutelar",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bh%20nas%20urnas-yeQSxoI0Xp9vrT0avz7r1nM1NtfSkQ.png",
      description: "Uma campanha estratégica para engajar jovens nas eleições do Conselho Tutelar de Belo Horizonte",
      fullDescription:
        "A campanha 'BH nas Urnas' foi desenvolvida para mobilizar jovens de 16 a 29 anos para participarem das eleições do Conselho Tutelar de Belo Horizonte. Utilizando linguagem acessível e formatos digitais atrativos, conseguimos alcançar mais de 2 milhões de visualizações e engajar milhares de jovens no processo democrático.",
      color: "bg-teia-purple",
      textColor: "text-teia-purple",
      category: "Mobilização Política",
      date: "Outubro 2024",
      duration: "30 dias",
      status: "Concluída",
      platforms: ["Instagram", "TikTok", "YouTube", "WhatsApp"],
      results: {
        views: "2.1M",
        engagement: "15.3%",
        reach: "850K",
        shares: "12.5K",
        clicks: "45.2K",
        conversions: "8.7K",
      },
      objectives: [
        "Aumentar a participação jovem nas eleições do Conselho Tutelar",
        "Educar sobre a importância do Conselho Tutelar",
        "Facilitar o acesso à informação sobre candidatos",
        "Promover a cultura democrática entre jovens",
      ],
      strategy: [
        "Criação de conteúdo educativo em formatos jovens",
        "Parcerias com influenciadores locais",
        "Uso de memes e linguagem informal",
        "Campanhas de stories interativos",
        "Lives com especialistas em direitos da criança",
      ],
      content: [
        "15 posts no feed do Instagram",
        "25 stories interativos",
        "8 vídeos no TikTok",
        "3 lives no Instagram",
        "1 vídeo longo no YouTube",
        "Material gráfico para WhatsApp",
      ],
      team: [
        "2 Social Media Managers",
        "1 Designer Gráfico",
        "2 Videomakers",
        "1 Estrategista de Conteúdo",
        "3 Criadores Parceiros",
      ],
    },
    "carnaval-do-povo": {
      title: "O Melhor Carnaval do Brasil",
      subtitle: "Defendendo a Festa Popular",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/o%20melhor%20carnaval%20do%20brasil.png-uEi5xdjXzOQMAb0ptsR4L8Xw4vN4sT.jpeg",
      description: "Campanha que defendeu o Carnaval de rua de BH contra tentativas de apropriação política",
      fullDescription:
        "Durante o período pré-carnavalesco de 2024, desenvolvemos uma campanha robusta para defender a essência popular e democrática do Carnaval de rua de Belo Horizonte. A campanha combateu tentativas de apropriação política da festa, celebrando sua diversidade e importância cultural através de conteúdo criativo e mobilização social nas redes.",
      color: "bg-teia-green",
      textColor: "text-teia-green",
      category: "Cultura e Política",
      date: "Fevereiro 2024",
      duration: "45 dias",
      status: "Concluída",
      platforms: ["Instagram", "TikTok", "Twitter", "YouTube", "Facebook"],
      results: {
        views: "3.2M",
        engagement: "18.7%",
        reach: "1.2M",
        shares: "25.8K",
        clicks: "67.3K",
        conversions: "15.2K",
      },
      objectives: [
        "Defender o caráter popular do Carnaval de BH",
        "Combater a apropriação política da festa",
        "Celebrar a diversidade cultural do evento",
        "Mobilizar a sociedade civil em defesa da cultura",
      ],
      strategy: [
        "Narrativa de resistência cultural",
        "Colaboração com blocos tradicionais",
        "Conteúdo histórico sobre o Carnaval de BH",
        "Mobilização através de hashtags",
        "Parcerias com artistas locais",
      ],
      content: [
        "20 posts no feed do Instagram",
        "35 stories temáticos",
        "12 vídeos no TikTok",
        "5 threads no Twitter",
        "2 vídeos documentais no YouTube",
        "Campanha de hashtag #CarnavalDoPovo",
      ],
      team: [
        "3 Social Media Managers",
        "2 Designers Gráficos",
        "2 Videomakers",
        "1 Jornalista",
        "1 Historiador Cultural",
        "5 Criadores Parceiros",
      ],
    },
    "arrume-seu-titulo": {
      title: "Arrume seu Título",
      subtitle: "Juventude no Poder do Voto",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/arrume%20seu%20titulo-bA26QEgp0FH4hLzY32B8Z8FX8kIfRI.png",
      description: "Iniciativa focada em conscientizar jovens sobre a importância do título eleitoral",
      fullDescription:
        "A campanha 'Arrume seu Título' foi uma iniciativa educativa desenvolvida durante o período de regularização eleitoral de 2024. Focamos em jovens de 16 a 25 anos, utilizando linguagem acessível e formatos digitais para desmistificar o processo de obtenção e regularização do título eleitoral, além de conscientizar sobre a importância da participação democrática.",
      color: "bg-teia-purple",
      textColor: "text-teia-purple",
      category: "Educação Política",
      date: "Maio 2024",
      duration: "60 dias",
      status: "Concluída",
      platforms: ["Instagram", "TikTok", "WhatsApp", "YouTube"],
      results: {
        views: "1.8M",
        engagement: "22.1%",
        reach: "720K",
        shares: "18.3K",
        clicks: "52.1K",
        conversions: "12.4K",
      },
      objectives: [
        "Facilitar o processo de regularização do título eleitoral",
        "Educar jovens sobre direitos e deveres eleitorais",
        "Aumentar o número de jovens eleitores",
        "Promover a cultura de participação democrática",
      ],
      strategy: [
        "Tutoriais passo-a-passo em vídeo",
        "Parcerias com cartórios eleitorais",
        "Conteúdo educativo sobre democracia",
        "Campanhas de conscientização",
        "Mutirões digitais de esclarecimento",
      ],
      content: [
        "18 posts educativos no Instagram",
        "30 stories com tutoriais",
        "10 vídeos explicativos no TikTok",
        "4 lives educativas",
        "2 vídeos completos no YouTube",
        "Guia digital para WhatsApp",
      ],
      team: [
        "2 Social Media Managers",
        "1 Designer Gráfico",
        "2 Videomakers",
        "1 Advogado Eleitoral",
        "1 Educador Popular",
        "4 Criadores Parceiros",
      ],
    },
    "bh-do-futuro": {
      title: "BH do Futuro",
      subtitle: "Agenda Ousada para a Cidade",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bh%20do%20futuro-muoFgAsUQYI3vRuLTk5ud5ZcRbK4Ls.png",
      description: "Campanha propositiva apresentando soluções inovadoras para os desafios urbanos de BH",
      fullDescription:
        "A campanha 'BH do Futuro' foi desenvolvida em parceria com organizações da sociedade civil para apresentar uma agenda propositiva e inovadora para os principais desafios urbanos de Belo Horizonte. Durante 90 dias, produzimos conteúdo técnico e acessível sobre mobilidade urbana, habitação, meio ambiente, educação e participação social, alcançando mais de 4 milhões de visualizações.",
      color: "bg-teia-green",
      textColor: "text-teia-green",
      category: "Políticas Públicas",
      date: "Setembro 2024",
      duration: "90 dias",
      status: "Concluída",
      platforms: ["Instagram", "YouTube", "LinkedIn", "Twitter", "Facebook"],
      results: {
        views: "4.1M",
        engagement: "16.9%",
        reach: "1.5M",
        shares: "31.2K",
        clicks: "89.7K",
        conversions: "22.3K",
      },
      objectives: [
        "Apresentar soluções inovadoras para BH",
        "Engajar cidadãos no debate sobre a cidade",
        "Influenciar políticas públicas municipais",
        "Fortalecer a participação social",
      ],
      strategy: [
        "Conteúdo técnico acessível",
        "Parcerias com especialistas",
        "Dados e pesquisas locais",
        "Propostas concretas e viáveis",
        "Mobilização de organizações parceiras",
      ],
      content: [
        "25 posts técnicos no Instagram",
        "40 stories informativos",
        "15 vídeos no YouTube",
        "8 artigos no LinkedIn",
        "10 threads no Twitter",
        "Relatório digital completo",
      ],
      team: [
        "3 Social Media Managers",
        "2 Designers Gráficos",
        "3 Videomakers",
        "2 Urbanistas",
        "1 Cientista Político",
        "6 Organizações Parceiras",
      ],
    },
    "busao-0800": {
      title: "Busão 0800",
      subtitle: "Mobilidade Urbana para Todos",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bus%C3%A3o%200800-8LjLp0U0ztIVZmcf4NQjiUMbBb1Xby.png",
      description: "Campanha sobre transporte público e mobilidade urbana em BH",
      fullDescription:
        "A campanha 'Busão 0800' abordou os desafios do transporte público em Belo Horizonte, dando voz aos usuários e propondo soluções práticas para melhorar a mobilidade urbana. Durante 45 dias, coletamos relatos, produziu conteúdo educativo e pressionou por melhorias no sistema de transporte coletivo da cidade.",
      color: "bg-teia-green",
      textColor: "text-teia-green",
      category: "Políticas Públicas",
      date: "Março 2024",
      duration: "45 dias",
      status: "Concluída",
      platforms: ["Instagram", "Twitter", "YouTube", "WhatsApp"],
      results: {
        views: "2.5M",
        engagement: "17.5%",
        reach: "950K",
        shares: "19.2K",
        clicks: "58.4K",
        conversions: "11.8K",
      },
      objectives: [
        "Dar visibilidade aos problemas do transporte público",
        "Coletar e sistematizar demandas dos usuários",
        "Pressionar por melhorias no sistema",
        "Propor soluções viáveis de mobilidade urbana",
      ],
      strategy: [
        "Coleta de depoimentos de usuários",
        "Mapeamento de problemas recorrentes",
        "Produção de relatórios técnicos",
        "Mobilização digital e presencial",
        "Diálogo com poder público e empresas",
      ],
      content: [
        "20 posts com depoimentos no Instagram",
        "30 stories com problemas relatados",
        "10 vídeos documentando situações",
        "3 lives com especialistas em mobilidade",
        "2 relatórios técnicos publicados",
        "Material informativo para WhatsApp",
      ],
      team: [
        "2 Social Media Managers",
        "1 Designer Gráfico",
        "2 Videomakers",
        "1 Urbanista",
        "1 Jornalista",
        "4 Ativistas de Mobilidade",
      ],
    },
    "seu-dinheiro-de-volta": {
      title: "Seu Dinheiro de Volta",
      subtitle: "Transparência no Uso dos Recursos Públicos",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/seu%20dinheiro%20de%20volta.png-7OEnRCZkViSiRmAodg3LKglwk31RmQ.jpeg",
      description: "Campanha sobre orçamento público e prestação de contas",
      fullDescription:
        "A campanha 'Seu Dinheiro de Volta' educou a população sobre como funciona o orçamento público municipal, destacando a importância da transparência e do controle social sobre os recursos da cidade. Através de linguagem acessível e exemplos práticos, desmistificamos o orçamento e incentivamos a participação cidadã.",
      color: "bg-teia-purple",
      textColor: "text-teia-purple",
      category: "Educação Política",
      date: "Julho 2024",
      duration: "40 dias",
      status: "Concluída",
      platforms: ["Instagram", "TikTok", "YouTube", "LinkedIn"],
      results: {
        views: "1.8M",
        engagement: "20.3%",
        reach: "680K",
        shares: "15.7K",
        clicks: "43.5K",
        conversions: "9.6K",
      },
      objectives: [
        "Educar sobre orçamento público municipal",
        "Promover transparência na gestão dos recursos",
        "Incentivar controle social e participação",
        "Desmistificar conceitos técnicos",
      ],
      strategy: [
        "Conteúdo educativo com linguagem acessível",
        "Infográficos e visualizações de dados",
        "Exemplos práticos do cotidiano",
        "Tutoriais sobre fiscalização",
        "Parcerias com especialistas em gestão pública",
      ],
      content: [
        "16 posts educativos no Instagram",
        "28 stories explicativos",
        "12 vídeos curtos no TikTok",
        "4 vídeos explicativos no YouTube",
        "3 lives com especialistas",
        "Guia digital sobre orçamento público",
      ],
      team: [
        "2 Social Media Managers",
        "2 Designers Gráficos",
        "1 Videomaker",
        "1 Economista",
        "1 Contador Público",
        "3 Educadores Populares",
      ],
    },
  }

  const campaign = campaignData[slug]

  const metricsLabels = {
    views: t("campaigns.views") || "Visualizações",
    engagement: t("campaigns.engagement") || "Engajamento",
    reach: t("campaigns.reach") || "Alcance",
    shares: t("campaigns.shares") || "Compartilhamentos",
    clicks: t("campaigns.clicks") || "Cliques",
    conversions: t("campaigns.conversions") || "Conversões",
  }

  if (!campaign) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-nethead text-4xl font-black mb-4">{t("campaigns.campaignNotFound")}</h1>
          <Link href="/campanhas">
            <Button>{t("campaigns.backToCampaigns")}</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section da Campanha */}
      <section className={`relative ${campaign.color} text-white py-32 overflow-hidden`}>
        <FloatingParticles count={20} />

        {/* Adicionando imagem de fundo da campanha no hero */}
        <div className="absolute inset-0 z-0">
          <Image
            src={campaign.image || "/placeholder.svg"}
            alt={campaign.title}
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className={`absolute inset-0 ${campaign.color} opacity-80`}></div>
        </div>

        {/* Botão Voltar */}
        <div className="absolute top-8 left-8 z-20">
          <Link href="/campanhas">
            <Button variant="ghost" className="text-white hover:bg-white/20 font-akzidenz font-black">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t("common.back")}
            </Button>
          </Link>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <ScrollAnimation animation="slide-left" delay={200}>
              <div className="flex items-center gap-6 mb-8">
                <Badge variant="secondary" className="bg-white/20 text-white font-akzidenz font-black">
                  {campaign.category}
                </Badge>
                <Badge variant="outline" className="border-white text-white font-akzidenz font-black">
                  {campaign.status}
                </Badge>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="reveal" delay={400}>
              <h1 className="font-nethead text-6xl md:text-8xl font-black mb-6 leading-none">{campaign.title}</h1>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-right" delay={600}>
              <p className="font-akzidenz text-2xl font-black mb-8 opacity-90">{campaign.subtitle}</p>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-left" delay={800}>
              <p className="font-akzidenz text-lg leading-relaxed opacity-80 font-black max-w-3xl">
                {campaign.fullDescription}
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Métricas Principais */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="scale" delay={200}>
            <h2 className="font-nethead text-4xl font-black text-center mb-16 text-gray-900">
              {t("campaigns.campaignResults")}
            </h2>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
            {Object.entries(campaign.results).map(([key, value], index) => (
              <ScrollAnimation key={key} animation="bounce" delay={index * 100}>
                <Card className="text-center p-6 hover-lift border-0 shadow-lg">
                  <CardContent className="p-0">
                    <div
                      className={`w-16 h-16 ${campaign.color} rounded-full mx-auto mb-4 flex items-center justify-center`}
                    >
                      <BarChart3 className="h-8 w-8 text-white" />
                    </div>
                    <h3 className={`font-nethead text-3xl font-black mb-2 ${campaign.textColor}`}>{value}</h3>
                    <p className="font-akzidenz text-sm font-black text-gray-600 capitalize">
                      {metricsLabels[key as keyof typeof metricsLabels]}
                    </p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Detalhes da Campanha */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Objetivos */}
            <ScrollAnimation animation="slide-left" delay={200}>
              <Card className="p-8 border-0 shadow-xl hover-lift">
                <CardHeader className="p-0 mb-8">
                  <div className={`w-16 h-16 ${campaign.color} rounded-full mb-6 flex items-center justify-center`}>
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="font-nethead text-3xl font-black text-gray-900">
                    {t("campaigns.objectives")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="space-y-4">
                    {campaign.objectives.map((objective: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className={`w-2 h-2 ${campaign.color} rounded-full mt-3 flex-shrink-0`}></div>
                        <p className="font-akzidenz text-lg font-black text-gray-700 leading-relaxed">{objective}</p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollAnimation>

            {/* Estratégia */}
            <ScrollAnimation animation="slide-right" delay={400}>
              <Card className="p-8 border-0 shadow-xl hover-lift">
                <CardHeader className="p-0 mb-8">
                  <div className={`w-16 h-16 ${campaign.color} rounded-full mb-6 flex items-center justify-center`}>
                    <BarChart3 className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="font-nethead text-3xl font-black text-gray-900">
                    {t("campaigns.strategy")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="space-y-4">
                    {campaign.strategy.map((item: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className={`w-2 h-2 ${campaign.color} rounded-full mt-3 flex-shrink-0`}></div>
                        <p className="font-akzidenz text-lg font-black text-gray-700 leading-relaxed">{item}</p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>

          {/* Conteúdo Produzido */}
          <div className="mt-16">
            <ScrollAnimation animation="scale" delay={600}>
              <Card className="p-8 border-0 shadow-xl">
                <CardHeader className="p-0 mb-8">
                  <div className={`w-16 h-16 ${campaign.color} rounded-full mb-6 flex items-center justify-center`}>
                    <Play className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="font-nethead text-3xl font-black text-gray-900">
                    {t("campaigns.contentProduced")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {campaign.content.map((item: string, index: number) => (
                      <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover-lift">
                        <div className={`w-3 h-3 ${campaign.color} rounded-full flex-shrink-0`}></div>
                        <p className="font-akzidenz text-base font-black text-gray-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>

          {/* Equipe */}
          <div className="mt-16">
            <ScrollAnimation animation="scale" delay={800}>
              <Card className="p-8 border-0 shadow-xl">
                <CardHeader className="p-0 mb-8">
                  <div className={`w-16 h-16 ${campaign.color} rounded-full mb-6 flex items-center justify-center`}>
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="font-nethead text-3xl font-black text-gray-900">
                    {t("campaigns.teamInvolved")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {campaign.team.map((member: string, index: number) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <div className={`w-2 h-2 ${campaign.color} rounded-full flex-shrink-0`}></div>
                        <p className="font-akzidenz text-base font-black text-gray-700">{member}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Informações Técnicas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <ScrollAnimation animation="bounce" delay={200}>
              <div className="hover-lift">
                <Calendar className={`h-12 w-12 mx-auto mb-4 ${campaign.textColor}`} />
                <h3 className="font-nethead text-xl font-black mb-2 text-gray-900">{t("campaigns.date")}</h3>
                <p className="font-akzidenz text-base font-black text-gray-600">{campaign.date}</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="bounce" delay={400}>
              <div className="hover-lift">
                <Target className={`h-12 w-12 mx-auto mb-4 ${campaign.textColor}`} />
                <h3 className="font-nethead text-xl font-black mb-2 text-gray-900">{t("campaigns.duration")}</h3>
                <p className="font-akzidenz text-base font-black text-gray-600">{campaign.duration}</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="bounce" delay={600}>
              <div className="hover-lift">
                <Share2 className={`h-12 w-12 mx-auto mb-4 ${campaign.textColor}`} />
                <h3 className="font-nethead text-xl font-black mb-2 text-gray-900">{t("campaigns.platforms")}</h3>
                <p className="font-akzidenz text-base font-black text-gray-600">
                  {campaign.platforms.length} {t("campaigns.networks")}
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="bounce" delay={800}>
              <div className="hover-lift">
                <Eye className={`h-12 w-12 mx-auto mb-4 ${campaign.textColor}`} />
                <h3 className="font-nethead text-xl font-black mb-2 text-gray-900">{t("campaigns.status")}</h3>
                <p className="font-akzidenz text-base font-black text-gray-600">{campaign.status}</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <ScrollAnimation animation="scale" delay={200}>
              <div className={`w-24 h-24 ${campaign.color} rounded-full mx-auto mb-8 flex items-center justify-center`}>
                <Target className="h-12 w-12 text-white" />
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="reveal" delay={400}>
              <h2 className="font-nethead text-4xl font-black mb-8 text-gray-900">{t("campaigns.likedCampaign")}</h2>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-left" delay={600}>
              <p className="font-akzidenz text-xl text-gray-600 mb-12 font-black leading-relaxed">
                {t("campaigns.likedDescription")}
              </p>
            </ScrollAnimation>

            <ScrollAnimation animation="bounce" delay={800}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/orcamento">
                  <Button
                    size="lg"
                    className={`${campaign.color} hover:opacity-90 text-white px-12 py-4 text-xl font-akzidenz font-black hover-lift group`}
                  >
                    <Target className="mr-3 h-6 w-6" />
                    {t("campaigns.requestQuote")}
                    <ArrowRight className="ml-3 h-6 w-6 transition-transform duration-300 group-hover:translate-x-2" />
                  </Button>
                </Link>

                <Link href="/campanhas">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-gray-300 text-gray-700 hover:border-teia-purple hover:text-teia-purple px-12 py-4 text-xl font-akzidenz font-black hover-lift bg-transparent"
                  >
                    {t("campaigns.viewOtherCampaigns")}
                  </Button>
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
  )
}
