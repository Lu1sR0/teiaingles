"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Video, Mic, Share2, FileText, Palette, Target, ArrowRight, Upload } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { ScrollAnimation } from "@/components/scroll-animations"
import { FloatingParticles } from "@/components/floating-particles"

export default function OrcamentoPage() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    phone: "",
    services: [] as string[],
    description: "",
    timeline: "",
    budget: "",
  })

  const services = [
    {
      id: "video",
      name: t("budget.services.list.video") || "Produção de vídeos",
      icon: Video,
      color: "text-teia-purple",
    },
    {
      id: "podcast",
      name: t("budget.services.list.podcast") || "Gravação de podcasts/videocasts",
      icon: Mic,
      color: "text-teia-green",
    },
    {
      id: "social-media",
      name: t("budget.services.list.socialMedia") || "Gestão de redes sociais",
      icon: Share2,
      color: "text-teia-purple",
    },
    {
      id: "press",
      name: t("budget.services.list.press") || "Assessoria de imprensa",
      icon: FileText,
      color: "text-teia-green",
    },
    {
      id: "design",
      name: t("budget.services.list.design") || "Design gráfico e identidade visual",
      icon: Palette,
      color: "text-teia-purple",
    },
    {
      id: "strategy",
      name: t("budget.services.list.strategy") || "Estratégia de comunicação",
      icon: Target,
      color: "text-teia-green",
    },
  ]

  const handleServiceChange = (serviceId: string, checked: boolean) => {
    if (checked) {
      setFormData({ ...formData, services: [...formData.services, serviceId] })
    } else {
      setFormData({ ...formData, services: formData.services.filter((s) => s !== serviceId) })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Budget request submitted:", formData)
    alert(t("budget.form.successMessage") || "Solicitação enviada! Entraremos em contato em breve.")
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section Ultra-Moderno */}
      <section className="relative bg-teia-green text-white py-32 overflow-hidden">
        <FloatingParticles count={25} />

        {/* Elemento tipográfico gigante animado */}
        <div className="absolute right-0 top-0 w-1/2 h-full flex items-center justify-end pr-10">
          <div className="font-nethead text-[200px] font-black opacity-15 leading-none transform rotate-12 animate-pulse-slow">
            $$
          </div>
        </div>

        {/* Partículas flutuantes */}
        <div className="absolute top-20 left-20 w-3 h-3 bg-white/30 rounded-full animate-float"></div>
        <div className="absolute top-40 left-32 w-2 h-2 bg-white/20 rounded-full animate-float delay-200"></div>
        <div className="absolute top-60 left-16 w-4 h-4 bg-white/25 rounded-full animate-float delay-400"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <ScrollAnimation animation="slide-left" delay={200}>
              <div className="flex items-center gap-6 mb-12">
                <div className="w-20 h-1 bg-white"></div>
                <span className="font-akzidenz text-sm font-black uppercase tracking-[0.3em] opacity-80">
                  {t("budget.subtitle")}
                </span>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="reveal" delay={400}>
              <h1 className="font-nethead text-6xl md:text-8xl font-black mb-8 leading-none tracking-tight">
                {t("budget.title").toUpperCase()}
              </h1>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-right" delay={600}>
              <p className="font-akzidenz text-xl leading-relaxed opacity-90 font-black max-w-3xl">
                {t("budget.subtitle")}
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* O que oferecemos - CORRIGIDO com os serviços exatos */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="scale" delay={200}>
            <div className="text-center mb-16">
              <h2 className="font-nethead text-5xl font-black mb-8 text-gray-900">
                {t("budget.services.title") || "O QUE OFERECEMOS"}
              </h2>
              <p className="font-akzidenz text-xl font-black text-gray-600 leading-relaxed max-w-4xl mx-auto">
                {t("budget.services.description") ||
                  "A Teia de Criadores oferece serviços de comunicação com propósito. Atendemos pessoas físicas, organizações, coletivos, campanhas e lideranças que buscam conteúdo estratégico, com qualidade e impacto, alinhado aos direitos humanos e à justiça social."}
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <ScrollAnimation key={service.id} animation="scale" delay={index * 100 + 400}>
                <Card className="p-8 border-0 shadow-xl hover-lift transition-all duration-500 hover:shadow-2xl group bg-white">
                  <CardContent className="p-0 text-center">
                    <div
                      className={`w-20 h-20 ${
                        service.color === "text-teia-purple" ? "bg-teia-purple" : "bg-teia-green"
                      } rounded-full mx-auto mb-6 flex items-center justify-center transition-all duration-300 group-hover:scale-110`}
                    >
                      <service.icon className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="font-nethead text-xl font-black mb-4 text-gray-900 group-hover:text-teia-purple transition-colors duration-300">
                      {service.name}
                    </h3>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation animation="reveal" delay={800}>
            <Card className="p-12 bg-gradient-to-r from-teia-green/5 to-teia-purple/5 border-0 shadow-xl hover-lift">
              <CardContent className="p-0 text-center">
                <p className="font-akzidenz text-xl text-gray-700 font-black leading-relaxed">
                  {t("budget.services.commitment") ||
                    "Nosso time combina técnica, escuta e engajamento para entregar materiais que fortalecem narrativas, mobilizam audiências e conectam causas às pessoas certas."}
                </p>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </section>

      {/* Formulário */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="scale" delay={200}>
            <Card className="max-w-5xl mx-auto border-0 shadow-xl bg-white">
              <CardHeader className="p-12 text-center">
                <div className="w-24 h-24 bg-teia-green rounded-full mx-auto mb-8 flex items-center justify-center">
                  <FileText className="h-12 w-12 text-white" />
                </div>
                <CardTitle className="font-nethead text-4xl font-black text-gray-900 mb-4">
                  {t("budget.form.title")}
                </CardTitle>
                <CardDescription className="font-akzidenz text-xl font-black text-gray-600">
                  {t("budget.form.description")}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-12">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="name" className="font-akzidenz font-black text-gray-700">
                        {t("budget.form.fields.name")} *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="border-2 border-gray-200 focus:border-teia-green font-akzidenz font-black py-3"
                        required
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="email" className="font-akzidenz font-black text-gray-700">
                        {t("budget.form.fields.email")} *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="border-2 border-gray-200 focus:border-teia-green font-akzidenz font-black py-3"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="organization" className="font-akzidenz font-black text-gray-700">
                        {t("budget.form.fields.organization")}
                      </Label>
                      <Input
                        id="organization"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="border-2 border-gray-200 focus:border-teia-green font-akzidenz font-black py-3"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="phone" className="font-akzidenz font-black text-gray-700">
                        {t("budget.form.fields.phone")}
                      </Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="border-2 border-gray-200 focus:border-teia-green font-akzidenz font-black py-3"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Label className="font-akzidenz font-black text-gray-700">
                      {t("budget.form.fields.services")} *
                    </Label>
                    <div className="grid md:grid-cols-2 gap-4">
                      {services.map((service) => (
                        <div
                          key={service.id}
                          className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover-lift transition-all duration-300"
                        >
                          <Checkbox
                            id={service.id}
                            checked={formData.services.includes(service.id)}
                            onCheckedChange={(checked) => handleServiceChange(service.id, checked as boolean)}
                            className="border-2 border-gray-300"
                          />
                          <Label htmlFor={service.id} className="font-akzidenz font-black text-gray-700 cursor-pointer">
                            {service.name}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="description" className="font-akzidenz font-black text-gray-700">
                      {t("budget.form.fields.description")} *
                    </Label>
                    <Textarea
                      id="description"
                      placeholder={t("budget.form.fields.descriptionPlaceholder")}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="border-2 border-gray-200 focus:border-teia-green font-akzidenz font-black min-h-[150px]"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="timeline" className="font-akzidenz font-black text-gray-700">
                        {t("budget.form.fields.timeline")}
                      </Label>
                      <Input
                        id="timeline"
                        placeholder={t("budget.form.fields.timelinePlaceholder")}
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="border-2 border-gray-200 focus:border-teia-green font-akzidenz font-black py-3"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="budget" className="font-akzidenz font-black text-gray-700">
                        {t("budget.form.fields.budget")}
                      </Label>
                      <Input
                        id="budget"
                        placeholder={t("budget.form.fields.budgetPlaceholder")}
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="border-2 border-gray-200 focus:border-teia-green font-akzidenz font-black py-3"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label className="font-akzidenz font-black text-gray-700">
                      {t("budget.form.attachments.title")}
                    </Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-teia-green transition-colors duration-300 hover-lift">
                      <Upload className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                      <p className="font-akzidenz font-black text-gray-500 text-lg mb-2">
                        {t("budget.form.attachments.description")}
                      </p>
                      <p className="font-akzidenz font-black text-gray-400 text-sm">
                        {t("budget.form.attachments.formats")}
                      </p>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-teia-green hover:bg-green-700 text-white py-4 text-xl font-akzidenz font-black transition-all duration-300 hover-lift hover-glow hover:scale-105 group"
                  >
                    <Target className="mr-3 h-6 w-6" />
                    {t("budget.form.submit")}
                    <ArrowRight className="ml-3 h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </section>

      {/* Compromisso */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <ScrollAnimation animation="scale" delay={200}>
              <Card className="p-16 bg-gradient-to-br from-teia-green/5 to-teia-purple/5 border-0 shadow-xl hover-lift">
                <CardContent className="p-0">
                  <div className="w-32 h-32 bg-teia-purple rounded-full mx-auto mb-12 flex items-center justify-center animate-pulse-slow">
                    <Target className="h-16 w-16 text-white" />
                  </div>
                  <h3 className="font-nethead text-4xl font-black mb-8 text-gray-900">
                    {t("budget.commitment.title")}
                  </h3>
                  <p className="font-akzidenz text-2xl text-gray-700 font-black leading-relaxed">
                    {t("budget.commitment.description")}
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
  )
}
