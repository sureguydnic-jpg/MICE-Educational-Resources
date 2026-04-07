import React from 'react';
import { 
  Target, 
  Lightbulb, 
  Layout, 
  Search, 
  Map, 
  Users, 
  FileText, 
  Calendar, 
  Zap, 
  ShieldCheck, 
  CheckCircle2, 
  Network, 
  ListChecks, 
  AlertTriangle, 
  Mic2, 
  Route, 
  Sliders, 
  Timer, 
  ClipboardCheck, 
  Palette, 
  Truck, 
  Video, 
  Database, 
  UsersRound, 
  BookOpen, 
  Star, 
  Stamp,
  SpellCheck,
  Box,
  Warehouse,
  ShieldAlert,
  Copy,
  Gavel,
  PersonStanding,
  Presentation,
  Radio,
  Crown,
  ListChecks as ListChecksIcon,
  Wrench,
  Thermometer,
  ClipboardList,
  Flag,
  Rocket,
  Megaphone,
  Headphones,
  BarChart3,
  Award,
  History,
  FileSearch,
  MessageSquare,
  HeartHandshake
} from "lucide-react";

export interface SlideData {
  type: "title" | "goal" | "content" | "grid" | "summary";
  badge?: string;
  title?: string;
  subtitle?: string;
  theme?: "cyan" | "purple" | "green" | "pink" | "yellow" | "orange";
  icon?: React.ReactNode;
  content?: React.ReactNode;
  session?: string;
  sessionTitle?: string;
  cardTitle?: string;
  cardIcon?: React.ReactNode;
  items?: any[];
  cards?: any[];
  mainQuote?: string;
}

