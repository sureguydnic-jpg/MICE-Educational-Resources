import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Layout, 
  Zap, 
  ShieldCheck, 
  CheckCircle2, 
  Scale,
  ChevronRight,
  AlertTriangle
} from "lucide-react";
import Day1Presentation from "./components/Day1Presentation";
import Day2Presentation from "./components/Day2Presentation";
import Day3Presentation from "./components/Day3Presentation";
import Day4Presentation from "./components/Day4Presentation";
import LaborLawPresentation from "./components/LaborLawPresentation";
import CopyrightModal from "./components/CopyrightModal";

interface NavItemProps {
  day: string;
  title: string;
  subtitle: string;
  color: string;
  icon: React.ReactNode;
  delay: number;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ day, title, subtitle, color, icon, delay, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ scale: 1.02, x: 5 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      }}
      className="group relative flex items-center gap-6 p-6 glass-card rounded-2xl text-left transition-all hover:border-cyan-neon/50 w-full cursor-pointer"
    >
      <div 
        className="flex items-center justify-center w-16 h-16 rounded-xl shrink-0 transition-all group-hover:scale-110"
        style={{ backgroundColor: `${color}20`, border: `1px solid ${color}` }}
      >
        <div style={{ color: color }}>
          {icon}
        </div>
      </div>
      
      <div className="flex-grow">
        <div className="flex items-center justify-between mb-1">
          <span className="font-display text-xs tracking-widest uppercase opacity-60" style={{ color: color }}>
            {day}
          </span>
        </div>
        <h3 className="text-xl font-bold text-white group-hover:text-cyan-neon transition-colors">
          {title}
        </h3>
        <p className="text-sm text-text-sub mt-1">
          {subtitle}
        </p>
      </div>

      <ChevronRight className="w-5 h-5 text-white/20 group-hover:text-cyan-neon transition-colors" />
    </motion.div>
  );
};

export default function App() {
  const [activeView, setActiveView] = useState<string | null>(null);
  const [isCopyrightOpen, setIsCopyrightOpen] = useState(false);

  const menuItems = [
    {
      id: "day1",
      day: "Day 01",
      title: "기본 계획 및 사업 기반 구축",
      subtitle: "Base Building: 프로젝트 설계 및 베뉴 마스터링",
      color: "#00e5ff", // Cyan
      icon: <Layout size={28} />,
    },
    {
      id: "day2",
      day: "Day 02",
      title: "실행의 구체화 및 상세 설계",
      subtitle: "D-45: 세부 운영 계획 및 파트너십 고도화",
      color: "#00ff9d", // Green
      icon: <Zap size={28} />,
    },
    {
      id: "day3",
      day: "Day 03",
      title: "현장 투입 전 완성화 및 리스크 제로화",
      subtitle: "D-15: 최종 시뮬레이션 및 안전 방어선 점검",
      color: "#ffea00", // Yellow
      icon: <ShieldCheck size={28} />,
    },
    {
      id: "day4",
      day: "Day 04",
      title: "현장 실행 및 사후 관리 마스터",
      subtitle: "D-Day ~ After: 현장 장악 및 성과 분석",
      color: "#ff2a6d", // Pink
      icon: <CheckCircle2 size={28} />,
    },
  ];

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center p-8 md:p-16 bg-bg-base overflow-x-hidden overflow-y-auto">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-cyan-neon/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 w-full max-w-5xl">
        {/* Header Section */}
        <header className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 rounded-full border border-cyan-neon/30 bg-cyan-neon/10 mb-6"
          >
            <span className="font-display text-cyan-neon text-xs tracking-widest">
              EDUCATIONAL CURRICULUM 2026
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight"
          >
            AI를 활용한 MICE인재 양성과정<br />
            <span className="neon-text-cyan text-cyan-neon font-display">MICE 현장운영 마스터</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-text-sub text-lg md:text-xl max-w-2xl mx-auto"
          >
            PCO 실무 역량 강화를 위한 단계별 현장 운영 마스터 클래스
          </motion.p>
        </header>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {menuItems.map((item, index) => (
            <NavItem 
              key={item.day}
              day={item.day}
              title={item.title}
              subtitle={item.subtitle}
              color={item.color}
              icon={item.icon}
              delay={0.6 + index * 0.1}
              onClick={() => {
                if (item.id === "day1") setActiveView("day1");
                if (item.id === "day2") setActiveView("day2");
                if (item.id === "day3") setActiveView("day3");
                if (item.id === "day4") setActiveView("day4");
              }}
            />
          ))}
        </div>

        {/* Appendix Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveView("appendix")}
            className="group flex items-center gap-4 px-8 py-4 glass-card rounded-2xl border-white/10 hover:border-yellow-neon/50 transition-all"
          >
            <div className="p-2 bg-yellow-neon/20 rounded-lg text-yellow-neon">
              <Scale size={20} />
            </div>
            <span className="text-lg font-bold text-white group-hover:text-yellow-neon transition-colors">
              2026 근로기준법 상식 가이드
            </span>
            <ChevronRight size={20} className="text-white/20 group-hover:text-yellow-neon transition-colors" />
          </motion.button>
        </motion.div>
      </div>

      {/* Footer Info */}
      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/20 font-display text-xs tracking-widest"
      >
        © 2026 MICE AI TRAINING CENTER. ALL RIGHTS RESERVED.
      </motion.footer>

      {/* Copyright Floating Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5 }}
        whileHover={{ scale: 1.1, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsCopyrightOpen(true)}
        className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-bg-base/80 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-yellow-neon shadow-2xl hover:border-yellow-neon/50 transition-all group"
      >
        <AlertTriangle size={28} className="group-hover:animate-pulse" />
        <span className="absolute bottom-full right-0 mb-4 px-4 py-2 bg-bg-base border border-white/10 rounded-xl text-xs font-bold text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          수강 가이드 및 저작권 안내
        </span>
      </motion.button>

      {/* Copyright Modal */}
      <CopyrightModal 
        isOpen={isCopyrightOpen} 
        onClose={() => setIsCopyrightOpen(false)} 
      />

      {/* Presentation Overlay */}
      <AnimatePresence>
        {activeView === "day1" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100]"
          >
            <Day1Presentation onClose={() => setActiveView(null)} />
          </motion.div>
        )}
        {activeView === "day2" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100]"
          >
            <Day2Presentation onClose={() => setActiveView(null)} />
          </motion.div>
        )}
        {activeView === "day3" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100]"
          >
            <Day3Presentation onClose={() => setActiveView(null)} />
          </motion.div>
        )}
        {activeView === "day4" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100]"
          >
            <Day4Presentation onClose={() => setActiveView(null)} />
          </motion.div>
        )}
        {activeView === "appendix" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100]"
          >
            <LaborLawPresentation onClose={() => setActiveView(null)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
