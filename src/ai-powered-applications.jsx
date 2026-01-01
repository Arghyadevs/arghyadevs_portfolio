import React, { useState, useEffect, useRef } from 'react';

// Component for Code Blocks with Typewriter Effect
const TypewriterCode = ({ code, className }) => {
  const [displayCode, setDisplayCode] = useState('');
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );
    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (hasStarted) {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayCode(code.substring(0, i + 1));
        i++;
        if (i > code.length) clearInterval(interval);
      }, 10);
      return () => clearInterval(interval);
    }
  }, [hasStarted, code]);

  return (
    <pre
      ref={elementRef}
      className={`${className} ${hasStarted ? 'typed' : ''}`}
    >
      {displayCode}
    </pre>
  );
};

export default function AiPoweredApplications() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [systemStatus, setSystemStatus] = useState('SYSTEM ONLINE');
  const canvasRef = useRef(null);

  // Matrix Rain Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const fontSize = 18;
    let columns = Math.floor(width / fontSize);
    let drops = Array(columns).fill(1);
    const matrix = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*'.split('');

    const draw = () => {
      ctx.fillStyle = 'rgba(5, 5, 10, 0.1)'; // Darker fade for cleaner look
      ctx.fillRect(0, 0, width, height);
      ctx.font = fontSize + 'px "JetBrains Mono", monospace';
      ctx.fillStyle = 'rgba(0, 255, 213, 0.15)'; // Subtle cyan
      for (let i = 0; i < drops.length; i++) {
        const text = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 40);
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      
      columns = Math.floor(width / fontSize);
      drops = Array(columns).fill(1);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // System Status Updater
  useEffect(() => {
    const statuses = ['SYSTEM ONLINE', 'NEURAL SYNC', 'OPTIMIZING', 'SECURE'];
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % statuses.length;
      setSystemStatus(statuses[index]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Scroll Progress & Back to Top
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.pageYOffset / windowHeight) * 100;
      setScrollProgress(scrolled);
      setShowBackToTop(window.pageYOffset > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for Fade-in Animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.glass').forEach((section) => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(50px)';
      section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Console Easter Egg
  useEffect(() => {
    console.log(
      `\n╔══════════════════════════════════════════════════════════════╗\n║                        STARK INDUSTRIES                      ║\n║                     AI SYSTEMS DIVISION                      ║\n║                                                              ║\n║  "The future is built by those who dare to dream in code."  ║\n║                          - Tony Stark                       ║\n║                                                              ║\n║  System Status: ONLINE                                       ║\n║  AI Modules: ACTIVE                                          ║\n║  Security Level: MAXIMUM                                     ║\n╚══════════════════════════════════════════════════════════════╝\n        `
    );
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (window.innerWidth < 768) setIsNavOpen(false);
    }
  };

  const handleArcClick = (e) => {
    e.currentTarget.classList.add('scale-110');
    setTimeout(() => e.currentTarget.classList.remove('scale-110'), 200);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("Thank you for subscribing! We'll keep you updated with the latest tech insights.");
  };

  return (
    <div className="min-h-screen bg-[#050507] text-slate-300 font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&family=Inter:wght@300;400;600&family=JetBrains+Mono:wght@400;700&display=swap');
        
        :root {
          --stark-cyan: #00ffd5;
          --stark-blue: #0099cc;
        }
        
        body { font-family: 'Inter', sans-serif; }
        h1, h2, h3, h4 { font-family: 'Orbitron', sans-serif; }
        code, pre { font-family: 'JetBrains Mono', monospace; }
        
        .glass {
          background: rgba(10, 15, 30, 0.6);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(0, 255, 213, 0.1);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        }
        
        .text-glow { text-shadow: 0 0 10px rgba(0, 255, 213, 0.5); }
        .border-glow { box-shadow: 0 0 15px rgba(0, 255, 213, 0.2); }
        
        .typed { border-right: 2px solid var(--stark-cyan); animation: blink 1s step-end infinite; }
        @keyframes blink { 50% { border-color: transparent; } }
        
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #050507; }
        ::-webkit-scrollbar-thumb { background: #1e293b; border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: var(--stark-cyan); }
        
        .nav-link { position: relative; }
        .nav-link::after { content: ''; position: absolute; width: 0; height: 1px; bottom: -2px; left: 0; background-color: var(--stark-cyan); transition: width 0.3s; }
        .nav-link:hover::after { width: 100%; }
      `}</style>

      {/* Progress Bar */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: `${scrollProgress}%`,
          height: '2px',
          background: 'linear-gradient(90deg, #0099cc, #00ffd5)',
          zIndex: 9999,
          transition: 'width 0.3s ease',
        }}
      />

      {/* Background Canvas */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <canvas
          ref={canvasRef}
          style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: 0, pointerEvents: 'none' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050507] via-transparent to-[#050507] opacity-90"></div>
      </div>

      {/* Arc Reactor */}
      <div
        onClick={handleArcClick}
        className="hidden lg:flex fixed bottom-8 right-8 w-16 h-16 rounded-full bg-black/50 border border-cyan-500/30 backdrop-blur-md shadow-[0_0_20px_rgba(0,255,213,0.2)] items-center justify-center z-50 cursor-pointer hover:scale-110 transition-all duration-300 group"
      >
        <div className="w-8 h-8 rounded-full bg-cyan-400/20 animate-pulse group-hover:bg-cyan-400/40 transition-colors"></div>
        <img src="/icons/Arc.svg" alt="Arc" className="absolute w-10 h-10 opacity-80" />
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo Area */}
            <div className="flex items-center gap-4">
              <a href="/" className="flex items-center gap-3 group">
                <div className="relative w-10 h-10">
                  <div className="absolute inset-0 bg-cyan-500 rounded-full blur opacity-20 group-hover:opacity-50 transition-opacity"></div>
                  <img src="/assets/Arghyalogo.png" alt="Stark Industries" className="relative w-full h-full object-cover rounded-full border border-cyan-500/30" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold tracking-widest text-white font-[Orbitron]">STARK<span className="text-cyan-400">.AI</span></span>
                  <span className="text-[10px] text-cyan-500/70 tracking-[0.2em] uppercase">Industries Division</span>
                </div>
              </a>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="/" className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors nav-link">HOME</a>
              <a href="/articles" className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors nav-link">ARCHIVES</a>
              <button className="px-4 py-2 text-xs font-bold text-black bg-cyan-400 hover:bg-cyan-300 rounded-sm transition-colors tracking-wider">
                ACCESS TERMINAL
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsNavOpen(!isNavOpen)} className="md:hidden text-cyan-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-xl transition-opacity duration-300 md:hidden ${isNavOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <a href="/" className="text-xl text-white font-[Orbitron]">HOME</a>
          <a href="/articles" className="text-xl text-white font-[Orbitron]">ARCHIVES</a>
          <button onClick={() => setIsNavOpen(false)} className="text-cyan-400 mt-8">CLOSE SYSTEM</button>
        </div>
      </div>

      <main className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-900/20 border border-cyan-500/20 text-cyan-400 text-xs font-medium mb-6 tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              Classified Intelligence
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight text-glow">
              AI-POWERED <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">APPLICATIONS</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              A comprehensive technical analysis of integrating probabilistic machine learning models into deterministic software architectures.
            </p>
          </div>

          {/* Quick Nav Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-16">
              {[
                { id: 'understanding', label: '01. CONCEPTS' },
                { id: 'components', label: '02. COMPONENTS' },
                { id: 'deployment', label: '03. DEPLOYMENT' },
                { id: 'api', label: '04. INTEGRATION' },
                { id: 'interfaces', label: '05. INTERFACES' },
                { id: 'optimization', label: '06. OPTIMIZATION' },
                { id: 'security', label: '07. SECURITY' },
                { id: 'monitoring', label: '08. MONITORING' },
              ].map((item) => (
                <button
                  key={item.id}
                  className="p-3 text-xs font-bold text-slate-500 hover:text-cyan-400 hover:bg-cyan-900/10 border border-white/5 hover:border-cyan-500/30 transition-all text-left uppercase tracking-wider rounded-sm"
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </button>
              ))}
          </div>

        {/* Understanding Section */}
        <section id="understanding" className="glass rounded-xl p-8 mb-12 border-l-4 border-l-cyan-500">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-cyan-500">01.</span> Understanding the Paradigm
          </h2>
          <p className="text-slate-300 mb-8 leading-7">
            AI-powered applications represent a paradigm shift from deterministic software systems to probabilistic,
            learning-enabled architectures. Unlike traditional applications that execute predetermined logic flows, these
            systems leverage statistical models to make inferences, predictions, and decisions based on training data
            patterns.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-black/40 p-6 rounded-lg border border-white/10 hover:border-cyan-500/50 transition-colors group">
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">Hybrid Architectures</h3>
              <p className="text-slate-400 text-sm">
                Modern AI applications implement hybrid architectures combining rule-based systems with machine learning
                components. This approach allows for deterministic behavior in critical paths while leveraging AI for
                enhancement and optimization.
              </p>
            </div>
            <div className="bg-black/40 p-6 rounded-lg border border-white/10 hover:border-cyan-500/50 transition-colors group">
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">Critical Layers</h3>
              <p className="text-slate-400 text-sm">
                Data ingestion, preprocessing pipelines, model training frameworks, inference engines, and feedback
                collection systems form the backbone of AI applications.
              </p>
            </div>
            <div className="bg-black/40 p-6 rounded-lg border border-white/10 hover:border-cyan-500/50 transition-colors group">
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">Engineering Challenges</h3>
              <p className="text-slate-400 text-sm">
                Scalability, latency optimization, accuracy maintenance, and system maintainability represent the core
                challenges in AI system architecture.
              </p>
            </div>
          </div>
        </section>

        {/* Core Components Section */}
        <section id="components" className="glass rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-cyan-500">02.</span> Core Components
          </h2>
          
          <h3 className="text-lg text-cyan-400 mb-4 font-bold uppercase tracking-wider">
            Model Selection and Preparation
          </h3>
          <div className="bg-blue-900/10 p-6 rounded-lg border border-blue-500/20 mb-6">
            <p className="text-slate-300">
              Model selection requires deep understanding of both your data characteristics and computational constraints.
              For supervised learning tasks, consider the bias-variance tradeoff: ensemble methods like Random Forest or
              XGBoost often provide robust baselines with good interpretability.
            </p>
          </div>
          
          <div className="bg-[#0a0a0a] border border-white/10 rounded-lg p-4 mb-8 overflow-x-auto shadow-inner">
            <div className="flex items-center gap-2 mb-3 border-b border-white/5 pb-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-xs text-slate-500 ml-2 font-mono">drift_detection.py</span>
            </div>
            <TypewriterCode
              className="text-cyan-300/90 text-sm whitespace-pre-wrap break-words font-mono"
              code={`# STARK Tech: Feature Drift Monitoring System
from scipy import stats
import numpy as np

def detect_feature_drift(reference_data, current_data, threshold=0.05):
    """Detect feature drift using KS test - STARK Industries Protocol"""
    ks_statistic, p_value = stats.ks_2samp(reference_data, current_data)
    return p_value < threshold, p_value

# STARK Multi-stage Docker Build for ML Serving
FROM python:3.9-slim as base
WORKDIR /app
COPY requirements-serving.txt .
RUN pip install -r requirements-serving.txt

FROM base as serving
COPY model/ ./model/
COPY src/ ./src/
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "app:app"]`}
            />
          </div>
          
          <h3 className="text-lg text-cyan-400 mb-4 font-bold uppercase tracking-wider mt-8">
            Architecture Design Patterns
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-all">
              <h3 className="text-base font-bold text-white mb-2">MLOps Pipeline</h3>
              <p className="text-sm text-slate-400">
                Implement ML Pipeline pattern using Kubeflow, MLflow, or Apache Airflow for orchestrating training
                workflows with version control for both code and data.
              </p>
            </div>
            <div className="p-5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-all">
              <h3 className="text-base font-bold text-white mb-2">Lambda Architecture</h3>
              <p className="text-sm text-slate-400">
                Combines batch processing for model training with stream processing for real-time inference using Apache
                Kafka, Spark, and Flink.
              </p>
            </div>
            <div className="p-5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-all">
              <h3 className="text-base font-bold text-white mb-2">Sidecar Pattern</h3>
              <p className="text-sm text-slate-400">
                Deploy models as separate containers alongside application services, enabling independent scaling and
                updates with service mesh technologies.
              </p>
            </div>
          </div>
        </section>

        {/* Deployment Section */}
        <section id="deployment" className="glass rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-cyan-500">03.</span> Deployment Strategies
          </h2>
          <h3 className="text-lg text-cyan-400 mb-4 font-bold uppercase tracking-wider">
            Cloud-Based Deployment
          </h3>
          <div className="bg-[#0a0a0a] border border-white/10 rounded-lg p-4 mb-8 overflow-x-auto shadow-inner">
            <TypewriterCode
              className="text-cyan-300/90 text-sm whitespace-pre-wrap break-words font-mono"
              code={`# STARK Multi-stage Docker Build for ML Serving
FROM python:3.9-slim as base
WORKDIR /app
COPY requirements-serving.txt .
RUN pip install -r requirements-serving.txt

FROM base as serving
COPY model/ ./model/
COPY src/ ./src/
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "app:app"]`}
            />
          </div>
          <h3 className="text-lg text-cyan-400 mb-4 font-bold uppercase tracking-wider">
            Edge Computing Considerations
          </h3>
          <div className="bg-purple-900/10 p-6 rounded-lg border border-purple-500/20 mb-6">
            <p className="text-slate-300">
              Edge deployment requires sophisticated model optimization techniques. Implement quantization using QAT or
              PTQ methods. INT8 quantization typically reduces model size by 4x with minimal accuracy loss (&lt; 1% for
              most vision models).
            </p>
          </div>
          <div className="bg-[#0a0a0a] border border-white/10 rounded-lg p-4 mb-4 overflow-x-auto shadow-inner">
            <TypewriterCode
              className="text-cyan-300/90 text-sm whitespace-pre-wrap break-words font-mono"
              code={`# STARK TensorFlow Lite Quantization Protocol
import tensorflow as tf

converter = tf.lite.TFLiteConverter.from_saved_model(saved_model_dir)
converter.optimizations = [tf.lite.Optimize.DEFAULT]
converter.representative_dataset = representative_dataset
converter.target_spec.supported_ops = [tf.lite.OpsSet.TFLITE_BUILTINS_INT8]
tflite_model = converter.convert()`}
            />
          </div>
        </section>

        {/* API Integration Section */}
        <section id="api" className="glass rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-cyan-500">04.</span> API Integration
          </h2>
          <h3 className="text-lg text-cyan-400 mb-4 font-bold uppercase tracking-wider">
            RESTful API Design
          </h3>
          <div className="bg-[#0a0a0a] border border-white/10 rounded-lg p-4 mb-8 overflow-x-auto shadow-inner">
            <TypewriterCode
              className="text-cyan-300/90 text-sm whitespace-pre-wrap break-words font-mono"
              code={`# STARK FastAPI ML Endpoint with Validation
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, validator
import numpy as np

class PredictionRequest(BaseModel):
    features: List[float]
    
    @validator('features')
    def validate_features(cls, v):
        if len(v) != 10:  # Expected feature count
            raise ValueError('Expected 10 features - STARK Protocol')
        return v

@app.post("/predict")
async def predict(request: PredictionRequest):
    try:
        prediction = model.predict(np.array([request.features]))
        return {"prediction": float(prediction[0]), "stark_confidence": 0.95}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"STARK Error: {str(e)}")`}
            />
          </div>
          <h3 className="text-lg text-cyan-400 mb-4 font-bold uppercase tracking-wider">
            Real-Time Integration
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-base font-bold text-white mb-2">Kafka Streaming</h3>
              <p className="text-sm text-slate-400">
                Implement streaming inference using Apache Kafka with schema registry for type safety. Use Kafka Streams
                for complex event processing and model chaining.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-base font-bold text-white mb-2">WebSocket Integration</h3>
              <p className="text-sm text-slate-400">
                For real-time ML, implement connection pooling and load balancing across multiple inference workers with
                Redis for session state management.
              </p>
            </div>
          </div>
        </section>

        {/* UI Intelligence Section */}
        <section id="interfaces" className="glass rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-cyan-500">05.</span> Intelligent Interfaces
          </h2>
          <div className="bg-gradient-to-r from-blue-900/20 to-transparent p-6 rounded-lg border-l-2 border-blue-500 mb-6">
            <h3 className="text-lg font-bold text-white mb-2">
              Adaptive Design Principles
            </h3>
            <p className="text-slate-300 text-sm">
              Intelligent user interfaces go beyond static layouts to create dynamic experiences that adapt to individual
              user preferences and behaviors. Implement progressive disclosure that reveals features based on user
              expertise levels and usage patterns.
            </p>
            <h3 className="text-lg font-bold text-white mb-2 mt-6">
              Feedback Loops and Learning
            </h3>
            <p className="text-slate-300 text-sm">
              Successful AI-powered applications implement continuous learning mechanisms. Collect user feedback through
              both explicit methods (ratings, reviews) and implicit signals (click-through rates, time spent, task
              completion).
            </p>
          </div>
          <div className="bg-gradient-to-r from-purple-900/20 to-transparent p-6 rounded-lg border-l-2 border-purple-500">
            <p className="text-slate-300 text-sm italic">
              AI models inevitably make mistakes or produce uncertain results. Design interfaces that gracefully handle
              these scenarios rather than hiding them from users. Display confidence scores and provide alternative
              suggestions when primary recommendations might be uncertain.
            </p>
          </div>
        </section>

        {/* Performance Optimization Section */}
        <section id="optimization" className="glass rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-cyan-500">06.</span> Performance
          </h2>
          <h3 className="text-lg text-cyan-400 mb-4 font-bold uppercase tracking-wider">
            Model Optimization
          </h3>
          <div className="bg-[#0a0a0a] border border-white/10 rounded-lg p-4 mb-8 overflow-x-auto shadow-inner">
            <TypewriterCode
              className="text-cyan-300/90 text-sm whitespace-pre-wrap break-words font-mono"
              code={`# STARK TensorRT Optimization Protocol
import tensorrt as trt
import pycuda.driver as cuda

def build_tensorrt_engine(onnx_file_path, engine_file_path):
    logger = trt.Logger(trt.Logger.WARNING)
    builder = trt.Builder(logger)
    config = builder.create_builder_config()
    config.max_workspace_size = 1 << 30  # 1GB STARK Limit
    
    network = builder.create_network(1 << int(trt.NetworkDefinitionCreationFlag.EXPLICIT_BATCH))
    parser = trt.OnnxParser(network, logger)
    
    with open(onnx_file_path, 'rb') as model:
        parser.parse(model.read())
    
    engine = builder.build_engine(network, config)
    with open(engine_file_path, "wb") as f:
        f.write(engine.serialize())`}
            />
          </div>
          <h3 className="text-lg text-cyan-400 mb-4 font-bold uppercase tracking-wider">
            Infrastructure Scaling
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-base font-bold text-white mb-2">Predictive Auto-scaling</h3>
              <p className="text-sm text-slate-400">
                Use time-series forecasting models to predict load and pre-scale infrastructure before traffic spikes.
                Combine reactive and predictive scaling for optimal resource utilization.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-base font-bold text-white mb-2">GPU Scheduling</h3>
              <p className="text-sm text-slate-400">
                Implement fractional GPU allocation for smaller models using NVIDIA MPS. For training workloads, implement
                gang scheduling to ensure all required resources are available simultaneously.
              </p>
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section id="security" className="glass rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-cyan-500">07.</span> Security Protocols
          </h2>
          <div className="bg-red-900/10 p-6 rounded-lg border border-red-500/20 mb-6">
            <p className="text-slate-300">
              AI-powered applications often process sensitive user data, making security a critical concern. Implement
              data encryption both in transit and at rest. Use secure authentication and authorization mechanisms to
              control access to AI features and underlying data.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-base font-bold text-white mb-2">Data Protection</h3>
              <p className="text-sm text-slate-400">
                Consider implementing differential privacy techniques to protect individual user data while still enabling
                model training and improvement. Anonymize or pseudonymize data whenever possible.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-base font-bold text-white mb-2">Model Security</h3>
              <p className="text-sm text-slate-400">
                Protect AI models from adversarial attacks and unauthorized access. Implement input validation and
                sanitization to prevent malicious inputs from compromising model behavior.
              </p>
            </div>
          </div>
        </section>

        {/* Testing Section */}
        <section id="testing" className="glass rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-cyan-500">08.</span> Testing & QA
          </h2>
          <h3 className="text-lg text-cyan-400 mb-4 font-bold uppercase tracking-wider">
            Model Testing Strategies
          </h3>
          <div className="bg-[#0a0a0a] border border-white/10 rounded-lg p-4 mb-6 overflow-x-auto shadow-inner">
            <TypewriterCode
              className="text-cyan-300/90 text-sm whitespace-pre-wrap break-words font-mono"
              code={`# STARK Metamorphic Testing for Image Classifier
import hypothesis.strategies as st
from hypothesis import given
import numpy as np

@given(st.lists(st.floats(min_value=0, max_value=1), min_size=784, max_size=784))
def test_brightness_invariance(image_pixels):
    original_image = np.array(image_pixels).reshape(28, 28, 1)
    bright_image = np.clip(original_image + 0.1, 0, 1)
    
    original_pred = model.predict(original_image[None, ...])
    bright_pred = model.predict(bright_image[None, ...])
    
    # STARK Protocol: Prediction should be stable under small brightness changes
    assert np.argmax(original_pred) == np.argmax(bright_pred)`}
            />
          </div>
          <div className="bg-blue-900/10 p-4 rounded-lg border border-blue-500/20">
            <p className="text-slate-300 text-sm">
              Implement statistical testing for model performance using techniques like permutation tests or bootstrap
              confidence intervals. Use cross-validation with stratified sampling to ensure robust performance estimates.
            </p>
          </div>
        </section>

        {/* Monitoring Section */}
        <section id="monitoring" className="glass rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-cyan-500">09.</span> Monitoring
          </h2>
          <h3 className="text-lg text-cyan-400 mb-4 font-bold uppercase tracking-wider">
            Performance Monitoring
          </h3>
          <div className="bg-[#0a0a0a] border border-white/10 rounded-lg p-4 mb-8 overflow-x-auto shadow-inner">
            <TypewriterCode
              className="text-cyan-300/90 text-sm whitespace-pre-wrap break-words font-mono"
              code={`# STARK OpenTelemetry Instrumentation for ML Pipeline
from opentelemetry import trace
from opentelemetry.exporter.jaeger.thrift import JaegerExporter

tracer = trace.get_tracer(__name__)

@tracer.start_as_current_span("stark_model_inference")
def model_predict(input_data):
    with tracer.start_as_current_span("stark_preprocessing"):
        processed_input = preprocess(input_data)
    
    with tracer.start_as_current_span("stark_prediction"):
        prediction = model.predict(processed_input)
    
    with tracer.start_as_current_span("stark_postprocessing"):
        result = postprocess(prediction)
    
    return result`}
            />
          </div>
          <h3 className="text-lg text-cyan-400 mb-4 font-bold uppercase tracking-wider">
            Model Drift Detection
          </h3>
          <div className="bg-purple-900/10 p-6 rounded-lg border border-purple-500/20 mb-6">
            <p className="text-slate-300">
              Implement statistical tests for detecting different types of drift: covariate shift, prior probability
              shift, and concept drift. Use techniques like Population Stability Index (PSI), Jensen-Shannon divergence,
              or Wasserstein distance for distribution comparison.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-base font-bold text-white mb-2">Online Learning</h3>
              <p className="text-sm text-slate-400">
                Implement online learning capabilities for models that can adapt to gradual drift using incremental
                learning with SGD or online ensemble methods.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-base font-bold text-white mb-2">Visualization Dashboards</h3>
              <p className="text-sm text-slate-400">
                Create drift visualization dashboards showing feature distributions over time, model performance trends,
                and drift detection alerts using PCA or t-SNE.
              </p>
            </div>
          </div>
        </section>

        {/* Future Considerations */}
        <section className="glass rounded-xl p-8 mb-12 border-t-4 border-t-cyan-500">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            Future Considerations
          </h2>
          <div className="prose prose-invert max-w-none text-slate-300">
            <p className="mb-4">
              Stay current with emerging MLOps practices and tools. Implement feature stores using solutions like Feast or
              Tecton for consistent feature engineering. Explore AutoML frameworks like H2O.ai for rapid prototyping and
              baseline establishment.
            </p>
            <p className="mt-2">
              Investigate emerging deployment patterns like multi-armed bandits for automatic A/B testing of model
              variants. Consider federated learning architectures for privacy-sensitive applications and prepare for
              foundation models with prompt engineering capabilities.
            </p>
            <div className="bg-cyan-900/20 p-6 rounded-lg border border-cyan-500/30 mt-8">
              <p className="font-mono text-sm text-cyan-300">
                <strong>STARK PROTOCOL FINAL NOTE:</strong> Building production-grade AI systems requires mastering both
                traditional software engineering practices and ML-specific challenges. Success depends on implementing
                robust monitoring, testing, and operational practices while maintaining flexibility for the rapidly
                evolving AI landscape.
              </p>
            </div>
          </div>
        </section>

        {/* Author Bio */}
        <div className="glass rounded-xl p-8 mt-12 border border-white/5">
          <h3 className="text-xl font-bold text-white mb-6 font-[Orbitron]">About the Author</h3>
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center text-black font-bold text-xl shadow-lg shrink-0">
              AP
            </div>
            <div>
              <p className="text-slate-400 leading-relaxed text-sm">
                <strong>Arghyadip</strong> is a passionate tech enthusiast, full-stack developer, and writer who loves
                exploring the latest innovations in software development and artificial intelligence. With a background in
                computer science and a knack for turning complex topics into digestible reads, Arghyadip shares insights,
                tutorials, and real-world tech stories to inspire learners and builders alike. When he's not coding or
                writing, you'll find him contributing to open-source projects or brainstorming futuristic tech ideas.
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="glass rounded-xl p-8 mt-8 border border-white/5 bg-gradient-to-r from-cyan-900/10 to-transparent">
          <div className="text-center">
            <div className="text-4xl mb-4">📬</div>
            <h3 className="text-xl font-bold text-white mb-3 font-[Orbitron]">Stay Updated</h3>
            <p className="text-slate-400 mb-6 max-w-xl mx-auto text-sm">
              Get the latest articles on smart cities, AI, and emerging technologies delivered straight to your inbox.
              Join our community of tech enthusiasts and urban planners.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-black/50 border border-white/10 rounded text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
              />
              <button
                type="submit"
                className="px-6 py-2 rounded text-black font-bold whitespace-nowrap bg-cyan-400 hover:bg-cyan-300 transition-colors"
              >
                Subscribe Now
              </button>
            </form>
            <p className="text-slate-500 text-xs mt-3">No spam, unsubscribe anytime</p>
          </div>
        </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-black/80 backdrop-blur-md border-t border-white/5 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center border border-cyan-500/50">
                  <span className="text-cyan-400 font-bold">A</span>
                </div>
                <h3 className="text-xl font-bold font-[Orbitron] text-white">ARGHYADIP.DEV</h3>
              </div>
              <p className="text-slate-400 mb-6 max-w-md text-sm">
                Exploring the intersection of technology, innovation, and human progress. Join me on a journey through the
                digital frontier where ideas become reality.
              </p>
              <div className="flex space-x-4">
                {/* Social Icons */}
                <a href="#" className="w-8 h-8 bg-white/5 hover:bg-cyan-500 hover:text-black rounded flex items-center justify-center text-slate-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                </a>
                <a href="#" className="w-8 h-8 bg-white/5 hover:bg-cyan-500 hover:text-black rounded flex items-center justify-center text-slate-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 font-[Orbitron]">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/articles" className="text-slate-400 hover:text-cyan-400 transition-colors">Articles</a></li>
                <li><a href="/#projects" className="text-slate-400 hover:text-cyan-400 transition-colors">Projects</a></li>
                <li><a href="/#about" className="text-slate-400 hover:text-cyan-400 transition-colors">About</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 font-[Orbitron]">Categories</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Smart Cities</a></li>
                <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">AI & Machine Learning</a></li>
                <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Web Development</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-500 text-xs">© 2025 ARGHYADIP.DEV. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 w-10 h-10 bg-cyan-500 hover:bg-cyan-400 text-black rounded shadow-lg transition-all duration-300 z-50 flex items-center justify-center ${
          showBackToTop ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

      {/* System Status Indicator */}
      <div
        style={{
          position: 'fixed',
          bottom: '20px',
          left: '20px',
          background: 'rgba(0, 0, 0, 0.8)',
          border: '1px solid rgba(0, 255, 213, 0.3)',
          padding: '8px 12px',
          fontFamily: "'JetBrains Mono', monospace",
          color: '#00ffd5',
          fontSize: '0.75rem',
          zIndex: 1000,
          letterSpacing: '1px'
        }}
      >
        <span className="w-2 h-2 inline-block bg-cyan-500 rounded-full mr-2 animate-pulse"></span>
        {systemStatus}
      </div>
    </div>
  );
}