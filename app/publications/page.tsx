import { ArrowUpRight, FileText, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MobileNav } from "@/components/mobile-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export default function PublicationsPage() {
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
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Academic Work
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Publications</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Peer-reviewed journal articles and research papers.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
                <h2 className="text-2xl font-bold">Journal Articles</h2>
                <div className="flex w-full md:w-auto gap-2">
                  <div className="relative w-full md:w-auto">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search publications..."
                      className="w-full md:w-[200px] pl-8 rounded-lg"
                    />
                  </div>
                  <Button variant="outline">Filter</Button>
                </div>
              </div>
              <div className="grid gap-6">
                <Card className="card-hover border-0 shadow-lg overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start">
                      <CardTitle>
                        GCN-LSTM: A Hybrid Graph Convolutional Network Model for Schizophrenia Classification
                      </CardTitle>
                      <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                        2025
                      </span>
                    </div>
                    <CardDescription className="text-primary font-medium">
                      Biomedical Signal Processing and Control, vol. 105, Article 107657
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <FileText className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Authors</p>
                        <p className="text-sm text-muted-foreground">
                          Gosala, Bethany, Avnish R. Singh, Himanshu Tiwari, and Manjari Gupta
                        </p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-sm">
                        This paper presents a hybrid Graph Convolutional Network-Long Short-Term Memory (GCN-LSTM) model
                        for the classification of schizophrenia from electroencephalogram (EEG) data. The model achieves
                        97% accuracy in detecting paranoid schizophrenia by effectively capturing both spatial and
                        temporal patterns in brain activity. Our approach demonstrates significant improvements over
                        existing methods by engineering graph representations and preprocessing pipelines for EEG
                        signals, improving model reliability by 12%.
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter className="bg-muted/30 border-t">
                    <div className="flex w-full justify-between items-center">
                      <span className="text-xs text-muted-foreground">DOI: 10.1016/j.bspc.2025.107657</span>
                      <Button variant="ghost" size="sm" className="group" asChild>
                        <a href="https://doi.org/10.1016/j.bspc.2025.107657" target="_blank" rel="noopener noreferrer">
                          <span>View Publication</span>
                          <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </a>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
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
