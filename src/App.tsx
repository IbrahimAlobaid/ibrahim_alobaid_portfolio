import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { GoldParticleCanvas } from '@/components/cinematic/GoldParticleCanvas'
import { SectionReveal } from '@/components/motion/SectionReveal'
import { StaggerList } from '@/components/motion/StaggerList'
import { projects, skills } from '@/data/portfolio'
import { Calendar, ChevronDown, Cpu, Download, Github, Linkedin, Mail, MapPin, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'
import './App.css'

const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'education', 'contact']

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

function Navigation() {
  const [active, setActive] = useState('hero')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      for (const section of sections) {
        const element = document.getElementById(section)
        if (!element) continue
        const rect = element.getBoundingClientRect()
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(section)
          break
        }
      }
    }

    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'nav-scrolled' : 'bg-transparent'}`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <button onClick={() => scrollToSection('hero')} className="brand-mark">IA</button>
        <div className="hidden gap-2 md:flex">
          {sections.slice(1).map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`nav-link ${active === item ? 'active' : ''}`}
            >
              {item}
            </button>
          ))}
        </div>
        <Button className="gold-button" onClick={() => scrollToSection('contact')}>Let&apos;s Talk</Button>
      </div>
    </nav>
  )
}

function HeroSection() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="cinematic-backdrop" />
      <GoldParticleCanvas density={70} className="opacity-90" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <div className="timeline timeline-1"><span className="hero-logo">IA</span></div>
        <div className="timeline timeline-2">
          <Badge className="hero-badge"><Sparkles className="mr-2 h-4 w-4" />Crafting Premium AI Experiences</Badge>
        </div>
        <h1 className="timeline timeline-3 hero-title">Ibrahim Alobaid</h1>
        <p className="timeline timeline-4 hero-subtitle">AI Engineer specializing in voice systems, multi-modal verification, and scalable intelligent products.</p>
        <div className="timeline timeline-5 hero-meta">
          <span><MapPin className="h-4 w-4" />Aleppo, Syria</span>
          <span><Cpu className="h-4 w-4" />AI / ML Engineering</span>
        </div>
        <div className="timeline timeline-6 flex flex-wrap items-center justify-center gap-3">
          <Button className="gold-button" onClick={() => scrollToSection('projects')}>View Work</Button>
          <Button variant="outline" className="gold-outline" onClick={() => scrollToSection('contact')}><Mail className="mr-2 h-4 w-4" />Contact</Button>
        </div>
        <button onClick={() => scrollToSection('about')} className="timeline timeline-6 mt-16 text-gold/70 hover:text-gold">
          <ChevronDown className="mx-auto h-8 w-8 animate-bounce" />
        </button>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section id="about" className="section-shell">
      <SectionReveal>
        <Badge className="section-badge">About</Badge>
        <h2 className="section-title">Building <span className="gold-gradient-text">cinematic AI systems</span> for real-world impact.</h2>
        <p className="section-copy">I design and ship production-grade AI products across voice KYC, retrieval systems, and automation pipelines with a strong focus on low latency and elegant user journeys.</p>
      </SectionReveal>
    </section>
  )
}

function SkillsSection() {
  return (
    <section id="skills" className="section-shell">
      <SectionReveal>
        <Badge className="section-badge">Skills</Badge>
        <h2 className="section-title">Technical Craft</h2>
      </SectionReveal>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {skills.map((skillGroup, index) => (
          <SectionReveal key={skillGroup.title} delayMs={index * 120}>
            <Card className="lux-card">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <span className="skill-icon-wrap"><skillGroup.icon className="h-5 w-5" /></span>
                  <h3 className="text-lg font-semibold">{skillGroup.title}</h3>
                </div>
                <StaggerList
                  className="flex flex-wrap gap-2"
                  items={skillGroup.items.map((item) => (
                    <span key={item} className="skill-chip">{item}</span>
                  ))}
                />
              </CardContent>
            </Card>
          </SectionReveal>
        ))}
      </div>
    </section>
  )
}

function ProjectsSection() {
  return (
    <section id="projects" className="section-shell">
      <SectionReveal>
        <Badge className="section-badge">Projects</Badge>
        <h2 className="section-title">Selected Work</h2>
      </SectionReveal>

      <div className="pin-wrap mt-10">
        <div className="pin-sticky">
          <p className="section-copy">Pinned cinematic panel: highlighting meaningful projects with scroll depth.</p>
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <SectionReveal key={project.title} delayMs={index * 140}>
            <Card className="lux-card">
              <CardContent className="p-6">
                <div className="mb-3 flex items-center gap-3">
                  <project.icon className="h-6 w-6 text-gold" />
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
                <p className="section-copy">{project.description}</p>
              </CardContent>
            </Card>
          </SectionReveal>
        ))}
      </div>
    </section>
  )
}

function ExperienceEducationContact() {
  return (
    <>
      <section id="experience" className="section-shell">
        <SectionReveal>
          <Badge className="section-badge">Experience</Badge>
          <h2 className="section-title">AI Systems Engineer · Amani AI</h2>
          <p className="section-copy">Built real-time multilingual voice KYC systems, low-latency orchestration, and verification automation.</p>
        </SectionReveal>
      </section>

      <section id="education" className="section-shell">
        <SectionReveal>
          <Badge className="section-badge">Education</Badge>
          <h2 className="section-title">MSc in Artificial Intelligence</h2>
          <p className="section-copy">Aleppo University · Focused on practical AI architecture and intelligent systems engineering.</p>
        </SectionReveal>
      </section>

      <section id="contact" className="section-shell relative overflow-hidden">
        <GoldParticleCanvas density={45} className="opacity-50" />
        <SectionReveal className="relative z-10 text-center">
          <Badge className="section-badge">Contact</Badge>
          <h2 className="section-title">Let&apos;s build something iconic.</h2>
          <div className="mx-auto mt-6 flex max-w-xl flex-wrap items-center justify-center gap-3">
            <Button className="gold-button"><Mail className="mr-2 h-4 w-4" />Email</Button>
            <Button variant="outline" className="gold-outline"><Linkedin className="mr-2 h-4 w-4" />LinkedIn</Button>
            <Button variant="outline" className="gold-outline"><Github className="mr-2 h-4 w-4" />GitHub</Button>
            <Button variant="outline" className="gold-outline"><Download className="mr-2 h-4 w-4" />Resume</Button>
          </div>
          <p className="mt-5 text-sm text-muted-foreground inline-flex items-center gap-2"><Calendar className="h-4 w-4" />Available for premium AI product collaborations.</p>
        </SectionReveal>
      </section>
    </>
  )
}

export default function App() {
  return (
    <div className="relative overflow-x-clip">
      <div className="noise-layer" />
      <div className="vignette-layer" />
      <Navigation />
      <HeroSection />
      <main className="relative z-10 mx-auto max-w-6xl px-4 pb-20">
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceEducationContact />
      </main>
    </div>
  )
}
