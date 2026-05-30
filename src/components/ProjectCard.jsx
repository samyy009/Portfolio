import { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from './Modal';
import ParallaxImage from './ParallaxImage';
import Tilt from './Tilt';

const ProjectCard = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="py-10 md:py-16 border-b border-white/5 last:border-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left: Text Content */}
          <div>
            {/* Category Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mb-4 inline-block"
            >
              <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border border-white/10 ${project.category === 'Full Stack' ? 'bg-blue-500/10 text-blue-400' :
                  project.category === 'ML/Data' ? 'bg-purple-500/10 text-purple-400' :
                    project.category === 'Game Dev' ? 'bg-green-500/10 text-green-400' :
                      'bg-orange-500/10 text-orange-400'
                }`}>
                {project.category}
              </span>
            </motion.div>

            {/* Bracket title like < ProjectName > */}
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-black text-white mb-3 flex items-center gap-3 tracking-tighter"
            >
              {project.title}
            </motion.h3>

            {/* Italic green tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-orange-400 italic text-lg font-semibold mb-6 opacity-80"
            >
              {project.tagline}
            </motion.p>

            {/* Project Metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-3 gap-4 mb-8 p-4 rounded-2xl bg-white/2 border border-white/5"
            >
              {Object.entries(project.metrics).map(([key, value]) => (
                <div key={key} className="text-center">
                  <p className="text-[9px] font-black uppercase tracking-widest text-white/30 mb-1">{key}</p>
                  <p className="text-sm font-bold text-white tracking-tight">{value}</p>
                </div>
              ))}
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-slate-400 leading-relaxed mb-8 text-sm"
            >
              {project.description}
            </motion.p>

            {/* Tech pills */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-2 mb-10"
            >
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-[9px] font-black uppercase tracking-widest border border-white/5 bg-white/5 text-white/60 rounded-lg hover:text-orange-400 hover:border-orange-500/30 transition-all cursor-default"
                >
                  {t}
                </span>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 items-center"
            >
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-6 py-4 bg-white/5 hover:bg-white/10 text-white font-black text-[10px] tracking-widest rounded-xl border border-white/5 hover:border-white/20 transition-all uppercase"
                >
                  <svg className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  Source Code
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-6 py-4 bg-orange-500/10 hover:bg-orange-500/20 text-orange-400 font-black text-[10px] tracking-widest rounded-xl border border-orange-500/20 hover:border-orange-500/50 transition-all uppercase"
                >
                  <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </a>
              )}

              {!project.github && !project.demo && (
                <span className="px-5 py-3 text-[9px] font-black uppercase tracking-widest border border-white/5 bg-white/3 text-white/20 rounded-xl cursor-default">
                  Proprietary · NDA
                </span>
              )}

              {project.github && !project.demo && (
                <span className="px-5 py-3 text-[9px] font-black uppercase tracking-widest border border-white/5 bg-white/3 text-white/25 rounded-xl cursor-default">
                  🚧 Deploy Coming Soon
                </span>
              )}
            </motion.div>
          </div>

          {/* Right: Project Image / Screenshot */}
          <Tilt className="order-1 md:order-2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative group cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 group-hover:border-orange-500/40 transition-colors shadow-2xl">
                <ParallaxImage
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent z-10 group-hover:from-orange-500/10 transition-all pointer-events-none" />
              </div>
              {/* Glow effect */}
              <div className="absolute -inset-2 bg-orange-500/10 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </motion.div>
          </Tilt>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="p-10">
          <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-2">
            <span className="text-orange-400">{'<'}</span>{project.title}<span className="text-orange-400">{'>'}</span>
          </h2>
          <p className="text-orange-400 italic mb-6">{project.tagline}</p>
          <img src={project.image} alt={project.title} className="w-full rounded-xl mb-6" onError={(e) => { e.target.src = `https://placehold.co/800x400/0a0a0a/f97316?text=${project.title}`; }} />
          <p className="text-gray-400 mb-6">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, i) => (
              <span key={i} className="px-3 py-1 text-xs font-bold border border-orange-500/40 text-orange-400 rounded-full">{t}</span>
            ))}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ProjectCard;
