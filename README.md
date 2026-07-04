<p align="center">
  <img src="https://raw.githubusercontent.com/Arghyadevs/arghyadevs_portfolio/main/public/assets/readme-banner.svg" width="100%" alt="Cyber HUD Banner" />
</p>

# Arghyadip Pakhira — Cybernetic Portfolio
A cinematic, HUD-style personal developer terminal and conversational AI companion console.

<p align="center">
  <a href="https://react.dev"><img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&amp;logo=react&amp;logoColor=61DAFB" alt="React" /></a>
  <a href="https://www.typescriptlang.org"><img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&amp;logo=typescript&amp;logoColor=white" alt="TypeScript" /></a>
  <a href="https://vitejs.dev"><img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&amp;logo=vite&amp;logoColor=white" alt="Vite" /></a>
  <a href="https://tailwindcss.com"><img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&amp;logo=tailwind-css&amp;logoColor=white" alt="Tailwind CSS" /></a>
  <a href="https://groq.com"><img src="https://img.shields.io/badge/Groq_Cloud-F58025?style=for-the-badge&amp;logo=google-cloud&amp;logoColor=white" alt="Groq Cloud" /></a>
  <a href="https://vercel.com"><img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&amp;logo=vercel&amp;logoColor=white" alt="Vercel" /></a>
</p>

---

## ✦ System Architecture
This application is designed as a responsive, high-framerate dashboard mimicking movie-grade HUD (Heads-Up Display) environments. Built with modern web standards, it integrates smooth parallax, custom Canvas graphics, responsive grids, and API client pipelines.

```
[User Browser]
      │
      ├─► [Vite / React App] ──► Canvas Particle Cursors & AOS Animations
      │
      └─► [OpenAI SDK Adapter] (Vite-mode routing)
                │
                └─► [Groq Cloud Endpoint] ──► (Llama 3.1 8B Instant)
```

---

## ✦ Advanced Core Modules

### 1. Spectra AI Chatbot (Groq Engine)
A cybernetic dialogue unit styled as concentric rotating vector portals:
* **LLM Model:** Powered by the ultra-low latency `llama-3.1-8b-instant` model on Groq.
* **Context-Inject System:** Features an automated dynamic system prompt compiling projects, experience, and links in real-time.
* **Inline Code Sandbox:** Intercepts markdown code blocks and compiles them into a custom terminal view with simulated window chrome controls (🔴 🟡 🟢) and custom copy handles.
* **Microphone & Speech Synthesizer:** Direct Web Speech API links for voice control.

### 2. Multi-Portrait Slider
Fades alternate image elements inside a neon-bordered viewport every 3000ms:
* **Assets:** Cycles original portrait (`Arghyadip.jpg`), custom red shirt portrait (`Arghyadip_red.jpg`), and custom logo (`Arghyalogo.png`).
* **Hardware Accelerated:** Uses CSS keyframe animations and opacity masking for high-performance layout painting.

### 3. Glow Matrix Grid
Hover nodes on the skills directory bind mouse positions dynamically:
* Binds theme color tokens to inline React styles.
* Triggers dynamic category switching with active animation key triggers.

---

## ✦ Installation & Local Startup

### 1. Setup Local Environment Variables
Before running the server, configure your credentials:
```bash
# Create local environment config
touch .env.local

# Add your key inside .env.local
VITE_GROQ_API_KEY=gsk_your_groq_api_key_here
```

### 2. Setup Commands
Execute the terminal sequence to initialize dependencies and fire up Vite's server:
```bash
# Install dependencies
npm install

# Run hot-reloading development server
npm run dev

# Format and check quality
npm run format
npm run lint
```

---

## ✦ Production Deployment on Vercel

Ensure your hosted client has active credentials to communicate with Groq:

1. Import this repository into your **Vercel** workspace.
2. Go to **Settings** -> **Environment Variables**.
3. Create a new environment variable:
   * **Key:** `VITE_GROQ_API_KEY`
   * **Value:** `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`
4. Deploy the main branch. Vercel will bundle the configurations automatically during the production build.

---

## ✦ Developer Context
* **Author:** Arghyadip Pakhira
* **Email:** arghyadip.info@gmail.com
* **Host Port:** `http://localhost:5173`
* **Secure Node ID:** `616_NODE_SECURE`
