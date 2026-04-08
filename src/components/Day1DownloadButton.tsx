import React, { useState } from "react";
import { Download, Loader2, CheckCircle2 } from "lucide-react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { day1Slides } from "../data/slides";

// We'll create a hidden container to render slides for PDF generation
const PDFGenerator: React.FC<{ onComplete: (blob: Blob) => void; isGenerating: boolean }> = ({ onComplete, isGenerating }) => {
  if (!isGenerating) return null;

  return (
    <div id="pdf-render-container" className="fixed top-[-9999px] left-[-9999px] w-[1200px] bg-bg-base text-white p-20 space-y-20">
      <div className="text-center space-y-4 mb-20">
        <h1 className="text-5xl font-black text-cyan-neon">AI를 활용한 MICE인재 양성과정</h1>
        <h2 className="text-3xl font-bold text-white">1일차: 기본 계획 및 사업 기반 구축</h2>
      </div>

      {day1Slides.map((slide, index) => (
        <div key={index} className="slide-page border-b border-white/10 pb-20 mb-20">
          <div className="flex items-center gap-4 mb-8">
            <span className="px-4 py-1 rounded-full border border-cyan-neon text-cyan-neon text-sm font-bold">
              PAGE {index + 1}
            </span>
            <h3 className="text-2xl font-black text-white">
              {slide.type === 'title' ? slide.title : (slide as any).sessionTitle || slide.title}
            </h3>
          </div>

          {slide.type === 'title' && (
            <div className="py-20 text-center space-y-6">
              <p className="text-4xl font-black text-white">{slide.title}</p>
              <p className="text-2xl text-cyan-neon">{slide.subtitle}</p>
            </div>
          )}

          {slide.type === 'content' && slide.items?.map((item, i) => (
            <div key={i} className="mb-10 p-8 bg-white/5 rounded-2xl border border-white/10">
              <h4 className="text-xl font-bold text-cyan-neon mb-4">{item.title}</h4>
              {item.desc && <p className="text-lg text-white/80 mb-4">{item.desc}</p>}
              {item.highlight && <p className="text-lg font-black text-white mb-4 italic">"{item.highlight}"</p>}
              {item.subItems && (
                <ul className="grid grid-cols-1 gap-2">
                  {item.subItems.map((sub, j) => (
                    <li key={j} className="text-base text-white/70 flex gap-2">
                      <span className="text-cyan-neon">→</span> {sub}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {slide.type === 'grid' && (
            <div className="grid grid-cols-2 gap-6">
              {slide.cards?.map((card, i) => (
                <div key={i} className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <h4 className="text-lg font-bold text-cyan-neon mb-4">{card.title}</h4>
                  <ul className="space-y-2">
                    {card.items?.map((item, j) => (
                      <li key={j} className="text-sm text-white/70 flex gap-2">
                        <span className="text-cyan-neon">▶</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export const Day1DownloadButton: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'generating' | 'success' | 'error'>('idle');

  const handleDownload = async () => {
    setStatus('generating');
    try {
      // Small delay to ensure the hidden container is rendered
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const container = document.getElementById('pdf-render-container');
      if (!container) throw new Error("Container not found");

      const canvas = await html2canvas(container, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#0a0a0c',
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [canvas.width / 2, canvas.height / 2]
      });

      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width / 2, canvas.height / 2);
      pdf.save('MICE_Master_Day1_Curriculum.pdf');
      
      setStatus('success');
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      console.error("PDF Generation failed:", error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <>
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleDownload();
        }}
        disabled={status === 'generating'}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all text-xs font-bold ${
          status === 'success' 
            ? 'bg-green-neon/20 border-green-neon text-green-neon' 
            : status === 'error'
            ? 'bg-red-500/20 border-red-500 text-red-500'
            : 'bg-white/5 border-white/10 hover:border-cyan-neon/50 text-white/60 hover:text-white'
        }`}
      >
        {status === 'generating' ? (
          <>
            <Loader2 size={14} className="animate-spin" />
            <span>생성 중...</span>
          </>
        ) : status === 'success' ? (
          <>
            <CheckCircle2 size={14} />
            <span>완료</span>
          </>
        ) : (
          <>
            <Download size={14} />
            <span>PDF</span>
          </>
        )}
      </button>

      {/* Hidden generator */}
      <PDFGenerator isGenerating={status === 'generating'} onComplete={() => {}} />
    </>
  );
};
