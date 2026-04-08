import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, AlertTriangle, Copyright, ShieldAlert, BookOpen } from "lucide-react";

interface CopyrightModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CopyrightModal: React.FC<CopyrightModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-bg-base/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-3xl glass-card rounded-3xl overflow-hidden shadow-2xl border border-white/10"
          >
            {/* Header */}
            <div className="p-6 md:p-8 border-b border-white/10 flex items-center justify-between bg-white/5">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-yellow-neon/20 rounded-lg text-yellow-neon">
                  <AlertTriangle size={24} />
                </div>
                <h2 className="text-xl md:text-2xl font-black text-white tracking-tight">
                  수강 가이드 및 저작권 안내
                </h2>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/40 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 md:p-10 max-h-[70vh] overflow-y-auto custom-scrollbar space-y-10">
              <p className="text-lg text-text-sub leading-relaxed font-medium">
                본 교안의 효율적인 학습과 권리 보호를 위해 다음 사항을 반드시 확인하고 준수하여 주시기 바랍니다.
              </p>

              {/* Section 1 */}
              <section className="space-y-4">
                <div className="flex items-center gap-3 text-cyan-neon font-black text-lg">
                  <BookOpen size={20} />
                  <span>1. 가설 기반의 표준 모델(FM) 안내</span>
                </div>
                <ul className="space-y-3 text-white/80 leading-relaxed pl-8 list-disc marker:text-cyan-neon/50">
                  <li>본 자료는 MICE 입문자의 체계적인 이해를 돕기 위해 특정 사례를 가정하여 설계된 가설 기반의 교육용 샘플입니다.</li>
                  <li>모든 내용은 실무 현장에서 통용되는 표준 운영 정석(Field Manual)과 스토리라인에 따라 구성되었습니다.</li>
                  <li>본 교안이 모든 행사 상황을 대변하는 절대적 정답은 아니며, 실제 실무 적용 시에는 각 프로젝트의 특수성과 발주처의 요구에 따라 유연하게 변형하여 적용해야 함을 명시합니다.</li>
                </ul>
              </section>

              {/* Section 2 */}
              <section className="space-y-4">
                <div className="flex items-center gap-3 text-pink-neon font-black text-lg">
                  <Copyright size={20} />
                  <span>2. 저작권 보호 및 무단 전재 금지 (Copyright)</span>
                </div>
                <div className="space-y-4 pl-8">
                  <p className="text-white/90 font-bold underline decoration-pink-neon/30 underline-offset-4">
                    저작권 귀속: 본 교육 자료(텍스트, 도표, 큐시트 양식, 운영 노하우 등)에 대한 모든 저작권 및 지식재산권은 본 교육 기관 및 저작권자에게 귀속되어 있습니다.
                  </p>
                  <p className="text-white/80">
                    무단 사용 금지: 저작권자의 사전 서면 동의 없이 본 자료의 전부 또는 일부를 다음과 같은 행위로 이용하는 것을 엄격히 금지합니다.
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-white/60 italic">
                    <li className="flex gap-2"><span>•</span> 무단 복제, 배포, 전송, 출판, 판매하는 행위</li>
                    <li className="flex gap-2"><span>•</span> 수정, 변형하여 2차적 저작물 작성 및 영리 목적 사용</li>
                    <li className="flex gap-2 md:col-span-2"><span>•</span> 블로그, SNS, 커뮤니티 등 온라인상에 무단 게시하는 행위</li>
                  </ul>
                  <div className="p-4 bg-pink-neon/5 border border-pink-neon/20 rounded-xl flex gap-4 items-start">
                    <ShieldAlert className="text-pink-neon shrink-0 mt-1" size={20} />
                    <p className="text-sm text-pink-neon/90 leading-relaxed">
                      <strong>법적 책임:</strong> 위 사항을 위반할 경우, 저작권법 제136조 등에 의거하여 민·형사상의 법적 책임을 질 수 있으며 손해배상이 청구될 수 있습니다.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section className="space-y-4">
                <div className="flex items-center gap-3 text-green-neon font-black text-lg">
                  <ShieldAlert size={20} />
                  <span>3. 자료의 용도 제한</span>
                </div>
                <p className="text-white/80 leading-relaxed pl-8">
                  본 자료는 오직 본 교육 과정의 수강생들을 위한 학습 보조 자료로만 제공됩니다. 
                  교육 종료 후에도 개인적인 학습 용도 외의 외부 유출이나 상업적 이용을 금하며, 
                  지식 자산 보호를 위한 수강생 여러분의 적극적인 협조를 부탁드립니다.
                </p>
              </section>
            </div>

            {/* Footer */}
            <div className="p-6 bg-white/5 border-t border-white/10 flex justify-end">
              <button
                onClick={onClose}
                className="px-8 py-3 bg-cyan-neon text-bg-base font-black rounded-xl hover:bg-white transition-all active:scale-95"
              >
                확인했습니다
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CopyrightModal;
