import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BookOpen, FileText, Github, Linkedin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen max-w-[100vw] overflow-x-hidden">
      <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="font-bold text-lg text-primary navbar-title">
            Avnish Singh
          </Link>
          <nav className="ml-auto hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/research" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="/publications" className="text-sm font-medium hover:text-primary transition-colors">
              Publications
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
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
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4 animate-in">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">NIT Raipur</div>
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Avnish Singh</h1>
                  <p className="text-xl text-muted-foreground md:text-2xl">Junior Research Fellow</p>
                </div>
                <div className="space-y-4 text-gray-500 dark:text-gray-300">
                  <p className="text-lg">
                    Machine Learning Researcher with experience in graph neural networks (GNNs), anomaly detection, and
                    advanced data analysis.
                  </p>
                  <p>
                    Currently investigating GNN architectures for improvising graph representational learning for
                    provenance graphs, improving advanced persistent threat detection.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                  <Link href="/research">
                    <Button className="w-full" size="lg">
                      Explore Projects
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline" className="w-full" size="lg">
                      Contact Me
                    </Button>
                  </Link>
                </div>
                <div className="flex gap-4 pt-2">
                  <a href="https://github.com/avnishs17" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </a>
                  <a href="https://linkedin.com/in/avnishsingh17" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-md">
                  <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary/20 to-primary/10 blur-lg"></div>
                  <Image
                    alt="Avnish Singh"
                    className="relative rounded-xl object-cover shadow-xl"
                    height={600}
                    width={500}
                    src="/images/profile-photo.png"
                    priority
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 section-pattern">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 max-w-[800px]">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Current Research
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Research Highlights</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Professional research and projects in machine learning and graph neural networks.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:gap-12">
              <Link href="/research" className="group">
                <div className="flex flex-col space-y-4 card-hover rounded-xl border p-6 bg-card h-full">
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">GNN Architectures for APT Detection</h3>
                  <p className="text-muted-foreground">
                    Investigating graph neural network architectures for improving advanced persistent threat detection
                    through classification of malicious nodes.
                  </p>
                  <div className="aspect-video overflow-hidden rounded-lg mt-2">
                    <Image
                      alt="GNN research visualization"
                      className="object-cover w-full h-full transition-transform group-hover:scale-105"
                      height={180}
                      width={320}
                      src="/images/gnn-research.png"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex items-center text-sm font-medium text-primary mt-auto">
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
              <Link href="/research" className="group">
                <div className="flex flex-col space-y-4 card-hover rounded-xl border p-6 bg-card h-full">
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <FileText className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Paranoid Schizophrenia Classification</h3>
                  <p className="text-muted-foreground">
                    Developed a hybrid GCN-LSTM model achieving 97% accuracy in classifying paranoid schizophrenia from
                    EEG brain data.
                  </p>
                  <div className="aspect-video overflow-hidden rounded-lg mt-2">
                    <Image
                      alt="EEG brain scan visualization"
                      className="object-cover w-full h-full transition-transform group-hover:scale-105"
                      height={180}
                      width={320}
                      src="/images/eeg-brain.png"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex items-center text-sm font-medium text-primary mt-auto">
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 max-w-[800px]">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Academic Work
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Recent Publications</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Selected papers published in peer-reviewed journals.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12">
              <a
                href="https://doi.org/10.1016/j.bspc.2025.107657"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="flex flex-col space-y-2 rounded-xl border p-6 card-hover bg-card">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      GCN-LSTM: A Hybrid Graph Convolutional Network Model for Schizophrenia Classification
                    </h3>
                    <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">2025</span>
                  </div>
                  <p className="text-sm text-primary font-medium">
                    Biomedical Signal Processing and Control, vol. 105, Article 107657
                  </p>
                  <p className="text-muted-foreground">
                    Gosala, Bethany, Avnish R. Singh, Himanshu Tiwari, and Manjari Gupta. This paper presents a hybrid
                    GCN-LSTM model for schizophrenia classification.
                  </p>
                  <div className="flex items-center text-sm font-medium text-primary mt-2">
                    Read paper
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </a>
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
