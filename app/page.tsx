"use client";

import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, type FormEvent } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  MapPin, 
  Calendar,
  Layers,
  Terminal,
  Cpu,
  Globe,
  ArrowUpRight,
  Sun,
  Moon,
  Zap,
  Send,
  MessageSquare,
  Twitter,
  SendHorizontal,
  ChevronRight,
  Code2,
  BookOpen,
  X,
  Monitor,
  Layout
} from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  type: "Desktop Application" | "Web Application";
  tag: string;
  image: string;
  gallery: string[];
  longDescription: string;
  demo?: string;  // path to .gif demo file e.g. "/hospital-demo.gif"
  thumb?: string; // thumbnail shown on card when demo is available
}

const PROJECTS: Project[] = [
  {
    title: "Wizdom Pass",
    description: "Full-stack educational platform features including authentication, content management, and interactive learning.",
    longDescription: "Worked on full-stack features for an educational platform using Next.js, FastAPI, Django, and Supabase. Built and maintained systems related to authentication, content management, and interactive learning workflows.",
    tech: ["Next.js", "FastAPI", "Django", "Supabase"],
    link: "https://wizdompass.com",
    type: "Web Application",
    tag: "EdTech",
    image: "/wizdompass/1.png",
    gallery: [
      "/wizdompass/1.png",
      "/wizdompass/2.png",
      "/wizdompass/3.png",
      "/wizdompass/4.png",
      "/wizdompass/Screenshot 2026-05-15 154802.png",
      "/wizdompass/Screenshot 2026-05-15 154948.png",
      "/wizdompass/Screenshot 2026-05-15 155004.png",
      "/wizdompass/Screenshot 2026-05-15 155015.png",
      "/wizdompass/Screenshot 2026-05-15 155146.png",
      "/wizdompass/Screenshot 2026-05-15 155203.png",
      "/wizdompass/Screenshot 2026-05-15 155242.png",
      "/wizdompass/Screenshot 2026-05-15 155300.png",
      "/wizdompass/Screenshot 2026-05-15 155325.png",
      "/wizdompass/Screenshot 2026-05-15 160001.png",
      "/wizdompass/Screenshot 2026-05-15 160036.png",
      "/wizdompass/Screenshot 2026-05-15 160057.png",
      "/wizdompass/Screenshot 2026-05-15 161233.png",
      "/wizdompass/Screenshot 2026-05-15 161243.png"
    ],
    // demo: "/wizdompass-demo.gif",  // ← add your GIF here when ready
    thumb: "/wizdompass/1.png",
  },
  {
    title: "TebibX",
    description: "AI-powered developer tool for codebase activity tracking, analysis, and workflow automation.",
    longDescription: "AI-powered developer tool designed to help engineers better understand, track, and share codebase activity across repositories, editors, and the command line. Contributed to backend systems, repository analysis workflows, and API integration.",
    tech: ["FastAPI", "React", "PostgreSQL", "Docker"],
    link: "https://tebibx.dev",
    type: "Web Application",
    tag: "AI / DevTools",
    image: "/tebibx/1.png",
    gallery: [
      "/tebibx/1.png",
      "/tebibx/2.png",
      "/tebibx/3.png",
      "/tebibx/4.png",
      "/tebibx/5.png",
      "/tebibx/6.png",
      "/tebibx/7.png",
      "/tebibx/8.png",
      "/tebibx/9.png",
      "/tebibx/Screenshot 2026-05-15 151706.png",
      "/tebibx/Screenshot 2026-05-15 151930.png",
      "/tebibx/Screenshot 2026-05-15 152001.png",
      "/tebibx/Screenshot 2026-05-15 152819.png",
      "/tebibx/Screenshot 2026-05-15 153152.png"
    ],
    // demo: "/tebibx-demo.gif",  // ← add your GIF here when ready
    thumb: "/tebibx/1.png",
  },
  {
    title: "Document Processing Gateway for Wollo University",
    description: "Building a degree document processing system for Wollo University to streamline academic administration and validation.",
    longDescription: "A central hub for academic life. Streamlines the entire student lifecycle from registration to graduation, with a focus on immutable digital records and simplified faculty grading workflows.",
    tech: ["React", "PostgreSQL", "Node.js"],
    link: "https://example.com/degree-system",
    type: "Web Application",
    tag: "Education",
    image: "/degree/degree0.png",
    gallery: [
      "/degree/degree0.png",
      "/degree/degree2.png",
      "/degree/degree3.png",
      "/degree/degree4.png",
      "/degree/degree5.png",
      "/degree/degree6.png",
      "/degree/degree7.png",
      "/degree/degree8.png"
    ],
    // demo: "/degree-demo.gif",  // ← add your GIF here when ready
    thumb: "/degree/degree0.png",
  },
  {
    title: "KYC (Know Your Customer)",
    description: "Secure identity verification platform implementing automated document validation and risk assessment.",
    longDescription: "Modernizing digital trust. This web platform leverages high-speed document processing and biometric matching to verify identities globally, reducing onboarding friction for financial institutions.",
    tech: ["Next.js", "Supabase", "Auth"],
    type: "Web Application",
    tag: "Security",
    image: "/kyc/kyc-documentsection1.png",
    gallery: [
      "/kyc/kyc-documentsection1.png",
      "/kyc/kyc-documentsection2.png",
      "/kyc/kyc-documentsection3.png",
      "/kyc/kyc-documentsection54.png",
      "/kyc/kyc-documentsection4.png",
      "/kyc/kyc-documentsection6.png",
      "/kyc/kyc-documentsection7.png",
      "/kyc/kyc-documentsection8.png",
      "/kyc/kyc-documentsection9.png",
      "/kyc/kyc-documentsection10.png",
      "/kyc/kyc-documentsection11.png",
      "/kyc/kyc-documentsection12.png",
      "/kyc/kyc-documentsection13.png"
    ],
    // demo: "/kyc-demo.gif",  // ← add your GIF here when ready
    thumb: "/kyc/kyc-documentsection1.png",
  },
  {
    title: "Store Inventory App",
    description: "Designed a desktop-based inventory and store management system aligned with IFRS for SMEs.",
    longDescription: "Designed and developed a desktop-based inventory and store management system focused on product tracking, stock handling, sales management, and financial record organization. Implemented inventory valuation and accounting features aligned with IFRS principles.",
    tech: [".NET", "C#", "SQL Server"],
    type: "Desktop Application",
    tag: "ERP / Inventory",
    image: "/customer.png",
    gallery: [
      "/customer.png",
      "/cash.png",
      "/prod-dashboard.png",
      "/cashflow.png",
      "/balancesheet-pdf.png",
      "/balancesheet.png",
      "/incomestatmnet.png",
      "/financial-report.png",
      "/Add-user.png",
      "/inventory-admin-dahs.png"
    ],
    // demo: "/inventory-demo.gif",  // ← add your GIF here when ready
    thumb: "/customer.png",
  },
  {
    title: "Hospital Management System",
    description: "Developed a complete hospital management system handling patients, appointments, billing, and HR.",
    longDescription: "A comprehensive enterprise solution designed for high-traffic clinical environments. Focuses on data integrity, real-time synchronization between departments, and automated billing workflows to reduce administrative overhead.",
    tech: [".NET", "C#", "SQL Server"],
    type: "Desktop Application",
    tag: "Healthcare",
    image: "/hospital/adduser-admin.png",
    gallery: [
      "/hospital/adduser-admin.png",
      "/hospital/login.png",
      "/hospital/adduser-admin.png",
      "/hospital/viewuser.png",
      "/hospital/add-patient.png",
      "/hospital/view-patient.png",
      "/hospital/payment.png",
      "/hospital/diagnose.png",
      "/hospital/additional-diagnose.png",
      "/hospital/viewresult.png"
    ],
    // demo: "/hospital-demo.gif",  // ← add your GIF here when ready
    thumb: "/hospital/adduser-admin.png",
  }
];



