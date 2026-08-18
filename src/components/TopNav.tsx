import React from 'react';
import { motion } from 'motion/react';
import { SectionId } from '../types';
import { NAV_ITEMS } from '../data/portfolioData';
import { DynamicIcon } from './DynamicIcon';

interface TopNavProps {
  activeSection: SectionId;
  onSelectSection: (id: SectionId) => void;
}

export const TopNav: React.FC<TopNavProps> = ({ activeSection, onSelectSection }) => {
  const row1 = NAV_ITEMS.filter((item) => item.row === 1);
  const row2 = NAV_ITEMS.filter((item) => item.row === 2);

  const renderButton = (item: typeof NAV_ITEMS[0]) => {
    const isActive = activeSection === item.id;

    return (
      <motion.button
        key={item.id}
        id={`nav-btn-${item.id}`}
        onClick={() => onSelectSection(item.id)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        className={`flex-1 min-w-[100px] sm:min-w-[110px] md:min-w-[120px] py-2 px-2.5 rounded-xl text-[10px] font-semibold uppercase tracking-[0.2em] transition-all duration-200 flex items-center justify-center gap-1.5 shadow-sm select-none relative overflow-hidden group cursor-pointer ${
          isActive
            ? 'bg-[#181818] text-[#e5e5e5] shadow-[0_0_15px_rgba(156,132,97,0.15)] border border-[#9c8461]/80'
            : 'bg-[#111111] text-[#737373] hover:text-[#e5e5e5] hover:bg-[#161616] border border-white/[0.05] hover:border-white/[0.12]'
        }`}
      >
        {/* Subtle hover gleam */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />

        <DynamicIcon
          name={item.iconName}
          className={`w-3 h-3 transition-transform duration-200 ${
            isActive ? 'text-[#9c8461] scale-110' : 'text-[#737373] group-hover:text-[#9c8461]'
          }`}
        />
        <span className="truncate">{item.label}</span>

        {/* Active bottom gold glow bar */}
        {isActive && (
          <motion.div
            layoutId="activeNavIndicator"
            className="absolute bottom-0 inset-x-2 h-[2px] bg-[#9c8461] rounded-full"
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          />
        )}
      </motion.button>
    );
  };

  return (
    <header
      id="portfolio-top-nav"
      aria-label="Portfolio section navigation"
      className="w-full bg-[#0d0d0d]/95 backdrop-blur-xl border border-white/[0.06] rounded-2xl p-2.5 sm:p-3 shadow-2xl space-y-2"
    >
      {/* Row 1 */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
        {row1.map(renderButton)}
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
        {row2.map(renderButton)}
      </div>
    </header>
  );
};
