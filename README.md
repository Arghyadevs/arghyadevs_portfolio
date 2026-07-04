# Arghyadip Pakhira — Professional Portfolio
A cinematic, HUD-style developer portfolio and conversational AI assistant console.

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Groq Cloud](https://img.shields.io/badge/Groq_Cloud-F58025?style=for-the-badge&logo=google-cloud&logoColor=white)](https://groq.com)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)

---

## Technical Overview

This application is a responsive, high-performance portfolio website built using **Vite**, **React**, **TypeScript**, and **Tailwind CSS**. It incorporates professional design patterns, dark-theme HUD aesthetics, and a live AI chat assistant connected directly to the Groq API.

---

## Core Features

### ✦ Spectra AI Chatbot
A fully interactive conversational panel located on the site.
* **Powered by Groq API:** Interfaces with the high-performance `llama-3.1-8b-instant` model for sub-second responses.
* **Speech Integration:** Supports microphone speech-to-text recognition and text-to-speech synthesized output.
* **Context-Aware:** Fed with a structured portfolio data system prompt to answer questions about projects, experience, and skills accurately.

### ✦ Visual Code Playground
When the chatbot returns code snippets, they are rendered inside custom code windows mimicking a modern editor:
* Three-dot console controls (Red / Yellow / Green).
* Language tag indicators.
* Live Copy-to-Clipboard action button that dynamically transitions to "COPIED" with a verification checkmark.

### ✦ Multi-State Profile Slideshow
Smoothly cycles through three visual assets using CSS-transition opacity fades every 3 seconds:
* Original profile portrait (`Arghyadip.jpg`).
* Alternate profile portrait (`Arghyadip_red.jpg`).
* Personal developer brand logo (`Arghyalogo.png`).

### ✦ Interactive Skills Matrix & HUD Timelines
* **Interactive Tabs:** Active tab category triggers animated slide-down animations for skill nodes.
* **Hover Radial Gradients:** Custom borders glow dynamically using modern CSS variables on hover.

---

## Development Setup

### Prerequisite: Set up the API Key
To enable the live AI chatbot locally, configure your environment variables:

1. Create a `.env.local` file in the root directory:
   ```env
   VITE_GROQ_API_KEY=your_groq_api_key_here
   ```
   *(Note: This file is ignored by git to secure your key).*

### Local Installation
1. Install project dependencies:
   ```bash
   npm install
   ```
2. Start the hot-reloading development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Formatting & Quality Checks
Validate and clean up the codebase using configured scripts:
```bash
# Run ESLint validation
npm run lint

# Format codebase with Prettier
npm run format
```

---

## Production Deployment & Vercel Configuration

To deploy the application to Vercel and ensure the AI chatbot works live:

1. Import your repository into **Vercel**.
2. Go to the project **Settings** -> **Environment Variables**.
3. Create a new variable:
   * **Key:** `VITE_GROQ_API_KEY`
   * **Value:** *[Your Groq API Key]*
4. Keep the target checked for all environments (Production, Preview, Development) and click **Save**.
5. Trigger a redeploy of the latest commit to bake the environment variable into the production build bundle.

---

## License
Created by Arghyadip Pakhira. All rights reserved.
