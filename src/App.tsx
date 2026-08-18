/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { SectionId, Project } from './types';
import { ParallaxBackground } from './components/ParallaxBackground';
import { Sidebar } from './components/Sidebar';
import { TopNav } from './components/TopNav';
import { AboutDivision } from './components/divisions/AboutDivision';
import { AcademicDivision } from './components/divisions/AcademicDivision';
import { ExperienceDivision } from './components/divisions/ExperienceDivision';
import { SkillsDivision } from './components/divisions/SkillsDivision';
import { ProjectsDivision } from './components/divisions/ProjectsDivision';
import { LinksDivision } from './components/divisions/LinksDivision';
import { LanguagesDivision } from './components/divisions/LanguagesDivision';
import { ToolsDivision } from './components/divisions/ToolsDivision';
import { AchievementsDivision } from './components/divisions/AchievementsDivision';
import { HobbyDivision } from './components/divisions/HobbyDivision';
import { LetsConnectDivision } from './components/divisions/LetsConnectDivision';
import { GoalsDivision } from './components/divisions/GoalsDivision';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('about');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectSection = (id: SectionId) => {
    setActiveSection(id);
    // Smoothly scroll to content top if scrolled down
    if (window.scrollY > 150) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const renderActiveDivision = () => {
    switch (activeSection) {
      case 'about':
        return <AboutDivision />;
      case 'academic':
        return <AcademicDivision />;
      case 'experience':
        return <ExperienceDivision />;
      case 'skills':
        return <SkillsDivision />;
      case 'projects':
        return (
          <ProjectsDivision
            onSelectProject={(p) => setSelectedProject(p)}
          />
        );
      case 'links':
        return <LinksDivision />;
      case 'languages':
        return <LanguagesDivision />;
      case 'tools':
        return <ToolsDivision />;
      case 'achievements':
        return <AchievementsDivision />;
      case 'hobby':
        return <HobbyDivision />;
      case 'lets-connect':
        return <LetsConnectDivision />;
      case 'goals':
        return <GoalsDivision />;
      default:
        return <AboutDivision />;
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e5e5] relative font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#9c8461]/30 selection:text-[#c4aa82]">
      {/* Background Parallax and Ambient Starfield / Gradients */}
      <ParallaxBackground />

      {/* Main Single-Sheet Layout Container */}
      <main className="relative z-10 w-full max-w-7xl mx-auto p-3 sm:p-4 lg:p-5 lg:h-screen lg:max-h-screen flex flex-col justify-between overflow-hidden">
        <div className="flex flex-col lg:flex-row items-start gap-4 xl:gap-6 w-full flex-1 min-h-0 overflow-hidden">
          {/* Left Sidebar Panel */}
          <div className="w-full lg:w-auto lg:h-full flex-shrink-0 lg:overflow-y-auto custom-scrollbar">
            <Sidebar
              onOpenResume={() => setIsResumeOpen(true)}
              onNavigateToConnect={() => handleSelectSection('lets-connect')}
            />
          </div>

          {/* Right Main Container (Top Navigation + Only Selected Division) */}
          <div className="flex-1 w-full min-w-0 flex flex-col h-full gap-3 overflow-hidden">
            {/* Top Navigation Grid (Button Division - Fixed at Top) */}
            <div className="flex-shrink-0 w-full">
              <TopNav
                activeSection={activeSection}
                onSelectSection={handleSelectSection}
              />
            </div>

            {/* Render ONLY the selected button's data division with Fixed Header and Scrollable Body */}
            <div className="flex-1 min-h-0 w-full overflow-hidden flex flex-col">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="w-full h-full flex flex-col min-h-0 overflow-hidden"
                >
                  {renderActiveDivision()}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-2.5 pt-2.5 border-t border-white/[0.06] text-center text-xs text-[#737373] flex flex-col sm:flex-row items-center justify-between gap-2 flex-shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9c8461]" />
            <span className="font-mono text-[#a3a3a3]">
              Hrishabh Kumar &copy; {new Date().getFullYear()} — Entrepreneur & AI Engineer
            </span>
          </div>
          <div className="flex items-center gap-4 text-[10px] font-mono text-[#737373]">
            <span>Bangalore, India</span>
            <span>•</span>
            <span className="text-[#9c8461] uppercase tracking-wider font-semibold">
              Selected View: {activeSection.toUpperCase()}
            </span>
          </div>
        </footer>
      </main>

      {/* Floating Scroll-to-Top Action */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#181818]/90 hover:bg-[#222222] text-[#c4aa82] shadow-xl shadow-black/60 border border-[#9c8461]/40 backdrop-blur-sm transition-all active:scale-90 flex items-center justify-center group cursor-pointer"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Interactive Project Inspector Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Printable / Downloadable CV Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
