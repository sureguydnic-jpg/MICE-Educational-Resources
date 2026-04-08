import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronLeft, 
  ChevronRight, 
  X
} from "lucide-react";
import { day2Slides as slides } from "../data/slides";

interface Day2PresentationProps {
  onClose: () => void;
}

export default function Day2Presentation({ onClose }: Day2PresentationProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) setCurrentSlide(prev => prev + 1);
  };

  const prevSlide = () => {
    if (currentSlide > 0) setCurrentSlide(prev => prev - 1);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "Enter" || e.key === "PageDown") {
        nextSlide();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        prevSlide();
      } else if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide]);

  const slide = slides[currentSlide];

  return (
    <div className="fixed inset-0 z-50 bg-bg-base flex flex-col items-center justify-center p-4 md:p-12 overflow-hidden">
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-purple-neon/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Close Button */}
      <button 
        onClick={onClose}
        className="absolute top-8 right-8 z-[100] p-3 rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-all"
      >
        <X size={24} />
      </button>

      {/* Navigation Controls */}
      <button 
        onClick={prevSlide}
        disabled={currentSlide === 0}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-[100] p-2 text-purple-neon hover:scale-125 transition-all disabled:opacity-20 disabled:cursor-not-allowed"
      >
        <ChevronLeft size={48} />
      </button>
      <button 
        onClick={nextSlide}
        disabled={currentSlide === slides.length - 1}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-[100] p-2 text-purple-neon hover:scale-125 transition-all disabled:opacity-20 disabled:cursor-not-allowed"
      >
        <ChevronRight size={48} />
      </button>

      <div className="relative z-10 w-full max-w-[95vw] h-[90vh] flex flex-col items-center justify-start pt-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.02, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-full h-full flex flex-col justify-start pt-4 break-keep"
          >
            {slide.type === "title" && (
              <div className="text-center flex flex-col items-center justify-start pt-20 h-full">
                <div className="inline-block px-8 py-3 rounded-full border-2 border-purple-neon bg-purple-neon/10 mb-8">
                  <span className="text-purple-neon text-2xl font-black tracking-widest" style={{ textShadow: '0 0 10px rgba(176, 38, 255, 0.5)' }}>
                    {slide.badge}
                  </span>
                </div>
                <h1 className="text-6xl md:text-8xl font-black text-white leading-tight mb-4 whitespace-pre-line">
                  {slide.title}
                </h1>
                <p className="text-3xl md:text-4xl text-text-sub font-display">
                  {slide.subtitle}
                </p>
              </div>
            )}

            {slide.type === "goal" && (
              <div className="flex flex-col items-center w-full max-w-[85vw] mx-auto">
                <div className="flex items-center gap-4 mb-12 self-start opacity-60">
                  <div className="text-purple-neon scale-50 origin-left">
                    {slide.icon}
                  </div>
                  <h2 className="text-2xl font-black text-purple-neon font-display uppercase tracking-widest">
                    {slide.title}
                  </h2>
                </div>
                <div className="glass-card px-24 py-20 rounded-4xl border-purple-neon/20 w-full flex flex-col items-center shadow-2xl">
                  <div className="w-full">
                    {slide.content}
                  </div>
                </div>
              </div>
            )}

            {slide.type === "content" && (
              <div className="flex flex-col h-full w-full max-w-[90vw] mx-auto overflow-hidden">
                <div className="flex items-center gap-4 mb-10">
                  <span className={`px-6 py-1.5 rounded-full border-2 font-black text-xl shadow-lg ${
                    slide.theme === 'green' ? 'border-green-neon text-green-neon bg-green-neon/10' : 
                    slide.theme === 'pink' ? 'border-pink-neon text-pink-neon bg-pink-neon/10' : 
                    slide.theme === 'cyan' ? 'border-cyan-neon text-cyan-neon bg-cyan-neon/10' :
                    slide.theme === 'yellow' ? 'border-yellow-neon text-yellow-neon bg-yellow-neon/10' :
                    'border-purple-neon text-purple-neon bg-purple-neon/10'
                  }`}>
                    {slide.session}
                  </span>
                  <h2 className="text-3xl font-display text-white font-black tracking-widest uppercase">
                    {slide.sessionTitle}
                  </h2>
                  <div className="h-px flex-grow bg-white/20 ml-4" />
                  <span className="px-4 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-black text-white tracking-widest">
                    SESSION ACTIVE
                  </span>
                </div>
                
                <div className="flex-grow overflow-y-auto pr-4 custom-scrollbar">
                  <div className="grid grid-cols-1 gap-8 pb-12">
                    {slide.items?.map((item, i) => (
                      <div key={i} className="glass-card p-12 rounded-4xl border-white/10 shadow-2xl space-y-6 hover:border-white/30 transition-all">
                        <div className={`flex items-center gap-5 text-4xl font-black pb-6 border-b-2 border-dashed ${
                          slide.theme === 'green' ? 'text-green-neon border-green-neon/20' : 
                          slide.theme === 'pink' ? 'text-pink-neon border-pink-neon/20' : 
                          slide.theme === 'cyan' ? 'text-cyan-neon border-cyan-neon/20' :
                          slide.theme === 'yellow' ? 'text-yellow-neon border-yellow-neon/20' :
                          'text-purple-neon border-purple-neon/20'
                        }`}>
                          {slide.cardIcon || <div className={`w-3 h-10 rounded-full ${
                            slide.theme === 'green' ? 'bg-green-neon' : 
                            slide.theme === 'pink' ? 'bg-pink-neon' : 
                            slide.theme === 'cyan' ? 'bg-cyan-neon' :
                            slide.theme === 'yellow' ? 'bg-yellow-neon' :
                            'bg-purple-neon'
                          }`} />}
                          {item.title}
                        </div>
                        
                        {item.desc && <p className="text-2xl text-white leading-relaxed font-medium break-keep pl-2">{item.desc}</p>}
                        
                        {item.highlight && (
                          <div className={`p-10 rounded-2xl bg-white/5 border-l-[12px] ${
                            slide.theme === 'green' ? 'border-green-neon' : 
                            slide.theme === 'pink' ? 'border-pink-neon' : 
                            slide.theme === 'cyan' ? 'border-cyan-neon' :
                            slide.theme === 'yellow' ? 'border-yellow-neon' :
                            'border-purple-neon'
                          }`}>
                            <p className="text-2xl text-white leading-relaxed font-black break-keep">{item.highlight}</p>
                          </div>
                        )}
                        
                        {item.subItems && (
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                            {item.subItems.map((sub, j) => (
                              <li key={j} className="text-xl text-white flex gap-4 leading-relaxed font-bold break-keep items-start p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                                <span className={`mt-1 ${
                                  slide.theme === 'green' ? 'text-green-neon' : 
                                  slide.theme === 'pink' ? 'text-pink-neon' : 
                                  slide.theme === 'cyan' ? 'text-cyan-neon' :
                                  slide.theme === 'yellow' ? 'text-yellow-neon' :
                                  'text-purple-neon'
                                }`}>→</span>
                                <span>{sub}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {slide.type === "grid" && (
              <div className="flex flex-col h-full w-full max-w-[92vw] mx-auto overflow-hidden">
                <div className="flex items-center gap-4 mb-10">
                  <span className={`px-6 py-1.5 rounded-full border-2 font-black text-xl shadow-lg ${
                    slide.theme === 'green' ? 'border-green-neon text-green-neon bg-green-neon/10' : 
                    slide.theme === 'pink' ? 'border-pink-neon text-pink-neon bg-pink-neon/10' : 
                    slide.theme === 'cyan' ? 'border-cyan-neon text-cyan-neon bg-cyan-neon/10' :
                    slide.theme === 'yellow' ? 'border-yellow-neon text-yellow-neon bg-yellow-neon/10' :
                    'border-purple-neon text-purple-neon bg-purple-neon/10'
                  }`}>
                    {slide.session}
                  </span>
                  <h2 className="text-3xl font-display text-white font-black tracking-widest uppercase">
                    {slide.sessionTitle}
                  </h2>
                  <div className="h-px flex-grow bg-white/20 ml-4" />
                  <span className="px-4 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-black text-white tracking-widest">
                    OVERVIEW
                  </span>
                </div>

                <div className={`grid grid-cols-1 ${
                  slide.cards?.length === 3 ? 'md:grid-cols-3 gap-6' : 'md:grid-cols-2 gap-10'
                } flex-grow overflow-y-auto pr-4 custom-scrollbar pb-12`}>
                  {slide.cards?.map((card, i) => (
                    <div key={i} className={`glass-card ${
                      slide.cards?.length === 3 ? 'p-8' : 'p-12'
                    } rounded-4xl flex flex-col justify-start shadow-2xl hover:border-white/30 transition-all`}>
                      <div className={`flex items-center gap-5 ${
                        slide.cards?.length === 3 ? 'text-2xl mb-6 pb-4' : 'text-3xl mb-8 pb-6'
                      } font-black border-b-2 border-dashed ${
                        slide.theme === 'green' ? 'text-green-neon border-green-neon/20' : 
                        slide.theme === 'pink' ? 'text-pink-neon border-pink-neon/20' : 
                        slide.theme === 'cyan' ? 'text-cyan-neon border-cyan-neon/20' :
                        slide.theme === 'yellow' ? 'text-yellow-neon border-yellow-neon/20' :
                        'text-purple-neon border-purple-neon/20'
                      }`}>
                        <div className="scale-110 origin-left">{card.icon}</div>
                        {card.title}
                      </div>
                      <ul className="space-y-4 flex-grow">
                        {card.items?.map((item, j) => (
                          <li key={j} className="text-xl text-white flex gap-4 leading-relaxed font-bold break-keep items-start p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                            <span className={`mt-1 ${
                              slide.theme === 'green' ? 'text-green-neon' : 
                              slide.theme === 'pink' ? 'text-pink-neon' : 
                              slide.theme === 'cyan' ? 'text-cyan-neon' :
                              slide.theme === 'yellow' ? 'text-yellow-neon' :
                              'text-purple-neon'
                            }`}>▶</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {slide.type === "summary" && (
              <div className="flex flex-col items-center justify-center h-full">
                <div className="glass-card p-12 rounded-4xl border-purple-neon/30 max-w-[85vw] w-full flex flex-col items-center bg-black/80">
                  <div className="text-purple-neon mb-6 drop-shadow-[0_0_30px_rgba(176, 38, 255, 0.5)]">
                    {slide.icon}
                  </div>
                  <h2 className="text-3xl font-black text-white mb-4 font-display uppercase tracking-widest">
                    {slide.title}
                  </h2>
                  <h1 className="text-5xl md:text-7xl font-black text-purple-neon mb-10 text-center leading-tight">
                    "{slide.mainQuote}"
                  </h1>
                  
                  <div className="w-full space-y-6">
                    {slide.items?.map((item, i) => (
                      <div key={i} className="flex flex-col md:flex-row md:items-center gap-6 text-2xl font-bold">
                        <strong className="text-white min-w-[350px] font-black">{item.label}</strong>
                        <div className="hidden md:block h-px flex-grow bg-white/10" />
                        <span className="text-text-sub">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-[100]">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-2 rounded-full transition-all ${
              i === currentSlide 
                ? "w-8 bg-purple-neon shadow-[0_0_10px_rgba(176, 38, 255, 0.8)]" 
                : "w-2 bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-8 right-8 text-white/20 font-display text-sm tracking-widest">
        {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
      </div>
    </div>
  );
}