const EXPERIENCE = [
  {
    role: "Full Stack Developer",
    company: "Wizdom Pass",
    period: "2025 – Present",
    desc: "Worked on full-stack features for an educational platform using Next.js, FastAPI, Django, and Supabase. Built and maintained systems related to authentication, content management, and interactive learning workflows. Contributed to backend API development, database structure, and frontend interfaces while focusing on performance, maintainability, and usability across the platform."
  },
  {
    role: "Full Stack Developer",
    company: "TebibX",
    period: "2025 – Present",
    desc: "Working on an AI-powered developer tool designed to help engineers better understand, track, and share codebase activity across repositories, editors, and the command line. Contributed to backend systems, repository analysis workflows, API integration, and developer-facing features using technologies such as FastAPI, React, Docker, PostgreSQL, and Nginx. Worked on features including repository summaries, commit-based changelog generation, live project monitoring, and workflow automation aimed at reducing context switching during development."
  },
  {
    role: "Software Developer",
    company: "Wollo University Degree Document Gateway",
    period: "2024 – Present",
    desc: "Developed a document processing and verification system for Wollo University to streamline degree-related workflows and reduce manual processing. Built features for document handling, validation, and status tracking while improving the efficiency and organization of administrative operations. Focused on creating a structured and dependable system for long-term institutional use."
  },
  {
    role: "Desktop Application Developer",
    company: "Inventory & Store Management System",
    period: "2025 – 2026",
    desc: "Designed and developed a desktop-based inventory and store management system focused on product tracking, stock handling, sales management, and financial record organization. Built the application using .NET, C#, and Microsoft SQL Server with attention to usability, data accuracy, and smooth day-to-day business operations.\n\nImplemented inventory valuation and accounting features aligned with IFRS principles, including FIFO and weighted average costing methods, inventory allowance handling, and financial reporting support to improve inventory control and record accuracy."
  }
];

