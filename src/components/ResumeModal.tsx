import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROFILE_DATA, ACADEMIC_DATA, EXPERIENCE_DATA, SKILLS_DATA } from '../data/portfolioData';
import { X, Printer, Mail, Phone, MapPin } from 'lucide-react';
import { DefaultAvatarSvg } from './DefaultAvatarSvg';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [avatarSrc, setAvatarSrc] = useState<string>(() => {
    return localStorage.getItem('custom_portfolio_avatar') || '/image.jpg';
  });
  const [imageLoadFailed, setImageLoadFailed] = useState<boolean>(false);

  useEffect(() => {
    const handleAvatarUpdate = () => {
      const saved = localStorage.getItem('custom_portfolio_avatar');
      if (saved) {
        setAvatarSrc(saved);
        setImageLoadFailed(false);
      }
    };
    window.addEventListener('avatarUpdated', handleAvatarUpdate);
    return () => window.removeEventListener('avatarUpdated', handleAvatarUpdate);
  }, []);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto print:p-0 print:bg-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          className="w-full max-w-4xl bg-[#0d0d0d] border border-white/[0.08] rounded-2xl shadow-2xl overflow-hidden my-6 print:border-0 print:shadow-none print:bg-white print:text-black"
        >
          {/* Top Bar for Modal Controls (Hidden in Print) */}
          <div className="p-4 bg-[#141414] border-b border-white/[0.06] flex items-center justify-between print:hidden">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#9c8461]" />
              <h3 className="text-xs font-mono font-bold text-[#e5e5e5] uppercase tracking-[0.2em]">
                Curriculum Vitae — {PROFILE_DATA.name}
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#9c8461] hover:bg-[#b09670] text-black text-xs font-bold transition-all shadow-md active:scale-95 cursor-pointer uppercase tracking-wider"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / Save PDF</span>
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-xl bg-[#181818] hover:bg-[#222222] text-[#737373] hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Printable Resume Canvas */}
          <div className="p-6 md:p-8 space-y-6 max-h-[80vh] overflow-y-auto print:max-h-none print:overflow-visible text-[#e5e5e5] print:text-black print:p-8 custom-scrollbar">
            {/* Resume Header */}
            <div className="border-b border-white/[0.08] print:border-zinc-300 pb-5 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#9c8461]/60 print:border-black shadow-md flex-shrink-0 bg-[#141414] flex items-center justify-center">
                    {!imageLoadFailed && avatarSrc ? (
                      <img
                        src={avatarSrc}
                        alt={PROFILE_DATA.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover rounded-full"
                        onError={() => setImageLoadFailed(true)}
                      />
                    ) : (
                      <DefaultAvatarSvg className="w-full h-full object-cover" />
                    )}
                  </div>
                  <div>
                    <h1 className="text-xl md:text-2xl font-serif font-bold tracking-wider text-[#e5e5e5] print:text-black uppercase">
                      {PROFILE_DATA.name}
                    </h1>
                    <p className="text-xs font-semibold text-[#9c8461] print:text-zinc-800 tracking-[0.2em] uppercase mt-0.5">
                      {PROFILE_DATA.title}
                    </p>
                  </div>
                </div>

                <div className="text-xs font-mono text-[#a3a3a3] print:text-zinc-700 space-y-1 sm:text-right">
                  <div className="flex sm:justify-end items-center gap-1.5">
                    <Phone className="w-3 h-3 text-[#9c8461] print:text-zinc-700" />
                    <span>{PROFILE_DATA.phone}</span>
                  </div>
                  <div className="flex sm:justify-end items-center gap-1.5">
                    <Mail className="w-3 h-3 text-[#9c8461] print:text-zinc-700" />
                    <span>{PROFILE_DATA.email}</span>
                  </div>
                  <div className="flex sm:justify-end items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-[#9c8461] print:text-zinc-700" />
                    <span>{PROFILE_DATA.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-[#a3a3a3] print:text-zinc-700 leading-relaxed pt-2 font-light">
                {PROFILE_DATA.bio} {PROFILE_DATA.summary}
              </p>
            </div>

            {/* Experience */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#9c8461] print:text-zinc-900 border-b border-white/[0.08] print:border-zinc-300 pb-1">
                Professional Experience & Founding
              </h2>
              <div className="space-y-4">
                {EXPERIENCE_DATA.map((exp) => (
                  <div key={exp.id} className="space-y-1.5">
                    <div className="flex flex-wrap justify-between items-baseline text-xs">
                      <div>
                        <span className="font-serif font-bold text-[#e5e5e5] print:text-black text-sm">
                          {exp.role}
                        </span>
                        <span className="text-[#737373] print:text-zinc-600 ml-1.5">
                          — {exp.company} ({exp.companyType})
                        </span>
                      </div>
                      <span className="font-mono text-[#737373] print:text-zinc-600 text-[10px]">
                        {exp.period} | {exp.location}
                      </span>
                    </div>
                    <ul className="list-disc list-inside text-xs text-[#a3a3a3] print:text-zinc-700 space-y-1 font-light">
                      {exp.achievements.map((ach, idx) => (
                        <li key={idx} className="leading-relaxed">
                          {ach}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic & Research */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#9c8461] print:text-zinc-900 border-b border-white/[0.08] print:border-zinc-300 pb-1">
                Academic Background & Research
              </h2>
              <div className="space-y-3">
                {ACADEMIC_DATA.map((item) => (
                  <div key={item.id} className="space-y-1 text-xs">
                    <div className="flex flex-wrap justify-between items-baseline">
                      <span className="font-serif font-bold text-[#e5e5e5] print:text-black">
                        {item.degree}
                      </span>
                      <span className="font-mono text-[#737373] print:text-zinc-600 text-[10px]">
                        {item.period} | {item.grade}
                      </span>
                    </div>
                    <p className="text-[#737373] print:text-zinc-600 font-light">{item.institution}</p>
                    {item.researchTopic && (
                      <p className="text-[#a3a3a3] print:text-zinc-800 italic font-light">
                        Research: {item.researchTopic}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Key Skills */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#9c8461] print:text-zinc-900 border-b border-white/[0.08] print:border-zinc-300 pb-1">
                Core Technical Proficiencies
              </h2>
              <div className="grid grid-cols-2 gap-2 text-xs text-[#a3a3a3] print:text-zinc-800 font-light">
                {SKILLS_DATA.slice(0, 8).map((s) => (
                  <div key={s.name} className="flex items-center justify-between pr-2">
                    <span>{s.name}</span>
                    <span className="font-mono text-[#c4aa82] print:text-zinc-900 font-bold text-[11px]">
                      {s.level}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
