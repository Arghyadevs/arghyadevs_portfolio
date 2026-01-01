// AI Service for Portfolio Chatbot
import OpenAI from 'openai';

// Portfolio context data
const PORTFOLIO_CONTEXT = {
  name: "Arghyadip Pakhira",
  title: "Full Stack Developer & AI Enthusiast",
  location: "Kolkata, West Bengal, India",
  email: "arghyadip.info@gmail.com",
  phone: "+91 9732740816",
  
  skills: {
    frontend: ["React.js", "JavaScript", "TypeScript", "HTML5", "Tailwind CSS"],
    backend: ["Node.js", "Express.js", "MongoDB", "MySQL"],
    ai: ["Python", "TensorFlow", "scikit-learn", "YOLOv8"],
    devops: ["Git", "Docker", "GitHub Actions"],
    tools: ["VS Code", "Postman"]
  },
  
  projects: [
    {
      name: "SmartFlow.ai",
      description: "Smart system using real-time data and predictive analytics for optimizing city traffic",
      tech: ["React", "Node.js", "AI/ML", "Real-time Analytics"],
      liveUrl: "https://smar-flow.vercel.app/",
      githubUrl: "https://github.com/Arghyadevs/SmartFlow"
    },
    {
      name: "SentinelX",
      description: "Real-time surveillance system using YOLOv8 for threat detection and tracking",
      tech: ["YOLOv8", "Computer Vision", "Real-time Processing"],
      liveUrl: "https://sentinel-x-ashen.vercel.app/",
      githubUrl: "https://github.com/Arghyadevs/SentinelX"
    },
    {
      name: "NextStep.AI",
      description: "Machine Learning-based career path prediction tool",
      tech: ["Python", "Machine Learning", "Predictive Analytics"],
      liveUrl: "https://nextstep-ai.vercel.app/",
      githubUrl: "https://github.com/Arghyadevs/Nextstep.AI"
    },
    {
      name: "SurakshaNet",
      description: "Real-time disaster alert system using OpenWeather API and geolocation",
      tech: ["OpenWeather API", "Geolocation", "Twilio", "Real-time Alerts"],
      liveUrl: "https://suraksha-net-beta.vercel.app/",
      githubUrl: "https://github.com/Arghyadevs/SurakshaNet"
    },
    {
      name: "VITANOVA",
      description: "Futuristic healthcare management system with telemedicine capabilities",
      tech: ["Healthcare", "Telemedicine", "Predictive Analytics"],
      liveUrl: "https://vita-nova.vercel.app/",
      githubUrl: "https://github.com/Arghyadevs/VITA_NOVA"
    },
    {
      name: "AttendaFace",
      description: "Face recognition attendance system using OpenCV",
      tech: ["Python", "OpenCV", "Face Recognition", "GUI"],
      githubUrl: "https://github.com/Arghyadevs/AttendaFace"
    }
  ],
  
  experience: [
    {
      role: "Campus Lead TMSL",
      company: "GeeksforGeeks",
      period: "Dec 2024 - Dec 2025",
      description: "Leading GFG chapter at TMSL, organizing contests and workshops"
    },
    {
      role: "Sponsorship & Management Team",
      company: "Geekonix",
      period: "Oct 2024 - Present",
      description: "Managing sponsorships and organizing tech events"
    },
    {
      role: "Open Source Contributor",
      company: "GSSoC",
      period: "Oct 2024 - Nov 2024",
      description: "Contributed to multiple open source projects"
    },
    {
      role: "Ninja Leader",
      company: "Coding Ninjas",
      period: "Nov 2023 - Aug 2024",
      description: "Mentored aspiring developers and organized coding bootcamps"
    },
    {
      role: "B.Tech CSE Student",
      company: "Techno Main Saltlake",
      period: "2023 - 2027",
      description: "Pursuing Computer Science & Engineering"
    }
  ],
  
  education: {
    college: "Techno Main Saltlake",
    degree: "B.Tech Computer Science & Engineering",
    period: "2023 - 2027"
  },
  
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/arghyadip-pakhira",
    github: "https://github.com/Arghyadevs",
    instagram: "https://www.instagram.com/arghya_dip7",
    twitter: "https://twitter.com/Arghya_dip7",
    facebook: "https://www.facebook.com/arghya.dip.07"
  }
};

// Create OpenAI client (will be initialized with API key)
let openai: OpenAI | null = null;

export const initializeAI = (apiKey: string) => {
  openai = new OpenAI({
    apiKey: apiKey,
    dangerouslyAllowBrowser: true // Only for demo purposes
  });
};

