import React from 'react';
import { motion } from 'motion/react';
import { SectionId } from '../../types';
import { DynamicIcon } from '../DynamicIcon';

interface DivisionWrapperProps {
  id: SectionId;
  title: string;
  subtitle?: string;
  iconName: string;
  badgeText?: string;
  children: React.ReactNode;
  className?: string;
}

export const DivisionWrapper: React.FC<DivisionWrapperProps> = ({
  id,
  title,
  subtitle,
  iconName,
  badgeText,
  children,
  className = '',
}) => {
  return (
    <section
      id={`section-${id}`}
      data-section={id}
      className={`w-full h-full flex flex-col bg-[#0d0d0d] border border-white/[0.06] rounded-2xl shadow-2xl relative overflow-hidden transition-colors duration-300 ${className}`}
    >
      {/* Subtle top ambient champagne glow */}
      <div className="absolute top-0 right-0 w-64 h-24 bg-[#9c8461]/[0.03] blur-3xl pointer-events-none" />

      {/* Fixed Section Header (Fixed in place, does not scroll) */}
      <header className="flex-shrink-0 flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 md:px-7 py-3.5 sm:py-4 border-b border-white/[0.06] bg-[#0d0d0d]/95 backdrop-blur-md relative z-20">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#141414] border border-[#9c8461]/30 flex items-center justify-center text-[#9c8461] shadow-inner flex-shrink-0">
            <DynamicIcon name={iconName} className="w-4 h-4 text-[#9c8461]" />
          </div>
          <div className="min-w-0">
            <h2 className="text-base sm:text-lg md:text-xl font-serif font-bold tracking-tight text-[#e5e5e5] uppercase flex items-center gap-2 truncate">
              {title}
            </h2>
            {subtitle && (
              <p className="text-[10px] sm:text-[11px] md:text-xs text-[#737373] font-light tracking-wide mt-0.5 truncate">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        {badgeText && (
          <span className="text-[8px] sm:text-[9px] font-mono tracking-[0.2em] uppercase px-2 sm:px-2.5 py-1 rounded bg-[#141414] text-[#c4aa82] border border-[#9c8461]/25 shadow-sm flex-shrink-0">
            {badgeText}
          </span>
        )}
      </header>

      {/* Scrollable Body Content (Only this body section scrolls) */}
      <div className="flex-1 min-h-0 overflow-y-auto p-4 sm:p-6 md:p-7 relative z-10 custom-scrollbar space-y-4">
        {children}
      </div>
    </section>
  );
};
