import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSound } from '../hooks/useSound';

const CommandPalette = ({ isOpen, setIsOpen, toggleTheme, theme }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const { playClick, playHover } = useSound();

  const actions = [
    { id: 'hero', title: 'Go to Home', icon: '🏠', shortcut: 'G H' },
    { id: 'about', title: 'Go to About', icon: '👤', shortcut: 'G A' },
    { id: 'projects', title: 'Go to Projects', icon: '💻', shortcut: 'G P' },
    { id: 'skills', title: 'Go to Skills', icon: '⚡', shortcut: 'G S' },
    { id: 'contact', title: 'Go to Contact', icon: '✉️', shortcut: 'G C' },
    { id: 'theme', title: `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`, icon: '🌓', shortcut: 'T' },
  ];

  const filteredActions = actions.filter(a => 
    a.title.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % filteredActions.length);
        playHover();
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + filteredActions.length) % filteredActions.length);
        playHover();
      }
      if (e.key === 'Enter') {
        e.preventDefault();
        handleAction(filteredActions[selectedIndex]);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedIndex, filteredActions, playHover]);

  const handleAction = (action) => {
    if (!action) return;
    playClick();
    setIsOpen(false);
    if (action.id === 'theme') {
      toggleTheme();
    } else {
      if (window.lenis) {
        window.lenis.scrollTo(`#${action.id}`);
      } else {
        const element = document.getElementById(action.id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setQuery('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-start justify-center pt-[15vh] px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className={`relative w-full max-w-xl border rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl ${
              theme === 'light' ? 'bg-white/90 border-slate-200' : 'bg-slate-900/90 border-white/10'
            }`}
          >
            <div className={`p-4 border-b flex items-center gap-3 ${theme === 'light' ? 'border-slate-100' : 'border-white/5'}`}>
              <svg className={`w-5 h-5 ${theme === 'light' ? 'text-slate-400' : 'text-white/40'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => { setQuery(e.target.value); setSelectedIndex(0); }}
                placeholder="Type a command or search..."
                className={`w-full bg-transparent outline-none text-lg font-medium ${theme === 'light' ? 'text-slate-900 placeholder-slate-400' : 'text-white placeholder-white/20'}`}
              />
              <div className={`px-2 py-1 rounded border text-[10px] font-black tracking-widest uppercase ${theme === 'light' ? 'bg-slate-100 border-slate-200 text-slate-400' : 'bg-white/5 border-white/10 text-white/30'}`}>
                ESC
              </div>
            </div>

            <div className="max-h-[60vh] overflow-y-auto p-2 scrollbar-thin">
              {filteredActions.length > 0 ? (
                filteredActions.map((action, i) => (
                  <button
                    key={action.id}
                    onClick={() => handleAction(action)}
                    onMouseEnter={() => { setSelectedIndex(i); playHover(); }}
                    className={`w-full flex items-center justify-between p-4 rounded-xl transition-all ${
                      selectedIndex === i 
                        ? 'bg-orange-500 text-black shadow-lg shadow-orange-500/20' 
                        : `${theme === 'light' ? 'text-slate-600 hover:bg-slate-100' : 'text-white/60 hover:bg-white/5'}`
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-xl">{action.icon}</span>
                      <span className="font-bold tracking-tight">{action.title}</span>
                    </div>
                    <span className={`text-[10px] font-black tracking-widest uppercase opacity-40`}>
                      {action.shortcut}
                    </span>
                  </button>
                ))
              ) : (
                <div className={`p-8 text-center font-black uppercase tracking-widest text-xs ${theme === 'light' ? 'text-slate-300' : 'text-white/20'}`}>
                  No results found
                </div>
              )}
            </div>

            <div className={`p-3 border-t flex items-center justify-between text-[10px] font-black tracking-widest uppercase ${theme === 'light' ? 'bg-slate-50 border-slate-100 text-slate-400' : 'bg-black/20 border-white/5 text-white/30'}`}>
              <div className="flex gap-4">
                <span className="flex items-center gap-1"><kbd className={`px-1.5 py-0.5 rounded border ${theme === 'light' ? 'bg-white border-slate-200' : 'bg-white/5 border-white/10'}`}>↑↓</kbd> Navigate</span>
                <span className="flex items-center gap-1"><kbd className={`px-1.5 py-0.5 rounded border ${theme === 'light' ? 'bg-white border-slate-200' : 'bg-white/5 border-white/10'}`}>↵</kbd> Select</span>
              </div>
              <span>Command Palette v1.0</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
