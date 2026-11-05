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
    <section id="why-uyar" className="py-14 sm:py-24 bg-white relative border-b border-[#EAEAE6] overflow-hidden scroll-mt-20">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-100/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-100/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ======================================================== */}
        {/* DESKTOP VIEW (lg:block): Seamless Curved Ribbon Infographic */}
        {/* ======================================================== */}
        <div className="hidden lg:block relative w-full max-w-[1140px] mx-auto h-[780px]">
          
          {/* SVG Layer for Mathematical Ribbon, Guide Arcs & Arrows */}
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

              {/* Arrowhead Markers */}
              <marker id="arrowHead" markerWidth="6" markerHeight="6" refX="4.5" refY="3" orient="auto">
                <path d="M 0 0 L 6 3 L 0 6 Z" fill="#94A3B8" />
              </marker>
              <marker id="arrowHeadActive" markerWidth="6" markerHeight="6" refX="4.5" refY="3" orient="auto">
                <path d="M 0 0 L 6 3 L 0 6 Z" fill="#2563EB" />
              </marker>
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

            {/* 5 Horizontal Connector Lines with Arrows */}
            {/* 01: from (385, 143) to (450, 143) */}
            <line 
              x1="385" y1="143.2" x2="450" y2="143.2" 
              stroke={activePillar === 0 ? "#2563EB" : "#94A3B8"} 
              strokeWidth={activePillar === 0 ? "1.8" : "1.2"} 
              markerEnd={activePillar === 0 ? "url(#arrowHeadActive)" : "url(#arrowHead)"} 
            />
            {/* 02: from (520, 241) to (595, 241) */}
            <line 
              x1="520" y1="241.3" x2="595" y2="241.3" 
              stroke={activePillar === 1 ? "#2563EB" : "#94A3B8"} 
              strokeWidth={activePillar === 1 ? "1.8" : "1.2"} 
              markerEnd={activePillar === 1 ? "url(#arrowHeadActive)" : "url(#arrowHead)"} 
            />
            {/* 03: from (575, 400) to (655, 400) */}
            <line 
              x1="575" y1="400.0" x2="655" y2="400.0" 
              stroke={activePillar === 2 ? "#2563EB" : "#94A3B8"} 
              strokeWidth={activePillar === 2 ? "1.8" : "1.2"} 
              markerEnd={activePillar === 2 ? "url(#arrowHeadActive)" : "url(#arrowHead)"} 
            />
            {/* 04: from (520, 559) to (595, 559) */}
            <line 
              x1="520" y1="558.7" x2="595" y2="558.7" 
              stroke={activePillar === 3 ? "#2563EB" : "#94A3B8"} 
              strokeWidth={activePillar === 3 ? "1.8" : "1.2"} 
              markerEnd={activePillar === 3 ? "url(#arrowHeadActive)" : "url(#arrowHead)"} 
            />
            {/* 05: from (385, 657) to (450, 657) */}
            <line 
              x1="385" y1="656.8" x2="450" y2="656.8" 
              stroke={activePillar === 4 ? "#2563EB" : "#94A3B8"} 
              strokeWidth={activePillar === 4 ? "1.8" : "1.2"} 
              markerEnd={activePillar === 4 ? "url(#arrowHeadActive)" : "url(#arrowHead)"} 
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

          {/* 5 Circular White 3D Discs (Placed on Ribbon Nodes) */}
          {/* Node 01: (353.4, 143.2) */}
          <div 
            onMouseEnter={() => setActivePillar(0)}
            onMouseLeave={() => setActivePillar(null)}
            className={`absolute left-[322px] top-[112px] w-[62px] h-[62px] rounded-full bg-white shadow-[0_8px_20px_rgba(14,7,37,0.16)] border border-slate-200/90 flex items-center justify-center z-20 cursor-pointer transition-all duration-300 ${activePillar === 0 ? 'scale-110 shadow-blue-500/25 border-blue-400' : 'hover:scale-105'}`}
          >
            <div className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center bg-slate-50/50 shadow-inner">
              <span className="text-lg font-black text-[#2563EB]">01</span>
            </div>
          </div>

          {/* Node 02: (488.4, 241.3) */}
          <div 
            onMouseEnter={() => setActivePillar(1)}
            onMouseLeave={() => setActivePillar(null)}
            className={`absolute left-[457px] top-[210px] w-[62px] h-[62px] rounded-full bg-white shadow-[0_8px_20px_rgba(14,7,37,0.16)] border border-slate-200/90 flex items-center justify-center z-20 cursor-pointer transition-all duration-300 ${activePillar === 1 ? 'scale-110 shadow-blue-500/25 border-blue-400' : 'hover:scale-105'}`}
          >
            <div className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center bg-slate-50/50 shadow-inner">
              <span className="text-lg font-black text-[#2563EB]">02</span>
            </div>
          </div>

          {/* Node 03: (540.0, 400.0) */}
          <div 
            onMouseEnter={() => setActivePillar(2)}
            onMouseLeave={() => setActivePillar(null)}
            className={`absolute left-[509px] top-[369px] w-[62px] h-[62px] rounded-full bg-white shadow-[0_8px_20px_rgba(14,7,37,0.16)] border border-slate-200/90 flex items-center justify-center z-20 cursor-pointer transition-all duration-300 ${activePillar === 2 ? 'scale-110 shadow-blue-500/25 border-blue-400' : 'hover:scale-105'}`}
          >
            <div className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center bg-slate-50/50 shadow-inner">
              <span className="text-lg font-black text-[#2563EB]">03</span>
            </div>
          </div>

          {/* Node 04: (488.4, 558.7) */}
          <div 
            onMouseEnter={() => setActivePillar(3)}
            onMouseLeave={() => setActivePillar(null)}
            className={`absolute left-[457px] top-[528px] w-[62px] h-[62px] rounded-full bg-white shadow-[0_8px_20px_rgba(14,7,37,0.16)] border border-slate-200/90 flex items-center justify-center z-20 cursor-pointer transition-all duration-300 ${activePillar === 3 ? 'scale-110 shadow-blue-500/25 border-blue-400' : 'hover:scale-105'}`}
          >
            <div className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center bg-slate-50/50 shadow-inner">
              <span className="text-lg font-black text-[#2563EB]">04</span>
            </div>
          </div>

          {/* Node 05: (353.4, 656.8) */}
          <div 
            onMouseEnter={() => setActivePillar(4)}
            onMouseLeave={() => setActivePillar(null)}
            className={`absolute left-[322px] top-[626px] w-[62px] h-[62px] rounded-full bg-white shadow-[0_8px_20px_rgba(14,7,37,0.16)] border border-slate-200/90 flex items-center justify-center z-20 cursor-pointer transition-all duration-300 ${activePillar === 4 ? 'scale-110 shadow-blue-500/25 border-blue-400' : 'hover:scale-105'}`}
          >
            <div className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center bg-slate-50/50 shadow-inner">
              <span className="text-lg font-black text-[#2563EB]">05</span>
            </div>
          </div>

          {/* 5 Content Blocks (Icon at Left, Title & Desc at Right) */}
          {/* Item 01 */}
          <div 
            onMouseEnter={() => setActivePillar(0)}
            onMouseLeave={() => setActivePillar(null)}
            className={`absolute left-[465px] top-[118px] w-[400px] z-20 flex items-start gap-3.5 group cursor-pointer transition-all duration-200 ${activePillar === 0 ? 'translate-x-1' : ''}`}
          >
            <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 border transition-all duration-300 shadow-sm ${activePillar === 0 ? 'bg-[#2563EB] text-white border-blue-500 scale-110 shadow-blue-500/20' : 'bg-blue-50 text-[#2563EB] border-blue-100/80 group-hover:scale-110 group-hover:bg-[#2563EB] group-hover:text-white'}`}>
              {pillars[0].icon}
            </div>
            <div>
              <h4 className={`text-[15px] font-bold transition-colors leading-tight mb-1 ${activePillar === 0 ? 'text-[#2563EB]' : 'text-[#0E0725] group-hover:text-[#2563EB]'}`}>
                {pillars[0].title}
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                {pillars[0].desc}
              </p>
            </div>
          </div>

          {/* Item 02 */}
          <div 
            onMouseEnter={() => setActivePillar(1)}
            onMouseLeave={() => setActivePillar(null)}
            className={`absolute left-[610px] top-[216px] w-[400px] z-20 flex items-start gap-3.5 group cursor-pointer transition-all duration-200 ${activePillar === 1 ? 'translate-x-1' : ''}`}
          >
            <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 border transition-all duration-300 shadow-sm ${activePillar === 1 ? 'bg-[#2563EB] text-white border-blue-500 scale-110 shadow-blue-500/20' : 'bg-blue-50 text-[#2563EB] border-blue-100/80 group-hover:scale-110 group-hover:bg-[#2563EB] group-hover:text-white'}`}>
              {pillars[1].icon}
            </div>
            <div>
              <h4 className={`text-[15px] font-bold transition-colors leading-tight mb-1 ${activePillar === 1 ? 'text-[#2563EB]' : 'text-[#0E0725] group-hover:text-[#2563EB]'}`}>
                {pillars[1].title}
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                {pillars[1].desc}
              </p>
            </div>
          </div>

          {/* Item 03 */}
          <div 
            onMouseEnter={() => setActivePillar(2)}
            onMouseLeave={() => setActivePillar(null)}
            className={`absolute left-[670px] top-[375px] w-[400px] z-20 flex items-start gap-3.5 group cursor-pointer transition-all duration-200 ${activePillar === 2 ? 'translate-x-1' : ''}`}
          >
            <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 border transition-all duration-300 shadow-sm ${activePillar === 2 ? 'bg-[#2563EB] text-white border-blue-500 scale-110 shadow-blue-500/20' : 'bg-blue-50 text-[#2563EB] border-blue-100/80 group-hover:scale-110 group-hover:bg-[#2563EB] group-hover:text-white'}`}>
              {pillars[2].icon}
            </div>
            <div>
              <h4 className={`text-[15px] font-bold transition-colors leading-tight mb-1 ${activePillar === 2 ? 'text-[#2563EB]' : 'text-[#0E0725] group-hover:text-[#2563EB]'}`}>
                {pillars[2].title}
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                {pillars[2].desc}
              </p>
            </div>
          </div>

          {/* Item 04 */}
          <div 
            onMouseEnter={() => setActivePillar(3)}
            onMouseLeave={() => setActivePillar(null)}
            className={`absolute left-[610px] top-[534px] w-[400px] z-20 flex items-start gap-3.5 group cursor-pointer transition-all duration-200 ${activePillar === 3 ? 'translate-x-1' : ''}`}
          >
            <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 border transition-all duration-300 shadow-sm ${activePillar === 3 ? 'bg-[#2563EB] text-white border-blue-500 scale-110 shadow-blue-500/20' : 'bg-blue-50 text-[#2563EB] border-blue-100/80 group-hover:scale-110 group-hover:bg-[#2563EB] group-hover:text-white'}`}>
              {pillars[3].icon}
            </div>
            <div>
              <h4 className={`text-[15px] font-bold transition-colors leading-tight mb-1 ${activePillar === 3 ? 'text-[#2563EB]' : 'text-[#0E0725] group-hover:text-[#2563EB]'}`}>
                {pillars[3].title}
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                {pillars[3].desc}
              </p>
            </div>
          </div>

          {/* Item 05 */}
          <div 
            onMouseEnter={() => setActivePillar(4)}
            onMouseLeave={() => setActivePillar(null)}
            className={`absolute left-[465px] top-[632px] w-[400px] z-20 flex items-start gap-3.5 group cursor-pointer transition-all duration-200 ${activePillar === 4 ? 'translate-x-1' : ''}`}
          >
            <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 border transition-all duration-300 shadow-sm ${activePillar === 4 ? 'bg-[#2563EB] text-white border-blue-500 scale-110 shadow-blue-500/20' : 'bg-blue-50 text-[#2563EB] border-blue-100/80 group-hover:scale-110 group-hover:bg-[#2563EB] group-hover:text-white'}`}>
              {pillars[4].icon}
            </div>
            <div>
              <h4 className={`text-[15px] font-bold transition-colors leading-tight mb-1 ${activePillar === 4 ? 'text-[#2563EB]' : 'text-[#0E0725] group-hover:text-[#2563EB]'}`}>
                {pillars[4].title}
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                {pillars[4].desc}
              </p>
            </div>
          </div>

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
                <marker id="mArrow" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
                  <path d="M 0 0 L 5 2.5 L 0 5 Z" fill="#94A3B8" />
                </marker>
              </defs>

              {/* Outer Guideline Arc */}
              <path d="M 45 92 A 180 180 0 0 1 45 428" stroke="#CBD5E1" strokeWidth="1" strokeLinecap="round" />

              {/* 3D Ribbon Track: thick arc */}
              <path d="M 43.4 124.1 A 150 150 0 0 1 43.4 395.9" stroke="#F1F5F9" strokeWidth="48" strokeLinecap="round" filter="url(#mRibbonGlow)" />
              <path d="M 43.4 124.1 A 150 150 0 0 1 43.4 395.9" stroke="#E2E8F0" strokeWidth="45" strokeLinecap="round" />
              <path d="M 43.4 124.1 A 150 150 0 0 1 43.4 395.9" stroke="#FFFFFF" strokeWidth="42" strokeLinecap="round" />

              {/* Connector Lines */}
              <line x1="65" y1="124.1" x2="115" y2="124.1" stroke="#94A3B8" strokeWidth="1" markerEnd="url(#mArrow)" />
              <line x1="127" y1="180.5" x2="175" y2="180.5" stroke="#94A3B8" strokeWidth="1" markerEnd="url(#mArrow)" />
              <line x1="150" y1="260.0" x2="195" y2="260.0" stroke="#94A3B8" strokeWidth="1" markerEnd="url(#mArrow)" />
              <line x1="127" y1="339.5" x2="175" y2="339.5" stroke="#94A3B8" strokeWidth="1" markerEnd="url(#mArrow)" />
              <line x1="65" y1="395.9" x2="115" y2="395.9" stroke="#94A3B8" strokeWidth="1" markerEnd="url(#mArrow)" />
            </svg>

            {/* 5 Discs on Mobile */}
            <div className="absolute left-[24px] top-[105px] w-[38px] h-[38px] rounded-full bg-white shadow-md border border-slate-200 flex items-center justify-center z-20">
              <span className="text-xs font-black text-[#2563EB]">01</span>
            </div>

            <div className="absolute left-[88px] top-[161px] w-[38px] h-[38px] rounded-full bg-white shadow-md border border-slate-200 flex items-center justify-center z-20">
              <span className="text-xs font-black text-[#2563EB]">02</span>
            </div>

            <div className="absolute left-[111px] top-[241px] w-[38px] h-[38px] rounded-full bg-white shadow-md border border-slate-200 flex items-center justify-center z-20">
              <span className="text-xs font-black text-[#2563EB]">03</span>
            </div>

            <div className="absolute left-[88px] top-[320px] w-[38px] h-[38px] rounded-full bg-white shadow-md border border-slate-200 flex items-center justify-center z-20">
              <span className="text-xs font-black text-[#2563EB]">04</span>
            </div>

            <div className="absolute left-[24px] top-[377px] w-[38px] h-[38px] rounded-full bg-white shadow-md border border-slate-200 flex items-center justify-center z-20">
              <span className="text-xs font-black text-[#2563EB]">05</span>
            </div>

            {/* 5 Content Items on Mobile with theme icons */}
            <div className="absolute left-[125px] top-[104px] w-[235px] z-20 flex items-start gap-2">
              <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0 border border-blue-100 mt-0.5">
                <PenTool className="w-3.5 h-3.5 stroke-[2]" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#0E0725] leading-tight mb-0.5">Built Around Your Requirements</h4>
                <p className="text-[10px] text-slate-500 leading-tight">Zero templates. 100% custom-engineered for your goals.</p>
              </div>
            </div>

            <div className="absolute left-[185px] top-[161px] w-[180px] z-20 flex items-start gap-2">
              <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0 border border-blue-100 mt-0.5">
                <Sparkles className="w-3.5 h-3.5 stroke-[2]" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#0E0725] leading-tight mb-0.5">Design & Tech</h4>
                <p className="text-[10px] text-slate-500 leading-tight">High performance code with intuitive UX.</p>
              </div>
            </div>

            <div className="absolute left-[205px] top-[241px] w-[160px] z-20 flex items-start gap-2">
              <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0 border border-blue-100 mt-0.5">
                <Cpu className="w-3.5 h-3.5 stroke-[2]" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#0E0725] leading-tight mb-0.5">Scalable Architecture</h4>
                <p className="text-[10px] text-slate-500 leading-tight">Future-proof frameworks & automated CI/CD.</p>
              </div>
            </div>

            <div className="absolute left-[185px] top-[320px] w-[180px] z-20 flex items-start gap-2">
              <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0 border border-blue-100 mt-0.5">
                <ShieldCheck className="w-3.5 h-3.5 stroke-[2]" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#0E0725] leading-tight mb-0.5">Security & Trust</h4>
                <p className="text-[10px] text-slate-500 leading-tight">100% IP transfer & security audits.</p>
              </div>
            </div>

            <div className="absolute left-[125px] top-[377px] w-[235px] z-20 flex items-start gap-2">
              <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0 border border-blue-100 mt-0.5">
                <Users className="w-3.5 h-3.5 stroke-[2]" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#0E0725] leading-tight mb-0.5">Transparent Partnership</h4>
                <p className="text-[10px] text-slate-500 leading-tight">Direct senior developer access & sprint demos.</p>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
