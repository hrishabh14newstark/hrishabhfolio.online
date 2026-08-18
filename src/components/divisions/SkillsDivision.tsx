import React, { useState } from 'react';
import { motion } from 'motion/react';
import { DivisionWrapper } from './DivisionWrapper';
import { SKILLS_DATA } from '../../data/portfolioData';
import { Cpu, Filter, CheckCircle2, Award, Zap } from 'lucide-react';

export const SkillsDivision: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Domains' },
    { id: 'ai-ml', label: 'AI & Neural Systems' },
    { id: 'engineering', label: 'Systems & Hardware' },
    { id: 'architecture', label: 'Cloud & Infrastructure' },
    { id: 'leadership', label: 'AI Product & Strategy' },
  ];

  const filteredSkills = selectedCategory === 'all'
    ? SKILLS_DATA
    : SKILLS_DATA.filter((s) => s.category === selectedCategory);

  return (
    <DivisionWrapper
      id="skills"
      title="SKILLS"
      subtitle="Depth matrix across machine learning, agentic engines & systems engineering"
      iconName="Cpu"
      badgeText="PRODUCTION TESTED"
    >
      <div className="space-y-5">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 rounded-xl font-semibold transition-all select-none cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#181818] text-[#e5e5e5] shadow-md shadow-[#9c8461]/10 border border-[#9c8461]/80'
                  : 'bg-[#111111] text-[#737373] hover:text-[#e5e5e5] border border-white/[0.05] hover:bg-[#161616]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {filteredSkills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.04 }}
              className="p-3.5 rounded-xl bg-[#111111] border border-white/[0.06] hover:border-[#9c8461]/30 transition-all space-y-2 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-2">
                <h4 className="text-xs md:text-sm font-semibold text-[#e5e5e5] group-hover:text-white leading-snug">
                  {skill.name}
                </h4>
                <span className="text-xs font-mono font-bold text-[#c4aa82] flex-shrink-0">
                  {skill.level}%
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full h-1 bg-[#181818] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="h-full bg-[#9c8461] rounded-full"
                />
              </div>

              <div className="flex items-center justify-between text-[10px] text-[#737373] pt-0.5">
                <p className="text-[10px] text-[#737373] line-clamp-1 font-light">
                  {skill.highlight}
                </p>
                <span className="font-mono text-[9px] text-[#9c8461] flex-shrink-0 ml-2">
                  {skill.years}y exp
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </DivisionWrapper>
  );
};
