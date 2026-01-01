import React, { useState, useEffect } from 'react';

export default function SmartCitiesPage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [stats, setStats] = useState({
    cities: 0,
    investment: 0,
    projects: 0,
    population: 0
  });
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = totalScroll / windowHeight;
      setScrollProgress(Number(scroll) * 100);

      // Update active section
      const sections = ['hero', 'dashboard', 'cities', 'technology', 'timeline', 'future'];
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animated counters
  useEffect(() => {
    const animateStats = () => {
      const targets = { cities: 100, investment: 200000, projects: 6000, population: 60000000 };
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        const easeOut = 1 - Math.pow(1 - progress, 3);

        setStats({
          cities: Math.floor(targets.cities * easeOut),
          investment: Math.floor(targets.investment * easeOut),
          projects: Math.floor(targets.projects * easeOut),
          population: Math.floor(targets.population * easeOut)
        });

        if (step >= steps) {
          clearInterval(timer);
          setStats(targets);
        }
      }, stepTime);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          if (entry.target.id === 'dashboard') {
            animateStats();
          }
        }
      });
    }, { threshold: 0.3 });

    ['hero', 'dashboard', 'cities', 'technology', 'timeline', 'future'].forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const cityData = [
    {
      name: 'Indore',
      achievement: 'Cleanest City',
      score: 95,
      color: 'from-green-400 to-blue-500',
      description: 'GPS-enabled waste management and smart bin sensors'
    },
    {
      name: 'Surat',
      achievement: 'Sustainability Leader',
      score: 92,
      color: 'from-blue-400 to-purple-500',
      description: 'Renewable energy and treated water management'
    },
    {
      name: 'Pune',
      achievement: 'Smart Mobility',
      score: 89,
      color: 'from-purple-400 to-pink-500',
      description: 'Adaptive traffic signals and public transport tracking'
    },
    {
      name: 'Bengaluru',
      achievement: 'Tech Hub',
      score: 88,
      color: 'from-yellow-400 to-red-500',
      description: 'AI-driven traffic management and digital governance'
    }
  ];

  const timelineData = [
    {
      year: '2015',
      title: 'Smart Cities Mission Launch',
      description: 'Government announces 100 smart cities initiative',
      status: 'completed'
    },
    {
      year: '2017',
      title: 'ICCC Implementation',
      description: 'Integrated Command and Control Centers become operational',
      status: 'completed'
    },
    {
      year: '2020',
      title: 'Digital India Integration',
      description: 'IoT sensors and AI systems deployed across major cities',
      status: 'completed'
    },
    {
      year: '2025',
      title: 'AI-Powered Analytics',
      description: 'Predictive analytics and real-time decision making',
      status: 'in-progress'
    },
    {
      year: '2030',
      title: 'Sustainable Future',
      description: 'Carbon-neutral smart cities with full IoT integration',
      status: 'planned'
    },
    {
      year: '2047',
      title: 'Viksit Bharat',
      description: 'Complete digital transformation of urban India',
      status: 'planned'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Custom Styles */}
      <style>{`
        :root {
          --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          --secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          --accent-gradient: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          --glass-bg: rgba(255, 255, 255, 0.05);
          --glass-border: rgba(255, 255, 255, 0.1);
        }

        .glass-card {
          background: var(--glass-bg);
          backdrop-filter: blur(20px);
          border: 1px solid var(--glass-border);
          border-radius: 20px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }

        .gradient-text {
          background: var(--accent-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .floating-animation {
          animation: float 6s ease-in-out infinite;
        }

        .pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite alternate;
        }

        .slide-up {
          animation: slide-up 0.8s ease-out;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes pulse-glow {
          0% { box-shadow: 0 0 20px rgba(79, 172, 254, 0.4); }
          100% { box-shadow: 0 0 40px rgba(79, 172, 254, 0.8); }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .progress-ring {
          transition: stroke-dashoffset 0.5s ease-in-out;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: var(--accent-gradient);
          border-radius: 4px;
        }

        .city-card:hover {
          transform: translateY(-10px) scale(1.02);
        }

        /* Enhanced Timeline Styles */
        .timeline-container {
          position: relative;
          padding: 2rem 0;
        }

        .timeline-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 4px;
          background: linear-gradient(180deg, #4facfe 0%, #00f2fe 50%, #f093fb 100%);
          transform: translateX(-50%);
          border-radius: 2px;
          box-shadow: 0 0 20px rgba(79, 172, 254, 0.3);
        }

        .timeline-item {
          position: relative;
          display: flex;
          align-items: center;
          margin-bottom: 3rem;
          opacity: 0;
        }

        .timeline-item.animate {
          animation: slide-in-left 0.8s ease-out forwards;
        }

        .timeline-item.animate:nth-child(even) {
          animation: slide-in-right 0.8s ease-out forwards;
        }

        .timeline-item:nth-child(odd) {
          justify-content: flex-end;
          padding-right: calc(50% + 3rem);
        }
        .timeline-item:nth-child(odd) .timeline-card {
          text-align: right;
        }
        .timeline-item:nth-child(even) {
          padding-left: calc(50% + 3rem);
        }

        .timeline-marker {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 20px;
          height: 20px;
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          border: 4px solid #0f172a;
          border-radius: 50%;
          z-index: 10;
          box-shadow: 0 0 20px rgba(79, 172, 254, 0.6);
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .timeline-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
          width: 100%;
          transition: all 0.3s ease;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }

        .timeline-card:hover {
          transform: translateY(-5px);
          border-color: rgba(79, 172, 254, 0.5);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
        }

        .timeline-year {
          font-size: 1.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.5rem;
        }

        .timeline-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: white;
          margin-bottom: 0.75rem;
        }

        .timeline-description {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .timeline-status {
          display: inline-block;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .status-completed {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
        }

        .status-in-progress {
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
          color: white;
          box-shadow: 0 4px 15px rgba(245, 158, 11, 0.3);
        }

        .status-planned {
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          color: white;
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
        }

        /* Mobile Responsive Timeline */
        @media (max-width: 768px) {
          .timeline-line {
            left: 30px;
          }
          
          .timeline-marker {
            left: 30px;
          }
          
          .timeline-item,
          .timeline-item:nth-child(odd),
          .timeline-item:nth-child(even) {
            margin-left: 0;
            padding-left: 4rem;
            padding-right: 0;
            justify-content: flex-start;
          }
          
          .timeline-card {
            width: 100%;
            margin: 0 !important;
            text-align: left !important;
          }
          
          .timeline-item.animate,
          .timeline-item.animate:nth-child(even) {
            animation: slide-in-left 0.8s ease-out forwards;
          }
        }
      `}</style>

      {/* Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Short Centered Header */}
      <header className="fixed top-4 left-0 right-0 mx-auto w-fit z-40 glass-card px-4 py-2">
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-lg">🕷️</div>
            <h1 className="text-sm font-bold gradient-text hidden sm:block">ARGHYADIP.DEV</h1>
          </div>

          {/* Navigation */}
          <nav className="flex space-x-2">
            {[
              { id: 'hero', label: 'Home' },
              { id: 'dashboard', label: 'Dashboard' },
              { id: 'cities', label: 'Cities' },
              { id: 'technology', label: 'Tech' },
              { id: 'timeline', label: 'Timeline' },
              { id: 'future', label: 'Future' }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-2 py-1 rounded-full text-xs transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-cyan-400 text-black'
                    : 'text-white hover:text-cyan-400 hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        {/* Spider Web Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="web" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M50,0 L50,100 M0,50 L100,50 M0,0 L100,100 M100,0 L0,100" stroke="currentColor" strokeWidth="0.5" fill="none"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#web)" />
          </svg>
        </div>

        <div className="text-center z-10 px-4 max-w-6xl mx-auto">
          <div className={`${isVisible.hero ? 'slide-up' : 'opacity-0'}`}>
            <div className="text-6xl mb-6 floating-animation">🏙️</div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">India's Smart City</span>
              <br />
              <span className="text-white">Revolution</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transforming urban landscapes through AI, IoT, and innovative technology solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('dashboard')}
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold rounded-full hover:scale-105 transition-transform duration-300"
              >
                Explore Dashboard
              </button>
              <a
                href="/articles"
                className="px-8 py-4 glass-card text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300"
              >
                Back to Articles
              </a>
            </div>
          </div>
        </div>

        {/* Floating City Icons */}
        <div className="absolute bottom-10 left-10 text-4xl opacity-30 floating-animation">🏢</div>
        <div className="absolute top-20 right-20 text-3xl opacity-30 floating-animation" style={{ animationDelay: '1s' }}>🏗️</div>
        <div className="absolute bottom-20 right-10 text-5xl opacity-30 floating-animation" style={{ animationDelay: '3s' }}>🌆</div>
      </section>

      {/* Dashboard Section */}
      <section id="dashboard" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 ${isVisible.dashboard ? 'slide-up' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Smart Cities Dashboard</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-time insights into India's urban transformation journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Smart Cities',
                value: stats.cities,
                suffix: '+',
                icon: '🏙️',
                color: 'from-blue-400 to-cyan-500',
                description: 'Cities selected for transformation'
              },
              {
                title: 'Investment',
                value: `₹${(stats.investment / 100000).toFixed(1)}L`,
                suffix: ' Cr',
                icon: '💰',
                color: 'from-green-400 to-emerald-500',
                description: 'Total investment allocated'
              },
              {
                title: 'Projects',
                value: stats.projects,
                suffix: '+',
                icon: '🚀',
                color: 'from-purple-400 to-pink-500',
                description: 'Projects completed or ongoing'
              },
              {
                title: 'Population Served',
                value: `${(stats.population / 1000000).toFixed(0)}M`,
                suffix: '+',
                icon: '👥',
                color: 'from-yellow-400 to-orange-500',
                description: 'Citizens benefiting from smart solutions'
              }
            ].map((stat, index) => (
              <div
                key={index}
                className={`glass-card p-8 text-center city-card transition-all duration-500 ${
                  isVisible.dashboard ? 'slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-6xl mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">{stat.title}</h3>
                <p className="text-gray-400 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>

          {/* Progress Indicators */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: 'Digital Infrastructure', progress: 85, color: 'from-blue-400 to-cyan-500' },
              { label: 'IoT Implementation', progress: 72, color: 'from-green-400 to-emerald-500' },
              { label: 'AI Integration', progress: 68, color: 'from-purple-400 to-pink-500' }
            ].map((item, index) => (
              <div key={index} className="glass-card p-6">
                <h3 className="text-lg font-semibold text-white mb-4">{item.label}</h3>
                <div className="w-full bg-gray-700 rounded-full h-3 mb-2">
                  <div
                    className={`h-3 rounded-full bg-gradient-to-r ${item.color} transition-all duration-1000 ease-out`}
                    style={{ width: isVisible.dashboard ? `${item.progress}%` : '0%' }}
                  ></div>
                </div>
                <div className="text-right text-cyan-400 font-semibold">{item.progress}%</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cities Section */}
      <section id="cities" className="py-20 px-4 bg-gradient-to-r from-slate-900/50 to-purple-900/50">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 ${isVisible.cities ? 'slide-up' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Leading Smart Cities</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Pioneering cities setting global benchmarks in urban innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cityData.map((city, index) => (
              <div
                key={index}
                className={`glass-card p-6 city-card transition-all duration-500 ${
                  isVisible.cities ? 'slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className="relative w-24 h-24 mx-auto mb-6">
                    <svg className="w-24 h-24 transform -rotate-90">
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="8"
                        fill="none"
                      />
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="url(#gradient)"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 40}`}
                        strokeDashoffset={`${2 * Math.PI * 40 * (1 - city.score / 100)}`}
                        className="progress-ring"
                      />
                      <defs>
                        <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#4facfe" />
                          <stop offset="100%" stopColor="#00f2fe" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">{city.score}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{city.name}</h3>
                  <p className="text-cyan-400 font-semibold mb-3">{city.achievement}</p>
                  <p className="text-gray-300 text-sm">{city.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 ${isVisible.technology ? 'slide-up' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Technology Stack</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge technologies powering India's smart city ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🤖',
                title: 'Artificial Intelligence',
                description: 'Machine learning algorithms for traffic optimization, predictive analytics, and citizen services',
                features: ['Computer Vision', 'Natural Language Processing', 'Predictive Analytics']
              },
              {
                icon: '📡',
                title: 'Internet of Things',
                description: 'Connected sensors and devices for real-time monitoring and automated city management',
                features: ['Smart Sensors', 'Real-time Monitoring', 'Automated Systems']
              },
              {
                icon: '☁️',
                title: 'Cloud Infrastructure',
                description: 'Scalable cloud platforms enabling data processing, storage, and service delivery',
                features: ['Data Analytics', 'Scalable Storage', 'API Management']
              },
              {
                icon: '🔒',
                title: 'Cybersecurity',
                description: 'Advanced security protocols protecting city infrastructure and citizen data',
                features: ['Data Encryption', 'Network Security', 'Privacy Protection']
              },
              {
                icon: '🚗',
                title: 'Smart Mobility',
                description: 'Intelligent transportation systems reducing congestion and improving accessibility',
                features: ['Traffic Management', 'Public Transport', 'Parking Solutions']
              },
              {
                icon: '♻️',
                title: 'Sustainability',
                description: 'Green technologies promoting environmental conservation and resource efficiency',
                features: ['Renewable Energy', 'Waste Management', 'Water Conservation']
              }
            ].map((tech, index) => (
              <div
                key={index}
                className={`glass-card p-8 hover:bg-white/10 transition-all duration-300 ${
                  isVisible.technology ? 'slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{tech.title}</h3>
                <p className="text-gray-300 mb-6">{tech.description}</p>
                <ul className="space-y-2">
                  {tech.features.map((feature, idx) => (
                    <li key={idx} className="text-cyan-400 text-sm flex items-center">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-20 px-4 bg-gradient-to-r from-purple-900/30 to-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 ${isVisible.timeline ? 'slide-up' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Development Timeline</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The journey of India's Smart Cities Mission from vision to reality
            </p>
          </div>

          <div className="timeline-container">
            {/* Central Timeline Line */}
            <div className="timeline-line"></div>
            
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`timeline-item ${
                  isVisible.timeline ? 'animate' : ''
                }`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {/* Timeline Marker */}
                <div className="timeline-marker"></div>
                
                {/* Timeline Card */}
                <div className="timeline-card">
                  <div className="timeline-year">{item.year}</div>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-description">{item.description}</p>
                  <div className={`timeline-status ${
                    item.status === 'completed' ? 'status-completed' :
                    item.status === 'in-progress' ? 'status-in-progress' :
                    'status-planned'
                  }`}>
                    {item.status.replace('-', ' ').toUpperCase()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision Section */}
      <section id="future" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 ${isVisible.future ? 'slide-up' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Vision 2047</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Building sustainable, inclusive, and technologically advanced urban ecosystems
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`${isVisible.future ? 'slide-up' : 'opacity-0'}`}>
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Key Objectives</h3>
                <div className="space-y-6">
                  {[
                    { icon: '🌱', title: 'Carbon Neutral Cities', description: 'Achieving net-zero emissions through renewable energy and sustainable practices' },
                    { icon: '🤝', title: 'Inclusive Development', description: 'Ensuring technology benefits reach all citizens regardless of socioeconomic status' },
                    { icon: '🔗', title: 'Integrated Ecosystems', description: 'Seamless connectivity between transportation, energy, and communication networks' },
                    { icon: '🛡️', title: 'Resilient Infrastructure', description: 'Building cities that can adapt to climate change and emerging challenges' }
                  ].map((objective, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="text-2xl">{objective.icon}</div>
                      <div>
                        <h4 className="text-lg font-semibold text-cyan-400 mb-2">{objective.title}</h4>
                        <p className="text-gray-300">{objective.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={`${isVisible.future ? 'slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
              <div className="text-center">
                <div className="text-8xl mb-8 floating-animation">🌆</div>
                <div className="glass-card p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Expected Impact</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Urban Population Served</span>
                      <span className="text-cyan-400 font-bold">100%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Resource Efficiency</span>
                      <span className="text-cyan-400 font-bold">+60%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Quality of Life Index</span>
                      <span className="text-cyan-400 font-bold">Top 50</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Digital Inclusion</span>
                      <span className="text-cyan-400 font-bold">Universal</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-900/80 to-purple-900/80">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-12">
            <div className="text-6xl mb-6">📧</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Stay Updated</h2>
            <p className="text-xl text-gray-300 mb-8">
              Get the latest insights on smart cities, urban innovation, and emerging technologies
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold rounded-full hover:scale-105 transition-transform duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="text-3xl">🕷️</div>
              <h3 className="text-2xl font-bold gradient-text">ARGHYADIP.DEV</h3>
            </div>
            <div className="flex space-x-6">
              <a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a>
              <a href="/articles" className="text-gray-400 hover:text-white transition-colors">Articles</a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div className="text-center mt-8 pt-8 border-t border-white/10">
            <p className="text-gray-400">
              © 2025 ARGHYADIP.DEV. Crafted with ❤️ and React.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
