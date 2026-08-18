import React, { useState } from 'react';
import { DivisionWrapper } from './DivisionWrapper';
import { TOOLS_DATA } from '../../data/portfolioData';
import { DynamicIcon } from '../DynamicIcon';
import { Wrench, Terminal, Cpu, Cloud, Database } from 'lucide-react';

export const ToolsDivision: React.FC = () => {
  const [selectedCat, setSelectedCat] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Toolchains' },
    { id: 'AI & ML Frameworks', label: 'AI & ML Frameworks' },
    { id: 'Cloud & Distributed', label: 'Cloud & Distributed' },
    { id: 'Development & DevSecOps', label: 'DevSecOps & IDEs' },
    { id: 'Edge & Embedded', label: 'Edge & Hardware' },
  ];

  const filteredTools = selectedCat === 'all'
    ? TOOLS_DATA
    : TOOLS_DATA.filter((t) => t.category === selectedCat);

  return (
    <DivisionWrapper
      id="tools"
      title="TOOLS"
      subtitle="Developer toolchain, neural compilers, cloud orchestrators & hardware SDKs"
      iconName="Wrench"
      badgeText="MODERN STACK"
    >
      <div className="space-y-5">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCat(c.id)}
              className={`text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 rounded-xl font-semibold transition-all select-none cursor-pointer ${
                selectedCat === c.id
                  ? 'bg-[#181818] text-[#e5e5e5] shadow-md shadow-[#9c8461]/10 border border-[#9c8461]/80'
                  : 'bg-[#111111] text-[#737373] hover:text-[#e5e5e5] border border-white/[0.05] hover:bg-[#161616]'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {filteredTools.map((tool) => (
            <div
              key={tool.name}
              className="p-3.5 rounded-xl bg-[#111111] border border-white/[0.06] hover:border-[#9c8461]/30 transition-all flex items-start gap-3 group"
            >
              <div className="w-9 h-9 rounded-lg bg-[#181818] border border-[#9c8461]/30 flex items-center justify-center text-[#9c8461] group-hover:text-[#c4aa82] transition-all flex-shrink-0 mt-0.5">
                <DynamicIcon name={tool.icon || 'Wrench'} className="w-4 h-4" />
              </div>

              <div className="space-y-1 min-w-0 flex-1">
                <div className="flex items-center justify-between gap-1">
                  <h4 className="text-xs font-semibold text-[#e5e5e5] group-hover:text-white truncate">
                    {tool.name}
                  </h4>
                  <span className="text-[9px] font-mono text-[#c4aa82] bg-[#181818] px-1.5 py-0.5 rounded border border-[#9c8461]/25 flex-shrink-0">
                    {tool.experience}
                  </span>
                </div>
                <p className="text-[10px] text-[#737373] line-clamp-2 leading-relaxed font-light">
                  {tool.useCase}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DivisionWrapper>
  );
};