export const isAIInitialized = () => openai !== null;

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export const generateAIResponse = async (
  messages: ChatMessage[],
  userMessage: string
): Promise<string> => {
  if (!openai) {
    // Fallback to enhanced rule-based responses if AI is not available
    return generateEnhancedResponse(userMessage);
  }

  try {
    const systemPrompt = createSystemPrompt();
    const conversationHistory = messages.map(msg => ({
      role: msg.role as 'user' | 'assistant',
      content: msg.content
    }));

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: systemPrompt },
        ...conversationHistory,
        { role: "user", content: userMessage }
      ],
      max_tokens: 500,
      temperature: 0.7,
      presence_penalty: 0.1,
      frequency_penalty: 0.1
    });

    return completion.choices[0]?.message?.content || generateEnhancedResponse(userMessage);
  } catch (error) {
    console.error('AI API Error:', error);
    return generateEnhancedResponse(userMessage);
  }
};

const createSystemPrompt = (): string => {
  return `You are Spectra, an AI assistant for ${PORTFOLIO_CONTEXT.name}'s portfolio website. You are helpful, knowledgeable, and professional.

About Arghyadip:
- Full Stack Developer & AI Enthusiast from Kolkata, India
- Currently pursuing B.Tech CSE at Techno Main Saltlake (2023-2027)
- Expertise in React, Node.js, Python, AI/ML, and full-stack development
- Built multiple AI-powered projects including SmartFlow.ai, SentinelX, NextStep.AI

Key Projects:
${PORTFOLIO_CONTEXT.projects.map(p => 
  `- ${p.name}: ${p.description} (Tech: ${p.tech.join(', ')})`
).join('\n')}

Experience:
${PORTFOLIO_CONTEXT.experience.map(e => 
  `- ${e.role} at ${e.company} (${e.period}): ${e.description}`
).join('\n')}

Contact: ${PORTFOLIO_CONTEXT.email}, ${PORTFOLIO_CONTEXT.phone}
Social: LinkedIn, GitHub, Instagram, Twitter, Facebook

Guidelines:
1. Be conversational but professional
2. Provide specific information about Arghyadip's projects and skills
3. Suggest relevant projects when users ask about specific technologies
4. Help with technical questions related to his expertise areas
5. Always encourage visitors to connect via LinkedIn or email
6. If asked about availability for projects, mention he's open to collaborations
7. Keep responses concise but informative (under 200 words)
8. Never make up information not provided above`;
};

