import React from 'react';
import { motion } from 'motion/react';
import { DivisionWrapper } from './DivisionWrapper';
import { PROFILE_DATA } from '../../data/portfolioData';
import { Sparkles, Brain, Cpu, Zap, Rocket, Terminal, ShieldCheck } from 'lucide-react';

export const AboutDivision: React.FC = () => {
  const pillars = [
    {
      title: 'Autonomous Multi-Agent Swarms',
      desc: 'Architecting self-correcting agent state machines with asynchronous memory graphs and deterministic tool verification.',
      icon: Brain,
      tag: 'Agentic Workflows',
    },
    {
      title: 'Edge & Hardware Acceleration',
      desc: 'Compiling neural models with FP8/INT4 quantization and custom TensorRT / CUDA kernels for sub-10ms edge execution.',
      icon: Cpu,
      tag: 'High Throughput',
    },
    {
      title: 'Venture & Product Execution',
      desc: 'Translating breakthrough research into commercial-grade systems, rapid prototype loops, and scalable cloud pipelines.',
      icon: Rocket,
      tag: '0-to-1 Founding',
    },
    {
      title: 'Zero-Leakage Security & Privacy',
      desc: 'Designing air-gapped knowledge networks with cryptographic audit chains, verifiable citations, and guardrail enforcement.',
      icon: ShieldCheck,
      tag: 'Enterprise Safety',
    },
  ];

  return (
    <DivisionWrapper
      id="about"
      title="ABOUT"
      subtitle="Executive statement, vision & core engineering pillars"
      iconName="User"
      badgeText="FOUNDING & AI ARCHITECTURE"
    >
      <div className="space-y-6">
        {/* Main hero statement */}
        <div className="p-4 md:p-5 rounded-xl bg-[#121212] border border-white/[0.06] shadow-sm relative overflow-hidden">
          <div className="flex items-center gap-2 text-[#9c8461] text-[10px] font-bold uppercase tracking-[0.25em] mb-2 font-mono">
            <Sparkles className="w-3.5 h-3.5 text-[#9c8461]" />
            <span>AI Engineer & Tech Entrepreneur</span>
          </div>
          <p className="text-[#e5e5e5] text-sm md:text-base leading-relaxed mb-2 font-light">
            {PROFILE_DATA.bio}
          </p>
          <p className="text-[#737373] text-xs md:text-sm leading-relaxed font-light">
            {PROFILE_DATA.summary}
          </p>
        </div>

        {/* 4 Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {PROFILE_DATA.metrics.map((m, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -2 }}
              className="p-3.5 rounded-xl bg-[#111111] border border-white/[0.06] hover:border-[#9c8461]/40 transition-all text-center group"
            >
              <span className="text-2xl md:text-3xl font-serif font-bold text-[#e5e5e5] group-hover:text-[#c4aa82] tracking-tight transition-colors">
                {m.value}
              </span>
              <p className="text-[10px] font-bold text-[#9c8461] mt-1 uppercase tracking-[0.2em]">
                {m.label}
              </p>
              <p className="text-[10px] text-[#737373] mt-0.5 line-clamp-1 font-light">
                {m.detail}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Core Pillars */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#737373]">
            <Terminal className="w-3.5 h-3.5 text-[#9c8461]" />
            <span>Core Technical Pillars</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#111111] border border-white/[0.06] hover:border-[#9c8461]/30 transition-all flex items-start gap-3.5 group"
                >
                  <div className="p-2 rounded-lg bg-[#181818] border border-[#9c8461]/30 text-[#9c8461] group-hover:text-[#c4aa82] transition-all flex-shrink-0 mt-0.5">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="space-y-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-xs md:text-sm font-semibold text-[#e5e5e5] group-hover:text-white">
                        {pillar.title}
                      </h4>
                      <span className="text-[8px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded bg-[#181818] text-[#c4aa82] border border-white/[0.04] flex-shrink-0">
                        {pillar.tag}
                      </span>
                    </div>
                    <p className="text-xs text-[#737373] leading-relaxed font-light">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </DivisionWrapper>
  );
};
