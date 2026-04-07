import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronLeft, 
  ChevronRight, 
  Target, 
  Server, 
  TowerControl as Tower, 
  ListChecks, 
  Mic2, 
  Clapperboard, 
  Contact, 
  Gift, 
  Clock, 
  Briefcase, 
  Radio, 
  TriangleAlert, 
  Crown, 
  FolderOpen, 
  Truck, 
  Boxes, 
  Receipt, 
  PiggyBank, 
  BookOpenCheck, 
  Lightbulb,
  X
} from "lucide-react";

interface Day4PresentationProps {
  onClose: () => void;
}

export default function Day4Presentation({ onClose }: Day4PresentationProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Slide 1: Title
    {
      type: "title",
      badge: "[4일차] 제4~5단계",
      title: "현장 실행 및\n사후 관리 마스터",
      subtitle: "(D-Day ~ After)",
      theme: "orange"
    },
    // Slide 2: Goals
    {
      type: "goal",
      theme: "orange",
      icon: <Target size={80} />,
      title: "교육 목표",
      content: (
        <p className="text-4xl md:text-5xl text-text-sub leading-relaxed text-center font-bold">
          리허설을 통해 모든 변수를 제거하고 <strong className="text-white font-black">‘실전 운영의 주도권’</strong>을 확보하며,<br /><br />
          행사 종료 후 정밀한 정산과 결과 보고를 통해<br /><strong className="text-orange-neon font-black">사업의 유종의 미를 거둠.</strong>
        </p>
      ),
    },
    // Slide 3: [13교시] 1. 하드웨어/인프라 (1)
    {
      type: "content",
      theme: "orange",
      session: "[13교시]",
      sessionTitle: "현장의 긴박함: 최종 장비 셋업 및 다단계 리허설",
      cardTitle: "1. 하드웨어 및 인프라 최종 검수 (Technical Audit)",
      cardIcon: <Server size={32} />,
      items: [
        {
          title: "영상 시스템 최적화",
          highlight: "메인 LED 및 보조 스크린의 화이트 밸런스 조정 및 죽은 픽셀 유무 확인. 발표 자료의 슬라이드 비율 최적화 및 최종 스크린 띄우기 검수."
        }
      ]
    },
    // Slide 4: [13교시] 1. 하드웨어/인프라 (2)
    {
      type: "content",
      theme: "orange",
      session: "[13교시]",
      sessionTitle: "현장의 긴박함: 최종 장비 셋업 및 다단계 리허설",
      cardTitle: "1. 하드웨어 및 인프라 최종 검수 (음향 & 통신)",
      cardIcon: <Tower size={32} />,
      items: [
        {
          title: "음향 및 통신 정밀 튜닝",
          subItems: [
            "음향 시스템: 행사장 전 구역 음압 테스트 및 하울링 방지. 마이크 배터리 잔량 및 주파수 혼선 방지 스캔.",
            "통신 보안: 전용 회선 속도 실측 및 스트리밍 연동 확인. 비상용 LTE 라우터 배치 및 스태프 Wi-Fi 보안 유지."
          ]
        }
      ]
    },
    // Slide 5: [13교시] 2. 단계별 리허설 (1)
    {
      type: "content",
      theme: "orange",
      session: "[13교시]",
      sessionTitle: "현장의 긴박함: 최종 장비 셋업 및 다단계 리허설",
      cardTitle: "2. 단계별 리허설 수행 매뉴얼 (Rehearsal Protocol)",
      cardIcon: <ListChecks size={32} />,
      items: [
        {
          title: "기술 리허설 (Tech-Rehearsal)",
          subItems: [
            "기술 스태프 간 무전 통신 및 Q-sign 신호 완벽 확인.",
            "큐시트의 모든 전환 점검 (영상 → 암전 → 조명 → 마이크) 100% 실시."
          ]
        }
      ]
    },
    // Slide 6: [13교시] 2. 단계별 리허설 (2)
    {
      type: "grid",
      theme: "orange",
      session: "[13교시]",
      sessionTitle: "현장의 긴박함: 최종 장비 셋업 및 다단계 리허설",
      cards: [
        {
          title: "사회자 및 연사 리허설",
          icon: <Mic2 size={32} />,
          items: [
            "Speaker Check: 사회자 발음 및 속도 조절, 연사 클릭커 반응 속도 확인.",
            "동선 교정: 내빈 등단 가이드 요원 위치 및 시상식 동선 정밀 조정."
          ]
        },
        {
          title: "통합 드레스 리허설",
          icon: <Clapperboard size={32} />,
          items: [
            "Final Dress: 실제 의상/장비 사용하여 전체 행사 실제 소요 시간 측정.",
            "Cross-check: 발생 문제점 즉각 수정 및 오퍼레이터 간 변동 사항 실시간 공유."
          ]
        }
      ]
    },
    // Slide 7: [14교시] 1. 참가자 영접 및 등록 (1)
    {
      type: "content",
      theme: "cyan",
      session: "[14교시]",
      sessionTitle: "실전 운영: 현장 주도권 확보 및 프로그램 관리",
      cardTitle: "1. 참가자 영접 및 등록 시스템 운영 (Registration & Flow)",
      cardIcon: <Contact size={32} />,
      items: [
        {
          title: "등록 데스크 운영 최적화",
          subItems: [
            "초스피드 입장: 바코드/QR 스캔을 통한 Speedy Check-in 및 현장 등록 프로세스 이원화.",
            "병목 해소: 인파 밀집 시 유도 라인 즉시 재배치 및 스태프 유동 배치를 통한 동선 분산."
          ]
        }
      ]
    },
    // Slide 8: [14교시] 1. 참가자 영접 및 등록 (2)
    {
      type: "content",
      theme: "cyan",
      session: "[14교시]",
      sessionTitle: "실전 운영: 현장 주도권 확보 및 프로그램 관리",
      cardTitle: "1. 참가자 영접: 기념품 및 제작물 배포",
      cardIcon: <Gift size={32} />,
      items: [
        {
          title: "재고 모니터링 체계",
          desc: "기념품 수량 실시간 모니터링 및 잔여 수량 부족 시 즉각적인 보고 체계 가동."
        },
        {
          title: "명찰 오류 비상 대응",
          highlight: "현장 명찰 오타 발생 시 즉석에서 바로 재발행할 수 있는 비상 장비(라벨 프린터 등) 상시 대기 필수."
        }
      ]
    },
    // Slide 9: [14교시] 2. 정시 운영 및 큐시트 (1)
    {
      type: "content",
      theme: "cyan",
      session: "[14교시]",
      sessionTitle: "실전 운영: 현장 주도권 확보 및 프로그램 관리",
      cardTitle: "2. 프로그램 정시 운영 및 큐시트 매니지먼트 (Show Running)",
      cardIcon: <Clock size={32} />,
      items: [
        {
          title: "타임 키핑 (Time Management)",
          highlight: "연사 시간 초과 시 시각적 신호 전달 및 사회자의 유연한 시간 조절(Bridge Ment) 유도."
        },
        {
          title: "오차 범위 통제",
          desc: "각 순서 종료 시간 실시간 체크하여 전체 행사 지연을 오차 범위(±5분) 이내로 관리."
        }
      ]
    },
    // Slide 10: [14교시] 2. 정시 운영 및 큐시트 (2)
    {
      type: "content",
      theme: "cyan",
      session: "[14교시]",
      sessionTitle: "실전 운영: 현장 주도권 확보 및 프로그램 관리",
      cardTitle: "2. 현장 운영본부(Secretariat)의 핵심 기능",
      cardIcon: <Briefcase size={32} />,
      items: [
        {
          title: "진행 상황 기록 및 케이터링 연동",
          subItems: [
            "실시간 기록: 현장 스케치 사진/영상 확보 및 주요 인사 발언 요약 기록.",
            "케이터링 동기화: 프로그램 종료 시점과 유기적 연동으로 최적의 식사 상태 유지."
          ]
        }
      ]
    },
    // Slide 11: [14교시] 3. 실시간 현장 소통
    {
      type: "goal",
      theme: "cyan",
      icon: <Radio size={80} />,
      title: "3. 실시간 현장 소통 및 장악",
      content: (
        <div className="text-left max-w-4xl mx-auto space-y-6 text-3xl font-bold text-text-sub">
          <p>무전기 보고 체계 엄수: <span className="text-white font-black">[상황 발생 → 조치 내용 → 결과 보고]</span> 3단계 준수.</p>
          <p>참가자 민원 관리: 실내 적정 온도 수시 체크 및 화장실 소모품 비치 등 <span className="text-cyan-neon font-black">미세 품질 관리 철저.</span></p>
        </div>
      ),
    },
    // Slide 12: [15교시] 1. 돌발 사고 대응
    {
      type: "content",
      theme: "yellow",
      session: "[15교시]",
      sessionTitle: "위기 대응 및 의전 완결: 리스크 매니지먼트",
      cardTitle: "1. 현장 돌발 사고 대응 및 복구 (Incident Response)",
      cardIcon: <TriangleAlert size={32} />,
      items: [
        {
          title: "기술 및 안전 사고 대응",
          subItems: [
            "기술 사고: 영상 끊김 시 즉각 백업 전환 및 사회자 애드립 유도. 마이크 하울링 시 즉각 Mute 후 예비 투입.",
            "안전 사고: 응급 환자 발생 시 의무실 이송 및 핫라인 가동. 사고 경위서 필수 작성으로 책임 소재 증빙 확보."
          ]
        }
      ]
    },
    // Slide 13: [15교시] 2. VIP 의전
    {
      type: "content",
      theme: "yellow",
      session: "[15교시]",
      sessionTitle: "위기 대응 및 의전 완결: 리스크 매니지먼트",
      cardTitle: "2. VIP 의전의 전문적 완결 (High-level Protocol)",
      cardIcon: <Crown size={32} />,
      items: [
        {
          title: "영접 및 무대 연출",
          desc: "VIP 1:1 수행 및 전용 대기실 보안 유지. 의전 서열 준수 좌석 안내.",
          highlight: "기념 촬영 시 대형 가이드라인 제시 및 소품 신속 전달. 축사 시 마이크 높이 및 원고 배치 확인."
        }
      ]
    },
    // Slide 14: [15교시] 3. 현장 행정 증빙
    {
      type: "goal",
      theme: "yellow",
      icon: <FolderOpen size={80} />,
      title: "3. 현장 행정 및 증빙 자산화",
      content: (
        <div className="text-left max-w-4xl mx-auto space-y-6 text-3xl font-bold text-text-sub">
          <p>핵심 장면 아카이빙: 결과보고서용 필수 컷(전경, VIP 등) <span className="text-white font-black">누락 없이 촬영.</span></p>
          <p>만족도 조사 실시: QR코드/설문지로 피드백 <span className="text-yellow-neon font-black">실시간 수집 및 데이터화.</span></p>
        </div>
      ),
    },
    // Slide 15: [16교시] 1. 신속한 철거
    {
      type: "content",
      theme: "orange",
      session: "[16교시]",
      sessionTitle: "프로젝트의 완결: 철거, 정산 및 사후 관리",
      cardTitle: "1. 신속한 철거 및 자산 회수 (Tear-down & Load-out)",
      cardIcon: <Truck size={32} />,
      items: [
        {
          title: "물류 반출 및 원상 복구",
          desc: "임차 비품 수량 확인 및 파손 점검 후 업체 반납.",
          highlight: "철거 완료 후 베뉴 담당자와 공동 검수하여 사후 손해배상 분쟁 원천 차단."
        }
      ]
    },
    // Slide 16: [16교시] 1. 자산 회수
    {
      type: "goal",
      theme: "orange",
      icon: <Boxes size={80} />,
      title: "주요 자산의 오피스 이송",
      content: (
        <p className="text-3xl md:text-4xl text-text-sub leading-relaxed text-center font-bold">
          재사용 가능한 배너, 잔여 기념품, 핵심 비품의<br />
          <strong className="text-orange-neon font-black">회수 목록을 철저히 작성</strong>하고<br /><br />
          본사 오피스로 <strong className="text-white font-black">안전하게 운송을 완료</strong>합니다.
        </p>
      ),
    },
    // Slide 17: [16교시] 2. 정밀 정산
    {
      type: "content",
      theme: "orange",
      session: "[16교시]",
      sessionTitle: "프로젝트의 완결: 철거, 정산 및 사후 관리",
      cardTitle: "2. 정밀 정산 및 재무 마감 (Settlement & Finance)",
      cardIcon: <Receipt size={32} />,
      items: [
        {
          title: "협력업체 정산 및 예산 분석",
          desc: "투입 인력/장비 최종 수량 확정 및 협력사 정산서 신속 취합.",
          highlight: "실행 예산 대비 차익 분석을 통해 최종 프로젝트 수익률(ROI) 산출."
        }
      ]
    },
    // Slide 18: [16교시] 2. 적자 방지
    {
      type: "goal",
      theme: "orange",
      icon: <PiggyBank size={80} />,
      title: "적자 방지 및 Fee 보호 전략",
      content: (
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-3xl font-bold text-text-sub leading-relaxed">
            발주처의 추가 요구 사항에 대한 비용 청구 여부 단호히 협의.<br /><br />
            운영사의 핵심 이윤인 <span className="text-orange-neon font-black text-5xl">Management Fee</span>를<br />최종적으로 확정하고 보호합니다.
          </p>
        </div>
      ),
    },
    // Slide 19: [16교시] 3. 결과 보고
    {
      type: "content",
      theme: "orange",
      session: "[16교시]",
      sessionTitle: "프로젝트의 완결: 철거, 정산 및 사후 관리",
      cardTitle: "3. 결과 보고 및 사업의 자산화 (Final Report & Archiving)",
      cardIcon: <BookOpenCheck size={32} />,
      items: [
        {
          title: "종합 결과보고 및 사후 관리",
          subItems: [
            "결과보고서: 목적 달성도, 통계 분석, 홍보 실적, 만족도 결과 및 개선안 포함.",
            "행정 절차: 발주처 공식 사업 완료계 제출 및 최종 잔금 청구 진행.",
            "사후 네트워킹: 연사/VIP 대상 감사 서신 발송 및 하이라이트 영상 공유."
          ]
        }
      ]
    },
    // Slide 20: 4일차 핵심 요약
    {
      type: "summary",
      theme: "orange",
      icon: <Lightbulb size={80} />,
      title: "[4일차 정리 교안]",
      mainQuote: "끝까지 웃으며 마무리하는 것이 전문가이다",
      items: [
        { label: "실행과 사후관리", text: "실행은 순발력과 담대함, 사후 관리는 정교함과 책임감의 영역." },
        { label: "진정한 마침표", text: "화려한 조명이 꺼진 뒤, 완벽한 서류와 정산으로 증명되는 것이 전문가의 마침표." }
      ]
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-orange-neon/5 rounded-full blur-[120px] pointer-events-none" />

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
        className="absolute left-8 top-1/2 -translate-y-1/2 z-[100] p-4 rounded-full border border-orange-neon/30 text-orange-neon hover:bg-orange-neon hover:text-bg-base transition-all disabled:opacity-20 disabled:cursor-not-allowed"
      >
        <ChevronLeft size={32} />
      </button>
      <button 
        onClick={nextSlide}
        disabled={currentSlide === slides.length - 1}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-[100] p-4 rounded-full border border-orange-neon/30 text-orange-neon hover:bg-orange-neon hover:text-bg-base transition-all disabled:opacity-20 disabled:cursor-not-allowed"
      >
        <ChevronRight size={32} />
      </button>

      <div className="relative z-10 w-full max-w-[95vw] h-[90vh] flex flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.02, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-full h-full flex flex-col justify-center break-keep"
          >
            {slide.type === "title" && (
              <div className="text-center flex flex-col items-center justify-center h-full">
                <div className="inline-block px-8 py-3 rounded-full border-2 border-orange-neon bg-orange-neon/10 mb-8">
                  <span className="text-orange-neon text-2xl font-black tracking-widest" style={{ textShadow: '0 0 10px rgba(255, 140, 0, 0.5)' }}>
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
              <div className="flex flex-col items-center">
                <div className="glass-card p-20 rounded-3xl border-orange-neon/30 max-w-[85vw] w-full flex flex-col items-center">
                  <div className="text-orange-neon mb-12">
                    {slide.icon}
                  </div>
                  <h2 className="text-6xl font-black text-orange-neon mb-16 font-display uppercase tracking-widest">
                    {slide.title}
                  </h2>
                  {slide.content}
                </div>
              </div>
            )}

            {slide.type === "content" && (
              <div className="flex flex-col h-full w-full max-w-[90vw] mx-auto overflow-hidden">
                <div className="flex items-center gap-6 mb-8 border-b-4 border-white/10 pb-6">
                  <span className={`px-8 py-2 rounded-full border-4 font-black text-3xl ${
                    slide.theme === 'green' ? 'border-green-neon text-green-neon bg-green-neon/10' : 
                    slide.theme === 'pink' ? 'border-pink-neon text-pink-neon bg-pink-neon/10' : 
                    slide.theme === 'cyan' ? 'border-cyan-neon text-cyan-neon bg-cyan-neon/10' :
                    slide.theme === 'yellow' ? 'border-yellow-neon text-yellow-neon bg-yellow-neon/10' :
                    slide.theme === 'orange' ? 'border-orange-neon text-orange-neon bg-orange-neon/10' :
                    'border-purple-neon text-purple-neon bg-purple-neon/10'
                  }`}>
                    {slide.session}
                  </span>
                  <h2 className="text-5xl font-display text-white font-black tracking-tight">
                    {slide.sessionTitle}
                  </h2>
                </div>
                
                <div className="glass-card p-12 rounded-4xl flex-grow flex flex-col justify-center shadow-2xl overflow-hidden">
                  <div className={`flex items-center gap-5 text-4xl font-black mb-8 pb-6 border-b-4 border-dashed ${
                    slide.theme === 'green' ? 'text-green-neon border-green-neon/30' : 
                    slide.theme === 'pink' ? 'text-pink-neon border-pink-neon/30' : 
                    slide.theme === 'cyan' ? 'text-cyan-neon border-cyan-neon/30' :
                    slide.theme === 'yellow' ? 'text-yellow-neon border-yellow-neon/30' :
                    slide.theme === 'orange' ? 'text-orange-neon border-orange-neon/30' :
                    'text-purple-neon border-purple-neon/30'
                  }`}>
                    {slide.cardIcon}
                    {slide.cardTitle}
                  </div>
                  
                  <div className="space-y-8">
                    {slide.items?.map((item, i) => (
                      <div key={i} className="space-y-6">
                        <h3 className="text-4xl font-black text-white flex items-center gap-5">
                          <div className={`w-3 h-10 rounded-full ${
                            slide.theme === 'green' ? 'bg-green-neon' : 
                            slide.theme === 'pink' ? 'bg-pink-neon' : 
                            slide.theme === 'cyan' ? 'bg-cyan-neon' :
                            slide.theme === 'yellow' ? 'bg-yellow-neon' :
                            slide.theme === 'orange' ? 'bg-orange-neon' :
                            'bg-purple-neon'
                          }`} />
                          {item.title}
                        </h3>
                        {item.desc && <p className="text-3xl text-text-sub leading-relaxed pl-12 font-bold break-keep">{item.desc}</p>}
                        {item.highlight && (
                          <div className={`p-10 rounded-r-3xl border-l-[12px] bg-white/5 ${
                            slide.theme === 'green' ? 'border-green-neon' : 
                            slide.theme === 'pink' ? 'border-pink-neon' : 
                            slide.theme === 'cyan' ? 'border-cyan-neon' :
                            slide.theme === 'yellow' ? 'border-yellow-neon' :
                            slide.theme === 'orange' ? 'border-orange-neon' :
                            'border-purple-neon'
                          }`}>
                            <p className="text-3xl text-white leading-relaxed font-black break-keep">{item.highlight}</p>
                          </div>
                        )}
                        {item.subItems && (
                          <ul className="space-y-4 pl-16">
                            {item.subItems.map((sub, j) => (
                              <li key={j} className="text-2xl text-text-sub flex gap-5 font-bold break-keep">
                                <span className={
                                  slide.theme === 'green' ? 'text-green-neon' : 
                                  slide.theme === 'pink' ? 'text-pink-neon' : 
                                  slide.theme === 'cyan' ? 'text-cyan-neon' :
                                  slide.theme === 'yellow' ? 'text-yellow-neon' :
                                  slide.theme === 'orange' ? 'text-orange-neon' :
                                  'text-purple-neon'
                                }>→</span>
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
                <div className="flex items-center gap-6 mb-8 border-b-4 border-white/10 pb-6">
                  <span className={`px-8 py-2 rounded-full border-4 font-black text-3xl ${
                    slide.theme === 'green' ? 'border-green-neon text-green-neon bg-green-neon/10' : 
                    slide.theme === 'pink' ? 'border-pink-neon text-pink-neon bg-pink-neon/10' : 
                    slide.theme === 'cyan' ? 'border-cyan-neon text-cyan-neon bg-cyan-neon/10' :
                    slide.theme === 'yellow' ? 'border-yellow-neon text-yellow-neon bg-yellow-neon/10' :
                    slide.theme === 'orange' ? 'border-orange-neon text-orange-neon bg-orange-neon/10' :
                    'border-purple-neon text-purple-neon bg-purple-neon/10'
                  }`}>
                    {slide.session}
                  </span>
                  <h2 className="text-5xl font-display text-white font-black tracking-tight">
                    {slide.sessionTitle}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-grow overflow-hidden">
                  {slide.cards?.map((card, i) => (
                    <div key={i} className="glass-card p-10 rounded-4xl flex flex-col justify-center shadow-2xl overflow-hidden">
                      <div className={`flex items-center gap-5 text-3xl font-black mb-6 pb-4 border-b-4 border-dashed ${
                        slide.theme === 'green' ? 'text-green-neon border-green-neon/30' : 
                        slide.theme === 'pink' ? 'text-pink-neon border-pink-neon/30' : 
                        slide.theme === 'cyan' ? 'text-cyan-neon border-cyan-neon/30' :
                        slide.theme === 'yellow' ? 'text-yellow-neon border-yellow-neon/30' :
                        slide.theme === 'orange' ? 'text-orange-neon border-orange-neon/30' :
                        'text-purple-neon border-purple-neon/30'
                      }`}>
                        {card.icon}
                        {card.title}
                      </div>
                      <ul className="space-y-6 flex-grow">
                        {card.items?.map((item, j) => (
                          <li key={j} className="text-2xl text-text-sub flex gap-5 leading-relaxed font-bold break-keep">
                            <span className={
                              slide.theme === 'green' ? 'text-green-neon' : 
                              slide.theme === 'pink' ? 'text-pink-neon' : 
                              slide.theme === 'cyan' ? 'text-cyan-neon' :
                              slide.theme === 'yellow' ? 'text-yellow-neon' :
                              slide.theme === 'orange' ? 'text-orange-neon' :
                              'text-purple-neon'
                            }>▶</span>
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
              <div className="flex flex-col items-center justify-center h-full">
                <div className="glass-card p-12 rounded-4xl border-orange-neon/30 max-w-[85vw] w-full flex flex-col items-center bg-black/80">
                  <div className="text-orange-neon mb-6 drop-shadow-[0_0_30px_rgba(255, 140, 0, 0.5)]">
                    {slide.icon}
                  </div>
                  <h2 className="text-3xl font-black text-white mb-4 font-display uppercase tracking-widest">
                    {slide.title}
                  </h2>
                  <h1 className="text-5xl md:text-7xl font-black text-orange-neon mb-10 text-center leading-tight">
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
                ? "w-8 bg-orange-neon shadow-[0_0_10px_rgba(255, 140, 0, 0.8)]" 
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
