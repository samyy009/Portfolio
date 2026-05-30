import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSound } from '../hooks/useSound';
import useActiveSection from '../hooks/useActiveSection';

const SECTION_IDS = ['hero', 'about', 'services', 'projects', 'skills', 'achievements', 'contact'];


const Navbar = ({ toggleTheme, theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(SECTION_IDS);
  const { isMuted, setIsMuted, playToggle, playClick } = useSound();

  const handleSoundToggle = () => {
    setIsMuted(!isMuted);
    playToggle();
  };


  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    playClick();
    if (window.lenis) {
      window.lenis.scrollTo(href);
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'HOME', href: '#hero', id: 'hero' },
    { name: 'ABOUT', href: '#about', id: 'about' },
    { name: 'SERVICES', href: '#services', id: 'services' },
    { name: 'PROJECTS', href: '#projects', id: 'projects' },
    { name: 'SKILLS', href: '#skills', id: 'skills' },
    { name: 'AWARDS', href: '#achievements', id: 'achievements' },
    { name: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${
      scrolled
        ? 'py-3 backdrop-blur-xl border-b'
        : 'py-6 bg-transparent'
    } ${scrolled ? (theme === 'light' ? 'bg-white/90 border-slate-200' : 'bg-black/85 border-white/5') : ''} ${theme === 'light' && !scrolled ? 'text-slate-900' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center gap-8">
          <div className="flex items-center gap-10">
            <motion.a
              href="#hero"
              onClick={playClick}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className={`text-xl font-black tracking-tight hover:text-orange-400 transition-colors whitespace-nowrap ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}
            >
              Sameer Sangam
            </motion.a>

          </div>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className={`text-[10px] font-black tracking-[0.2em] transition-colors relative group py-2 ${
                  active === link.id ? 'text-orange-400' : theme === 'light' ? 'text-slate-500 hover:text-orange-400' : 'text-white/50 hover:text-orange-400'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 h-[2px] bg-orange-400 transition-all duration-500 ease-out ${
                  active === link.id ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100 shadow-[0_0_10px_rgba(249,115,22,0.4)]'
                }`} />
              </motion.a>
            ))}

            {/* Resume CTA */}
            <a
              href="/resume.pdf"
              download="Sameer_Sangam_Resume.pdf"
              id="navbar-resume-btn"
              className="flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-400 text-black text-[10px] font-black tracking-[0.15em] uppercase rounded-xl transition-all hover:scale-105 active:scale-95 shadow-md shadow-orange-500/20"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
              </svg>
              Resume
            </a>

            <div className="flex items-center gap-2">
              <button
                onClick={handleSoundToggle}
                className={`p-2.5 rounded-full transition-all duration-300 ${theme === 'light' ? 'bg-slate-100 text-slate-600' : 'bg-white/5 text-white/40 hover:bg-white/10 hover:text-white'}`}
                title={isMuted ? 'Unmute UI sounds' : 'Mute UI sounds'}
              >
                {isMuted ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" /></svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /></svg>
                )}
              </button>

              <button
                onClick={() => { toggleTheme(); playToggle(); }}
                className={`p-2.5 rounded-full transition-all duration-300 ${theme === 'light' ? 'bg-orange-100 text-orange-600' : 'bg-white/5 text-orange-400 hover:bg-white/10'}`}
              >
                {theme === 'dark' ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 3v1m0 16v1m9-9h-1M4 9H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" /></svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile actions */}
          <div className="flex items-center gap-4 lg:hidden">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${theme === 'light' ? 'bg-orange-100 text-orange-600' : 'bg-white/5 text-orange-400'}`}
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 9H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" /></svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-colors ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`lg:hidden backdrop-blur-xl border-b border-white/5 ${theme === 'light' ? 'bg-white/95 text-slate-900' : 'bg-black/95 text-white'}`}
          >
            <div className="px-6 py-8 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`block py-4 text-[10px] font-black tracking-widest border-b border-white/5 transition-colors ${
                    active === link.id ? 'text-orange-400' : theme === 'light' ? 'text-slate-500 hover:text-orange-400' : 'text-white/50 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="/resume.pdf"
                download="Sameer_Sangam_Resume.pdf"
                id="navbar-mobile-resume-btn"
                className="flex items-center gap-2 mt-4 py-4 text-[10px] font-black tracking-widest text-orange-400"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                </svg>
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
