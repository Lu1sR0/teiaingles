"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { Menu, X, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const navItems = [
    { href: "/quem-somos", label: t("nav.about") },
    { href: "/o-que-fazemos", label: t("nav.whatWeDo") },
    { href: "/criadores", label: t("nav.creators") },
    { href: "/relatorios", label: t("nav.reports") },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/98 backdrop-blur-xl shadow-2xl border-b border-gray-100" : "bg-white/90 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-4">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Logo - responsivo */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-4 group relative">
            <div className="relative">
              <div className="absolute inset-0 bg-teia-purple/20 rounded-full blur-xl group-hover:bg-teia-green/30 transition-all duration-500"></div>
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                <Image src="/favicon.png" alt="Teia de Criadores" fill className="object-contain" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-nethead font-black text-lg sm:text-xl text-teia-purple group-hover:text-teia-green transition-all duration-300">
                Teia
              </span>
              <span className="font-akzidenz text-[9px] sm:text-[10px] font-black text-gray-500 -mt-1 tracking-wider uppercase">
                Criadores
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-6 py-3 font-akzidenz font-black text-sm transition-all duration-300 rounded-lg group ${
                  pathname === item.href
                    ? "text-teia-purple bg-teia-purple/5"
                    : "text-gray-700 hover:text-teia-purple hover:bg-gray-50"
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                {pathname === item.href && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-teia-purple rounded-full"></span>
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <LanguageSwitcher />
            <div className="h-8 w-px bg-gray-200"></div>
            <Link href="/ecossistema">
              <Button
                size="lg"
                className="relative overflow-hidden bg-gradient-to-r from-teia-purple to-purple-700 hover:from-teia-purple hover:to-teia-green text-white font-akzidenz font-black transition-all duration-500 hover-lift hover-glow transform hover:scale-105 group px-8"
              >
                <span className="relative z-10 flex items-center">
                  {t("nav.participate")}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </Button>
            </Link>
          </div>

          <button
            className="lg:hidden relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl border-2 border-gray-200 hover:border-teia-purple transition-all duration-300 bg-white hover:bg-gray-50 group"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700 group-hover:text-teia-purple transition-colors duration-300" />
            ) : (
              <Menu className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700 group-hover:text-teia-purple transition-colors duration-300" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white/95 backdrop-blur-xl animate-fade-in-up overflow-y-auto max-h-[calc(100vh-5rem)]">
            <nav className="flex flex-col py-4 sm:py-6 space-y-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 sm:px-6 py-3 sm:py-4 font-akzidenz font-black text-sm sm:text-base transition-all duration-300 rounded-xl mx-4 group ${
                    pathname === item.href
                      ? "text-teia-purple bg-teia-purple/10 border-l-4 border-teia-purple"
                      : "text-gray-700 hover:text-teia-purple hover:bg-gray-50 border-l-4 border-transparent"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.label}
                </Link>
              ))}

              <div className="px-4 pt-4 sm:pt-6 border-t border-gray-100 mt-4 space-y-4">
                <LanguageSwitcher />
                <Link href="/ecossistema" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-teia-purple to-purple-700 hover:from-teia-purple hover:to-teia-green text-white font-akzidenz font-black transition-all duration-500 group py-4"
                  >
                    {t("nav.participate")}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
