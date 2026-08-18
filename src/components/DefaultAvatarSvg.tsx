import React from 'react';

export const DefaultAvatarSvg: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Studio Background Gradient */}
        <radialGradient id="bgGrad" cx="50%" cy="40%" r="65%">
          <stop offset="0%" stopColor="#8d8778" />
          <stop offset="60%" stopColor="#676256" />
          <stop offset="100%" stopColor="#45423a" />
        </radialGradient>

        {/* Skin Gradient */}
        <linearGradient id="skinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#d49e72" />
          <stop offset="50%" stopColor="#c58c5f" />
          <stop offset="100%" stopColor="#a36e44" />
        </linearGradient>

        {/* Shadow Skin */}
        <linearGradient id="skinShadow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8c5832" />
          <stop offset="100%" stopColor="#683d1e" />
        </linearGradient>

        {/* Suit Gradient */}
        <linearGradient id="suitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2c3238" />
          <stop offset="40%" stopColor="#1f2327" />
          <stop offset="100%" stopColor="#121517" />
        </linearGradient>

        {/* Shirt Gradient */}
        <linearGradient id="shirtGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#d4e3ee" />
          <stop offset="100%" stopColor="#a9c2d6" />
        </linearGradient>

        {/* Tie Gradient */}
        <linearGradient id="tieGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1e2226" />
          <stop offset="100%" stopColor="#0d0f12" />
        </linearGradient>

        {/* Hair Gradient */}
        <linearGradient id="hairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2a2220" />
          <stop offset="40%" stopColor="#141110" />
          <stop offset="100%" stopColor="#080706" />
        </linearGradient>
      </defs>

      {/* Backdrop */}
      <rect width="400" height="400" fill="url(#bgGrad)" />

      {/* Suit & Shoulders */}
      <path
        d="M 50 400 L 95 340 L 145 305 L 180 340 L 200 375 L 220 340 L 255 305 L 305 340 L 350 400 Z"
        fill="url(#suitGrad)"
      />

      {/* Shirt Collar / Chest V */}
      <polygon points="150,305 250,305 200,370" fill="url(#shirtGrad)" />

      {/* Shirt Collars */}
      <polygon points="150,305 190,345 175,355 140,315" fill="#e8f1f7" />
      <polygon points="250,305 210,345 225,355 260,315" fill="#d2e4f0" />

      {/* Necktie */}
      <polygon points="190,345 210,345 206,395 200,400 194,395" fill="url(#tieGrad)" />
      {/* Tie Knot */}
      <polygon points="191,338 209,338 205,352 195,352" fill="#24292e" />

      {/* Suit Lapels */}
      <path
        d="M 85 400 L 140 310 L 175 355 L 130 400 Z"
        fill="#1a1d20"
      />
      <path
        d="M 315 400 L 260 310 L 225 355 L 270 400 Z"
        fill="#141719"
      />

      {/* Neck */}
      <path d="M 168 250 L 168 315 L 232 315 L 232 250 Z" fill="url(#skinGrad)" />
      {/* Neck Shadow under chin */}
      <path d="M 168 250 Q 200 280 232 250 L 232 275 Q 200 300 168 275 Z" fill="url(#skinShadow)" opacity="0.6" />

      {/* Ears */}
      <ellipse cx="142" cy="225" rx="10" ry="18" fill="#bd8559" />
      <ellipse cx="258" cy="225" rx="10" ry="18" fill="#bd8559" />

      {/* Face Base */}
      <path
        d="M 148 180 Q 142 245 170 278 Q 200 295 230 278 Q 258 245 252 180 Q 200 165 148 180 Z"
        fill="url(#skinGrad)"
      />

      {/* Facial Hair (Beard & Goatee) */}
      <path
        d="M 172 260 Q 200 275 228 260 Q 225 285 200 292 Q 175 285 172 260 Z"
        fill="#191514"
        opacity="0.65"
      />
      {/* Chin Stubble */}
      <path
        d="M 188 270 Q 200 273 212 270 Q 200 285 188 270 Z"
        fill="#120e0d"
        opacity="0.8"
      />

      {/* Eyes & Eyebrows */}
      {/* Left Eyebrow */}
      <path d="M 160 188 Q 175 182 188 188" stroke="#120e0d" strokeWidth="4.5" strokeLinecap="round" />
      {/* Right Eyebrow */}
      <path d="M 212 188 Q 225 182 240 188" stroke="#120e0d" strokeWidth="4.5" strokeLinecap="round" />

      {/* Eyes */}
      {/* Left Eye */}
      <ellipse cx="174" cy="198" rx="8.5" ry="5.5" fill="#f4ede6" />
      <ellipse cx="174" cy="198" rx="4.5" ry="4.5" fill="#20150f" />
      <circle cx="175.5" cy="196.5" r="1.5" fill="#ffffff" />

      {/* Right Eye */}
      <ellipse cx="226" cy="198" rx="8.5" ry="5.5" fill="#f4ede6" />
      <ellipse cx="226" cy="198" rx="4.5" ry="4.5" fill="#20150f" />
      <circle cx="227.5" cy="196.5" r="1.5" fill="#ffffff" />

      {/* Nose */}
      <path d="M 200 192 L 195 224 Q 200 228 205 224 Z" fill="#9d673f" opacity="0.6" />
      <ellipse cx="194" cy="226" rx="2.5" ry="1.5" fill="#683d1e" />
      <ellipse cx="206" cy="226" rx="2.5" ry="1.5" fill="#683d1e" />

      {/* Mustache */}
      <path
        d="M 183 240 Q 200 236 217 240 Q 200 248 183 240 Z"
        fill="#151110"
      />

      {/* Lips */}
      <path d="M 186 250 Q 200 256 214 250" stroke="#99573f" strokeWidth="3" strokeLinecap="round" />

      {/* Hair (Voluminous wavy black hair) */}
      <path
        d="M 136 195 C 130 150 145 105 185 85 C 220 70 265 85 272 135 C 275 160 265 185 264 195 C 255 180 250 160 238 152 C 215 140 165 145 146 175 C 140 185 138 190 136 195 Z"
        fill="url(#hairGrad)"
      />
      {/* Hair Waves & Texture Highlights */}
      <path
        d="M 165 95 Q 210 75 250 95 Q 215 110 175 118 Z"
        fill="#3d332f"
        opacity="0.6"
      />
      <path
        d="M 185 80 Q 235 78 260 110 Q 230 92 195 95 Z"
        fill="#4d413c"
        opacity="0.4"
      />
    </svg>
  );
};
