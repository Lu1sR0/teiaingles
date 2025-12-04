"use client"
import { Input } from "@/components/ui/input"
import { ArrowRight, Sparkles, Users, Target, Zap, Globe, Play } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useEffect, useState } from "react"
import { ScrollAnimation } from "@/components/scroll-animations"
import { FloatingParticles } from "@/components/floating-particles"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomePage() {
  const { t } = useLanguage()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    const handleScroll = () => setScrollY(window.scrollY)

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="min-h-screen gpu-accelerated overflow-x-hidden">
      {/* Hero Section - MOBILE OTIMIZADO */}
      <section className="relative bg-teia-green text-white py-16 sm:py-24 md:py-32 lg:py-40 overflow-hidden cyber-grid">
        <FloatingParticles count={30} />

        {/* Cursor follower effect - apenas desktop */}
        <div
          className="hidden md:block absolute w-[800px] h-[800px] bg-white/2 rounded-full blur-3xl pointer-events-none transition-all duration-1000 ease-out animate-morphing-blob"
          style={{
            left: mousePosition.x - 400,
            top: mousePosition.y - 400,
            transform: `scale(${1 + scrollY * 0.001}) rotate(${scrollY * 0.1}deg)`,
          }}
        />

        {/* Elementos gráficos - apenas desktop */}
        <div className="absolute right-0 top-0 w-1/2 h-full items-center justify-end pr-20 hidden lg:flex">
          <div
            className="font-nethead text-[500px] font-black opacity-5 leading-none animate-liquid-morph select-none holographic-text"
            style={{ transform: `translateY(${scrollY * 0.1}px) rotateZ(${scrollY * 0.05}deg)` }}
          >
            TEIA
          </div>
        </div>

        {/* Data streams - apenas desktop */}
        <div className="absolute inset-0 opacity-10 hidden md:block">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-px h-full bg-white animate-data-stream"
              style={{
                left: `${20 + i * 15}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i}s`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-4 relative z-10">
          <div className="max-w-6xl">
            <ScrollAnimation animation="slide-left" delay={200}>
              <div className="flex items-center gap-4 sm:gap-6 mb-8 sm:mb-12">
                <div className="w-12 sm:w-16 md:w-20 h-1 bg-white animate-gradient-shift"></div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="reveal" delay={400}>
              <h1 className="font-nethead font-black mb-8 sm:mb-12 md:mb-16 leading-tight sm:leading-none tracking-tight">
                <span className="inline-block animate-text-reveal delay-100 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl opacity-80 block mb-2">
                  {t("home.hero.title1")} {t("home.hero.title2")}
                </span>
                <br />
                <span className="inline-block animate-text-reveal delay-200 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl opacity-70 block mb-4 sm:mb-6">
                  {t("home.hero.societyText")}
                </span>
                <span className="inline-block animate-text-reveal delay-300 text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-[8rem] block break-words">
                  {t("home.hero.title3")}
                </span>
              </h1>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-right" delay={600}>
              <p className="font-akzidenz text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed opacity-90 mb-8 sm:mb-12 font-black max-w-4xl animate-slide-in-blur">
                {t("home.hero.description")}
              </p>
            </ScrollAnimation>

            <ScrollAnimation animation="bounce" delay={800}>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                <Link href="/quem-somos" className="w-full sm:w-auto">
                    <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-teia-green text-base sm:text-lg md:text-xl px-8 sm:px-12 py-5 sm:py-6 font-black bg-transparent font-akzidenz transition-all duration-300 hover:scale-105 group"
                    >
                    <Play className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                    Learn More
                    <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Stats Section - MOBILE OTIMIZADO */}
      <section className="py-20 sm:py-32 md:py-40 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-3 animate-holographic"></div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-4">
          <ScrollAnimation animation="scale" delay={200}>
            <h2 className="font-nethead text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center mb-12 sm:mb-16 md:mb-20 text-gray-900 holographic-text px-4">
              {t("home.stats.title")}
            </h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 md:gap-16 text-center">
            <ScrollAnimation animation="bounce" delay={300}>
              <div className="hover:scale-105 transition-transform duration-300 group">
                <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-teia-purple rounded-full mx-auto mb-6 sm:mb-8 flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:shadow-teia-purple/50">
                  <Users className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 text-white" />
                </div>
                <h3 className="font-nethead text-5xl sm:text-6xl md:text-7xl font-black mb-4 sm:mb-6 text-teia-purple">
                  20+
                </h3>
                <p className="font-akzidenz text-lg sm:text-xl font-black text-gray-600">{t("home.stats.creators")}</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="bounce" delay={500}>
              <div className="hover:scale-105 transition-transform duration-300 group">
                <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-teia-green rounded-full mx-auto mb-6 sm:mb-8 flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:shadow-teia-green/50">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-nethead text-5xl sm:text-6xl md:text-7xl font-black mb-4 sm:mb-6 text-teia-green">
                  54,9M
                </h3>
                <p className="font-akzidenz text-lg sm:text-xl font-black text-gray-600">{t("home.stats.views")}</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="bounce" delay={700}>
              <div className="hover:scale-105 transition-transform duration-300 group">
                <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-teia-purple rounded-full mx-auto mb-6 sm:mb-8 flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:shadow-teia-purple/50">
                  <Zap className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 text-white" />
                </div>
                <h3 className="font-nethead text-5xl sm:text-6xl md:text-7xl font-black mb-4 sm:mb-6 text-teia-purple">
                  10+
                </h3>
                <p className="font-akzidenz text-lg sm:text-xl font-black text-gray-600">{t("home.stats.campaigns")}</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="bounce" delay={900}>
              <div className="hover:scale-105 transition-transform duration-300 group">
                <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-teia-green rounded-full mx-auto mb-6 sm:mb-8 flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:shadow-teia-green/50">
                  <Globe className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 text-white" />
                </div>
                <h3 className="font-nethead text-5xl sm:text-6xl md:text-7xl font-black mb-4 sm:mb-6 text-teia-green">
                  10+
                </h3>
                <p className="font-akzidenz text-lg sm:text-xl font-black text-gray-600">{t("home.stats.partners")}</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Destaques O que fazemos - MOBILE OTIMIZADO */}
      <section className="relative bg-teia-purple text-white py-24 sm:py-36 md:py-48 overflow-hidden">
        <FloatingParticles count={25} />

        {/* Elementos gráficos - apenas desktop */}
        <div className="hidden lg:block absolute right-20 top-1/2 transform -translate-y-1/2">
          <div className="relative w-[500px] h-[500px]">
            <div className="absolute inset-0 border-4 border-white/20 rounded-full animate-morphing-blob"></div>
            <div
              className="absolute inset-8 border-4 border-white/30 rounded-full animate-liquid-morph"
              style={{ animationDirection: "reverse" }}
            ></div>
            <div className="absolute inset-16 border-4 border-white/40 rounded-full animate-morphing-blob"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/10 rounded-full animate-particle-float backdrop-blur-sm"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-4 relative z-10">
          <div className="max-w-3xl">
            <ScrollAnimation animation="slide-left" delay={200}>
              <div className="flex items-center gap-4 sm:gap-6 mb-8 sm:mb-12">
                <div className="w-12 sm:w-16 md:w-20 h-1 bg-white animate-holographic"></div>
                <span className="font-akzidenz text-xs sm:text-sm font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] opacity-80">
                  {t("home.whatWeDo.subtitle")}
                </span>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="reveal" delay={400}>
              <h2 className="font-nethead text-4xl sm:text-5xl md:text-7xl lg:text-[10rem] font-black mb-10 sm:mb-12 md:mb-16 leading-tight sm:leading-none">
                <span className="inline-block animate-text-reveal delay-100 hover-glitch">
                  {t("home.whatWeDo.title1")}
                </span>
                <br />
                <span className="inline-block text-white/70 animate-text-reveal delay-300">
                  {t("home.whatWeDo.title2")}
                </span>
              </h2>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-right" delay={600}>
              <p className="font-akzidenz text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed opacity-90 mb-12 sm:mb-16 md:mb-20 font-black max-w-2xl">
                {t("home.whatWeDo.description")}
              </p>
            </ScrollAnimation>

            <ScrollAnimation animation="bounce" delay={800}>
              <Link href="/campanhas" className="inline-block w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-teia-purple text-base sm:text-lg md:text-xl px-8 sm:px-12 py-5 sm:py-6 font-black bg-transparent font-akzidenz transition-all duration-300 hover:scale-105 group"
                >
                  <Zap className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-white" />
                  View Campaigns
                  <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1 text-white" />
                </Button>
              </Link>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Destaques Criadores - MOBILE OTIMIZADO */}
      <section className="relative bg-teia-green text-white py-24 sm:py-36 md:py-48 overflow-hidden">
        <FloatingParticles count={35} />

        {/* Elementos gráficos - apenas desktop */}
        <div className="hidden lg:block absolute right-20 top-1/2 transform -translate-y-1/2">
          <div className="relative w-96 h-96">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-white opacity-15 animate-particle-float rounded-full hover-morph"
                style={{
                  width: `${30 + i * 10}px`,
                  height: `${30 + i * 10}px`,
                  right: `${i * 15}px`,
                  top: `${i * 10}px`,
                  transform: `rotate(${15 + i * 15}deg)`,
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: `${3 + i * 0.5}s`,
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-4 relative z-10">
          <div className="max-w-3xl">
            <ScrollAnimation animation="slide-right" delay={200}>
              <div className="flex items-center gap-4 sm:gap-6 mb-8 sm:mb-12">
                <div className="w-12 sm:w-16 md:w-20 h-1 bg-white animate-gradient-shift"></div>
                <span className="font-akzidenz text-xs sm:text-sm font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] opacity-80">
                  {t("home.creators.subtitle")}
                </span>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="reveal" delay={400}>
              <h2 className="font-nethead text-4xl sm:text-5xl md:text-7xl lg:text-[10rem] font-black mb-10 sm:mb-12 md:mb-16 leading-tight sm:leading-none">
                <span className="inline-block animate-text-reveal delay-100 hover-neon">
                  {t("home.creators.title1")}
                </span>
                <br />
                <span className="inline-block text-white/70 animate-text-reveal delay-300">
                  {t("home.creators.title2")}
                </span>
              </h2>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-left" delay={600}>
              <p className="font-akzidenz text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed opacity-90 mb-12 sm:mb-16 md:mb-20 font-black max-w-2xl">
                {t("home.creators.description")}
              </p>
            </ScrollAnimation>

            <ScrollAnimation animation="bounce" delay={800}>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                <Link href="/criadores" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-teia-green text-base sm:text-lg md:text-xl px-8 sm:px-12 py-5 sm:py-6 font-black bg-transparent font-akzidenz transition-all duration-300 hover:scale-105 group"
                  >
                    <Users className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                    Join
                    <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Newsletter - MOBILE OTIMIZADO */}
      <section className="py-24 sm:py-36 md:py-48 bg-gray-50 relative overflow-hidden">
        <FloatingParticles count={20} />

        {/* Elementos decorativos - escala responsiva */}
        <div className="absolute top-10 left-10 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-teia-purple/5 rounded-full animate-morphing-blob"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-teia-green/5 rounded-full animate-liquid-morph"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-teia-purple/3 rounded-full animate-particle-float"></div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollAnimation animation="scale" delay={200}>
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-teia-purple rounded-full mx-auto mb-8 sm:mb-12 flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Sparkles className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 text-white" />
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="reveal" delay={400}>
              <h2 className="font-nethead text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black mb-8 sm:mb-12 text-gray-900 uppercase tracking-wide holographic-text px-4">
                {t("home.newsletter.title")}
              </h2>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-left" delay={600}>
              <p className="font-akzidenz text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 sm:mb-16 md:mb-20 font-black leading-relaxed px-4">
                {t("home.newsletter.description")}
              </p>
            </ScrollAnimation>

            <ScrollAnimation animation="bounce" delay={800}>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 max-w-2xl mx-auto px-4">
                <Input
                  type="email"
                  placeholder={t("home.newsletter.placeholder")}
                  className="bg-white border-2 border-gray-200 focus:border-teia-purple text-base sm:text-lg md:text-xl py-6 sm:py-8 font-akzidenz font-black transition-all duration-300 text-center flex-1"
                />
                <Link href="/newsletter" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto bg-teia-purple hover:bg-purple-800 text-white px-8 sm:px-12 py-6 sm:py-8 text-base sm:text-lg md:text-xl font-akzidenz font-black transition-all duration-300 hover:scale-105 group">
                    <Sparkles className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    Inscrever-se
                    <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300 group-hover:translate-x-1 text-white" />
                  </Button>
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTAs Finais - MOBILE OTIMIZADO */}
      <section className="py-24 sm:py-36 md:py-48 bg-white relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-5"></div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 md:gap-24 max-w-7xl mx-auto">
            <ScrollAnimation animation="slide-left" delay={200}>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-teia-purple via-purple-600 to-purple-800 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500"></div>
                <div className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-xl transition-transform duration-300 hover:scale-105">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-teia-purple rounded-full mx-auto mb-6 flex items-center justify-center transition-all duration-300 hover:scale-110">
                    <Users className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
                  </div>
                  <h3 className="font-nethead text-2xl sm:text-3xl font-black mb-4 sm:mb-6 text-gray-900 text-center uppercase tracking-wide">
                    {t("home.ctas.ecosystem.title")}
                  </h3>
                  <p className="font-akzidenz text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 font-black leading-relaxed text-center px-2">
                    {t("home.ctas.ecosystem.description")}
                  </p>
                  <div className="text-center">
                    <Link href="/ecossistema" className="inline-block w-full">
                        <Button
                        size="lg"
                        className="bg-teia-purple hover:bg-purple-800 text-white px-8 sm:px-12 py-5 sm:py-6 text-base sm:text-lg md:text-xl font-black font-akzidenz transition-all duration-300 hover:scale-105 group w-full"
                        >
                        <Users className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6 text-white" />
                        Join the Network
                        <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300 group-hover:translate-x-1 text-white" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-right" delay={400}>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-teia-green via-green-600 to-green-800 rounded-3xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-500"></div>
                <div className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-xl transition-transform duration-300 hover:scale-105">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-teia-green rounded-full mx-auto mb-6 flex items-center justify-center transition-all duration-300 hover:scale-110">
                    <Target className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
                  </div>
                  <h3 className="font-nethead text-2xl sm:text-3xl font-black mb-4 sm:mb-6 text-gray-900 text-center uppercase tracking-wide">
                    {t("home.ctas.budget.title")}
                  </h3>
                  <p className="font-akzidenz text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 font-black leading-relaxed text-center px-2">
                    {t("home.ctas.budget.description")}
                  </p>
                  <div className="text-center">
                    <Link href="/orcamento" className="inline-block w-full">
                        <Button
                        size="lg"
                        className="bg-teia-green hover:bg-green-700 text-white px-8 sm:px-12 py-5 sm:py-6 text-base sm:text-lg md:text-xl font-black font-akzidenz transition-all duration-300 hover:scale-105 group w-full"
                        >
                        <Target className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6 text-white" />
                        Request a Quote
                        <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300 group-hover:translate-x-1 text-white" />
                        </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
  )
}
