"use client"
import { useLanguage } from "@/contexts/language-context"
import { useEffect, useState } from "react"
import { ScrollAnimation } from "@/components/scroll-animations"
import { FloatingParticles } from "@/components/floating-particles"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Heart, TrendingUp, Award } from "lucide-react"
import { HeadquartersCarousel } from "@/components/headquarters-carousel"

export default function QuemSomosPage() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const teamMembers = [
    {
      name: "Mariana Evaristo",
      role: "Executive Director",
      image: "/team/mariana-evaristo.jpeg",
    },
    {
      name: "Zotha",
      role: "Creative Director and co-founder",
      image: "/team/zotha.jpeg",
    },
    {
      name: "Polly Guedes",
      role: "Executive Coordinator",
      image: "/team/polly-guedes.jpeg",
    },
    {
      name: "Marcos Gomes",
      role: "Filmmaker",
      image: "/team/marcos-gomes.jpeg",
    },
    {
      name: "Mirela Persichini",
      role: "Filmmaker",
      image: "/team/mirela-persichini.jpeg",
    },
    {
      name: "Diogo Coura",
      role: "Filmmaker",
      image: "/team/diogo-coura.jpeg",
    },
    {
      name: "Eiane Vieira",
      role: "Graphic Design",
      image: "/team/eiane-vieira.jpeg",
    },
    {
      name: "Franco Dafon",
      role: "Executive Producer",
      image: "/team/franco-nunes.jpeg",
    },
    {
      name: "Gabriele Breda",
      role: "Financial Coordinator",
      image: "/team/gabriele-breda.jpeg",
    },
  ]

  const cofounders = [
    {
      name: "Marcia Cruz",
      role: t("about.team.cofounders"),
      image: "/team/marcia-cruz.jpeg",
    },
    {
      name: "Humberto Ribeiro",
      role: t("about.team.cofounders"),
      image: "/team/humberto-ribeiro.jpeg",
    },
  ]

  const stats = [
    {
      icon: Users,
      value: "15+",
      label: "Team Members",
      color: "from-teia-purple to-purple-700",
    },
    {
      icon: Award,
      value: "2023",
      label: "Founding Year",
      color: "from-teia-green to-green-700",
    },
    {
      icon: TrendingUp,
      value: "54,9M",
      label: "Views",
      color: "from-purple-500 to-purple-700",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teia-purple via-purple-700 to-teia-purple text-white py-20 sm:py-24 md:py-32 overflow-hidden">
        <FloatingParticles count={30} />

        <div className="hidden md:flex absolute inset-0 items-center justify-center opacity-10">
          <div className="font-nethead text-[200px] md:text-[300px] lg:text-[400px] font-black leading-none animate-pulse-slow">
            TEIA
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollAnimation animation="scale" delay={200}>
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white/20 rounded-full mx-auto mb-6 sm:mb-8 flex items-center justify-center backdrop-blur-sm border-2 border-white/30">
                <Users className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-white" />
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="reveal" delay={400}>
              <h1 className="font-nethead text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-6 sm:mb-8 leading-tight sm:leading-none px-2">
                {t("about.title").toUpperCase()}
              </h1>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={600}>
              <p className="font-akzidenz text-lg sm:text-xl md:text-2xl leading-relaxed opacity-95 font-black max-w-3xl mx-auto mb-8 sm:mb-12 px-4">
                {t("about.subtitle")}
              </p>
            </ScrollAnimation>

            <ScrollAnimation animation="bounce" delay={800}>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center px-2">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover-lift"
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div
                        className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center shadow-lg flex-shrink-0`}
                      >
                        <stat.icon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                      </div>
                      <div className="text-left">
                        <div className="font-nethead text-xl sm:text-2xl font-black">{stat.value}</div>
                        <div className="font-akzidenz text-xs sm:text-sm font-black opacity-80">{stat.label}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Introdução */}
      <section className="py-16 sm:py-24 md:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation animation="reveal">
              <p className="font-akzidenz text-lg sm:text-xl md:text-2xl leading-relaxed mb-6 sm:mb-8 text-gray-700 font-black text-center px-2">
                {t("about.description1")}
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Missão em Destaque */}
      <section className="py-16 sm:py-24 md:py-32 bg-gradient-to-br from-teia-purple/5 via-white to-teia-green/5">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation animation="scale" delay={200}>
              <Card className="border-0 shadow-2xl bg-white overflow-hidden">
                <div className="bg-gradient-to-r from-teia-purple to-purple-700 p-8 sm:p-10 md:p-12 text-white text-center relative overflow-hidden">
                  <FloatingParticles count={15} />
                  <div className="relative z-10">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center border-2 border-white/30">
                      <Target className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 text-white" />
                    </div>
                    <h2 className="font-nethead text-3xl sm:text-4xl md:text-5xl font-black mb-3 sm:mb-4 px-2">
                      {t("about.mission.title").toUpperCase()}
                    </h2>
                  </div>
                </div>
                <CardContent className="p-8 sm:p-10 md:p-12">
                  <p className="font-akzidenz text-lg sm:text-xl md:text-2xl text-gray-800 font-black leading-relaxed text-center px-2">
                    {t("about.mission.text")}
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="py-16 sm:py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-4">
          <ScrollAnimation animation="reveal">
            <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20">
              <h2 className="font-nethead text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-6 sm:mb-8 text-gray-900 px-2">
                {t("about.team.title").toUpperCase()}
              </h2>
              <p className="font-akzidenz text-base sm:text-lg md:text-xl text-gray-600 font-black leading-relaxed px-4">
                Meet the people who make Teia happen
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20 max-w-7xl mx-auto">
            {teamMembers.map((member, index) => (
              <ScrollAnimation key={index} animation="scale" delay={index * 50}>
                <Card className="border-0 shadow-lg hover-lift group bg-white overflow-hidden">
                  <CardContent className="p-6 sm:p-8 md:p-10">
                    <div className="w-32 h-32 mx-auto mb-6 relative overflow-hidden rounded-full transition-all duration-500 group-hover:scale-110 shadow-lg border-4 border-white group-hover:border-teia-purple">
                      <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                    </div>
                    <h3 className="font-nethead text-lg sm:text-xl md:text-2xl font-black mb-2 text-gray-900 text-center">
                      {member.name}
                    </h3>
                    <p className="font-akzidenz text-sm sm:text-base md:text-lg text-gray-600 font-black text-center">
                      {member.role}
                    </p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation animation="reveal" delay={500}>
            <div className="text-center max-w-4xl mx-auto">
              <h3 className="font-nethead text-2xl sm:text-3xl font-black mb-8 sm:mb-12 text-gray-900 px-2">
                {t("about.team.cofounders").toUpperCase()}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-2xl mx-auto">
                {cofounders.map((cofounder, index) => (
                  <Card key={index} className="border-0 shadow-lg hover-lift group bg-white overflow-hidden">
                    <CardContent className="p-8 sm:p-10 md:p-12">
                      <div className="w-40 h-40 mx-auto mb-6 relative overflow-hidden rounded-full transition-all duration-500 group-hover:scale-110 shadow-lg border-4 border-white group-hover:border-teia-green">
                        <Image
                          src={cofounder.image || "/placeholder.svg"}
                          alt={cofounder.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h4 className="font-nethead text-xl sm:text-2xl md:text-3xl font-black mb-2 text-gray-900 text-center">
                        {cofounder.name}
                      </h4>
                      <p className="font-akzidenz text-sm sm:text-base md:text-lg text-gray-600 font-black text-center">
                        {cofounder.role}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section className="py-16 sm:py-24 md:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-4">
          <ScrollAnimation animation="reveal">
            <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20">
                <h2 className="font-nethead text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-6 sm:mb-8 text-gray-900 px-2">
                OUR HEADQUARTERS
                </h2>
                <p className="font-akzidenz text-base sm:text-lg md:text-xl text-gray-600 font-black leading-relaxed px-4">
                Meet the space where we create content that transforms. Professional studios, cutting-edge equipment and
                a collaborative environment in the heart of Belo Horizonte.
                </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="scale" delay={200}>
            <HeadquartersCarousel />
          </ScrollAnimation>
        </div>
      </section>

      {/* Manifesto */}
      <section className="py-16 sm:py-24 md:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation animation="reveal">
              <h2 className="font-nethead text-3xl sm:text-4xl font-black mb-8 sm:mb-12 text-gray-900 px-2">
                {t("about.manifesto.title")}
              </h2>
            </ScrollAnimation>
            <div className="space-y-6 sm:space-y-8 text-base sm:text-lg leading-relaxed text-gray-700 font-black font-akzidenz px-2">
              <ScrollAnimation animation="reveal" delay={200}>
                <p>{t("about.manifesto.text1")}</p>
              </ScrollAnimation>
              <ScrollAnimation animation="reveal" delay={300}>
                <p>{t("about.manifesto.text2")}</p>
              </ScrollAnimation>
              <ScrollAnimation animation="reveal" delay={400}>
                <p>{t("about.manifesto.text3")}</p>
              </ScrollAnimation>
              <ScrollAnimation animation="reveal" delay={500}>
                <p>{t("about.manifesto.text4")}</p>
              </ScrollAnimation>
              <ScrollAnimation animation="reveal" delay={600}>
                <p>{t("about.manifesto.text5")}</p>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teia-green via-green-600 to-teia-green"></div>
        <FloatingParticles count={20} />

        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto text-white">
            <ScrollAnimation animation="scale" delay={200}>
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white/20 backdrop-blur-sm rounded-full mx-auto mb-6 sm:mb-8 flex items-center justify-center animate-pulse-slow border-2 border-white/30">
                <Heart className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-white" />
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="reveal" delay={400}>
                <h2 className="font-nethead text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-6 sm:mb-8 px-2">
                JOIN OUR MISSION
                </h2>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={600}>
              <p className="font-akzidenz text-lg sm:text-xl md:text-2xl font-black leading-relaxed opacity-95 max-w-3xl mx-auto px-4">
              Be part of a network committed to social transformation through communication
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
  )
}
