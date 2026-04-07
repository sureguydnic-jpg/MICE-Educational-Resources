import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronLeft, 
  ChevronRight, 
  Target, 
  FileEdit, 
  Network, 
  MapPin, 
  Layout, 
  FileSignature, 
  Handshake, 
  ChartPie, 
  ArrowLeftRight, 
  AlertTriangle, 
  Scale, 
  Headset, 
  ListChecks, 
  UserPlus, 
  Laptop, 
  Crown, 
  Utensils, 
  Gift, 
  Wand2, 
  Megaphone, 
  Contact, 
  Flag, 
  Lightbulb,
  X
} from "lucide-react";

interface Day1PresentationProps {
  onClose: () => void;
}

export default function Day1Presentation({ onClose }: Day1PresentationProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Slide 1: Title
    {
      type: "title",
      badge: "[1일차] 제1단계",
      title: "기본 계획 및\n사업 기반 구축",
      subtitle: "(Base Building)",
    },
    // Slide 2: Goals
    {
      type: "goal",
      icon: <Target size={80} />,
      title: "교육 목표",
      content: (
        <p className="text-4xl md:text-5xl text-text-sub leading-relaxed text-center font-bold">
          PCO 실무자로서 <strong className="text-white font-black">사업의 전체 설계도를 완성</strong>하고,<br /><br />
          현장 운영을 위한 <strong className="text-cyan-neon font-black">법적·행정적·재무적 방어선</strong>을 구축함.
        </p>
      ),
    },
    // Slide 3: [1교시] 1. 제안서의 실행화
    {
      type: "content",
      session: "[1교시]",
      sessionTitle: "프로젝트 설계 및 베뉴 마스터링",
      cardTitle: "1. 제안서의 실행화 (Proposal to Action Plan)",
      cardIcon: <FileEdit size={32} />,
      items: [
        {
          title: "기획의 현실화 프로세스",
          desc: "입찰 시 제출한 제안서(Proposal) 내의 과다한 공약이나 실현 불가능한 아이디어를 예산 범위 내로 철저히 조정합니다.",
          subItems: [
            "실행계획서(Action Plan) 작성: 행사의 목적, 개요, 조직도, 세부 추진 일정, 공간 활용 계획을 담은 공식 문서화.",
            "과업지시서(SOW) 분석: 발주처가 요구하는 필수 과업과 추가 서비스 과업을 명확히 분리하여 업무 우선순위 설정."
          ]
        }
      ]
    },
    // Slide 4: [1교시] 1. 승인 및 보고 체계
    {
      type: "content",
      session: "[1교시]",
      sessionTitle: "프로젝트 설계 및 베뉴 마스터링",
      cardTitle: "1. 승인 및 보고 체계 확립",
      cardIcon: <Network size={32} />,
      items: [
        {
          title: "의사결정의 문서화 (Responsibility)",
          highlight: "모든 의사결정은 서면(Email/공문)으로 남기는 것을 원칙으로 하여 책임 소재를 명확히 합니다."
        },
        {
          title: "정기 회의 채널 구축",
          desc: "발주처 담당자와의 정기 회의 주기(주간/월간) 및 보고 양식을 사전에 합의하여 소통의 오류를 방지합니다."
        }
      ]
    },
    // Slide 5: [1교시] 2. 현장 실측 필수 체크
    {
      type: "content",
      session: "[1교시]",
      sessionTitle: "프로젝트 설계 및 베뉴 마스터링",
      cardTitle: "2. 행사장 환경 분석 및 장악: 현장 실측",
      cardIcon: <MapPin size={32} />,
      items: [
        {
          title: "현장 실측(Site Survey) 필수 체크리스트",
          subItems: [
            "전기 및 통신: 행사장 내 가용 전기 용량(kW), 유무선 인터넷(LAN/Wi-Fi) 속도 및 안정성 완벽 확인.",
            "물류 동선: 화물 엘리베이터의 규격, 하중 제한, 반입구(Loading Dock)부터 전시장/회의실까지의 최단 거리 파악.",
            "부대시설: VIP 대기실, 사무국 운영실, 창고 공간, 수유실 및 흡연 구역 등 편의시설 위치 정확히 점검."
          ]
        }
      ]
    },
    // Slide 6: [1교시] 2. 배치도 및 대관 계약 (2 Column)
    {
      type: "grid",
      session: "[1교시]",
      sessionTitle: "프로젝트 설계 및 베뉴 마스터링",
      cards: [
        {
          title: "공간 배치도 (Floor Plan)",
          icon: <Layout size={32} />,
          items: [
            "도면 설계 안전성 확보: 소방법에 따른 비상구 확보 및 통로 너비 준수 여부 필수 확인.",
            "가시선(Sightline) 체크: 기둥이나 구조물에 의해 무대나 스크린이 가려지는 사각지대 파악 및 좌석 배치 세밀 조정."
          ]
        },
        {
          title: "대관 계약 (Contracting)",
          icon: <FileSignature size={32} />,
          items: [
            "대관 시간의 함정: 준비 시간(Set-up)과 철거 시간(Tear-down)의 연장 사용료 및 시간 단위 요금 사전 파악.",
            "기본 비품 체크: 베뉴 측 제공 기본 비품(테이블, 의자, 포디움 등) 수량 및 상태 세부 점검."
          ]
        }
      ]
    },
    // Slide 7: [1교시] 3. 협력업체 파트너십
    {
      type: "content",
      session: "[1교시]",
      sessionTitle: "프로젝트 설계 및 베뉴 마스터링",
      cardTitle: "3. 협력업체 파트너십 구축 (Vendor Selection)",
      cardIcon: <Handshake size={32} />,
      items: [
        {
          title: "분야별 업체 선정 기준",
          desc: "무대, 음향, 조명, 영상, 통역, 시스템 등 각 파트너사의 최신 장비 보유 현황 및 최근 3년 내 유사 행사 실적을 엄격히 검토합니다."
        },
        {
          title: "견적 비교 및 네고 (Negotiation)",
          highlight: "최소 2~3개 업체의 비교 견적(Quotation)을 통해 적정 시장가를 정확히 파악하고 단가 조정을 진행합니다."
        }
      ]
    },
    // Slide 8: [2교시] 1. 수익 중심 예산 편성
    {
      type: "content",
      theme: "green",
      session: "[2교시]",
      sessionTitle: "재무 전략 및 안전 방어선 구축",
      cardTitle: "1. 수익 중심의 예산 편성 (Budgeting Strategy)",
      cardIcon: <ChartPie size={32} />,
      items: [
        {
          title: "실행 예산서 (Internal Budget) 정밀 구조",
          subItems: [
            "수입 항목: 발주처 대행 사업비, 참가비 수익, 후원/협찬금 등 유입 자금 총계 정밀 산출.",
            "지출 항목: 직접비(인건비, 임차료, 제작비, 장비비 등)와 간접비(일반관리비) 철저히 분리.",
            "수익성 확보: 운영사의 대행 수수료(Management Fee)를 선확보하고, 불필요한 외주비를 줄이는 비용 최적화(Cost-cutting) 기법 적용."
          ]
        }
      ]
    },
    // Slide 9: [2교시] 1. 현금 흐름 관리
    {
      type: "content",
      theme: "green",
      session: "[2교시]",
      sessionTitle: "재무 전략 및 안전 방어선 구축",
      cardTitle: "현금 흐름 (Cash Flow) 관리",
      cardIcon: <ArrowLeftRight size={32} />,
      items: [
        {
          title: "대금 지급 시점 파악",
          desc: "선금(Down Payment), 중도금, 잔금 지급 시점을 명확히 파악하여 운영사의 자금 압박을 사전 방지합니다."
        },
        {
          title: "예비비 (Contingency Fund) 운영 철칙",
          highlight: "총예산의 5~10%를 반드시 별도 편성하여 현장의 돌발 변수(인원 대거 추가, 시간 지연 연장 등)에 완벽 대응해야 합니다."
        }
      ]
    },
    // Slide 10: [2교시] 2. 안전관리 체계 (1)
    {
      type: "grid",
      theme: "green",
      session: "[2교시]",
      sessionTitle: "재무 전략 및 안전 방어선 구축",
      cards: [
        {
          title: "위험성 평가 (Risk Assessment)",
          icon: <AlertTriangle size={32} />,
          items: [
            "인파 밀집 (Crowd Management): 압사 사고 방지를 위한 진/출입 동선 철저 계획.",
            "장소별 물리적 위험 요소: 전기 과부하로 인한 화재, 미끄러운 바닥재에 의한 전도(넘어짐) 사고 등 구역별 식별."
          ]
        },
        {
          title: "안전관리 법적 의무 준수",
          icon: <Scale size={32} />,
          items: [
            "법정 안전관리 요원: 행사 규모별 규정된 배치 인원 및 요원의 전문 자격 소지 여부 교차 확인.",
            "보험 가입 (Insurance): 행사 개최자 배상책임보험, 단기 상해보험 필수 가입 및 세부 보장 범위 검토."
          ]
        }
      ]
    },
    // Slide 11: [2교시] 2. 안전관리 체계 (2)
    {
      type: "content",
      theme: "green",
      session: "[2교시]",
      sessionTitle: "재무 전략 및 안전 방어선 구축",
      cardTitle: "비상 대응 매뉴얼 (Emergency Plan) 구축",
      cardIcon: <Headset size={32} />,
      items: [
        {
          title: "비상 핫라인(Hot-line) 가동",
          desc: "현장 운영본부 ↔ 유관기관(경찰, 소방, 보건소) ↔ 인근 병원 응급실 간의 즉각적인 연락망을 구축합니다."
        },
        {
          title: "대피 시나리오 체계화",
          highlight: "화재 및 긴급 상황 시뮬레이션을 반영한 대피 안내 방송 시나리오 작성 및 행사장 구역별 대피 동선 표지판 설치 계획 수립."
        }
      ]
    },
    // Slide 12: [3교시] 1. 프로그램 마스터 플랜
    {
      type: "content",
      theme: "pink",
      session: "[3교시]",
      sessionTitle: "프로그램 구조화 및 콘텐츠 매니지먼트",
      cardTitle: "1. 프로그램 마스터 플랜 (Program Architecture)",
      cardIcon: <ListChecks size={32} />,
      items: [
        {
          title: "전체 일정표 (Timeline) 설계",
          desc: "개막식, 기조강연, 분과 세션, 환영 리셉션 등 전체 일정을 유기적으로 치밀하게 배치."
        },
        {
          title: "시나리오 및 큐시트 (Cue-Sheet) 초안 마련",
          subItems: [
            "초 단위 흐름표: 영상 재생 시점, 조명 전환 포인트, 사회자 멘트 등을 명시.",
            "맞춤형 대본: 사회자(MC) 및 연사별 특성에 맞는 맞춤형 스크립트 작성 준비."
          ]
        }
      ]
    },
    // Slide 13: [3교시] 2. 연사/VIP 섭외 확약
    {
      type: "content",
      theme: "pink",
      session: "[3교시]",
      sessionTitle: "프로그램 구조화 및 콘텐츠 매니지먼트",
      cardTitle: "2. 강연자 및 VIP 케어: 섭외 및 확약",
      cardIcon: <UserPlus size={32} />,
      items: [
        {
          title: "섭외 요청서 (Invitation Letter)",
          desc: "공식 초청장 발송 및 모든 출연 조건(강연료, 항공, 숙박, 의전 수준)에 대한 구체적 협의 완료."
        },
        {
          title: "확약서 (Confirmation) 필수 수령",
          highlight: "당일 발생할 수 있는 노쇼(No-show)를 완벽히 방지하기 위해 공식 참여 확인서(확약서) 수령을 의무화합니다."
        }
      ]
    },
    // Slide 14: [3교시] 2. 연사/VIP 자료 의전
    {
      type: "grid",
      theme: "pink",
      session: "[3교시]",
      sessionTitle: "프로그램 구조화 및 콘텐츠 매니지먼트",
      cards: [
        {
          title: "발표 자료 매니지먼트",
          icon: <Laptop size={32} />,
          items: [
            "강연자 원고(PPT) 최종본 사전 취합.",
            "자료 내 영상/음원 포함 여부 테스트.",
            "저작권 활용 동의서 필수 확보."
          ]
        },
        {
          title: "의전 (Protocol) 가이드라인",
          icon: <Crown size={32} />,
          items: [
            "내빈 서열에 따른 정확한 좌석 배치(Seating Plan).",
            "VIP 영접 및 환송 최적 동선 확보.",
            "전용 대기실(Green Room) 운영 및 다과 준비."
          ]
        }
      ]
    },
    // Slide 15: [3교시] 3. 식음(F&B) 기획
    {
      type: "content",
      theme: "pink",
      session: "[3교시]",
      sessionTitle: "프로그램 구조화 및 콘텐츠 매니지먼트",
      cardTitle: "3. 식음(F&B) 기획 (Hospitality)",
      cardIcon: <Utensils size={32} />,
      items: [
        {
          title: "메뉴 구성 및 업체 선정",
          desc: "행사의 성격(격식 있는 만찬 vs 캐주얼한 스탠딩 리셉션)에 따른 최적의 케이터링 형식 결정."
        },
        {
          title: "특수 식단 (Special Meal) 사전 조사 의무화",
          highlight: "채식(Vegan), 할랄(Halal), 특정 알레르기 보유자를 사전에 파악하여 소외되는 참가자 없이 완벽한 별도 식단을 제공해야 합니다."
        }
      ]
    },
    // Slide 16: [3교시] 3. 기념품 기획
    {
      type: "goal",
      theme: "pink",
      icon: <Gift size={80} />,
      title: "기념품 (Souvenir) 전략",
      content: (
        <div className="text-center">
          <p className="text-3xl md:text-4xl text-text-sub leading-relaxed mb-10 font-bold">
            참가자의 연령, 국적, 성별 트렌드를 다각도로 고려하여 호응도가 높은 품목을 선정합니다.
          </p>
          <div className="p-10 bg-pink-neon/5 border-l-[12px] border-pink-neon rounded-r-xl">
            <p className="text-3xl text-white font-black">
              가장 중요한 것은 <strong className="text-pink-neon font-black">제작 리드타임(Lead Time) 확인!</strong><br />
              품절 및 배송 지연을 감안한 안전한 발주 일정을 수립해야 합니다.
            </p>
          </div>
        </div>
      ),
    },
    // Slide 17: [4교시] 1. 비주얼 브랜딩
    {
      type: "content",
      session: "[4교시]",
      sessionTitle: "브랜딩 및 행정 지원 시스템",
      cardTitle: "1. 비주얼 브랜딩 및 제작물 발주 관리",
      cardIcon: <Wand2 size={32} />,
      items: [
        {
          title: "키 비주얼 (Key Visual) 개발 및 확장",
          desc: "행사 목적을 시각화한 메인 그래픽 톤앤매너(Look & Feel) 확정 후, 웹/앱/SNS/현수막/명찰에 일관되게 적용."
        },
        {
          title: "제작물 리스트 (Production List) 및 데드라인 관리",
          highlight: "모든 제작물의 수량, 규격, 재질, 가공 방식을 리스트업하여 중복 발주 및 예산 낭비를 원천 차단. 인쇄 및 배송 기간을 고려하여 디자인 확정 마감일(Deadline)을 역산하여 설정."
        }
      ]
    },
    // Slide 18: [4교시] 2. 참가자 모집 및 등록
    {
      type: "grid",
      session: "[4교시]",
      sessionTitle: "브랜딩 및 행정 지원 시스템",
      cards: [
        {
          title: "홍보 로드맵 수립",
          icon: <Megaphone size={32} />,
          items: [
            "공식 홈페이지 오픈 일정",
            "정기 뉴스레터 발송 주기",
            "SNS 타겟 광고 송출 시점",
            "언론 보도자료 배포 시점"
          ]
        },
        {
          title: "온라인 등록 시스템 구축",
          icon: <Contact size={32} />,
          items: [
            "참가 신청 데이터베이스(DB): 필수 수집 항목 설계 및 개인정보 처리 방침(법적 요건) 수립.",
            "결제 및 알림 시스템: 입금 확인/영수증 발행 자동 연동 및 사전 신청자 대상 알림톡(Push) 발송 계획."
          ]
        }
      ]
    },
    // Slide 19: [4교시] 3. 공식 사업 착수
    {
      type: "content",
      session: "[4교시]",
      sessionTitle: "브랜딩 및 행정 지원 시스템",
      cardTitle: "3. 공식 사업 착수 및 행정 보고 (Kick-off)",
      cardIcon: <Flag size={32} />,
      items: [
        {
          title: "착수 보고회 (Kick-off Meeting)",
          desc: "추진 조직도, 파트별 세부 실행 전략, 리스크 관리 방안을 담은 착수 보고서(Inception Report) 발표. 발주처 ↔ 운영사 간 공식 실무 협의 채널(이메일, 단톡방 등) 확정."
        },
        {
          title: "작업 분할 구조 (WBS) 최종 승인",
          highlight: "수백 가지 세부 과업을 날짜/담당자별로 쪼갠 상세 일정표(WBS)에 대해 발주처의 최종 컨펌을 받아 향후 업무 주도권과 방어선을 확보합니다."
        }
      ]
    },
    // Slide 20: 1일차 핵심 요약
    {
      type: "summary",
      icon: <Lightbulb size={80} />,
      title: "[1일차 정리 교안]",
      mainQuote: "기초가 부실하면 현장은 무너집니다.",
      items: [
        { label: "문서화 (Documentation)", text: "모든 구두 합의는 반드시 회의록(Minutes)으로 남길 것." },
        { label: "수익성 (Profitability)", text: "단순히 행사를 치르는 것을 넘어, 운영사의 이익 구조를 설계 단계에서 지킬 것." },
        { label: "안전 (Safety First)", text: "'설마' 하는 상황에 대비한 이중, 삼중의 안전망을 1단계에서 구축할 것." }
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
        className="absolute left-8 top-1/2 -translate-y-1/2 z-[100] p-4 rounded-full border border-cyan-neon/30 text-cyan-neon hover:bg-cyan-neon hover:text-bg-base transition-all disabled:opacity-20 disabled:cursor-not-allowed"
      >
        <ChevronLeft size={32} />
      </button>
      <button 
        onClick={nextSlide}
        disabled={currentSlide === slides.length - 1}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-[100] p-4 rounded-full border border-cyan-neon/30 text-cyan-neon hover:bg-cyan-neon hover:text-bg-base transition-all disabled:opacity-20 disabled:cursor-not-allowed"
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
                <div className="inline-block px-8 py-3 rounded-full border-2 border-cyan-neon bg-cyan-neon/10 mb-8">
                  <span className="neon-text-cyan text-cyan-neon text-2xl font-black tracking-widest">
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
                <div className="glass-card p-20 rounded-3xl border-cyan-neon/30 max-w-[85vw] w-full flex flex-col items-center">
                  <div className="text-cyan-neon mb-12">
                    {slide.icon}
                  </div>
                  <h2 className="text-6xl font-black text-cyan-neon mb-16 font-display uppercase tracking-widest">
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
                    'border-cyan-neon text-cyan-neon bg-cyan-neon/10'
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
                    'text-cyan-neon border-cyan-neon/30'
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
                            'bg-cyan-neon'
                          }`} />
                          {item.title}
                        </h3>
                        {item.desc && <p className="text-3xl text-text-sub leading-relaxed pl-12 font-bold break-keep">{item.desc}</p>}
                        {item.highlight && (
                          <div className={`p-10 rounded-r-3xl border-l-[12px] bg-white/5 ${
                            slide.theme === 'green' ? 'border-green-neon' : 
                            slide.theme === 'pink' ? 'border-pink-neon' : 
                            'border-cyan-neon'
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
                                  'text-cyan-neon'
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
                    'border-cyan-neon text-cyan-neon bg-cyan-neon/10'
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
                        'text-cyan-neon border-cyan-neon/30'
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
                              'text-cyan-neon'
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
                <div className="glass-card p-12 rounded-4xl border-yellow-neon/30 max-w-[85vw] w-full flex flex-col items-center bg-black/80">
                  <div className="text-yellow-neon mb-6 drop-shadow-[0_0_30px_rgba(255,234,0,0.5)]">
                    {slide.icon}
                  </div>
                  <h2 className="text-3xl font-black text-white mb-4 font-display uppercase tracking-widest">
                    {slide.title}
                  </h2>
                  <h1 className="text-5xl md:text-7xl font-black text-yellow-neon mb-10 text-center leading-tight">
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
                ? "w-8 bg-cyan-neon shadow-[0_0_10px_rgba(0,229,255,0.8)]" 
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
