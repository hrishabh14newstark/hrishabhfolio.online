import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { DivisionWrapper } from './DivisionWrapper';
import { PROFILE_DATA } from '../../data/portfolioData';
import { Mail, Phone, Send, Copy, Check, Sparkles, MessageSquare, Download, MapPin, Clock } from 'lucide-react';

export const LetsConnectDivision: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'AI Architecture & Consultation',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const topics = [
    'AI Architecture & Consultation',
    'Startup Co-founding / Investment',
    'Edge AI & Vision Deployment',
    'Open Source & Research Collaboration',
    'General Tech Discussion / Coffee',
  ];

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitted(true);

    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#8b5cf6', '#6366f1', '#10b981'],
    });

    // Also prepare mailto link for direct sending
    const subject = encodeURIComponent(`[${formData.topic}] Connection from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Hrishabh,\n\nName: ${formData.name}\nEmail: ${formData.email}\nTopic: ${formData.topic}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`
    );
    window.location.href = `mailto:${PROFILE_DATA.email}?subject=${subject}&body=${body}`;
  };

  const downloadVCard = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
N:Kumar;Hrishabh;;;
FN:Hrishabh Kumar
ORG:Synthetix Edge AI
TITLE:Entrepreneur | AI Engineer
TEL;TYPE=CELL:${PROFILE_DATA.phone}
EMAIL:${PROFILE_DATA.email}
ADR;TYPE=WORK:;;Bangalore;Karnataka;;India
NOTE:Founding Engineer specializing in Autonomous Multi-Agent AI, LLM Architectures, and Edge Computing.
END:VCARD`;

    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Hrishabh_Kumar_Contact.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <DivisionWrapper
      id="lets-connect"
      title="LETS CONNECT"
      subtitle="Direct channel for venture inquiries, consulting & deep tech collaborations"
      iconName="Mail"
      badgeText="DIRECT INBOX"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left column: Direct Contact Cards */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-4 md:p-5 rounded-xl bg-[#111111] border border-white/[0.06] space-y-3.5">
            <h4 className="text-[10px] font-bold text-[#737373] uppercase tracking-[0.25em] flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#9c8461]" />
              <span>Direct Channels</span>
            </h4>

            {/* Phone Card */}
            <div className="p-3 rounded-lg bg-[#161616] border border-white/[0.05] flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-[#181818] border border-[#9c8461]/30 text-[#9c8461] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[9px] text-[#737373] uppercase tracking-wider font-semibold block">
                    Phone (Direct / WhatsApp)
                  </span>
                  <a
                    href={`tel:${PROFILE_DATA.phone.replace(/\s+/g, '')}`}
                    className="text-xs font-mono font-bold text-[#e5e5e5] hover:text-[#c4aa82] transition-colors truncate block"
                  >
                    {PROFILE_DATA.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(PROFILE_DATA.phone, 'phone')}
                className="p-1.5 rounded-lg bg-[#181818] hover:bg-[#9c8461]/20 text-[#737373] hover:text-[#e5e5e5] border border-white/[0.04] transition-colors cursor-pointer"
                title="Copy phone"
              >
                {copiedField === 'phone' ? (
                  <Check className="w-3.5 h-3.5 text-[#c4aa82]" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>

            {/* Email Card */}
            <div className="p-3 rounded-lg bg-[#161616] border border-white/[0.05] flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-[#181818] border border-[#9c8461]/30 text-[#9c8461] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[9px] text-[#737373] uppercase tracking-wider font-semibold block">
                    Email Address
                  </span>
                  <a
                    href={`mailto:${PROFILE_DATA.email}`}
                    className="text-xs font-mono font-bold text-[#e5e5e5] hover:text-[#c4aa82] transition-colors truncate block"
                  >
                    {PROFILE_DATA.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(PROFILE_DATA.email, 'email')}
                className="p-1.5 rounded-lg bg-[#181818] hover:bg-[#9c8461]/20 text-[#737373] hover:text-[#e5e5e5] border border-white/[0.04] transition-colors cursor-pointer"
                title="Copy email"
              >
                {copiedField === 'email' ? (
                  <Check className="w-3.5 h-3.5 text-[#c4aa82]" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>

            {/* Download vCard */}
            <button
              onClick={downloadVCard}
              className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-[#181818] hover:bg-[#202020] border border-[#9c8461]/30 hover:border-[#9c8461]/60 text-[#c4aa82] hover:text-[#e5e5e5] font-semibold text-xs transition-all active:scale-95 cursor-pointer uppercase tracking-[0.15em] text-[10px]"
            >
              <Download className="w-3.5 h-3.5 text-[#9c8461]" />
              <span>Save Contact Card (.vcf)</span>
            </button>
          </div>

          <div className="p-3.5 rounded-xl bg-[#111111] border border-white/[0.05] text-xs text-[#737373] space-y-1 font-light">
            <p className="flex items-center gap-1.5 font-medium text-[#e5e5e5]">
              <Clock className="w-3.5 h-3.5 text-[#9c8461]" />
              <span>Typical Response Time: Within 12 Hours</span>
            </p>
            <p className="text-[11px] text-[#737373]">
              Open for advisory roles, enterprise AI pilots, deep-tech research, and speaking invitations.
            </p>
          </div>
        </div>

        {/* Right column: Interactive Message Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="p-4 md:p-5 rounded-xl bg-[#111111] border border-white/[0.06] space-y-3.5"
          >
            <div className="flex items-center justify-between">
              <h4 className="text-[10px] font-bold text-[#737373] uppercase tracking-[0.25em] flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-[#9c8461]" />
                <span>Send a Message</span>
              </h4>
              <span className="text-[10px] font-mono text-[#c4aa82] flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#9c8461]" />
                <span>Open for Inquiries</span>
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-[9px] font-bold text-[#737373] uppercase tracking-[0.2em] block">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Elena Rostova"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#181818] border border-white/[0.08] focus:border-[#9c8461] focus:outline-none rounded-xl px-3 py-2 text-xs text-[#e5e5e5] placeholder-[#555555] transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[9px] font-bold text-[#737373] uppercase tracking-[0.2em] block">
                  Your Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. elena@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#181818] border border-white/[0.08] focus:border-[#9c8461] focus:outline-none rounded-xl px-3 py-2 text-xs text-[#e5e5e5] placeholder-[#555555] transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[9px] font-bold text-[#737373] uppercase tracking-[0.2em] block">
                Subject / Topic
              </label>
              <select
                value={formData.topic}
                onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                className="w-full bg-[#181818] border border-white/[0.08] focus:border-[#9c8461] focus:outline-none rounded-xl px-3 py-2 text-xs text-[#e5e5e5] transition-colors"
              >
                {topics.map((t, idx) => (
                  <option key={idx} value={t} className="bg-[#181818] text-[#e5e5e5]">
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-[9px] font-bold text-[#737373] uppercase tracking-[0.2em] block">
                Message *
              </label>
              <textarea
                required
                rows={3}
                placeholder="Describe your project, question, or collaboration opportunity..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-[#181818] border border-white/[0.08] focus:border-[#9c8461] focus:outline-none rounded-xl px-3 py-2 text-xs text-[#e5e5e5] placeholder-[#555555] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#9c8461] hover:bg-[#b09670] text-black font-bold text-xs uppercase tracking-[0.2em] shadow-lg shadow-[#9c8461]/20 transition-all active:scale-95 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Transmit Message</span>
            </button>

            {isSubmitted && (
              <div className="p-2.5 rounded-lg bg-[#181818] border border-[#9c8461]/40 text-xs text-[#c4aa82] text-center font-medium">
                Draft generated & transmitted! If mail client did not open, you can directly email{' '}
                <span className="font-mono text-white underline">{PROFILE_DATA.email}</span>.
              </div>
            )}
          </form>
        </div>
      </div>
    </DivisionWrapper>
  );
};
