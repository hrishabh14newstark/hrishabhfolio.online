import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import {
  Phone,
  Mail,
  Copy,
  Check,
  Download,
  MapPin,
  Clock,
  Sparkles,
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
  Bot,
  MessageSquareCode,
  FileText,
  Camera
} from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';
import { DefaultAvatarSvg } from './DefaultAvatarSvg';

interface SidebarProps {
  onOpenResume: () => void;
  onNavigateToConnect: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onOpenResume, onNavigateToConnect }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState<string>('');
  const [avatarSrc, setAvatarSrc] = useState<string>(() => {
    return localStorage.getItem('custom_portfolio_avatar') || '/image.jpg';
  });
  const [imageLoadFailed, setImageLoadFailed] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const handleAvatarUpdate = () => {
      const saved = localStorage.getItem('custom_portfolio_avatar');
      if (saved) {
        setAvatarSrc(saved);
        setImageLoadFailed(false);
      }
    };
    window.addEventListener('avatarUpdated', handleAvatarUpdate);
    return () => window.removeEventListener('avatarUpdated', handleAvatarUpdate);
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          localStorage.setItem('custom_portfolio_avatar', result);
          setAvatarSrc(result);
          setImageLoadFailed(false);
          window.dispatchEvent(new Event('avatarUpdated'));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat([], options).format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  return (
    <aside
      id="portfolio-sidebar"
      aria-label="Profile and contact sidebar"
      className="w-full lg:w-[290px] xl:w-[320px] flex-shrink-0 flex flex-col gap-4 bg-[#0d0d0d] border border-white/[0.06] rounded-2xl p-5 shadow-2xl relative overflow-hidden"
    >
      {/* Subtle top champagne gold accent line */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#9c8461] to-transparent opacity-80" />

      {/* 1. Circular Profile Picture */}
      <div className="flex flex-col items-center pt-2">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileUpload}
          accept="image/*"
          aria-label="Upload profile image"
          className="hidden"
        />

        <div className="relative group">
          {/* Subtle gold glow ring */}
          <div className="absolute -inset-1 rounded-full bg-[#9c8461]/25 blur-md opacity-60 group-hover:opacity-100 transition duration-500" />
          
          {/* Avatar Container */}
          <div 
            onClick={() => fileInputRef.current?.click()}
            title="Click to change profile picture"
            className="relative w-32 h-32 rounded-full bg-[#121212] border-2 border-[#9c8461]/50 group-hover:border-[#9c8461] p-1 flex flex-col items-center justify-center text-center transition-all duration-300 shadow-xl overflow-hidden cursor-pointer"
          >
            {/* User Profile Photo or Default Illustrated Portrait */}
            {!imageLoadFailed && avatarSrc ? (
              <img
                src={avatarSrc}
                alt={PROFILE_DATA.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
                onError={() => {
                  setImageLoadFailed(true);
                }}
              />
            ) : (
              <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-[#181818]">
                <DefaultAvatarSvg className="w-full h-full object-cover" />
              </div>
            )}

            {/* Hover Camera Overlay for Easy Photo Update */}
            <div className="absolute inset-0 rounded-full bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-1 text-[#e5e5e5] backdrop-blur-[2px] z-10">
              <Camera className="w-5 h-5 text-[#c4aa82]" />
              <span className="text-[8px] font-mono uppercase tracking-wider text-[#e5e5e5]">Change</span>
            </div>
          </div>

          {/* Online active beacon */}
          <div
            title="Available for AI Architecture & Innovation"
            className="absolute bottom-1.5 right-1.5 flex items-center gap-1.5 bg-[#0a0a0a] border border-[#9c8461]/60 px-2 py-0.5 rounded-full text-[9px] text-[#c4aa82] font-medium shadow-md z-20"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#9c8461] animate-ping" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#9c8461] -ml-3" />
            <span className="text-[8px] uppercase tracking-[0.2em] font-semibold text-[#c4aa82]">Active</span>
          </div>
        </div>
      </div>

      {/* 2. Name Pill (With refined gold outline accent) */}
      <motion.div
        whileHover={{ scale: 1.01 }}
        id="sidebar-name-pill"
        className="w-full bg-[#121212] border border-[#9c8461]/60 hover:border-[#9c8461] rounded-xl py-2.5 px-4 text-center shadow-[0_0_15px_rgba(156,132,97,0.08)] transition-all"
      >
        <h1 className="text-base font-serif font-bold tracking-wider text-[#e5e5e5] uppercase">
          {PROFILE_DATA.name}
        </h1>
      </motion.div>

      {/* 3. Title / Role Pill */}
      <motion.div
        whileHover={{ scale: 1.01 }}
        id="sidebar-title-pill"
        className="w-full bg-[#101010] border border-white/[0.06] hover:border-white/[0.12] rounded-xl py-2 px-3 text-center transition-all"
      >
        <p className="text-[10px] font-semibold tracking-[0.25em] text-[#9c8461] uppercase">
          {PROFILE_DATA.title}
        </p>
      </motion.div>

      {/* 4. Contact Information Card */}
      <div
        id="sidebar-contact-card"
        className="w-full bg-[#101010] border border-white/[0.06] rounded-xl p-3 text-xs text-[#e5e5e5] space-y-2.5 shadow-sm"
      >
        {/* Phone row */}
        <div className="flex items-start justify-between gap-2 group">
          <div className="flex items-start gap-2 min-w-0">
            <Phone className="w-3.5 h-3.5 text-[#9c8461] mt-0.5 flex-shrink-0" />
            <div className="min-w-0">
              <span className="block text-[9px] font-bold text-[#737373] uppercase tracking-[0.2em]">
                Phone no:
              </span>
              <a
                href={`tel:${PROFILE_DATA.phone.replace(/\s+/g, '')}`}
                className="font-mono text-[#e5e5e5] hover:text-[#c4aa82] transition-colors font-medium break-all text-[11px]"
              >
                {PROFILE_DATA.phone}
              </a>
            </div>
          </div>
          <button
            id="copy-phone-btn"
            onClick={() => handleCopy(PROFILE_DATA.phone, 'phone')}
            title="Copy phone number"
            aria-label="Copy phone number"
            className="p-1.5 rounded-lg bg-[#181818] hover:bg-[#9c8461]/20 text-[#737373] hover:text-[#e5e5e5] border border-white/[0.04] transition-all flex-shrink-0"
          >
            {copiedField === 'phone' ? (
              <Check className="w-3.5 h-3.5 text-[#c4aa82]" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
          </button>
        </div>

        <div className="h-px bg-white/[0.05]" />

        {/* Email row */}
        <div className="flex items-start justify-between gap-2 group">
          <div className="flex items-start gap-2 min-w-0">
            <Mail className="w-3.5 h-3.5 text-[#9c8461] mt-0.5 flex-shrink-0" />
            <div className="min-w-0">
              <span className="block text-[9px] font-bold text-[#737373] uppercase tracking-[0.2em]">
                Email id:
              </span>
              <a
                href={`mailto:${PROFILE_DATA.email}`}
                className="font-mono text-[#e5e5e5] hover:text-[#c4aa82] transition-colors font-medium break-all text-[11px]"
              >
                {PROFILE_DATA.email}
              </a>
            </div>
          </div>
          <button
            id="copy-email-btn"
            onClick={() => handleCopy(PROFILE_DATA.email, 'email')}
            title="Copy email address"
            aria-label="Copy email address"
            className="p-1.5 rounded-lg bg-[#181818] hover:bg-[#9c8461]/20 text-[#737373] hover:text-[#e5e5e5] border border-white/[0.04] transition-all flex-shrink-0"
          >
            {copiedField === 'email' ? (
              <Check className="w-3.5 h-3.5 text-[#c4aa82]" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
          </button>
        </div>

        <div className="h-px bg-white/[0.05]" />

        {/* Location & IST Time */}
        <div className="flex items-center justify-between text-[10px] text-[#737373] pt-0.5">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3 h-3 text-[#9c8461]" />
            <span className="text-[#a3a3a3]">India</span>
          </div>
          <div className="flex items-center gap-1.5 font-mono text-[#a3a3a3]">
            <Clock className="w-3 h-3 text-[#9c8461]" />
            <span>{currentTime || 'IST (UTC+5:30)'}</span>
          </div>
        </div>
      </div>

      {/* 5. Quick Actions */}
      <div className="flex flex-col gap-2 pt-1">
        <button
          id="sidebar-resume-btn"
          onClick={onOpenResume}
          className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#9c8461] hover:bg-[#b89d74] text-black font-bold text-[10px] uppercase tracking-[0.2em] shadow-lg shadow-[#9c8461]/10 transition-all active:scale-95 cursor-pointer"
        >
          <FileText className="w-3.5 h-3.5 text-black" />
          <span>View / Download CV</span>
        </button>

        <button
          id="sidebar-talk-btn"
          onClick={onNavigateToConnect}
          className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#141414] hover:bg-[#1c1c1c] border border-white/[0.08] hover:border-[#9c8461]/40 text-[#e5e5e5] font-semibold text-[10px] uppercase tracking-[0.2em] transition-all active:scale-95 cursor-pointer"
        >
          <MessageSquareCode className="w-3.5 h-3.5 text-[#9c8461]" />
          <span>Start Collaboration</span>
        </button>
      </div>

      {/* 6. Social Links Row */}
      <div className="mt-auto pt-2 border-t border-white/[0.06] flex items-center justify-around text-[#737373]">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
          className="p-2 rounded-lg hover:bg-white/[0.05] hover:text-[#e5e5e5] transition-colors"
        >
          <Github className="w-4 h-4" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          className="p-2 rounded-lg hover:bg-white/[0.05] hover:text-[#e5e5e5] transition-colors"
        >
          <Linkedin className="w-4 h-4" />
        </a>
        <a
          href="https://x.com"
          target="_blank"
          rel="noopener noreferrer"
          title="X / Twitter"
          className="p-2 rounded-lg hover:bg-white/[0.05] hover:text-[#e5e5e5] transition-colors"
        >
          <Twitter className="w-4 h-4" />
        </a>
        <a
          href="https://huggingface.co"
          target="_blank"
          rel="noopener noreferrer"
          title="Hugging Face"
          className="p-2 rounded-lg hover:bg-white/[0.05] hover:text-[#e5e5e5] transition-colors"
        >
          <Bot className="w-4 h-4" />
        </a>
      </div>
    </aside>
  );
};
