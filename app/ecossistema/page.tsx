"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Users,
  Video,
  Mic,
  Share2,
  FileText,
  Palette,
  Target,
  ArrowRight,
  Handshake,
  Sparkles,
  CheckCircle2,
  Radio,
  Zap,
  Heart,
  Network,
  TrendingUp,
  Award,
  Briefcase,
  MessageSquare,
  Lightbulb,
} from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { ScrollAnimation } from "@/components/scroll-animations"
import { FloatingParticles } from "@/components/floating-particles"

export default function EcossistemaPage() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    links: "",
    area: "",
    motivation: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert(t("ecosystem.form.successMessage") || "Form submitted! We'll be in touch soon.")
  }

  const services = [
    {
      icon: Video,
      title: "Video Production",
      description: "Scriptwriting, filming, and professional editing for social media and platforms",
      color: "bg-teia-purple",
      gradient: "from-teia-purple to-purple-700",
    },
    {
      icon: Mic,
      title: "Podcasts and Videocasts",
      description: "Complete studio with professional equipment and post-production",
      color: "bg-teia-green",
      gradient: "from-teia-green to-green-600",
    },
    {
      icon: Share2,
      title: "Social Media Management",
      description: "Strategy, content creation, and complete digital presence management",
      color: "bg-teia-purple",
      gradient: "from-teia-purple to-purple-700",
    },
    {
      icon: FileText,
      title: "Press Relations",
      description: "Press release production, media relationships, and crisis management",
      color: "bg-teia-green",
      gradient: "from-teia-green to-green-600",
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Visual identity, graphic materials, and social media design",
      color: "bg-teia-purple",
      gradient: "from-teia-purple to-purple-700",
    },
    {
      icon: Target,
      title: "Communication Strategy",
      description: "Strategic planning, data analysis, and results optimization",
      color: "bg-teia-green",
      gradient: "from-teia-green to-green-600",
    },
  ]

  const benefits = [
    {
      icon: Radio,
      title: "Studio Access",
      description: "Use our equipped studios in downtown BH for your recordings",
      color: "from-purple-500 to-purple-700",
    },
    {
      icon: Network,
      title: "Collaborative Network",
      description: "Connect with other committed creators and organizations",
      color: "from-teia-green to-green-700",
    },
    {
      icon: Zap,
      title: "Technical Support",
      description: "Support in production, editing, design, and content strategy",
      color: "from-purple-500 to-purple-700",
    },
    {
      icon: Lightbulb,
      title: "Trainings",
      description: "Training in digital communication and content production",
      color: "from-teia-green to-green-700",
    },
    {
      icon: TrendingUp,
      title: "Collective Campaigns",
      description: "Participate in strategic campaigns with social impact",
      color: "from-purple-500 to-purple-700",
    },
    {
      icon: Award,
      title: "Active Community",
      description: "Be part of a community engaged in social transformation",
      color: "from-teia-green to-green-700",
    },
  ]

  const stats = [
    {
      icon: Users,
      value: "20+",
      label: "Active Creators",
      color: "from-teia-purple to-purple-700",
    },
    {
      icon: Video,
      value: "2",
      label: "Equipped Studios",
      color: "from-teia-green to-green-700",
    },
    {
      icon: Target,
      value: "10+",
      label: "Campaigns Conducted",
      color: "from-purple-500 to-purple-700",
    },
  ]

  const areas = [
    { value: "direitos-humanos", label: "Human Rights" },
    { value: "cultura", label: "Culture" },
    { value: "educacao", label: "Education" },
    { value: "meio-ambiente", label: "Environment" },
    { value: "politica", label: "Politics" },
    { value: "tecnologia", label: "Technology" },
    { value: "juventude", label: "Youth" },
    { value: "feminismo", label: "Feminism" },
    { value: "diversidade", label: "Diversity" },
    { value: "outro", label: "Other" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Section Ultra-Moderno */}
      <section className="relative bg-gradient-to-br from-teia-purple via-purple-700 to-teia-purple text-white py-32 overflow-hidden">
        <FloatingParticles count={30} />

        {/* Elementos decorativos */}
        <div className="absolute right-0 top-0 w-1/2 h-full flex items-center justify-end pr-20 opacity-10">
          <div className="font-nethead text-[400px] font-black leading-none animate-pulse-slow">ECO</div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollAnimation animation="scale" delay={200}>
              <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-8 flex items-center justify-center backdrop-blur-sm border-2 border-white/30">
                <Network className="h-12 w-12 text-white" />
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="reveal" delay={400}>
              <h1 className="font-nethead text-6xl md:text-8xl font-black mb-8 leading-none">
                JOIN OUR ECOSYSTEM
              </h1>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={600}>
              <p className="font-akzidenz text-2xl leading-relaxed opacity-95 font-black max-w-3xl mx-auto mb-12">
                Join our network of creators and communicators committed to social transformation
              </p>
            </ScrollAnimation>

            <ScrollAnimation animation="bounce" delay={800}>
              <div className="flex flex-wrap gap-4 justify-center">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="px-8 py-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover-lift"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center`}
                      >
                        <stat.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="text-left">
                        <div className="font-nethead text-2xl font-black">{stat.value}</div>
                        <div className="font-akzidenz text-sm font-black opacity-80">{stat.label}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="reveal">
            <div className="text-center max-w-4xl mx-auto mb-20">
              <h2 className="font-nethead text-5xl md:text-7xl font-black mb-8 text-gray-900">
                HOW OUR NETWORK WORKS
              </h2>
              <p className="font-akzidenz text-xl text-gray-600 font-black leading-relaxed">
                A collaborative ecosystem where creators, communicators, and organizations strengthen each other mutually
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
            {[
              {
                number: "01",
                title: "Application",
                description:
                  "Fill out the form telling us about yourself, your work, and how you want to contribute to the network",
                icon: Briefcase,
                color: "from-teia-purple to-purple-700",
              },
              {
                number: "02",
                title: "Evaluation",
                description:
                  "Our team analyzes your profile and alignment with human rights and social justice values",
                icon: CheckCircle2,
                color: "from-teia-green to-green-700",
              },
              {
                number: "03",
                title: "Integration",
                description: "Welcome to Teia! Access our resources, participate in trainings, and collaborate on campaigns",
                icon: Sparkles,
                color: "from-purple-500 to-purple-700",
              },
            ].map((step, index) => (
              <ScrollAnimation key={index} animation="scale" delay={index * 200 + 400}>
                <Card className="relative overflow-hidden border-0 shadow-xl hover-lift group h-full bg-white">
                  <div className="absolute top-0 right-0 font-nethead text-[120px] font-black text-gray-50 leading-none group-hover:text-gray-100 transition-colors duration-300">
                    {step.number}
                  </div>
                  <CardContent className="p-8 relative z-10">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-nethead text-2xl font-black mb-4 text-gray-900">{step.title}</h3>
                    <p className="font-akzidenz text-base text-gray-600 font-black leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-32 bg-gradient-to-br from-teia-purple/5 via-white to-teia-green/5">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="reveal">
            <div className="text-center max-w-4xl mx-auto mb-20">
                <h2 className="font-nethead text-5xl md:text-7xl font-black mb-8 text-gray-900">WHAT YOU GET</h2>
                <p className="font-akzidenz text-xl text-gray-600 font-black leading-relaxed">
                Resources, support, and community to amplify your impact
                </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <ScrollAnimation key={index} animation="scale" delay={index * 100 + 400}>
                <Card className="border-0 shadow-lg hover-lift group bg-white h-full overflow-hidden">
                  <CardContent className="p-8">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                    >
                      <benefit.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-nethead text-xl font-black mb-3 text-gray-900 group-hover:text-teia-green transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="font-akzidenz text-base text-gray-600 font-black leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="reveal">
            <div className="text-center max-w-4xl mx-auto mb-20">
              <h2 className="font-nethead text-5xl md:text-7xl font-black mb-8 text-gray-900">OUR SERVICES</h2>
              <p className="font-akzidenz text-xl text-gray-600 font-black leading-relaxed">
                Professional content production with purpose and social impact
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <ScrollAnimation key={index} animation="scale" delay={index * 100 + 400}>
                <Card className="border-0 shadow-xl hover-lift group overflow-hidden h-full bg-white">
                  <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
                  <CardContent className="p-8">
                    <div
                      className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-nethead text-xl font-black mb-3 text-gray-900">{service.title}</h3>
                    <p className="font-akzidenz text-base text-gray-600 font-black leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário Redesenhado */}
      <section className="py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="scale" delay={200}>
            <Card className="max-w-4xl mx-auto border-0 shadow-2xl bg-white overflow-hidden">
              {/* Header do Card */}
              <div className="bg-gradient-to-r from-teia-purple to-purple-700 p-12 text-white text-center relative overflow-hidden">
                <FloatingParticles count={15} />
                  <div className="relative z-10">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mx-auto mb-6 flex items-center justify-center border-2 border-white/30">
                    <MessageSquare className="h-10 w-10 text-white" />
                  </div>
                  <h2 className="font-nethead text-4xl md:text-5xl font-black mb-4">APPLY TO JOIN OUR NETWORK</h2>
                  <p className="font-akzidenz text-lg font-black opacity-95 max-w-2xl mx-auto">
                    Fill out the form and tell us about yourself and your work
                  </p>
                </div>
              </div>

              <CardContent className="p-12">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <Label htmlFor="name" className="font-akzidenz font-black text-gray-700 text-base">
                        Full name *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="border-2 border-gray-200 focus:border-teia-purple font-akzidenz font-black py-6 text-base rounded-xl transition-all duration-300"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="email" className="font-akzidenz font-black text-gray-700 text-base">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="border-2 border-gray-200 focus:border-teia-purple font-akzidenz font-black py-6 text-base rounded-xl transition-all duration-300"
                        placeholder="you@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="area" className="font-akzidenz font-black text-gray-700 text-base">
                      Primary area *
                    </Label>
                    <Select value={formData.area} onValueChange={(value) => setFormData({ ...formData, area: value })}>
                      <SelectTrigger className="border-2 border-gray-200 focus:border-teia-purple font-akzidenz font-black py-6 text-base rounded-xl">
                        <SelectValue placeholder="Select your main area" />
                      </SelectTrigger>
                      <SelectContent className="font-akzidenz font-black">
                        {areas.map((area) => (
                          <SelectItem key={area.value} value={area.value} className="py-3">
                            {area.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="links" className="font-akzidenz font-black text-gray-700 text-base">
                      Links (social media, portfolio)
                    </Label>
                    <Textarea
                      id="links"
                      placeholder="Paste links to your social profiles, portfolio, or other relevant materials here"
                      value={formData.links}
                      onChange={(e) => setFormData({ ...formData, links: e.target.value })}
                      className="border-2 border-gray-200 focus:border-teia-purple font-akzidenz font-black min-h-[120px] text-base rounded-xl"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="motivation" className="font-akzidenz font-black text-gray-700 text-base">
                      Why do you want to join Teia? *
                    </Label>
                    <Textarea
                      id="motivation"
                      placeholder="Tell us about your motivation, your projects, and how you'd like to contribute to our ecosystem"
                      value={formData.motivation}
                      onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                      className="border-2 border-gray-200 focus:border-teia-purple font-akzidenz font-black min-h-[200px] text-base rounded-xl"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-teia-purple to-purple-700 hover:from-teia-green hover:to-green-600 text-white py-6 text-xl font-akzidenz font-black transition-all duration-500 hover-lift hover-glow hover:scale-105 group rounded-xl shadow-xl"
                  >
                    <Handshake className="mr-3 h-6 w-6" />
                    Submit Application
                    <ArrowRight className="ml-3 h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>

                  <p className="text-center text-sm text-gray-500 font-akzidenz font-black">
                    By submitting, you agree that your data may be used to evaluate your application
                  </p>
                </form>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teia-green via-green-600 to-teia-green"></div>
        <FloatingParticles count={20} />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto text-white">
            <ScrollAnimation animation="scale" delay={200}>
              <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full mx-auto mb-8 flex items-center justify-center animate-pulse-slow border-2 border-white/30">
                <Heart className="h-12 w-12 text-white" />
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="reveal" delay={400}>
              <h2 className="font-nethead text-5xl md:text-7xl font-black mb-8">LET'S BUILD TOGETHER</h2>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={600}>
              <p className="font-akzidenz text-2xl font-black leading-relaxed opacity-95 max-w-3xl mx-auto">
              More democratic, plural communication committed to social transformation
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
  )
}
