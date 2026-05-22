import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TextReveal from '../components/TextReveal';
import { milestones, certificates, groupPhotos } from '../data/achievements';

const Achievements = () => {
  const [activeTab, setActiveTab] = useState('milestones');
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);

  // Milestone carousel logic
  const prevMilestone = () => setActiveIndex((p) => (p - 1 + milestones.length) % milestones.length);
  const nextMilestone = () => setActiveIndex((p) => (p + 1) % milestones.length);

  const visibleMilestones = [0, 1, 2].map((offset) => ({
    ...milestones[(activeIndex + offset) % milestones.length],
    _slot: offset,
  }));

  // Handle keyboard events (Escape to close lightbox)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedItem(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-orange-400 text-xs font-black uppercase tracking-[0.2em] mb-3"
            >
              Achievements & Gallery
            </motion.p>
            <TextReveal text="Milestones & Memories" className="text-4xl md:text-6xl font-black text-white tracking-tighter" />
          </div>

          {/* Navigation controls for Milestones slider (only visible when in milestones tab) */}
          {activeTab === 'milestones' && (
            <div className="flex gap-3 flex-shrink-0">
              <button 
                onClick={prevMilestone} 
                className="w-12 h-12 rounded-full border border-white/15 flex items-center justify-center text-white hover:border-orange-400 hover:text-orange-400 hover:bg-orange-400/5 transition-all group"
                aria-label="Previous milestone"
              >
                <svg className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
                </svg>
              </button>
              <button 
                onClick={nextMilestone} 
                className="w-12 h-12 rounded-full border border-white/15 flex items-center justify-center text-white hover:border-orange-400 hover:text-orange-400 hover:bg-orange-400/5 transition-all group"
                aria-label="Next milestone"
              >
                <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* Dynamic Tabs Navigation */}
        <div className="flex justify-center md:justify-start border-b border-white/10 mb-12 gap-6 pb-px">
          {['milestones', 'certificates', 'gallery'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative pb-4 text-xs font-black tracking-widest uppercase transition-all duration-300 ${
                activeTab === tab ? 'text-orange-400' : 'text-white/40 hover:text-white'
              }`}
            >
              {tab === 'gallery' ? 'Group Photos' : tab}
              {activeTab === tab && (
                <motion.div 
                  layoutId="activeTabUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-orange-400"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Tab Panel Content */}
        <div className="min-h-[350px]">
          <AnimatePresence mode="wait">
            
            {/* 1. Milestones Tab */}
            {activeTab === 'milestones' && (
              <motion.div
                key="milestones-panel"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  {visibleMilestones.map((item, i) => (
                    <motion.div
                      key={`${activeIndex}-${i}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      className="border border-white/5 rounded-2xl p-8 hover:border-orange-500/25 hover:bg-orange-500/2 transition-all duration-300 group cursor-default"
                    >
                      <div className="flex items-start justify-between mb-5 gap-2">
                        <span className="text-[9px] font-black text-orange-400 uppercase tracking-widest leading-tight">{item.org}</span>
                        <span className="text-[9px] font-bold text-white/20 border border-white/8 px-2.5 py-1 rounded-full flex-shrink-0 whitespace-nowrap">{item.year}</span>
                      </div>
                      <h3 className="text-base font-bold text-white mb-3 group-hover:text-orange-400 transition-colors leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-white/35 leading-relaxed">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Carousel Dot Indicators */}
                <div className="flex justify-center gap-2">
                  {milestones.map((_, i) => (
                    <button 
                      key={i} 
                      onClick={() => setActiveIndex(i)}
                      className={`rounded-full transition-all duration-300 ${
                        i === activeIndex ? 'bg-orange-400 w-6 h-2' : 'bg-white/10 w-2 h-2 hover:bg-white/25'
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              </motion.div>
            )}

            {/* 2. Certificates Tab */}
            {activeTab === 'certificates' && (
              <motion.div
                key="certificates-panel"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {certificates.map((cert) => (
                  <motion.div
                    key={cert.id}
                    layoutId={`container-${cert.id}`}
                    onClick={() => setSelectedItem(cert)}
                    whileHover={{ y: -6 }}
                    className="group border border-white/5 rounded-2xl bg-white/2 overflow-hidden hover:border-orange-500/30 transition-all duration-300 cursor-pointer shadow-lg shadow-black/10"
                  >
                    {/* Certificate Thumbnail */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/40">
                      <img 
                        src={cert.image} 
                        alt={cert.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => { 
                          e.target.src = `https://placehold.co/600x450/111/f97316?text=${encodeURIComponent(cert.title)}`; 
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                        <span className="text-[9px] font-black text-black bg-orange-400 px-4 py-2 rounded-full uppercase tracking-wider shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                          </svg>
                          View Credential
                        </span>
                      </div>
                    </div>

                    {/* Certificate Info */}
                    <div className="p-6">
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <span className="text-[9px] font-black text-orange-400 uppercase tracking-widest">{cert.org}</span>
                        <span className="text-[9px] font-bold text-white/30 border border-white/5 px-2 py-0.5 rounded-full">{cert.year}</span>
                      </div>
                      <h3 className="text-sm font-bold text-white mb-2 group-hover:text-orange-400 transition-colors line-clamp-1">
                        {cert.title}
                      </h3>
                      <p className="text-[11px] text-white/30 leading-relaxed line-clamp-2">{cert.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* 3. Group Gallery Tab */}
            {activeTab === 'gallery' && (
              <motion.div
                key="gallery-panel"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {groupPhotos.map((photo) => (
                  <motion.div
                    key={photo.id}
                    layoutId={`container-${photo.id}`}
                    onClick={() => setSelectedItem(photo)}
                    whileHover={{ y: -6 }}
                    className="group border border-white/5 rounded-2xl bg-white/2 overflow-hidden hover:border-orange-500/30 transition-all duration-300 cursor-pointer shadow-lg shadow-black/10"
                  >
                    {/* Gallery Thumbnail */}
                    <div className="relative aspect-video w-full overflow-hidden bg-black/40">
                      <img 
                        src={photo.image} 
                        alt={photo.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => { 
                          e.target.src = `https://placehold.co/600x337/111/f97316?text=${encodeURIComponent(photo.title)}`; 
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                        <span className="text-[9px] font-black text-black bg-orange-400 px-4 py-2 rounded-full uppercase tracking-wider shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                          </svg>
                          Open Image
                        </span>
                      </div>
                    </div>

                    {/* Gallery Info */}
                    <div className="p-6">
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <span className="text-[9px] font-black text-orange-400 uppercase tracking-widest">{photo.event}</span>
                        <span className="text-[9px] font-bold text-white/30 border border-white/5 px-2 py-0.5 rounded-full">{photo.year}</span>
                      </div>
                      <h3 className="text-sm font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                        {photo.title}
                      </h3>
                      <p className="text-[11px] text-white/30 leading-relaxed">{photo.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox / Fullscreen Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-[500] flex items-center justify-center p-4 sm:p-6 md:p-10 select-none">
            
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-slate-950/95 backdrop-blur-md cursor-zoom-out"
            />

            {/* Lightbox Container */}
            <motion.div
              layoutId={`container-${selectedItem.id}`}
              className="relative w-full max-w-5xl bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col md:flex-row"
            >
              {/* Left Side: Large Image */}
              <div className="relative flex-1 bg-black/60 flex items-center justify-center p-4 min-h-[300px] md:min-h-0 md:max-h-[90vh] overflow-hidden">
                <img 
                  src={selectedItem.image} 
                  alt={selectedItem.title} 
                  className="max-w-full max-h-[50vh] md:max-h-[80vh] object-contain rounded-lg"
                  onError={(e) => { 
                    e.target.src = `https://placehold.co/800x600/111/f97316?text=${encodeURIComponent(selectedItem.title)}`; 
                  }}
                />
              </div>

              {/* Right Side: Metadata / Description Panel */}
              <div className="w-full md:w-80 border-t md:border-t-0 md:border-l border-white/10 p-8 flex flex-col justify-between bg-zinc-950/80">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span className="text-[10px] font-black text-orange-400 uppercase tracking-widest">
                      {selectedItem.org || selectedItem.event}
                    </span>
                    <span className="text-[10px] font-black text-white/30 border border-white/10 px-3 py-1 rounded-full">
                      {selectedItem.year}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-white mb-4 leading-tight tracking-tight">
                    {selectedItem.title}
                  </h2>

                  <p className="text-xs text-white/40 leading-relaxed mb-6">
                    {selectedItem.desc}
                  </p>
                </div>

                {/* Control Action Buttons */}
                <div className="flex flex-col gap-3 mt-6">
                  <a 
                    href={selectedItem.image} 
                    download 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-full py-3 rounded-xl bg-orange-500 hover:bg-orange-400 text-black text-center text-[10px] font-black tracking-widest uppercase transition-all shadow-lg shadow-orange-500/10"
                  >
                    Open Full Image
                  </a>
                  <button 
                    onClick={() => setSelectedItem(null)}
                    className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white text-center text-[10px] font-black tracking-widest uppercase border border-white/5 transition-all"
                  >
                    Close Preview
                  </button>
                </div>
              </div>

              {/* Top Close Button (for overlay context/mobile) */}
              <button 
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 text-white hover:bg-orange-500 hover:text-black transition-all border border-white/10 md:hidden z-20"
                aria-label="Close"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>

          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Achievements;
