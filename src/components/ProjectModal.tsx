import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';
import { X, ExternalLink, Github, Star, Layers, Cpu, CheckCircle, ShieldCheck } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="w-full max-w-2xl bg-[#0d0d0d] border border-white/[0.08] rounded-2xl shadow-2xl overflow-hidden relative my-8"
        >
          {/* Header Bar */}
          <div className="p-5 bg-[#111111] border-b border-white/[0.06] flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#181818] text-[#c4aa82] border border-[#9c8461]/30">
                  {project.category}
                </span>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-[#181818] text-[#737373] border border-white/[0.04]">
                  {project.status}
                </span>
              </div>
              <h3 className="text-xl font-serif font-bold text-[#e5e5e5]">{project.title}</h3>
              <p className="text-xs text-[#9c8461] font-light mt-0.5">{project.tagline}</p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-[#181818] hover:bg-[#222222] text-[#737373] hover:text-[#e5e5e5] border border-white/[0.04] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-5 md:p-6 space-y-5 max-h-[70vh] overflow-y-auto">
            {/* Overview */}
            <div className="space-y-2">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#737373]">
                System Overview
              </h4>
              <p className="text-xs md:text-sm text-[#a3a3a3] leading-relaxed font-light">
                {project.fullOverview}
              </p>
            </div>

            {/* Architecture breakdown */}
            <div className="space-y-2.5">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#737373] flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-[#9c8461]" />
                <span>Architectural Design & Engineering</span>
              </h4>
              <div className="space-y-2">
                {project.architectureDetails.map((detail, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-[#141414] border border-white/[0.05] text-xs text-[#a3a3a3] flex items-start gap-2.5 font-light"
                  >
                    <CheckCircle className="w-4 h-4 text-[#9c8461] mt-0.5 flex-shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics & Benchmark */}
            {project.metrics && (
              <div className="p-3.5 rounded-xl bg-[#141414] border border-[#9c8461]/25 flex items-center justify-between">
                <div>
                  <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#737373] block">
                    Verified Benchmark Metric
                  </span>
                  <span className="text-xs text-[#a3a3a3] font-light">Measured across production runs</span>
                </div>
                <span className="font-mono text-xs font-bold text-[#c4aa82] bg-[#181818] px-2.5 py-1 rounded border border-[#9c8461]/30">
                  {project.metrics}
                </span>
              </div>
            )}

            {/* Tech stack */}
            <div className="space-y-2">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#737373]">
                Technologies & Frameworks
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#181818] text-[#737373] border border-white/[0.04]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer actions */}
          <div className="p-4 bg-[#111111] border-t border-white/[0.06] flex items-center justify-between">
            <button
              onClick={onClose}
              className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#737373] hover:text-[#e5e5e5] px-3 py-2 cursor-pointer"
            >
              Close
            </button>

            <div className="flex items-center gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#181818] hover:bg-[#222222] text-[#e5e5e5] text-xs font-semibold border border-white/[0.06] transition-all"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#9c8461] hover:bg-[#b09670] text-black text-xs font-bold transition-all shadow-md"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open System</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
