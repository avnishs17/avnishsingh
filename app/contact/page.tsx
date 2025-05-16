"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MapPin, Phone, Send, Github, Linkedin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { MobileNav } from "@/components/mobile-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      // In a real application, you would send this data to your server
      console.log("Form submitted:", formData)
      toast({
        title: "Message sent successfully",
        description: "Thank you for your message. I'll get back to you soon.",
      })
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <a href="/" className="font-bold text-lg text-primary">
            Avnish Singh
          </a>
          <nav className="ml-auto hidden md:flex gap-6">
            <a href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </a>
            <a href="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </a>
            <a href="/research" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </a>
            <a href="/publications" className="text-sm font-medium hover:text-primary transition-colors">
              Publications
            </a>
            <a href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-2 ml-4">
            <ThemeToggle />
          </div>
          <div className="md:hidden ml-auto">
            <MobileNav />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 gradient-bg">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 max-w-[800px] animate-in">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Get in Touch</div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Me</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Get in touch for research collaborations, speaking engagements, or general inquiries.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 lg:grid-cols-2">
              <div className="space-y-6">
                <Card className="card-hover border-0 shadow-lg overflow-hidden">
                  <CardHeader className="pb-4">
                    <CardTitle>Contact Information</CardTitle>
                    <CardDescription>Ways to reach me directly</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Email</p>
                        <a href="mailto:avnishi708@gmail.com" className="text-sm text-primary hover:underline">
                          avnishi708@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Phone</p>
                        <a href="tel:+919136222956" className="text-sm text-primary hover:underline">
                          +91 9136222956
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Location</p>
                        <p className="text-sm text-muted-foreground">Raipur, Chhattisgarh, India</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <Github className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">GitHub</p>
                        <a
                          href="https://github.com/avnishs17"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary hover:underline"
                        >
                          github.com/avnishs17
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <Linkedin className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">LinkedIn</p>
                        <a
                          href="https://linkedin.com/in/avnishsingh17"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary hover:underline"
                        >
                          linkedin.com/in/avnishsingh17
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="card-hover border-0 shadow-lg overflow-hidden">
                  <CardHeader className="pb-4">
                    <CardTitle>Office Hours</CardTitle>
                    <CardDescription>When you can find me in the office</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-2">
                      <div className="flex justify-between py-2 border-b">
                        <p className="text-sm font-medium">Monday - Friday</p>
                        <p className="text-sm text-primary">9:00 AM - 5:00 PM</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <Card className="card-hover border-0 shadow-lg overflow-hidden">
                <CardHeader className="pb-4">
                  <CardTitle>Send a Message</CardTitle>
                  <CardDescription>Fill out the form below to get in touch</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="rounded-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        placeholder="Your email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="rounded-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Subject of your message"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="rounded-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Your message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="min-h-[150px] rounded-lg"
                      />
                    </div>
                    <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </span>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 bg-muted/50">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">© 2025 Avnish Singh. All rights reserved.</p>
          <div className="flex gap-4">

            <a
              href="https://github.com/avnishs17"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/avnishsingh17"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </a>

          </div>
        </div>
      </footer>
    </div>
  )
}
