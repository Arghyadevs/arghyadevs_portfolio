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
  type ChatMessage 
} from './services/aiService'

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
  const [showAltImg, setShowAltImg] = useState(true);
  const baseUrl = import.meta.env.BASE_URL
  const primaryImg = `${baseUrl}assets/Arghyadip.jpg`
  const secondaryImg = `${baseUrl}assets/Arghyalogo.png`

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduceMotion.matches) return;

    const interval = setInterval(() => {
      setGreetIdx(idx => (idx + 1) % greetings.length);
    }, 1600);
    const imgInterval = setInterval(() => {
      setShowAltImg(prev => !prev);
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
              <img
                src={secondaryImg}
                alt="Arghyadip"
                onError={(e) => { e.currentTarget.src = primaryImg }}
                className={`profile-image transition-opacity duration-1000 ${showAltImg ? 'opacity-0' : 'opacity-100'}`}
              />
              <img
                src={primaryImg}
                alt="Arghyadip"
                onError={(e) => { e.currentTarget.src = secondaryImg }}
                className={`profile-image transition-opacity duration-1000 ${showAltImg ? 'opacity-100' : 'opacity-0'}`}
              />
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
            <a href="assets/Arghyadip_Pakhira_CV.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center gap-2">
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
      title: 'SmartFlow.ai',
      description: 'Smart system using real-time data and predictive analytics for optimizing city traffic.',
      image: '/assets/Smartflow.png',
      tags: ['Smart City', 'AI', 'Analytics'],
      role: 'Full-stack + ML',
      stack: 'React, Node.js, Predictive ML',
      impact: 'Real-time traffic optimization',
      links: [
        { label: 'Live Demo', url: 'https://smar-flow.vercel.app/' },
        { label: 'GitHub', url: 'https://github.com/Arghyadevs/SmartFlow' },
      ],
    },
    {
      title: 'SentinelX 🛡️',
      description: 'Real-time surveillance system using YOLOv8 for threat detection, license plate recognition, and tracking.',
      image: '/assets/sentinelX.png',
      tags: ['Computer Vision', 'YOLOv8', 'Realtime'],
      role: 'AI Engineer',
      stack: 'YOLOv8, CV Pipeline, React',
      impact: 'Instant alerting + tracking',
      links: [
        { label: 'Live Demo', url: 'https://sentinel-x-ashen.vercel.app/' },
        { label: 'GitHub', url: 'https://github.com/Arghyadevs/SentinelX' },
      ],
    },
    {
      title: 'NextStep.AI',
      description: 'Machine Learning-based tool that predicts the most suitable career paths based on user skills and preferences.',
      image: '/assets/Nextstep.ai.png',
      tags: ['ML', 'Career', 'Python'],
      role: 'ML Developer',
      stack: 'Python, scikit-learn, UI',
      impact: 'Personalized career insights',
      links: [
        { label: 'Live Demo', url: 'https://nextstep-ai.vercel.app/' },
        { label: 'GitHub', url: 'https://github.com/Arghyadevs/Nextstep.AI' },
      ],
    },
    {
      title: 'SurakshaNet⚡',
      description: 'Real-time disaster alert system using OpenWeather API, geolocation, and Twilio notifications.',
      image: '/assets/suraksha.png',
      tags: ['OpenWeather', 'Twilio', 'Geo'],
      role: 'Full-stack',
      stack: 'OpenWeather, Twilio, React',
      impact: 'Faster emergency alerts',
      links: [
        { label: 'Live Demo', url: 'https://suraksha-net-beta.vercel.app/' },
        { label: 'GitHub', url: 'https://github.com/Arghyadevs/SurakshaNet' },
      ],
    },
    {
      title: 'VITANOVA',
      description: 'Futuristic healthcare management system with telemedicine, records, and predictive analytics.',
      image: '/assets/Vitanova.png',
      tags: ['Healthcare', 'Telemedicine', 'Analytics'],
      role: 'Product Engineer',
      stack: 'React, Node.js, Analytics',
      impact: 'Streamlined patient care',
      links: [
        { label: 'Live Demo', url: 'https://vita-nova.vercel.app/' },
        { label: 'GitHub', url: 'https://github.com/Arghyadevs/VITA_NOVA' },
      ],
    },
    {
      title: 'AttendaFace',
      description: 'Python desktop app using OpenCV and face recognition to automate attendance with CSV export.',
      image: '/assets/AttendaFace.png',
      tags: ['OpenCV', 'Python', 'Desktop'],
      role: 'Computer Vision',
      stack: 'Python, OpenCV, Tkinter',
      impact: 'Automated classroom tracking',
      links: [
        { label: 'GitHub', url: 'https://github.com/Arghyadevs/AttendaFace' },
      ],
    },
  ]

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
            <img
              src={project.image}
              alt={project.title}
              className="project-media"
              loading="lazy"
              decoding="async"
            />
            <div className="project-body">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="chip-row">
                {project.tags.map(tag => (
                  <span key={tag} className="chip">{tag}</span>
                ))}
              </div>
            </div>
            <div className="project-hover" aria-hidden="true">
              <h4>Snapshot</h4>
              <p><strong>Role:</strong> {project.role}</p>
              <p><strong>Stack:</strong> {project.stack}</p>
              <p><strong>Impact:</strong> {project.impact}</p>
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
              <span className="text-xs text-cyan-100/80 mt-2 inline-block">Open Source Champion</span>
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
              <span className="inline-flex items-center gap-2 text-xs text-[#00ffd5] bg-cyan-400/10 border border-cyan-400/25 px-3 py-1 rounded-full">Oct 2024 - Present</span>
              <div className="flex items-center gap-3 mt-3">
                <img src="/assets/edge-logo.png" alt="Geekonix" className="w-8 h-8 rounded-md" loading="lazy" decoding="async" />
                <h3 className="font-semibold text-cyan-100">Sponsorship & Management Team - Geekonix</h3>
              </div>
              <p className="text-gray-300 text-sm mt-2">Active member managing sponsorships and organizing tech events.</p>
              <span className="text-xs text-cyan-100/80 mt-2 inline-block">Active Team Member</span>
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
              <span className="text-xs text-cyan-100/80 mt-2 inline-block">Current Leadership Role</span>
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

  // Initialize AI (in a real app, you'd get this from environment variables)
  useEffect(() => {
    // For demo purposes, we'll use enhanced responses instead of real AI
    // In production, you would initialize with: initializeAI(process.env.REACT_APP_OPENAI_API_KEY!)
    setIsAIEnabled(false) // Set to true when AI is properly configured
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
      (window as typeof window & { SpeechRecognition?: typeof window.SpeechRecognition }).SpeechRecognition ||
      (window as typeof window & { webkitSpeechRecognition?: typeof window.SpeechRecognition }).webkitSpeechRecognition

    if (!SpeechRecognition) return
    setSpeechSupported(true)
    const recognition = new SpeechRecognition()
    recognition.lang = 'en-US'
    recognition.interimResults = false
    recognition.continuous = false
    recognition.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map(result => result[0]?.transcript || '')
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
    const nodes: ReactNode[] = []
    let buffer = ''
    let key = 0

    const flush = () => {
      if (!buffer) return
      nodes.push(<span key={`text-${key++}`}>{buffer}</span>)
      buffer = ''
    }

    for (let i = 0; i < content.length; i += 1) {
      if (content[i] === '\n') {
        flush()
        nodes.push(<br key={`br-${key++}`} />)
        continue
      }

      if (content.startsWith('**', i)) {
        const end = content.indexOf('**', i + 2)
        if (end !== -1) {
          flush()
          nodes.push(<strong key={`bold-${key++}`}>{content.slice(i + 2, end)}</strong>)
          i = end + 1
          continue
        }
      }

      if (content[i] === '*') {
        const end = content.indexOf('*', i + 1)
        if (end !== -1) {
          flush()
          nodes.push(<em key={`em-${key++}`}>{content.slice(i + 1, end)}</em>)
          i = end
          continue
        }
      }

      buffer += content[i]
    }

    flush()
    return nodes
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
          <div className="assistant-card glass-effect">
            <div className="assistant-core">
              <span>🤖</span>
            </div>
            <div className="assistant-status">
              <span className={`status-dot ${isAIEnabled ? 'is-online' : 'is-standby'}`} />
              <span>{isAIEnabled ? 'AI Online' : 'Enhanced Mode'}</span>
            </div>
            <ul className="assistant-points">
              <li>Instant project summaries + stack highlights</li>
              <li>AI/ML expertise and real-world use cases</li>
              <li>Collaboration & availability details</li>
            </ul>
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

          <div className="assistant-chat glass-effect">
            <div className="assistant-chat-header">
              <div className="assistant-avatar">AP</div>
              <div>
                <h3>Spectra Assistant</h3>
                <p>{isAIEnabled ? 'Powered by AI' : 'Enhanced responses'}</p>
              </div>
            </div>

            <div className="assistant-tools">
              <button
                type="button"
                className={`assistant-tool ${isVoiceOn ? 'is-on' : ''}`}
                onClick={toggleVoice}
                disabled={!voiceSupported}
                aria-pressed={isVoiceOn}
              >
                <span className="assistant-tool-icon">🔊</span>
                Voice {isVoiceOn ? 'On' : 'Off'}
              </button>
              <button
                type="button"
                className={`assistant-tool ${isListening ? 'is-on' : ''}`}
                onClick={toggleListening}
                disabled={!speechSupported}
                aria-pressed={isListening}
              >
                <span className="assistant-tool-icon">🎙</span>
                {isListening ? 'Listening…' : 'Mic'}
              </button>
            </div>

            <div ref={chatContainerRef} className="chat-window" id="chatContainer">
              {messages.map((message) => (
                <div key={message.id} className={`chat-row ${message.role === 'user' ? 'is-user' : 'is-assistant'}`}>
                  {message.role === 'assistant' && <div className="chat-badge">AP</div>}
                  <div className={`chat-bubble ${message.role === 'user' ? 'chat-bubble-user' : 'chat-bubble-assistant'}`}>
                    <p>{renderMessage(message.content)}</p>
                    <span className="chat-time">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                  {message.role === 'user' && <div className="chat-badge chat-badge-user">YOU</div>}
                </div>
              ))}

              {isTyping && (
                <div className="chat-row is-assistant">
                  <div className="chat-badge">AP</div>
                  <div className="chat-bubble chat-bubble-assistant">
                    <div className="typing-dots">
                      <span />
                      <span />
                      <span />
                    </div>
                    <span className="chat-time">Spectra is typing...</span>
                  </div>
                </div>
              )}
            </div>

            <div className="assistant-input">
              <input
                id="chatInput"
                type="text"
                className="form-input flex-1"
                placeholder="Ask Spectra anything..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') sendMessage() }}
                disabled={isTyping}
              />
              <button
                onClick={() => sendMessage()}
                disabled={isTyping || !input.trim()}
                className="btn-primary btn-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isTyping ? '...' : 'Send'}
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
      name: 'Raghav Sood',
      role: 'Senior Project Manager',
      company: 'Lead Engineer - Samsung R&D',
      avatar: '/assets/raghav.jpg',
      quote: "Arghyadip's AI traffic management system revolutionized our infrastructure. Real-time optimization and predictive analytics exceeded expectations.",
      rating: 4,
      time: '2 weeks ago',
      badge: '★',
    },
    {
      name: 'Sarah Miller',
      role: 'Lead Software Architect',
      company: 'InnovateTech Labs',
      avatar: '/assets/sarah.jpg',
      quote: 'Working with Arghyadip was transformative. The surveillance system processes 10,000+ events per second flawlessly.',
      rating: 5,
      time: '1 month ago',
      badge: '✓',
    },
    {
      name: 'Raj Patel',
      role: 'Founder & CEO',
      company: 'NextGen Startup',
      avatar: '/assets/raj.jpg',
      quote: 'Real-time threat detection, seamless cloud integration, and 99.9% uptime. His expertise is phenomenal.',
      rating: 5,
      time: '3 weeks ago',
      badge: '🏆',
    },
    {
      name: 'Sundar Rajan',
      role: 'AI Research Director',
      company: 'Texas Instruments',
      avatar: '/assets/sundar.jpg',
      quote: 'Arghyadip’s models achieved 96% accuracy in our computer vision project. A true AI expert.',
      rating: 4,
      time: '5 days ago',
      badge: '🚀',
    },
    {
      name: 'Sayan Majumdar',
      role: 'VP of Engineering',
      company: 'DataFlow Systems',
      avatar: '/assets/sayan.png',
      quote: 'The real-time data pipeline handles 1M+ transactions daily. Delivery was flawless.',
      rating: 5,
      time: '1 week ago',
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
          <h2 className="text-5xl md:text-6xl font-bold glow-text hud-title mb-6 font-[Orbitron]">Client Testimonials</h2>
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
            <div className="flex items-center"><span className="text-2xl mr-2">🏆</span><span className="text-sm">100+ Projects Completed</span></div>
            <div className="flex items-center"><span className="text-2xl mr-2">⭐</span><span className="text-sm">4.9/5 Average Rating</span></div>
            <div className="flex items-center"><span className="text-2xl mr-2">🚀</span><span className="text-sm">50+ Happy Clients</span></div>
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
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-[#00ffd5] rounded-full flex items-center justify-center mr-3">
                    <span className="text-black text-sm">📧</span>
                  </div>
                  <span className="text-gray-300">arghyadip.info@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-[#00ffd5] rounded-full flex items-center justify-center mr-3">
                    <span className="text-black text-sm">📱</span>
                  </div>
                  <span className="text-gray-300">+91 9732740816</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-[#00ffd5] rounded-full flex items-center justify-center mr-3">
                    <span className="text-black text-sm">📍</span>
                  </div>
                  <span className="text-gray-300">Kolkata, West Bengal, India</span>
                </div>
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
                  <a href="https://twitter.com/Arghya_dip7" target="_blank" aria-label="X" className="hover:scale-110 transition transform duration-300">
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

            <form className="space-y-4" id="contactForm" action="https://formspree.io/f/mzzgkowd" method="POST">
              <div>
                <input type="text" name="name" placeholder="Your Name" required className="form-input w-full" />
              </div>
              <div>
                <input type="email" name="email" placeholder="Your Email" required className="form-input w-full" />
              </div>
              <div>
                <select name="project_type" required className="form-input w-full">
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
                <textarea name="message" placeholder="Your Message" required rows={4} className="form-input w-full"></textarea>
              </div>
              <div>
                <button type="submit" className="btn-primary w-full">Send</button>
              </div>
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
            <div className="text-4xl font-bold text-[#00ffd5] mb-2 counter" data-target="24">0</div>
            <p className="text-gray-400">Projects Completed</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#00ffd5] mb-2 counter" data-target="36">0</div>
            <p className="text-gray-400">GitHub Repositories</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#00ffd5] mb-2 counter" data-target="700">0</div>
            <p className="text-gray-400">Code Commits</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#00ffd5] mb-2 counter" data-target="2278">0</div>
            <p className="text-gray-400">LinkedIn Connection</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Modern Skills Section ---
function SkillsSection() {
  return (
    <section id="skills" className="section-shell bg-gradient-to-br from-red-900 via-black to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-red-400 hud-title mb-12 font-[Orbitron] relative">
          Skills
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-red-500 animate-pulse"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Frontend */}
          <div className="bg-[#1a1a1a]/80 rounded-2xl p-6 shadow-lg border border-red-600 hover:shadow-[0_0_25px_red] transition-all duration-300">
            <h3 className="text-xl font-semibold text-red-400 mb-4 font-[Orbitron]">Frontend</h3>
            <div className="space-y-4">
              {/* ...HTML5, Tailwind CSS, React.js, JavaScript... */}
              <div className="skill-bar" data-percent="95%">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium flex items-center gap-2">
                    <img src="/icons/html5.png" className="w-5 h-5" alt="HTML5" /> HTML5
                  </span>
                  <span className="text-sm">95%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div className="h-2.5 rounded-full bg-orange-500 transition-all duration-1000 ease-in-out" style={{ width: '95%' }}></div>
                </div>
              </div>
              <div className="skill-bar" data-percent="90%">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium flex items-center gap-2"><img src="/icons/Tailwind_CSS.png" className="w-5 h-5" /> Tailwind CSS</span>
                  <span className="text-sm">90%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div className="h-2.5 rounded-full bg-blue-400 transition-all duration-1000 ease-in-out" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="skill-bar" data-percent="85%">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium flex items-center gap-2"><img src="/icons/react.svg" className="w-5 h-5" /> React.js</span>
                  <span className="text-sm">85%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div className="h-2.5 rounded-full bg-cyan-400 transition-all duration-1000 ease-in-out" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="skill-bar" data-percent="80%">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium flex items-center gap-2"><img src="/icons/js.png" className="w-5 h-5" /> JavaScript</span>
                  <span className="text-sm">80%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div className="h-2.5 rounded-full bg-yellow-400 transition-all duration-1000 ease-in-out" style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Backend */}
          <div className="bg-[#1a1a1a]/80 rounded-2xl p-6 shadow-lg border border-blue-600 hover:shadow-[0_0_25px_blue] transition-all duration-300">
            <h3 className="text-xl font-semibold text-blue-400 mb-4 font-[Orbitron]">Backend</h3>
            <div className="space-y-4">
              {/* ...Node.js, Express.js, MongoDB, MySQL... */}
              <div className="skill-bar" data-percent="85%">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium flex items-center gap-2"><img src="/icons/nodejs.png" className="w-5 h-5" /> Node.js</span>
                  <span className="text-sm">85%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div className="h-2.5 rounded-full bg-green-400 transition-all duration-1000 ease-in-out" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="skill-bar" data-percent="80%">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium flex items-center gap-2"><img src="/icons/exjs.png" className="w-5 h-5" /> Express.js</span>
                  <span className="text-sm">80%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div className="h-2.5 rounded-full bg-gray-400 transition-all duration-1000 ease-in-out" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className="skill-bar" data-percent="75%">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium flex items-center gap-2"><img src="/icons/mdb.svg" className="w-5 h-5" /> MongoDB</span>
                  <span className="text-sm">75%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div className="h-2.5 rounded-full bg-green-500 transition-all duration-1000 ease-in-out" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div className="skill-bar" data-percent="70%">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium flex items-center gap-2"><img src="/icons/mysql.svg" className="w-5 h-5" /> MySQL</span>
                  <span className="text-sm">70%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div className="h-2.5 rounded-full bg-blue-300 transition-all duration-1000 ease-in-out" style={{ width: '70%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* DevOps */}
          <div className="bg-[#1a1a1a]/80 rounded-2xl p-6 shadow-lg border border-yellow-600 hover:shadow-[0_0_25px_yellow] transition-all duration-300">
            <h3 className="text-xl font-semibold text-yellow-400 mb-4 font-[Orbitron]">DevOps</h3>
            <div className="space-y-4">
              {/* ...Git, Docker, GitHub Actions... */}
              <div className="skill-bar" data-percent="70%">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium flex items-center gap-2"><img src="/icons/git.png" className="w-5 h-5" /> Git</span>
                  <span className="text-sm">70%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div className="h-2.5 rounded-full bg-red-400 transition-all duration-1000 ease-in-out" style={{ width: '70%' }}></div>
                </div>
              </div>
              <div className="skill-bar" data-percent="60%">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium flex items-center gap-2"><img src="/icons/docker.svg" className="w-5 h-5" /> Docker</span>
                  <span className="text-sm">60%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div className="h-2.5 rounded-full bg-blue-500 transition-all duration-1000 ease-in-out" style={{ width: '60%' }}></div>
                </div>
              </div>
              <div className="skill-bar" data-percent="50%">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium flex items-center gap-2"><img src="/icons/github actions.png" className="w-5 h-5" /> GitHub Actions</span>
                  <span className="text-sm">50%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div className="h-2.5 rounded-full bg-purple-400 transition-all duration-1000 ease-in-out" style={{ width: '50%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Tools */}
          <div className="bg-[#1a1a1a]/80 rounded-2xl p-6 shadow-lg border border-green-600 hover:shadow-[0_0_25px_green] transition-all duration-300">
            <h3 className="text-xl font-semibold text-green-400 mb-4 font-[Orbitron]">Tools</h3>
            <div className="space-y-4">
              {/* ...VS Code, Postman... */}
              <div className="skill-bar" data-percent="90%">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium flex items-center gap-2"><img src="/icons/vscode.png" className="w-5 h-5" /> VS Code</span>
                  <span className="text-sm">90%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div className="h-2.5 rounded-full bg-indigo-400 transition-all duration-1000 ease-in-out" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="skill-bar" data-percent="75%">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium flex items-center gap-2"><img src="/icons/postman.svg" className="w-5 h-5" /> Postman</span>
                  <span className="text-sm">75%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div className="h-2.5 rounded-full bg-orange-400 transition-all duration-1000 ease-in-out" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* AI / ML */}
          <div className="bg-[#1a1a1a]/80 rounded-2xl p-6 shadow-lg border border-purple-600 hover:shadow-[0_0_25px_purple] transition-all duration-300">
            <h3 className="text-xl font-semibold text-purple-400 mb-4 font-[Orbitron]">AI / ML</h3>
            <div className="space-y-4">
              {/* ...Python, TensorFlow, scikit-learn... */}
              <div className="skill-bar" data-percent="70%">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium flex items-center gap-2"><img src="/icons/Python.png" className="w-5 h-5" /> Python</span>
                  <span className="text-sm">70%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div className="h-2.5 rounded-full bg-yellow-300 transition-all duration-1000 ease-in-out" style={{ width: '70%' }}></div>
                </div>
              </div>
              <div className="skill-bar" data-percent="60%">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium flex items-center gap-2"><img src="/icons/tf.png" className="w-5 h-5" /> TensorFlow</span>
                  <span className="text-sm">60%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div className="h-2.5 rounded-full bg-orange-300 transition-all duration-1000 ease-in-out" style={{ width: '60%' }}></div>
                </div>
              </div>
              <div className="skill-bar" data-percent="65%">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium flex items-center gap-2"><img src="/icons/sciklit.png" className="w-5 h-5" /> scikit-learn</span>
                  <span className="text-sm">65%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div className="h-2.5 rounded-full bg-blue-300 transition-all duration-1000 ease-in-out" style={{ width: '65%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Superhero Skills */}
          <div className="bg-[#1a1a1a]/80 rounded-2xl p-6 shadow-lg border border-red-600 hover:shadow-[0_0_25px_red] transition-all duration-300">
            <h3 className="text-xl font-semibold text-red-400 mb-4 font-[Orbitron]">Superhero Skills</h3>
            <div className="space-y-4">
              <div className="skill-bar" data-percent="95%">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium flex items-center gap-2">🕸️ Web-Slinging Code</span>
                  <span className="text-sm">95%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div className="h-2.5 rounded-full bg-red-500 transition-all duration-1000 ease-in-out" style={{ width: '95%' }}></div>
                </div>
              </div>
              <div className="skill-bar" data-percent="90%">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium flex items-center gap-2">🦸 Problem-Solving</span>
                  <span className="text-sm">90%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div className="h-2.5 rounded-full bg-blue-500 transition-all duration-1000 ease-in-out" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="skill-bar" data-percent="85%">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium flex items-center gap-2">⚡ Quick Adaptation</span>
                  <span className="text-sm">85%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div className="h-2.5 rounded-full bg-red-400 transition-all duration-1000 ease-in-out" style={{ width: '85%' }}></div>
                </div>
              </div>
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
    { id: 'ai-assistant', label: 'AI' },
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

function useWebParallax() {
  useEffect(() => {
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
  }, [])
}

function Home() {
  const [revealDone, setRevealDone] = useState(false)

  useWebParallax()
  
  useEffect(() => { AOS.init({ once: true, duration: 800 }) }, [])
  useEffect(() => { const el = document.getElementById('launch-logo'); if (el) el.classList.add('fade-out') }, [])
  
  useEffect(() => {
    const t = setTimeout(() => setRevealDone(true), 1200)
    return () => clearTimeout(t)
  }, [])

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
    <div className="relative">
      <CanvasCursor />
      <SpiderWebBackground />
      <HudNav />
      <div className="animated-bg min-h-screen flex flex-col relative">
        <div className="bg-tech"></div>
        <div className="space-layer" aria-hidden="true">
          <span className="space-planet planet-one" />
          <span className="space-planet planet-two" />
          <span className="space-planet planet-three" />
          <span className="space-comet comet-one" />
          <span className="space-comet comet-two" />
        </div>
        <div className="bg-grid"></div>
        <div className="scanlines"></div>
        <div className="web-pattern"></div>
        
        {/* Enhanced HUD overlay */}
        <div className="pointer-events-none fixed inset-0 z-[1]">
          <div className="absolute top-6 right-6 text-xs text-cyan-200/80 font-mono">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>SYS ONLINE</span>
            </div>
            <div className="opacity-70">BUILD v2.0</div>
          </div>
          <div className="absolute bottom-6 left-6 text-[10px] text-cyan-200/60 font-mono">ARGHYADEVS</div>
        </div>
        
        {/* Launch logo overlay only when not revealed */}
        {!revealDone && (
          <div id="launch-logo" className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50">
            <img src="/assets/Animated Logo.gif" alt="Logo" className="w-32 h-32 sm:w-48 sm:h-48 mb-6 animate-pulse" />
            <span className="text-2xl font-bold text-gradient typing-caret">Loading...</span>
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