export const day1Slides: SlideData[] = [
  // Slide 1: Title
  {
    type: "title",
    badge: "[1일차] 제1단계",
    title: "기본 계획 및\n사업 기반 구축",
    subtitle: "Base Building & Venue Mastering",
    theme: "cyan"
  },
  // Slide 2: Goals
  {
    type: "goal",
    theme: "cyan",
    icon: React.createElement(Target, { size: 80 }),
    title: "교육 목표",
    content: React.createElement("p", { className: "text-4xl md:text-5xl text-text-sub leading-relaxed text-center font-bold" }, 
      "MICE 행사의 성공적인 시작을 위한 ", React.createElement("strong", { className: "text-white font-black" }, "‘기본 계획’"), " 수립 역량을 강화하고,", React.createElement("br"), React.createElement("br"),
      "행사 성격에 맞는 ", React.createElement("strong", { className: "text-cyan-neon font-black" }, "최적의 베뉴(Venue)"), "를 선정 및 장악하는 실무 기술을 습득함."
    ),
  },
  // Slide 3: [1교시] 1. MICE 행사의 이해
  {
    type: "content",
    theme: "cyan",
    session: "[1교시]",
    sessionTitle: "MICE 프로젝트의 시작: 기획의 본질과 기본 계획",
    cardTitle: "1. MICE 행사의 이해와 기획의 본질",
    cardIcon: React.createElement(Lightbulb, { size: 32 }),
    items: [
      {
        title: "MICE의 정의와 가치",
        desc: "Meeting, Incentive, Convention, Exhibition의 유기적 결합을 통한 부가가치 창출."
      },
      {
        title: "기획의 본질 (Why & How)",
        highlight: "단순한 실행을 넘어 '왜 이 행사를 하는가?'에 대한 명확한 목적(Objective) 설정이 모든 기획의 출발점입니다."
      }
    ]
  },
  // Slide 4: [1교시] 2. 기본 계획서 작성 (1)
  {
    type: "content",
    theme: "cyan",
    session: "[1교시]",
    sessionTitle: "MICE 프로젝트의 시작: 기획의 본질과 기본 계획",
    cardTitle: "2. 기본 계획서 (Master Plan)의 핵심 구성 요소",
    cardIcon: React.createElement(Layout, { size: 32 }),
    items: [
      {
        title: "행사 개요 (Overview)",
        desc: "명칭, 일시, 장소, 규모, 주최/주관 등 행사의 뼈대 구축."
      },
      {
        title: "추진 전략 (Strategy)",
        subItems: [
          "SWOT 분석을 통한 차별화 전략 수립.",
          "핵심 타겟(Target Audience) 분석 및 유입 방안 설계."
        ]
      }
    ]
  },
  // Slide 5: [1교시] 2. 기본 계획서 작성 (2)
  {
    type: "content",
    theme: "cyan",
    session: "[1교시]",
    sessionTitle: "MICE 프로젝트의 시작: 기획의 본질과 기본 계획",
    cardTitle: "2. 예산 및 일정 관리",
    cardIcon: React.createElement(Calendar, { size: 32 }),
    items: [
      {
        title: "예산 계획 (Budgeting)",
        highlight: "수입(등록비, 후원금, 지원금)과 지출(대관료, 홍보비, 인건비 등)의 균형을 맞춘 안정적 재무 설계."
      },
      {
        title: "WBS (Work Breakdown Structure)",
        desc: "전체 일정을 세부 과업 단위로 쪼개어 담당자와 마감일을 지정하는 실행 로드맵."
      }
    ]
  },
  // Slide 6: [2교시] 1. 베뉴 서베이
  {
    type: "content",
    theme: "purple",
    session: "[2교시]",
    sessionTitle: "공간의 미학: 베뉴 서베이 및 공간 기획",
    cardTitle: "1. 베뉴 서베이 (Venue Survey) 및 선정 기준",
    cardIcon: React.createElement(Search, { size: 32 }),
    items: [
      {
        title: "베뉴 선정의 5가지 핵심 지표",
        subItems: [
          "접근성 (Accessibility): 대중교통, 주차, 공항과의 거리.",
          "수용 능력 (Capacity): 회의실 규모, 층고, 기둥 유무.",
          "인프라 (Infrastructure): AV 장비, 인터넷 속도, 냉난방 시스템.",
          "서비스 (Service): 식음료(F&B) 품질, 운영 지원 인력.",
          "비용 (Cost): 대관료 및 부대시설 이용료의 적정성."
        ]
      }
    ]
  },
  // Slide 7: [2교시] 2. 공간 레이아웃
  {
    type: "content",
    theme: "purple",
    session: "[2교시]",
    sessionTitle: "공간의 미학: 베뉴 서베이 및 공간 기획",
    cardTitle: "2. 공간 레이아웃 및 동선 설계 (Zoning)",
    cardIcon: React.createElement(Map, { size: 32 }),
    items: [
      {
        title: "효율적 동선 설계 (Flow Management)",
        highlight: "참가자, VIP, 운영진, 서비스 인력의 동선이 겹치지 않도록 분리하여 혼잡도를 최소화하고 보안을 강화합니다."
      },
      {
        title: "공간 구역화 (Zoning)",
        desc: "등록 구역, 전시 구역, 휴게 구역, 사무국 등 기능별 최적 배치."
      }
    ]
  },
  // Slide 8: [2교시] 3. 베뉴 계약
  {
    type: "content",
    theme: "purple",
    session: "[2교시]",
    sessionTitle: "공간의 미학: 베뉴 서베이 및 공간 기획",
    cardTitle: "3. 베뉴 계약 및 협상 기술",
    cardIcon: React.createElement(FileText, { size: 32 }),
    items: [
      {
        title: "계약 시 주의 사항",
        subItems: [
          "취소 규정 (Cancellation Policy) 및 위약금 확인.",
          "반입/반출 시간(Load-in/out) 및 추가 비용 협의.",
          "독점 업체(Exclusive Vendor) 유무 확인 (전기, 장비 등)."
        ]
      }
    ]
  },
  // Slide 9: [3교시] 1. 조직도 구성
  {
    type: "content",
    theme: "pink",
    session: "[3교시]",
    sessionTitle: "조직의 힘: 추진 조직 구성 및 R&R 설정",
    cardTitle: "1. 추진 조직도 (Organizing Committee) 설계",
    cardIcon: React.createElement(Users, { size: 32 }),
    items: [
      {
        title: "기능별 조직 구성",
        subItems: [
          "사무국: 전체 총괄 및 행정 지원.",
          "운영팀: 현장 운영, 등록, 의전 담당.",
          "홍보팀: 온/오프라인 마케팅 및 미디어 대응.",
          "학술/전시팀: 프로그램 기획 및 연사 관리."
        ]
      }
    ]
  },
  // Slide 10: [3교시] 2. R&R 설정
  {
    type: "content",
    theme: "pink",
    session: "[3교시]",
    sessionTitle: "조직의 힘: 추진 조직 구성 및 R&R 설정",
    cardTitle: "2. 명확한 R&R (Roles & Responsibilities) 설정",
    cardIcon: React.createElement(ListChecks, { size: 32 }),
    items: [
      {
        title: "책임과 권한의 분산",
        highlight: "모든 과업에 '최종 책임자(Owner)'를 지정하여 의사결정 지연과 업무 누락을 방지합니다."
      },
      {
        title: "커뮤니케이션 채널 구축",
        desc: "정기 회의 체계 및 실시간 소통 툴(슬랙, 카톡 등) 활용 방안 수립."
      }
    ]
  },
  // Slide 11: [3교시] 3. 외부 파트너십
  {
    type: "content",
    theme: "pink",
    session: "[3교시]",
    sessionTitle: "조직의 힘: 추진 조직 구성 및 R&R 설정",
    cardTitle: "3. 외부 파트너사 및 협력업체 관리",
    cardIcon: React.createElement(Network, { size: 32 }),
    items: [
      {
        title: "파트너사 선정 기준",
        subItems: [
          "유사 행사 수행 실적 및 포트폴리오 검토.",
          "현장 대응 능력 및 커뮤니케이션 유연성.",
          "제시 견적의 투명성 및 합리성."
        ]
      }
    ]
  },
  // Slide 12: [4교시] 1. 키 비주얼 기획
  {
    type: "content",
    theme: "yellow",
    session: "[4교시]",
    sessionTitle: "브랜딩의 시작: 키 비주얼 및 홍보 전략",
    cardTitle: "1. 키 비주얼 (Key Visual) 및 아이덴티티 기획",
    cardIcon: React.createElement(Palette, { size: 32 }),
    items: [
      {
        title: "디자인 컨셉 도출",
        desc: "행사의 주제와 가치를 시각적으로 상징하는 로고, 컬러 시스템, 폰트 확정."
      },
      {
        title: "일관된 브랜딩 (Consistency)",
        highlight: "웹사이트, 홍보물, 현장 사인물에 이르는 모든 접점에서 통일된 비주얼 경험을 제공해야 합니다."
      }
    ]
  },
  // Slide 13: [4교시] 2. 홍보 채널 믹스
  {
    type: "content",
    theme: "yellow",
    session: "[4교시]",
    sessionTitle: "브랜딩의 시작: 키 비주얼 및 홍보 전략",
    cardTitle: "2. 다각적 홍보 채널 믹스 (Promotion Mix)",
    cardIcon: React.createElement(Megaphone, { size: 32 }),
    items: [
      {
        title: "온라인 홍보",
        subItems: [
          "공식 홈페이지 및 뉴스레터 발송.",
          "SNS(인스타그램, 링크드인) 타겟 광고.",
          "관련 커뮤니티 및 포럼 홍보."
        ]
      },
      {
        title: "오프라인 홍보",
        desc: "유관 기관 포스터 게시, 전문 잡지 광고, 보도자료 배포."
      }
    ]
  },
  // Slide 14: [4교시] 3. 참가자 유입 전략
  {
    type: "content",
    theme: "yellow",
    session: "[4교시]",
    sessionTitle: "브랜딩의 시작: 키 비주얼 및 홍보 전략",
    cardTitle: "3. 참가자 유입 및 등록 유도 전략",
    cardIcon: React.createElement(Users, { size: 32 }),
    items: [
      {
        title: "얼리버드(Early-bird) 전략",
        highlight: "조기 등록 할인을 통해 초기 참가자를 확보하고 행사의 흥행 분위기를 조성합니다."
      },
      {
        title: "추천인 이벤트",
        desc: "기존 참가자가 신규 참가자를 추천할 시 혜택을 제공하는 바이럴 마케팅."
      }
    ]
  },
  // Slide 15: 1일차 핵심 요약
  {
    type: "summary",
    theme: "cyan",
    icon: React.createElement(Lightbulb, { size: 80 }),
    title: "[1일차 정리 교안]",
    mainQuote: "기획은 실행의 지도입니다",
    items: [
      { label: "기본 계획의 중요성", text: "탄탄한 기본 계획은 현장의 돌발 상황에서도 흔들리지 않는 기준점이 됩니다." },
      { label: "베뉴는 행사의 그릇", text: "베뉴의 특성을 완벽히 이해하고 활용하는 것이 공간 기획의 핵심입니다." }
    ]
  }
];

