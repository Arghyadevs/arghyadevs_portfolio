import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// Article Data
const articles = [
  {
    id: 1,
    category: 'ai',
    categoryLabel: 'AI & Machine Learning',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    badgeIcon: '⚡',
    title: 'Building AI-Powered Applications: A Complete Guide',
    description: 'Discover how to integrate machine learning models into real-world applications. Learn about model deployment, API integration, and building intelligent user interfaces that adapt to user behavior.',
    date: 'January 15, 2025',
    readTime: '8 min read',
    link: '/ai-powered-applications'
  },
  {
    id: 2,
    category: 'fullstack',
    categoryLabel: 'Full-Stack Development',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80',
    badgeIcon: '🔥',
    title: 'Modern Full-Stack Development: React + Node.js Mastery',
    description: 'Master the art of building scalable web applications with React and Node.js. Explore advanced patterns, performance optimization, and deployment strategies for modern web apps.',
    date: 'January 10, 2025',
    readTime: '12 min read',
    link: '#'
  },
  {
    id: 3,
    category: 'smartcities',
    categoryLabel: 'Smart Cities',
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=800&q=80',
    badgeIcon: '🌟',
    title: 'India\'s Smart City Revolution: A Digital Leap',
    description: 'Explore how artificial intelligence and Internet of Things are transforming urban infrastructure, traffic management, and citizen services in Indian cities like Indore and Bengaluru.',
    date: 'January 5, 2025',
    readTime: '10 min read',
    link: '/SmartCitiesPage'
  },
  {
    id: 4,
    category: 'web3',
    categoryLabel: 'Web3 & Blockchain',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80',
    badgeIcon: '💎',
    title: 'Web3 Development: Building the Decentralized Future',
    description: 'Learn how to build decentralized applications using blockchain technology, smart contracts, and modern Web3 frameworks. The ultimate guide to DApp development.',
    date: 'December 28, 2024',
    readTime: '15 min read',
    link: '#'
  },
  {
    id: 5,
    category: 'ai',
    categoryLabel: 'AI & Machine Learning',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80',
    badgeIcon: '🎯',
    title: 'Neural Networks Explained: From Theory to Practice',
    description: 'Dive deep into neural networks, from basic perceptrons to complex deep learning architectures. Includes practical examples and implementation guides.',
    date: 'December 20, 2024',
    readTime: '20 min read',
    link: '#'
  },
  {
    id: 6,
    category: 'fullstack',
    categoryLabel: 'Full-Stack Development',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    badgeIcon: '🔧',
    title: 'Microservices Architecture: Design Patterns & Best Practices',
    description: 'Learn how to design and implement microservices architecture with Docker, Kubernetes, and cloud-native technologies for scalable applications.',
    date: 'December 15, 2024',
    readTime: '18 min read',
    link: '#'
  }
];

const categories = [
  { id: 'all', label: 'All Articles' },
  { id: 'ai', label: 'AI & Machine Learning' },
  { id: 'fullstack', label: 'Full-Stack Development' },
  { id: 'smartcities', label: 'Smart Cities' },
  { id: 'web3', label: 'Web3 & Blockchain' },
];

