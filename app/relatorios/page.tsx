"use client"

import { Card, CardContent, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText, Calendar } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { ScrollAnimation } from "@/components/scroll-animations"

export default function RelatoriosPage() {
  const { t } = useLanguage()

  const report = {
    title: "Annual Report 2024",
    description:
      "Complete overview of activities, campaigns, and results achieved in our first year of operation. A year of strategic communication, social mobilization, and strengthening democracy.",
    date: "December 2024",
    size: "15 MB",
    pages: "32 pages",
    highlights: [
      "54.9 million views on social networks",
      "Over 1 million interactions",
      "15 active content creators",
      "7 civic campaigns conducted",
      "5 partner organizations",
      "Growth of 600 thousand followers in ecosystem",
    ],
  }

  const handleDownload = async () => {
    try {
      const pdfPath = "/RelatórioTeia2024.pdf"
      const response = await fetch(pdfPath)
      if (!response.ok) {
        console.error(new Error("File not found"))
        return
      }
      const blob = await response.blob()
      const link = document.createElement("a")
      link.href = URL.createObjectURL(blob)
      link.download = "RelatórioTeia2024.pdf"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(link.href)
    } catch (error) {
      console.error("Download failed:", error)
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-teia-purple text-white py-32 overflow-hidden">
        <div className="absolute top-20 left-20 w-3 h-3 bg-white/30 rounded-full animate-float"></div>
        <div className="absolute top-40 left-32 w-2 h-2 bg-white/20 rounded-full animate-float delay-200"></div>
        <div className="absolute top-60 left-16 w-4 h-4 bg-white/25 rounded-full animate-float delay-400"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-xl">
            <ScrollAnimation animation="reveal">
              <h1 className="font-nethead text-6xl md:text-8xl font-black mb-8 leading-none tracking-tight">
                REPORTS
              </h1>
            </ScrollAnimation>
            <ScrollAnimation animation="reveal" delay={200}>
              <p className="font-akzidenz text-lg leading-relaxed opacity-90 font-black">{t("reports.subtitle")}</p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Relatório Principal */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <ScrollAnimation animation="scale" delay={200}>
              <Card className="hover:shadow-xl transition-all duration-500 hover-lift bg-white border-0 shadow-2xl overflow-hidden">
                {/* Header com gradiente */}
                <div className="bg-gradient-to-r from-teia-purple to-purple-700 p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      <FileText className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="font-nethead text-3xl font-black text-white mb-1">{report.title}</h2>
                      <div className="flex items-center gap-4 text-sm text-white/80 font-akzidenz font-black">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {report.date}
                        </div>
                        <span>•</span>
                        <span>{report.size}</span>
                        <span>•</span>
                        <span>{report.pages}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <CardContent className="p-8">
                  {/* Descrição */}
                  <CardDescription className="font-akzidenz text-lg mb-8 text-gray-700 leading-relaxed font-black">
                    {report.description}
                  </CardDescription>

                  {/* Highlights */}
                  <div className="mb-8">
                    <h3 className="font-nethead text-2xl font-black mb-6 text-gray-900">Report Highlights</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {report.highlights.map((highlight, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 p-4 bg-gradient-to-br from-teia-purple/5 to-teia-green/5 rounded-xl hover-lift"
                        >
                          <div className="w-2 h-2 bg-teia-purple rounded-full mt-2 flex-shrink-0"></div>
                          <p className="font-akzidenz text-base font-black text-gray-700 leading-relaxed">
                            {highlight}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Botões de ação */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      onClick={handleDownload}
                      className="w-full bg-teia-purple hover:bg-purple-800 text-white font-akzidenz font-black transition-all duration-300 hover-lift hover-glow hover:scale-105 group py-6 text-lg"
                      size="lg"
                    >
                      <Download className="h-5 w-5 mr-2 transition-transform duration-300 group-hover:translate-y-1" />
                      {t("reports.download") || "Download PDF"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Seção: Sobre nossos relatórios */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation animation="reveal">
              <div className="text-center mb-16">
                <h2 className="font-nethead text-4xl font-black mb-6 text-gray-900">
                  TRANSPARENCY AND ACCOUNTABILITY
                </h2>
                <p className="font-akzidenz text-xl text-gray-600 font-black leading-relaxed">
                  Our reports document in detail what we have accomplished, the paths we have taken, and the impacts we have helped create. We believe in transparency as a fundamental part of our commitment to society.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="scale" delay={400}>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="text-center p-6 border-0 shadow-lg hover-lift">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-teia-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                      <FileText className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-nethead text-xl font-black mb-2 text-gray-900">Complete Results</h3>
                    <p className="font-akzidenz text-sm text-gray-600 font-black">
                      All campaigns, numbers, and achievements of the year
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center p-6 border-0 shadow-lg hover-lift">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-teia-green rounded-full mx-auto mb-4 flex items-center justify-center">
                      <FileText className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-nethead text-xl font-black mb-2 text-gray-900">Detailed Analysis</h3>
                    <p className="font-akzidenz text-sm text-gray-600 font-black">
                      Context and impact of each initiative conducted
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center p-6 border-0 shadow-lg hover-lift">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-teia-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                      <FileText className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-nethead text-xl font-black mb-2 text-gray-900">Future Vision</h3>
                    <p className="font-akzidenz text-sm text-gray-600 font-black">
                      Perspectives and plans for the years ahead
                    </p>
                  </CardContent>
                </Card>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-32 bg-gradient-to-br from-teia-purple/5 via-white to-teia-green/5">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="scale" delay={200}>
            <div className="text-center max-w-3xl mx-auto">
              <Card className="p-12 bg-white border-0 shadow-xl hover-lift">
                <CardContent>
                  <div className="w-16 h-16 bg-teia-purple rounded-full mx-auto mb-8 flex items-center justify-center animate-pulse-slow">
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-nethead text-3xl font-black mb-6 text-gray-900">
                    {t("reports.cta.title") || "Receba nossos relatórios em primeira mão"}
                  </h3>
                  <p className="font-akzidenz text-lg text-gray-700 mb-8 font-black leading-relaxed">
                    {t("reports.cta.description") ||
                      "Inscreva-se em nossa newsletter e seja o primeiro a receber nossos estudos e análises sobre comunicação democrática."}
                  </p>
                  <Button
                    size="lg"
                    className="bg-teia-purple hover:bg-purple-800 text-white px-8 py-4 font-akzidenz font-black transition-all duration-500 hover-lift hover-glow hover:scale-105"
                    onClick={() => (window.location.href = "/newsletter")}
                  >
                    {t("reports.cta.button") || "Inscrever-se na newsletter"}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  )
}