export const day2Slides: SlideData[] = [
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
    icon: React.createElement(Target, { size: 80 }),
    title: "교육 목표",
    content: React.createElement("p", { className: "text-4xl md:text-5xl text-text-sub leading-relaxed text-center font-bold" }, 
      "확정된 기본 계획을 바탕으로 현장 운영의 성패를 결정짓는", React.createElement("br"),
      React.createElement("strong", { className: "text-white font-black" }, "‘실무 상세 매뉴얼’"), "과 ", React.createElement("strong", { className: "text-white font-black" }, "‘연출 대본’"), "을 완성하고,", React.createElement("br"), React.createElement("br"),
      "모든 물적·인적 자원의 배치를 ", React.createElement("strong", { className: "text-purple-neon font-black" }, "확정함.")
    ),
  },
  // Slide 3: [5교시] 1. 세부 실행계획서 (1)
  {
    type: "content",
    theme: "cyan",
    session: "[5교시]",
    sessionTitle: "운영의 표준: 상세 실행계획 및 파트별 운영 절차",
    cardTitle: "1. 세부 실행계획서 (Detailed Action Plan)의 심층 구성",
    cardIcon: React.createElement(Network, { size: 32 }),
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
    cardIcon: React.createElement(ListChecks, { size: 32 }),
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
    cardIcon: React.createElement(Network, { size: 32 }),
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
    cardIcon: React.createElement(Map, { size: 32 }),
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
    cardIcon: React.createElement(AlertTriangle, { size: 32 }),
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
    cardIcon: React.createElement(Mic2, { size: 32 }),
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
    cardIcon: React.createElement(Route, { size: 32 }),
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
    cardIcon: React.createElement(Sliders, { size: 32 }),
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
        icon: React.createElement(Timer, { size: 32 }),
        items: [
          "Back-timing: 행사 종료 시간을 정확히 맞추기 위해 각 순서의 소요 시간을 역계산하여 진행 속도를 조절하는 기준점을 마련합니다."
        ]
      },
      {
        title: "3. 리허설 (Rehearsal) 운영",
        icon: React.createElement(ClipboardCheck, { size: 32 }),
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
    cardIcon: React.createElement(Palette, { size: 32 }),
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
        icon: React.createElement(Truck, { size: 32 }),
        items: [
          "발주 및 설치 계획: 제작물별 납기일(Deadline) 역산 관리 및 현장 수령/설치 담당자(R&R) 명확히 지정."
        ]
      },
      {
        title: "2. 영상/중계 매니지먼트",
        icon: React.createElement(Video, { size: 32 }),
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
    cardIcon: React.createElement(Users, { size: 32 }),
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
    cardIcon: React.createElement(Database, { size: 32 }),
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
    cardIcon: React.createElement(UsersRound, { size: 32 }),
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
    cardIcon: React.createElement(BookOpen, { size: 32 }),
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
    cardIcon: React.createElement(Star, { size: 32 }),
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
    icon: React.createElement(Stamp, { size: 80 }),
    title: "주간 보고 및 승인 관리 (Admin)",
    content: (
      React.createElement("div", { className: "text-center" }, 
        React.createElement("p", { className: "text-3xl md:text-4xl text-text-sub leading-relaxed mb-10 font-bold" }, 
          "제2단계 마무리 시점에서 모든 제작물 및 계획안에 대해", React.createElement("br"),
          React.createElement("strong", { className: "text-yellow-neon font-black" }, "발주처의 최종 승인(Sign-off)"), "을 획득하고,", React.createElement("br"), React.createElement("br"),
          "본격적인 제3단계 진입 준비를 완료합니다."
        )
      )
    ),
  },
  // Slide 20: 2일차 핵심 요약
  {
    type: "summary",
    theme: "purple",
    icon: React.createElement(Lightbulb, { size: 80 }),
    title: "[2일차 정리 교안]",
    mainQuote: "문서는 현장의 유일한 무기입니다",
    items: [
      { label: "문서화의 힘", text: "PM의 머릿속에 있는 계획은 계획이 아님. 완벽하게 서류로 구현된 매뉴얼만이 현장의 혼란을 막을 수 있음." },
      { label: "Check 시스템", text: "Check, Re-check, Cross-check: 모든 제작물과 계획은 반드시 담당자 외 제3자가 재검토하는 시스템을 갖출 것." }
    ]
  }
];