const generateEnhancedResponse = (userMessage: string): string => {
  const message = userMessage.toLowerCase();
  
  // Greeting responses
  if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
    const greetings = [
      `Hello! I'm Spectra, Arghyadip's AI assistant. I'd be happy to tell you about his impressive projects in AI and full-stack development. What would you like to know?`,
      `Hi there! Welcome to Arghyadip's portfolio. I can help you learn about his expertise in React, Node.js, AI/ML, and his projects like SmartFlow.ai and SentinelX. How can I assist you?`,
      `Hey! I'm here to help you explore Arghyadip's work. Whether you're interested in his AI projects, full-stack development skills, or want to collaborate, just let me know!`
    ];
    return greetings[Math.floor(Math.random() * greetings.length)];
  }

  // Projects
  if (message.includes('project') || message.includes('work') || message.includes('build')) {
    return `Arghyadip has built several impressive AI-powered projects:

🚀 **SmartFlow.ai** - Traffic optimization using real-time data and predictive analytics
🛡️ **SentinelX** - Real-time surveillance with YOLOv8 for threat detection  
🎯 **NextStep.AI** - ML-based career path prediction tool
⚡ **SurakshaNet** - Real-time disaster alert system
🏥 **VITANOVA** - Healthcare management with telemedicine
📹 **AttendaFace** - Face recognition attendance system

Each project showcases his expertise in React, Node.js, Python, and AI/ML. Would you like details about any specific project?`;
  }

  // Skills
  if (message.includes('skill') || message.includes('tech') || message.includes('stack') || message.includes('expert')) {
    return `Arghyadip's technical expertise includes:

**Frontend**: React.js, JavaScript, TypeScript, HTML5, Tailwind CSS
**Backend**: Node.js, Express.js, MongoDB, MySQL  
**AI/ML**: Python, TensorFlow, scikit-learn, YOLOv8
**DevOps**: Git, Docker, GitHub Actions
**Tools**: VS Code, Postman

He's particularly strong in full-stack development and AI integration, having built multiple production-ready applications. His projects demonstrate expertise in real-time systems, computer vision, and predictive analytics.`;
  }

  // AI/ML Experience
  if (message.includes('ai') || message.includes('machine learning') || message.includes('ml') || message.includes('artificial intelligence')) {
    return `Arghyadip has extensive experience in AI/ML:

🧠 **Computer Vision**: Implemented YOLOv8 in SentinelX for real-time threat detection
📊 **Predictive Analytics**: Built SmartFlow.ai for traffic optimization and NextStep.AI for career prediction
🔬 **Deep Learning**: Experience with TensorFlow and neural networks
🛠️ **Tools**: Python, scikit-learn, TensorFlow, YOLOv8

His AI projects process real-time data and achieve impressive results. He's passionate about applying AI to solve real-world problems in traffic management, healthcare, and security systems.`;
  }

  // Contact
  if (message.includes('contact') || message.includes('hire') || message.includes('email') || message.includes('reach') || message.includes('collaborat')) {
    return `You can reach Arghyadip for collaborations, projects, or discussions:

📧 **Email**: ${PORTFOLIO_CONTEXT.email}
📱 **Phone**: ${PORTFOLIO_CONTEXT.phone}
💼 **LinkedIn**: ${PORTFOLIO_CONTEXT.socialLinks.linkedin}
🔗 **GitHub**: ${PORTFOLIO_CONTEXT.socialLinks.github}

He's always open to interesting collaborations, freelance projects, and discussing innovative AI solutions. Feel free to reach out - he typically responds within 24 hours!`;
  }

  // Education
  if (message.includes('education') || message.includes('study') || message.includes('college') || message.includes('university')) {
    return `Arghyadip's educational background:

🎓 **Current**: B.Tech Computer Science & Engineering
🏫 **College**: Techno Main Saltlake (2023-2027)
📍 **Location**: Kolkata, West Bengal, India

**Additional Experience**:
- Campus Lead at GeeksforGeeks TMSL (Dec 2024 - Dec 2025)
- Sponsorship & Management Team at Geekonix
- Open Source Contributor at GSSoC 2024
- Ninja Leader at Coding Ninjas (Nov 2023 - Aug 2024)

He's passionate about continuous learning and sharing knowledge with the developer community.`;
  }

  // Availability
  if (message.includes('available') || message.includes('freelance') || message.includes('job') || message.includes('opportunity')) {
    return `Arghyadip is currently:

✅ Available for collaborations and freelance projects
✅ Open to discussing innovative AI solutions
✅ Interested in full-stack development opportunities
✅ Active in open source contributions

He's particularly interested in projects involving:
- AI/ML integration
- Real-time data processing
- Full-stack web applications
- Computer vision applications
- Smart city solutions

Feel free to reach out via email or LinkedIn to discuss potential opportunities!`;
  }

  // Technology specific questions
  if (message.includes('react') || message.includes('javascript') || message.includes('frontend')) {
    return `Arghyadip has strong frontend development skills:

⚛️ **React.js**: Expert level, built multiple production apps
📱 **JavaScript/TypeScript**: Proficient in modern ES6+ features
🎨 **UI/UX**: Skilled in Tailwind CSS and responsive design
🔧 **Tools**: VS Code, modern development workflows

His frontend projects showcase clean, responsive designs with smooth animations and optimal performance. He's experienced in building scalable React applications with state management and API integration.`;
  }

  if (message.includes('node') || message.includes('backend') || message.includes('server')) {
    return `Arghyadip's backend expertise includes:

🟢 **Node.js**: Strong proficiency in server-side JavaScript
🚀 **Express.js**: RESTful API development and middleware
🗄️ **Databases**: MongoDB and MySQL experience
🔐 **Security**: Authentication, authorization, and data protection

He builds robust, scalable backend systems with proper error handling, validation, and performance optimization. His APIs handle real-time data processing and integrate seamlessly with frontend applications.`;
  }

  if (message.includes('python') || message.includes('ml') || message.includes('ai')) {
    return `Arghyadip's Python and AI expertise:

🐍 **Python**: Strong programming skills for AI/ML
🧠 **TensorFlow**: Deep learning model development
📊 **scikit-learn**: Traditional ML algorithms
🎯 **YOLOv8**: Computer vision and object detection

His Python projects demonstrate practical AI applications, from predictive analytics to real-time computer vision systems. He's skilled in data preprocessing, model training, and deployment.`;
  }

  // Default response
  const defaultResponses = [
    `I'm here to help you learn about Arghyadip's impressive work in AI and full-stack development! You can ask me about his projects, skills, experience, or how to get in touch. What interests you most?`,
    `I'd be happy to tell you about Arghyadip's expertise in React, Node.js, AI/ML, and his innovative projects like SmartFlow.ai and SentinelX. What specific aspect would you like to know more about?`,
    `Feel free to ask me about Arghyadip's technical skills, project portfolio, educational background, or collaboration opportunities. How can I assist you today?`
  ];
  
  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
};
