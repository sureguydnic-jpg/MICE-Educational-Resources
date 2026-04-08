import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronLeft, 
  ChevronRight, 
  Coins, 
  FileSignature, 
  Coffee, 
  History, 
  CalendarCheck, 
  Moon, 
  Calculator, 
  FileText, 
  ShieldCheck, 
  Bot,
  X
} from "lucide-react";

interface LaborLawPresentationProps {
  onClose: () => void;
}

export default function LaborLawPresentation({ onClose }: LaborLawPresentationProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Slide 1: Title
    {
      type: "title",
      badge: "주.디엔아이씨 이 상 필 본부장",
      title: "2026년\n근로기준법 상식 가이드",
      subtitle: "현장 운영을 위한 핵심 필수 가이드 (개정판)",
      theme: "cyan"
    },
    // Slide 2: Index
    {
      type: "grid",
      theme: "cyan",
      session: "INDEX",
      sessionTitle: "근로기준법 핵심 요약 목차",
      cards: [
        {
          title: "01. 최저임금 & 209시간",
          icon: <Coins size={32} />,
          items: ["2026년 법정 최저시급 안내", "월 환산액 및 209시간의 산출 근거"]
        },
        {
          title: "02. 근로계약서 & 휴게시간",
          icon: <FileSignature size={32} />,
          items: ["미작성 시 법적 제재 사항", "법정 휴게시간 부여 원칙"]
        },
        {
          title: "03. 각종 수당 규정",
          icon: <Calculator size={32} />,
          items: ["연장/주휴/야간 근로수당 계산", "가산수당 및 중복 할증 규정"]
        }
      ]
    },
    // Slide 3: 최저임금
    {
      type: "content",
      theme: "cyan",
      session: "01",
      sessionTitle: "최저임금 안내",
      cardTitle: "2026년 최저임금 기준",
      cardIcon: <Coins size={32} />,
      items: [
        {
          title: "법정 최저시급 : 10,320원",
          desc: "전년(10,030원) 대비 290원 인상된 금액으로 모든 사업장에 예외 없이 적용됩니다."
        },
        {
          title: "월 환산액 : 2,156,880원",
          highlight: "주 40시간(월 209시간) 근무 기준이며, 주휴수당이 기본적으로 포함된 금액입니다."
        }
      ]
    },
    // Slide 4: 209시간
    {
      type: "goal",
      theme: "cyan",
      icon: <History size={80} />,
      title: "209시간이란? (월급의 산출 근거)",
      content: (
        <div className="text-center space-y-8">
          <div className="flex justify-center items-center gap-12 text-4xl font-bold text-text-sub">
            <div className="flex flex-col items-center">
              <span className="text-white text-5xl mb-2">173.8h</span>
              <span>기본 근로</span>
            </div>
            <span className="text-cyan-neon text-6xl">+</span>
            <div className="flex flex-col items-center">
              <span className="text-white text-5xl mb-2">35h</span>
              <span>주휴 시간</span>
            </div>
            <span className="text-cyan-neon text-6xl">=</span>
            <div className="flex flex-col items-center">
              <span className="text-cyan-neon text-7xl mb-2 font-black">209h</span>
              <span className="text-white">월 소정근로시간</span>
            </div>
          </div>
          <p className="text-2xl text-text-sub mt-12 break-keep">
            (40시간 + 8시간) × 4.345주 ≈ 208.8시간을 반올림하여 <strong className="text-white">209시간</strong>으로 통용합니다.
          </p>
        </div>
      ),
    },
    // Slide 5: 근로계약서
    {
      type: "content",
      theme: "cyan",
      session: "02",
      sessionTitle: "근로계약서 작성",
      cardTitle: "미작성 시 법적 제재 및 필수 항목",
      cardIcon: <FileText size={32} />,
      items: [
        {
          title: "벌금형 : 500만 원 이하",
          highlight: "근로계약서 미작성 및 미교부 시 사업주는 즉시 법적 제재를 받을 수 있습니다."
        },
        {
          title: "필수 포함 근로조건",
          subItems: [
            "임금 구성 항목, 계산 방법 및 지급 방법",
            "소정근로시간, 휴일, 연차 유급휴가 사항",
            "종사 업무 내용 및 근무 장소"
          ]
        }
      ]
    },
    // Slide 6: 휴게시간
    {
      type: "content",
      theme: "cyan",
      session: "03",
      sessionTitle: "법정 휴게시간 규정",
      cardTitle: "휴게시간 부여 원칙",
      cardIcon: <Coffee size={32} />,
      items: [
        {
          title: "근무 시간별 부여 기준",
          desc: "4시간 근무 시 30분 이상, 8시간 근무 시 1시간 이상의 휴게시간을 의무 부여해야 합니다."
        },
        {
          title: "부여 시점 및 이용 원칙",
          highlight: "반드시 근로시간 도중에 부여해야 하며, 근로자가 자유롭게 이용할 수 있어야 합니다."
        }
      ]
    },
    // Slide 7: 연장근로
    {
      type: "content",
      theme: "cyan",
      session: "04",
      sessionTitle: "연장근로 임금 계산",
      cardTitle: "연장근로 가산수당 (1.5배)",
      cardIcon: <Calculator size={32} />,
      items: [
        {
          title: "가산 기준 : 통상임금의 50%",
          desc: "1일 8시간 또는 주 40시간을 초과하는 근로에 대해 적용됩니다."
        },
        {
          title: "2026년 기준 연장 시급",
          highlight: "10,320원 × 1.5 = 15,480원"
        }
      ]
    },
    // Slide 8: 주휴수당
    {
      type: "content",
      theme: "cyan",
      session: "05",
      sessionTitle: "주휴수당 이해하기",
      cardTitle: "지급 조건 및 계산법",
      cardIcon: <CalendarCheck size={32} />,
      items: [
        {
          title: "지급 대상 : 주 15시간 이상 개근자",
          desc: "1주 동안 소정근로일을 개근한 근로자에게 1일치의 유급휴일 임금을 지급합니다."
        },
        {
          title: "1일 주휴수당 (8시간 기준)",
          highlight: "10,320원 × 8시간 = 82,560원"
        }
      ]
    },
    // Slide 9: 야간근로
    {
      type: "content",
      theme: "cyan",
      session: "06",
      sessionTitle: "야간근로수당 규정",
      cardTitle: "야간근로 정의 및 할증",
      cardIcon: <Moon size={32} />,
      items: [
        {
          title: "야간 시간대 : 22:00 ~ 익일 06:00",
          desc: "해당 시간 내 근로 시 통상임금의 50%를 추가 가산하여 지급합니다."
        },
        {
          title: "연장 + 야간 중복 시 (2.0배)",
          highlight: "기본(1.0) + 연장(0.5) + 야간(0.5) = 2.0배 (시급 20,640원)"
        }
      ]
    },
    // Slide 10: Thank you
    {
      type: "goal",
      theme: "cyan",
      icon: <Bot size={80} />,
      title: "감사합니다",
      content: (
        <div className="text-center">
          <p className="text-4xl text-white font-black mb-8">안전하고 적법한 현장 운영을 기원합니다.</p>
          <div className="inline-block px-12 py-4 rounded-full border-4 border-cyan-neon text-cyan-neon text-3xl font-black">
            주.디엔아이씨
          </div>
        </div>
      ),
    }
  ];

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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-cyan-neon/5 rounded-full blur-[120px] pointer-events-none" />

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
        className="absolute left-8 top-1/2 -translate-y-1/2 z-[100] p-2 text-cyan-neon hover:scale-125 transition-all disabled:opacity-20 disabled:cursor-not-allowed"
      >
        <ChevronLeft size={48} />
      </button>
      <button 
        onClick={nextSlide}
        disabled={currentSlide === slides.length - 1}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-[100] p-2 text-cyan-neon hover:scale-125 transition-all disabled:opacity-20 disabled:cursor-not-allowed"
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
                <div className="inline-block px-8 py-3 rounded-full border-2 border-cyan-neon bg-cyan-neon/10 mb-8">
                  <span className="text-cyan-neon text-2xl font-black tracking-widest" style={{ textShadow: '0 0 10px rgba(0, 229, 255, 0.5)' }}>
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
                  <div className="text-cyan-neon scale-50 origin-left">
                    {slide.icon}
                  </div>
                  <h2 className="text-2xl font-black text-cyan-neon font-display uppercase tracking-widest">
                    {slide.title}
                  </h2>
                </div>
                <div className="glass-card px-24 py-20 rounded-4xl border-cyan-neon/20 w-full flex flex-col items-center shadow-2xl">
                  <div className="w-full">
                    {slide.content}
                  </div>
                </div>
              </div>
            )}

            {slide.type === "content" && (
              <div className="flex flex-col h-full w-full max-w-[90vw] mx-auto overflow-hidden">
                <div className="flex items-center gap-4 mb-10">
                  <span className="px-6 py-1.5 rounded-full border-2 font-black text-xl shadow-lg border-cyan-neon text-cyan-neon bg-cyan-neon/10">
                    {slide.session}
                  </span>
                  <h2 className="text-3xl font-display text-white font-black tracking-widest uppercase">
                    {slide.sessionTitle}
                  </h2>
                  <div className="h-px flex-grow bg-white/20 ml-4" />
                  <span className="px-4 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-black text-white tracking-widest">
                    LABOR LAW GUIDE
                  </span>
                </div>
                
                <div className="flex-grow overflow-y-auto pr-4 custom-scrollbar">
                  <div className="grid grid-cols-1 gap-8 pb-12">
                    {slide.items?.map((item, i) => (
                      <div key={i} className="glass-card p-12 rounded-4xl border-white/10 shadow-2xl space-y-6 hover:border-white/30 transition-all">
                        <div className="flex items-center gap-5 text-4xl font-black pb-6 border-b-2 border-dashed text-cyan-neon border-cyan-neon/20">
                          {slide.cardIcon || <div className="w-3 h-10 rounded-full bg-cyan-neon" />}
                          {item.title}
                        </div>
                        
                        {item.desc && <p className="text-2xl text-white leading-relaxed font-medium break-keep pl-2">{item.desc}</p>}
                        
                        {item.highlight && (
                          <div className="p-10 rounded-2xl bg-white/5 border-l-[12px] border-cyan-neon">
                            <p className="text-2xl text-white leading-relaxed font-black break-keep">{item.highlight}</p>
                          </div>
                        )}
                        
                        {item.subItems && (
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-2">
                            {item.subItems.map((sub, j) => (
                              <li key={j} className="text-xl text-white flex gap-4 leading-relaxed font-bold break-keep items-start">
                                <span className="mt-1.5 text-cyan-neon">→</span>
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
              <div className="flex flex-col h-full w-full max-w-[92vw] mx-auto overflow-hidden">
                <div className="flex items-center gap-4 mb-10">
                  <span className="px-6 py-1.5 rounded-full border-2 font-black text-xl shadow-lg border-cyan-neon text-cyan-neon bg-cyan-neon/10">
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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 flex-grow overflow-y-auto pr-4 custom-scrollbar pb-12">
                  {slide.cards?.map((card, i) => (
                    <div key={i} className="glass-card p-12 rounded-4xl flex flex-col justify-start shadow-2xl hover:border-white/30 transition-all">
                      <div className="flex items-center gap-5 text-3xl font-black mb-8 pb-6 border-b-2 border-dashed text-cyan-neon border-cyan-neon/20">
                        <div className="scale-110 origin-left">{card.icon}</div>
                        {card.title}
                      </div>
                      <ul className="space-y-6 flex-grow">
                        {card.items?.map((item, j) => (
                          <li key={j} className="text-xl text-white flex gap-4 leading-relaxed font-bold break-keep items-start">
                            <span className="mt-1.5 text-cyan-neon">▶</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
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
                ? "w-8 bg-cyan-neon shadow-[0_0_10px_rgba(0, 229, 255, 0.8)]" 
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
