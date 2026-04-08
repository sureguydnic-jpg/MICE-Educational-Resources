import React, { useState } from "react";
import { Download, Loader2, CheckCircle2 } from "lucide-react";
import { jsPDF } from "jspdf";
import * as htmlToImage from 'html-to-image';
import { day1Slides } from "../data/slides";

// We'll create a hidden container to render slides for PDF generation
const PDFGenerator: React.FC<{ onComplete: (blob: Blob) => void; isGenerating: boolean }> = ({ onComplete, isGenerating }) => {
  if (!isGenerating) return null;

  // Standard hex colors to avoid html2canvas parsing errors (oklab/oklch)
  const colors = {
    bg: "#05080c",
    cyan: "#00e5ff",
    white: "#ffffff",
    textSub: "#b0c4de",
    cardBg: "rgba(255, 255, 255, 0.05)",
    border: "rgba(255, 255, 255, 0.1)"
  };

  return (
    <div 
      id="pdf-render-container" 
      style={{ 
        backgroundColor: colors.bg, 
        color: colors.white,
        position: 'fixed',
        top: '-9999px',
        left: '-9999px',
        width: '1200px',
        padding: '80px',
        fontFamily: 'sans-serif'
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
        <h1 style={{ fontSize: '48px', fontWeight: 900, color: colors.cyan, marginBottom: '16px' }}>AI를 활용한 MICE인재 양성과정</h1>
        <h2 style={{ fontSize: '30px', fontWeight: 700, color: colors.white }}>1일차: 기본 계획 및 사업 기반 구축</h2>
      </div>

      {day1Slides.map((slide, index) => (
        <div key={index} style={{ borderBottom: `1px solid ${colors.border}`, paddingBottom: '80px', marginBottom: '80px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
            <span style={{ 
              padding: '4px 16px', 
              borderRadius: '9999px', 
              border: `1px solid ${colors.cyan}`, 
              color: colors.cyan, 
              fontSize: '14px', 
              fontWeight: 700 
            }}>
              PAGE {index + 1}
            </span>
            <h3 style={{ fontSize: '24px', fontWeight: 900, color: colors.white }}>
              {slide.type === 'title' ? slide.title : (slide as any).sessionTitle || slide.title}
            </h3>
          </div>

          {slide.type === 'title' && (
            <div style={{ padding: '80px 0', textAlign: 'center' }}>
              <p style={{ fontSize: '36px', fontWeight: 900, color: colors.white, marginBottom: '24px', whiteSpace: 'pre-line' }}>{slide.title}</p>
              <p style={{ fontSize: '24px', color: colors.cyan }}>{slide.subtitle}</p>
            </div>
          )}

          {slide.type === 'content' && slide.items?.map((item, i) => (
            <div key={i} style={{ 
              marginBottom: '40px', 
              padding: '32px', 
              backgroundColor: colors.cardBg, 
              borderRadius: '16px', 
              border: `1px solid ${colors.border}` 
            }}>
              <h4 style={{ fontSize: '20px', fontWeight: 700, color: colors.cyan, marginBottom: '16px' }}>{item.title}</h4>
              {item.desc && <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', marginBottom: '16px' }}>{item.desc}</p>}
              {item.highlight && <p style={{ fontSize: '18px', fontWeight: 900, color: colors.white, marginBottom: '16px', fontStyle: 'italic' }}>"{item.highlight}"</p>}
              {item.subItems && (
                <ul style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px', listStyle: 'none', padding: 0 }}>
                  {item.subItems.map((sub, j) => (
                    <li key={j} style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', display: 'flex', gap: '8px' }}>
                      <span style={{ color: colors.cyan }}>→</span> {sub}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {slide.type === 'grid' && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              {slide.cards?.map((card, i) => (
                <div key={i} style={{ 
                  padding: '24px', 
                  backgroundColor: colors.cardBg, 
                  borderRadius: '16px', 
                  border: `1px solid ${colors.border}` 
                }}>
                  <h4 style={{ fontSize: '18px', fontWeight: 700, color: colors.cyan, marginBottom: '16px' }}>{card.title}</h4>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {card.items?.map((item, j) => (
                      <li key={j} style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', display: 'flex', gap: '8px' }}>
                        <span style={{ color: colors.cyan }}>▶</span> {item}
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

      // html-to-image is more robust with modern CSS (oklab/oklch)
      const dataUrl = await htmlToImage.toPng(container, {
        quality: 0.95,
        backgroundColor: '#05080c',
        pixelRatio: 2,
      });

      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: 'a4'
      });

      const imgProps = pdf.getImageProperties(dataUrl);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(dataUrl, 'PNG', 0, 0, pdfWidth, pdfHeight);
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
