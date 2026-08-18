import React from 'react';
import { motion } from 'motion/react';
import { DivisionWrapper } from './DivisionWrapper';
import { PROJECTS_DATA } from '../../data/portfolioData';
import { Project } from '../../types';
import { FolderGit2, Star, ExternalLink, Github, ArrowUpRight, Zap, Layers, Sparkles } from 'lucide-react';

interface ProjectsDivisionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsDivision: React.FC<ProjectsDivisionProps> = ({ onSelectProject }) => {
  return (
    <DivisionWrapper
      id="projects"
      title="PROJECTS"
      subtitle="Production AI deployments, open-source repositories & edge engines"
      iconName="FolderGit2"
      badgeText="PRODUCTION REPOSITORIES"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PROJECTS_DATA.map((project) => (
          <div
            key={project.id}
            className="p-4 md:p-5 rounded-xl bg-[#111111] border border-white/[0.06] hover:border-[#9c8461]/40 transition-all flex flex-col justify-between space-y-4 group relative overflow-hidden"
          >
            {/* Top row */}
            <div className="space-y-2">
              <div className="flex items-start justify-between gap-2">
                <span className="text-[9px] font-mono uppercase tracking-[0.2em] px-2 py-0.5 rounded bg-[#181818] text-[#c4aa82] border border-[#9c8461]/25">
                  {project.category}
                </span>

                <div className="flex items-center gap-2">
                  {project.stars && (
                    <span className="flex items-center gap-1 text-[10px] font-mono text-[#c4aa82] bg-[#181818] border border-[#9c8461]/30 px-2 py-0.5 rounded">
                      <Star className="w-3 h-3 fill-[#c4aa82] text-[#c4aa82]" />
                      {project.stars}
                    </span>
                  )}
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-[#181818] text-[#737373] border border-white/[0.04]">
                    {project.status}
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-base md:text-lg font-serif font-bold text-[#e5e5e5] group-hover:text-white transition-colors flex items-center gap-2">
                  {project.title}
                </h3>
                <p className="text-xs text-[#9c8461] font-light mt-0.5">
                  {project.tagline}
                </p>
              </div>

              <p className="text-xs text-[#a3a3a3] leading-relaxed font-light">
                {project.description}
              </p>
            </div>

            {/* Architecture detail highlight */}
            {project.metrics && (
              <div className="p-2.5 rounded-lg bg-[#161616] border border-white/[0.04] text-xs font-mono flex items-center justify-between text-[#a3a3a3]">
                <span className="text-[10px] text-[#737373] uppercase tracking-wider">Benchmark:</span>
                <span className="text-[#c4aa82] font-bold">{project.metrics}</span>
              </div>
            )}

            {/* Tags & Action Buttons */}
            <div className="space-y-3 pt-1 border-t border-white/[0.05]">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#181818] text-[#737373] border border-white/[0.04]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between gap-2 pt-1">
                <button
                  id={`project-inspect-${project.id}`}
                  onClick={() => onSelectProject(project)}
                  className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#c4aa82] hover:text-[#e5e5e5] flex items-center gap-1.5 py-1.5 px-3 rounded-lg bg-[#181818] hover:bg-[#202020] border border-[#9c8461]/30 transition-all active:scale-95 cursor-pointer"
                >
                  <Layers className="w-3.5 h-3.5 text-[#9c8461]" />
                  <span>Inspect Architecture</span>
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-[#181818] hover:bg-[#222222] text-[#737373] hover:text-[#e5e5e5] border border-white/[0.04] transition-colors"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-[#181818] hover:bg-[#9c8461]/20 text-[#737373] hover:text-[#c4aa82] border border-white/[0.04] transition-colors"
                      title="Live Preview / Documentation"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </DivisionWrapper>
  );
};
