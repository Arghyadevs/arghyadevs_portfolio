import { useEffect, useRef, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Routes, Route, Link } from 'react-router-dom'
import { SpiderWebBackground } from './SpiderWebBackground'
import ArticlesPage from './ArticlesPage'
import AiPoweredApplications from './ai-powered-applications'
import SmartCitiesPage from './SmartCitiesPage'
import { 
  generateAIResponse, 
  initializeAI, 
  isAIInitialized, 
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
  const [showAltImg, setShowAltImg] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGreetIdx(idx => (idx + 1) % greetings.length);
    }, 1600);
    const imgInterval = setInterval(() => {
      setShowAltImg(prev => !prev);
    }, 3000);
    return () => { clearInterval(interval); clearInterval(imgInterval); };
  }, []);

  return (
    <section id="about" className="py-16 md:py-24 px-6 relative overflow-hidden">
      <div className="max-w-2xl mx-auto">
        <h2 className="section-title text-center tech-text-glow mb-12" data-aos="fade-up">
          🕸️ About Me
        </h2>
        <div className="flex flex-col items-center justify-center text-center gap-6 bg-gradient-to-br from-[#181818] via-[#232526] to-[#00ffd5]/10 rounded-3xl shadow-2xl p-10 border-2 border-[#00ffd5]/30">
          <div className="relative w-40 h-40 mb-4">
            <img src="/assets/Arghyalogo.png" alt="Arghyadip" className={`w-40 h-40 object-cover rounded-2xl border-4 border-[#00ffd5] shadow-lg absolute inset-0 transition-opacity duration-1000 ${showAltImg ? 'opacity-0' : 'opacity-100'}`} />
            <img src="/assets/Arghya_devs.png" alt="Arghyadip" className={`w-40 h-40 object-cover rounded-2xl border-4 border-[#00ffd5] shadow-lg absolute inset-0 transition-opacity duration-1000 ${showAltImg ? 'opacity-100' : 'opacity-0'}`} />
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
            <a href="#projects" className="bg-[#00ffd5] text-black px-8 py-3 rounded-full font-bold shadow-[0_0_20px_rgba(0,255,213,0.3)] hover:bg-[#00ff88] hover:scale-105 transition-transform duration-300">
              View Projects
            </a>
            <a href="assets/Arghyadip_Pakhira_CV.pdf" target="_blank" rel="noopener noreferrer" className="border-2 border-[#00ffd5] text-[#00ffd5] px-8 py-3 rounded-full font-bold hover:bg-[#00ffd5] hover:text-black hover:scale-105 transition-transform duration-300 flex items-center gap-2">
              Resume <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Redesigned Projects Section ---
function ProjectsSection() {
  return (
    <section id="projects" className="py-16 bg-gradient-to-br from-[#181818] via-[#232526] to-[#00ffd5]/10 text-white px-4 md:px-16">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-[#00ffd5] drop-shadow-lg font-[Orbitron]">🕸️ Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Example Project Card - repeat for each project */}
        <div className="bg-[#232526]/80 rounded-3xl shadow-2xl p-8 flex flex-col items-center hover:scale-105 transition-transform border-2 border-[#00ffd5]/20">
          <img src="/assets/Smartflow.png" alt="SmartFlow.ai" className="rounded-xl w-full h-40 object-cover mb-6 shadow-lg" />
          <h3 className="text-2xl font-bold text-[#00ffd5] mb-2">SmartFlow.ai</h3>
          <p className="text-gray-300 mb-4 text-center">Smart system using real-time data and predictive analytics for optimizing city traffic.</p>
          <div className="flex gap-4 mt-auto">
            <a href="https://smar-flow.vercel.app/" className="bg-[#00ffd5] text-black px-5 py-2 rounded-full font-semibold shadow hover:bg-[#00ff88] transition">Live Demo</a>
            <a href="https://github.com/Arghyadevs/SmartFlow" className="border border-[#00ffd5] text-[#00ffd5] px-5 py-2 rounded-full font-semibold hover:bg-[#00ffd5] hover:text-black transition">GitHub</a>
          </div>
        </div>
        {/* Repeat similar cards for other projects, using the same modern card style */}
        <div className="bg-[#232526]/80 rounded-3xl shadow-2xl p-8 flex flex-col items-center hover:scale-105 transition-transform border-2 border-[#00ffd5]/20">
          <img src="/assets/sentinelX.png" alt="AI Surveillance System" className="rounded-xl w-full h-40 object-cover mb-6 shadow-lg" />
          <h3 className="text-2xl font-bold text-[#00ffd5] mb-2">SentinelX 🛡️</h3>
          <p className="text-gray-300 mb-4 text-center">Channeling the vigilance of Captain America, this real-time surveillance system uses YOLOv8 for threat detection, license plate recognition, and people tracking with instant alarm triggers.</p>
          <div className="flex gap-4 mt-auto">
            <a href="https://sentinel-x-ashen.vercel.app/" className="bg-[#00ffd5] text-black px-5 py-2 rounded-full font-semibold shadow hover:bg-[#00ff88] transition">Live Demo</a>
            <a href="https://github.com/Arghyadevs/SentinelX" className="border border-[#00ffd5] text-[#00ffd5] px-5 py-2 rounded-full font-semibold hover:bg-[#00ffd5] hover:text-black transition">GitHub</a>
          </div>
        </div>
        <div className="bg-[#232526]/80 rounded-3xl shadow-2xl p-8 flex flex-col items-center hover:scale-105 transition-transform border-2 border-[#00ffd5]/20">
          <img src="/assets/Nextstep.ai.png" alt="AI Career Predictor" className="rounded-xl w-full h-40 object-cover mb-6 shadow-lg" />
          <h3 className="text-2xl font-bold text-[#00ffd5] mb-2">NextStep.AI</h3>
          <p className="text-gray-300 mb-4 text-center">Machine Learning-based tool that predicts the most suitable career paths based on user skills, preferences, and aptitude scores.</p>
          <div className="flex gap-4 mt-auto">
            <a href="https://nextstep-ai.vercel.app/" className="bg-[#00ffd5] text-black px-5 py-2 rounded-full font-semibold shadow hover:bg-[#00ff88] transition">Live Demo</a>
            <a href="https://github.com/Arghyadevs/Nextstep.AI" className="border border-[#00ffd5] text-[#00ffd5] px-5 py-2 rounded-full font-semibold hover:bg-[#00ffd5] hover:text-black transition">GitHub</a>
          </div>
        </div>
        <div className="bg-[#232526]/80 rounded-3xl shadow-2xl p-8 flex flex-col items-center hover:scale-105 transition-transform border-2 border-[#00ffd5]/20">
          <img src="/assets/suraksha.png" alt="Disaster Alert System" className="rounded-xl w-full h-40 object-cover mb-6 shadow-lg" />
          <h3 className="text-2xl font-bold text-[#00ffd5] mb-2">SurakshaNet⚡</h3>
          <p className="text-gray-300 mb-4 text-center">Harnessing the power of Thor's storms, this web app uses OpenWeather API, geolocation, and Twilio to notify users of nearby earthquakes, storms, and floods in real time.</p>
          <div className="flex gap-4 mt-auto">
            <a href="https://suraksha-net-beta.vercel.app/" className="bg-[#00ffd5] text-black px-5 py-2 rounded-full font-semibold shadow hover:bg-[#00ff88] transition">Live Demo</a>
            <a href="https://github.com/Arghyadevs/SurakshaNet" className="border border-[#00ffd5] text-[#00ffd5] px-5 py-2 rounded-full font-semibold hover:bg-[#00ffd5] hover:text-black transition">GitHub</a>
          </div>
        </div>
        <div className="bg-[#232526]/80 rounded-3xl shadow-2xl p-8 flex flex-col items-center hover:scale-105 transition-transform border-2 border-[#00ffd5]/20">
          <img src="/assets/Vitanova.png" alt="Healthcare Vitanova" className="rounded-xl w-full h-40 object-cover mb-6 shadow-lg" />
          <h3 className="text-2xl font-bold text-[#00ffd5] mb-2">VITANOVA</h3>
          <p className="text-gray-300 mb-4 text-center">A futuristic healthcare management system designed to streamline patient care, enable telemedicine, manage health records, appointments, and deliver predictive analytics for better medical decision-making.</p>
          <div className="flex gap-4 mt-auto">
            <a href="https://vita-nova.vercel.app/" className="bg-[#00ffd5] text-black px-5 py-2 rounded-full font-semibold shadow hover:bg-[#00ff88] transition">Live Demo</a>
            <a href="https://github.com/Arghyadevs/VITA_NOVA" className="border border-[#00ffd5] text-[#00ffd5] px-5 py-2 rounded-full font-semibold hover:bg-[#00ffd5] hover:text-black transition">GitHub</a>
          </div>
        </div>
        <div className="bg-[#232526]/80 rounded-3xl shadow-2xl p-8 flex flex-col items-center hover:scale-105 transition-transform border-2 border-[#00ffd5]/20">
          <img src="/assets/AttendaFace.png" alt="Face Recognition Auth" className="rounded-xl w-full h-40 object-cover mb-6 shadow-lg" />
          <h3 className="text-2xl font-bold text-[#00ffd5] mb-2">AttendaFace</h3>
          <p className="text-gray-300 mb-4 text-center">Python-based desktop app using OpenCV and face recognition to automate attendance for classrooms or offices with CSV and GUI support.</p>
          <div className="flex gap-4 mt-auto">
            <a href="https://github.com/Arghyadevs/AttendaFace" className="bg-[#00ffd5] text-black px-5 py-2 rounded-full font-semibold shadow hover:bg-[#00ff88] transition">Live Demo</a>
            <a href="https://github.com/Arghyadevs/AttendaFace" className="border border-[#00ffd5] text-[#00ffd5] px-5 py-2 rounded-full font-semibold hover:bg-[#00ffd5] hover:text-black transition">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineSection() {
  return (
    <section className="relative px-2 sm:px-6 py-10 md:py-20">
      <h2 className="section-title text-center">🕸️ Timeline</h2>
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
                <img src="/assets/NMA.jpg" alt="School" className="w-8 h-8 rounded-md" />
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
                <img src="/assets/tmsl.jpeg" alt="TMSL" className="w-8 h-8 rounded-md" />
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
                <img src="/assets/coding ninja.svg" alt="Coding Ninjas" className="w-8 h-8 rounded-md" />
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
                <img src="/assets/gssoc.png" alt="GSSoC" className="w-8 h-8 rounded-md" />
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
                <img src="/assets/edge-logo.png" alt="Geekonix" className="w-8 h-8 rounded-md" />
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
                <img src="/assets/gfg.svg" alt="GFG" className="w-8 h-8 rounded-md" />
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
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [isAIEnabled, setIsAIEnabled] = useState(false)
  const chatContainerRef = useRef<HTMLDivElement>(null)

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

  const sendMessage = async () => {
    if (!input.trim()) return
    
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
      timestamp: new Date()
    }
    
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    try {
      // Get AI response with conversation history
      const aiResponse = await generateAIResponse(messages, userMessage.content)
      
      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: aiResponse,
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, aiMessage])
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
    setInput(question)
    await new Promise(resolve => setTimeout(resolve, 100))
    await sendMessage()
  }

  const formatMessage = (content: string) => {
    // Simple formatting for better readability
    return content
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\n/g, '<br />')
  }

  return (
    <section id="ai-assistant" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center glow-text mb-12 font-[Orbitron]">Meet Spectra AI</h2>
        <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4 pulse-glow">
                <span className="text-xl">🤖</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#00ffd5]">Spectra</h3>
                <p className="text-gray-400 text-sm">
                  {isAIEnabled ? 'Powered by advanced AI' : 'Enhanced AI assistant'}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${isAIEnabled ? 'bg-green-400' : 'bg-yellow-400'} animate-pulse`}></div>
              <span className="text-xs text-gray-400">
                {isAIEnabled ? 'AI Online' : 'Enhanced Mode'}
              </span>
            </div>
          </div>

          <div ref={chatContainerRef} className="chat-container bg-[#0f0f0f] rounded-lg p-4 h-96 overflow-y-auto mb-4 space-y-4" id="chatContainer">
            {messages.map((message) => (
              <div key={message.id} className={`flex items-start ${message.role === 'user' ? 'justify-end' : ''}`}>
                {message.role === 'assistant' && (
                  <div className="w-8 h-8 bg-[#00ffd5] rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-black text-sm font-bold">AP</span>
                  </div>
                )}
                <div className={`max-w-[80%] ${message.role === 'user' ? 'order-2' : ''}`}>
                  <div className={`${message.role === 'user' 
                    ? 'bg-[#1a1a1a] border border-[#00ffd5] text-[#00ffd5]' 
                    : 'bg-[#1a1a1a] text-gray-200'
                  } rounded-lg p-4 shadow-lg`}>
                    <p 
                      className="text-sm leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: formatMessage(message.content) }}
                    />
                    <span className="text-xs text-gray-500 mt-2 block">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
                {message.role === 'user' && (
                  <div className="w-8 h-8 bg-gradient-to-r from-[#00ffd5] to-[#0099cc] rounded-full flex items-center justify-center ml-3 flex-shrink-0 order-3">
                    <span className="text-black text-sm font-bold">YOU</span>
                  </div>
                )}
              </div>
            ))}
            
            {isTyping && (
              <div className="flex items-start">
                <div className="w-8 h-8 bg-[#00ffd5] rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-black text-sm font-bold">AP</span>
                </div>
                <div className="bg-[#1a1a1a] text-gray-200 rounded-lg p-4 shadow-lg">
                  <div className="flex space-x-1 items-center">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-[#00ffd5] rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                      <div className="w-2 h-2 bg-[#00ffd5] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-[#00ffd5] rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                    <span className="text-xs text-gray-400 ml-2">Spectra is typing...</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col md:flex-row gap-3">
            <input
              id="chatInput"
              type="text"
              className="flex-1 rounded-lg bg-[#181818] text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00ffd5] border border-gray-600 focus:border-[#00ffd5] transition-colors"
              placeholder="Ask me about Arghyadip's projects, skills, or experience..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') sendMessage() }}
              disabled={isTyping}
            />
            <button 
              onClick={sendMessage} 
              disabled={isTyping || !input.trim()}
              className="bg-[#00ffd5] text-black font-bold px-6 py-3 rounded-lg hover:bg-[#00bfae] transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isTyping ? '...' : 'Send'}
            </button>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <button 
              onClick={() => quickQuestion("What are Arghyadip's best projects?")} 
              className="text-xs bg-[#1a1a1a] text-[#00ffd5] px-3 py-2 rounded-full border border-[#00ffd5] hover:bg-[#00ffd5] hover:text-black transition"
            >
              🏆 Best Projects
            </button>
            <button 
              onClick={() => quickQuestion("What technologies does he use?")} 
              className="text-xs bg-[#1a1a1a] text-[#00ffd5] px-3 py-2 rounded-full border border-[#00ffd5] hover:bg-[#00ffd5] hover:text-black transition"
            >
              ⚡ Tech Stack
            </button>
            <button 
              onClick={() => quickQuestion("Tell me about his AI experience")} 
              className="text-xs bg-[#1a1a1a] text-[#00ffd5] px-3 py-2 rounded-full border border-[#00ffd5] hover:bg-[#00ffd5] hover:text-black transition"
            >
              🧠 AI Experience
            </button>
            <button 
              onClick={() => quickQuestion("How can I contact Arghyadip?")} 
              className="text-xs bg-[#1a1a1a] text-[#00ffd5] px-3 py-2 rounded-full border border-[#00ffd5] hover:bg-[#00ffd5] hover:text-black transition"
            >
              📞 Contact Info
            </button>
            <button 
              onClick={() => quickQuestion("Is he available for projects?")} 
              className="text-xs bg-[#1a1a1a] text-[#00ffd5] px-3 py-2 rounded-full border border-[#00ffd5] hover:bg-[#00ffd5] hover:text-black transition"
            >
              💼 Availability
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  return (
    <section className="py-12 md:py-24 px-2 sm:px-6 section-bg">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold glow-text mb-6 font-[Orbitron]">Client Testimonials</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00ffd5] to-[#0099cc] mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">Discover what industry leaders say about working with cutting-edge AI solutions</p>
        </div>

        <div className="testimonial-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="testimonial-card glass-card rounded-2xl p-8 floating-animation relative group">
            <div className="quote-icon">"</div>
            <div className="testimonial-badge">★</div>
            <div className="flex items-center mb-6">
              <div className="relative">
                <img src="/assets/raghav.jpg" alt="Raghav Sood" className="w-16 h-16 rounded-full avatar-glow transition-transform group-hover:scale-110" />
              </div>
              <div className="ml-4">
                <h4 className="text-xl font-semibold text-[#00ffd5] mb-1">Raghav Sood</h4>
                <p className="text-gray-400">Senior Project Manager</p>
                <p className="text-sm text-gray-500">Lead Engineer - Samsung R&amp;D</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">"Arghyadip's AI traffic management system revolutionized our entire infrastructure. The real-time optimization and predictive analytics exceeded every expectation. His innovative approach saved us 40% in operational costs."</p>
            <div className="flex items-center justify-between">
              <div className="rating-stars text-xl">★★★★</div>
              <span className="text-sm text-gray-500">2 weeks ago</span>
            </div>
          </div>

          <div className="testimonial-card glass-card rounded-2xl p-8 floating-animation relative group" style={{ animationDelay: '0.5s' }}>
            <div className="quote-icon">"</div>
            <div className="testimonial-badge">✓</div>
            <div className="flex items-center mb-6">
              <div className="relative">
                <img src="/assets/sarah.jpg" alt="Sarah Miller" className="w-16 h-16 rounded-full avatar-glow transition-transform group-hover:scale-110" />
              </div>
              <div className="ml-4">
                <h4 className="text-xl font-semibold text-[#00ffd5] mb-1">Sarah Miller</h4>
                <p className="text-gray-400">Lead Software Architect</p>
                <p className="text-sm text-gray-500">InnovateTech Labs</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">"Working with Arghyadip was transformative. His full-stack expertise and AI integration skills are unmatched. The surveillance system he built processes 10,000+ events per second flawlessly."</p>
            <div className="flex items-center justify-between">
              <div className="rating-stars text-xl">★★★★★</div>
              <span className="text-sm text-gray-500">1 month ago</span>
            </div>
          </div>

          <div className="testimonial-card glass-card rounded-2xl p-8 floating-animation relative group" style={{ animationDelay: '1s' }}>
            <div className="quote-icon">"</div>
            <div className="testimonial-badge">🏆</div>
            <div className="flex items-center mb-6">
              <div className="relative">
                <img src="/assets/raj.jpg" alt="Raj Patel" className="w-16 h-16 rounded-full avatar-glow transition-transform group-hover:scale-110" />
              </div>
              <div className="ml-4">
                <h4 className="text-xl font-semibold text-[#00ffd5] mb-1">Raj Patel</h4>
                <p className="text-gray-400">Founder &amp; CEO</p>
                <p className="text-sm text-gray-500">NextGen Startup</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">"The intelligent surveillance system exceeded every benchmark. Real-time threat detection, seamless cloud integration, and 99.9% uptime. Arghyadip's expertise is phenomenal."</p>
            <div className="flex items-center justify-between">
              <div className="rating-stars text-xl">★★★★★</div>
              <span className="text-sm text-gray-500">3 weeks ago</span>
            </div>
          </div>

          <div className="testimonial-card glass-card rounded-2xl p-8 floating-animation relative group" style={{ animationDelay: '1.5s' }}>
            <div className="quote-icon">"</div>
            <div className="testimonial-badge">🚀</div>
            <div className="flex items-center mb-6">
              <div className="relative">
                <img src="/assets/sundar.jpg" alt="Sundar Rajan" className="w-16 h-16 rounded-full avatar-glow transition-transform group-hover:scale-110" />
              </div>
              <div className="ml-4">
                <h4 className="text-xl font-semibold text-[#00ffd5] mb-1">Sundar Rajan</h4>
                <p className="text-gray-400">AI Research Director</p>
                <p className="text-sm text-gray-500">Texas Instruments</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">"Arghyadip's machine learning models achieved 96% accuracy in our computer vision project. His deep understanding of neural networks and optimization techniques is remarkable. A true AI expert."</p>
            <div className="flex items-center justify-between">
              <div className="rating-stars text-xl">★★★★</div>
              <span className="text-sm text-gray-500">5 days ago</span>
            </div>
          </div>

          <div className="testimonial-card glass-card rounded-2xl p-8 floating-animation relative group" style={{ animationDelay: '2s' }}>
            <div className="quote-icon">"</div>
            <div className="testimonial-badge">💎</div>
            <div className="flex items-center mb-6">
              <div className="relative">
                <img src="/assets/sayan.png" alt="Sayan Majumdar" className="w-16 h-16 rounded-full avatar-glow transition-transform group-hover:scale-110" />
              </div>
              <div className="ml-4">
                <h4 className="text-xl font-semibold text-[#00ffd5] mb-1">Sayan Majumdar</h4>
                <p className="text-gray-400">VP of Engineering</p>
                <p className="text-sm text-gray-500">DataFlow Systems</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">"The real-time data processing pipeline Arghyadip architected handles 1M+ transactions daily. His expertise in distributed systems and cloud architecture is outstanding. Delivery was flawless."</p>
            <div className="flex items-center justify-between">
              <div className="rating-stars text-xl">★★★★★</div>
              <span className="text-sm text-gray-500">1 week ago</span>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
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
    <section id="blog" className="py-12 md:py-20 px-2 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center glow-text mb-8 md:mb-12 font-[Orbitron]">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <article className="glass-effect rounded-xl overflow-hidden hover:scale-105 transition-transform">
            <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80" alt="Building AI-Powered Applications" className="h-48 w-full object-cover" />
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
            <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80" alt="Modern Full-Stack Development" className="h-48 w-full object-cover" />
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
            <img src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=800&q=80" alt="Future of Smart Cities" className="h-48 w-full object-cover" />
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
    <section id="contact" className="py-12 md:py-20 px-2 sm:px-6 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center glow-text mb-8 md:mb-12 font-[Orbitron]">Get In Touch</h2>
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
                <input type="text" name="name" placeholder="Your Name" required className="w-full px-4 py-3 rounded-lg bg-[#181818] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#00ffd5] mb-2" />
              </div>
              <div>
                <input type="email" name="email" placeholder="Your Email" required className="w-full px-4 py-3 rounded-lg bg-[#181818] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#00ffd5] mb-2" />
              </div>
              <div>
                <select name="project_type" required className="w-full px-4 py-3 rounded-lg bg-[#181818] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#00ffd5] mb-2">
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
                <textarea name="message" placeholder="Your Message" required rows={4} className="w-full px-4 py-3 rounded-lg bg-[#181818] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#00ffd5] mb-2"></textarea>
              </div>
              <div>
                <button type="submit" className="bg-[#00ffd5] text-black font-bold px-6 py-3 rounded-lg hover:bg-[#00bfae] transition w-full">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionFold({ children, variant = 'tl' }: { children: React.ReactNode, variant?: 'tl' | 'tr' | 'bl' | 'br' }) {
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
    <section id="stats" className="py-12 md:py-20 px-2 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center glow-text mb-8 md:mb-12 font-[Orbitron]">By The Numbers</h2>
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
    <section id="skills" className="py-16 bg-gradient-to-br from-red-900 via-black to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-red-400 mb-12 font-[Orbitron] relative">
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

function Home() {
  const [revealDone, setRevealDone] = useState(false)
  
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
      <SpiderWebBackground />
      <div className="animated-bg min-h-screen flex flex-col relative">
        <div className="bg-tech"></div>
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

        <SectionFold variant="tl"><PowerStats /></SectionFold>
        <div className="my-8" />
        {/* <SectionFold variant="tr"><AboutSection /></SectionFold> */}
        <SectionFold variant="tl"><SkillsSection /></SectionFold>
        <SectionFold variant="tr"><ProjectsSection /></SectionFold>
        <SectionFold variant="tl"><TimelineSection /></SectionFold>
        <SectionFold variant="tr"><AssistantSection /></SectionFold>
        <SectionFold variant="tl"><TestimonialsSection /></SectionFold>
        <SectionFold variant="tr"><BlogSection /></SectionFold>
        <SectionFold variant="tl"><ContactSection /></SectionFold>
        <SectionFold variant="tr"><StatsSection /></SectionFold>

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
