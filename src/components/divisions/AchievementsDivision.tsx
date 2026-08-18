import React from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { DivisionWrapper } from './DivisionWrapper';
import { ACHIEVEMENTS_DATA } from '../../data/portfolioData';
import { Trophy, Award, Calendar, Sparkles, CheckCircle2 } from 'lucide-react';

export const AchievementsDivision: React.FC = () => {
  const triggerConfetti = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 40,
      spread: 60,
      origin: { x, y },
      colors: ['#8b5cf6', '#a855f7', '#6366f1', '#ec4899'],
    });
  };

  return (
    <DivisionWrapper
      id="achievements"
      title="ACHIEVEMENTS"
      subtitle="Honors, hackathon victories, research publications & venture recognitions"
      iconName="Trophy"
      badgeText="HONORS & MILESTONES"
    >
      <div className="space-y-3.5">
        {ACHIEVEMENTS_DATA.map((item) => (
          <motion.div
            key={item.id}
            onClick={triggerConfetti}
            whileHover={{ scale: 1.01 }}
            className="p-4 md:p-5 rounded-xl bg-[#111111] border border-white/[0.06] hover:border-[#9c8461]/40 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer group relative overflow-hidden"
          >
            {/* Subtle glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#9c8461]/0 via-[#9c8461]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#181818] border border-[#9c8461]/30 flex items-center justify-center text-[#9c8461] flex-shrink-0 group-hover:scale-105 transition-transform">
                <Trophy className="w-5 h-5 text-[#9c8461]" />
              </div>

              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="text-sm md:text-base font-serif font-bold text-[#e5e5e5] group-hover:text-white transition-colors">
                    {item.title}
                  </h4>
                  <span className="text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#181818] text-[#c4aa82] border border-[#9c8461]/25">
                    {item.badge}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs text-[#737373]">
                  <span className="font-medium text-[#a3a3a3]">{item.organization}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1 font-mono text-[10px]">
                    <Calendar className="w-3 h-3 text-[#737373]" />
                    {item.date}
                  </span>
                </div>

                <p className="text-xs text-[#a3a3a3] leading-relaxed pt-0.5 font-light">
                  {item.description}
                </p>
              </div>
            </div>

            {item.metric && (
              <div className="flex md:flex-col items-center md:items-end justify-between md:justify-center border-t md:border-t-0 md:border-l border-white/[0.05] pt-2 md:pt-0 md:pl-4 flex-shrink-0">
                <span className="text-[9px] text-[#737373] uppercase tracking-[0.2em] font-bold">
                  Impact Rank
                </span>
                <span className="text-xs font-mono font-bold text-[#c4aa82] bg-[#181818] px-2 py-0.5 rounded border border-[#9c8461]/30">
                  {item.metric}
                </span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </DivisionWrapper>
  );
};
