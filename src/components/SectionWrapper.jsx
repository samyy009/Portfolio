import React from 'react';
import { motion } from 'framer-motion';

const SectionWrapper = ({ children, id }) => {
  return (
    <section id={id} className="relative py-12 md:py-16 overflow-hidden">
      {/* Background Section Reveal - Vertical Bars */}
      <div className="absolute inset-0 flex pointer-events-none z-0">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ height: "100%" }}
            whileInView={{ height: "0%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 1, 
              delay: i * 0.1, 
              ease: [0.76, 0, 0.24, 1] 
            }}
            className="flex-1 bg-black/5 dark:bg-white/5 border-r border-black/5 dark:border-white/5"
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ 
          duration: 0.8, 
          delay: 0.2, 
          ease: [0.215, 0.61, 0.355, 1] 
        }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;
