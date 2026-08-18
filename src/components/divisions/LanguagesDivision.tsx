import React from 'react';
import { motion } from 'motion/react';
import { DivisionWrapper } from './DivisionWrapper';
import { LANGUAGES_DATA } from '../../data/portfolioData';
import { Code2, Globe, Sparkles } from 'lucide-react';

export const LanguagesDivision: React.FC = () => {
  const programmingLangs = LANGUAGES_DATA.filter((l) => l.type === 'programming');
  const spokenLangs = LANGUAGES_DATA.filter((l) => l.type === 'spoken');

  return (
    <DivisionWrapper
      id="languages"
      title="LANGUAGES"
      subtitle="Syntactic & linguistic fluency across computational and natural languages"
      iconName="Code2"
      badgeText="SYSTEMS & SPOKEN"
    >
      <div className="space-y-6">
        {/* Programming Languages */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#737373]">
            <Code2 className="w-3.5 h-3.5 text-[#9c8461]" />
            <span>Core Computational Languages</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {programmingLangs.map((lang, idx) => (
              <div
                key={lang.name}
                className="p-4 rounded-xl bg-[#111111] border border-white/[0.06] hover:border-[#9c8461]/30 transition-all space-y-2.5"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h4 className="text-sm font-semibold text-[#e5e5e5] flex items-center gap-2">
                      {lang.name}
                    </h4>
                    <p className="text-[10px] text-[#9c8461] uppercase tracking-wider font-light">
                      {lang.proficiency}
                    </p>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#c4aa82]">
                    {lang.levelPercentage}%
                  </span>
                </div>

                <div className="w-full h-1 bg-[#181818] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.levelPercentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: idx * 0.05 }}
                    className="h-full bg-[#9c8461] rounded-full"
                  />
                </div>

                <p className="text-xs text-[#737373] leading-relaxed font-light">
                  {lang.context}
                </p>

                {lang.favoriteFrameworks && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {lang.favoriteFrameworks.map((fw, fwIdx) => (
                      <span
                        key={fwIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#181818] text-[#737373] border border-white/[0.04]"
                      >
                        {fw}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Spoken Languages */}
        <div className="space-y-3 pt-2 border-t border-white/[0.05]">
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#737373]">
            <Globe className="w-3.5 h-3.5 text-[#9c8461]" />
            <span>Spoken & Communication Languages</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {spokenLangs.map((lang) => (
              <div
                key={lang.name}
                className="p-4 rounded-xl bg-[#111111] border border-white/[0.06] hover:border-[#9c8461]/30 transition-all flex items-start gap-3"
              >
                <div className="w-9 h-9 rounded-xl bg-[#181818] border border-[#9c8461]/30 flex items-center justify-center text-[#9c8461] flex-shrink-0">
                  <Globe className="w-4 h-4 text-[#9c8461]" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-sm font-semibold text-[#e5e5e5]">{lang.name}</h4>
                    <span className="text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#181818] text-[#c4aa82]">
                      {lang.proficiency}
                    </span>
                  </div>
                  <p className="text-xs text-[#737373] font-light">{lang.context}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DivisionWrapper>
  );
};
