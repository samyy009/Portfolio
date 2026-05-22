import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const CATEGORIES = ['All', 'Full Stack', 'Web', 'ML/Data', 'Game Dev'];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <p className="text-orange-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4 text-center md:text-left">Selected Works</p>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter text-center md:text-left">Portfolio</h2>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-[10px] font-black tracking-widest transition-all duration-300 border ${
                  activeCategory === cat
                    ? 'bg-orange-500 border-orange-500 text-black shadow-lg shadow-orange-500/20'
                    : 'bg-white/5 border-white/5 text-white/40 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
