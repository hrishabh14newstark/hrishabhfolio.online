import React from 'react';
import { DivisionWrapper } from './DivisionWrapper';
import { HOBBIES_DATA } from '../../data/portfolioData';
import { DynamicIcon } from '../DynamicIcon';
import { Gamepad2, Sparkles, CheckCircle2 } from 'lucide-react';

export const HobbyDivision: React.FC = () => {
  return (
    <DivisionWrapper
      id="hobby"
      title="HOBBY"
      subtitle="Creative outlets, robotics tinkering, astrophotography & strategic pursuits"
      iconName="Gamepad2"
      badgeText="BEYOND CODE"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {HOBBIES_DATA.map((hobby) => (
          <div
            key={hobby.id}
            className="p-4 rounded-xl bg-[#111111] border border-white/[0.06] hover:border-[#9c8461]/40 transition-all flex flex-col justify-between space-y-3 group"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#181818] border border-[#9c8461]/30 flex items-center justify-center text-[#9c8461] group-hover:scale-105 transition-transform">
                  <DynamicIcon name={hobby.icon} className="w-4 h-4 text-[#9c8461]" />
                </div>
                <div>
                  <h4 className="text-sm font-serif font-bold text-[#e5e5e5] group-hover:text-white transition-colors">
                    {hobby.title}
                  </h4>
                  <p className="text-[10px] text-[#9c8461] font-light uppercase tracking-wider">{hobby.subtitle}</p>
                </div>
              </div>

              <p className="text-xs text-[#737373] leading-relaxed font-light">
                {hobby.description}
              </p>
            </div>

            {hobby.highlights && (
              <div className="pt-2 border-t border-white/[0.05] space-y-1">
                {hobby.highlights.map((hl, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 text-[10px] text-[#737373] font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9c8461]" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </DivisionWrapper>
  );
};
