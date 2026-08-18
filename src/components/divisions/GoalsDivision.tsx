import React from 'react';
import { motion } from 'motion/react';
import { DivisionWrapper } from './DivisionWrapper';
import { GOALS_DATA } from '../../data/portfolioData';
import { Target, Flag, Calendar, Rocket, Sparkles, CheckCircle2 } from 'lucide-react';

export const GoalsDivision: React.FC = () => {
  return (
    <DivisionWrapper
      id="goals"
      title="GOALS"
      subtitle="Strategic roadmap, technical research milestones & long-term venture objectives"
      iconName="Target"
      badgeText="2026 – 2027 ROADMAP"
    >
      <div className="space-y-4">
        {GOALS_DATA.map((goal, idx) => (
          <div
            key={goal.id}
            className="p-4 md:p-5 rounded-xl bg-[#111111] border border-white/[0.06] hover:border-[#9c8461]/30 transition-all space-y-3 relative overflow-hidden group"
          >
            {/* Header */}
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#181818] text-[#c4aa82] border border-[#9c8461]/25">
                    {goal.period}
                  </span>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-[#181818] text-[#737373]">
                    {goal.category}
                  </span>
                </div>
                <h4 className="text-sm md:text-base font-serif font-bold text-[#e5e5e5] group-hover:text-white transition-colors">
                  {goal.title}
                </h4>
              </div>

              <div className="flex items-center gap-2">
                <span
                  className={`text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded ${
                    goal.status === 'In Progress'
                      ? 'bg-[#181818] text-[#c4aa82] border border-[#9c8461]/30'
                      : 'bg-[#181818] text-[#737373]'
                  }`}
                >
                  {goal.status}
                </span>
                <span className="text-xs font-mono font-bold text-[#c4aa82]">
                  {goal.progressPercentage}%
                </span>
              </div>
            </div>

            {/* Progress bar */}
            <div className="w-full h-1 bg-[#181818] rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${goal.progressPercentage}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.05 }}
                className="h-full bg-[#9c8461] rounded-full"
              />
            </div>

            <p className="text-xs text-[#737373] leading-relaxed font-light">
              {goal.description}
            </p>

            <div className="flex items-center justify-between pt-1 border-t border-white/[0.05] text-[10px]">
              <span className="text-[#737373] uppercase tracking-[0.2em] font-bold">
                Target Metric:
              </span>
              <span className="font-mono text-[#c4aa82] font-medium">
                {goal.targetMetrics}
              </span>
            </div>
          </div>
        ))}
      </div>
    </DivisionWrapper>
  );
};
