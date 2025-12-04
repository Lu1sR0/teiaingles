"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Video, Mic, FileText, Palette, Target, ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animations"
import Image from "next/image"

export default function OQueFazemosPage() {
  const { t } = useLanguage()

  const campaigns = [
    {
      title: "BH at the Polls",
      subtitle: "Youth Mobilization for the Guardianship Council",
      description:
        "Mobilization campaign to strengthen the Guardianship Council election in Belo Horizonte and broaden community participation in choosing who protects children and adolescents' rights.",
      impact: "2M+ " + (t("whatWeDo.campaigns.impact.views") || "views"),
      color: "bg-teia-purple",
      image: "/campaigns/bh-nas-urnas.png",
    },
    {
      title: "Brazil's Greatest Carnival",
      subtitle: "Defending Popular Celebration",
      description:
        "Narrative created to value Belo Horizonte's Carnival as a cultural, economic, and civic power.",
      impact: "3M+ " + (t("whatWeDo.campaigns.impact.views") || "views"),
      color: "bg-teia-green",
      image: "/campaigns/o-melhor-carnaval.jpeg",
    },
    {
      title: "Register to Vote",
      subtitle: "Youth Power of the Vote",
      description:
        "Initiative to encourage young people and citizens to regularize voter registration and exercise their right to vote.",
      impact: "1.5M+ " + (t("whatWeDo.campaigns.impact.views") || "views"),
      color: "bg-teia-purple",
      image: "/campaigns/arrume-seu-titulo.png",
    },
    {
      title: "BH of the Future",
      subtitle: "Bold Agenda for the City",
      description:
        "Campaign conducted during municipal elections, proposing goals for a more just and sustainable city, guided by the right to the city and well-being.",
      impact: "4M+ " + (t("whatWeDo.campaigns.impact.views") || "views"),
      color: "bg-teia-green",
      image: "/campaigns/bh-do-futuro.png",
    },
    {
      title: "Bus 0800",
      subtitle: "Free Transit in BH",
      description:
        "Mobilization for free public transportation in Belo Horizonte, defending mobility as a right and social justice.",
      impact: "2.5M+ " + (t("whatWeDo.campaigns.impact.views") || "views"),
      color: "bg-teia-purple",
      image: "/campaigns/busao-0800.png",
    },
    {
      title: "Your Money Back",
      subtitle: "Tax Justice",
      description:
        "National campaign to denounce tax injustice and mobilize for income tax exemption for millions of Brazilians.",
      impact: "3.5M+ " + (t("whatWeDo.campaigns.impact.views") || "views"),
      color: "bg-teia-green",
      image: "/campaigns/seu-dinheiro-de-volta.jpeg",
    },
  ]

  const contentTypes = [
    {
      title: t("whatWeDo.content.types.0.title") || "Videos for social media",
      description: t("whatWeDo.content.types.0.description") || "Reels, interviews, thematic series",
      icon: Video,
    },
    {
      title: t("whatWeDo.content.types.1.title") || "Campaign and civic event coverage",
      description: t("whatWeDo.content.types.1.description") || "Documentation and amplification of important events",
      icon: FileText,
    },
    {
      title: t("whatWeDo.content.types.2.title") || "Podcasts and video columns",
      description: t("whatWeDo.content.types.2.description") || "Long-form content for deeper understanding",
      icon: Mic,
    },
    {
      title: t("whatWeDo.content.types.3.title") || "Graphics, texts, and digital campaigns",
      description: t("whatWeDo.content.types.3.description") || "Visual and textual material for various platforms",
      icon: Palette,
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-teia-green text-white py-20 sm:py-24 md:py-32 overflow-hidden">
        <div className="absolute right-20 top-1/2 transform -translate-y-1/2 hidden lg:block">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 bg-white opacity-30"
              style={{
                height: `${80 + i * 30}px`,
                right: `${i * 15}px`,
                top: `${-40 - i * 15}px`,
                transform: `rotate(${10 + i * 8}deg)`,
              }}
            ></div>
          ))}
        </div>

        <div className="container mx-auto px-8 sm:px-8 md:px-12 relative z-10">
          <div className="max-w-4xl">
            <ScrollAnimation animation="reveal">
              <h1 className="font-nethead text-2xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 leading-[1.1] tracking-tight break-words px-4">
                <span className="block">IMPACT</span>
                <span className="block">CAMPAIGNS</span>
              </h1>
            </ScrollAnimation>
            <ScrollAnimation animation="reveal" delay={200}>
              <p className="font-akzidenz text-base sm:text-xl md:text-2xl leading-relaxed opacity-90 font-black px-4">
                {t("whatWeDo.subtitle")}
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Nossas Campanhas */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="reveal">
            <h2 className="font-nethead text-4xl font-black mb-8 text-gray-900">{t("whatWeDo.campaigns.title")}</h2>
          </ScrollAnimation>

          <ScrollAnimation animation="reveal" delay={200}>
            <div className="max-w-4xl mb-16">
              <p className="font-akzidenz text-xl leading-relaxed mb-8 text-gray-700 font-black">
                {t("whatWeDo.campaigns.description")}
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {campaigns.map((campaign, index) => (
              <ScrollAnimation key={index} animation="scale" delay={index * 100}>
                <Card className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover-lift bg-white overflow-hidden">
                  <div className="relative h-72 w-full overflow-hidden">
                    <Image
                      src={campaign.image || "/placeholder.svg"}
                      alt={campaign.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <Badge
                      variant="secondary"
                      className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-gray-900 font-akzidenz font-black border-0 shadow-lg"
                    >
                      {campaign.impact}
                    </Badge>
                  </div>
                  <div className={`h-1.5 ${campaign.color} transition-all duration-300 group-hover:h-2`}></div>
                  <CardHeader className="px-8 pt-8 pb-4">
                    <div className="mb-3">
                      <span className="text-xs font-akzidenz font-black text-gray-500 uppercase tracking-wider">
                        {campaign.subtitle}
                      </span>
                    </div>
                    <CardTitle className="font-nethead text-3xl font-black text-gray-900 leading-tight group-hover:text-teia-green transition-colors duration-300">
                      {campaign.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-8 pb-8">
                    <CardDescription className="font-akzidenz text-base text-gray-700 font-black leading-relaxed">
                      {campaign.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>

          {/* Impacto Total */}
          <div className="text-center py-20 border-t border-gray-200">
            <ScrollAnimation animation="reveal">
              <p className="font-akzidenz text-lg text-gray-700 font-black mb-16">
                {t("whatWeDo.campaigns.totalImpact")} <strong>16 {t("common.million") || "milhões"}</strong>{" "}
                {t("whatWeDo.campaigns.impact.views")} <strong>20 {t("whatWeDo.campaigns.impact.creators")}</strong>{" "}
                <strong>5 {t("whatWeDo.campaigns.impact.partners")}</strong>.
              </p>
            </ScrollAnimation>

            <div className="grid md:grid-cols-3 gap-16">
              <ScrollAnimation animation="bounce" delay={200}>
                <div className="hover-lift">
                  <p className="font-nethead text-7xl font-black mb-4 text-teia-purple">54,9M</p>
                  <p className="font-akzidenz text-lg text-gray-600 font-black">
                    {t("whatWeDo.campaigns.impact.views")}
                  </p>
                  <p className="font-akzidenz text-sm text-gray-500 font-black mt-2">(janeiro 2024 a agosto 2025)</p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animation="bounce" delay={400}>
                <div className="hover-lift">
                  <p className="font-nethead text-7xl font-black mb-4 text-teia-green">20+</p>
                  <p className="font-akzidenz text-lg text-gray-600 font-black">
                    {t("whatWeDo.campaigns.impact.creators")}
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animation="bounce" delay={600}>
                <div className="hover-lift">
                  <p className="font-nethead text-7xl font-black mb-4 text-teia-purple">10+</p>
                  <p className="font-akzidenz text-lg text-gray-600 font-black">
                    {t("whatWeDo.campaigns.impact.partners")}
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Nosso conteúdo */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation animation="reveal">
              <h2 className="font-nethead text-4xl font-black mb-8 text-gray-900">{t("whatWeDo.content.title")}</h2>
            </ScrollAnimation>

            <ScrollAnimation animation="reveal" delay={200}>
              <p className="font-akzidenz text-xl leading-relaxed mb-16 text-gray-700 font-black">
                Do estúdio ao feed, produzimos com qualidade e compromisso com a democracia.
              </p>
            </ScrollAnimation>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {contentTypes.map((type, index) => (
                <ScrollAnimation key={index} animation="scale" delay={index * 100}>
                  <Card className="p-8 border-0 shadow-lg hover-lift">
                    <CardContent className="p-0">
                      <div className="flex items-start gap-6">
                        <div className="w-16 h-16 bg-teia-green rounded-full flex items-center justify-center flex-shrink-0">
                          <type.icon className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h3 className="font-nethead text-xl font-black mb-3 text-gray-900">{type.title}</h3>
                          <p className="font-akzidenz text-base font-black text-gray-700 leading-relaxed">
                            {type.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Orçamento */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="container mx-auto px-8 sm:px-6 md:px-4">
          <div className="text-center max-w-4xl mx-auto">
            <ScrollAnimation animation="scale" delay={200}>
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-teia-green rounded-full mx-auto mb-12 flex items-center justify-center animate-pulse-slow">
                <Target className="h-12 w-12 sm:h-16 sm:w-16 text-white" />
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="reveal" delay={400}>
              <h2 className="font-nethead text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-6 sm:mb-8 text-gray-900 leading-tight px-2">
                {t("whatWeDo.cta.title") || "QUER UMA CAMPANHA DE IMPACTO?"}
              </h2>
            </ScrollAnimation>

            <ScrollAnimation animation="reveal" delay={600}>
              <p className="font-akzidenz text-base sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-12 font-black leading-relaxed px-2">
                {t("whatWeDo.cta.description") ||
                  "Desenvolvemos campanhas estratégicas que conectam causas importantes com as pessoas certas. Vamos construir juntos uma comunicação que transforma."}
              </p>
            </ScrollAnimation>

            <ScrollAnimation animation="bounce" delay={800}>
              <Link href="/orcamento">
                <Button
                  size="lg"
                  className="bg-teia-green hover:bg-green-700 text-white px-6 sm:px-8 md:px-12 py-5 sm:py-6 text-base sm:text-lg md:text-xl font-akzidenz font-black transition-all duration-500 hover-lift hover-glow hover:scale-105 group"
                >
                  <Target className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                  {t("whatWeDo.cta.button") || "Solicitar Orçamento"}
                  <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
  )
}
