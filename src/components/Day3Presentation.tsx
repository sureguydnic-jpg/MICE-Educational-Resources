import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronLeft, 
  ChevronRight, 
  Target, 
  SpellCheck, 
  Palette, 
  Box, 
  Truck, 
  Warehouse, 
  ShieldAlert, 
  Copy, 
  Gavel, 
  PersonStanding, 
  Users, 
  Presentation, 
  Radio, 
  Crown, 
  ListChecks, 
  Wrench, 
  Thermometer, 
  ClipboardList, 
  Flag, 
  Lightbulb,
  X
} from "lucide-react";

interface Day3PresentationProps {
  onClose: () => void;
}

export default function Day3Presentation({ onClose }: Day3PresentationProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Slide 1: Title
    {
      type: "title",
      badge: "[3일차] 제3단계",
      title: "현장 투입 전 완성화 및\n리스크 제로화",
      subtitle: "(D-15)",
      theme: "green"
    },
    // Slide 2: Goals
    {
      type: "goal",
      theme: "green",
      icon: <Target size={80} />,
      title: "교육 목표",
      content: (
        <p className="text-4xl md:text-5xl text-text-sub leading-relaxed text-center font-bold">
          모든 제작물과 시스템의 <strong className="text-white font-black">‘무결점 검수를 완료’</strong>하고,<br /><br />
          현장 운영 인력의 숙련도를 실전 수준으로 끌어올려<br />발생 가능한 <strong className="text-green-neon font-black">모든 리스크를 선제적으로 차단함.</strong>
        </p>
      ),
    },
    // Slide 3: [9교시] 1. 제작물 정밀 검수 (1)
    {
      type: "content",
      theme: "green",
      session: "[9교시]",
      sessionTitle: "시각물의 실체화: 제작물 검수 및 정밀 물류",
      cardTitle: "1. 제작물 정밀 검수 매뉴얼 (Visual & Content Audit)",
      cardIcon: <SpellCheck size={32} />,
      items: [
        {
          title: "내용 무결성 검토 (Proofreading)",
          highlight: "고유 명사 교차 검증: 모든 인쇄물의 연사 성함, 소속, 직함, 국적 표기 재확인. (특히 직함 오타는 행사의 신뢰도와 직결됨)"
        },
        {
          title: "오타 및 비문 수정",
          desc: "강연 제목, 일시, 장소(회의실 번호) 등 핵심 정보의 반복 확인."
        }
      ]
    },
    // Slide 4: [9교시] 1. 제작물 정밀 검수 (2)
    {
      type: "content",
      theme: "green",
      session: "[9교시]",
      sessionTitle: "시각물의 실체화: 제작물 검수 및 정밀 물류",
      cardTitle: "1. 디자인 및 제작 사양 최종 점검",
      cardIcon: <Palette size={32} />,
      items: [
        {
          title: "제작 품질 및 수량 관리",
          subItems: [
            "색상 감리: 키 비주얼의 브랜드 컬러가 출력소별로 다르게 나오지 않도록 색상 코드 일치 여부 확인.",
            "규격 및 마감 확인: 배너 거치대 타입, 현수막 설치 방식이 베뉴 환경과 부합하는지 점검.",
            "수량 확보 전략: 사전 등록 인원 대비 최소 10~15%의 여유분을 제작하여 현장 파손 및 추가 참석자 발생에 대비."
          ]
        }
      ]
    },
    // Slide 5: [9교시] 2. 물류 관리 (1)
    {
      type: "content",
      theme: "green",
      session: "[9교시]",
      sessionTitle: "시각물의 실체화: 제작물 검수 및 정밀 물류",
      cardTitle: "2. 체계적인 물류 관리 및 현장 반입 (Logistics & Load-in)",
      cardIcon: <Box size={32} />,
      items: [
        {
          title: "정밀 패킹 및 라벨링 (Inventory Labeling)",
          subItems: [
            "구역별 분류 (Zoning): 상자 겉면에 내용물, 수량, 현장 배치 구역을 대형 스티커로 명확히 표기.",
            "패킹 리스트 (Packing List) 작성: 총 몇 박스인지 번호를 매겨 운송 중 유실을 원천 방지."
          ]
        }
      ]
    },
    // Slide 6: [9교시] 2. 물류 관리 (2)
    {
      type: "grid",
      theme: "green",
      session: "[9교시]",
      sessionTitle: "시각물의 실체화: 제작물 검수 및 정밀 물류",
      cards: [
        {
          title: "운송 시나리오 및 하역",
          icon: <Truck size={32} />,
          items: [
            "배차 관리: 제작물 크기에 맞는 차량 수배 및 기사 연락처 확보.",
            "반입 우선순위: 무대/장치 구조물 → AV 시스템 → 디자인 홍보물 → 소모품 순으로 반입."
          ]
        },
        {
          title: "현장 임시 창고 운영",
          icon: <Warehouse size={32} />,
          items: [
            "보관 구역 점검: 베뉴 내 물품 보관 구역의 습도 및 보안 상태 철저 확인.",
            "수불 대장 관리: 물품이 나갈 때마다 담당자 사인을 받아 현장 분실 사고 원천 차단."
          ]
        }
      ]
    },
    // Slide 7: [10교시] 1. 안전 네트워크
    {
      type: "content",
      theme: "yellow",
      session: "[10교시]",
      sessionTitle: "무결점 방어선: 통합 안전망 및 위기관리",
      cardTitle: "1. 전방위적 안전 네트워크 구축 (Integrated Safety Network)",
      cardIcon: <ShieldAlert size={32} />,
      items: [
        {
          title: "유관기관 최종 협조 체계",
          subItems: [
            "경찰서, 소방서, 보건소/응급실과의 핫라인(Hot-line) 재확인.",
            "현장 도면 및 비상 대피 계획을 유관기관에 사전 공유하여 즉각 대응 체계 마련."
          ]
        },
        {
          title: "안전 요원 배치 및 전문 교육",
          desc: "입구, 에스컬레이터 앞 등 혼잡 예상 지점 확정 및 군중 밀집 관리 교육."
        }
      ]
    },
    // Slide 8: [10교시] 2. 이중화 시스템 (1)
    {
      type: "content",
      theme: "yellow",
      session: "[10교시]",
      sessionTitle: "무결점 방어선: 통합 안전망 및 위기관리",
      cardTitle: "2. 리스크 제로화를 위한 이중화 시스템 (Redundancy)",
      cardIcon: <Copy size={32} />,
      items: [
        {
          title: "기술적 위기 대응 전략",
          highlight: "장비 이중화: 메인 노트북 외 백업 노트북 동기화(Mirroring), 프로젝터 램프 비상용 대기, 메인 인터넷 외 LTE 라우터 등 비상 회선 확보."
        },
        {
          title: "음향 하울링 및 노이즈 방지",
          desc: "무선 마이크 주파수 혼선 여부 최종 스캔 및 전원 분리 작업 확인."
        }
      ]
    },
    // Slide 9: [10교시] 2. 이중화 시스템 (2)
    {
      type: "content",
      theme: "yellow",
      session: "[10교시]",
      sessionTitle: "무결점 방어선: 통합 안전망 및 위기관리",
      cardTitle: "2. 법적 및 행정적 리스크 방지",
      cardIcon: <Gavel size={32} />,
      items: [
        {
          title: "보험 증빙 완비",
          desc: "행사 영업배상책임보험 증권 사본 현장 비치."
        },
        {
          title: "사고 경위서 (Incident Report) 양식 준비",
          highlight: "사고 발생 시 즉각 기록하여 향후 보험 처리 및 책임 소재 증빙을 철저히 확보합니다."
        }
      ]
    },
    // Slide 10: [10교시] 3. 비상 상황 대응
    {
      type: "content",
      theme: "yellow",
      session: "[10교시]",
      sessionTitle: "무결점 방어선: 통합 안전망 및 위기관리",
      cardTitle: "3. 비상 상황 대응 멘트 및 시나리오 (Emergency Script)",
      cardIcon: <PersonStanding size={32} />,
      items: [
        {
          title: "상황별 안내 방송 시나리오",
          subItems: [
            "화재 발생, 정전, 지진, 의료 응급 환자 발생 시 사회자 및 안내 방송 담당자가 읽을 '표준 멘트' 확정 및 연습.",
            "대피 유도 훈련: 전 스태프가 비상구 위치와 소화기 위치를 암기하고, 실제 대피 동선을 직접 걸으며 확인."
          ]
        }
      ]
    },
    // Slide 11: [11교시] 1. 인력 운영 계획
    {
      type: "content",
      theme: "cyan",
      session: "[11교시]",
      sessionTitle: "운영의 핵심 주체: 인력 관리 및 현장 실무 오리엔테이션",
      cardTitle: "1. 인력 운영 계획의 정밀화 (HR Management)",
      cardIcon: <Users size={32} />,
      items: [
        {
          title: "직무 설명서 (Job Description) 고도화",
          desc: "각 스태프가 담당할 위치(Position), 상세 업무 내용, 상급 보고자(PM/파트리더), 무전 호출 명칭을 명확히 명시."
        },
        {
          title: "근무 및 휴식 시간표 (Shift Table)",
          highlight: "8시간 이상의 장시간 행사를 고려하여 식사 시간 및 15분 단위의 순환 휴식 시간표 작성 (공백 없는 현장 운영 유지)."
        }
      ]
    },
    // Slide 12: [11교시] 2. 현장 오리엔테이션 (1)
    {
      type: "content",
      theme: "cyan",
      session: "[11교시]",
      sessionTitle: "운영의 핵심 주체: 인력 관리 및 현장 실무 오리엔테이션",
      cardTitle: "2. 현장 오리엔테이션 (Field Orientation) 교육 내용",
      cardIcon: <Presentation size={32} />,
      items: [
        {
          title: "공간 장악 교육",
          desc: "전 스태프가 베뉴의 구조를 완벽히 숙지하도록 투어 실시 (화장실, 의무실, 사무국, 주차장 위치 등)."
        },
        {
          title: "고객 응대 및 CS 매뉴얼 실습",
          subItems: [
            "표준 응대: '안녕하십니까, 무엇을 도와드릴까요?', '잠시만 기다려 주시면 확인 후 안내하겠습니다.'",
            "불만 고객 대응: 논쟁 금지, 즉각 상급자 보고, 별도 공간 안내 절차 숙지."
          ]
        }
      ]
    },
    // Slide 13: [11교시] 2. 현장 오리엔테이션 (2)
    {
      type: "goal",
      theme: "cyan",
      icon: <Radio size={80} />,
      title: "무전기 소통 프로토콜 (Radio Protocol)",
      content: (
        <div className="text-left max-w-4xl mx-auto space-y-8">
          <p className="text-4xl font-black text-pink-neon">1. 불필요한 사담 및 대화 절대 금지!</p>
          <p className="text-4xl font-bold text-white">2. 호출 후 상대방의 "카피 / 입도" 확인 후 메시지 전달.</p>
          <p className="text-4xl font-bold text-white">3. 메시지 전달 종료 시 반드시 "이상" 명시.</p>
        </div>
      ),
    },
    // Slide 14: [11교시] 3. VIP 및 특수 인력
    {
      type: "content",
      theme: "cyan",
      session: "[11교시]",
      sessionTitle: "운영의 핵심 주체: 인력 관리 및 현장 실무 오리엔테이션",
      cardTitle: "3. VIP 전담 의전팀 및 특수 인력 점검",
      cardIcon: <Crown size={32} />,
      items: [
        {
          title: "VIP 의전 시트 최종 검수",
          desc: "도착 예정 시간 변경 여부, 차량 번호, 수행원 수, 선호 음료 정보 최종 업데이트."
        },
        {
          title: "의전 동선 최종 시뮬레이션",
          desc: "차량 하차 지점(Drop-off)부터 전용 엘리베이터, 무대 등단까지의 '전용 동선'에 장애물이나 유동 인구가 섞이지 않는지 확인."
        }
      ]
    },
    // Slide 15: [12교시] 1. 큐시트 최종 점검
    {
      type: "content",
      theme: "green",
      session: "[12교시]",
      sessionTitle: "현장 장악: 최종 시뮬레이션 및 행사장 인수",
      cardTitle: "1. 통합 큐시트 및 시나리오 최종 정합성 점검",
      cardIcon: <ListChecks size={32} />,
      items: [
        {
          title: "타임라인 대조",
          desc: "2단계에서 작성된 큐시트의 소요 시간(Duration)이 연사들의 최종 발표 자료 분량과 정확히 일치하는지 최종 확인."
        },
        {
          title: "시상식 및 퍼포먼스 소품 점검",
          highlight: "상장 케이스와 내지 일치 여부, 트로피 상태 확인, 퍼포먼스용 특수효과 잔량 및 작동 테스트 완료."
        }
      ]
    },
    // Slide 16: [12교시] 2. 베뉴 기술 점검
    {
      type: "content",
      theme: "green",
      session: "[12교시]",
      sessionTitle: "현장 장악: 최종 시뮬레이션 및 행사장 인수",
      cardTitle: "2. 베뉴(Venue) 시설물 기술 점검 (Technical Walk-through)",
      cardIcon: <Wrench size={32} />,
      items: [
        {
          title: "기술 파트별 최종 점검",
          subItems: [
            "영상 파트: LED 전광판의 데드 픽셀 확인 및 노트북 해상도 최적화.",
            "음향 파트: 행사장 전 구역 음압 평준화 작업 및 하울링 포인트 체크.",
            "조명 파트: 무대 위 연사 얼굴에 그림자가 지지 않는지 확인 및 암전 수준 점검."
          ]
        }
      ]
    },
    // Slide 17: [12교시] 2. 부대시설 확인
    {
      type: "goal",
      theme: "green",
      icon: <Thermometer size={80} />,
      title: "부대시설 최종 확인의 중요성",
      content: (
        <div className="text-left max-w-4xl mx-auto space-y-6 text-3xl font-bold text-text-sub">
          <p>1. 냉난방 적정 온도 <span className="text-green-neon font-black">(22~24도)</span> 설정.</p>
          <p>2. 회의실 내 쓰레기통 비움 상태 점검.</p>
          <p>3. 화장실 소모품 비치 여부 등 <span className="text-white font-black">참가자 불만이 생길 수 있는 미세 품질 관리.</span></p>
        </div>
      ),
    },
    // Slide 18: [12교시] 3. 무결점 체크리스트
    {
      type: "content",
      theme: "green",
      session: "[12교시]",
      sessionTitle: "현장 장악: 최종 시뮬레이션 및 행사장 인수",
      cardTitle: "3. 무결점 체크리스트 (Zero-Defect Checklist) 가동",
      cardIcon: <ClipboardList size={32} />,
      items: [
        {
          title: "D-1 최종 점검표 실행",
          highlight: "사인물 부착 위치 일치 여부, 등록 데스크 물품 배치 상태, 모든 노트북 전원 및 인터넷 연결 상태를 크로스 체크(Cross-check)합니다."
        }
      ]
    },
    // Slide 19: [12교시] 3. 최종 킥오프 미팅
    {
      type: "goal",
      theme: "green",
      icon: <Flag size={80} />,
      title: "최종 킥오프 미팅 (Final Kick-off)",
      content: (
        <p className="text-3xl md:text-4xl text-text-sub leading-relaxed text-center font-bold">
          PM 주재 하에 <strong className="text-white font-black">전체 스태프가 모여 행사의 핵심 성공 목표를 공유</strong>하고,<br /><br />
          사고 발생 시의 보고 체계를 재강조하며 <strong className="text-green-neon font-black">사기를 진작</strong>시킵니다.
        </p>
      ),
    },
    // Slide 20: 3일차 핵심 요약
    {
      type: "summary",
      theme: "green",
      icon: <Lightbulb size={80} />,
      title: "[3일차 정리 교안]",
      mainQuote: "PM은 의심하는 사람이다",
      items: [
        { label: "의심의 미학", text: "내가 직접 만져보고, 켜보고, 확인하지 않은 것은 모두 잠재적 사고 요인이라는 치열한 인식." },
        { label: "실전의 가치", text: "아무리 훌륭한 시나리오도 현장에서 스태프가 직접 움직이지 못하면 단순한 종이조각에 불과함." }
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-green-neon/5 rounded-full blur-[120px] pointer-events-none" />

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
        className="absolute left-8 top-1/2 -translate-y-1/2 z-[100] p-4 rounded-full border border-green-neon/30 text-green-neon hover:bg-green-neon hover:text-bg-base transition-all disabled:opacity-20 disabled:cursor-not-allowed"
      >
        <ChevronLeft size={32} />
      </button>
      <button 
        onClick={nextSlide}
        disabled={currentSlide === slides.length - 1}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-[100] p-4 rounded-full border border-green-neon/30 text-green-neon hover:bg-green-neon hover:text-bg-base transition-all disabled:opacity-20 disabled:cursor-not-allowed"
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
                <div className="inline-block px-8 py-3 rounded-full border-2 border-green-neon bg-green-neon/10 mb-8">
                  <span className="text-green-neon text-2xl font-black tracking-widest" style={{ textShadow: '0 0 10px rgba(0, 255, 157, 0.5)' }}>
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
                <div className="glass-card p-20 rounded-3xl border-green-neon/30 max-w-[85vw] w-full flex flex-col items-center">
                  <div className="text-green-neon mb-12">
                    {slide.icon}
                  </div>
                  <h2 className="text-6xl font-black text-green-neon mb-16 font-display uppercase tracking-widest">
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
                <div className="glass-card p-12 rounded-4xl border-green-neon/30 max-w-[85vw] w-full flex flex-col items-center bg-black/80">
                  <div className="text-green-neon mb-6 drop-shadow-[0_0_30px_rgba(0, 255, 157, 0.5)]">
                    {slide.icon}
                  </div>
                  <h2 className="text-3xl font-black text-white mb-4 font-display uppercase tracking-widest">
                    {slide.title}
                  </h2>
                  <h1 className="text-5xl md:text-7xl font-black text-green-neon mb-10 text-center leading-tight">
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
                ? "w-8 bg-green-neon shadow-[0_0_10px_rgba(0, 255, 157, 0.8)]" 
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