export const day3Slides: SlideData[] = [
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
    icon: React.createElement(Target, { size: 80 }),
    title: "교육 목표",
    content: React.createElement("p", { className: "text-4xl md:text-5xl text-text-sub leading-relaxed text-center font-bold" }, 
      "모든 제작물과 시스템의 ", React.createElement("strong", { className: "text-white font-black" }, "‘무결점 검수를 완료’"), "하고,", React.createElement("br"), React.createElement("br"),
      "현장 운영 인력의 숙련도를 실전 수준으로 끌어올려", React.createElement("br"), "발생 가능한 ", React.createElement("strong", { className: "text-green-neon font-black" }, "모든 리스크를 선제적으로 차단함.")
    ),
  },
  // Slide 3: [9교시] 1. 제작물 정밀 검수 (1)
  {
    type: "content",
    theme: "green",
    session: "[9교시]",
    sessionTitle: "시각물의 실체화: 제작물 검수 및 정밀 물류",
    cardTitle: "1. 제작물 정밀 검수 매뉴얼 (Visual & Content Audit)",
    cardIcon: React.createElement(SpellCheck, { size: 32 }),
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
    cardIcon: React.createElement(Palette, { size: 32 }),
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
    cardIcon: React.createElement(Box, { size: 32 }),
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
        icon: React.createElement(Truck, { size: 32 }),
        items: [
          "배차 관리: 제작물 크기에 맞는 차량 수배 및 기사 연락처 확보.",
          "반입 우선순위: 무대/장치 구조물 → AV 시스템 → 디자인 홍보물 → 소모품 순으로 반입."
        ]
      },
      {
        title: "현장 임시 창고 운영",
        icon: React.createElement(Warehouse, { size: 32 }),
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
    cardIcon: React.createElement(ShieldAlert, { size: 32 }),
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
    cardIcon: React.createElement(Copy, { size: 32 }),
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
    cardIcon: React.createElement(Gavel, { size: 32 }),
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
    cardIcon: React.createElement(PersonStanding, { size: 32 }),
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
    cardIcon: React.createElement(Users, { size: 32 }),
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
    cardIcon: React.createElement(Presentation, { size: 32 }),
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
    icon: React.createElement(Radio, { size: 80 }),
    title: "무전기 소통 프로토콜 (Radio Protocol)",
    content: (
      React.createElement("div", { className: "text-left max-w-4xl mx-auto space-y-8" }, 
        React.createElement("p", { className: "text-4xl font-black text-pink-neon" }, "1. 불필요한 사담 및 대화 절대 금지!"),
        React.createElement("p", { className: "text-4xl font-bold text-white" }, "2. 호출 후 상대방의 \"카피 / 입도\" 확인 후 메시지 전달."),
        React.createElement("p", { className: "text-4xl font-bold text-white" }, "3. 메시지 전달 종료 시 반드시 \"이상\" 명시.")
      )
    ),
  },
  // Slide 14: [11교시] 3. VIP 및 특수 인력
  {
    type: "content",
    theme: "cyan",
    session: "[11교시]",
    sessionTitle: "운영의 핵심 주체: 인력 관리 및 현장 실무 오리엔테이션",
    cardTitle: "3. VIP 전담 의전팀 및 특수 인력 점검",
    cardIcon: React.createElement(Crown, { size: 32 }),
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
    cardIcon: React.createElement(ListChecksIcon, { size: 32 }),
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
    cardIcon: React.createElement(Wrench, { size: 32 }),
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
    icon: React.createElement(Thermometer, { size: 80 }),
    title: "부대시설 최종 확인의 중요성",
    content: (
      React.createElement("div", { className: "text-left max-w-4xl mx-auto space-y-6 text-3xl font-bold text-text-sub" }, 
        React.createElement("p", null, "1. 냉난방 적정 온도 ", React.createElement("span", { className: "text-green-neon font-black" }, "(22~24도)"), " 설정."),
        React.createElement("p", null, "2. 회의실 내 쓰레기통 비움 상태 점검."),
        React.createElement("p", null, "3. 화장실 소모품 비치 여부 등 ", React.createElement("span", { className: "text-white font-black" }, "참가자 불만이 생길 수 있는 미세 품질 관리."))
      )
    ),
  },
  // Slide 18: [12교시] 3. 무결점 체크리스트
  {
    type: "content",
    theme: "green",
    session: "[12교시]",
    sessionTitle: "현장 장악: 최종 시뮬레이션 및 행사장 인수",
    cardTitle: "3. 무결점 체크리스트 (Zero-Defect Checklist) 가동",
    cardIcon: React.createElement(ClipboardList, { size: 32 }),
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
    icon: React.createElement(Flag, { size: 80 }),
    title: "최종 킥오프 미팅 (Final Kick-off)",
    content: (
      React.createElement("p", { className: "text-3xl md:text-4xl text-text-sub leading-relaxed text-center font-bold" }, 
        "PM 주재 하에 ", React.createElement("strong", { className: "text-white font-black" }, "전체 스태프가 모여 행사의 핵심 성공 목표를 공유"), "하고,", React.createElement("br"), React.createElement("br"),
        "사고 발생 시의 보고 체계를 재강조하며 ", React.createElement("strong", { className: "text-green-neon font-black" }, "사기를 진작"), "시킵니다."
      )
    ),
  },
  // Slide 20: 3일차 핵심 요약
  {
    type: "summary",
    theme: "green",
    icon: React.createElement(Lightbulb, { size: 80 }),
    title: "[3일차 정리 교안]",
    mainQuote: "PM은 의심하는 사람이다",
    items: [
      { label: "의심의 미학", text: "내가 직접 만져보고, 켜보고, 확인하지 않은 것은 모두 잠재적 사고 요인이라는 치열한 인식." },
      { label: "실전의 가치", text: "아무리 훌륭한 시나리오도 현장에서 스태프가 직접 움직이지 못하면 단순한 종이조각에 불과함." }
    ]
  }
];

