import { Brain, Code2, Database, Eye, Mic, Server } from 'lucide-react'

export const skills = [
  {
    title: 'Core AI & ML',
    icon: Brain,
    items: ['LLMs', 'RAG', 'Computer Vision', 'NLP', 'Voice Agents', 'STT/TTS'],
  },
  {
    title: 'Voice Technology',
    icon: Mic,
    items: ['Pipecat', 'WebRTC', 'VAD', 'Session Orchestration'],
  },
  {
    title: 'Languages & Frameworks',
    icon: Code2,
    items: ['Python', 'SQL', 'FastAPI', 'LangChain', 'CrewAI'],
  },
  {
    title: 'Tools & Platforms',
    icon: Server,
    items: ['Docker', 'MongoDB', 'Qdrant', 'Git', 'Render'],
  },
]

export const projects = [
  {
    title: 'Autonomous Driving Systems',
    icon: Eye,
    description:
      'Built visual perception pipelines with YOLO variants, lane tracking, and stereo enhancements validated on KITTI + CARLA.',
  },
  {
    title: 'AI-Driven Document Processing',
    icon: Database,
    description:
      'Implemented a RAG retrieval platform with Qdrant + FastAPI to improve enterprise-grade contextual search quality.',
  },
]

export const projectSpotlight = {
  eyebrow: 'Project Spotlight',
  title: 'Engineering outcomes, not demos.',
  description:
    'Each project focuses on measurable gains in latency, reliability, and model quality across production-like workloads.',
  metrics: [
    { value: '2', label: 'flagship projects' },
    { value: '30%', label: 'detection uplift' },
    { value: 'real-time', label: 'delivery focus' },
  ],
}
