import { motion } from 'framer-motion';
import TextReveal from '../components/TextReveal';
import { experience } from '../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="py-16 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="px-2 py-1 bg-orange-500/10 text-orange-400 text-[10px] font-black uppercase tracking-widest border border-orange-500/20 rounded">LOG_FILE: EXPERIENCE</span>
            <div className="h-px flex-grow bg-white/5" />
          </div>
          <TextReveal
            text="Career Trajectory"
            className="text-5xl md:text-8xl font-black text-white tracking-tighter"
          />
        </motion.div>

        <div className="relative">
          {/* Vertical Grid Line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-white/5" />

          <div className="space-y-12">
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-12 group"
              >
                {/* ID Tag */}
                <div className="absolute -left-3 top-0 px-2 py-1 bg-black border border-white/10 text-[8px] font-black text-white/40 tracking-widest uppercase rounded group-hover:border-orange-500/50 group-hover:text-orange-400 transition-all">
                  EXP-{String(i + 1).padStart(2, '0')}
                </div>

                {/* Timeline Connector */}
                <div className="absolute left-0 top-3 w-12 h-px bg-white/10 group-hover:bg-orange-500/50 transition-all" />

                <div className="p-8 rounded-2xl bg-white/2 border border-white/5 hover:border-orange-500/30 transition-all duration-500">
                  <div className="flex flex-wrap items-center justify-between gap-6 mb-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-black text-white mb-2 tracking-tight">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-3">
                        <span className="text-orange-400 font-bold text-sm italic">{exp.company}</span>
                        <span className="w-1 h-1 rounded-full bg-white/20" />
                        <span className="text-white/30 text-xs font-medium">{exp.location}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-[10px] font-black text-white/40 tracking-widest uppercase">
                        {exp.duration}
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed font-medium">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