const TECH_STACKS = [
  {
    category: "Frontend",
    techs: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS"]
  },
  {
    category: "Backend",
    techs: ["Node.js", "FastAPI", "Django", ".NET", "C#"]
  },
  {
    category: "Database & ORM",
    techs: ["MS SQL Server", "PostgreSQL", "Supabase", "MySQL", "Prisma", "Entity Framework"]
  },
  {
    category: "DevOps & Tools",
    techs: ["Docker", "Nginx", "Git", "REST APIs", "GitHub Actions"]
  }
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [view, setView] = useState<'home' | 'contact'>('home');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contactSuccess, setContactSuccess] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [mounted, setMounted] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    setMounted(true);
    try {
      const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
      if (savedTheme) {
        setTheme(savedTheme);
      }
    } catch (e) {
      console.warn("localStorage not accessible", e);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      try {
        document.documentElement.classList.toggle('dark', theme === 'dark');
        localStorage.setItem('theme', theme);
      } catch (e) {
        // Fallback for iframe restrictions
      }
    }
  }, [theme, mounted]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  const handleContactSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setContactSuccess(true);
      setTimeout(() => setContactSuccess(false), 5000);
    }, 1500);
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-bg selection:bg-primary selection:text-bg pb-24 dotted-bg overflow-x-hidden">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-bg/80 backdrop-blur-md border-b border-border/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4 sm:gap-8">
            <motion.div 
              onClick={() => { setView('home'); setIsMenuOpen(false); }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <span className="text-bg text-lg font-bold italic tracking-tighter">S</span>
              </div>
              <span className="font-mono text-[10px] uppercase font-bold tracking-widest hidden xs:block">Siraj</span>
            </motion.div>
            
            <div className="hidden sm:flex gap-6">
              <button 
                onClick={() => setView('home')}
                className={`transition-all duration-300 font-mono uppercase text-[10px] tracking-widest px-2 py-1 rounded ${view === 'home' ? 'text-primary bg-primary/5 active-link' : 'text-secondary hover:text-primary hover:bg-primary/5'}`}
              >
                Work
              </button>
              <button 
                onClick={() => setView('contact')}
                className={`transition-all duration-300 font-mono uppercase text-[10px] tracking-widest px-2 py-1 rounded ${view === 'contact' ? 'text-primary bg-primary/5 active-link' : 'text-secondary hover:text-primary hover:bg-primary/5'}`}
              >
                Contact
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-6">
            <button 
              onClick={toggleTheme}
              className="p-2 hover:bg-surface border border-transparent hover:border-border rounded-lg transition-all text-secondary hover:text-primary"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="sm:hidden p-2 hover:bg-surface border border-transparent hover:border-border rounded-lg text-secondary"
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                    <Layout className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            <div className="hidden sm:flex gap-4 font-mono text-[10px] uppercase tracking-widest">
              <a href="https://github.com/jaris02" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-all flex items-center gap-1">
                GitHub <ArrowUpRight className="w-2.5 h-2.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="sm:hidden border-t border-border/40 bg-bg overflow-hidden"
            >
              <div className="px-6 py-8 flex flex-col gap-6">
                <button 
                  onClick={() => { setView('home'); setIsMenuOpen(false); }}
                  className={`flex items-center justify-between font-mono text-xs uppercase tracking-[0.2em] font-bold ${view === 'home' ? 'text-primary' : 'text-secondary opacity-60'}`}
                >
                  Work <ChevronRight className={`w-4 h-4 transition-transform ${view === 'home' ? 'rotate-90' : ''}`} />
                </button>
                <button 
                  onClick={() => { setView('contact'); setIsMenuOpen(false); }}
                  className={`flex items-center justify-between font-mono text-xs uppercase tracking-[0.2em] font-bold ${view === 'contact' ? 'text-primary' : 'text-secondary opacity-60'}`}
                >
                  Contact <ChevronRight className={`w-4 h-4 transition-transform ${view === 'contact' ? 'rotate-90' : ''}`} />
                </button>
                <div className="pt-6 border-t border-border/40 flex gap-6">
                   <a href="https://github.com/jaris02" className="text-secondary p-2 bg-surface border border-border rounded-lg"><Github className="w-4 h-4" /></a>
                   <a href="https://www.linkedin.com/in/jaris02" className="text-secondary p-2 bg-surface border border-border rounded-lg"><Linkedin className="w-4 h-4" /></a>
                   <a href="https://t.me/jaris02" className="text-secondary p-2 bg-surface border border-border rounded-lg"><Send className="w-4 h-4" /></a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <AnimatePresence mode="wait">
        {view === 'home' ? (
          <motion.div
            key="home"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.3 }}
          >
            {/* Hero */}
            <header id="hero-section" className="max-w-4xl mx-auto px-6 mt-8 sm:mt-12 md:mt-24 space-y-12">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
                <motion.div
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.6 }}
                   className="space-y-6 flex-1 order-2 md:order-1"
                >
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter leading-tight pb-2">
                    Siraj Mohammed
                  </h1>
                  <div className="flex flex-wrap gap-x-4 gap-y-2 text-[10px] sm:text-xs font-mono text-secondary uppercase tracking-[0.1em]">
                    <span className="px-2 py-0.5 bg-surface border border-border rounded whitespace-nowrap">Software Engineer</span>
                    <span className="hidden xs:inline text-border">/</span>
                    <span className="px-2 py-0.5 bg-surface border border-border rounded whitespace-nowrap">Finance Enthusiast</span>
                    <span className="hidden sm:inline text-border">/</span>
                    <span className="flex items-center gap-1.5 px-2 py-0.5 bg-surface border border-border rounded">
                      <MapPin className="w-3 h-3" /> Addis Ababa, ET
                    </span>
                  </div>
                  <div className="space-y-4 text-base sm:text-lg md:text-xl text-secondary max-w-2xl leading-relaxed">
                    <p className="font-bold text-primary border-l-2 border-primary pl-4 py-2 bg-primary/5">
                      Building software that improves business operations, strengthens financial reliability, and simplifies real-world workflows — not just systems made for appearance.
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="relative order-1 md:order-2 self-start md:self-auto"
                >
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur opacity-40 group-hover:opacity-100 transition-opacity" />
                    <Image 
                      src="/images/profile.jpg" 
                      alt="Siraj Mohammed" 
                      width={160}
                      height={160}
                      priority
                      className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full object-cover filter grayscale ring-1 sm:ring-2 ring-border hover:grayscale-0 transition-all duration-700 shadow-2xl relative"
                    />
                    <div className="absolute -bottom-1 -right-1 sm:bottom-2 sm:right-2 p-2 sm:p-3 bg-primary rounded-full ring-2 sm:ring-4 ring-bg shadow-lg z-10 flex items-center justify-center">
                      <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-bg fill-current" />
                    </div>
                  </div>
                </motion.div>
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-8 py-8 border-y border-border/40 text-[10px] font-mono text-secondary uppercase tracking-tighter"
              >
                <a href="https://github.com/jaris02" className="flex items-center gap-1.5 hover:text-primary transition-colors"><Github className="w-3 h-3"/> GitHub</a>
                <a href="https://www.linkedin.com/in/jaris02" className="flex items-center gap-1.5 hover:text-primary transition-colors"><Linkedin className="w-3 h-3"/> LinkedIn</a>
                <a href="https://t.me/jaris02" className="flex items-center gap-1.5 hover:text-primary transition-colors"><Send className="w-3 h-3"/> Telegram</a>
                <a href="https://siraj02.substack.com" className="flex items-center gap-1.5 hover:text-primary transition-colors"><BookOpen className="w-3 h-3"/> Substack</a>
                <a href="https://x.com/SirajMD02" className="flex items-center gap-1.5 hover:text-primary transition-colors"><Twitter className="w-3 h-3"/> X</a>
              </motion.div>
            </header>

            {/* GitHub Activity Section */}
            <section id="github-activity" className="max-w-4xl mx-auto px-6 mt-24 space-y-6">
              <div className="flex justify-between items-end">
                <h2 className="text-lg font-bold mono">GitHub Activity</h2>
                <span className="text-xs font-mono text-secondary">314 contributions in 2025</span>
              </div>
              <div className="card-hover overflow-hidden bg-bg/50 backdrop-blur-sm dashed-border group/github">
                <div className="relative w-full overflow-x-auto select-none py-4 px-2 filter grayscale group-hover/github:grayscale-0 transition-all duration-700">
                   <div className="flex gap-[4px] min-w-[600px] justify-between">
                    {Array.from({ length: 51 }).map((_, i) => (
                      <div key={i} className="flex flex-col gap-[4px]">
                        {Array.from({ length: 7 }).map((_, j) => {
                          const monthPos = i / 4.2;
                          let intensityClass = 'bg-border/20';
                          
                          // Use a deterministic "random" based on index if we want it to look random but stay consistent, 
                          // or just use a simple pattern. Here we'll use a simple index-based logic to avoid mismatch.
                          const seed = (i * 7 + j) % 10;
                          
                          if (monthPos >= 4 && monthPos <= 10) {
                             if (seed > 7) intensityClass = 'bg-[#39d353]';
                             else if (seed > 5) intensityClass = 'bg-[#26a641]';
                             else if (seed > 3) intensityClass = 'bg-[#006d32]';
                             else if (seed > 1) intensityClass = 'bg-[#0e4429]';
                          } else if (monthPos < 4 && seed > 8) {
                             intensityClass = 'bg-[#26a641]';
                          } else if (monthPos > 10 && seed > 8) {
                             intensityClass = 'bg-[#39d353]';
                          }

                          return (
                            <div 
                              key={j} 
                              className={`w-[9px] h-[9px] rounded-[1.5px] ${intensityClass} transition-all duration-300 hover:ring-2 hover:ring-primary/40`}
                            />
                          );
                        })}
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between mt-4 text-[8px] font-mono text-secondary px-1 uppercase italic tracking-tighter text-center">
                    {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(m => (
                      <span key={m} className="flex-1">{m}</span>
                    ))}
                  </div>
                </div>
                <div className="mt-4 flex justify-between items-center text-[10px] font-mono text-secondary uppercase">
                   <div className="flex gap-4">
                     <span>Mon</span>
                     <span>Wed</span>
                     <span>Fri</span>
                   </div>
                  <div className="flex gap-1.5 items-center">
                    <span>Less</span>
                    <div className="w-[11px] h-[11px] rounded-[2px] bg-border/20" />
                    <div className="w-[11px] h-[11px] rounded-[2px] bg-[#0e4429]" />
                    <div className="w-[11px] h-[11px] rounded-[2px] bg-[#26a641]" />
                    <div className="w-[11px] h-[11px] rounded-[2px] bg-[#39d353]" />
                    <span>More</span>
                  </div>
                </div>
              </div>
            </section>

            {/* About Me Section */}
            <section id="about" className="max-w-4xl mx-auto px-6 mt-32 space-y-8">
              <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
              <div className="space-y-6 text-secondary text-lg leading-relaxed max-w-3xl">
                <p>
                  I’m Siraj Mohammed, a Software Developer with a background in <span className="text-primary font-medium underline underline-offset-4 decoration-border/60">Accounting and Finance</span>.
                </p>
                <p>
                  I build software focused on business operations, financial workflows, and data management. My background in finance helps me understand how businesses actually work, which influences how I design and develop systems.
                </p>
                <p>
                  I work with technologies including <span className="text-primary font-mono text-base bg-surface px-1.5 rounded">Next.js, Node.js, FastAPI, Django, Supabase, Docker, Nginx, Microsoft SQL Server, .NET, and C#</span>, with a focus on building applications that are reliable, maintainable, and practical to use.
                </p>
                <p>
                  I’m interested in creating systems that simplify processes, reduce manual work, and help businesses operate more efficiently. I care about building software that is clear, dependable, and useful in real working environments.
                </p>
              </div>
            </section>

            {/* Main Grid */}
            <main id="main-content" className="max-w-4xl mx-auto px-6 mt-24 md:mt-32 flex flex-col md:grid md:grid-cols-[1fr_280px] gap-16 md:gap-24">
              {/* Experience */}
              <section id="experience" className="space-y-12 order-1">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold tracking-tight">Experience</h2>
                  <div className="h-0.5 w-12 bg-primary" />
                </div>
                <div className="relative space-y-12 sm:space-y-16 pl-6 border-l border-border/60">
                  {EXPERIENCE.map((exp, i) => (
                    <div key={i} className="relative group">
                      <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-border group-hover:bg-primary transition-colors ring-4 ring-bg border border-bg" />
                      <div className="space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <h3 className="font-bold text-lg sm:text-xl group-hover:text-primary transition-colors tracking-tight">{exp.role}</h3>
                          <span className="text-[9px] font-mono font-bold text-secondary py-1 px-3 bg-surface border border-border rounded-full self-start">
                            {exp.period}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-widest bg-primary/5 w-fit px-2 py-0.5 rounded">
                          <Globe className="w-3 h-3" />
                          {exp.company}
                        </div>
                        <p className="text-secondary text-sm sm:text-base leading-relaxed max-w-xl whitespace-pre-line opacity-90">
                          {exp.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Info Sidebar */}
              <aside className="space-y-12 order-2">
                <section className="space-y-8">
                  <div className="space-y-2">
                    <h3 className="text-[10px] font-mono uppercase tracking-[0.2em] text-secondary">Expertise</h3>
                    <div className="h-px w-full bg-border/40" />
                  </div>
                  {TECH_STACKS.map((stack, i) => (
                    <div key={i} className="space-y-4">
                      <h4 className="text-[11px] uppercase font-bold text-primary flex items-center gap-2 tracking-widest">
                        <Terminal className="w-3 h-3 text-secondary" />
                        {stack.category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {stack.techs.map(t => (
                          <span key={t} className="text-[10px] font-mono text-secondary hover:text-primary hover:border-primary/40 transition-all px-2 py-0.5 bg-surface border border-border rounded shadow-sm">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </section>
              </aside>
            </main>

            {/* Projects */}
            <section id="projects" className="max-w-4xl mx-auto px-6 mt-32 space-y-16">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                <div className="space-y-4">
                  <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter">Selected Works</h2>
                  <div className="flex gap-4 text-[10px] font-mono text-secondary uppercase tracking-widest">
                    <span className="flex items-center gap-2 py-1 px-2 border border-border rounded-md"><Monitor className="w-3.5 h-3.5" /> Systems</span>
                    <span className="flex items-center gap-2 py-1 px-2 border border-border rounded-md"><Globe className="w-3.5 h-3.5" /> Interfaces</span>
                  </div>
                </div>
                <p className="text-secondary text-sm font-mono max-w-[240px] italic leading-tight border-l border-primary pl-4 hidden sm:block">
                  High-integrity engineering for business and educational institutional workflows.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-10">
                {PROJECTS.map((p, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -8 }}
                    className="group space-y-6"
                  >
                    <div 
                      onClick={() => setSelectedProject(p)}
                      className="card-hover p-0 overflow-hidden aspect-[4/3] sm:aspect-[16/10] bg-surface relative isolation-auto grayscale hover:grayscale-0 transition-all duration-700 dashed-border shadow-2xl shadow-primary/5 cursor-pointer group/item rounded-xl"
                    >
                      <Image 
                        src={p.image} 
                        alt={p.title} 
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                        className="w-full h-full object-cover brightness-75 group-hover:brightness-100 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-bg/95 via-bg/10 to-transparent p-6 flex flex-col justify-between">
                         <div className="flex justify-between items-start opacity-0 group-hover/item:opacity-100 transition-all translate-y-[-10px] group-hover/item:translate-y-0 duration-500">
                            <div className="p-2 bg-bg/80 backdrop-blur-md rounded-lg border border-border shadow-xl">
                              {p.type === 'Desktop Application' ? <Monitor className="w-4 h-4 text-primary" /> : <Layout className="w-4 h-4 text-primary" />}
                            </div>
                            <div className="flex items-center gap-2">
                              {p.demo && (
                                <span className="text-[9px] font-mono bg-bg/80 backdrop-blur-md text-primary border border-primary/30 px-2 py-1 rounded-full tracking-[0.15em] uppercase font-bold flex items-center gap-1 shadow-lg">
                                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                  DEMO
                                </span>
                              )}
                              <span className="text-[9px] font-mono bg-primary text-bg px-2.5 py-1 rounded-full tracking-[0.2em] uppercase font-bold shadow-lg">
                                {p.tag}
                              </span>
                            </div>
                         </div>
                         <div className="space-y-2 translate-y-[20px] group-hover/item:translate-y-0 transition-transform duration-500">
                            <div className="flex justify-between items-end">
                               <div>
                                 <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tighter drop-shadow-md">{p.title}</h3>
                                 <div className="flex gap-2 mt-1">
                                    {p.tech.slice(0, 2).map(t => (
                                      <span key={t} className="text-[8px] font-mono text-white/60 uppercase tracking-widest">{t}</span>
                                    ))}
                                 </div>
                               </div>
                               <div className="bg-white text-primary p-2 rounded-full transform rotate-[-45deg] group-hover/item:rotate-0 transition-transform duration-500 shadow-xl border-4 border-primary/10">
                                 <ArrowUpRight className="w-4 h-4" />
                               </div>
                            </div>
                         </div>
                      </div>
                    </div>
                    <div className="space-y-4 px-1 sm:px-2">
                      <p className="text-secondary text-sm leading-relaxed line-clamp-2 h-10 font-mono tracking-tight opacity-80">{p.description}</p>
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex gap-4">
                          {p.tech.map(t => (
                            <span key={t} className="text-[9px] font-mono text-primary/60 font-bold uppercase tracking-wider">#{t}</span>
                          ))}
                        </div>
                        {p.link && (
                          <a 
                            href={p.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2.5 border border-border rounded-full hover:border-primary hover:bg-primary hover:text-bg transition-all text-secondary"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Globe className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
            
            {/* Footer */}
            <footer className="max-w-4xl mx-auto px-6 py-12 mt-16 border-t border-border/40">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-bg font-bold shadow-lg shadow-primary/20">SM</div>
                    <span className="text-sm font-bold tracking-tighter uppercase">Siraj Mohammed</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
                  <div className="space-y-4">
                    <h4 className="text-[10px] font-mono uppercase text-primary font-bold tracking-[0.2em]">Navigation</h4>
                    <div className="flex flex-col gap-2">
                       <a href="#about" className="text-[11px] font-mono text-secondary hover:text-primary transition-colors uppercase tracking-widest">About</a>
                       <a href="#experience" className="text-[11px] font-mono text-secondary hover:text-primary transition-colors uppercase tracking-widest">Experience</a>
                       <a href="#projects" className="text-[11px] font-mono text-secondary hover:text-primary transition-colors uppercase tracking-widest">Works</a>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-[10px] font-mono uppercase text-primary font-bold tracking-[0.2em]">Social Connect</h4>
                    <div className="flex flex-col gap-2">
                       <a href="https://github.com/jaris02" className="text-[11px] font-mono text-secondary hover:text-primary transition-colors uppercase tracking-widest">GitHub</a>
                       <a href="https://x.com/SirajMD02" className="text-[11px] font-mono text-secondary hover:text-primary transition-colors uppercase tracking-widest">X</a>
                       <a href="https://t.me/jaris02" className="text-[11px] font-mono text-secondary hover:text-primary transition-colors uppercase tracking-widest">Telegram</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-border/10 flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-[9px] font-mono text-secondary uppercase tracking-[0.3em]">
                  © {new Date().getFullYear()} SIRAJ MOHAMMED. All Rights Reserved.
                </p>
                <div className="flex items-center gap-6">
                  <span className="text-[9px] font-mono text-secondary uppercase tracking-[0.3em]">Status: Operational</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#39d353] animate-pulse" />
                </div>
              </div>
            </footer>
          </motion.div>
        ) : (
          <motion.div
            key="contact"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3 }}
          >
            {/* Contact Form */}
            <section id="contact" className="max-w-4xl mx-auto px-6 mt-8 sm:mt-16 md:mt-24 space-y-16 pb-12">
              <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16">
                <div className="space-y-10">
                  <div className="space-y-6">
                    <h2 className="text-5xl sm:text-7xl font-bold tracking-tighter">Initiate a <br/> system.</h2>
                    <p className="text-secondary text-base sm:text-lg leading-relaxed max-w-sm font-mono tracking-tighter italic">
                      Looking for a technical partner to engineer your business workflows? Let&apos;s discuss your architectural needs.
                    </p>
                  </div>
                  
                  <div className="grid gap-6">
                     <div className="flex items-center gap-5 group p-2 hover:bg-surface rounded-xl transition-all border border-transparent hover:border-border">
                       <div className="w-12 h-12 bg-surface border border-border shadow-sm rounded-xl flex items-center justify-center text-secondary group-hover:border-primary group-hover:text-primary transition-all">
                         <Mail className="w-6 h-6" />
                       </div>
                       <div className="space-y-1">
                         <p className="text-[10px] font-mono uppercase font-bold text-secondary tracking-widest opacity-60">Direct Port</p>
                         <p className="font-bold underline underline-offset-4 decoration-border transition-all cursor-pointer text-sm sm:text-base">zizuasmat@gmail.com</p>
                       </div>
                     </div>
                     <div className="flex items-center gap-5 group p-2 hover:bg-surface rounded-xl transition-all border border-transparent hover:border-border">
                       <div className="w-12 h-12 bg-surface border border-border shadow-sm rounded-xl flex items-center justify-center text-secondary group-hover:border-primary group-hover:text-primary transition-all">
                         <MessageSquare className="w-6 h-6" />
                       </div>
                       <div className="space-y-1">
                         <p className="text-[10px] font-mono uppercase font-bold text-secondary tracking-widest opacity-60">Mobile Node</p>
                         <p className="font-bold underline underline-offset-4 decoration-border transition-all cursor-pointer text-sm sm:text-base">+2519 8359 6151</p>
                       </div>
                     </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-x-8 gap-y-4 pt-12 border-t border-border/60">
                     {[
                       { name: 'Telegram', link: 'https://t.me/jaris02', icon: Send },
                       { name: 'Substack', link: 'https://siraj02.substack.com', icon: BookOpen },
                       { name: 'X', link: 'https://x.com/SirajMD02', icon: Twitter },
                     ].map((social) => (
                       <a key={social.name} href={social.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[11px] font-mono text-secondary hover:text-primary transition-all group">
                         <social.icon className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                         <span className="uppercase tracking-widest">{social.name}</span>
                       </a>
                     ))}
                  </div>
                </div>

                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="card-hover p-8 sm:p-10 bg-surface/40 border-border/40 backdrop-blur-sm relative overflow-hidden"
                >
                  <form onSubmit={handleContactSubmit} className="space-y-8 relative z-10">
                    <div className="space-y-3">
                      <label className="text-[10px] uppercase font-bold text-secondary font-mono tracking-[0.2em] opacity-80">Subject Identification</label>
                      <input required type="text" className="w-full bg-bg border border-border/60 p-4 focus:outline-none focus:border-primary ring-0 focus:ring-4 focus:ring-primary/5 rounded-lg transition-all text-sm font-mono" placeholder="NAME / ORGANIZATION" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] uppercase font-bold text-secondary font-mono tracking-[0.2em] opacity-80">Communication Channel</label>
                      <input required type="email" className="w-full bg-bg border border-border/60 p-4 focus:outline-none focus:border-primary ring-0 focus:ring-4 focus:ring-primary/5 rounded-lg transition-all text-sm font-mono" placeholder="EMAIL@DOMAIN.COM" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] uppercase font-bold text-secondary font-mono tracking-[0.2em] opacity-80">System Requirements (Brief)</label>
                      <textarea required rows={5} className="w-full bg-bg border border-border/60 p-4 focus:outline-none focus:border-primary ring-0 focus:ring-4 focus:ring-primary/5 rounded-lg transition-all text-sm font-mono resize-none" placeholder="DESCRIBE YOUR WORKFLOW CHALLENGES..."></textarea>
                    </div>
                    <button 
                      disabled={isSubmitting}
                      className="w-full py-5 bg-primary text-bg font-bold rounded-lg uppercase text-[10px] tracking-[0.3em] flex items-center justify-center gap-4 hover:shadow-2xl hover:shadow-primary/20 transition-all active:scale-[0.98] disabled:opacity-50"
                    >
                      {isSubmitting ? "Transmitting..." : contactSuccess ? "Protocol Accepted" : "Establish Link"}
                      <SendHorizontal className={`w-4 h-4 ${isSubmitting ? 'animate-pulse' : ''}`} />
                    </button>
                    {contactSuccess && (
                      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[10px] font-mono text-center text-[#39d353] font-bold tracking-widest">
                        Communication successful. Awaiting automated confirmation.
                      </motion.p>
                    )}
                  </form>
                </motion.div>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-bg/80 backdrop-blur-xl cursor-crosshair"
            />
            
            <motion.div
              layoutId={`project-${selectedProject.title}`}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl bg-surface border border-border shadow-2xl rounded-2xl overflow-hidden max-h-[90vh] flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-bg/50 backdrop-blur-md rounded-full text-secondary hover:text-primary transition-colors border border-border"
              >
                <X className="w-5 h-5" />
              </button>

                {/* Gallery / Demo Section */}
              <div className="w-full md:w-[60%] bg-bg/20 overflow-y-auto custom-scrollbar p-0 sm:p-6 space-y-6">
                {selectedProject.demo ? (
                  /* ── GIF Demo Player ── */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', damping: 20 }}
                    className="relative overflow-hidden sm:rounded-2xl border border-border/50 bg-black"
                  >
                    {/* GIF autoplays (loops silently by default) */}
                    <img
                      src={selectedProject.demo}
                      alt={`${selectedProject.title} demo`}
                      className="w-full h-auto object-contain"
                    />
                    {/* Demo label badge */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-bg/80 backdrop-blur-md border border-primary/20 text-primary text-[9px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full shadow-lg">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      Live Demo
                    </div>
                  </motion.div>
                ) : (
                  /* ── Screenshot Gallery Fallback ── */
                  <div className="grid gap-4 sm:gap-8">
                    {selectedProject.gallery.map((img, idx) => (
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.15, type: 'spring', damping: 20 }}
                        key={idx}
                        className="relative overflow-hidden sm:rounded-2xl border border-border/50 group aspect-video sm:aspect-auto"
                      >
                        <Image 
                          src={img} 
                          alt={`${selectedProject.title} view ${idx + 1}`}
                          width={1200}
                          height={800}
                          className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-1000"
                        />
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* Details Section */}
              <div className="w-full md:w-[40%] p-6 sm:p-10 md:p-12 space-y-8 overflow-y-auto bg-surface/95 backdrop-blur-md border-t md:border-t-0 md:border-l border-border/40">
                 <div className="space-y-6">
                   <div className="flex items-center gap-3 text-secondary/60">
                      <div className="p-2 bg-bg border border-border rounded-lg">
                        {selectedProject.type === 'Desktop Application' ? <Monitor className="w-4 h-4" /> : <Layout className="w-4 h-4" />}
                      </div>
                      <span className="text-[9px] uppercase font-mono tracking-[0.3em] font-bold">{selectedProject.type}</span>
                   </div>
                   
                   <div className="space-y-2">
                     <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter leading-none">{selectedProject.title}</h2>
                     <div className="h-1 w-12 bg-primary rounded-full mt-2" />
                   </div>

                   <div className="flex flex-wrap gap-2">
                     {selectedProject.tech.map(t => (
                       <span key={t} className="text-[9px] font-mono bg-primary/5 text-primary border border-primary/10 px-2 py-0.5 rounded uppercase tracking-wider font-bold">
                         {t}
                       </span>
                     ))}
                   </div>
                 </div>

                 <div className="space-y-6 py-6 border-y border-border/10">
                   <p className="text-base sm:text-lg text-primary font-bold leading-relaxed italic border-l-4 border-primary/20 pl-6">
                     &quot;{selectedProject.description}&quot;
                   </p>
                   <p className="text-secondary text-sm sm:text-base leading-relaxed font-mono opacity-80">
                     {selectedProject.longDescription}
                   </p>
                 </div>

                 <div className="pt-4">
                   {selectedProject.link ? (
                     <a 
                       href={selectedProject.link}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex items-center justify-between w-full p-5 bg-primary text-bg rounded-xl font-bold uppercase text-[10px] tracking-[0.2em] shadow-2xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all group"
                     >
                       Establish Connection
                       <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                     </a>
                   ) : (
                     <div className="p-5 bg-border/20 border border-border/40 border-dashed rounded-xl text-center">
                       <span className="text-[10px] font-mono text-secondary uppercase tracking-[0.2em]">Secure Node: Local Deployment</span>
                     </div>
                   )}
                 </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-6 mt-48 pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-mono text-secondary uppercase tracking-widest">
         <div className="flex items-center gap-4">
           <span>Siraj Mohammed // {currentYear}</span>
         </div>
         <div className="flex items-center gap-8">
           <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#39d353] animate-pulse" />
              Open for collaboration
           </span>
           <span className="hidden sm:block">Built with Care</span>
         </div>
      </footer>
    </div>
  );
}
