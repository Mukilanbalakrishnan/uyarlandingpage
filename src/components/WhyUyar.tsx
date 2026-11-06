import React, { useState } from 'react';
import { 
  PenTool, 
  Sparkles, 
  Cpu, 
  ShieldCheck, 
  Users
} from 'lucide-react';

interface PillarItem {
  num: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export const WhyUyar: React.FC = () => {
  const [activePillar, setActivePillar] = useState<number | null>(null);

  const desktopNodes = [
    { num: '01', x: 353.4, y: 143.2 },
    { num: '02', x: 488.4, y: 241.3 },
    { num: '03', x: 540.0, y: 400.0 },
    { num: '04', x: 488.4, y: 558.7 },
    { num: '05', x: 353.4, y: 656.8 },
  ];

  const mobileNodes = [
    { x: 43.4, y: 124.1 },
    { x: 107.1, y: 180.5 },
    { x: 129.9, y: 260.0 },
    { x: 107.1, y: 339.5 },
    { x: 43.4, y: 395.9 },
  ];

  const pillars: PillarItem[] = [
    {
      num: '01',
      title: 'Built Around Your Requirements',
      desc: 'Zero pre-made templates. Analyzed around your commercial workflow and business goals.',
      icon: <PenTool className="w-5 h-5 stroke-[2]" />,
    },
    {
      num: '02',
      title: 'Design Meets Technology',
      desc: 'High-performing code paired with intuitive, effortless user experiences.',
      icon: <Sparkles className="w-5 h-5 stroke-[2]" />,
    },
    {
      num: '03',
      title: 'Scalable Architecture',
      desc: 'Future-proof cloud stacks handling high concurrency and automated deployments.',
      icon: <Cpu className="w-5 h-5 stroke-[2]" />,
    },
    {
      num: '04',
      title: 'Production Security & Trust',
      desc: '100% intellectual property transfer, security hardening, and zero technical debt.',
      icon: <ShieldCheck className="w-5 h-5 stroke-[2]" />,
    },
    {
      num: '05',
      title: 'Transparent Partnership',
      desc: 'Direct senior developer access, structured sprints, and dedicated post-launch support.',
      icon: <Users className="w-5 h-5 stroke-[2]" />,
    },
  ];

  return (
    <section id="why-uyar" className="py-8 sm:py-10 lg:py-12 bg-white relative border-b border-[#EAEAE6] overflow-hidden scroll-mt-20">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-100/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-100/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ======================================================== */}
        {/* DESKTOP VIEW (lg:block): Seamless Curved Ribbon Infographic */}
        {/* ======================================================== */}
        <div className="hidden lg:block relative w-full max-w-[1140px] mx-auto h-[780px]">
          
          {/* SVG Layer for Mathematical Ribbon & Guide Arcs */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none select-none" 
            viewBox="0 0 1140 780" 
            fill="none"
          >
            <defs>
              {/* 3D Ribbon Soft Drop Shadow */}
              <filter id="ribbonGlow" x="-15%" y="-15%" width="130%" height="130%">
                <feDropShadow dx="2" dy="8" stdDeviation="12" floodColor="#0E0725" floodOpacity="0.08" />
              </filter>

              {/* Blue Gradient for Decorative Accent Arcs */}
              <linearGradient id="innerBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00A3C4" />
                <stop offset="100%" stopColor="#2563EB" />
              </linearGradient>
            </defs>

            {/* Faint Star Watermark behind headline (Center: 230, 400) */}
            <path 
              d="M 230 210 L 268 315 L 380 325 L 298 400 L 320 510 L 230 455 L 140 510 L 162 400 L 80 325 L 192 315 Z" 
              fill="#F8FAFC" 
              opacity="0.65" 
            />

            {/* Inner Left Blue Concentric Arcs framing Headline */}
            <path 
              d="M 110 255 A 175 175 0 0 1 230 195" 
              stroke="url(#innerBlueGrad)" 
              strokeWidth="7" 
              strokeLinecap="round" 
            />
            <path 
              d="M 230 605 A 175 175 0 0 1 110 545" 
              stroke="url(#innerBlueGrad)" 
              strokeWidth="7" 
              strokeLinecap="round" 
            />

            {/* Outer Fine Guideline Arc */}
            <path 
              d="M 346.2 94.3 A 315 315 0 0 1 346.2 705.7" 
              stroke="#CBD5E1" 
              strokeWidth="1.2" 
              strokeLinecap="round" 
            />

            {/* Thick 3D White Ribbon Track */}
            {/* Ribbon Base Shadow */}
            <path 
              d="M 353.4 143.2 A 270 270 0 0 1 353.4 656.8" 
              stroke="#F1F5F9" 
              strokeWidth="76" 
              strokeLinecap="round" 
              filter="url(#ribbonGlow)" 
            />
            {/* Ribbon Outline */}
            <path 
              d="M 353.4 143.2 A 270 270 0 0 1 353.4 656.8" 
              stroke="#E2E8F0" 
              strokeWidth="72" 
              strokeLinecap="round" 
            />
            {/* Ribbon White Surface */}
            <path 
              d="M 353.4 143.2 A 270 270 0 0 1 353.4 656.8" 
              stroke="#FFFFFF" 
              strokeWidth="68" 
              strokeLinecap="round" 
            />
          </svg>

          {/* Center-Left Typography (The 5 Pillars Headline) */}
          <div className="absolute left-6 sm:left-10 top-[260px] w-[240px] text-left z-10 pointer-events-none">
            <span className="text-[11px] font-bold text-[#2563EB] tracking-widest uppercase bg-blue-50 px-3.5 py-1 rounded-full inline-block border border-blue-100/80 mb-3">
              THE UYAR ADVANTAGE
            </span>
            <h3 className="text-3xl sm:text-[36px] font-black text-[#0E0725] leading-[1.12] tracking-tight mb-3">
              The 5<br />
              <span className="text-[#2563EB]">Pillars of</span><br />
              Why Choose<br />
              <span className="text-[#0E0725]">Uyar.</span>
            </h3>
            <div className="w-10 h-1 bg-[#2563EB] rounded-full mb-3.5"></div>
            <p className="text-xs sm:text-[13px] text-slate-500 font-medium leading-relaxed">
              What makes our engineering deliver real, measurable commercial value?
            </p>
          </div>

          {/* 5 Unified Ribbon Rows (Disc -> Horizontal Arrow -> Icon -> Text) */}
          {pillars.map((pillar, idx) => {
            const node = desktopNodes[idx];
            const isActive = activePillar === idx;
            return (
              <div 
                key={pillar.num}
                onMouseEnter={() => setActivePillar(idx)}
                onMouseLeave={() => setActivePillar(null)}
                className="absolute flex items-center group cursor-pointer transition-all duration-300"
                style={{
                  left: `${node.x - 31}px`,
                  top: `${node.y}px`,
                  transform: 'translateY(-50%)',
                  zIndex: 20
                }}
              >
                {/* 1. 3D White Number Disc (62px x 62px) */}
                <div className={`w-[62px] h-[62px] rounded-full bg-white shadow-[0_8px_20px_rgba(14,7,37,0.14)] border border-slate-200/90 flex items-center justify-center shrink-0 transition-all duration-300 ${isActive ? 'scale-110 shadow-blue-500/25 border-blue-400' : 'hover:scale-105'}`}>
                  <div className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center bg-slate-50/50 shadow-inner">
                    <span className="text-lg font-black text-[#2563EB]">{pillar.num}</span>
                  </div>
                </div>

                {/* 2. Direct Horizontal Arrow pointing straight to the icon */}
                <div className="flex items-center px-2.5 shrink-0">
                  <div className={`h-[1.5px] w-8 sm:w-10 transition-colors duration-200 ${isActive ? 'bg-[#2563EB]' : 'bg-slate-400 group-hover:bg-[#2563EB]'}`} />
                  <svg 
                    className={`w-3 h-3 -ml-1 transition-colors duration-200 ${isActive ? 'text-[#2563EB] fill-[#2563EB]' : 'text-slate-400 fill-slate-400 group-hover:text-[#2563EB] group-hover:fill-[#2563EB]'}`} 
                    viewBox="0 0 6 6"
                  >
                    <path d="M 0 0.8 L 5 3 L 0 5.2 Z" />
                  </svg>
                </div>

                {/* 3. Content Block (Icon + Title & Description) */}
                <div className="flex items-center gap-3.5 w-[360px] xl:w-[410px]">
                  <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 border transition-all duration-300 shadow-sm ${isActive ? 'bg-[#2563EB] text-white border-blue-500 scale-110 shadow-blue-500/20' : 'bg-blue-50 text-[#2563EB] border-blue-100/80 group-hover:scale-110 group-hover:bg-[#2563EB] group-hover:text-white'}`}>
                    {pillar.icon}
                  </div>
                  <div>
                    <h4 className={`text-[15px] font-bold transition-colors leading-tight mb-1 ${isActive ? 'text-[#2563EB]' : 'text-[#0E0725] group-hover:text-[#2563EB]'}`}>
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-normal">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

        </div>

        {/* ======================================================== */}
        {/* MOBILE & TABLET VIEW (< lg): EXACT SAME CURVED RIBBON!   */}
        {/* ======================================================== */}
        <div className="block lg:hidden relative w-full max-w-[390px] mx-auto min-h-[640px]">
          
          {/* Header at top */}
          <div className="text-center mb-6">
            <span className="text-[10px] font-bold text-[#2563EB] tracking-widest uppercase bg-blue-50 px-3 py-1 rounded-full inline-block border border-blue-100 mb-2">
              THE UYAR ADVANTAGE
            </span>
            <h3 className="text-2xl font-black text-[#0E0725] leading-tight mb-1.5">
              The 5 Pillars of Why Choose <span className="text-[#2563EB]">Uyar.</span>
            </h3>
            <p className="text-xs text-slate-500 max-w-xs mx-auto leading-relaxed">
              What makes our engineering deliver real, measurable commercial value?
            </p>
          </div>

          {/* Mobile Semicircular Ribbon Canvas */}
          <div className="relative w-full h-[520px]">
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 370 520" fill="none">
              <defs>
                <filter id="mRibbonGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="1" dy="4" stdDeviation="6" floodColor="#0E0725" floodOpacity="0.08" />
                </filter>
              </defs>

              {/* Outer Guideline Arc */}
              <path d="M 45 92 A 180 180 0 0 1 45 428" stroke="#CBD5E1" strokeWidth="1" strokeLinecap="round" />

              {/* 3D Ribbon Track: thick arc */}
              <path d="M 43.4 124.1 A 150 150 0 0 1 43.4 395.9" stroke="#F1F5F9" strokeWidth="48" strokeLinecap="round" filter="url(#mRibbonGlow)" />
              <path d="M 43.4 124.1 A 150 150 0 0 1 43.4 395.9" stroke="#E2E8F0" strokeWidth="45" strokeLinecap="round" />
              <path d="M 43.4 124.1 A 150 150 0 0 1 43.4 395.9" stroke="#FFFFFF" strokeWidth="42" strokeLinecap="round" />
            </svg>

            {/* 5 Unified Mobile Rows */}
            {pillars.map((pillar, idx) => {
              const node = mobileNodes[idx];
              return (
                <div
                  key={pillar.num}
                  className="absolute flex items-center z-20"
                  style={{
                    left: `${node.x - 19}px`,
                    top: `${node.y}px`,
                    transform: 'translateY(-50%)'
                  }}
                >
                  {/* Disc */}
                  <div className="w-[38px] h-[38px] rounded-full bg-white shadow-md border border-slate-200 flex items-center justify-center shrink-0">
                    <span className="text-xs font-black text-[#2563EB]">{pillar.num}</span>
                  </div>

                  {/* Horizontal Arrow */}
                  <div className="flex items-center px-1 shrink-0">
                    <div className="h-[1px] w-3.5 bg-slate-400" />
                    <svg className="w-2 h-2 -ml-0.5 text-slate-400 fill-slate-400" viewBox="0 0 6 6">
                      <path d="M 0 0.8 L 5 3 L 0 5.2 Z" />
                    </svg>
                  </div>

                  {/* Icon + Text */}
                  <div className="flex items-center gap-2 max-w-[210px]">
                    <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0 border border-blue-100 [&>svg]:w-3.5 [&>svg]:h-3.5">
                      {pillar.icon}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#0E0725] leading-tight mb-0.5">{pillar.title}</h4>
                      <p className="text-[10px] text-slate-500 leading-tight">{pillar.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
};
