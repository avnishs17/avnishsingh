"use client"

import { useState, useEffect, useRef, Suspense } from "react"
import { ChevronDown } from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { PageSkeleton } from "@/components/loading-skeleton"

// Lazy load project content components
import dynamic from "next/dynamic"

const ProfessionalResearch = dynamic(() => import("@/components/projects/professional-research"), {
  loading: () => <div className="animate-pulse h-64 w-full bg-muted rounded-xl"></div>,
  ssr: false,
})

const AcademicProjects = dynamic(() => import("@/components/projects/academic-projects"), {
  loading: () => <div className="animate-pulse h-64 w-full bg-muted rounded-xl"></div>,
  ssr: false,
})

const PersonalProjects = dynamic(() => import("@/components/projects/personal-projects"), {
  loading: () => <div className="animate-pulse h-64 w-full bg-muted rounded-xl"></div>,
  ssr: false,
})

export default function ResearchPage() {
  const [activeTab, setActiveTab] = useState("professional")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [contentVisible, setContentVisible] = useState(false)
  const [isClient, setIsClient] = useState(false)

  // Set isClient to true once component mounts
  useEffect(() => {
    setIsClient(true)
    setContentVisible(true)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Control content visibility based on dropdown state
  useEffect(() => {
    if (isDropdownOpen) {
      setContentVisible(false)
    } else {
      // Small delay to allow dropdown to close before showing content
      const timer = setTimeout(() => {
        setContentVisible(true)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [isDropdownOpen])

  const projectCategories = {
    professional: "Professional Research",
    academic: "Academic Projects",
    personal: "Personal Projects",
  }

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
    setIsDropdownOpen(false)
    // Small delay to ensure smooth transition
    setTimeout(() => {
      setContentVisible(true)
    }, 300)
  }

  if (!isClient) {
    return <PageSkeleton />
  }

  return (
    <div className="flex flex-col min-h-screen max-w-[100vw] overflow-x-hidden">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <a href="/" className="font-bold text-lg text-primary navbar-title">
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
      <main className="flex-1 w-full">
        <section className="w-full py-12 md:py-24 lg:py-32 gradient-bg">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 max-w-[800px] animate-in">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Research Portfolio
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projects & Research</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Professional research, academic work, and personal projects in machine learning and data science.
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-5xl py-12">
              {/* Project category dropdown for mobile */}
              <div className="md:hidden relative z-40 mb-8" ref={dropdownRef}>
                <button
                  className="flex justify-between items-center w-full p-4 bg-card border rounded-lg shadow-sm"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  aria-haspopup="true"
                  aria-expanded={isDropdownOpen}
                >
                  <span className="font-medium">{projectCategories[activeTab as keyof typeof projectCategories]}</span>
                  <ChevronDown className={`h-5 w-5 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
                </button>

                {isDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-card border rounded-lg shadow-lg overflow-hidden z-50">
                    {Object.entries(projectCategories).map(([key, value]) => (
                      <button
                        key={key}
                        className={`w-full text-left p-4 hover:bg-muted transition-colors ${
                          activeTab === key ? "bg-primary/10 font-medium" : ""
                        }`}
                        onClick={() => handleTabChange(key)}
                      >
                        {value}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Desktop tabs */}
              <div className="hidden md:flex bg-card border rounded-lg overflow-hidden mb-8">
                {Object.entries(projectCategories).map(([key, value]) => (
                  <button
                    key={key}
                    className={`flex-1 py-3 px-4 text-center font-medium transition-colors ${
                      activeTab === key ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                    }`}
                    onClick={() => setActiveTab(key)}
                  >
                    {value}
                  </button>
                ))}
              </div>

              {/* Content area - only show when dropdown is closed */}
              <div className={`transition-opacity duration-300 ${contentVisible ? "opacity-100" : "opacity-0"}`}>
                <Suspense fallback={<div className="animate-pulse h-64 w-full bg-muted rounded-xl"></div>}>
                  {activeTab === "professional" && <ProfessionalResearch />}
                  {activeTab === "academic" && <AcademicProjects />}
                  {activeTab === "personal" && <PersonalProjects />}
                </Suspense>
              </div>
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
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/avnishsingh17"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
