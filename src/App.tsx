import { useEffect, useState } from 'react'
import './App.css'
import {
  Code2,
  Brain,
  Mic,
  Database,
  Server,
  Workflow,
  Eye,
  MessageSquare,
  Cpu,
  Layers,
  Sparkles,
  ChevronDown,
  Mail,
  Linkedin,
  Github,
  MapPin,
  Calendar,
  Download
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

// Navigation Component
function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'education', 'contact']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border/50' : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl font-bold text-gradient"
          >
            IA
          </button>
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${activeSection === item.id
                  ? 'text-primary bg-primary/10'
                  : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <Button
            size="sm"
            className="bg-primary hover:bg-primary/90"
            onClick={() => scrollToSection('contact')}
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </nav>
  )
}

// Hero Section
function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[150px]" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-slide-up">
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm bg-primary/10 text-primary border border-primary/20">
            <Sparkles className="w-4 h-4 mr-2" />
            Available for Opportunities
          </Badge>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <span className="text-white">Ibrahim</span>{' '}
          <span className="text-gradient">Alobaid</span>
        </h1>

        <p className="text-xl sm:text-2xl text-muted-foreground mb-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          AI Engineer Specializing in Voice Agents & Multi-Modal Systems
        </p>

        <div className="flex items-center justify-center gap-4 text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Aleppo, Syria
          </span>
          <span className="w-1 h-1 rounded-full bg-muted-foreground" />
          <span className="flex items-center gap-2">
            <Cpu className="w-4 h-4" />
            AI / ML Engineering
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 glow"
            onClick={() => scrollToSection('contact')}
          >
            <Mail className="w-4 h-4 mr-2" />
            Contact Me
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/20 hover:bg-white/5"
            onClick={() => scrollToSection('projects')}
          >
            <Code2 className="w-4 h-4 mr-2" />
            View Projects
          </Button>
        </div>

        <div className="mt-16 animate-slide-up" style={{ animationDelay: '0.5s' }}>
          <button
            onClick={() => scrollToSection('about')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronDown className="w-8 h-8 mx-auto animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  )
}

// About Section
function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border border-primary/20">
              About Me
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Building the Future of{' '}
              <span className="text-gradient">AI Systems</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm an AI Engineer specializing in building real-time voice agents and multi-modal KYC automation
                systems. With deep expertise in low-latency STT/TTS pipelines, session-based dialogue orchestration,
                and LLM-assisted verification, I create intelligent systems that bridge the gap between cutting-edge
                AI research and practical business applications.
              </p>
              <p>
                My experience spans developing multi-agent systems for B2B sales automation, designing AML-focused
                ETL pipelines, and architecting scalable AI infrastructure. I'm passionate about creating technology
                that not only performs exceptionally but also delivers meaningful value to users and businesses.
              </p>
              <p>
                Currently pursuing my Master's in Artificial Intelligence at Aleppo University while working on
                innovative projects that push the boundaries of what's possible with modern AI.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <div className="glass rounded-xl px-6 py-4">
                <div className="text-2xl font-bold text-primary">2+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="glass rounded-xl px-6 py-4">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="glass rounded-xl px-6 py-4">
                <div className="text-2xl font-bold text-primary">3</div>
                <div className="text-sm text-muted-foreground">Languages</div>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="relative aspect-[3/4] max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-2xl blur-2xl" />
              <img
                src="/profile.jpg"
                alt="Ibrahim Alobaid"
                className="relative w-full h-full object-cover rounded-2xl border border-white/10"
              />
              <div className="absolute -bottom-6 -right-6 glass rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">AI Engineer</div>
                    <div className="text-sm text-muted-foreground">Amani AI</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Skills Section
