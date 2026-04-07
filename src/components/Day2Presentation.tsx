import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronLeft, 
  ChevronRight, 
  Target, 
  Network, 
  ListChecks, 
  Map, 
  AlertTriangle, 
  Mic2, 
  Route, 
  Sliders, 
  Timer, 
  ClipboardCheck, 
  Palette, 
  Truck, 
  Video, 
  Users, 
  Database, 
  UsersRound, 
  BookOpen, 
  Star, 
  Stamp, 
  Lightbulb,
  X
} from "lucide-react";

interface Day2PresentationProps {
  onClose: () => void;
}

export default function Day2Presentation({ onClose }: Day2PresentationProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Slide 1: Title
    {
      type: "title",
      badge: "[2일차] 제2단계",
      title: "실행의 구체화 및\n상세 설계",
      subtitle: "(D-45)",
      theme: "purple"
    },
    // Slide 2: Goals
    {
      type: "goal",
      theme: "purple",
      icon: <Target size={80} />,
      title: "교육 목표",
      content: (
        <p className="text-4xl md:text-5xl text-text-sub leading-relaxed text-center font-bold">
          확정된 기본 계획을 바탕으로 현장 운영의 성패를 결정짓는<br />
          <strong className="text-white font-black">‘실무 상세 매뉴얼’</strong>과 <strong className="text-white font-black">‘연출 대본’</strong>을 완성하고,<br /><br />
          모든 물적·인적 자원의 배치를 <strong className="text-purple-neon font-black">확정함.</strong>
        </p>
      ),
    },
    // Slide 3: [5교시] 1. 세부 실행계획서 (1)
    {
      type: "content",
      theme: "cyan",
      session: "[5교시]",
      sessionTitle: "운영의 표준: 상세 실행계획 및 파트별 운영 절차",
      cardTitle: "1. 세부 실행계획서 (Detailed Action Plan)의 심층 구성",
      cardIcon: <Network size={32} />,
      items: [
        {
          title: "과업별 프로세스 설계 (Workflow)",
          highlight: "각 과업의 시작부터 종료까지를 순서도(Flow-chart) 형태로 시각화하여 업무 병목 현상을 사전에 차단합니다."
        }
      ]
    },
    // Slide 4: [5교시] 1. 세부 실행계획서 (2)
    {
      type: "content",
      theme: "cyan",
      session: "[5교시]",
      sessionTitle: "운영의 표준: 상세 실행계획 및 파트별 운영 절차",
      cardTitle: "1. 표준 운영 절차 (SOP: Standard Operating Procedure) 수립",
      cardIcon: <ListChecks size={32} />,
      items: [
        {
          title: "운영 파트별 핵심 프로세스",
          subItems: [
            "등록 파트: 사전 등록자 확인 → 명찰 교부 → 기념품 증정 → 입동 안내 (Target: 30초 이내).",
            "안내/민원 파트: 자주 묻는 질문(FAQ) 리스트 작성, 주차권 배부 및 전시장 길 안내 표준 멘트 설정.",
            "사무국 운영: 소모품 재고 관리, 분실물 처리 대장 작성, 현장 긴급 지출 증빙 관리 프로세스 구축."
          ]
        }
      ]
    },
    // Slide 5: [5교시] 2. 베뉴 기술 사양서 (1)
    {
      type: "content",
      theme: "cyan",
      session: "[5교시]",
      sessionTitle: "운영의 표준: 상세 실행계획 및 파트별 운영 절차",
      cardTitle: "2. 베뉴 기술 사양서 (Technical Rider) 검토 및 공간 장악",
      cardIcon: <Network size={32} />,
      items: [
        {
          title: "공간별 하드웨어 배치 최적화",
          subItems: [
            "전기 및 네트워크: 무대 영상 전력과 조명 전력의 분리(노이즈 방지), 행사장 내 Wi-Fi 음영 구역 확인 및 전용 회선(LAN) 설치 위치 확정.",
            "물류 및 반입: 화물 승강기 크기와 무대 구조물의 규격 대조, 반입 차량의 대기 공간(Dock) 철저 점검."
          ]
        }
      ]
    },
    // Slide 6: [5교시] 2. 베뉴 기술 사양서 (2)
    {
      type: "content",
      theme: "cyan",
      session: "[5교시]",
      sessionTitle: "운영의 표준: 상세 실행계획 및 파트별 운영 절차",
      cardTitle: "2. 구역화(Zoning) 전략",
      cardIcon: <Map size={32} />,
      items: [
        {
          title: "통제 구역 (Backstage)",
          desc: "VIP 대기실, 운영진 사무실, 장비 제어실의 출입 권한(Access Control) 설정 및 보안 요원 배치 계획 수립."
        },
        {
          title: "공용 구역 (Public Area)",
          highlight: "로비의 병목 구간을 해소하기 위한 안내 사인물 배치 및 휴게 공간(Lounge) 조성 계획 수립."
        }
      ]
    },
    // Slide 7: [5교시] 3. 리스크 관리
    {
      type: "content",
      theme: "cyan",
      session: "[5교시]",
      sessionTitle: "운영의 표준: 상세 실행계획 및 파트별 운영 절차",
      cardTitle: "3. 리스크 관리 및 대응 시나리오 (Contingency Plan)",
      cardIcon: <AlertTriangle size={32} />,
      items: [
        {
          title: "상황별 비상 매뉴얼",
          subItems: [
            "기술 리스크: 프로젝터 램프 비상 상황, 마이크 혼선, 정전 시 예비 전력(UPS) 가동 절차.",
            "인적 리스크: 연사 노쇼(No-show) 시 대행 발표자 선정, 스태프 갑작스러운 이탈 시 백업 인력 투입 계획.",
            "안전 리스크: 화재 경보 시 대피 방송 멘트 및 구역별 탈출 동선 재확인."
          ]
        }
      ]
    },
    // Slide 8: [6교시] 1. 시나리오 고도화 (1)
    {
      type: "content",
      theme: "pink",
      session: "[6교시]",
      sessionTitle: "행사의 언어: 시나리오 및 기술 큐시트 마스터링",
      cardTitle: "1. 전방위적 시나리오 (Scripting) 고도화",
      cardIcon: <Mic2 size={32} />,
      items: [
        {
          title: "사회자 대본 (MC Script)의 입체적 구성",
          subItems: [
            "식순별 핵심 멘트: 오프닝(내빈 환영), 주요 외빈 소개(의전 서열 준수), 세션 전환 안내, 클로징 멘트.",
            "상황별 가교 멘트 (Bridge): 다음 순서 준비 지연 시 사용할 수 있는 보조 멘트 및 행사의 배경 설명 데이터 확보."
          ]
        }
      ]
    },
    // Slide 9: [6교시] 1. 시나리오 고도화 (2)
    {
      type: "content",
      theme: "pink",
      session: "[6교시]",
      sessionTitle: "행사의 언어: 시나리오 및 기술 큐시트 마스터링",
      cardTitle: "1. 동선 시나리오 (Movement Script)",
      cardIcon: <Route size={32} />,
      items: [
        {
          title: "VIP 의전 동선",
          highlight: "차량 하차 → 영접 → 대기실 이동 → 무대 등단 → 사진 촬영 → 환송까지의 모든 움직임을 초 단위로 기록합니다."
        },
        {
          title: "시상 요원 동선",
          desc: "시상 보조 인력의 등단 시점, 상장/부상 전달 각도 및 퇴장 동선을 세밀하게 설계합니다."
        }
      ]
    },
    // Slide 10: [6교시] 2. 기술 통합 큐시트
    {
      type: "content",
      theme: "pink",
      session: "[6교시]",
      sessionTitle: "행사의 언어: 시나리오 및 기술 큐시트 마스터링",
      cardTitle: "2. 기술 통합 큐시트 (Production Cue-Sheet) 정밀 설계",
      cardIcon: <Sliders size={32} />,
      items: [
        {
          title: "멀티 트랙 큐시트 (Multi-track) 작성법",
          subItems: [
            "비디오 (Video): 오프닝 영상, 발표 PPT, 카메라 중계 화면, 하단 자막(CG)의 송출 시점 명시.",
            "오디오 (Audio): 등단 음악(BGM), 효과음(SFX), 마이크 On/Off 및 볼륨 페이드 인/아웃 타이밍 제어.",
            "조명 (Lighting): 암전(Black-out), 스포트라이트(Follow-spot), 무대 배경색(Mood lighting) 전환 포인트 설정."
          ]
        }
      ]
    },
    // Slide 11: [6교시] 2,3. 큐시트 및 리허설
    {
      type: "grid",
      theme: "pink",
      session: "[6교시]",
      sessionTitle: "행사의 언어: 시나리오 및 기술 큐시트 마스터링",
      cards: [
        {
          title: "백타이밍 기법",
          icon: <Timer size={32} />,
          items: [
            "Back-timing: 행사 종료 시간을 정확히 맞추기 위해 각 순서의 소요 시간을 역계산하여 진행 속도를 조절하는 기준점을 마련합니다."
          ]
        },
        {
          title: "3. 리허설 (Rehearsal) 운영",
          icon: <ClipboardCheck size={32} />,
          items: [
            "Tech: 오퍼레이터 간 Q-sign 체계 점검 및 싱크 확인.",
            "Dry: 스태프들끼리 전체 동선과 전환 타이밍 실습.",
            "Dress: 실제 의상, 영상 갖추고 1:1 타임라인 시뮬레이션."
          ]
        }
      ]
    },
    // Slide 12: [7교시] 1. 디자인 실재화
    {
      type: "content",
      theme: "green",
      session: "[7교시]",
      sessionTitle: "비주얼의 실제: 디자인 제작물 및 영상 콘텐츠",
      cardTitle: "1. 디자인 실재화 및 제작 프로세스 (Production)",
      cardIcon: <Palette size={32} />,
      items: [
        {
          title: "매체별 디자인 최적화 (Resizing)",
          desc: "확정된 키 비주얼을 대형 현수막(Back-drop), X-배너, 안내 사인물, 명찰, 리플렛 등 모든 매체 규격에 맞춰 재편집."
        },
        {
          title: "인쇄 및 제작 기술 검토",
          subItems: [
            "재질 선정: 현수막(부직포/천), 배너(PET/폼보드), 지질/후가공 목적별 선택.",
            "출력 데이터 점검: CMYK 색상, 해상도(300dpi 이상), 폰트 아웃라인 처리 점검."
          ]
        }
      ]
    },
    // Slide 13: [7교시] 1,2. 물류 및 영상 콘텐츠
    {
      type: "grid",
      theme: "green",
      session: "[7교시]",
      sessionTitle: "비주얼의 실제: 디자인 제작물 및 영상 콘텐츠",
      cards: [
        {
          title: "물류 및 현장 설치",
          icon: <Truck size={32} />,
          items: [
            "발주 및 설치 계획: 제작물별 납기일(Deadline) 역산 관리 및 현장 수령/설치 담당자(R&R) 명확히 지정."
          ]
        },
        {
          title: "2. 영상/중계 매니지먼트",
          icon: <Video size={32} />,
          items: [
            "영상 감수: 메시지 전달력, 연출 확인.",
            "PPT 최적화: 마스터 레이아웃 통일, 동영상/애니메이션 최종 테스트.",
            "실시간 중계: 앵글 배치도, 중계 자막(CG) 및 스위칭(Switching) 점검."
          ]
        }
      ]
    },
    // Slide 14: [7교시] 3. 온/오프라인 홍보
    {
      type: "content",
      theme: "green",
      session: "[7교시]",
      sessionTitle: "비주얼의 실제: 디자인 제작물 및 영상 콘텐츠",
      cardTitle: "3. 온/오프라인 홍보 및 참가자 유입 (Promotion)",
      cardIcon: <Users size={32} />,
      items: [
        {
          title: "홍보 로드맵 실행",
          desc: "행사 D-30부터 뉴스레터 발송, SNS 카드뉴스 업로드, 보도자료 배포 등 정기적인 콘텐츠 송출 및 관리."
        },
        {
          title: "참가자 모집 전략",
          highlight: "사전 등록 이벤트를 통한 모객 극대화 및 미등록 잠재 고객 대상 타겟 마케팅(Target Marketing) 적극 실행."
        }
      ]
    },
    // Slide 15: [8교시] 1. 참가자 데이터 관리
    {
      type: "content",
      theme: "yellow",
      session: "[8교시]",
      sessionTitle: "인력 운용 및 참가자 등록 시스템 구축",
      cardTitle: "1. 참가자 데이터 정밀 관리 및 시스템 구축 (RSVP)",
      cardIcon: <Database size={32} />,
      items: [
        {
          title: "사전 등록 데이터 클렌징 (Data Cleaning)",
          desc: "중복 등록자 제거, 오기입 정보 수정, 불참 예정자 분류를 통한 실참석 인원 정밀 예측."
        },
        {
          title: "등록 시스템 최종 테스트 및 안내",
          subItems: [
            "현장 장비(노트북, 프린터, 스캐너) 확인 및 서버 부하 테스트 실시.",
            "행사장 안내 및 개인별 고유 바코드(ID) 발송을 통한 대기 시간 최소화."
          ]
        }
      ]
    },
    // Slide 16: [8교시] 2. 스태프 인력 배치
    {
      type: "content",
      theme: "yellow",
      session: "[8교시]",
      sessionTitle: "인력 운용 및 참가자 등록 시스템 구축",
      cardTitle: "2. 전문 운영 인력 및 스태프 운용 (HR): 배치 계획",
      cardIcon: <UsersRound size={32} />,
      items: [
        {
          title: "파트별 인력 배치표 작성 (Staffing Plan)",
          highlight: "운영 요원별 위치(Position), 업무 범위, 그리고 교대 근무 시간 및 식사 시간표를 오차 없이 상세하게 설계합니다."
        }
      ]
    },
    // Slide 17: [8교시] 2. 스태프 오리엔테이션
    {
      type: "content",
      theme: "yellow",
      session: "[8교시]",
      sessionTitle: "인력 운용 및 참가자 등록 시스템 구축",
      cardTitle: "2. 스태프 교육 교재 (Orientation Material) 제작",
      cardIcon: <BookOpen size={32} />,
      items: [
        {
          title: "현장 교육 핵심 내용",
          subItems: [
            "행사 비전: 행사의 목적 및 비전 공유.",
            "CS 응대 가이드: 복장 규정, 응대예절, 금지 언행 및 불만 고객(Black Consumer) 대응 멘트 교육.",
            "소통 규약: 현장 무전기 사용법(Radio Call) 및 약어 통일."
          ]
        }
      ]
    },
    // Slide 18: [8교시] 3. VIP 맞춤형 의전
    {
      type: "content",
      theme: "yellow",
      session: "[8교시]",
      sessionTitle: "인력 운용 및 참가자 등록 시스템 구축",
      cardTitle: "3. VIP 맞춤형 의전 (Protocol)",
      cardIcon: <Star size={32} />,
      items: [
        {
          title: "VIP 개인별 프로필 (VIP Sheet) 작성",
          desc: "국적, 종교, 선호 음식, 지병/알레르기, 이동 차량 정보 등 상세 케어 시트 완벽 구축."
        },
        {
          title: "영접 및 환송 계획 확정",
          highlight: "공항/역 도착부터 행사장 이동, 오찬/만찬 전담 수행 인력 배치 및 모든 동선을 재확인합니다."
        }
      ]
    },
    // Slide 19: [8교시] 3. 주간 보고 및 승인
    {
      type: "goal",
      theme: "yellow",
      icon: <Stamp size={80} />,
      title: "주간 보고 및 승인 관리 (Admin)",
      content: (
        <div className="text-center">
          <p className="text-3xl md:text-4xl text-text-sub leading-relaxed mb-10 font-bold">
            제2단계 마무리 시점에서 모든 제작물 및 계획안에 대해<br />
            <strong className="text-yellow-neon font-black">발주처의 최종 승인(Sign-off)</strong>을 획득하고,<br /><br />
            본격적인 제3단계 진입 준비를 완료합니다.
          </p>
        </div>
      ),
    },
    // Slide 20: 2일차 핵심 요약
    {
      type: "summary",
      theme: "purple",
      icon: <Lightbulb size={80} />,
      title: "[2일차 정리 교안]",
      mainQuote: "문서는 현장의 유일한 무기입니다",
      items: [
        { label: "문서화의 힘", text: "PM의 머릿속에 있는 계획은 계획이 아님. 완벽하게 서류로 구현된 매뉴얼만이 현장의 혼란을 막을 수 있음." },
        { label: "Check 시스템", text: "Check, Re-check, Cross-check: 모든 제작물과 계획은 반드시 담당자 외 제3자가 재검토하는 시스템을 갖출 것." }
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
        className="absolute left-8 top-1/2 -translate-y-1/2 z-[100] p-4 rounded-full border border-purple-neon/30 text-purple-neon hover:bg-purple-neon hover:text-bg-base transition-all disabled:opacity-20 disabled:cursor-not-allowed"
      >
        <ChevronLeft size={32} />
      </button>
      <button 
        onClick={nextSlide}
        disabled={currentSlide === slides.length - 1}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-[100] p-4 rounded-full border border-purple-neon/30 text-purple-neon hover:bg-purple-neon hover:text-bg-base transition-all disabled:opacity-20 disabled:cursor-not-allowed"
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
              <div className="flex flex-col items-center">
                <div className="glass-card p-20 rounded-3xl border-purple-neon/30 max-w-[85vw] w-full flex flex-col items-center">
                  <div className="text-purple-neon mb-12">
                    {slide.icon}
                  </div>
                  <h2 className="text-6xl font-black text-purple-neon mb-16 font-display uppercase tracking-widest">
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
