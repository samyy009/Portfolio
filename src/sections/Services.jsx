import { motion } from 'framer-motion';
import TextReveal from '../components/TextReveal';

const SERVICES = [
  {
    title: "Full Stack Development",
    desc: "Building scalable web applications using React, Node.js, and modern databases with a focus on performance and SEO.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    title: "Data Annotation & ML",
    desc: "High-precision data labeling for AI models, specializing in image segmentation, bounding boxes, and audio/video classification.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    )
  },
  {
    title: "Game Development",
    desc: "Crafting lightweight, high-performance 2D games using C and Raylib, focusing on logic, physics, and optimized rendering.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 011-1h1a2 2 0 100-4H7a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    )
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }} 
          className="mb-16"
        >
          <p className="text-orange-400 text-xs font-black uppercase tracking-[0.2em] mb-3">Expertise</p>
          <TextReveal text="What I Offer" className="text-4xl md:text-6xl font-black text-white mb-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-orange-500/30 transition-all duration-500 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-400 mb-6 group-hover:scale-110 group-hover:bg-orange-500/20 transition-all">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors">{s.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />
    </section>
  );
};

export default Services;
