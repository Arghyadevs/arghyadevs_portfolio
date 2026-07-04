import { useEffect, useRef, useState, type ReactNode } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Routes, Route, Link } from 'react-router-dom'
import { SpiderWebBackground } from './SpiderWebBackground'
import CanvasCursor from './CanvasCursor'
import ArticlesPage from './ArticlesPage'
import AiPoweredApplications from './ai-powered-applications'
import SmartCitiesPage from './SmartCitiesPage'
import { 
  generateAIResponse, 
  initializeAI,
  type ChatMessage 
} from './services/aiService'
import AnimatedLogo from './AnimatedLogo'

function PowerStats() {
  return (
    <section className="tech-card bg-black text-green-400 font-mono p-8 rounded-2xl shadow-xl border border-green-500">
      <h3 className="text-xl mb-4 glow-text-accent" style={{ textShadow: '0 0 6px #00ff00' }}>Power Stats</h3>
      <ul className="space-y-3">
        <li>
          <div className="flex justify-between items-center">
            <span className="flex items-center gap-2">
              <img src="/icons/Arc.jpeg" alt="React" className="w-4 h-4" />
              React Level
            </span>
            <span>90%</span>
          </div>
          <div className="w-full bg-green-900 rounded h-2 mt-1">
            <div className="bg-green-400 h-2 rounded w-[90%]"></div>
          </div>
          <p className="text-xs text-green-300 mt-1">Arc Reactor Stable</p>
        </li>
        <li className="flex items-center gap-2">
          <img src="/icons/ai.avif" alt="AI" className="w-4 h-4" />
          AI Integration: <span className="ml-auto">Online</span>
        </li>
        <li className="flex items-center gap-2">
          <img src="/icons/mongo.svg" alt="MongoDB" className="w-4 h-4" />
          MongoDB Shield: <span className="ml-auto">Active</span>
        </li>
        <li className="flex items-center gap-2">
          <img src="/icons/firewell.png" alt="Firewall" className="w-4 h-4" />
          Firewall Integrity: <span className="ml-auto">98%</span>
        </li>
        <li className="flex items-center gap-2">
          <img src="/icons/server.png" alt="Uptime" className="w-4 h-4" />
          Server Uptime: <span className="ml-auto">1024 hours</span>
        </li>
        <li className="flex items-center gap-2">
          <img src="/icons/neural.png" alt="Neural" className="w-4 h-4" />
          Neural Net Sync: <span className="ml-auto">Synced</span>
        </li>
      </ul>
    </section>
  );
}



function AboutSection() {
  const greetings = [
    { text: 'Hi! I am Arghyadip.', className: 'text-white' },
    { text: 'हाय! मैं अर्घ्यदीप हूँ।', className: 'text-yellow-300' },
    { text: 'নমস্কার! আমি অর্ঘ্যদ্বীপ।', className: 'text-green-300' },
    { text: '¡Hola! Soy Arghyadip.', className: 'text-pink-400' },
    { text: 'Salut ! Je suis Arghyadip.', className: 'text-blue-400' },
    { text: 'Hallo! Ich bin Arghyadip.', className: 'text-cyan-400' },
    { text: 'Ciao! Sono Arghyadip.', className: 'text-red-400' },
    { text: 'Olá! Eu sou Arghyadip.', className: 'text-purple-400' },
    { text: 'Hoi! Ik ben Arghyadip.', className: 'text-orange-400' },
    { text: 'Привет! Я Аргьядип.', className: 'text-blue-500' },
    { text: 'こんにちは！私はアルギャディープです。', className: 'text-pink-500' },
    { text: '안녕! 나는 아르기야딥이야.', className: 'text-green-500' },
  ];
  const [greetIdx, setGreetIdx] = useState(0);
  const [imgIdx, setImgIdx] = useState(0);
  const baseUrl = import.meta.env.BASE_URL
  const primaryImg = `${baseUrl}assets/Arghyadip.jpg`
  const secondaryImg = `${baseUrl}assets/Arghyalogo.png`
  const tertiaryImg = `${baseUrl}assets/Arghyadip_red.jpg`
  const profileImages = [primaryImg, tertiaryImg, secondaryImg];

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduceMotion.matches) return;

    const interval = setInterval(() => {
      setGreetIdx(idx => (idx + 1) % greetings.length);
    }, 1600);
    const imgInterval = setInterval(() => {
      setImgIdx(idx => (idx + 1) % profileImages.length);
    }, 3000);
    return () => { clearInterval(interval); clearInterval(imgInterval); };
  }, []);

  return (
    <section id="about" className="section-shell spider-hero">
      <div className="web-overlay" aria-hidden="true" />
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="about-hero web-swing">
          <span className="about-chip">Earth-616 Profile</span>
          <h2 className="about-title hud-title">🕸️ About Me</h2>
          <p className="about-tagline">
            Friendly neighborhood developer building AI-powered, cinematic web experiences.
          </p>
          <div className="about-meta">
            <span className="about-meta-chip">AI / ML</span>
            <span className="about-meta-chip">Full Stack</span>
            <span className="about-meta-chip">UI/UX</span>
          </div>
          <div className="about-divider" aria-hidden="true" />
        </div>
        <div className="web-parallax">
          <div className="spider-light" aria-hidden="true" />
          <div className="glass-effect spider-panel web-swing web-delay flex flex-col items-center justify-center text-center gap-6 rounded-3xl p-10">
          <div className="profile-orbit" aria-label="Profile portrait">
            <span className="profile-orbit__stars" aria-hidden="true" />
            <span className="profile-orbit__ring profile-orbit__ring--one" aria-hidden="true" />
            <span className="profile-orbit__ring profile-orbit__ring--two" aria-hidden="true" />
            <div className="profile-frame">
              {profileImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="Arghyadip"
                  className={`profile-image transition-opacity duration-1000 ${index === imgIdx ? 'opacity-100' : 'opacity-0'}`}
                />
              ))}
            </div>
          </div>
          <h3 className="text-2xl md:text-3xl font-extrabold text-[#00ffd5] drop-shadow-lg min-h-[2.5em]">
            <span className={`animated-greeting ${greetings[greetIdx].className}`}>{greetings[greetIdx].text}</span>
          </h3>
          <h4 className="text-xl font-bold text-white mt-2">Arghyadip Pakhira</h4>
          <p className="text-base md:text-lg text-gray-200 font-medium max-w-xl mt-2">
            Tech enthusiast, web developer, and open source contributor passionate about AI, futuristic UI/UX, and building smart solutions.
          </p>
          <p className="text-[#00ffd5] font-semibold mt-4 italic">
            "With great power comes great responsibility." – Spider-Man
          </p>
          <p className="text-gray-400 mt-2">
            <strong>Location:</strong> Kolkata, India
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="https://drive.google.com/file/d/1Uk9tDFSpLwo5BQmXfivQ__fHIzddOQNN/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center gap-2">
              Resume <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            </a>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Redesigned Projects Section ---
