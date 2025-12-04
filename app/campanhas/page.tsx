"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Target, Play } from "lucide-react"
import Link from "next/link"
import { ScrollAnimation } from "@/components/scroll-animations"
import { FloatingParticles } from "@/components/floating-particles"
import { useLanguage } from "@/contexts/language-context"
// Importando Image do Next.js para exibir as imagens das campanhas
import Image from "next/image"

export default function CampanhasPage() {
  const { t } = useLanguage()

  const campaigns = [
    {
      id: "bh-nas-urnas",
      title: "BH at the Polls",
      subtitle: "Youth Mobilization for the Guardianship Council",
      image: "/campaigns/bh-nas-urnas.png",
      description: "Mobilization for the Guardianship Council elections in BH, focusing on young people.",
      fullDescription:
        "A strategic campaign to engage young people in the Belo Horizonte Guardianship Council elections, highlighting the importance of democratic participation and child and adolescent care.",
      impact: "2M+ views",
      date: "October 2024",
      duration: "30 days",
      platforms: ["Instagram", "TikTok", "YouTube"],
      color: "bg-teia-purple",
      textColor: "text-teia-purple",
      category: "Political Mobilization",
      status: "Completed",
      results: {
        views: "2.1M",
        engagement: "15.3%",
        reach: "850K",
        shares: "12.5K",
      },
    },
    {
      id: "carnaval-do-povo",
      title: "Brazil's Greatest Carnival",
      subtitle: "Defending Popular Celebration",
      image: "/campaigns/o-melhor-carnaval.jpeg",
      description: "Expose of political appropriation of street Carnival and celebration of the festival's popular power.",
      fullDescription:
        "Campaign that defended BH's street Carnival against attempts at political appropriation, celebrating its popular and democratic essence through creative content and social mobilization.",
      impact: "3M+ views",
      date: "February 2024",
      duration: "45 days",
      platforms: ["Instagram", "TikTok", "Twitter", "YouTube"],
      color: "bg-teia-green",
      textColor: "text-teia-green",
      category: "Culture and Politics",
      status: "Completed",
      results: {
        views: "3.2M",
        engagement: "18.7%",
        reach: "1.2M",
        shares: "25.8K",
      },
    },
    {
      id: "arrume-seu-titulo",
      title: "Register to Vote",
      subtitle: "Youth Power of the Vote",
      image: "/campaigns/arrume-seu-titulo.png",
      description: "Campaign to encourage young people to regularize voter registration.",
      fullDescription:
        "Initiative focused on raising awareness and facilitating the voter registration process among young people, using accessible language and attractive digital formats.",
      impact: "1.5M+ views",
      date: "May 2024",
      duration: "60 days",
      platforms: ["Instagram", "TikTok", "WhatsApp"],
      color: "bg-teia-purple",
      textColor: "text-teia-purple",
      category: "Political Education",
      status: "Completed",
      results: {
        views: "1.8M",
        engagement: "22.1%",
        reach: "720K",
        shares: "18.3K",
      },
    },
    {
      id: "bh-do-futuro",
      title: "BH of the Future",
      subtitle: "Bold Agenda for the City",
      image: "/campaigns/bh-do-futuro.png",
      description: "Campaign proposing an agenda to address city challenges.",
      fullDescription:
        "In partnership with local organizations, we developed a propositional campaign presenting innovative solutions to Belo Horizonte's main urban challenges.",
      impact: "4M+ views",
      date: "September 2024",
      duration: "90 days",
      platforms: ["Instagram", "YouTube", "LinkedIn", "Twitter"],
      color: "bg-teia-green",
      textColor: "text-teia-green",
      category: "Public Policies",
      status: "Completed",
      results: {
        views: "4.1M",
        engagement: "16.9%",
        reach: "1.5M",
        shares: "31.2K",
      },
    },
    {
      id: "busao-0800",
      title: "Bus 0800",
      subtitle: "Urban Mobility for All",
      image: "/campaigns/busao-0800.png",
      description: "Campaign about public transportation and urban mobility in BH.",
      fullDescription:
        "Initiative that discussed public transportation challenges in Belo Horizonte, proposing solutions to improve urban mobility and population access to essential services.",
      impact: "2.5M+ views",
      date: "March 2024",
      duration: "45 days",
      platforms: ["Instagram", "Twitter", "YouTube"],
      color: "bg-teia-green",
      textColor: "text-teia-green",
      category: "Public Policies",
      status: "Completed",
      results: {
        views: "2.5M",
        engagement: "17.5%",
        reach: "950K",
        shares: "19.2K",
      },
    },
    {
      id: "seu-dinheiro-de-volta",
      title: "Your Money Back",
      subtitle: "Transparency in Public Resources",
      image: "/campaigns/seu-dinheiro-de-volta.jpeg",
      description: "Campaign about public budget and accountability.",
      fullDescription:
        "Educational campaign that explained in an accessible way how public budget works and the importance of transparency in managing city resources.",
      impact: "1.8M+ views",
      date: "July 2024",
      duration: "40 days",
      platforms: ["Instagram", "TikTok", "YouTube"],
      color: "bg-teia-purple",
      textColor: "text-teia-purple",
      category: "Political Education",
      status: "Completed",
      results: {
        views: "1.8M",
        engagement: "20.3%",
        reach: "680K",
        shares: "15.7K",
      },
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section Ultra-Moderno */}
      <section className="relative bg-teia-green text-white py-32 overflow-hidden">
        <FloatingParticles count={25} />

        {/* Elemento tipográfico gigante */}
        <div className="absolute right-0 top-0 w-1/2 h-full flex items-center justify-end pr-10">
          <div className="font-nethead text-[300px] font-black opacity-10 leading-none transform rotate-12">CAMP</div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <ScrollAnimation animation="slide-left" delay={200}>
              <div className="flex items-center gap-6 mb-12">
                <div className="w-20 h-1 bg-white"></div>
                <span className="font-akzidenz text-sm font-black uppercase tracking-[0.3em] opacity-80">
                  {t("campaigns.ourCampaigns")}
                </span>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="reveal" delay={400}>
              <h1 className="font-nethead text-6xl md:text-8xl font-black mb-8 leading-none tracking-tight">
                {t("campaigns.title").toUpperCase()}
              </h1>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-right" delay={600}>
              <p className="font-akzidenz text-xl leading-relaxed opacity-90 font-black max-w-2xl">
                {t("campaigns.subtitle")}
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Stats Gerais */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <ScrollAnimation animation="bounce" delay={200}>
              <div className="hover-lift">
                <h3 className="font-nethead text-5xl font-black mb-4 text-teia-purple">16M+</h3>
                <p className="font-akzidenz text-lg font-black text-gray-600">{t("campaigns.totalImpact")}</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="bounce" delay={400}>
              <div className="hover-lift">
                <h3 className="font-nethead text-5xl font-black mb-4 text-teia-green">6</h3>
                <p className="font-akzidenz text-lg font-black text-gray-600">{t("campaigns.mainCampaigns")}</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="bounce" delay={600}>
              <div className="hover-lift">
                <h3 className="font-nethead text-5xl font-black mb-4 text-teia-purple">18.2%</h3>
                <p className="font-akzidenz text-lg font-black text-gray-600">{t("campaigns.averageEngagement")}</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="bounce" delay={800}>
              <div className="hover-lift">
                <h3 className="font-nethead text-5xl font-black mb-4 text-teia-green">87K</h3>
                <p className="font-akzidenz text-lg font-black text-gray-600">{t("campaigns.totalShares")}</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Grid de Campanhas */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {campaigns.map((campaign, index) => (
              <ScrollAnimation key={campaign.id} animation="scale" delay={index * 200}>
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover-lift bg-white overflow-hidden group">
                  <div className="relative w-full h-80 overflow-hidden">
                    <Image
                      src={campaign.image || "/placeholder.svg"}
                      alt={campaign.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div
                      className={`absolute inset-0 ${campaign.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                    ></div>
                  </div>

                  <div className={`h-2 ${campaign.color}`}></div>

                  <CardHeader className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <Badge
                        variant="secondary"
                        className={`${campaign.textColor} bg-gray-100 font-akzidenz font-black`}
                      >
                        {campaign.category === "Political Mobilization"
                          ? t("campaigns.politicalMobilization")
                          : campaign.category === "Culture and Politics"
                            ? t("campaigns.cultureAndPolitics")
                            : campaign.category === "Political Education"
                              ? t("campaigns.politicalEducation")
                              : campaign.category === "Public Policies"
                                ? t("campaigns.publicPolicies")
                                : campaign.category}
                      </Badge>
                      <Badge variant="outline" className="text-green-600 border-green-600 font-akzidenz font-black">
                        {t("campaigns.completed")}
                      </Badge>
                    </div>

                    <CardTitle className="font-nethead text-3xl font-black mb-2 text-gray-900 group-hover:text-teia-purple transition-colors duration-300">
                      {campaign.title}
                    </CardTitle>

                    <CardDescription className="font-akzidenz text-lg font-black text-gray-600 mb-4">
                      {campaign.subtitle}
                    </CardDescription>

                    <p className="font-akzidenz text-base text-gray-700 font-black leading-relaxed mb-6">
                      {campaign.fullDescription}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <p className="font-nethead text-2xl font-black text-teia-purple">{campaign.results.views}</p>
                        <p className="font-akzidenz text-xs font-black text-gray-600">Views</p>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <p className="font-nethead text-2xl font-black text-teia-green">
                          {campaign.results.engagement}
                        </p>
                        <p className="font-akzidenz text-xs font-black text-gray-600">Engagement</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {campaign.platforms.map((platform, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs font-akzidenz font-black">
                          {platform}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 text-sm text-gray-500 font-akzidenz font-black mb-6">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {campaign.date}
                      </div>
                      <span>•</span>
                      <span>{campaign.duration}</span>
                    </div>
                  </CardHeader>

                  <CardContent className="px-8 pb-8">
                    <Link href={`/campanhas/${campaign.id}`}>
                      <Button
                        className={`w-full ${campaign.color} text-white font-akzidenz font-black transition-all duration-300 hover-lift group shadow-lg hover:shadow-2xl hover:scale-[1.02]`}
                        size="lg"
                      >
                        <Play className="mr-2 h-5 w-5" />
                        {t("campaigns.viewFullCampaign")}
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <ScrollAnimation animation="scale" delay={200}>
              <div className="w-24 h-24 bg-teia-purple rounded-full mx-auto mb-8 flex items-center justify-center">
                <Target className="h-12 w-12 text-white" />
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="reveal" delay={400}>
              <h2 className="font-nethead text-4xl font-black mb-8 text-gray-900">
                {t("campaigns.wantImpactCampaign")}
              </h2>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-left" delay={600}>
              <p className="font-akzidenz text-xl text-gray-600 mb-12 font-black leading-relaxed">
                {t("campaigns.impactDescription")}
              </p>
            </ScrollAnimation>

            <ScrollAnimation animation="bounce" delay={800}>
              <Link href="/orcamento">
                <Button
                  size="lg"
                  className="bg-teia-purple hover:bg-purple-800 text-white px-12 py-4 text-xl font-akzidenz font-black hover-lift group"
                >
                  <Target className="mr-3 h-6 w-6" />
                  {t("campaigns.requestQuote")}
                  <ArrowRight className="ml-3 h-6 w-6 transition-transform duration-300 group-hover:translate-x-2" />
                </Button>
              </Link>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
  )
}
