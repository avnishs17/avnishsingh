"use client"

import Image from "next/image"
import { Award, BookOpen, GraduationCap, Github, Linkedin, Download } from "lucide-react"

import { MobileNav } from "@/components/mobile-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  const handleCVDownload = () => {
    window.open("https://drive.google.com/file/d/1--_sk-XyEI0o-pmTvEN0gCHOTGg53qBT/view?usp=sharing", "_blank")
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
            <div className="grid gap-10 md:grid-cols-2 lg:gap-12">
              <div className="animate-in order-2 md:order-1">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                  About Me
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
                  Machine Learning Researcher
                </h1>
                <div className="space-y-4 text-gray-500 dark:text-gray-400">
                  <p className="text-lg">
                    I am a Junior Research Fellow at NIT Raipur with experience in graph neural networks (GNNs), anomaly
                    detection, and advanced data analysis. My research focuses on developing hybrid models and
                    investigating GNN architectures for improving advanced persistent threat detection.
                  </p>
                  <p>
                    With a background in computational science and data science, I bring a unique interdisciplinary
                    perspective to my research. I am particularly interested in using graph neural networks for
                    classification tasks and anomaly detection.
                  </p>
                  <p>
                    I have experience in developing hybrid models such as GCN-LSTM for classification tasks, achieving
                    an accuracy of 97% in the detection of paranoid schizophrenia using EEG data. My work has been
                    published in Biomedical Signal Processing and Control.
                  </p>
                  <p>
                    I am passionate about leveraging AI/ML to solve real-world problems in threat detection, healthcare,
                    and beyond.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Button onClick={handleCVDownload} className="flex items-center gap-2" variant="outline">
                    <Download className="h-4 w-4" />
                    <span>Download CV</span>
                  </Button>
                  <div className="flex gap-3">
                    <a href="https://github.com/avnishs17" target="_blank" rel="noopener noreferrer">
                      <div className="flex items-center gap-2 p-2 rounded-lg border hover:bg-muted transition-colors">
                        <Github className="h-5 w-5" />
                        <span>GitHub</span>
                      </div>
                    </a>
                    <a href="https://linkedin.com/in/avnishsingh17" target="_blank" rel="noopener noreferrer">
                      <div className="flex items-center gap-2 p-2 rounded-lg border hover:bg-muted transition-colors">
                        <Linkedin className="h-5 w-5" />
                        <span>LinkedIn</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-8 order-1 md:order-2">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary/20 to-primary/10 blur-lg"></div>
                  <Image
                    alt="Avnish Singh"
                    className="relative rounded-xl object-cover shadow-xl"
                    height={600}
                    width={500}
                    src="/images/profile-photo.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-start gap-4 card-hover rounded-xl border p-6 bg-card">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Education</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium">M.Sc. Computational Science and Applications (Data Science)</p>
                      <p className="text-sm text-muted-foreground">Banaras Hindu University (2022-2024)</p>
                    </div>
                    <div>
                      <p className="font-medium">B.Sc. in Computer Science</p>
                      <p className="text-sm text-muted-foreground">DG Ruparel College, Mumbai University (2019-2022)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 card-hover rounded-xl border p-6 bg-card">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Certifications</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium">Machine Learning Specialization</p>
                      <p className="text-sm text-muted-foreground">Coursera (DeepLearning.AI)</p>
                    </div>
                    <div>
                      <p className="font-medium">Programming for Data Science with Python</p>
                      <p className="text-sm text-muted-foreground">Udacity Bertelsmann Nanodegree</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 card-hover rounded-xl border p-6 bg-card">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <BookOpen className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Research Interests</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                      <span>Graph Neural Networks</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                      <span>Anomaly Detection</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                      <span>Advanced Persistent Threat Detection</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                      <span>Machine Learning in Healthcare</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2 max-w-[800px]">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Technical Expertise
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills</h2>
              </div>
            </div>
            <div className="mx-auto max-w-5xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="card-hover rounded-xl border p-6 bg-card">
                  <h3 className="text-xl font-bold mb-4">Programming Languages</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-muted">
                      <span className="font-medium">Python</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-muted">
                      <span className="font-medium">MySQL</span>
                    </div>
                  </div>
                </div>
                <div className="card-hover rounded-xl border p-6 bg-card">
                  <h3 className="text-xl font-bold mb-4">Tools & Frameworks</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-muted">
                      <span className="font-medium">PyTorch</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-muted">
                      <span className="font-medium">TensorFlow</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-muted">
                      <span className="font-medium">Scikit-learn</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-muted">
                      <span className="font-medium">Pandas</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-muted">
                      <span className="font-medium">Docker</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-muted">
                      <span className="font-medium">Kubernetes</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-muted">
                      <span className="font-medium">Ubuntu</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-muted">
                      <span className="font-medium">Kali Linux</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-muted">
                      <span className="font-medium">Other Python ML Libraries</span>
                    </div>
                  </div>
                </div>
                <div className="card-hover rounded-xl border p-6 bg-card">
                  <h3 className="text-xl font-bold mb-4">Areas of Expertise</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">Machine Learning</span>
                        <span className="text-sm text-muted-foreground">90%</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: "90%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">Deep Learning</span>
                        <span className="text-sm text-muted-foreground">85%</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">Data Analysis</span>
                        <span className="text-sm text-muted-foreground">88%</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: "88%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">Anomaly Detection</span>
                        <span className="text-sm text-muted-foreground">82%</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: "82%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">APT Detection</span>
                        <span className="text-sm text-muted-foreground">80%</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: "80%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-hover rounded-xl border p-6 bg-card">
                  <h3 className="text-xl font-bold mb-4">Soft Skills</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">Problem-Solving</span>
                        <span className="text-sm text-muted-foreground">92%</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: "92%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">Team Collaboration</span>
                        <span className="text-sm text-muted-foreground">85%</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">Research Methodology</span>
                        <span className="text-sm text-muted-foreground">88%</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: "88%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">Communication</span>
                        <span className="text-sm text-muted-foreground">84%</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: "84%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
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
