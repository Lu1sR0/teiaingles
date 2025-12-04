"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Mail, Bell, FileText, Users } from "lucide-react"

export default function NewsletterPage() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    interests: [] as string[],
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const interests = [
    { id: "campaigns", name: "Campaigns and projects" },
    { id: "reports", name: "Reports and research" },
    { id: "events", name: "Events and trainings" },
    { id: "creators", name: "New network creators" },
    { id: "opportunities", name: "Collaboration opportunities" },
  ]

  const handleInterestChange = (interestId: string, checked: boolean) => {
    if (checked) {
      setFormData({ ...formData, interests: [...formData.interests, interestId] })
    } else {
      setFormData({ ...formData, interests: formData.interests.filter((i) => i !== interestId) })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Newsletter subscription:", formData)
    setIsSubmitted(true)
    // Reset form after a delay
    setTimeout(() => {
      setFormData({ email: "", name: "", interests: [] })
      setIsSubmitted(false)
    }, 5000)
  }

  const benefits = [
    {
      icon: Bell,
      title: "Breaking news first",
      description: "Be the first to know about our projects and campaigns",
    },
    {
      icon: FileText,
      title: "Exclusive reports",
      description: "Early access to our studies and analysis",
    },
    {
      icon: Users,
      title: "Special invitations",
      description: "Attend events, trainings, and network meetings",
    },
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Mail className="h-16 w-16 mx-auto mb-6 text-purple-600" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Newsletter</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Receive Teia news directly to your inbox</p>
        </div>

        {/* Benefits */}
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent>
                  <benefit.icon className="h-12 w-12 mx-auto mb-4 text-purple-600" />
                  <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter Form */}
        <section>
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Subscribe</CardTitle>
              <CardDescription className="text-center">
                Stay informed about democratic communication and social transformation
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <h3 className="font-bold text-xl mb-2 text-purple-600">Thank you for subscribing!</h3>
                  <p className="text-gray-600">You will receive our updates soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="name">Name (optional)</Label>
                    <Input
                      id="name"
                      placeholder="How should we call you?"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="space-y-4">
                    <Label>Your interests (optional)</Label>
                    <div className="space-y-3">
                      {interests.map((interest) => (
                        <div key={interest.id} className="flex items-center space-x-2">
                          <Checkbox
                            id={interest.id}
                            checked={formData.interests.includes(interest.id)}
                            onCheckedChange={(checked) => handleInterestChange(interest.id, checked as boolean)}
                          />
                          <Label htmlFor={interest.id} className="text-sm font-normal">
                            {interest.name}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-purple-600 hover:bg-purple-700">
                    Subscribe to newsletter
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    By subscribing, you agree to receive emails from Teia de Criadores. You can unsubscribe at any time.
                  </p>
                </form>
              )}
            </CardContent>
          </Card>
        </section>

        {/* Additional Info */}
        <section className="mt-16 text-center">
          <Card className="p-8 bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200 max-w-2xl mx-auto">
            <CardContent>
              <h3 className="text-2xl font-bold mb-4 text-purple-800">Join our community</h3>
              <p className="text-lg text-gray-700">
                Over 1,000 people already receive our updates about democratic communication, impact campaigns,
                and social transformation opportunities.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
