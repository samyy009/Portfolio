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

        <div className="mb-8">
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white">
            Sameer <span className="text-orange-500">Sangam</span>
          </h1>
        </div>


        <div className="flex flex-wrap items-center justify-center gap-6 mb-20">
          <a href="#projects"
            className="px-10 py-5 border border-white/10 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white text-xs font-black rounded-2xl transition-all tracking-[0.2em] uppercase backdrop-blur-md hover:scale-105 active:scale-95">
            View Showcase
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
