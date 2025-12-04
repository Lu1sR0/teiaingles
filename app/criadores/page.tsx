"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { ArrowRight } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animations"

export default function CriadoresPage() {
  const { t } = useLanguage()

  const creators = [
    {
      name: "Babi Amaral",
      handle: "@babi__amaral",
      bioKey: "creators.profiles.babiAmaral",
      image: "/creators/babi-amaral.jpg",
    },
    {
      name: "Bia Nogueira",
      handle: "@bianogueiraoficial",
      bioKey: "creators.profiles.biaNogueira",
      image: "/creators/bia-nogueira.jpg",
    },
    {
      name: "Clara Tannure",
      handle: "@claratannure",
      bioKey: "creators.profiles.claraTannure",
      image: "/creators/clara-tannure.jpg",
    },
    {
      name: "Lorrayne Batista",
      handle: "@conectacabana",
      bioKey: "creators.profiles.lorraineBatista",
      image: "/creators/conecta-cabana.jpg",
    },
    {
      name: "Dário de Moura",
      handle: "@dario4e20",
      bioKey: "creators.profiles.darioMoura",
      image: "/creators/dario-moura.jpg",
    },
    {
      name: "Fernanda Teixeira",
      handle: "@chernopreta",
      bioKey: "creators.profiles.fernandaTeixeira",
      image: "/creators/fernanda-teixeira.jpg",
    },
    {
      name: "Fillipe Gibran",
      handle: "@fillipegibran",
      bioKey: "creators.profiles.fillipeGibran",
      image: "/creators/fillipe-gibran.jpg",
    },
    {
      name: "Gabi Domingues",
      handle: "@bellalapierrre",
      bioKey: "creators.profiles.gabiDomingues",
      image: "/creators/gabi-domingues.jpg",
    },
    {
      name: "Hazeite",
      handle: "@hazeite",
      bioKey: "creators.profiles.hazeite",
      image: "/creators/hazeite.jpg",
    },
    {
      name: "Isadora Nascimento",
      handle: "@olharcotidiano_",
      bioKey: "creators.profiles.isadoraNascimento",
      image: "/creators/isadora-nascimento.jpg",
    },
    {
      name: "Jamine Miranda",
      handle: "@pretacaminhao",
      bioKey: "creators.profiles.jamineMiranda",
      image: "/creators/jamine-miranda.jpg",
    },
    {
      name: "João Saraiva",
      handle: "@joaovmsaraiva",
      bioKey: "creators.profiles.joaoSaraiva",
      image: "/creators/joao-saraiva.jpg",
    },
    {
      name: "Laura Sabino",
      handle: "@mylaura_m",
      bioKey: "creators.profiles.lauraSabino",
      image: "/creators/laura-sabino.jpg",
    },
    {
      name: "Lívia Teodoro",
      handle: "@patroamesmo",
      bioKey: "creators.profiles.liviaTeodoro",
      image: "/creators/livia-teodoro.jpg",
    },
    {
      name: "Lucas Oliver",
      handle: "@lucasolivergeografia",
      bioKey: "creators.profiles.lucasOliver",
      image: "/creators/lucas-oliver.jpg",
    },
    {
      name: "Thiago de Almeida",
      handle: "@monge73_",
      bioKey: "creators.profiles.thiagoAlmeida",
      image: "/creators/monge.jpg",
    },
    {
      name: "Carlos e Fersi",
      handle: "@podmadres",
      bioKey: "creators.profiles.carlosEFersi",
      image: "/creators/podmadres.jpg",
    },
    {
      name: "Thiago Daniel",
      handle: "@podonibus",
      bioKey: "creators.profiles.thiagoDaniel",
      image: "/creators/podonibus.jpg",
    },
    {
      name: "Rafa Ventura",
      handle: "@orafaventura",
      bioKey: "creators.profiles.rafaVentura",
      image: "/creators/rafa-ventura.jpg",
    },
    {
      name: "Raony Salvador",
      handle: "@raonysalvador",
      bioKey: "creators.profiles.raonySalvador",
      image: "/creators/raony-salvador.jpg",
    },
    {
      name: "Roberto Andrés",
      handle: "@robertoandres.br",
      bioKey: "creators.profiles.robertoAndres",
      image: "/creators/roberto-andres.jpg",
    },
    {
      name: "Tomtom",
      handle: "@eugleidisstone",
      bioKey: "creators.profiles.tomtom",
      image: "/creators/tomtom.jpg",
    },
    {
      name: "Zotha",
      handle: "@zothavio",
      bioKey: "creators.profiles.zotha",
      image: "/creators/zotha.jpg",
    },
  ]

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-teia-purple text-white py-20 sm:py-24 md:py-32 overflow-hidden">
        <div className="hidden md:flex absolute right-0 top-0 w-1/2 h-full items-center justify-end pr-10">
          <div className="font-nethead text-[150px] md:text-[200px] lg:text-[250px] font-black opacity-15 leading-none animate-pulse-slow">
            REDE
          </div>
        </div>

        <div className="hidden md:block absolute top-20 left-20 w-3 h-3 bg-white/30 rounded-full animate-float"></div>
        <div className="hidden md:block absolute top-40 left-32 w-2 h-2 bg-white/20 rounded-full animate-float delay-200"></div>
        <div className="hidden md:block absolute top-60 left-16 w-4 h-4 bg-white/25 rounded-full animate-float delay-400"></div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-4 relative z-10">
          <div className="max-w-xl">
            <ScrollAnimation animation="reveal">
              <h1 className="font-nethead text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-6 sm:mb-8 leading-tight sm:leading-none tracking-tight px-2">
                {t("creators.title").toUpperCase()}
              </h1>
            </ScrollAnimation>
            <ScrollAnimation animation="reveal" delay={200}>
              <p className="font-akzidenz text-base sm:text-lg leading-relaxed opacity-90 font-black px-2">
                {t("creators.subtitle")}
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Grid de Criadores */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-16 sm:mb-24 md:mb-32">
            {creators.map((creator, index) => (
              <ScrollAnimation key={index} animation="scale" delay={index * 100}>
                <div className="text-center hover-lift">
                  <div className="w-48 sm:w-56 md:w-64 lg:w-48 h-48 sm:h-56 md:h-64 lg:h-48 mx-auto mb-8 relative overflow-hidden rounded-full transition-all duration-500 hover:scale-110 hover-glow shadow-lg">
                    <Image src={creator.image || "/placeholder.svg"} alt={creator.name} fill className="object-cover" />
                  </div>
                  <h3 className="font-nethead text-2xl sm:text-3xl md:text-4xl font-black mb-2 text-gray-900">
                    {creator.name}
                  </h3>
                  <p className="font-akzidenz text-sm sm:text-base md:text-lg font-black text-teia-purple mb-4 sm:mb-6 md:mb-8">
                    {creator.handle}
                  </p>
                  <p className="font-akzidenz text-gray-600 mb-6 sm:mb-8 md:mb-12 font-black leading-relaxed px-2">
                    {t(creator.bioKey)}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          {/* CTA */}
          <ScrollAnimation animation="scale" delay={300}>
            <div className="text-center max-w-3xl mx-auto">
              <div className="bg-gradient-to-br from-teia-purple/5 to-teia-green/5 rounded-2xl p-8 sm:p-10 md:p-12 hover-lift">
                <h2 className="font-nethead text-2xl sm:text-3xl md:text-4xl font-black mb-6 sm:mb-8 text-gray-900 px-2">
                  {t("creators.cta.title")}
                </h2>
                <p className="font-akzidenz text-base sm:text-lg text-gray-600 mb-8 sm:mb-12 font-black leading-relaxed px-2">
                  {t("creators.cta.description")}
                </p>
                <Link href="/ecossistema" className="inline-block w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-teia-purple hover:bg-purple-800 text-white px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-lg font-akzidenz font-black transition-all duration-500 hover-lift hover-glow hover:scale-105 group"
                  >
                    {t("creators.cta.button")}
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  )
}
