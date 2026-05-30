import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { stats } from '../data/projects';
import TextReveal from '../components/TextReveal';
import useTypewriter from '../hooks/useTypewriter';
import Magnetic from '../components/Magnetic';

const ROLES = [
  'Full Stack Developer',
  'Data Annotation Specialist',
  'ML Team Coordinator',
  'Game Developer (C + Raylib)',
  'Hackathon Builder',
  'MCA Student @ Chetan BS',
];

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 80]);
  const typedRole = useTypewriter(ROLES, 80, 50, 2200);

  return (
    <section ref={ref} id="hero" className="relative min-h-[85vh] flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none"
           style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #f97316 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black z-0 pointer-events-none" />

      <motion.div style={{ opacity, y }} className="relative z-10 max-w-5xl mx-auto px-6 text-center w-full">

        {/* Open to Work Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-flex items-center gap-2.5 px-5 py-2.5 mb-10 rounded-full border border-green-500/30 bg-green-500/8 backdrop-blur-sm"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400"></span>
          </span>
          <span className="text-green-400 text-xs font-black uppercase tracking-[0.2em]">Open to Opportunities</span>
        </motion.div>

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.34, 1.56, 0.64, 1] }}
          className="relative inline-block mb-10"
        >
          <div className="absolute inset-0 rounded-full bg-orange-500/30 blur-3xl animate-pulse pointer-events-none" />
          <div className="relative p-1 rounded-full bg-gradient-to-tr from-orange-500 to-purple-600 shadow-2xl">
            <img
              src="/images/hero-avatar.jpg"
              alt="Sameer Sangam"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-black object-cover object-top shadow-inner"
              onError={(e) => {
                e.target.src = 'https://ui-avatars.com/api/?name=SS&background=1a0800&color=f97316&size=256&bold=true';
              }}
            />
          </div>
        </motion.div>

        {/* Name */}
        <div className="mb-4">
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white">
            Sameer <span className="text-orange-500">Sangam</span>
          </h1>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-white/40 text-base md:text-lg font-medium mb-3 max-w-xl mx-auto leading-relaxed"
        >
          Full Stack Developer · Data Annotation Specialist · Building real things from scratch
        </motion.p>

        {/* Typewriter Role */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-orange-400 text-sm font-bold tracking-widest uppercase mb-10 h-5"
        >
          {typedRole}<span style={{ animation: 'blink 1s step-end infinite' }}>|</span>
        </motion.p>

        {/* Social Icons Row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          {/* GitHub */}
          <a
            href="https://github.com/samyy009"
            target="_blank"
            rel="noopener noreferrer"
            id="hero-github-link"
            className="group w-11 h-11 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-orange-500/40 flex items-center justify-center transition-all hover:scale-110"
            aria-label="GitHub Profile"
          >
            <svg className="w-5 h-5 text-white/50 group-hover:text-orange-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/sameersangam/"
            target="_blank"
            rel="noopener noreferrer"
            id="hero-linkedin-link"
            className="group w-11 h-11 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-blue-500/40 flex items-center justify-center transition-all hover:scale-110"
            aria-label="LinkedIn Profile"
          >
            <svg className="w-5 h-5 text-white/50 group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>

          {/* Email */}
          <a
            href="mailto:sameersangam66@gmail.com"
            id="hero-email-link"
            className="group w-11 h-11 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-orange-500/40 flex items-center justify-center transition-all hover:scale-110"
            aria-label="Send Email"
          >
            <svg className="w-5 h-5 text-white/50 group-hover:text-orange-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </a>
        </motion.div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
          <a
            href="#projects"
            id="hero-view-showcase-btn"
            className="px-10 py-5 border border-white/10 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white text-xs font-black rounded-2xl transition-all tracking-[0.2em] uppercase backdrop-blur-md hover:scale-105 active:scale-95"
          >
            View Showcase
          </a>

          <a
            href="/resume.pdf"
            download="Sameer_Sangam_Resume.pdf"
            id="hero-resume-download-btn"
            className="group flex items-center gap-3 px-10 py-5 bg-orange-500 hover:bg-orange-400 text-black text-xs font-black rounded-2xl transition-all tracking-[0.2em] uppercase hover:scale-105 active:scale-95 shadow-lg shadow-orange-500/30"
          >
            <svg className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
            </svg>
            Download Resume
          </a>
        </div>

      </motion.div>

      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-orange-500/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 -right-40 w-[500px] h-[500px] bg-orange-500/4 blur-[180px] rounded-full pointer-events-none" />

      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </section>
  );
};

export default Hero;
