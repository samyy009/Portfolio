import TextReveal from '../components/TextReveal';

const marqueeRow1 = [
  'Python', 'C', 'C++', 'Java', 'JavaScript', 'HTML', 'React.js', 'Flask',
  'Tailwind CSS', 'MySQL', 'PostgreSQL', 'MongoDB', 'REST APIs', 'OAuth 2.0',
  'Git', 'GitHub', 'Cloud Computing', 'Vite', 'Docker', 'Node.js',
];
const marqueeRow2 = [
  'Semantic Segmentation', 'Bounding Box Annotations', 'Data Management', 'Ango Hub',
  'ML Pipelines', 'MS Office', 'MS Excel', 'Physical Networking', 'Hardware Networking',
  'Cyber Security', 'Networking Polygons', 'Quality Assurance', 'Data Annotation',
  'CI/CD Pipelines', 'Framer Motion', 'Lenis', 'Canvas API',
];

const techIcons = [
  { name: 'Python', letter: 'Py', bg: '#3776AB' },
  { name: 'JavaScript', letter: 'JS', bg: '#F7DF1E', dark: true },
  { name: 'React.js', letter: '⚛', bg: '#20232a' },
  { name: 'Flask', letter: '🌶', bg: '#1a1a1a' },
  { name: 'MySQL', letter: 'SQL', bg: '#00618A' },
  { name: 'C / C++', letter: 'C++', bg: '#004482' },
  { name: 'Java', letter: '☕', bg: '#f89820', dark: true },
  { name: 'Git', letter: 'Git', bg: '#F05032' },
  { name: 'Cloud', letter: '☁', bg: '#2496ED' },
  { name: 'Data ML', letter: 'ML', bg: '#FF6F00' },
];

const Marquee = ({ items, reverse = false, speed = 45 }) => (
  <div className="overflow-hidden w-full" style={{ maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)' }}>
    <div className="flex gap-3 w-max" style={{ animation: `${reverse ? 'marqueeReverse' : 'marquee'} ${speed}s linear infinite` }}>
      {[...items, ...items].map((item, i) => (
        <span key={i}
          className="px-5 py-2.5 border border-white/8 text-white/40 text-xs font-semibold rounded-full whitespace-nowrap hover:border-orange-500/50 hover:text-orange-400 transition-all duration-300 cursor-default select-none">
          {item}
        </span>
      ))}
    </div>
  </div>
);

import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <section id="skills" className="py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-orange-400 text-xs font-black uppercase tracking-[0.2em] mb-3">My Skills</p>
          <TextReveal text="Technologies & Tools" className="text-4xl md:text-6xl font-black text-white justify-center mb-4" />
          <p className="text-white/30 max-w-xl mx-auto text-sm leading-relaxed">
            From machine learning data pipelines to full stack web applications — I work across the entire technology spectrum.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 mb-16">
          {techIcons.map((tech, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="flex flex-col items-center gap-3 p-5 rounded-2xl border border-white/5 hover:border-orange-500/30 hover:bg-orange-500/4 transition-all duration-300 group cursor-default"
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center text-sm font-black group-hover:scale-110 transition-transform duration-300 select-none"
                style={{ background: tech.bg, color: tech.dark ? '#000' : '#fff' }}>
                {tech.letter}
              </div>
              <span className="text-[11px] font-bold text-white/40 group-hover:text-orange-400 transition-colors text-center leading-tight">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="space-y-3">
          <Marquee items={marqueeRow1} speed={50} />
          <Marquee items={marqueeRow2} reverse speed={40} />
        </div>
      </div>

      <style>{`
        @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        @keyframes marqueeReverse { from{transform:translateX(-50%)} to{transform:translateX(0)} }
      `}</style>
    </section>
  );
};

export default Skills;
