import React, { useState } from 'react';
import { Download, Loader2 } from 'lucide-react';
import { motion } from 'motion/react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { day1Slides, day2Slides, day3Slides, day4Slides, SlideData } from '../data/slides';

const SlideRenderer: React.FC<{ slide: SlideData; dayTitle: string }> = ({ slide, dayTitle }) => {
  // This is a simplified version of the slide UI for PDF generation
  // We need to ensure it looks good and fits the PDF aspect ratio (usually 16:9 for presentations)
  return (
    <div className="w-[1280px] h-[720px] bg-[#0a0a0f] relative overflow-hidden flex flex-col items-center justify-start pt-12 p-12 text-white font-sans border-4 border-white/5">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      
      {slide.type === "title" && (
        <div className="text-center flex flex-col items-center justify-start pt-20 h-full w-full">
          <div className={`inline-block px-8 py-3 rounded-full border-2 mb-8 ${
            slide.theme === 'purple' ? 'border-[#b026ff] bg-[#b026ff]/10' : 
            slide.theme === 'green' ? 'border-[#00ff9d] bg-[#00ff9d]/10' : 
            slide.theme === 'pink' ? 'border-[#ff2a6d] bg-[#ff2a6d]/10' : 
            'border-[#00e5ff] bg-[#00e5ff]/10'
          }`}>
            <span className="text-2xl font-black tracking-widest uppercase">
              {slide.badge}
            </span>
          </div>
          <h1 className="text-7xl font-black leading-tight mb-4 whitespace-pre-line">
            {slide.title}
          </h1>
          <p className="text-4xl opacity-60">
            {slide.subtitle}
          </p>
        </div>
      )}

      {slide.type === "goal" && (
        <div className="flex flex-col items-center w-full h-full justify-start pt-10">
          <div className="glass-card p-16 rounded-3xl border-white/10 w-full flex flex-col items-center bg-white/5">
            <div className="mb-8 opacity-80">
              {slide.icon}
            </div>
            <h2 className="text-5xl font-black mb-12 uppercase tracking-widest">
              {slide.title}
            </h2>
            <div className="text-center w-full">
              {slide.content}
            </div>
          </div>
        </div>
      )}

      {slide.type === "content" && (
        <div className="flex flex-col h-full w-full max-w-[1100px] mx-auto">
          <div className="flex items-center gap-6 mb-8 border-b-4 border-white/10 pb-6">
            <span className={`px-8 py-2 rounded-full border-4 font-black text-3xl ${
              slide.theme === 'green' ? 'border-[#00ff9d] text-[#00ff9d] bg-[#00ff9d]/10' : 
              slide.theme === 'pink' ? 'border-[#ff2a6d] text-[#ff2a6d] bg-[#ff2a6d]/10' : 
              slide.theme === 'cyan' ? 'border-[#00e5ff] text-[#00e5ff] bg-[#00e5ff]/10' :
              slide.theme === 'yellow' ? 'border-[#ffea00] text-[#ffea00] bg-[#ffea00]/10' :
              'border-[#b026ff] text-[#b026ff] bg-[#b026ff]/10'
            }`}>
              {slide.session}
            </span>
            <h2 className="text-4xl font-black tracking-tight">
              {slide.sessionTitle}
            </h2>
          </div>
          
          <div className="glass-card p-10 rounded-3xl flex-grow flex flex-col justify-start pt-10 bg-white/5 border border-white/10">
            <div className={`flex items-center gap-5 text-3xl font-black mb-8 pb-6 border-b-4 border-dashed border-white/10`}>
              {slide.cardIcon}
              {slide.cardTitle}
            </div>
            
            <div className="space-y-6">
              {slide.items?.map((item, i) => (
                <div key={i} className="space-y-4">
                  <h3 className="text-3xl font-black flex items-center gap-5">
                    <div className="w-2 h-8 rounded-full bg-white/20" />
                    {item.title}
                  </h3>
                  {item.desc && <p className="text-2xl opacity-70 leading-relaxed pl-10 font-bold">{item.desc}</p>}
                  {item.highlight && (
                    <div className="p-8 rounded-r-2xl border-l-[10px] border-white/30 bg-white/5">
                      <p className="text-2xl leading-relaxed font-black">{item.highlight}</p>
                    </div>
                  )}
                  {item.subItems && (
                    <ul className="space-y-2 pl-14">
                      {item.subItems.map((sub: string, j: number) => (
                        <li key={j} className="text-xl opacity-70 flex gap-4 font-bold">
                          <span>→</span>
                          {sub}
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
        <div className="flex flex-col h-full w-full max-w-[1150px] mx-auto">
          <div className="flex items-center gap-6 mb-8 border-b-4 border-white/10 pb-6">
            <span className={`px-8 py-2 rounded-full border-4 font-black text-3xl ${
              slide.theme === 'green' ? 'border-[#00ff9d] text-[#00ff9d] bg-[#00ff9d]/10' : 
              slide.theme === 'pink' ? 'border-[#ff2a6d] text-[#ff2a6d] bg-[#ff2a6d]/10' : 
              slide.theme === 'cyan' ? 'border-[#00e5ff] text-[#00e5ff] bg-[#00e5ff]/10' :
              slide.theme === 'yellow' ? 'border-[#ffea00] text-[#ffea00] bg-[#ffea00]/10' :
              'border-[#b026ff] text-[#b026ff] bg-[#b026ff]/10'
            }`}>
              {slide.session}
            </span>
            <h2 className="text-4xl font-black tracking-tight">
              {slide.sessionTitle}
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-8 flex-grow">
            {slide.cards?.map((card, i) => (
              <div key={i} className="glass-card p-8 rounded-3xl flex flex-col justify-start pt-8 bg-white/5 border border-white/10">
                <div className="flex items-center gap-5 text-2xl font-black mb-6 pb-4 border-b-4 border-dashed border-white/10">
                  {card.icon}
                  {card.title}
                </div>
                <ul className="space-y-4 flex-grow">
                  {card.items?.map((item: string, j: number) => (
                    <li key={j} className="text-xl opacity-70 flex gap-4 leading-relaxed font-bold">
                      <span>▶</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {slide.type === "summary" && (
        <div className="flex flex-col items-center justify-start h-full w-full pt-10">
          <div className="glass-card p-12 rounded-3xl border-white/10 w-full max-w-[1000px] flex flex-col items-center bg-black/60">
            <div className="mb-6 opacity-80">
              {slide.icon}
            </div>
            <h2 className="text-2xl font-black mb-4 uppercase tracking-widest opacity-60">
              {slide.title}
            </h2>
            <h1 className="text-6xl font-black mb-10 text-center leading-tight">
              "{slide.mainQuote}"
            </h1>
            
            <div className="w-full space-y-6">
              {slide.items?.map((item, i) => (
                <div key={i} className="flex items-center gap-6 text-2xl font-bold">
                  <strong className="min-w-[300px] font-black">{item.label}</strong>
                  <div className="h-px flex-grow bg-white/10" />
                  <span className="opacity-70">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="absolute bottom-8 right-12 text-white/20 text-xl font-bold">
        {dayTitle}
      </div>
    </div>
  );
};

export default function PdfDownloadButton() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentRenderSlide, setCurrentRenderSlide] = useState<{ slide: SlideData; day: string } | null>(null);

  const downloadPdf = async () => {
    setIsGenerating(true);
    setProgress(0);

    try {
      const allSlides = [
        ...day1Slides.map(s => ({ slide: s, day: "Day 01" })),
        ...day2Slides.map(s => ({ slide: s, day: "Day 02" })),
        ...day3Slides.map(s => ({ slide: s, day: "Day 03" })),
        ...day4Slides.map(s => ({ slide: s, day: "Day 04" }))
      ];

      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'px',
        format: [1280, 720]
      });

      const renderContainer = document.getElementById('pdf-render-container');
      if (!renderContainer) return;

      for (let i = 0; i < allSlides.length; i++) {
        const item = allSlides[i];
        setCurrentRenderSlide(item);
        setProgress(Math.round(((i + 1) / allSlides.length) * 100));

        // Wait for React to render the slide
        await new Promise(resolve => setTimeout(resolve, 150));

        const canvas = await html2canvas(renderContainer, {
          scale: 1,
          useCORS: true,
          backgroundColor: '#0a0a0f',
          width: 1280,
          height: 720,
          logging: false
        });

        const imgData = canvas.toDataURL('image/jpeg', 0.8);
        
        if (i > 0) {
          pdf.addPage([1280, 720], 'landscape');
        }
        
        pdf.addImage(imgData, 'JPEG', 0, 0, 1280, 720);
      }

      pdf.save('MICE_Training_Presentation.pdf');
      setCurrentRenderSlide(null);
    } catch (error) {
      console.error("PDF Generation Error:", error);
    } finally {
      setIsGenerating(false);
      setProgress(0);
    }
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={downloadPdf}
        disabled={isGenerating}
        className={`flex items-center gap-3 px-6 py-3 rounded-full border transition-all ${
          isGenerating 
            ? 'bg-white/5 border-white/10 text-white/30 cursor-not-allowed' 
            : 'bg-cyan-neon/10 border-cyan-neon/30 text-cyan-neon hover:bg-cyan-neon/20 hover:border-cyan-neon/50'
        }`}
      >
        {isGenerating ? (
          <Loader2 size={20} className="animate-spin" />
        ) : (
          <Download size={20} />
        )}
        <span className="font-bold">
          {isGenerating ? `PDF 생성 중... (${progress}%)` : '전체 강의 교안 PDF 다운로드 (Day 1-4)'}
        </span>
      </motion.button>
      {isGenerating && (
        <div className="w-full max-w-xs h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-cyan-neon"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />
        </div>
      )}
      
      {/* Hidden container for rendering slides */}
      <div 
        id="pdf-render-container" 
        className="fixed left-[-9999px] top-0 pointer-events-none"
        style={{ width: '1280px', height: '720px' }}
      >
        {currentRenderSlide && (
          <SlideRenderer 
            slide={currentRenderSlide.slide} 
            dayTitle={currentRenderSlide.day} 
          />
        )}
      </div>
    </div>
  );
}
