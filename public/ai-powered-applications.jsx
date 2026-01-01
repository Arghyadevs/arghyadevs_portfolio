import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';

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
  const [systemStatus, setSystemStatus] = useState('ONLINE');
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
    const columns = Math.floor(width / fontSize);
    const drops = Array(columns).fill(1);
    const matrix = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*'.split('');

    const draw = () => {
      ctx.fillStyle = 'rgba(10, 20, 30, 0.15)';
      ctx.fillRect(0, 0, width, height);
      ctx.font = fontSize + 'px monospace';
      ctx.fillStyle = '#00fff7';
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
    };

    window.addEventListener('resize', handleResize);
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // System Status Updater
  useEffect(() => {
    const statuses = ['ONLINE', 'ANALYZING', 'PROCESSING', 'OPTIMIZING'];
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
    //console.log("Hello World"); 
    console.log("Assalamualaikum Lyari");
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
    <div className="roboto bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] min-h-screen text-[#e0e7ef] overflow-x-hidden leading-relaxed">
      <Head>
        <title>STARK Industries: AI-Powered Applications Guide</title>
        <meta name="description" content="Arghyadip's futuristic portfolio - Full Stack Developer & AI Explorer" />
        <meta name="keywords" content="Arghyadip, Portfolio, Full Stack Developer, AI, Projects, Resume" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/Arghyalogo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/Arghyalogo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/Arghyalogo.png" />
        {/* Tailwind CDN for immediate compatibility */}
        <script src="https://cdn.tailwindcss.com"></script>
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <style jsx global>{`
        body {
          font-family: 'Roboto', Arial, sans-serif;
        }
        .stark-logo {
          font-family: 'Orbitron', 'Roboto', Arial, sans-serif;
          font-weight: bold;
          background: linear-gradient(45deg, #dc143c, #ff4500, #dc143c);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 0 20px rgba(220, 20, 60, 0.5);
        }
        .glass {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(12px);
          border: 1.5px solid rgba(255, 255, 255, 0.18);
        }
        .orbitron {
          font-family: 'Orbitron', 'Roboto', Arial, sans-serif;
        }
        .roboto {
          font-family: 'Roboto', Arial, sans-serif;
        }
        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #0a0a0a;
        }
        ::-webkit-scrollbar-thumb {
          background: #dc143c;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #ff4500;
        }
      `}</style>

      {/* Progress Bar */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: `${scrollProgress}%`,
          height: '3px',
          background: 'linear-gradient(90deg, #dc2626, #fbbf24)',
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
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,rgba(74,144,226,0.2)_0%,transparent_70%)] animate-pulse"></div>
      </div>

      {/* Arc Reactor */}
      <div
        onClick={handleArcClick}
        className="hidden sm:flex fixed top-2 right-2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-blue-400 via-blue-700 to-blue-900 shadow-lg items-center justify-center animate-pulse z-50 cursor-pointer transition-transform duration-200"
      >
        <img src="icons/Arc.svg" alt="Arc Reactor" className="w-7 h-7 md:w-10 md:h-10" />
      </div>

      {/* Header */}
      <header className="header bg-gradient-to-r from-[#dc143c] to-[#4a90e2] text-white py-3 sm:py-8 text-center relative overflow-hidden z-10">
        <img src="portfolio logo.png" alt="Logo" className="mx-auto mb-1 h-7 sm:h-12" />
        <h1 className="stark-logo orbitron tracking-widest text-lg sm:text-4xl">STARK INDUSTRIES</h1>
        <div className="subtitle text-white text-xs sm:text-lg font-bold mt-1">
          AI-Powered Applications: Complete Technical Guide
        </div>
      </header>

      <div className="container max-w-4xl mx-auto py-2 px-2 sm:py-8 sm:px-4 relative z-10">
        {/* Navigation */}
        <nav className="nav relative mb-2 sm:mb-8">
          <button
            onClick={() => setIsNavOpen(!isNavOpen)}
            className="md:hidden absolute top-2 right-2 z-20 p-2 rounded bg-gradient-to-r from-blue-500 to-purple-600 text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div
            className={`nav-grid transition-all duration-300 md:grid md:static md:opacity-100 md:pointer-events-auto fixed top-0 left-0 w-full h-full bg-black/80 md:bg-transparent z-10 ${
              isNavOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
          >
            <div className="flex flex-col md:grid md:grid-cols-3 gap-0 md:gap-1 p-0 md:p-0 pt-16 md:pt-0">
              {[
                { id: 'understanding', label: 'AI Understanding' },
                { id: 'components', label: 'Core Components' },
                { id: 'deployment', label: 'Deployment' },
                { id: 'api', label: 'API Integration' },
                { id: 'interfaces', label: 'UI Intelligence' },
                { id: 'optimization', label: 'Performance' },
                { id: 'security', label: 'Security' },
                { id: 'testing', label: 'Testing' },
                { id: 'monitoring', label: 'Monitoring' },
              ].map((item) => (
                <div
                  key={item.id}
                  className="nav-item text-white text-base font-medium text-left py-2 px-3 border-b border-white/10 md:rounded-md md:bg-white/10 md:backdrop-blur-md md:border md:border-white/20 md:shadow-lg md:mx-2 md:my-1 md:text-base md:py-2 md:text-center md:hover:bg-white/20 md:border-b-0 cursor-pointer"
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </nav>

        {/* Understanding Section */}
        <section id="understanding" className="glass rounded-2xl p-4 sm:p-8 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-[Orbitron]">
            Understanding AI-Powered Applications
          </h2>
          <p className="text-gray-300 mb-4 text-sm sm:text-base">
            AI-powered applications represent a paradigm shift from deterministic software systems to probabilistic,
            learning-enabled architectures. Unlike traditional applications that execute predetermined logic flows, these
            systems leverage statistical models to make inferences, predictions, and decisions based on training data
            patterns.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 p-4 sm:p-6 rounded-xl border border-blue-500/30 hover:ring-2 hover:ring-pink-400 hover:shadow-xl transition-all">
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Hybrid Architectures</h3>
              <p className="text-gray-300 text-xs sm:text-sm">
                Modern AI applications implement hybrid architectures combining rule-based systems with machine learning
                components. This approach allows for deterministic behavior in critical paths while leveraging AI for
                enhancement and optimization.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 p-4 sm:p-6 rounded-xl border border-blue-500/30 hover:ring-2 hover:ring-pink-400 hover:shadow-xl transition-all">
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Critical Layers</h3>
              <p className="text-gray-300 text-xs sm:text-sm">
                Data ingestion, preprocessing pipelines, model training frameworks, inference engines, and feedback
                collection systems form the backbone of AI applications.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 p-4 sm:p-6 rounded-xl border border-blue-500/30 hover:ring-2 hover:ring-pink-400 hover:shadow-xl transition-all">
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Engineering Challenges</h3>
              <p className="text-gray-300 text-xs sm:text-sm">
                Scalability, latency optimization, accuracy maintenance, and system maintainability represent the core
                challenges in AI system architecture.
              </p>
            </div>
          </div>
        </section>

        {/* Core Components Section */}
        <section id="components" className="glass rounded-2xl p-4 sm:p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4 orbitron">Core Components of AI Integration</h2>
          <h3 className="text-xl text-pink-400 mb-2 border-l-4 border-pink-500 pl-4 font-semibold">
            Model Selection and Preparation
          </h3>
          <div className="bg-gradient-to-br from-blue-500/10 to-pink-500/10 p-4 rounded-lg border border-blue-400/30 mb-4">
            <p>
              Model selection requires deep understanding of both your data characteristics and computational constraints.
              For supervised learning tasks, consider the bias-variance tradeoff: ensemble methods like Random Forest or
              XGBoost often provide robust baselines with good interpretability.
            </p>
          </div>
          <div className="code-block bg-black/70 border border-blue-500 rounded-lg p-4 mb-4 overflow-x-auto whitespace-pre-wrap break-words">
            <TypewriterCode
              className="text-blue-200 text-xs whitespace-pre-wrap break-words"
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
          <h3 className="text-xl text-pink-400 mb-2 border-l-4 border-pink-500 pl-4 font-semibold">
            Architecture Design Patterns
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="tech-card bg-gradient-to-br from-blue-500/10 to-pink-500/10 p-4 rounded-lg border border-blue-400/30 hover:ring-2 hover:ring-pink-400 hover:shadow-xl transition-all">
              <h3 className="text-lg text-pink-400 font-bold mb-2">MLOps Pipeline Pattern</h3>
              <p>
                Implement ML Pipeline pattern using Kubeflow, MLflow, or Apache Airflow for orchestrating training
                workflows with version control for both code and data.
              </p>
            </div>
            <div className="tech-card bg-gradient-to-br from-blue-500/10 to-pink-500/10 p-4 rounded-lg border border-blue-400/30 hover:ring-2 hover:ring-pink-400 hover:shadow-xl transition-all">
              <h3 className="text-lg text-pink-400 font-bold mb-2">Lambda Architecture</h3>
              <p>
                Combines batch processing for model training with stream processing for real-time inference using Apache
                Kafka, Spark, and Flink.
              </p>
            </div>
            <div className="tech-card bg-gradient-to-br from-blue-500/10 to-pink-500/10 p-4 rounded-lg border border-blue-400/30 hover:ring-2 hover:ring-pink-400 hover:shadow-xl transition-all">
              <h3 className="text-lg text-pink-400 font-bold mb-2">Sidecar Pattern</h3>
              <p>
                Deploy models as separate containers alongside application services, enabling independent scaling and
                updates with service mesh technologies.
              </p>
            </div>
          </div>
        </section>

        {/* Deployment Section */}
        <section id="deployment" className="glass rounded-2xl p-4 sm:p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4 orbitron">Model Deployment Strategies</h2>
          <h3 className="text-xl text-pink-400 mb-2 border-l-4 border-pink-500 pl-4 font-semibold">
            Cloud-Based Deployment
          </h3>
          <div className="code-block bg-black/70 border border-blue-500 rounded-lg p-4 mb-4 overflow-x-auto whitespace-pre-wrap break-words">
            <TypewriterCode
              className="text-blue-200 text-xs whitespace-pre-wrap break-words"
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
          <h3 className="text-xl text-pink-400 mb-2 border-l-4 border-pink-500 pl-4 font-semibold">
            Edge Computing Considerations
          </h3>
          <div className="bg-gradient-to-br from-pink-500/10 to-blue-500/10 p-4 rounded-lg border border-pink-400/30 mb-4">
            <p>
              Edge deployment requires sophisticated model optimization techniques. Implement quantization using QAT or
              PTQ methods. INT8 quantization typically reduces model size by 4x with minimal accuracy loss (&lt; 1% for
              most vision models).
            </p>
          </div>
          <div className="code-block bg-black/70 border border-blue-500 rounded-lg p-4 mb-4 overflow-x-auto whitespace-pre-wrap break-words">
            <TypewriterCode
              className="text-blue-200 text-xs whitespace-pre-wrap break-words"
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
        <section id="api" className="glass rounded-2xl p-4 sm:p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4 orbitron">API Integration Patterns</h2>
          <h3 className="text-xl text-pink-400 mb-2 border-l-4 border-pink-500 pl-4 font-semibold">
            RESTful API Design
          </h3>
          <div className="code-block bg-black/70 border border-blue-500 rounded-lg p-4 mb-4 overflow-x-auto whitespace-pre-wrap break-words">
            <TypewriterCode
              className="text-blue-200 text-xs whitespace-pre-wrap break-words"
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
          <h3 className="text-xl text-pink-400 mb-2 border-l-4 border-pink-500 pl-4 font-semibold">
            Real-Time Integration
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="tech-card bg-gradient-to-br from-blue-500/10 to-pink-500/10 p-4 rounded-lg border border-blue-400/30 hover:ring-2 hover:ring-pink-400 hover:shadow-xl transition-all">
              <h3 className="text-lg text-pink-400 font-bold mb-2">Kafka Streaming</h3>
              <p>
                Implement streaming inference using Apache Kafka with schema registry for type safety. Use Kafka Streams
                for complex event processing and model chaining.
              </p>
            </div>
            <div className="tech-card bg-gradient-to-br from-blue-500/10 to-pink-500/10 p-4 rounded-lg border border-blue-400/30 hover:ring-2 hover:ring-pink-400 hover:shadow-xl transition-all">
              <h3 className="text-lg text-pink-400 font-bold mb-2">WebSocket Integration</h3>
              <p>
                For real-time ML, implement connection pooling and load balancing across multiple inference workers with
                Redis for session state management.
              </p>
            </div>
          </div>
        </section>

        {/* UI Intelligence Section */}
        <section id="interfaces" className="glass rounded-2xl p-4 sm:p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4 orbitron">Building Intelligent User Interfaces</h2>
          <div className="bg-gradient-to-br from-blue-500/10 to-pink-500/10 p-4 rounded-lg border border-blue-400/30 mb-4">
            <h3 className="text-xl text-pink-400 mb-2 border-l-4 border-pink-500 pl-4 font-semibold">
              Adaptive Design Principles
            </h3>
            <p>
              Intelligent user interfaces go beyond static layouts to create dynamic experiences that adapt to individual
              user preferences and behaviors. Implement progressive disclosure that reveals features based on user
              expertise levels and usage patterns.
            </p>
            <h3 className="text-xl text-pink-400 mb-2 border-l-4 border-pink-500 pl-4 font-semibold mt-4">
              Feedback Loops and Learning
            </h3>
            <p>
              Successful AI-powered applications implement continuous learning mechanisms. Collect user feedback through
              both explicit methods (ratings, reviews) and implicit signals (click-through rates, time spent, task
              completion).
            </p>
          </div>
          <div className="bg-gradient-to-br from-pink-500/10 to-blue-500/10 p-4 rounded-lg border border-pink-400/30 mb-4">
            <p>
              AI models inevitably make mistakes or produce uncertain results. Design interfaces that gracefully handle
              these scenarios rather than hiding them from users. Display confidence scores and provide alternative
              suggestions when primary recommendations might be uncertain.
            </p>
          </div>
        </section>

        {/* Performance Optimization Section */}
        <section id="optimization" className="glass rounded-2xl p-4 sm:p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4 orbitron">Performance Optimization Techniques</h2>
          <h3 className="text-xl text-pink-400 mb-2 border-l-4 border-pink-500 pl-4 font-semibold">
            Model Optimization
          </h3>
          <div className="code-block bg-black/70 border border-blue-500 rounded-lg p-4 mb-4 overflow-x-auto whitespace-pre-wrap break-words">
            <TypewriterCode
              className="text-blue-200 text-xs whitespace-pre-wrap break-words"
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
          <h3 className="text-xl text-pink-400 mb-2 border-l-4 border-pink-500 pl-4 font-semibold">
            Infrastructure Scaling
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="tech-card bg-gradient-to-br from-blue-500/10 to-pink-500/10 p-4 rounded-lg border border-blue-400/30 hover:ring-2 hover:ring-pink-400 hover:shadow-xl transition-all">
              <h3 className="text-lg text-pink-400 font-bold mb-2">Predictive Auto-scaling</h3>
              <p>
                Use time-series forecasting models to predict load and pre-scale infrastructure before traffic spikes.
                Combine reactive and predictive scaling for optimal resource utilization.
              </p>
            </div>
            <div className="tech-card bg-gradient-to-br from-blue-500/10 to-pink-500/10 p-4 rounded-lg border border-blue-400/30 hover:ring-2 hover:ring-pink-400 hover:shadow-xl transition-all">
              <h3 className="text-lg text-pink-400 font-bold mb-2">GPU Scheduling</h3>
              <p>
                Implement fractional GPU allocation for smaller models using NVIDIA MPS. For training workloads, implement
                gang scheduling to ensure all required resources are available simultaneously.
              </p>
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section id="security" className="glass rounded-2xl p-4 sm:p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4 orbitron">Security and Privacy Considerations</h2>
          <div className="bg-gradient-to-br from-pink-500/10 to-blue-500/10 p-4 rounded-lg border border-pink-400/30 mb-4">
            <p>
              AI-powered applications often process sensitive user data, making security a critical concern. Implement
              data encryption both in transit and at rest. Use secure authentication and authorization mechanisms to
              control access to AI features and underlying data.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="tech-card bg-gradient-to-br from-blue-500/10 to-pink-500/10 p-4 rounded-lg border border-blue-400/30 hover:ring-2 hover:ring-pink-400 hover:shadow-xl transition-all">
              <h3 className="text-lg text-pink-400 font-bold mb-2">Data Protection</h3>
              <p>
                Consider implementing differential privacy techniques to protect individual user data while still enabling
                model training and improvement. Anonymize or pseudonymize data whenever possible.
              </p>
            </div>
            <div className="tech-card bg-gradient-to-br from-blue-500/10 to-pink-500/10 p-4 rounded-lg border border-blue-400/30 hover:ring-2 hover:ring-pink-400 hover:shadow-xl transition-all">
              <h3 className="text-lg text-pink-400 font-bold mb-2">Model Security</h3>
              <p>
                Protect AI models from adversarial attacks and unauthorized access. Implement input validation and
                sanitization to prevent malicious inputs from compromising model behavior.
              </p>
            </div>
          </div>
        </section>

        {/* Testing Section */}
        <section id="testing" className="glass rounded-2xl p-4 sm:p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4 orbitron">Testing and Quality Assurance</h2>
          <h3 className="text-xl text-pink-400 mb-2 border-l-4 border-pink-500 pl-4 font-semibold">
            Model Testing Strategies
          </h3>
          <div className="code-block bg-black/70 border border-blue-500 rounded-lg p-4 mb-4 overflow-x-auto whitespace-pre-wrap break-words">
            <TypewriterCode
              className="text-blue-200 text-xs whitespace-pre-wrap break-words"
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
          <div className="bg-gradient-to-br from-blue-500/10 to-pink-500/10 p-4 rounded-lg border border-blue-400/30 mb-4">
            <p>
              Implement statistical testing for model performance using techniques like permutation tests or bootstrap
              confidence intervals. Use cross-validation with stratified sampling to ensure robust performance estimates.
            </p>
          </div>
        </section>

        {/* Monitoring Section */}
        <section id="monitoring" className="glass rounded-2xl p-4 sm:p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4 orbitron">Monitoring and Maintenance</h2>
          <h3 className="text-xl text-pink-400 mb-2 border-l-4 border-pink-500 pl-4 font-semibold">
            Performance Monitoring
          </h3>
          <div className="code-block bg-black/70 border border-blue-500 rounded-lg p-4 mb-4 overflow-x-auto whitespace-pre-wrap break-words">
            <TypewriterCode
              className="text-blue-200 text-xs whitespace-pre-wrap break-words"
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
          <h3 className="text-xl text-pink-400 mb-2 border-l-4 border-pink-500 pl-4 font-semibold">
            Model Drift Detection
          </h3>
          <div className="bg-gradient-to-br from-pink-500/10 to-blue-500/10 p-4 rounded-lg border border-pink-400/30 mb-4">
            <p>
              Implement statistical tests for detecting different types of drift: covariate shift, prior probability
              shift, and concept drift. Use techniques like Population Stability Index (PSI), Jensen-Shannon divergence,
              or Wasserstein distance for distribution comparison.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="tech-card bg-gradient-to-br from-blue-500/10 to-pink-500/10 p-4 rounded-lg border border-blue-400/30 hover:ring-2 hover:ring-pink-400 hover:shadow-xl transition-all">
              <h3 className="text-lg text-pink-400 font-bold mb-2">Online Learning</h3>
              <p>
                Implement online learning capabilities for models that can adapt to gradual drift using incremental
                learning with SGD or online ensemble methods.
              </p>
            </div>
            <div className="tech-card bg-gradient-to-br from-blue-500/10 to-pink-500/10 p-4 rounded-lg border border-blue-400/30 hover:ring-2 hover:ring-pink-400 hover:shadow-xl transition-all">
              <h3 className="text-lg text-pink-400 font-bold mb-2">Visualization Dashboards</h3>
              <p>
                Create drift visualization dashboards showing feature distributions over time, model performance trends,
                and drift detection alerts using PCA or t-SNE.
              </p>
            </div>
          </div>
        </section>

        {/* Future Considerations */}
        <section className="glass rounded-2xl p-4 sm:p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4 orbitron">Future Considerations - STARK Evolution</h2>
          <div className="bg-gradient-to-br from-blue-500/10 to-pink-500/10 p-4 rounded-lg border border-blue-400/30 mb-4">
            <p>
              Stay current with emerging MLOps practices and tools. Implement feature stores using solutions like Feast or
              Tecton for consistent feature engineering. Explore AutoML frameworks like H2O.ai for rapid prototyping and
              baseline establishment.
            </p>
            <p className="mt-2">
              Investigate emerging deployment patterns like multi-armed bandits for automatic A/B testing of model
              variants. Consider federated learning architectures for privacy-sensitive applications and prepare for
              foundation models with prompt engineering capabilities.
            </p>
            <div className="bg-gradient-to-br from-pink-500/10 to-blue-500/10 p-4 rounded-lg border border-pink-400/30 mt-4">
              <p>
                <strong>STARK PROTOCOL FINAL NOTE:</strong> Building production-grade AI systems requires mastering both
                traditional software engineering practices and ML-specific challenges. Success depends on implementing
                robust monitoring, testing, and operational practices while maintaining flexibility for the rapidly
                evolving AI landscape.
              </p>
            </div>
          </div>
        </section>

        {/* Author Bio */}
        <div className="article-container rounded-2xl p-8 mt-8 bg-gradient-to-br from-gray-800 to-gray-900">
          <h3 className="text-2xl font-bold text-white mb-4 font-[Orbitron]">About the Author</h3>
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-[#00ffd5] to-[#00bfa6] rounded-full flex items-center justify-center text-black font-bold text-xl shadow-lg">
              AP
            </div>
            <div>
              <p className="text-gray-300 leading-relaxed">
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
        <div className="article-container rounded-2xl p-8 mt-8 bg-gradient-to-r from-red-600/20 to-orange-600/20 border-red-500/30">
          <div className="text-center">
            <div className="text-4xl mb-4">📬</div>
            <h3 className="text-2xl font-bold text-white mb-4 font-[Orbitron]">Stay Updated with Tech Insights</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get the latest articles on smart cities, AI, and emerging technologies delivered straight to your inbox.
              Join our community of tech enthusiasts and urban planners.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
              />
              <button
                type="submit"
                className="web-button px-6 py-3 rounded-lg text-white font-medium whitespace-nowrap bg-red-600 hover:bg-red-700 transition-colors"
              >
                Subscribe Now
              </button>
            </form>
            <p className="text-gray-400 text-sm mt-3">No spam, unsubscribe anytime</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-slate-900/80 backdrop-blur-md mt-16 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-3xl">🕷️</div>
                <h3 className="text-2xl font-bold font-[Orbitron]">ARGHYADIP.DEV</h3>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Exploring the intersection of technology, innovation, and human progress. Join me on a journey through the
                digital frontier where ideas become reality.
              </p>
              <div className="flex space-x-4">
                {/* Social Icons */}
                <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-red-600 rounded-full flex items-center justify-center text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-blue-600 rounded-full flex items-center justify-center text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 font-[Orbitron]">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Articles</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Projects</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 font-[Orbitron]">Categories</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Smart Cities</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">AI & Machine Learning</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Web Development</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 ARGHYADIP.DEV. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 w-12 h-12 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-lg transition-all duration-300 z-50 ${
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
          background: 'rgba(0, 212, 255, 0.1)',
          border: '1px solid #00d4ff',
          borderRadius: '5px',
          padding: '10px 15px',
          fontFamily: "'Courier New', monospace",
          color: '#00d4ff',
          fontSize: '0.9rem',
          zIndex: 1000,
          backdropFilter: 'blur(10px)',
        }}
      >
        STARK AI STATUS: {systemStatus}
      </div>
    </div>
  );
}