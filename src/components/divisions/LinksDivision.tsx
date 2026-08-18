import React, { useState } from 'react';
import { DivisionWrapper } from './DivisionWrapper';
import { LINKS_DATA } from '../../data/portfolioData';
import { DynamicIcon } from '../DynamicIcon';
import { ExternalLink, Copy, Check, Sparkles } from 'lucide-react';

export const LinksDivision: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (url: string, id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <DivisionWrapper
      id="links"
      title="LINKS"
      subtitle="Ecosystem entry points, publications & developer platforms"
      iconName="ExternalLink"
      badgeText="CONNECT & REPOSITORIES"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {LINKS_DATA.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-[#111111] border border-white/[0.06] hover:border-[#9c8461]/40 transition-all flex flex-col justify-between space-y-3 group relative overflow-hidden"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="w-8 h-8 rounded-lg bg-[#181818] border border-[#9c8461]/30 flex items-center justify-center text-[#9c8461] group-hover:scale-105 transition-transform">
                  <DynamicIcon name={link.icon} className="w-4 h-4 text-[#9c8461]" />
                </div>
                {link.badge && (
                  <span className="text-[9px] font-mono tracking-wider uppercase px-2 py-0.5 rounded bg-[#181818] text-[#c4aa82] border border-[#9c8461]/20">
                    {link.badge}
                  </span>
                )}
              </div>

              <div>
                <h4 className="text-sm font-serif font-bold text-[#e5e5e5] group-hover:text-white transition-colors flex items-center gap-1.5">
                  {link.title}
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 text-[#9c8461] transition-opacity" />
                </h4>
                <span className="text-[9px] font-mono text-[#737373] uppercase tracking-wider">
                  {link.category}
                </span>
              </div>

              <p className="text-xs text-[#737373] leading-relaxed font-light">
                {link.description}
              </p>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-white/[0.05] text-xs">
              <span className="font-mono text-[10px] text-[#737373] truncate max-w-[170px]">
                {link.url.replace(/^https?:\/\//, '')}
              </span>
              <button
                onClick={(e) => handleCopy(link.url, link.id, e)}
                title="Copy URL"
                className="p-1.5 rounded-lg bg-[#181818] hover:bg-[#9c8461]/20 text-[#737373] hover:text-[#e5e5e5] border border-white/[0.04] transition-colors"
              >
                {copiedId === link.id ? (
                  <Check className="w-3.5 h-3.5 text-[#c4aa82]" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          </a>
        ))}
      </div>
    </DivisionWrapper>
  );
};