export default function ArticlesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredArticles, setFilteredArticles] = useState(articles);
  const spiderWebRef = useRef<HTMLDivElement>(null);

  // Parallax Effect
  useEffect(() => {
    const handleScroll = () => {
      if (spiderWebRef.current) {
        const scrolled = window.scrollY;
        spiderWebRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Search & Filter Logic
  useEffect(() => {
    const lowerTerm = searchTerm.toLowerCase();
    const filtered = articles.filter(article => {
      const matchesSearch = 
        article.title.toLowerCase().includes(lowerTerm) || 
        article.description.toLowerCase().includes(lowerTerm) ||
        article.categoryLabel.toLowerCase().includes(lowerTerm);
      const matchesCategory = activeCategory === 'all' || article.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
    setFilteredArticles(filtered);
  }, [searchTerm, activeCategory]);

  return (
    <div className="min-h-screen bg-[#0b0f19] font-sans text-slate-300 relative overflow-x-hidden selection:bg-red-500/30">
      {/* Custom Styles from HTML */}
      <style>{`
        :root { --accent-red: #ef4444; --accent-blue: #3b82f6; }
        .bg-grid-pattern { background-image: radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px); background-size: 40px 40px; }
        .glass-panel { background: rgba(17, 24, 39, 0.7); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.08); }
        .card-hover { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
        .card-hover:hover { transform: translateY(-4px); box-shadow: 0 12px 24px -8px rgba(0, 0, 0, 0.5); border-color: rgba(239, 68, 68, 0.5); }
        .text-glow { text-shadow: 0 0 20px rgba(239, 68, 68, 0.3); }
        .animate-float { animation: float 6s ease-in-out infinite; }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes slideDown { from { transform: translateY(-100%); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        .nav-animate { animation: slideDown 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
      `}</style>

      {/* Spider Web Background */}
      <div className="fixed inset-0 bg-grid-pattern opacity-[0.07] pointer-events-none" ref={spiderWebRef}></div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 glass-panel border-b border-white/5 px-6 py-4 mb-8 nav-animate backdrop-blur-xl bg-[#0b0f19]/80">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-red-500 rounded-full blur-md opacity-20 group-hover:opacity-60 transition-opacity duration-500"></div>
              <img src="/assets/Arghyalogo.png" alt="Logo" className="relative w-10 h-10 rounded-full border-2 border-white/10 object-cover transform group-hover:rotate-12 transition-transform duration-500" />
            </div>
            <span className="font-bold text-white tracking-wide text-lg group-hover:text-red-400 transition-colors duration-300">ARGHYADIP.DEV</span>
          </Link>
          <div className="flex gap-6 text-sm font-medium">
            <Link to="/" className="text-slate-400 hover:text-white transition-colors">Home</Link>
            <a href="#articles" className="text-white">Articles</a>
            <a href="#newsletter" className="text-slate-400 hover:text-white transition-colors">Newsletter</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-12 pb-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium mb-6 animate-float">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            Engineering & Design Blog
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Thoughts on <span className="text-red-500 text-glow">Code</span>, <span className="text-blue-500">AI</span>, and the <span className="text-yellow-400">Future</span>.
          </h1>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto">
            A curated collection of articles documenting my journey through full-stack development, 
            machine learning experiments, and system architecture.
          </p>
          
          <div className="relative max-w-lg mx-auto group">
            <div className="absolute inset-0 bg-red-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative flex items-center bg-[#1e293b] border border-slate-700 rounded-full p-1 shadow-2xl focus-within:border-red-500/50 transition-colors">
              <span className="pl-4 text-slate-500">🔍</span>
              <input 
                type="text" 
                placeholder="Search for topics..."
                className="w-full bg-transparent border-none text-white px-4 py-3 focus:ring-0 placeholder-slate-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="relative z-10 px-4 mb-16">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-3">
          {categories.map(cat => (
            <button 
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id 
                  ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)]' 
                  : 'bg-slate-800/50 text-slate-400 hover:bg-slate-800 hover:text-white border border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section id="articles" className="relative z-10 pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map(article => (
              <article key={article.id} className="glass-panel rounded-2xl overflow-hidden card-hover group flex flex-col h-full">
                <div className="h-48 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] to-transparent opacity-60 z-10"></div>
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white border border-white/10 z-20">
                    {article.readTime}
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold tracking-wider text-red-400 uppercase">{article.categoryLabel}</span>
                    <span className="text-slate-500 text-xs">{article.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-red-400 transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                    {article.description}
                  </p>
                  
                  <Link to={article.link} className="inline-flex items-center text-sm font-semibold text-white hover:text-red-400 transition-colors mt-auto group/link">
                    Read Article 
                    <svg className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
          
          {filteredArticles.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🕸️</div>
              <h3 className="text-xl font-bold text-white mb-2">No articles found</h3>
              <p className="text-slate-400">Try adjusting your search or category filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="relative z-10 py-20 px-4 bg-gradient-to-b from-[#0b0f19] to-[#111827] border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6 border border-red-500/20">📩</div>
          <h2 className="text-3xl font-bold text-white mb-4">Stay in the Loop</h2>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">
            Get the latest insights on AI, Full-Stack development, and tech trends delivered straight to your inbox. No spam, just code.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors"
            />
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-lg transition-colors shadow-lg shadow-red-600/20">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5 text-center text-slate-500 text-sm bg-[#0b0f19]">
        <div className="flex justify-center gap-6 mb-4">
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">GitHub</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        </div>
        <p>© {new Date().getFullYear()} Arghyadip Pakhira. Crafted with <span className="text-red-500">♥</span> and React.</p>
      </footer>
    </div>
  );
}