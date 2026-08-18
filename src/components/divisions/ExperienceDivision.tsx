import React from 'react';
import { DivisionWrapper } from './DivisionWrapper';
import { EXPERIENCE_DATA } from '../../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle, TrendingUp, Layers } from 'lucide-react';

export const ExperienceDivision: React.FC = () => {
  return (
    <DivisionWrapper
      id="experience"
      title="EXPERIENCE"
      subtitle="Engineering leadership, venture founding & research track"
      iconName="Briefcase"
      badgeText="4+ YEARS IN DEEP TECH"
    >
      <div className="space-y-4">
        {EXPERIENCE_DATA.map((exp) => (
          <div
            key={exp.id}
            className="p-4 md:p-5 rounded-xl bg-[#111111] border border-white/[0.06] hover:border-[#9c8461]/30 transition-all space-y-3.5 relative overflow-hidden group"
          >
            {exp.isCurrent && (
              <div className="absolute top-0 right-0 px-3 py-0.5 bg-[#9c8461] text-black text-[9px] font-bold uppercase tracking-[0.2em] rounded-bl-lg">
                Current Role
              </div>
            )}

            {/* Header */}
            <div className="flex flex-wrap items-start justify-between gap-2 pr-12">
              <div>
                <h3 className="text-sm md:text-base font-serif font-bold text-[#e5e5e5] group-hover:text-white transition-colors">
                  {exp.role}
                </h3>
                <div className="flex items-center gap-2 mt-0.5 text-xs text-[#9c8461] font-medium">
                  <span>{exp.company}</span>
                  <span className="text-[#444444]">•</span>
                  <span className="text-[#737373] font-light">{exp.companyType}</span>
                </div>
              </div>

              <div className="flex flex-col items-end text-xs text-[#737373]">
                <span className="flex items-center gap-1 font-mono text-[#a3a3a3] text-[10px]">
                  <Calendar className="w-3 h-3 text-[#9c8461]" />
                  {exp.period}
                </span>
                <span className="flex items-center gap-1 text-[10px] text-[#737373] mt-0.5">
                  <MapPin className="w-3 h-3" />
                  {exp.location}
                </span>
              </div>
            </div>

            <p className="text-xs text-[#a3a3a3] leading-relaxed font-light">
              {exp.summary}
            </p>

            {/* Key Achievements */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[9px] font-bold text-[#737373] uppercase tracking-[0.2em] block">
                Impact & Key Milestones:
              </span>
              <div className="space-y-1.5">
                {exp.achievements.map((ach, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#a3a3a3] font-light">
                    <CheckCircle className="w-3.5 h-3.5 text-[#9c8461] mt-0.5 flex-shrink-0" />
                    <span>{ach}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics & Tech Stack */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-white/[0.05]">
              <div className="flex flex-wrap gap-1.5">
                {exp.technologies.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#181818] text-[#c4aa82] border border-white/[0.04]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {exp.metrics && (
                <div className="flex items-center gap-3">
                  {exp.metrics.map((m, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-xs font-mono">
                      <TrendingUp className="w-3.5 h-3.5 text-[#9c8461]" />
                      <span className="text-[#737373] text-[10px] uppercase tracking-wider">{m.label}:</span>
                      <span className="text-[#e5e5e5] font-bold">{m.value}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </DivisionWrapper>
  );
};