function SkillsSection() {
  const skillCategories = [
    {
      title: 'Core AI & ML',
      icon: Brain,
      skills: ['LLMs', 'RAG', 'Computer Vision', 'YOLO', 'OpenCV', 'NLP', 'Voice Agents', 'STT/TTS', 'VAD']
    },
    {
      title: 'Voice Technology',
      icon: Mic,
      skills: ['Pipecat', 'WebRTC', 'Session Orchestration', 'Real-time Latency Optimization']
    },
    {
      title: 'Languages & Frameworks',
      icon: Code2,
      skills: ['Python', 'SQL', 'FastAPI', 'LangChain', 'CrewAI', 'Crawl4AI']
    },
    {
      title: 'Tools & Platforms',
      icon: Server,
      skills: ['Docker', 'MongoDB', 'Qdrant', 'Git', 'n8n', 'Render']
    }
  ]

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border border-primary/20">
            Technical Skills
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Technologies I <span className="text-gradient">Work With</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive stack of modern AI/ML technologies and tools I use to build
            intelligent, scalable systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className="glass border-white/10 hover:border-primary/30 transition-all duration-300 hover:glow group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-white/5 hover:bg-primary/20 text-foreground border border-white/10 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Experience Section
function ExperienceSection() {
  const experiences = [
    {
      title: 'AI Systems Engineer',
      company: 'Amani AI',
      location: 'Remote',
      period: 'May 2025 – Present',
      type: 'Full-time',
      highlights: [
        {
          title: 'Production-Grade Voice KYC Platform',
          description:
            'Architected and deployed a real-time multilingual Voice KYC system supporting Arabic, English, and Turkish using Pipecat, WebRTC, and low-latency STT/TTS pipelines.',
          achievements: [
            'Designed concurrent session orchestration layer with deterministic dialogue state management',
            'Reduced conversational latency through streaming optimization',
            'Implemented VAD-driven interruption handling for natural turn-taking'
          ]
        },
        {
          title: 'Multi-Modal Identity Verification',
          description:
            'Integrated LLM-powered vision verification for ID and selfie validation within automated onboarding workflows.',
          achievements: [
            'Implemented image-quality validation pipeline',
            'Reduced manual review dependency through automated verification logic'
          ]
        },
        {
          title: 'AML Entity Resolution & Profile Export System',
          description:
            'Designed and implemented a deterministic Entity Resolution pipeline producing canonical  Profiles (JSONL.GZ) with FULL and DELTA export modes for AML screening systems.',
          achievements: [
            'Engineered distributed web scraping and ETL pipelines powering AML screening and entity enrichment systems across hundreds of data sources.',
            'Built Golden Profile schemawith stable SHA256-based resourceId and canonical merge logic',
            'Implemented FULL/DELTA export engine with state-based hash comparison and deterministic ordering guarantees',
          ]
        }
      ]
    },

    {
      title: 'AI Engineer',
      company: 'H&H',
      location: 'Remote',
      period: 'January 2025 – April 2025',
      type: 'Full-time',
      highlights: [
        {
          title: 'Scalable AI Chatbot Architecture',
          description: 'Designed modular AI chatbot infrastructure with dynamic model switching (OpenAI / Groq) and session persistence.',
          achievements: [
            'Built LLMProviderFactory abstraction layer',
            'Applied ReAct reasoning framework for improved context handling',
            'Optimized cost vs latency routing strategy'
          ]
        }
      ]
    },

    {
      title: 'Co-Founder',
      company: 'Aleppo Dev Community',
      location: 'Syria (On-site)',
      period: 'April 2025 – Present',
      type: 'Leadership',
      highlights: [
        {
          title: 'Technical Community Leadership',
          description: 'Co-founded and led a regional developer community focused on AI, software engineering, and emerging technologies.',
          achievements: [
            'Organized AI workshops and technical bootcamps',
            'Built strategic partnerships with local tech initiatives',
            'Mentored students in ML and career development'
          ]
        }
      ]
    },

    {
      title: 'Computer Vision Engineer',
      company: 'Freelance',
      location: 'Remote',
      period: 'July 2023 – November 2024',
      type: 'Freelance',
      highlights: [
        {
          title: 'Autonomous Driving & Perception Systems',
          description: 'Implemented advanced computer vision pipelines for object detection, multi-sensor fusion, and 3D scene understanding.',
          achievements: [
            'Worked with LiDAR data and stereo vision systems',
            'Applied YOLO and detection architectures for real-time inference',
            'Improved environmental robustness under dynamic conditions'
          ]
        }
      ]
    },

    {
      title: 'Data Scientist',
      company: 'Omdena',
      location: 'Remote',
      period: '2023 – November 2023',
      type: 'Part-time',
      highlights: [
        {
          title: 'Collaborative AI Impact Projects',
          description: 'Participated in global AI initiatives focused on applied machine learning and data-driven decision systems.',
          achievements: [
            'Performed feature engineering and predictive modeling',
            'Collaborated in distributed AI research teams'
          ]
        }
      ]
    },

    {
      title: 'Remote Support Engineer',
      company: 'Mostaql.com',
      location: 'Germany (Remote)',
      period: 'May 2023 – November 2023',
      type: 'Freelance',
      highlights: [
        {
          title: 'Technical Troubleshooting & Client Support',
          description: 'Provided remote technical support and system troubleshooting for international clients.',
          achievements: [
            'Resolved complex infrastructure and software issues',
            'Maintained high client satisfaction through efficient resolution'
          ]
        }
      ]
    }
  ]

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border border-primary/20">
            Work Experience
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Professional <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My career path in AI engineering, from internships to full-time roles,
            building cutting-edge AI systems.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <Card key={exp.company} className="glass border-white/10 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6 mb-8">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold">{exp.title}</h3>
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        {exp.type}
                      </Badge>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <Workflow className="w-4 h-4" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  {exp.highlights.map((highlight) => (
                    <div key={highlight.title} className="border-l-2 border-primary/30 pl-6">
                      <h4 className="text-lg font-semibold text-primary mb-2">{highlight.title}</h4>
                      <p className="text-muted-foreground mb-3">{highlight.description}</p>
                      {highlight.achievements && (
                        <ul className="space-y-1">
                          {highlight.achievements.map((achievement, aIndex) => (
                            <li key={aIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <Sparkles className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Projects Section
function ProjectsSection() {
  const projects = [
    {
      title: 'Autonomous Driving Systems',
      subtitle: 'Graduation Project',
      period: 'March 2024 – August 2024',
      description: 'Developed advanced visual perception techniques using image processing and Deep Learning, validated on the KITTI dataset and CARLA simulator.',
      icon: Eye,
      achievements: [
        'Trained state-of-the-art models (YOLOv3 to YOLOv10, Faster RCNN, SSD) achieving high precision in real-time tracking',
        'Implemented edge detection, lane detection, and feature extraction (SIFT, ORB, HOG) to enhance recognition',
        'Enhanced 3D object detection accuracy by 30% using stereo vision techniques and integrated LIDAR data'
      ],
      tags: ['YOLO', 'Computer Vision', 'Deep Learning', 'OpenCV', 'CARLA', 'KITTI']
    },
    {
      title: 'AI-Driven Document Processing',
      subtitle: 'Retrieval System',
      period: 'October 2024',
      description: 'Built a semantic search engine using Qdrant and RAG techniques to enhance LLM responses with contextual data.',
      icon: Database,
      achievements: [
        'Designed a modular API using FastAPI and integrated MongoDB for structured metadata',
        'Implemented optimized text chunking for better retrieval performance',
        'Containerized the entire application with Docker for scalable, production-ready deployment'
      ],
      tags: ['RAG', 'Qdrant', 'FastAPI', 'MongoDB', 'Docker', 'LLM']
    }
  ]

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border border-primary/20">
            Featured Projects
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Projects I've <span className="text-gradient">Built</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my most impactful work, from autonomous driving systems
            to AI-powered document processing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="glass border-white/10 hover:border-primary/30 transition-all duration-300 hover:glow group">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <project.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-sm text-primary">{project.subtitle}</p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                      <Calendar className="w-3 h-3" />
                      {project.period}
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">{project.description}</p>

                <ul className="space-y-3 mb-6">
                  {project.achievements.map((achievement, aIndex) => (
                    <li key={aIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Sparkles className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-white/5 text-foreground border border-white/10"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Education Section
function EducationSection() {
  const education = [
    {
      degree: "Master's in Artificial Intelligence",
      school: 'Aleppo University',
      period: 'September 2025 – Present',
      status: 'Current',
      icon: Brain
    },
    {
      degree: "Bachelor of Science in Information Technology Engineering",
      school: 'Aleppo University',
      period: 'September 2019 – September 2024',
      status: 'Completed',
      icon: Cpu
    }
  ]

  const volunteering = {
    role: 'Academic Content Creator',
    organization: 'Blue Bits Team',
    period: 'March 2023 – September 2024',
    description: 'Authored and proofread technical lectures and educational materials to support university colleagues in IT engineering subjects.'
  }

  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border border-primary/20">
            Education & Volunteering
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Academic <span className="text-gradient">Background</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <Layers className="w-5 h-5 text-primary" />
              Education
            </h3>
            {education.map((edu) => (
              <Card key={edu.degree} className="glass border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <edu.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold">{edu.degree}</h4>
                        {edu.status === 'Current' && (
                          <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                            Current
                          </Badge>
                        )}
                      </div>
                      <p className="text-muted-foreground text-sm">{edu.school}</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1 mt-2">
                        <Calendar className="w-3 h-3" />
                        {edu.period}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div>
            <h3 className="text-xl font-semibold flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-primary" />
              Volunteering
            </h3>
            <Card className="glass border-white/10 h-full">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{volunteering.role}</h4>
                    <p className="text-primary text-sm">{volunteering.organization}</p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1 mt-2 mb-4">
                      <Calendar className="w-3 h-3" />
                      {volunteering.period}
                    </p>
                    <p className="text-muted-foreground text-sm">{volunteering.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Languages */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-6 text-center">Languages</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Card className="glass border-white/10">
              <CardContent className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🇸🇾</span>
                  <div>
                    <div className="font-semibold">Arabic</div>
                    <div className="text-xs text-muted-foreground">Native</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="glass border-white/10">
              <CardContent className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🇬🇧</span>
                  <div>
                    <div className="font-semibold">English</div>
                    <div className="text-xs text-muted-foreground">Professional Proficiency</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

// Contact Section
function ContactSection() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-blue-500/10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border border-primary/20">
            Get in Touch
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Let's Work <span className="text-gradient">Together</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities
            to be part of your vision.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <a
            href="mailto:ibrahim.alobaid44@gmail.com"
            className="group"
          >
            <Card className="glass border-white/10 hover:border-primary/30 transition-all duration-300 hover:glow h-full">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-sm text-muted-foreground">ibrahim.alobaid44@gmail.com</p>
              </CardContent>
            </Card>
          </a>

          <a
            href="https://www.linkedin.com/in/ibrahimalobaid44/"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Card className="glass border-white/10 hover:border-primary/30 transition-all duration-300 hover:glow h-full">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Linkedin className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">LinkedIn</h3>
                <p className="text-sm text-muted-foreground">in/ibrahimalobaid44</p>
              </CardContent>
            </Card>
          </a>

          <a
            href="https://github.com/IbrahimAlobid2"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Card className="glass border-white/10 hover:border-primary/30 transition-all duration-300 hover:glow h-full">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Github className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">GitHub</h3>
                <p className="text-sm text-muted-foreground">https://github.com/IbrahimAlobid2</p>
              </CardContent>
            </Card>
          </a>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Download my resume for more details</p>
          <Button
            size="lg"
            variant="outline"
            className="border-white/20 hover:bg-white/5"
            onClick={() => window.open('/Ibrahim_Alobaid_Resume.pdf', '_blank')}
          >
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="py-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-gradient">IA</span>
            <span className="text-muted-foreground">|</span>
            <span className="text-muted-foreground">Ibrahim Alobaid</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ibrahim Alobaid. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/ibrahimalobaid44/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/IbrahimAlobid2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:ibrahim.alobaid44@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Main App Component
function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
