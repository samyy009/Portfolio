import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Sections
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import SpotlightBackground from './components/SpotlightBackground';
import SectionWrapper from './components/SectionWrapper';
import SmoothScroll from './components/SmoothScroll';
import MatrixLoader from './components/MatrixLoader';
import ParticleBackground from './components/ParticleBackground';
import ThreeBackground from './components/ThreeBackground';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import Magnetic from './components/Magnetic';

// Hooks & Providers
import { SoundProvider } from './hooks/useSound';

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('dark');
  const handleLoaded = useCallback(() => setLoading(false), []);

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'dark';
    setTheme(saved);
    document.documentElement.setAttribute('data-theme', saved);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  };

  return (
    <SoundProvider>
      <AnimatePresence>
        {loading && <MatrixLoader onComplete={handleLoaded} />}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {!loading && (
          <motion.div
            key={theme}
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <SmoothScroll>
              <div
                className="min-h-screen font-sans cursor-none overflow-x-hidden mesh-gradient transition-all duration-700"
                style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
              >
                {/* Global overlays */}
                <div className="fixed inset-0 noise-overlay z-[1] opacity-[0.03] pointer-events-none" />
                <CustomCursor />
                <ParticleBackground />
                <ThreeBackground />
                <SpotlightBackground />
                <ScrollProgress />

                <Navbar toggleTheme={toggleTheme} theme={theme} />

                <main className="relative z-10">
                  <Hero theme={theme} />

                  <SectionWrapper id="about">
                    <About />
                  </SectionWrapper>

                  <SectionWrapper id="services">
                    <Services />
                  </SectionWrapper>

                  <SectionWrapper id="projects">
                    <Projects />
                  </SectionWrapper>

                  <SectionWrapper id="experience">
                    <Experience />
                  </SectionWrapper>

                  <SectionWrapper id="skills">
                    <Skills />
                  </SectionWrapper>

                  <SectionWrapper id="achievements">
                    <Achievements />
                  </SectionWrapper>

                  <SectionWrapper id="contact">
                    <Contact />
                  </SectionWrapper>
                </main>

                <Footer />
                <BackToTop />
              </div>
            </SmoothScroll>
          </motion.div>
        )}
      </AnimatePresence>
    </SoundProvider>
  );
}

export default App;
