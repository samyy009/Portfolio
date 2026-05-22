import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Check multiple scroll sources for maximum compatibility
      const currentScroll = window.lenis 
        ? window.lenis.scroll 
        : (window.scrollY || window.pageYOffset || document.documentElement.scrollTop);
      
      if (currentScroll > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Listen to standard window scroll
    window.addEventListener('scroll', toggleVisibility);

    // Also listen to Lenis scroll if available
    if (window.lenis) {
      window.lenis.on('scroll', toggleVisibility);
    }

    // Poller to check if Lenis gets initialized late (React hook mounting order)
    const interval = setInterval(() => {
      if (window.lenis) {
        window.lenis.on('scroll', toggleVisibility);
        clearInterval(interval);
      }
    }, 200);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      if (window.lenis) {
        window.lenis.off('scroll', toggleVisibility);
      }
      clearInterval(interval);
    };
  }, []);

  const scrollToTop = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: false });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 z-[9999] w-14 h-14 bg-gradient-to-br from-orange-500 to-blue-600 text-white rounded-full shadow-2xl shadow-blue-500/20 flex items-center justify-center hover:scale-110 active:scale-95 transition-all group cursor-pointer"
          aria-label="Back to top"
        >
          <svg className="w-6 h-6 group-hover:-translate-y-1 transition-transform pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
