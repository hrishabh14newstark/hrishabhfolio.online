import React from 'react';
import { DivisionWrapper } from './DivisionWrapper';
import { ACADEMIC_DATA } from '../../data/portfolioData';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const AcademicDivision: React.FC = () => {
  return (
    <DivisionWrapper
      id="academic"
      title="ACADEMIC"
      subtitle="Education, research honors & computational foundation"
      iconName="GraduationCap"
      badgeText="ENGINEERING & RESEARCH"
    >
      <div className="space-y-4">
        {ACADEMIC_DATA.map((item) => (
          <div
            key={item.id}
            className="p-4 md:p-5 rounded-xl bg-[#111111] border border-white/[0.06] hover:border-[#9c8461]/30 transition-all space-y-3.5"
          >
            {/* Header */}
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div className="space-y-1 max-w-xl">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#9c8461] flex-shrink-0" />
                  <h3 className="text-sm md:text-base font-serif font-bold text-[#e5e5e5] tracking-wide">
                    {item.degree}
                  </h3>
                </div>
                <p className="text-xs text-[#737373] font-light">
                  {item.institution}
                </p>
              </div>

              <div className="flex flex-col items-end gap-1 text-[10px]">
                <span className="font-mono text-[#c4aa82] bg-[#181818] border border-[#9c8461]/30 px-2 py-0.5 rounded">
                  {item.grade}
                </span>
                <span className="text-[#737373] flex items-center gap-1 font-mono text-[10px]">
                  <Calendar className="w-3 h-3 text-[#737373]" />
                  {item.period}
                </span>
              </div>
            </div>

            <p className="text-xs text-[#a3a3a3] leading-relaxed font-light">
              {item.description}
            </p>

            {item.researchTopic && (
              <div className="p-3 rounded-lg bg-[#161616] border border-[#9c8461]/25 text-xs text-[#e5e5e5]">
                <span className="text-[#9c8461] font-bold uppercase text-[9px] tracking-[0.2em] block mb-0.5">
                  Research Thesis & Focus:
                </span>
                <p className="text-[#e5e5e5] font-light">{item.researchTopic}</p>
              </div>
            )}

            {/* Highlights */}
            {item.highlights && item.highlights.length > 0 && (
              <div className="space-y-1.5 pt-1">
                <span className="text-[9px] font-bold text-[#737373] uppercase tracking-[0.2em] block">
                  Key Academic Honors:
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {item.highlights.map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#a3a3a3] font-light">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#9c8461] mt-0.5 flex-shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Courses Chips */}
            {item.keyCourses && item.keyCourses.length > 0 && (
              <div className="pt-2 border-t border-white/[0.05]">
                <span className="text-[9px] font-bold text-[#737373] uppercase tracking-[0.2em] block mb-1.5">
                  Advanced Coursework:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {item.keyCourses.map((c, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#181818] text-[#737373] border border-white/[0.04]"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </DivisionWrapper>
  );
};