export const day4Slides: SlideData[] = [
  // Slide 1: Title
  {
    type: "title",
    badge: "[4일차] 제4단계",
    title: "현장 실행 및\n사후 관리 마스터",
    subtitle: "D-Day ~ After Action",
    theme: "pink"
  },
  // Slide 2: Goals
  {
    type: "goal",
    theme: "pink",
    icon: React.createElement(Rocket, { size: 80 }),
    title: "교육 목표",
    content: React.createElement("p", { className: "text-4xl md:text-5xl text-text-sub leading-relaxed text-center font-bold" }, 
      "실전 현장에서의 ", React.createElement("strong", { className: "text-white font-black" }, "‘완벽한 운영 및 위기 대응’"), " 능력을 발휘하고,", React.createElement("br"), React.createElement("br"),
      "행사 종료 후 ", React.createElement("strong", { className: "text-pink-neon font-black" }, "데이터 기반의 성과 분석"), "과", React.createElement("br"), "사후 관리를 통해 프로젝트를 성공적으로 완결함."
    ),
  },
  // Slide 3: [13교시] 1. 현장 운영 본부
  {
    type: "content",
    theme: "pink",
    session: "[13교시]",
    sessionTitle: "실전의 시간: 현장 운영 및 위기 대응",
    cardTitle: "1. 현장 운영 본부 (Secretariat) 가동 및 지휘 체계",
    cardIcon: React.createElement(Radio, { size: 32 }),
    items: [
      {
        title: "중앙 통제 시스템 (Command Center)",
        highlight: "모든 정보가 사무국으로 집중되고, PM의 판단 하에 각 파트로 명령이 하달되는 일원화된 지휘 체계를 유지합니다."
      },
      {
        title: "실시간 보고 체계 (Reporting)",
        desc: "매 시간별 파트리더 브리핑을 통해 현장 상황(참석률, 특이 사항)을 실시간 업데이트."
      }
    ]
  },
  // Slide 4: [13교시] 2. 등록 및 안내
  {
    type: "content",
    theme: "pink",
    session: "[13교시]",
    sessionTitle: "실전의 시간: 현장 운영 및 위기 대응",
    cardTitle: "2. 등록 데스크 및 안내 운영 (Registration)",
    cardIcon: React.createElement(Users, { size: 32 }),
    items: [
      {
        title: "피크 타임 (Peak-time) 관리",
        subItems: [
          "대기 줄 관리: 혼잡 시 '현장 등록'과 '사전 등록' 라인을 엄격히 분리하고 유동 인력 투입.",
          "키오스크/QR 체크인: 기술적 오류 발생 시 즉각 수동 명부 전환 프로세스 가동."
        ]
      }
    ]
  },
  // Slide 5: [13교시] 3. 돌발 상황 대응
  {
    type: "content",
    theme: "pink",
    session: "[13교시]",
    sessionTitle: "실전의 시간: 현장 운영 및 위기 대응",
    cardTitle: "3. 현장 돌발 상황 및 클레임 대응 (Troubleshooting)",
    cardIcon: React.createElement(AlertTriangle, { size: 32 }),
    items: [
      {
        title: "클레임 대응 3원칙",
        subItems: [
          "Listen: 고객의 불만을 끝까지 경청하고 공감 표시.",
          "Apologize: 즉각적인 사과와 함께 문제 해결 의지 표명.",
          "Solve: 가능한 범위 내에서 즉각 조치하고, 상급자에게 보고하여 재발 방지."
        ]
      }
    ]
  },
  // Slide 6: [14교시] 1. 무대 연출 및 중계
  {
    type: "content",
    theme: "orange",
    session: "[14교시]",
    sessionTitle: "연출의 미학: 무대 매니지먼트 및 VIP 의전 실전",
    cardTitle: "1. 무대 연출 및 영상/중계 실전 매니지먼트",
    cardIcon: React.createElement(Video, { size: 32 }),
    items: [
      {
        title: "큐사인 (Q-sign)의 정확성",
        highlight: "사회자 멘트와 영상 송출, 조명 변화가 0.1초의 오차 없이 맞물리도록 무대 감독(Stage Manager)의 지휘 하에 일사분란하게 움직입니다."
      },
      {
        title: "연사 케어 및 타이밍 컨트롤",
        desc: "발표 시간 초과 시 정중한 신호 전달 및 다음 연사 대기 상태 최종 확인."
      }
    ]
  },
  // Slide 7: [14교시] 2. VIP 의전 실전
  {
    type: "content",
    theme: "orange",
    session: "[14교시]",
    sessionTitle: "연출의 미학: 무대 매니지먼트 및 VIP 의전 실전",
    cardTitle: "2. VIP 의전 및 영접 실전 (Protocol in Action)",
    cardIcon: React.createElement(Crown, { size: 32 }),
    items: [
      {
        title: "영접 및 환송 프로세스",
        subItems: [
          "차량 도착 5분 전 대기 장소 이동 및 무전 공유.",
          "VIP 대기실 내 케이터링 상태 및 온도 최종 점검.",
          "기념품 전달 및 차량 환송 시까지 전담 인력 밀착 수행."
        ]
      }
    ]
  },
  // Slide 8: [14교시] 3. 오찬/만찬 운영
  {
    type: "content",
    theme: "orange",
    session: "[14교시]",
    sessionTitle: "연출의 미학: 무대 매니지먼트 및 VIP 의전 실전",
    cardTitle: "3. 오찬/만찬 및 케이터링 운영 (F&B Management)",
    cardIcon: React.createElement(Headphones, { size: 32 }),
    items: [
      {
        title: "식음료 품질 및 위생 관리",
        desc: "음식 서빙 타이밍 조절 (행사 진행 속도와 연동) 및 알레르기/비건 식단 특별 관리."
      },
      {
        title: "좌석 배치 및 안내",
        highlight: "지정석(Reserved) 명패 확인 및 입장 시 혼선 방지를 위한 안내 인력 집중 배치."
      }
    ]
  },
  // Slide 9: [15교시] 1. 철수 및 원상복구
  {
    type: "content",
    theme: "cyan",
    session: "[15교시]",
    sessionTitle: "완벽한 마무리: 철수 전략 및 사후 정산 실무",
    cardTitle: "1. 신속한 철수 및 베뉴 원상복구 (Load-out)",
    cardIcon: React.createElement(Truck, { size: 32 }),
    items: [
      {
        title: "철수 우선순위 및 안전 관리",
        subItems: [
          "렌탈 장비 반납 → 폐기물 처리 → 사인물 제거 → 베뉴 최종 점검 순으로 진행.",
          "철수 시 안전 사고 방지를 위한 작업자 통제 및 보호구 착용 확인."
        ]
      }
    ]
  },
  // Slide 10: [15교시] 2. 사후 정산 및 보고
  {
    type: "content",
    theme: "cyan",
    session: "[15교시]",
    sessionTitle: "완벽한 마무리: 철수 전략 및 사후 정산 실무",
    cardTitle: "2. 사후 정산 및 결과 보고서 작성 (Post-event Report)",
    cardIcon: React.createElement(BarChart3, { size: 32 }),
    items: [
      {
        title: "데이터 기반 성과 분석",
        desc: "참석자 수, 만족도 조사 결과, 예산 대비 집행 실적 등 정량적 데이터 정리."
      },
      {
        title: "결과 보고서의 핵심 구성",
        highlight: "행사 하이라이트 영상/사진, 주요 성과(KPI) 달성 여부, 그리고 향후 개선 제언(Lesson Learned) 포함."
      }
    ]
  },
  // Slide 11: [15교시] 3. 파트너사 정산
  {
    type: "content",
    theme: "cyan",
    session: "[15교시]",
    sessionTitle: "완벽한 마무리: 철수 전략 및 사후 정산 실무",
    cardTitle: "3. 협력업체 정산 및 감사 인사",
    cardIcon: React.createElement(Award, { size: 32 }),
    items: [
      {
        title: "비용 정산 및 증빙 관리",
        desc: "계약서 기반 최종 실행 내역 대조 및 세금계산서 발행 등 행정 절차 마무리."
      },
      {
        title: "네트워크 유지 (Networking)",
        desc: "우수 파트너사 감사 서신 발송 및 향후 협력을 위한 데이터베이스 업데이트."
      }
    ]
  },
  // Slide 12: [16교시] 1. 사후 관리 로드맵
  {
    type: "content",
    theme: "yellow",
    session: "[16교시]",
    sessionTitle: "지속 가능한 MICE: 사후 관리 및 커리어 로드맵",
    cardTitle: "1. 참가자 사후 관리 및 관계 유지 (CRM)",
    cardIcon: React.createElement(History, { size: 32 }),
    items: [
      {
        title: "감사 메시지 및 자료 공유",
        desc: "행사 종료 후 24시간 이내 감사 메일 발송 및 발표 자료/사진 다운로드 링크 제공."
      },
      {
        title: "사후 설문 조사 분석",
        highlight: "참가자의 피드백을 분석하여 다음 행사의 기획 방향을 설정하는 귀중한 자산으로 활용합니다."
      }
    ]
  },
  // Slide 13: [16교시] 2. 프로젝트 아카이빙
  {
    type: "content",
    theme: "yellow",
    session: "[16교시]",
    sessionTitle: "지속 가능한 MICE: 사후 관리 및 커리어 로드맵",
    cardTitle: "2. 프로젝트 아카이빙 및 지식 자산화",
    cardIcon: React.createElement(FileSearch, { size: 32 }),
    items: [
      {
        title: "통합 폴더 구축",
        subItems: [
          "기획안, 큐시트, 디자인 원본, 현장 사진, 정산서 등 모든 문서를 체계적으로 분류하여 저장.",
          "사고 사례 및 대응 일지(Risk Log)를 별도로 기록하여 조직의 노하우로 축적."
        ]
      }
    ]
  },
  // Slide 14: [16교시] 3. 커리어 로드맵
  {
    type: "grid",
    theme: "yellow",
    session: "[16교시]",
    sessionTitle: "지속 가능한 MICE: 사후 관리 및 커리어 로드맵",
    cards: [
      {
        title: "MICE 전문가의 역량",
        icon: React.createElement(MessageSquare, { size: 32 }),
        items: [
          "커뮤니케이션: 다양한 이해관계자 조율 능력.",
          "문제 해결: 현장 돌발 상황에서의 빠른 판단력.",
          "디테일: 0.1%의 오차도 허용하지 않는 꼼꼼함."
        ]
      },
      {
        title: "향후 커리어 비전",
        icon: React.createElement(HeartHandshake, { size: 32 }),
        items: [
          "PCO, PEO 전문가로의 성장.",
          "글로벌 이벤트 컨설턴트 및 베뉴 매니저.",
          "MICE 테크놀로지 및 ESG 기획 전문가."
        ]
      }
    ]
  },
  // Slide 15: 4일차 핵심 요약
  {
    type: "summary",
    theme: "pink",
    icon: React.createElement(Lightbulb, { size: 80 }),
    title: "[4일차 정리 교안]",
    mainQuote: "끝날 때까지 끝난 게 아니다",
    items: [
      { label: "현장의 긴장감", text: "행사 당일의 완벽한 운영은 수개월간의 준비를 빛나게 하는 화룡점정입니다." },
      { label: "사후 관리의 힘", text: "성공적인 마무리는 다음 프로젝트를 위한 가장 강력한 영업 제안서가 됩니다." }
    ]
  }
];
