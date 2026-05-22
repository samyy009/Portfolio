import { motion } from 'framer-motion';
import TextReveal from '../components/TextReveal';
import Magnetic from '../components/Magnetic';

const About = () => {
  const infoItems = [
    { label: 'Location', value: 'Karnataka, India' },
    { label: 'Email', value: 'sameersangam66@gmail.com' },
    { label: 'Phone', value: '+91 6360094791' },
    { label: 'Status', value: '🟠 Open to Opportunities' },
  ];

  return (
    <section id="about" className="py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative order-2 lg:order-1 group"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/8 group-hover:border-orange-500/25 transition-colors duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/8 via-transparent to-transparent z-10" />
              <img
                src="/images/hero-avatar.jpg"
                alt="Sameer Sangam"
                className="w-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                style={{ minHeight: '400px' }}
              />
              {/* Availability badge */}
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="backdrop-blur-xl bg-black/70 border border-white/10 rounded-2xl px-5 py-4 flex items-center gap-3">
                  <div className="w-2.5 h-2.5 bg-orange-400 rounded-full animate-pulse flex-shrink-0" />
                  <span className="text-white text-sm font-bold">Available for full-time & freelance roles</span>
                </div>
              </div>
            </div>
            <div className="absolute -inset-4 bg-orange-500/4 rounded-3xl blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-blue-400 text-xs font-black uppercase tracking-[0.2em] mb-4"
            >
              About Me
            </motion.p>

            <TextReveal
              text="Skilled in Data Annotation & Full Stack Development"
              className="text-3xl md:text-4xl font-black text-white mb-8 leading-tight"
            />

            <div className="space-y-4 text-[15px] text-white/40 leading-[1.85] mb-10">
              <p>
                I'm <span className="text-white/80 font-semibold">Sameer Sangam</span> — a data annotation specialist and full stack developer based in Karnataka, India. With a track record of delivering meticulous, high-quality annotations across diverse ML datasets (text, images, audio, and video), I've contributed to world-class AI platforms at <span className="text-orange-400 font-medium">iMerit Technology</span>.
              </p>
              <p>
                As a Team Coordinator at iMerit, I led production delivery for <span className="text-white/70 font-medium">50+ projects globally</span> on the UVeye AI vehicle inspection platform, working across three systems — Atlas, Artemis, and Helios. Our platform won the <span className="text-blue-400 font-medium">Best AI Application of the Year</span> award.
              </p>
              <p>
                On the development side, I build full stack web applications with React, Flask, and MySQL — including a complete boutique e-commerce platform with OAuth, delivery tracking, and CI/CD pipelines. Currently pursuing my <span className="text-white/70 font-medium">MCA at Chetan Business School, Hubballi</span>.
              </p>
            </div>

            {/* Info list - Premium Style */}
            <div className="space-y-4 mb-10">
              {infoItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass-morphism rounded-2xl p-4 flex items-center gap-5 hover:border-blue-500/30 transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border border-white/5 bg-white/2 group-hover:bg-${i % 2 === 0 ? 'orange' : 'blue'}-500/10 group-hover:border-${i % 2 === 0 ? 'orange' : 'blue'}-500/20 transition-all`}>
                    {i === 0 && <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>}
                    {i === 1 && <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>}
                    {i === 2 && <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>}
                    {i === 3 && <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>}
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] mb-0.5">{item.label}</p>
                    <p className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex gap-6 flex-wrap"
            >
              <Magnetic>
                <a
                  href="https://www.linkedin.com/in/sameersangam/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-white/5 border border-white/10 hover:border-orange-500/40 rounded-full text-sm font-bold text-orange-400 hover:text-white transition-all group flex items-center gap-2"
                >
                  LinkedIn Profile
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </a>
              </Magnetic>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
