"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Instagram, Twitter, Linkedin, ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function Footer() {
  const { t } = useLanguage()

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [email, setEmail] = useState("")

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    console.log("Footer newsletter submitted:", email)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setEmail("")
    }, 5000)
  }

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-teia-purple/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-teia-green/5 rounded-full blur-3xl"></div>

      {/* Newsletter Section - MOBILE OTIMIZADO */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-4 py-10 sm:py-12 md:py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-nethead text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black mb-4 sm:mb-6 text-white px-2 break-words">
              {t("home.newsletter.title") || "FIQUE POR DENTRO"}
            </h3>
            <p className="font-akzidenz text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 font-black px-2 leading-relaxed">
              {t("newsletter.form.description") ||
                "Receba novidades sobre comunicação democrática e transformação social direto no seu e-mail"}
            </p>
            {isSubmitted ? (
              <div className="text-center py-4 text-teia-green font-bold text-sm sm:text-base">
                Thank you for subscribing!
              </div>
            ) : (
              /* Form responsivo com layout flexível */
              <form
                onSubmit={handleNewsletterSubmit}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-2xl mx-auto px-2"
              >
                <Input
                  type="email"
                  placeholder="your@email.com"
                  className="bg-gray-800 border-2 border-gray-600 text-white placeholder:text-gray-400 focus:border-teia-purple font-akzidenz font-bold text-base sm:text-lg h-12 sm:h-14 md:h-16 px-4 sm:px-6 flex-1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button
                  type="submit"
                  className="bg-teia-purple hover:bg-purple-800 px-6 sm:px-8 h-12 sm:h-14 md:h-16 text-base sm:text-lg font-akzidenz font-black hover-lift hover-glow w-full sm:w-auto whitespace-nowrap"
                >
                  Subscribe
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 ml-2" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Content - MOBILE OTIMIZADO */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-4 py-12 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
          {/* Logo e Descrição */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12">
                <Image src="/favicon.png" alt="Teia de Criadores" fill className="object-contain" />
              </div>
              <div className="font-nethead font-black text-xl sm:text-2xl text-teia-purple">Teia de Criadores</div>
            </div>
            <p className="font-akzidenz text-gray-300 mb-6 sm:mb-8 font-black text-base sm:text-lg leading-relaxed max-w-md">
              {t("footer.description")}
            </p>
            <div className="flex gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teia-purple transition-all duration-300 cursor-pointer hover-lift">
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teia-green transition-all duration-300 cursor-pointer hover-lift">
                <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teia-purple transition-all duration-300 cursor-pointer hover-lift">
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
            </div>
          </div>

          {/* Navegação */}
          <div>
            <h4 className="font-nethead font-black mb-4 sm:mb-6 text-lg sm:text-xl text-white uppercase tracking-wider">
              {t("footer.navigation")}
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <Link
                  href="/quem-somos"
                  className="font-akzidenz font-black text-sm sm:text-base text-gray-300 hover:text-teia-purple transition-colors duration-300 hover:translate-x-1 transform inline-block"
                >
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/o-que-fazemos"
                  className="font-akzidenz font-black text-sm sm:text-base text-gray-300 hover:text-teia-green transition-colors duration-300 hover:translate-x-1 transform inline-block"
                >
                  {t("nav.whatWeDo")}
                </Link>
              </li>
              <li>
                <Link
                  href="/criadores"
                  className="font-akzidenz font-black text-sm sm:text-base text-gray-300 hover:text-teia-purple transition-colors duration-300 hover:translate-x-1 transform inline-block"
                >
                  {t("nav.creators")}
                </Link>
              </li>
              <li>
                <Link
                  href="/relatorios"
                  className="font-akzidenz font-black text-sm sm:text-base text-gray-300 hover:text-teia-green transition-colors duration-300 hover:translate-x-1 transform inline-block"
                >
                  {t("nav.reports")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Participar */}
          <div>
            <h4 className="font-nethead font-black mb-4 sm:mb-6 text-lg sm:text-xl text-white uppercase tracking-wider">
              {t("footer.participate")}
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <Link
                  href="/ecossistema"
                  className="font-akzidenz font-black text-sm sm:text-base text-gray-300 hover:text-teia-purple transition-colors duration-300 hover:translate-x-1 transform inline-block"
                >
                  {t("footer.links.ecosystem")}
                </Link>
              </li>
              <li>
                <Link
                  href="/orcamento"
                  className="font-akzidenz font-black text-sm sm:text-base text-gray-300 hover:text-teia-green transition-colors duration-300 hover:translate-x-1 transform inline-block"
                >
                  {t("footer.links.budget")}
                </Link>
              </li>
              <li>
                <Link
                  href="/newsletter"
                  className="font-akzidenz font-black text-sm sm:text-base text-gray-300 hover:text-teia-purple transition-colors duration-300 hover:translate-x-1 transform inline-block"
                >
                  {t("footer.links.newsletter")}
                </Link>
              </li>
            </ul>

            {/* Contato */}
            <div className="mt-6 sm:mt-8">
              <h5 className="font-akzidenz font-black text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4 uppercase tracking-wider">
                {t("footer.contact")}
              </h5>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-teia-purple flex-shrink-0" />
                  <span className="font-akzidenz font-black text-gray-300 text-xs sm:text-sm break-all">
                    contato@teiadecriadores.com
                  </span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-teia-green mt-1 flex-shrink-0" />
                  <span className="font-akzidenz font-black text-gray-300 text-xs sm:text-sm leading-relaxed">
                    Avenida Afonso Pena, 748 - Sala 2303 - Centro - Belo Horizonte/MG
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - MOBILE OTIMIZADO */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-4 py-6 sm:py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="font-akzidenz font-black text-gray-400 text-xs sm:text-sm text-center md:text-left">
              &copy; 2025 Teia de Criadores. {t("footer.copyright")}
            </p>
            
          </div>
          <div className="text-center mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-800">
            <p className="font-akzidenz font-black text-gray-500 text-xs sm:text-sm">
              Developed by {" "}
              <a
                href="https://buzz33.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teia-purple hover:text-teia-green transition-colors duration-300"
              >
                Buzz33
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