function ProjectsSection() {
  const projects = [
    {
      title: 'NeuralFlix',
      description: 'Semantic movie recommendation engine utilizing 768-dimensional transformer embeddings for highly accurate search results.',
      image: 'https://api.microlink.io/?url=https%3A%2F%2Fneuralflix.arghyadevs.me%2F&screenshot=true&embed=screenshot.url',
      tags: ['Transformers', 'Embeddings', 'ML'],
      role: 'Full-stack ML',
      stack: 'Next.js, Python, Vector DB',
      impact: 'Context-aware movie discovery',
      links: [
        { label: 'Live Demo', url: 'https://neuralflix.arghyadevs.me/' },
        { label: 'GitHub', url: 'https://github.com/arghyadevs/neuralflix' },
      ],
    },
    {
      title: 'creAItr',
      description: 'Unified AI creative workspace integrating scriptwriting and brainstorming tools for content creators, featuring RAG-powered chat.',
      image: 'https://api.microlink.io/?url=https%3A%2F%2Fcreaitr.arghyadevs.me%2F&screenshot=true&embed=screenshot.url',
      tags: ['GenAI', 'RAG', 'Productivity'],
      role: 'Software Architect',
      stack: 'Next.js, RAG Pipeline, AI',
      impact: 'Streamlined content creation workflows',
      links: [
        { label: 'Live Demo', url: 'https://creaitr.arghyadevs.me/' },
        { label: 'GitHub', url: 'https://github.com/aasaan-hainn/creaitr.' },
      ],
    },
    {
      title: 'AlgoGuard AI',
      description: 'Robust bias detection platform designed to evaluate and ensure fairness across machine learning models.',
      image: 'https://api.microlink.io/?url=https%3A%2F%2Falgoguard-gdg.vercel.app%2F&screenshot=true&embed=screenshot.url',
      tags: ['Bias Detection', 'AI Ethics', 'ML'],
      role: 'Machine Learning Engineer',
      stack: 'Python, ML Algorithms',
      impact: 'Promotes ethical AI development',
      links: [
        { label: 'Live Demo', url: 'https://algoguard-gdg.vercel.app/' },
        { label: 'GitHub', url: 'https://github.com/algoinfluencers/gdg-solution-challenge' },
      ],
    },
    {
      title: 'Opearation:Tribute',
      description: 'A comprehensive web platform dedicated to honoring the Indian Army, featuring dedicated sections for regiments, operations, and bravehearts.',
      image: 'https://api.microlink.io/?url=https%3A%2F%2Findian-army-love.vercel.app%2F&screenshot=true&embed=screenshot.url',
      tags: ['Frontend', 'UI/UX', 'Interactive'],
      role: 'Frontend Developer',
      stack: 'Next.js, React, Tailwind CSS',
      impact: 'Digital memorial and information hub',
      links: [
        { label: 'Live Demo', url: 'https://indian-army-love.vercel.app/' },
        { label: 'GitHub', url: 'https://github.com/arghyadevs/indian-army' },
      ],
    },
    {
      title: 'HorizonEase',
      description: 'A modern, responsive web application built with a focus on seamless user experience, mental well-being tracking, and dynamic interfaces.',
      image: 'https://api.microlink.io/?url=https%3A%2F%2Fhorizonease.vercel.app%2F&screenshot=true&embed=screenshot.url',
      tags: ['Web App', 'Mental Health', 'Frontend'],
      role: 'Full-stack Developer',
      stack: 'React, Tailwind CSS, Node.js',
      impact: 'Enhanced digital accessibility and wellness',
      links: [
        { label: 'Live Demo', url: 'https://horizonease.vercel.app/' },
        { label: 'GitHub', url: 'https://github.com/arghyadevs/horizonease' },
      ],
    },
    {
      title: 'CampusSite',
      description: 'A centralized portal for managing college chapter events, notices, academic resources, and community engagements.',
      image: 'https://api.microlink.io/?url=https%3A%2F%2Fcampus-site.arghyadevs.me%2F&screenshot=true&embed=screenshot.url',
      tags: ['Community', 'Portal', 'Management'],
      role: 'Full-stack Developer',
      stack: 'React, Vite, Node.js',
      impact: 'Streamlined campus communication',
      links: [
        { label: 'Live Demo', url: 'https://campus-site.arghyadevs.me/' },
        { label: 'GitHub', url: 'https://github.com/arghyadevs/campussite' },
      ],
    },
  ];

  const filters = ['All', ...Array.from(new Set(projects.flatMap(project => project.tags)))]
  const [activeFilter, setActiveFilter] = useState('All')
  const visibleProjects = projects.filter(project =>
    activeFilter === 'All' ? true : project.tags.includes(activeFilter)
  )

  return (
    <section id="projects" className="section-shell section-surface text-white">
      <h2 className="section-title hud-title">🕸️ Projects</h2>
      <div className="project-filter-bar">
        {filters.map(filter => (
          <button
            key={filter}
            type="button"
            className={`filter-chip ${activeFilter === filter ? 'is-active' : ''}`}
            onClick={() => setActiveFilter(filter)}
            aria-pressed={activeFilter === filter}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="project-grid">
        {visibleProjects.map(project => (
          <div key={project.title} className="project-card">
            <a
              href={project.links.find(l => l.label === 'Live Demo')?.url || project.links[0]?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-media-link"
              title={`Visit Live Demo for ${project.title}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="project-media"
                loading="lazy"
                decoding="async"
              />
            </a>
            <div className="project-body">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              
              <div className="chip-row">
                {project.tags.map(tag => (
                  <span key={tag} className="chip">{tag}</span>
                ))}
              </div>

              {/* Inline Snapshot Grid */}
              <div className="project-snapshot">
                <div className="snapshot-item">
                  <span className="snapshot-label">Role</span>
                  <span className="snapshot-value">{project.role}</span>
                </div>
                <div className="snapshot-item">
                  <span className="snapshot-label">Stack</span>
                  <span className="snapshot-value">{project.stack}</span>
                </div>
                <div className="snapshot-item full-width">
                  <span className="snapshot-label">Impact</span>
                  <span className="snapshot-value text-[#00ffd5]">{project.impact}</span>
                </div>
              </div>
            </div>

            <div className="project-actions">
              {project.links.map((link, index) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={index === 0 ? 'btn-primary btn-sm' : 'btn-ghost btn-sm'}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function TimelineSection() {
  return (
    <section className="section-shell relative">
      <h2 className="section-title text-center hud-title">🕸️ Timeline</h2>
      <div className="relative max-w-5xl mx-auto">
        {/* Central neon rail */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-300/0 via-cyan-400/70 to-cyan-300/0 blur-[0.5px]" />

        <div className="relative grid gap-10 md:gap-14">
          {/* Item 1 - left */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-start">
            <div className="hidden md:flex flex-col items-center">
              <div className="pulse-dot" />
              <div className="h-[2px] w-24 bg-gradient-to-r from-cyan-400 to-blue-400 shadow-[0_0_18px_rgba(0,255,213,0.35)]" />
            </div>
            <div className="glass-effect border border-cyan-400/30 rounded-xl p-5 shadow-[0_6px_22px_rgba(0,0,0,0.35),0_0_20px_rgba(0,255,213,0.08)]">
              <span className="inline-flex items-center gap-2 text-xs text-[#00ffd5] bg-cyan-400/10 border border-cyan-400/25 px-3 py-1 rounded-full">2014 - 2022</span>
              <div className="flex items-center gap-3 mt-3">
                <img src="/assets/NMA.jpg" alt="School" className="w-8 h-8 rounded-md" loading="lazy" decoding="async" />
                <h3 className="font-semibold text-cyan-100">Narajole Mahendra Academy (H.S)</h3>
              </div>
              <p className="text-gray-300 text-sm mt-2">Foundation phase of academic excellence. Completed Secondary Examination with 86% and Higher Secondary with 95.7%.</p>
              <span className="text-xs text-cyan-100/80 mt-2 inline-block">86% Secondary | 95.7% Higher Secondary</span>
            </div>
          </div>

          {/* Item 2 - right */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-start">
            <div className="glass-effect border border-cyan-400/30 rounded-xl p-5 shadow-[0_6px_22px_rgba(0,0,0,0.35),0_0_20px_rgba(0,255,213,0.08)] order-1 md:order-none">
              <span className="inline-flex items-center gap-2 text-xs text-[#00ffd5] bg-cyan-400/10 border border-cyan-400/25 px-3 py-1 rounded-full">2023 - 2027</span>
              <div className="flex items-center gap-3 mt-3">
                <img src="/assets/tmsl.jpeg" alt="TMSL" className="w-8 h-8 rounded-md" loading="lazy" decoding="async" />
                <h3 className="font-semibold text-cyan-100">Techno Main Saltlake - B.Tech CSE</h3>
              </div>
              <p className="text-gray-300 text-sm mt-2">Pursuing B.Tech CSE, mastering advanced programming concepts, algorithms, and system architecture.</p>
              <span className="text-xs text-cyan-100/80 mt-2 inline-block">Computer Science & Engineering</span>
            </div>
            <div className="hidden md:flex flex-col items-center order-none md:order-1">
              <div className="pulse-dot" />
              <div className="h-[2px] w-24 bg-gradient-to-l from-cyan-400 to-blue-400 shadow-[0_0_18px_rgba(0,255,213,0.35)]" />
            </div>
          </div>

          {/* Item 3 - left */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-start">
            <div className="hidden md:flex flex-col items-center">
              <div className="pulse-dot" />
              <div className="h-[2px] w-24 bg-gradient-to-r from-cyan-400 to-blue-400 shadow-[0_0_18px_rgba(0,255,213,0.35)]" />
            </div>
            <div className="glass-effect border border-cyan-400/30 rounded-xl p-5">
              <span className="inline-flex items-center gap-2 text-xs text-[#00ffd5] bg-cyan-400/10 border border-cyan-400/25 px-3 py-1 rounded-full">Nov 2023 - Aug 2024</span>
              <div className="flex items-center gap-3 mt-3">
                <img src="/assets/coding ninja.svg" alt="Coding Ninjas" className="w-8 h-8 rounded-md" loading="lazy" decoding="async" />
                <h3 className="font-semibold text-cyan-100">Ninja Leader at Coding Ninjas</h3>
              </div>
              <p className="text-gray-300 text-sm mt-2">Mentored aspiring developers and organized coding bootcamps, building a strong developer community.</p>
              <span className="text-xs text-cyan-100/80 mt-2 inline-block">Leadership & Mentoring</span>
            </div>
          </div>

          {/* Item 4 - right */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-start">
            <div className="glass-effect border border-cyan-400/30 rounded-xl p-5 order-1 md:order-none">
              <span className="inline-flex items-center gap-2 text-xs text-[#00ffd5] bg-cyan-400/10 border border-cyan-400/25 px-3 py-1 rounded-full">Oct 2024 - Nov 2024</span>
              <div className="flex items-center gap-3 mt-3">
                <img src="/assets/gssoc.png" alt="GSSoC" className="w-8 h-8 rounded-md" loading="lazy" decoding="async" />
                <h3 className="font-semibold text-cyan-100">Open Source Contributor - GSSoC</h3>
              </div>
              <p className="text-gray-300 text-sm mt-2">Contributed to multiple open source projects with global collaborators.</p>
              <span className="text-xs text-cyan-100/80 mt-2 inline-block">Open Source Developer</span>
            </div>
            <div className="hidden md:flex flex-col items-center order-none md:order-1">
              <div className="pulse-dot" />
              <div className="h-[2px] w-24 bg-gradient-to-l from-cyan-400 to-blue-400 shadow-[0_0_18px_rgba(0,255,213,0.35)]" />
            </div>
          </div>

          {/* Item 5 - left */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-start">
            <div className="hidden md:flex flex-col items-center">
              <div className="pulse-dot" />
              <div className="h-[2px] w-24 bg-gradient-to-r from-cyan-400 to-blue-400 shadow-[0_0_18px_rgba(0,255,213,0.35)]" />
            </div>
            <div className="glass-effect border border-cyan-400/30 rounded-xl p-5">
              <span className="inline-flex items-center gap-2 text-xs text-[#00ffd5] bg-cyan-400/10 border border-cyan-400/25 px-3 py-1 rounded-full">Oct 2024 - Jan 2026</span>
              <div className="flex items-center gap-3 mt-3">
                <img src="/assets/edge-logo.png" alt="Geekonix" className="w-8 h-8 rounded-md" loading="lazy" decoding="async" />
                <h3 className="font-semibold text-cyan-100">Sponsorship & Management Team - Geekonix</h3>
              </div>
              <p className="text-gray-300 text-sm mt-2">Active member managing sponsorships and organizing tech events.</p>
              <span className="text-xs text-cyan-100/80 mt-2 inline-block">Handle Primary Sponsorship in EDGE 24 & 25</span>
            </div>
          </div>

          {/* Item 6 - right */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-start">
            <div className="glass-effect border border-cyan-400/30 rounded-xl p-5 order-1 md:order-none">
              <span className="inline-flex items-center gap-2 text-xs text-[#00ffd5] bg-cyan-400/10 border border-cyan-400/25 px-3 py-1 rounded-full">Dec 2024 - Dec 2025</span>
              <div className="flex items-center gap-3 mt-3">
                <img src="/assets/gfg.svg" alt="GFG" className="w-8 h-8 rounded-md" loading="lazy" decoding="async" />
                <h3 className="font-semibold text-cyan-100">Campus Lead TMSL - GeeksforGeeks</h3>
              </div>
              <p className="text-gray-300 text-sm mt-2">Leading the GFG chapter at TMSL, organizing contests and workshops.</p>
              <span className="text-xs text-cyan-100/80 mt-2 inline-block"> Lead the geek Community</span>
            </div>
            <div className="hidden md:flex flex-col items-center order-none md:order-1">
              <div className="pulse-dot" />
              <div className="h-[2px] w-24 bg-gradient-to-l from-cyan-400 to-blue-400 shadow-[0_0_18px_rgba(0,255,213,0.35)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CodeEditorBlock({ code, language }: { code: string; language: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="my-4 rounded-xl overflow-hidden bg-[#0a0f1d] border border-white/10 shadow-2xl font-mono text-xs w-full max-w-full text-left relative z-10">
      {/* Editor Title Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-black/40 border-b border-white/5 select-none">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 border border-red-600/30" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 border border-yellow-600/30" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 border border-green-600/30" />
          <span className="text-[10px] text-gray-500 ml-2 font-mono uppercase tracking-wider">{language}</span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 text-[10px] text-gray-400 hover:text-white transition-all active:scale-95"
          title="Copy to clipboard"
        >
          {copied ? (
            <>
              <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span className="text-green-400 font-bold">COPIED</span>
            </>
          ) : (
            <>
              <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v4.125c0 .621.504 1.125 1.125 1.125H6.75v-6.375z" />
              </svg>
              <span>COPY</span>
            </>
          )}
        </button>
      </div>
      {/* Editor Body */}
      <pre className="p-4 overflow-x-auto text-[#e2e8f0] bg-black/30 font-mono text-[11px] leading-relaxed max-w-full scrollbar-none">
        <code>{code}</code>
      </pre>
    </div>
  );
}

function SocialLinkBadge({ url, label }: { url: string; label: string }) {
  const urlLower = url.toLowerCase();
  
  // Default values
  let icon = (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
    </svg>
  );
  let name = label || "Link";
  let colorClass = "bg-white/5 border-white/10 hover:border-white/20 text-gray-300";
  let iconColor = "text-white";

  // Check domains
  if (urlLower.includes("linkedin.com")) {
    name = label || "LinkedIn / arghyadip-pakhira";
    colorClass = "bg-blue-600/10 border-blue-500/20 hover:border-blue-500/40 text-blue-300";
    iconColor = "text-blue-400";
    icon = (
      <svg className={`w-3.5 h-3.5 ${iconColor}`} fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    );
  } else if (urlLower.includes("github.com")) {
    name = label || "GitHub / Arghyadevs";
    colorClass = "bg-purple-600/10 border-purple-500/20 hover:border-purple-500/40 text-purple-300";
    iconColor = "text-purple-400";
    icon = (
      <svg className={`w-3.5 h-3.5 ${iconColor}`} fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    );
  } else if (urlLower.includes("instagram.com")) {
    name = label || "Instagram / @arghya_dip7";
    colorClass = "bg-pink-600/10 border-pink-500/20 hover:border-pink-500/40 text-pink-300";
    iconColor = "text-pink-400";
    icon = (
      <svg className={`w-3.5 h-3.5 ${iconColor}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2.5" />
      </svg>
    );
  } else if (urlLower.includes("twitter.com") || urlLower.includes("x.com")) {
    name = label || "Twitter / @Arghya_dip7";
    colorClass = "bg-cyan-600/10 border-cyan-500/20 hover:border-cyan-500/40 text-cyan-300";
    iconColor = "text-cyan-400";
    icon = (
      <svg className={`w-3.5 h-3.5 ${iconColor}`} fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
      </svg>
    );
  } else if (urlLower.includes("facebook.com")) {
    name = label || "Facebook / arghya.dip.07";
    colorClass = "bg-blue-800/10 border-blue-700/20 hover:border-blue-700/40 text-blue-400";
    iconColor = "text-blue-500";
    icon = (
      <svg className={`w-3.5 h-3.5 ${iconColor}`} fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border font-mono text-xs transition-all duration-300 active:scale-95 shadow-md my-1 ${colorClass} relative z-10`}
    >
      {icon}
      <span className="font-semibold tracking-wide">{name}</span>
      <svg className="w-3 h-3 opacity-60" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
      </svg>
    </a>
  );
}

const parseText = (text: string): ReactNode[] => {
  const nodes: ReactNode[] = [];
  let key = 0;

  const lines = text.split('\n');
  for (let l = 0; l < lines.length; l++) {
    let line = lines[l];
    
    let i = 0;
    let buffer = '';
    
    const flushBuffer = () => {
      if (buffer) {
        nodes.push(<span key={`txt-${key++}`}>{buffer}</span>);
        buffer = '';
      }
    };

    while (i < line.length) {
      // Markdown link: [Label](url)
      if (line[i] === '[') {
        const endLabel = line.indexOf(']', i + 1);
        if (endLabel !== -1 && line[endLabel + 1] === '(') {
          const endUrl = line.indexOf(')', endLabel + 2);
          if (endUrl !== -1) {
            flushBuffer();
            const label = line.slice(i + 1, endLabel);
            const url = line.slice(endLabel + 2, endUrl);
            
            nodes.push(
              <SocialLinkBadge key={`link-${key++}`} url={url} label={label} />
            );
            
            i = endUrl + 1;
            continue;
          }
        }
      }

      // Raw URL: https://...
      if (line.startsWith('http://', i) || line.startsWith('https://', i)) {
        let endUrl = i;
        while (endUrl < line.length && !/\s/.test(line[endUrl]) && !/[()*,;]/.test(line[endUrl])) {
          endUrl++;
        }
        const url = line.slice(i, endUrl);
        flushBuffer();
        
        nodes.push(
          <SocialLinkBadge key={`link-${key++}`} url={url} label="" />
        );
        
        i = endUrl;
        continue;
      }

      // Inline code: `code`
      if (line[i] === '`') {
        const end = line.indexOf('`', i + 1);
        if (end !== -1) {
          flushBuffer();
          nodes.push(
            <code key={`inline-code-${key++}`} className="px-1.5 py-0.5 rounded bg-white/10 font-mono text-xs text-yellow-300 border border-white/5 mx-0.5">
              {line.slice(i + 1, end)}
            </code>
          );
          i = end + 1;
          continue;
        }
      }

      // Bold: **bold**
      if (line.startsWith('**', i)) {
        const end = line.indexOf('**', i + 2);
        if (end !== -1) {
          flushBuffer();
          nodes.push(<strong key={`bld-${key++}`} className="font-bold text-white">{line.slice(i + 2, end)}</strong>);
          i = end + 2;
          continue;
        }
      }

      // Italic: *italic*
      if (line[i] === '*' && !line.startsWith('**', i)) {
        const end = line.indexOf('*', i + 1);
        if (end !== -1) {
          flushBuffer();
          nodes.push(<em key={`em-${key++}`} className="italic">{line.slice(i + 1, end)}</em>);
          i = end + 1;
          continue;
        }
      }

      buffer += line[i];
      i++;
    }
    
    flushBuffer();

    if (l < lines.length - 1) {
      nodes.push(<br key={`br-${key++}`} />);
    }
  }

  return nodes;
};

function AssistantSection() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hello! I'm Spectra, Arghyadip's AI assistant. I can help you learn about his impressive projects in AI and full-stack development. What would you like to know?",
      timestamp: new Date()
    }
  ])
  const messagesRef = useRef<ChatMessage[]>(messages)
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [isAIEnabled, setIsAIEnabled] = useState(false)
  const [isVoiceOn, setIsVoiceOn] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [voiceSupported, setVoiceSupported] = useState(false)
  const [speechSupported, setSpeechSupported] = useState(false)
  const chatContainerRef = useRef<HTMLDivElement>(null)
  const recognitionRef = useRef<any>(null)

  // Initialize AI
  useEffect(() => {
    const apiKey = import.meta.env.VITE_GROQ_API_KEY;
    if (apiKey) {
      initializeAI(apiKey)
      setIsAIEnabled(true)
    } else {
      setIsAIEnabled(false)
    }
  }, [])

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [messages, isTyping])

  useEffect(() => {
    messagesRef.current = messages
  }, [messages])

  useEffect(() => {
    if (typeof window === 'undefined') return
    setVoiceSupported('speechSynthesis' in window)
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition

    if (!SpeechRecognition) return
    setSpeechSupported(true)
    const recognition = new SpeechRecognition()
    recognition.lang = 'en-US'
    recognition.interimResults = false
    recognition.continuous = false
    recognition.onresult = (event: any) => {
      const transcript = Array.from(event.results)
        .map((result: any) => result[0]?.transcript || '')
        .join(' ')
        .trim()
      if (transcript) {
        setInput(prev => (prev ? `${prev} ${transcript}` : transcript))
      }
    }
    recognition.onend = () => setIsListening(false)
    recognition.onerror = () => setIsListening(false)
    recognitionRef.current = recognition

    return () => {
      recognition.stop()
      recognitionRef.current = null
    }
  }, [])

  const sendMessage = async (override?: string) => {
    const content = (override ?? input).trim()
    if (!content) return
    
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content,
      timestamp: new Date()
    }
    
    const nextMessages = [...messagesRef.current, userMessage]
    setMessages(nextMessages)
    setInput('')
    setIsTyping(true)

    try {
      // Get AI response with conversation history
      const aiResponse = await generateAIResponse(nextMessages)
      
      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: aiResponse,
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, aiMessage])
      if (isVoiceOn && typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel()
        const utterance = new SpeechSynthesisUtterance(aiMessage.content)
        utterance.rate = 1
        utterance.pitch = 1
        utterance.lang = 'en-US'
        window.speechSynthesis.speak(utterance)
      }
    } catch (error) {
      console.error('Error getting AI response:', error)
      const fallbackMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "I apologize, but I'm having trouble responding right now. Please try asking about Arghyadip's projects, skills, or experience, and I'll do my best to help!",
        timestamp: new Date()
      }
      setMessages(prev => [...prev, fallbackMessage])
    } finally {
      setIsTyping(false)
    }
  }

  const quickQuestion = async (question: string) => {
    await sendMessage(question)
  }

  const toggleVoice = () => {
    if (!voiceSupported) return
    if (isVoiceOn && typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel()
    }
    setIsVoiceOn(prev => !prev)
  }

  const toggleListening = () => {
    if (!speechSupported || !recognitionRef.current) return
    if (isListening) {
      recognitionRef.current.stop()
      setIsListening(false)
      return
    }
    setIsListening(true)
    recognitionRef.current.start()
  }

  const renderMessage = (content: string) => {
    const parts = content.split("```");
    const nodes: ReactNode[] = [];
    let key = 0;

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      if (i % 2 === 1) {
        // This is a code block
        const lines = part.split("\n");
        let language = "code";
        let code = part;
        if (lines[0] && lines[0].trim() && lines[0].trim().length < 15 && !lines[0].includes(" ") && !lines[0].includes(":") && !lines[0].includes("=") && !lines[0].includes("{")) {
          language = lines[0].trim();
          code = lines.slice(1).join("\n");
        }
        
        // Clean trailing newlines
        code = code.trim();

        // Render the code editor
        nodes.push(
          <CodeEditorBlock key={`code-${key++}`} code={code} language={language} />
        );
      } else {
        // This is normal text
        nodes.push(<span key={`text-${key++}`}>{parseText(part)}</span>);
      }
    }

    return nodes;
  }

  return (
    <section id="ai-assistant" className="section-shell assistant-shell">
      <div className="max-w-6xl mx-auto">
        <div className="assistant-header">
          <span className="about-chip">Spectra AI</span>
          <h2 className="section-title hud-title">Meet Spectra</h2>
          <p className="assistant-subtitle">
            Ask about projects, tech stack, AI work, or collaboration. Spectra gives quick, tailored answers.
          </p>
        </div>

        <div className="assistant-grid">
          {/* Left Panel: Core & Info */}
          <div className="assistant-card glass-effect flex flex-col justify-between p-6 rounded-3xl border border-white/10 bg-black/60 backdrop-blur-xl">
            <div>
              {/* Rotating holographic AI core */}
              <div className="relative w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                {/* Outer rotating ring */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-red-500/30 animate-[spin_15s_linear_infinite]" />
                {/* Inner counter-rotating ring */}
                <div className="absolute w-20 h-20 rounded-full border-2 border-dotted border-blue-500/40 animate-[spin_8s_linear_infinite_reverse]" />
                {/* Glowing Core orb */}
                <div className="absolute w-14 h-14 rounded-full bg-gradient-to-tr from-red-600 to-blue-600 flex items-center justify-center shadow-[0_0_25px_rgba(239,68,68,0.5)] animate-pulse">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    {/* Head */}
                    <rect x="4" y="6" width="16" height="12" rx="3" />
                    {/* Antenna */}
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V3" />
                    <circle cx="12" cy="2" r="1" className="fill-white" />
                    {/* Eyes */}
                    <circle cx="9" cy="11" r="1.2" className="fill-white" />
                    <circle cx="15" cy="11" r="1.2" className="fill-white" />
                    {/* Mouth */}
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15h6" />
                    {/* Ears */}
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 11H2m20 0h-2" />
                  </svg>
                </div>
              </div>

              {/* Status indicator capsule */}
              <div className="flex justify-center mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-mono tracking-wider uppercase">
                  <span className={`w-2 h-2 rounded-full ${isAIEnabled ? 'bg-green-500 animate-pulse shadow-[0_0_8px_#10b981]' : 'bg-yellow-500 shadow-[0_0_8px_#f59e0b]'}`} />
                  <span className="text-gray-300">{isAIEnabled ? 'AI ONLINE // STABLE' : 'STANDBY // ENHANCED'}</span>
                </div>
              </div>

              {/* Holographic Diagnostic List */}
              <div className="flex flex-col gap-3.5 text-[11px] text-gray-400 font-mono mb-8 px-2">
                <div className="flex items-start gap-2.5">
                  <span className="text-red-500 text-[10px] mt-0.5">▶</span>
                  <span>DATABASE: Projects, tech stacks, experience models loaded.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-blue-500 text-[10px] mt-0.5">▶</span>
                  <span>INTELLIGENCE: LLM-backed answers on AI & ML solutions.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-green-500 text-[10px] mt-0.5">▶</span>
                  <span>INTERFACE: Live secure terminal connection stable.</span>
                </div>
              </div>
            </div>

            <div>
              <div className="text-[10px] text-gray-500 font-mono tracking-widest uppercase mb-3 px-1 border-t border-white/5 pt-4">
                QUICK_QUERIES // RUN_CMD
              </div>
              <div className="assistant-quick">
                <button type="button" onClick={() => quickQuestion("What are Arghyadip's best projects?")} className="filter-chip">
                  Best Projects
                </button>
                <button type="button" onClick={() => quickQuestion("What technologies does he use?")} className="filter-chip">
                  Tech Stack
                </button>
                <button type="button" onClick={() => quickQuestion("Tell me about his AI experience")} className="filter-chip">
                  AI Experience
                </button>
                <button type="button" onClick={() => quickQuestion("How can I contact Arghyadip?")} className="filter-chip">
                  Contact Info
                </button>
                <button type="button" onClick={() => quickQuestion("Is he available for projects?")} className="filter-chip">
                  Availability
                </button>
              </div>
            </div>
          </div>

          {/* Right Panel: Chat Console */}
          <div className="assistant-chat glass-effect flex flex-col justify-between p-6 rounded-3xl border border-white/10 bg-black/60 backdrop-blur-xl">
            {/* HUD Console Header */}
            <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/10 font-mono">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl overflow-hidden border border-white/10 shadow-[0_0_10px_rgba(239,68,68,0.4)] relative shrink-0">
                  <img src="/assets/Arghyadip.jpg" className="w-full h-full object-cover" alt="Arghyadip" />
                  <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-green-500 border-2 border-[#060a12] animate-pulse" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-white leading-tight">Spectra Console</h3>
                  <p className="text-[9px] text-gray-400 mt-0.5 flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-green-500 animate-ping" />
                    {isAIEnabled ? 'AI_CORE_ONLINE // SECURE' : 'SYSTEM_STANDBY // ACTIVE'}
                  </p>
                </div>
              </div>
              <div className="text-right hidden sm:block font-mono">
                <span className="text-[9px] text-gray-500 block">LINK: SECURE_CHANNEL</span>
                <span className="text-[8px] text-red-500 mt-0.5 block font-semibold animate-pulse">PING: 14ms</span>
              </div>
            </div>

            {/* Chat Messages Area */}
            <div ref={chatContainerRef} className="chat-window flex-1 min-h-[320px] max-h-[400px] overflow-y-auto mb-4 p-4 rounded-xl bg-black/40 border border-white/5 flex flex-col gap-4 scrollbar-none" id="chatContainer">
              {messages.map((message) => (
                <div key={message.id} className={`flex gap-3 items-end ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {message.role === 'assistant' && (
                    <div className="w-7 h-7 rounded-full overflow-hidden border border-white/10 shadow-[0_0_8px_rgba(239,68,68,0.3)] shrink-0 mb-1">
                      <img src="/assets/Arghyadip.jpg" className="w-full h-full object-cover" alt="Arghyadip" />
                    </div>
                  )}
                  <div className={`max-w-[75%] p-3 rounded-xl text-xs leading-relaxed font-sans shadow-lg relative ${
                    message.role === 'user' 
                      ? 'bg-gradient-to-r from-red-600/90 to-red-500/90 text-white border border-red-500/30 rounded-br-none' 
                      : 'bg-[#0f172a]/95 text-gray-200 border border-blue-500/20 backdrop-blur-md rounded-bl-none'
                  }`}>
                    {/* Visual connection line */}
                    <div className={`absolute top-4 w-4 h-[1px] opacity-40 pointer-events-none hidden sm:block ${
                      message.role === 'user' 
                        ? 'left-full bg-gradient-to-r from-red-500/50 to-transparent' 
                        : 'right-full bg-gradient-to-l from-blue-500/50 to-transparent'
                    }`} />
                    <p>{renderMessage(message.content)}</p>
                    <span className="text-[8px] text-white/50 mt-1.5 block text-right font-mono">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                  {message.role === 'user' && (
                    <div className="w-7 h-7 rounded-full bg-slate-800 flex items-center justify-center text-[8px] font-bold font-mono text-gray-300 border border-white/10 shrink-0 mb-1 shadow-[0_0_6px_rgba(255,255,255,0.05)]">
                      YOU
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-3 items-end justify-start">
                  <div className="w-7 h-7 rounded-full overflow-hidden border border-white/10 shadow-[0_0_8px_rgba(239,68,68,0.3)] shrink-0 mb-1">
                    <img src="/assets/Arghyadip.jpg" className="w-full h-full object-cover" alt="Arghyadip" />
                  </div>
                  <div className="bg-[#0f172a]/95 text-gray-200 border border-blue-500/20 backdrop-blur-md p-3.5 rounded-xl rounded-bl-none shadow-lg relative min-w-[80px]">
                    <div className="flex gap-1.5 items-center py-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Futuristic Input Pill */}
            <div className="flex items-center gap-2 bg-black/40 border border-white/10 focus-within:border-red-500/30 rounded-2xl p-2 transition-all duration-300">
              {speechSupported && (
                <button
                  type="button"
                  onClick={toggleListening}
                  className={`p-2 rounded-xl transition-all duration-200 shrink-0 ${
                    isListening 
                      ? 'bg-red-500/20 text-red-400 border border-red-500/30 shadow-[0_0_10px_rgba(239,68,68,0.3)]' 
                      : 'text-gray-400 hover:text-gray-200 hover:bg-white/5 border border-transparent'
                  }`}
                  title={isListening ? 'Stop Listening' : 'Voice Input (Mic)'}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                  </svg>
                </button>
              )}

              <input
                id="chatInput"
                type="text"
                className="bg-transparent border-none outline-none text-white text-xs flex-1 px-2 focus:ring-0 placeholder-gray-500"
                placeholder="Ask Spectra anything..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') sendMessage() }}
                disabled={isTyping}
              />

              {voiceSupported && (
                <button
                  type="button"
                  onClick={toggleVoice}
                  className={`p-2 rounded-xl transition-all duration-200 shrink-0 ${
                    isVoiceOn 
                      ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30 shadow-[0_0_10px_rgba(59,130,246,0.3)]' 
                      : 'text-gray-400 hover:text-gray-200 hover:bg-white/5 border border-transparent'
                  }`}
                  title={isVoiceOn ? 'Mute AI Voice' : 'Enable AI Voice Response'}
                >
                  {isVoiceOn ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25-2.25m-10.5-6L4.03 14.07a1.125 1.125 0 01-1.045.707H2.25A2.25 2.25 0 010 12.5v-1a2.25 2.25 0 012.25-2.25h.735c.422 0 .806-.237.996-.608L8.25 3.75a.75.75 0 011.25.562v15.376a.75.75 0 01-1.25.562L5.25 14.25" />
                    </svg>
                  )}
                </button>
              )}

              <button
                onClick={() => sendMessage()}
                disabled={isTyping || !input.trim()}
                className="p-2 rounded-xl bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-500 hover:to-blue-500 text-white shadow-[0_0_12px_rgba(239,68,68,0.3)] transition-all duration-200 active:scale-[0.95] disabled:opacity-30 disabled:cursor-not-allowed disabled:shadow-none shrink-0"
              >
                {isTyping ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Saptarshi',
      role: 'Fullstack Developer',
      company: 'SIH Qualifier',
      avatar: '/assets/Saptarshi.jpeg',
      quote: 'I’ve had the pleasure of knowing Arghyadip for 5 years, and I am consistently impressed by their dedication and problem-solving skills. They bring an incredible mix of passion and professionalism to everything they do. Any team or client would be incredibly lucky to have their energy and expertise.',
      rating: 5,
      time: 'Recently',
      badge: '★',
    },
    {
      name: 'Indradeep Thakur',
      role: 'CAP Associate',
      company: 'Amazon',
      avatar: '/assets/Indradeep.jpeg',
      quote: 'Working with Arghyadip has been a great experience. He consistently demonstrates a strong willingness to learn, solve challenging problems, and build practical solutions. His curiosity, dedication, and ability to quickly adapt to new technologies set him apart. I am confident that his passion for software development and continuous improvement will help him achieve great success in his career.',
      rating: 5,
      time: 'Recently',
      badge: '🏆',
    },
    {
      name: 'Krishnendu Patra',
      role: 'SDE III',
      company: 'American Express',
      avatar: '/assets/Krishnendu.png',
      quote: 'Arghyadip has shown impressive enthusiasm for technology and software engineering. His commitment to strengthening his technical skills, combined with his problem-solving mindset and eagerness to take on new challenges, makes him a promising engineer. He approaches every project with dedication and a growth-oriented attitude.',
      rating: 5,
      time: 'Recently',
      badge: '🚀',
    },
    {
      name: 'Sayan Manik',
      role: 'Data Engineer',
      company: 'EY',
      avatar: '/assets/sayan.png',
      quote: 'Arghyadip is a motivated and hardworking individual with a genuine passion for technology and continuous learning. His ability to quickly grasp new concepts, combined with his dedication to building practical and impactful solutions, reflects his strong potential as a software engineer. He approaches every challenge with curiosity, perseverance, and a positive attitude.',
      rating: 5,
      time: 'Recently',
      badge: '💎',
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const total = testimonials.length

  useEffect(() => {
    if (typeof window === 'undefined') return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reduceMotion.matches) return
    const id = window.setInterval(() => {
      setActiveIndex(index => (index + 1) % total)
    }, 7000)
    return () => window.clearInterval(id)
  }, [total])

  const handlePrev = () => setActiveIndex(index => (index - 1 + total) % total)
  const handleNext = () => setActiveIndex(index => (index + 1) % total)

  return (
    <section className="section-shell section-surface">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold glow-text hud-title mb-6 font-[Orbitron]">Testimonials</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#e62429] to-[#1e4fff] mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">Cinematic feedback from collaborators and industry leaders.</p>
        </div>

        <div className="testimonial-carousel">
          <div className="testimonial-track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="testimonial-slide">
                <div className="testimonial-card glass-card rounded-2xl p-8 relative group">
                  <div className="quote-icon">"</div>
                  <div className="testimonial-badge">{testimonial.badge}</div>
                  <div className="flex items-center mb-6">
                    <div className="relative">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        loading="lazy"
                        decoding="async"
                        className="w-16 h-16 rounded-full avatar-glow transition-transform group-hover:scale-110"
                      />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-xl font-semibold text-[#00ffd5] mb-1">{testimonial.name}</h4>
                      <p className="text-gray-400">{testimonial.role}</p>
                      <p className="text-sm text-gray-500">{testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.quote}"</p>
                  <div className="flex items-center justify-between">
                    <div className="rating-stars text-xl">{'★'.repeat(testimonial.rating)}</div>
                    <span className="text-sm text-gray-500">{testimonial.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="testimonial-controls">
          <button className="testimonial-button" type="button" onClick={handlePrev} aria-label="Previous testimonial">‹</button>
          <div className="testimonial-dots">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.name}
                type="button"
                className={`testimonial-dot ${index === activeIndex ? 'is-active' : ''}`}
                aria-label={`Go to testimonial ${index + 1}`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
          <button className="testimonial-button" type="button" onClick={handleNext} aria-label="Next testimonial">›</button>
        </div>

        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <div className="flex items-center"><span className="text-2xl mr-2">🏆</span><span className="text-sm">30+ Projects Completed</span></div>
            <div className="flex items-center"><span className="text-2xl mr-2">⭐</span><span className="text-sm">4.9/5 Average Rating</span></div>
            <div className="flex items-center"><span className="text-2xl mr-2">🚀</span><span className="text-sm">15+ Happy Clients</span></div>
            <div className="flex items-center"><span className="text-2xl mr-2">💎</span><span className="text-sm">5+ Years Experience</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}

function BlogSection() {
  return (
    <section id="blog" className="section-shell">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center glow-text hud-title mb-8 md:mb-12 font-[Orbitron]">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <article className="glass-effect rounded-xl overflow-hidden hover:scale-105 transition-transform">
            <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80" alt="Building AI-Powered Applications" className="h-48 w-full object-cover" loading="lazy" decoding="async" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#00ffd5] mb-2">Building AI-Powered Applications</h3>
              <p className="text-gray-400 text-sm mb-4">Explore how to integrate machine learning models into real-world applications...</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">Jan 15, 2025</span>
                <Link to="/ai-powered-applications" className="text-[#00ffd5] text-sm hover:underline">Read More</Link>
              </div>
            </div>
          </article>
          <article className="glass-effect rounded-xl overflow-hidden hover:scale-105 transition-transform">
            <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80" alt="Modern Full-Stack Development" className="h-48 w-full object-cover" loading="lazy" decoding="async" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#00ffd5] mb-2">Modern Full-Stack Development</h3>
              <p className="text-gray-400 text-sm mb-4">Best practices for building scalable web applications with React and Node.js...</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">Jan 10, 2025</span>
                <Link to="/articles" className="text-[#00ffd5] text-sm hover:underline">Read More</Link>
              </div>
            </div>
          </article>
          <article className="glass-effect rounded-xl overflow-hidden hover:scale-105 transition-transform">
            <img src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=800&q=80" alt="Future of Smart Cities" className="h-48 w-full object-cover" loading="lazy" decoding="async" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#00ffd5] mb-2">India's Smart City Revolution</h3>
              <p className="text-gray-400 text-sm mb-4">How AI and IoT are transforming urban infrastructure in Indian cities...</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">Jan 5, 2025</span>
                <Link to="/SmartCitiesPage" className="text-[#00ffd5] text-sm hover:underline">Read More</Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  const [formStatus, setFormStatus] = useState<'IDLE' | 'SENDING' | 'SUCCESS' | 'ERROR'>('IDLE');
  const [copiedText, setCopiedText] = useState<'NONE' | 'EMAIL' | 'PHONE'>('NONE');
  const [showMap, setShowMap] = useState(false);

  const handleCopy = (text: string, type: 'EMAIL' | 'PHONE') => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => {
      setCopiedText('NONE');
    }, 2000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('SENDING');
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setFormStatus('SUCCESS');
        form.reset();
      } else {
        setFormStatus('ERROR');
      }
    } catch (error) {
      setFormStatus('ERROR');
    }
  };

  return (
    <section id="contact" className="section-shell bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center glow-text hud-title mb-8 md:mb-12 font-[Orbitron]">Get In Touch</h2>
        <div className="glass-effect rounded-2xl p-4 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-[#00ffd5] mb-6">Let's Build Something Amazing</h3>
              <p className="text-gray-400 mb-6">Have a project in mind? Let's discuss how we can bring your ideas to life with cutting-edge technology.</p>

              <div className="space-y-4">
                <div className="flex items-center justify-between max-w-sm">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-[#00ffd5] rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <span className="text-gray-300 text-sm">arghyadip.info@gmail.com</span>
                  </div>
                  <button
                    onClick={() => handleCopy('arghyadip.info@gmail.com', 'EMAIL')}
                    className="p-1.5 text-gray-500 hover:text-[#00ffd5] rounded-lg transition-colors flex items-center justify-center bg-white/5 border border-white/5 hover:bg-white/10"
                    title="Copy Email"
                  >
                    {copiedText === 'EMAIL' ? (
                      <span className="text-[9px] text-[#00ffd5] font-mono px-1 font-bold">COPIED</span>
                    ) : (
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                      </svg>
                    )}
                  </button>
                </div>
                
                <div className="flex items-center justify-between max-w-sm">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-[#00ffd5] rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                      </svg>
                    </div>
                    <span className="text-gray-300 text-sm">+91 9732740816</span>
                  </div>
                  <button
                    onClick={() => handleCopy('+919732740816', 'PHONE')}
                    className="p-1.5 text-gray-500 hover:text-[#00ffd5] rounded-lg transition-colors flex items-center justify-center bg-white/5 border border-white/5 hover:bg-white/10"
                    title="Copy Phone Number"
                  >
                    {copiedText === 'PHONE' ? (
                      <span className="text-[9px] text-[#00ffd5] font-mono px-1 font-bold">COPIED</span>
                    ) : (
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                      </svg>
                    )}
                  </button>
                </div>

                <div 
                  onClick={() => setShowMap(!showMap)} 
                  className="flex items-center justify-between max-w-sm cursor-pointer group/loc"
                  title="Locate on HUD map"
                >
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-[#00ffd5] rounded-full flex items-center justify-center mr-3 transition-transform group-hover/loc:scale-105">
                      <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <span className="text-gray-300 text-sm group-hover/loc:text-[#00ffd5] transition-colors">
                      Kolkata, West Bengal, India
                    </span>
                  </div>
                  <span className="text-[10px] text-gray-500 font-mono group-hover/loc:text-[#00ffd5] transition-colors font-bold uppercase tracking-wider px-1">
                    {showMap ? '[ CLOSE ]' : '[ LOCATE ]'}
                  </span>
                </div>

                {/* Animated HUD Radar Map Dropdown */}
                {showMap && (
                  <div className="mt-4 p-5 rounded-2xl bg-black/80 border border-[#00ffd5]/25 shadow-[0_0_25px_rgba(0,255,213,0.15)] overflow-hidden relative max-w-sm animate-slide-down">
                    {/* Scanning Grid Background */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,213,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,213,0.035)_1px,transparent_1px)] bg-[size:16px_16px]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_60%,rgba(0,0,0,0.85))] pointer-events-none" />
                    
                    {/* Glowing Scan Line */}
                    <div className="absolute left-0 right-0 h-[2px] bg-[#00ffd5]/20 shadow-[0_0_8px_#00ffd5] animate-radar-scan z-10 pointer-events-none" />

                    <div className="relative z-10 flex flex-col items-center py-2">
                      {/* Radar Target Circle */}
                      <div className="relative w-36 h-36 rounded-full border border-[#00ffd5]/20 flex items-center justify-center">
                        {/* Outer rotating dashed scan */}
                        <div className="absolute inset-0 rounded-full border border-dashed border-[#00ffd5]/20 animate-[spin_12s_linear_infinite]" />
                        
                        {/* Inner rotating compass rings */}
                        <div className="absolute inset-4 rounded-full border border-double border-[#00ffd5]/15 animate-[spin_8s_linear_infinite_reverse]" />
                        
                        {/* Center static crosshairs */}
                        <div className="absolute w-full h-[1px] bg-[#00ffd5]/10" />
                        <div className="absolute h-full w-[1px] bg-[#00ffd5]/10" />
                        
                        {/* Sweep scanning cone */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#00ffd5]/0 via-[#00ffd5]/0 to-[#00ffd5]/15 animate-[spin_4s_linear_infinite]" />

                        {/* Locator Pin (Target coordinate) */}
                        <div className="absolute flex flex-col items-center justify-center">
                          {/* Pulsing Concentric rings */}
                          <span className="absolute inline-flex h-8 w-8 rounded-full bg-[#00ffd5]/25 animate-ping"></span>
                          <span className="absolute inline-flex h-4 w-4 rounded-full bg-[#00ffd5]/40 animate-pulse"></span>
                          {/* Center locator dot */}
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ffd5] shadow-[0_0_8px_#00ffd5]"></span>
                        </div>
                      </div>

                      {/* Info Display */}
                      <div className="mt-4 text-center font-mono">
                        <div className="text-[#00ffd5] text-xs font-bold tracking-widest animate-pulse">LOCATOR : TARGET ACQUIRED</div>
                        <div className="text-gray-300 text-[10px] mt-1.5 font-semibold">22.5726° N, 88.3639° E</div>
                        <div className="text-gray-500 text-[9px] uppercase tracking-widest mt-1">Kolkata // Earth-616</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-8">
                <h4 className="text-xl text-[#00ffd5] font-semibold mb-4">Connect with me</h4>
                <div className="flex space-x-5">
                  <a href="https://www.linkedin.com/in/arghyadip-pakhira" target="_blank" aria-label="LinkedIn" className="hover:scale-110 transition transform duration-300">
                    <svg className="w-6 h-6 fill-[#e62429] hover:fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0H13v2.25h.09c.77-1.45 2.65-2.25 4.41-2.25 4.74 0 5.5 3.12 5.5 7.19V24h-5v-7.44c0-1.78-.03-4.08-2.5-4.08s-2.88 1.95-2.88 3.95V24h-5V8z" />
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/arghya_dip7" target="_blank" aria-label="Instagram" className="hover:scale-110 transition transform duration-300">
                    <svg className="w-6 h-6 fill-[#e62429] hover:fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.056 1.95.24 2.4.4.49.18.84.39 1.21.75.37.36.57.72.75 1.21.16.45.34 1.23.4 2.4.058 1.26.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.95-.4 2.4-.18.49-.39.84-.75 1.21-.36.37-.72.57-1.21.75-.45.16-1.23.34-2.4.4C8.416 2.212 8.8 2.2 12 2.2zm0 1.8c-3.146 0-3.507.012-4.74.068-.997.045-1.537.21-1.897.35a2.774 2.774 0 0 0-1.01.66 2.774 2.774 0 0 0-.66 1.01c-.14.36-.305.9-.35 1.897-.056 1.233-.068 1.594-.068 4.74s.012 3.507.068 4.74c.045.997.21 1.537.35 1.897.15.49.35.74.66 1.01.27.27.52.51 1.01.66.36.14.9.305 1.897.35 1.233.056 1.594.068 4.74.068s3.507-.012 4.74-.068c.997-.045 1.537-.21 1.897-.35.49-.15.74-.35 1.01-.66.27-.27.51-.52.66-1.01.14-.36.305-.9.35-1.897.056-1.233.068-1.594.068-4.74s-.012-3.507-.068-4.74c-.045-.997-.21-1.537-.35-1.897a2.774 2.774 0 0 0-.66-1.01 2.774 2.774 0 0 0-1.01-.66c-.36-.14-.9-.305-1.897-.35C15.507 4.012 15.146 4 12 4zm0 3.6a4.4 4.4 0 1 1 0 8.8 4.4 4.4 0 0 1 0-8.8zm0 1.8a2.6 2.6 0 1 0 0 5.2 2.6 2.6 0 0 0 0-5.2zm4.88-.92a1.04 1.04 0 1 1-2.08 0 1.04 1.04 0 0 1 2.08 0z" />
                    </svg>
                  </a>
                  <a href="https://x.com/Arghya_dip7" target="_blank" aria-label="X" className="hover:scale-110 transition transform duration-300">
                    <svg className="w-6 h-6 fill-[#e62429] hover:fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.53 3H21.5l-7.19 8.21L23 21h-6.38l-5.01-6.13L5.5 21H1.5l7.61-8.7L1 3h6.5l4.41 5.4L17.53 3zm-1.09 15h2.18l-6.29-7.7-2.18 2.5L16.44 18zM6.41 5h-2.2l6.3 7.7 2.18-2.5L6.41 5z" />
                    </svg>
                  </a>
                  <a href="https://www.facebook.com/arghya.dip.07" target="_blank" aria-label="Facebook" className="hover:scale-110 transition transform duration-300">
                    <svg className="w-6 h-6 fill-[#e62429] hover:fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.351C0 23.4.6 24 1.325 24H12.82V14.706h-3.129v-3.623h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.796.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.623h-3.12V24h6.116c.729 0 1.325-.6 1.325-1.324V1.325C24 .6 23.404 0 22.675 0z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4" id="contactForm" action="https://formspree.io/f/mzzgkowd" method="POST">
              <div>
                <input type="text" name="name" placeholder="Your Name" required className="form-input w-full" disabled={formStatus === 'SENDING'} />
              </div>
              <div>
                <input type="email" name="email" placeholder="Your Email" required className="form-input w-full" disabled={formStatus === 'SENDING'} />
              </div>
              <div>
                <select name="project_type" required className="form-input w-full" disabled={formStatus === 'SENDING'}>
                  <option value="" disabled>Select Project Type</option>
                  <option value="Web Development">Web Development</option>
                  <option value="AI/ML Solution">AI/ML Solution</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Consultation">Consultation</option>
                  <option value="Open Source Collaboration">Open Source Collaboration</option>
                  <option value="Other">Other (please specify in message)</option>
                </select>
              </div>
              <div>
                <textarea name="message" placeholder="Your Message" required rows={4} className="form-input w-full" disabled={formStatus === 'SENDING'}></textarea>
              </div>
              <div>
                <button type="submit" disabled={formStatus === 'SENDING'} className="btn-primary w-full flex items-center justify-center gap-2">
                  {formStatus === 'SENDING' ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : 'Send'}
                </button>
              </div>

              {formStatus === 'SUCCESS' && (
                <div className="text-green-400 text-sm font-mono text-center mt-2 p-2 rounded bg-green-500/10 border border-green-500/20">
                  ✓ Message sent successfully! I will get back to you soon.
                </div>
              )}
              {formStatus === 'ERROR' && (
                <div className="text-red-400 text-sm font-mono text-center mt-2 p-2 rounded bg-red-500/10 border border-red-500/20">
                  ✗ Failed to send message. Please try again or email directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionFold({ children, variant = 'tl' }: { children: ReactNode, variant?: 'tl' | 'tr' | 'bl' | 'br' }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !open) {
          setOpen(true)
          obs.unobserve(el)
        }
      })
    }, { threshold: 0.3 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [open])

  const origin = {
    tl: { transformOrigin: 'top left' },
    tr: { transformOrigin: 'top right' },
    bl: { transformOrigin: 'bottom left' },
    br: { transformOrigin: 'bottom right' },
  }[variant]

  return (
    <div ref={ref} className="fold-wrap">
      <div className={`fold-panel ${open ? 'is-open' : ''}`} style={origin}>
        {children}
      </div>
    </div>
  )
}

function StatsSection() {
  return (
    <section id="stats" className="section-shell">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center glow-text hud-title mb-8 md:mb-12 font-[Orbitron]">By The Numbers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#00ffd5] mb-2 counter" data-target="34">0</div>
            <p className="text-gray-400">Projects Completed</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#00ffd5] mb-2 counter" data-target="40">0</div>
            <p className="text-gray-400">GitHub Repositories</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#00ffd5] mb-2 counter" data-target="1040">0</div>
            <p className="text-gray-400">Code Commits</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#00ffd5] mb-2 counter" data-target="2433">0</div>
            <p className="text-gray-400">LinkedIn Connection</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('Frontend');

  const skillCategories = [
    {
      id: 'Frontend',
      title: 'Frontend Development',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: '#00ffd5',
      glow: 'shadow-[0_0_20px_rgba(0,255,213,0.15)]',
      skills: [
        { name: 'Next.js', logo: '/icons/nextjs.svg', level: 'Expert', desc: 'App Router, Server Components, SSR/ISR page renders, Server Actions' },
        { name: 'React.js', logo: '/icons/react.svg', level: 'Advanced', desc: 'Hooks, Context API, state management, lazy rendering optimization' },
        { name: 'TypeScript', logo: '/icons/typescript.svg', level: 'Advanced', desc: 'Strict static typing, complex interface designs, generics, custom types' },
        { name: 'Tailwind CSS', logo: '/icons/Tailwind_CSS.png', level: 'Expert', desc: 'Utility-first layout grids, responsive design, custom animation properties' }
      ]
    },
    {
      id: 'Backend',
      title: 'Backend Systems',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      color: '#3b82f6',
      glow: 'shadow-[0_0_20px_rgba(59,130,246,0.15)]',
      skills: [
        { name: 'Node.js', logo: '/icons/nodejs.png', level: 'Advanced', desc: 'Server-side runtime, async APIs, node packages' },
        { name: 'Express.js', logo: '/icons/exjs.png', level: 'Advanced', desc: 'Restful API routing, middleware chaining & architecture' },
        { name: 'MongoDB', logo: '/icons/mdb.svg', level: 'Proficient', desc: 'Document databases, Mongoose schema modeling, aggregation' },
        { name: 'MySQL', logo: '/icons/mysql.svg', level: 'Proficient', desc: 'Relational database designs, indexes, SQL querying' }
      ]
    },
    {
      id: 'AI / ML',
      title: 'Artificial Intelligence',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 5h10a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 9h6v6H9V9z" />
        </svg>
      ),
      color: '#a855f7',
      glow: 'shadow-[0_0_20px_rgba(168,85,247,0.15)]',
      skills: [
        { name: 'Python', logo: '/icons/Python.png', level: 'Advanced', desc: 'Mathematical scripting, OOP & algorithm engineering' },
        { name: 'TensorFlow', logo: '/icons/tf.png', level: 'Familiar', desc: 'Neural network design, training pipelines, deep learning' },
        { name: 'scikit-learn', logo: '/icons/sciklit.png', level: 'Proficient', desc: 'Data preprocessing, regression, clustering models' }
      ]
    },
    {
      id: 'DevOps',
      title: 'DevOps & Cloud',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      ),
      color: '#eab308',
      glow: 'shadow-[0_0_20px_rgba(234,179,8,0.15)]',
      skills: [
        { name: 'Git', logo: '/icons/git.png', level: 'Advanced', desc: 'Version control, conflict resolution, branching models' },
        { name: 'Docker', logo: '/icons/docker.svg', level: 'Familiar', desc: 'Container isolation, Dockerfiles, custom deployments' },
        { name: 'GitHub Actions', logo: '/icons/github actions.png', level: 'Familiar', desc: 'CI/CD runner automation, testing, and deployment' }
      ]
    },
    {
      id: 'Tools',
      title: 'Tools & Systems',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      color: '#10b981',
      glow: 'shadow-[0_0_20px_rgba(16,185,129,0.15)]',
      skills: [
        { name: 'VS Code', logo: '/icons/vscode.png', level: 'Expert', desc: 'Advanced development setup & task automations' },
        { name: 'Postman', logo: '/icons/postman.svg', level: 'Advanced', desc: 'Rest/GraphQL request builds, test scripts & collections' }
      ]
    },
    {
      id: 'Superhero',
      title: 'Superhero Instincts',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: '#ef4444',
      glow: 'shadow-[0_0_20px_rgba(239,68,68,0.15)]',
      skills: [
        { 
          name: 'Web-Slinging Code', 
          emoji: (
            <svg className="w-5.5 h-5.5 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          ), 
          level: '99%', 
          desc: 'Building high-performance responsive web pages' 
        },
        { 
          name: 'Problem-Solving', 
          emoji: (
            <svg className="w-5.5 h-5.5 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 01-2 2h0a2 2 0 01-2-2v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          ), 
          level: '95%', 
          desc: 'Resolving complex logical algorithmic hurdles' 
        },
        { 
          name: 'Quick Adaptation', 
          emoji: (
            <svg className="w-5.5 h-5.5 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          ), 
          level: '90%', 
          desc: 'Rapidly parsing new codebases and system stacks' 
        }
      ]
    }
  ];

  const currentCategory = skillCategories.find(c => c.id === activeCategory) || skillCategories[0];

  return (
    <section id="skills" className="section-shell section-surface text-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="section-title hud-title text-center mb-12">Skills Matrix</h2>
        
        {/* Futuristic HUD Console */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-black/60 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.6)] relative overflow-hidden">
          {/* Glowing Background Accent */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[140px] pointer-events-none opacity-10 transition-all duration-700"
            style={{ backgroundColor: currentCategory.color }}
          />
          {/* Cyber grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

          {/* Left Panel: Category Selector (Vertical Tabs) */}
          <div className="md:col-span-4 flex flex-col gap-2 relative z-10">
            <div className="text-[10px] text-gray-500 font-mono tracking-widest uppercase mb-3 px-3">
              SELECT MODULE //
            </div>
            <div className="flex flex-row md:flex-col overflow-x-auto md:overflow-visible gap-2 pb-2 md:pb-0 scrollbar-none">
              {skillCategories.map((cat) => {
                const isActive = cat.id === activeCategory;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl border text-left font-mono transition-all duration-300 whitespace-nowrap md:whitespace-normal active:scale-[0.98] ${
                      isActive 
                        ? `bg-white/5 border-opacity-50 text-white shadow-[0_0_15px_var(--active-glow)]` 
                        : 'bg-transparent border-transparent text-gray-400 hover:text-white hover:border-[var(--hover-border)] hover:shadow-[0_0_12px_var(--hover-glow)] hover:bg-white/5'
                    }`}
                    style={{ 
                      borderColor: isActive ? cat.color : 'transparent',
                      '--hover-border': `${cat.color}40`,
                      '--hover-glow': `${cat.color}15`,
                      '--active-glow': `${cat.color}25`
                    } as React.CSSProperties}
                  >
                    <span 
                      className="text-base transition-all duration-300" 
                      style={{ 
                        color: isActive ? cat.color : undefined,
                        filter: isActive ? `drop-shadow(0 0 5px ${cat.color})` : 'none'
                      }}
                    >
                      {cat.icon}
                    </span>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold tracking-wider leading-none">
                        {cat.id.toUpperCase()}
                      </span>
                      <span className="text-[9px] text-gray-500 mt-1 hidden md:block">
                        {cat.skills.length} Loaded Nodes
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block col-span-1 flex justify-center py-4 relative z-10">
            <div className="w-[1px] h-full bg-white/10" />
          </div>

          {/* Right Panel: Active Category Node Matrix */}
          <div className="md:col-span-7 flex flex-col relative z-10 min-h-[300px]">
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/10 font-mono">
              <span className="text-[10px] text-gray-400 tracking-wider">
                ACTIVE SYSTEM: <span style={{ color: currentCategory.color }} className="font-bold">{currentCategory.title.toUpperCase()}</span>
              </span>
              <span className="text-[10px] text-gray-500">
                SECURE CONNECTIONS // OK
              </span>
            </div>

            {/* Matrix Items */}
            <div key={activeCategory} className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-slide-down">
              {currentCategory.skills.map((skill) => (
                <div 
                  key={skill.name}
                  className="flex flex-col p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-[var(--node-accent-hover)] hover:shadow-[0_0_20px_var(--node-accent-glow)] transition-all duration-300 relative group/node cursor-default overflow-hidden"
                  style={{
                    '--node-accent': currentCategory.color,
                    '--node-accent-glow': `${currentCategory.color}15`,
                    '--node-accent-hover': `${currentCategory.color}40`,
                  } as React.CSSProperties}
                >
                  {/* Subtle background glow on hover */}
                  <div 
                    className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_center,var(--node-accent-glow)_0%,transparent_70%)] opacity-0 group-hover/node:opacity-100 transition-opacity duration-500 pointer-events-none"
                  />

                  {/* Header: Logo, Name & level tag */}
                  <div className="flex items-center justify-between mb-3 relative z-10">
                    <div className="flex items-center gap-2.5">
                      {skill.logo ? (
                        <img src={skill.logo} className="w-5 h-5 object-contain" alt={skill.name} />
                      ) : (
                        <span className="text-lg leading-none">{skill.emoji}</span>
                      )}
                      <span className="text-sm font-bold tracking-wide text-white">{skill.name}</span>
                    </div>
                    <span 
                      className="text-[9px] font-mono font-semibold px-2 py-0.5 rounded bg-white/5 border transition-colors duration-300"
                      style={{ 
                        color: 'var(--node-accent)', 
                        borderColor: 'var(--node-accent-hover)' 
                      }}
                    >
                      {skill.level}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-[11px] text-gray-400 leading-relaxed font-sans mt-1 relative z-10">
                    {skill.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Status bar */}
            <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between text-[9px] font-mono text-gray-500">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full animate-ping" style={{ backgroundColor: currentCategory.color }} />
                <span>INDEX_NODE // READY</span>
              </div>
              <div>COORDS: 616_NODE_SECURE</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HudNav() {
  const sections = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'ai-assistant', label: 'ChatBot' },
    { id: 'contact', label: 'Contact' },
  ]
  const [activeId, setActiveId] = useState('about')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -50% 0px' }
    )

    sections.forEach(section => {
      const el = document.getElementById(section.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="hud-nav" aria-label="Section navigation">
      {sections.map(section => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className={`hud-link ${activeId === section.id ? 'is-active' : ''}`}
          aria-current={activeId === section.id ? 'page' : undefined}
        >
          {section.label}
        </a>
      ))}
    </nav>
  )
}

function SectionDivider() {
  return (
    <div className="spider-divider" aria-hidden="true">
      <span className="divider-core" />
    </div>
  )
}

function useWebParallax(enabled: boolean) {
  useEffect(() => {
    if (!enabled) {
      document.documentElement.style.setProperty('--parallax-x', '0px')
      document.documentElement.style.setProperty('--parallax-y', '0px')
      document.documentElement.style.setProperty('--parallax-rotate', '0deg')
      return
    }
    if (typeof window === 'undefined') return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const finePointer = window.matchMedia('(pointer: fine)')
    if (reduceMotion.matches || !finePointer.matches) return

    let targetX = 0
    let targetY = 0
    let currentX = 0
    let currentY = 0
    let rafId = 0

    const onMove = (event: MouseEvent) => {
      const x = event.clientX / window.innerWidth - 0.5
      const y = event.clientY / window.innerHeight - 0.5
      targetX = x * 30
      targetY = y * 24
    }

    const animate = () => {
      currentX += (targetX - currentX) * 0.08
      currentY += (targetY - currentY) * 0.08
      document.documentElement.style.setProperty('--parallax-x', `${currentX}px`)
      document.documentElement.style.setProperty('--parallax-y', `${currentY}px`)
      document.documentElement.style.setProperty('--parallax-rotate', `${currentX * 0.08}deg`)
      rafId = window.requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove)
    animate()

    return () => {
      window.removeEventListener('mousemove', onMove)
      if (rafId) cancelAnimationFrame(rafId)
      document.documentElement.style.setProperty('--parallax-x', '0px')
      document.documentElement.style.setProperty('--parallax-y', '0px')
      document.documentElement.style.setProperty('--parallax-rotate', '0deg')
    }
  }, [enabled])
}

interface SystemControlPanelProps {
  theme: 'cyber' | 'terminal';
  toggleTheme: () => void;
  perfMode: boolean;
  togglePerfMode: () => void;
}

function SystemControlPanel({ theme, toggleTheme, perfMode, togglePerfMode }: SystemControlPanelProps) {
  return (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-3 bg-black/75 border border-white/10 px-3 py-2 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.5)] pointer-events-auto backdrop-blur-md select-none text-white text-xs">
      {/* Dynamic Status Pill */}
      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/5">
        <span className={`w-1.5 h-1.5 rounded-full ${perfMode ? 'bg-amber-400 animate-pulse' : 'bg-[#00ffd5] animate-pulse'}`}></span>
        <span className="font-mono text-[9px] font-bold tracking-wider text-gray-400 uppercase">
          616 • {perfMode ? 'ECO' : 'PERF'}
        </span>
      </div>

      {/* Thin Divider */}
      <div className="w-[1px] h-4.5 bg-white/15"></div>

      {/* Action Icons */}
      <div className="flex items-center gap-1">
        {/* Toggle Theme Button */}
        <button
          onClick={toggleTheme}
          className="flex items-center justify-center p-1.5 hover:bg-white/10 rounded-full transition-all active:scale-95 group relative text-gray-400 hover:text-white"
          title={`Switch to ${theme === 'cyber' ? 'Terminal' : 'Cyber'} Theme`}
        >
          {theme === 'cyber' ? (
            // Terminal Icon (Code)
            <svg className="w-4 h-4 text-[#00ffd5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          ) : (
            // Cyber Icon (Sparkles/Matrix)
            <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          )}
          <span className="sr-only">Switch Theme</span>
        </button>

        {/* Toggle Performance Button */}
        <button
          onClick={togglePerfMode}
          className="flex items-center justify-center p-1.5 hover:bg-white/10 rounded-full transition-all active:scale-95 group relative text-gray-400 hover:text-white"
          title={perfMode ? 'Enable Visual Effects (Full FX)' : 'Enable Battery Saver (Eco Mode)'}
        >
          {perfMode ? (
            // Eco Leaf/Power Icon
            <svg className="w-4 h-4 text-amber-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          ) : (
            // Lightning Bolt Icon
            <svg className="w-4 h-4 text-[#00ffd5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          )}
          <span className="sr-only">Toggle Performance</span>
        </button>
      </div>
    </div>
  );
}

function Home() {
  const [theme, setTheme] = useState<'cyber' | 'terminal'>(() => {
    return (localStorage.getItem('portfolio-theme') as 'cyber' | 'terminal') || 'cyber';
  });
  const [perfMode, setPerfMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('portfolio-perf-mode');
    return saved !== null ? saved === 'true' : true;
  });
  const [revealDone, setRevealDone] = useState(false)

  useWebParallax(!perfMode)
  
  useEffect(() => { AOS.init({ once: true, duration: 800 }) }, [])
  
  // Timers to control how long the animation stays on screen
  useEffect(() => { 
    const t = setTimeout(() => {
      const el = document.getElementById('launch-logo'); 
      if (el) el.classList.add('fade-out') 
    }, 4500) // Start fading out after 4.5 seconds
    return () => clearTimeout(t)
  }, [])
  
  useEffect(() => {
    const t = setTimeout(() => setRevealDone(true), 5000) // Completely remove overlay after 5 seconds
    return () => clearTimeout(t)
  }, [])

  const toggleTheme = () => {
    const next = theme === 'cyber' ? 'terminal' : 'cyber';
    setTheme(next);
    localStorage.setItem('portfolio-theme', next);
  };

  const togglePerfMode = () => {
    const next = !perfMode;
    setPerfMode(next);
    localStorage.setItem('portfolio-perf-mode', String(next));
  };

  useEffect(() => {
    const els = document.querySelectorAll('.counter')
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        const el = entry.target as HTMLElement
        const target = Number(el.getAttribute('data-target') || '0')
        let cur = 0
        const step = Math.ceil(target / 60)
        const t = setInterval(() => {
          cur += step
          if (cur >= target) { cur = target; clearInterval(t) }
          el.textContent = String(cur)
        }, 16)
        obs.unobserve(el)
      })
    }, { threshold: 0.6 })
    els.forEach(e => obs.observe(e));
    return () => obs.disconnect();
  }, [])

  return (
    <div className={`relative theme-${theme} ${perfMode ? 'no-glow' : ''}`}>
      {!perfMode && <CanvasCursor />}
      {!perfMode && <SpiderWebBackground />}
      <HudNav />
      <SystemControlPanel 
        theme={theme} 
        toggleTheme={toggleTheme} 
        perfMode={perfMode} 
        togglePerfMode={togglePerfMode} 
      />
      <div className="animated-bg min-h-screen flex flex-col relative">
        <div className="bg-tech"></div>
        {!perfMode && (
          <div className="space-layer" aria-hidden="true">
            <span className="space-dust" />
            <span className="nebula-pulse" />
            <span className="space-planet planet-one" />
            <span className="space-planet planet-two" />
            <span className="space-planet planet-three" />
            <span className="space-ring ring-one" />
            <span className="space-ring ring-two" />
            <span className="space-ring ring-three" />
            <span className="space-comet comet-one" />
            <span className="space-comet comet-two" />
            <div className="meteor-shower">
              <span className="meteor meteor-one" />
              <span className="meteor meteor-two" />
              <span className="meteor meteor-three" />
            </div>
          </div>
        )}
        <div className="bg-grid"></div>
        <div className="scanlines"></div>
        <div className="web-pattern"></div>
        
        {/* Enhanced HUD overlay */}
        <div className="pointer-events-none fixed inset-0 z-[1]">
          <div className="absolute bottom-6 left-6 text-[10px] text-cyan-200/60 font-mono">ARGHYADEVS</div>
        </div>
        
        {/* Launch logo overlay only when not revealed */}
        {!revealDone && (
          <div id="launch-logo" className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50">
            <AnimatedLogo />
          </div>
        )}

        <main className="flex flex-col items-center justify-center text-center px-2 sm:px-2 flex-grow min-h-screen relative">
          <div className="w-full flex justify-center items-center min-h-screen">
            <AboutSection />
          </div>
          {/* Remove ParticlesBackground and scroll indicator for a cleaner, single-page look */}
        </main>

        <SectionDivider />
        <SectionFold variant="tl"><PowerStats /></SectionFold>
        <SectionDivider />
        {/* <SectionFold variant="tr"><AboutSection /></SectionFold> */}
        <SectionFold variant="tl"><SkillsSection /></SectionFold>
        <SectionDivider />
        <SectionFold variant="tr"><ProjectsSection /></SectionFold>
        <SectionDivider />
        <SectionFold variant="tl"><TimelineSection /></SectionFold>
        <SectionDivider />
        <SectionFold variant="tr"><AssistantSection /></SectionFold>
        <SectionDivider />
        <SectionFold variant="tl"><TestimonialsSection /></SectionFold>
        <SectionDivider />
        <SectionFold variant="tr"><BlogSection /></SectionFold>
        <SectionDivider />
        <SectionFold variant="tl"><ContactSection /></SectionFold>
        <SectionDivider />
        <SectionFold variant="tr"><StatsSection /></SectionFold>

        <SectionDivider />
        <footer className="glass-effect text-white text-center p-6 md:p-8 border-t border-[#00ffd5]/20">
          <p className="text-gradient font-medium">
            Avengers Assemble — With great power comes great code! 🕸️ — Crafted by Arghyadip ⚡
          </p>
        </footer>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/articles" element={<ArticlesPage />} />
      <Route path="/ai-powered-applications" element={<AiPoweredApplications />} />
      <Route path="/SmartCitiesPage" element={<SmartCitiesPage />} />
    </Routes>
  )
}
