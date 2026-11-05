import React from 'react';
import { 
  Lightbulb, 
  Globe, 
  Puzzle, 
  Code2, 
  CheckCircle2, 
  TrendingUp 
} from 'lucide-react';

interface JourneyStep {
  num: string;
  phase: string;
  title: string;
  shortTitle: string;
  tagline: string;
  desc: string;
  deliverable: string;
  theme: {
    accentColor: string;
    darkBase: string;
    rimColor: string;
    textColor: string;
    bgColor: string;
    borderColor: string;
  };
  icon: React.ReactNode;
}

export const DevelopmentJourney: React.FC = () => {
  const steps: JourneyStep[] = [
    {
      num: '01',
      phase: 'PHASE 01 • DISCOVERY',
      title: 'Deep Dive & Scope',
      shortTitle: 'Scope',
      tagline: 'Discovery Phase',
      desc: 'Mapping business goals, user personas, commercial bottlenecks, and technical prerequisites.',
      deliverable: 'Scope Spec & KPIs',
      theme: {
        accentColor: '#D99B00',
        darkBase: '#9E6F05',
        rimColor: '#E5A91A',
        textColor: 'text-[#D99B00]',
        bgColor: 'bg-amber-50',
        borderColor: 'border-amber-200/60'
      },
      icon: <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6" />
    },
    {
      num: '02',
      phase: 'PHASE 02 • ARCHITECTURE',
      title: 'Data Schema & Cloud',
      shortTitle: 'Architect',
      tagline: 'System Architecture',
      desc: 'Defining resilient microservices, secure API protocols, database schemas, and cloud models.',
      deliverable: 'Cloud Blueprint',
      theme: {
        accentColor: '#EA580C',
        darkBase: '#A84506',
        rimColor: '#F97316',
        textColor: 'text-[#EA580C]',
        bgColor: 'bg-orange-50',
        borderColor: 'border-orange-200/60'
      },
      icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6" />
    },
    {
      num: '03',
      phase: 'PHASE 03 • PROTOTYPE',
      title: 'Interactive Wireframes',
      shortTitle: 'UI/UX',
      tagline: 'UI/UX Experience',
      desc: 'Crafting brand-aligned design systems, component libraries, and clickable interactive prototypes.',
      deliverable: 'Interactive Figma',
      theme: {
        accentColor: '#E11D48',
        darkBase: '#75111B',
        rimColor: '#E11D48',
        textColor: 'text-[#E11D48]',
        bgColor: 'bg-rose-50',
        borderColor: 'border-rose-200/60'
      },
      icon: <Puzzle className="w-5 h-5 sm:w-6 sm:h-6" />
    },
    {
      num: '04',
      phase: 'PHASE 04 • SPRINT CODE',
      title: 'Modular Engineering',
      shortTitle: 'Code',
      tagline: 'Full-Stack Code',
      desc: 'Bi-weekly sprints, clean React & Node architecture, automated tests, and staging server reviews.',
      deliverable: 'Staging Access',
      theme: {
        accentColor: '#0284C7',
        darkBase: '#0A414E',
        rimColor: '#0284C7',
        textColor: 'text-[#0284C7]',
        bgColor: 'bg-sky-50',
        borderColor: 'border-sky-200/60'
      },
      icon: <Code2 className="w-5 h-5 sm:w-6 sm:h-6" />
    },
    {
      num: '05',
      phase: 'PHASE 05 • RIGOROUS QA',
      title: 'Zero-Downtime Deploy',
      shortTitle: 'Deploy',
      tagline: 'QA & Launch',
      desc: 'Multi-device regression testing, Core Web Vitals audit, and safe production deployment.',
      deliverable: 'Live QA Signoff',
      theme: {
        accentColor: '#65A30D',
        darkBase: '#41520F',
        rimColor: '#84CC16',
        textColor: 'text-[#65A30D]',
        bgColor: 'bg-lime-50',
        borderColor: 'border-lime-200/60'
      },
      icon: <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
    },
    {
      num: '06',
      phase: 'PHASE 06 • EVOLUTION',
      title: 'SLA & Evolution',
      shortTitle: 'Scale',
      tagline: 'Scale & SLA',
      desc: 'Continuous telemetry, performance monitoring, security patches, and dedicated engineering SLA.',
      deliverable: '24/7 Production SLA',
      theme: {
        accentColor: '#059669',
        darkBase: '#123B17',
        rimColor: '#10B981',
        textColor: 'text-[#059669]',
        bgColor: 'bg-emerald-50',
        borderColor: 'border-emerald-200/60'
      },
      icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />
    }
  ];

  return (
    <section id="journey" className="py-20 sm:py-32 bg-[#FAFAFC] relative overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-amber-50/40 via-purple-50/30 to-transparent rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ======================================================== */}
        {/* DESKTOP INFOGRAPHIC VIEW (Visible on lg+)                */}
        {/* ======================================================== */}
        <div className="hidden lg:block relative min-h-[820px]">
          
          {/* Top Right Header (Matches Infographic Template layout) */}
          <div className="absolute top-2 right-4 max-w-xl text-left z-20">
            <span className="text-[11px] font-black uppercase tracking-widest text-[#6842C2] bg-[#EEE8FA] px-3.5 py-1 rounded-full mb-3 inline-block border border-purple-100">
              STRUCTURED EXECUTION
            </span>
            <h2 className="text-4xl xl:text-5xl font-black text-[#0E0725] tracking-tight leading-[1.1] mb-4">
              From First Conversation<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6842C2] to-[#FF5E36]">
                To Production Launch.
              </span>
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed max-w-lg">
              A milestone-driven engineering methodology delivering predictable results, zero tech debt, and total peace of mind at every sprint.
            </p>
          </div>

          {/* Diagonal Cascading Overlapping 3D Discs Container */}
          <div className="relative w-full h-[760px]">

            {/* STEP 01: Discover & Scope */}
            <div className="absolute top-[80px] left-[10px] w-[200px] text-right z-30">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#D99B00] font-mono block mb-1">
                01. DISCOVERY
              </span>
              <h4 className="text-base font-extrabold text-[#0E0725] mb-1">
                Deep Dive & Scope
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Mapping business goals, user personas & technical prerequisites.
              </p>
              <span className="inline-block mt-2 text-[10px] font-mono text-[#D99B00] bg-amber-50 px-2.5 py-0.5 rounded-md border border-amber-200/60 font-bold">
                Scope Spec & KPIs
              </span>
            </div>

            <div className="absolute top-[40px] left-[225px] w-[165px] h-[165px] z-25 group cursor-pointer transition-transform duration-300 hover:scale-105">
              <div className="absolute inset-0 rounded-full bg-[#9E6F05] translate-x-[-10px] translate-y-[8px] shadow-lg" />
              <div className="absolute inset-0 rounded-full bg-[#E5A91A] translate-x-[-5px] translate-y-[4px]" />
              <div className="absolute inset-0 rounded-full bg-white shadow-[0_10px_25px_rgba(0,0,0,0.12)] border border-slate-100 flex flex-col items-center justify-center p-4 text-center">
                <div className="w-10 h-10 rounded-full bg-amber-50 text-[#D99B00] flex items-center justify-center mb-1">
                  {steps[0].icon}
                </div>
                <span className="text-[10px] font-mono font-bold text-[#D99B00] uppercase tracking-wider">
                  PHASE 01
                </span>
                <span className="text-xs font-black text-[#0E0725] leading-tight">
                  Discover & Scope
                </span>
              </div>
            </div>

            {/* STEP 02: Strategize & Architect */}
            <div className="absolute top-[145px] left-[350px] w-[165px] h-[165px] z-24 group cursor-pointer transition-transform duration-300 hover:scale-105">
              <div className="absolute inset-0 rounded-full bg-[#A84506] translate-x-[-10px] translate-y-[8px] shadow-lg" />
              <div className="absolute inset-0 rounded-full bg-[#F97316] translate-x-[-5px] translate-y-[4px]" />
              <div className="absolute inset-0 rounded-full bg-white shadow-[0_10px_25px_rgba(0,0,0,0.12)] border border-slate-100 flex flex-col items-center justify-center p-4 text-center">
                <div className="w-10 h-10 rounded-full bg-orange-50 text-[#EA580C] flex items-center justify-center mb-1">
                  {steps[1].icon}
                </div>
                <span className="text-[10px] font-mono font-bold text-[#EA580C] uppercase tracking-wider">
                  PHASE 02
                </span>
                <span className="text-xs font-black text-[#0E0725] leading-tight">
                  Architecture
                </span>
              </div>
            </div>

            <div className="absolute top-[215px] left-[130px] w-[205px] text-right z-30">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#EA580C] font-mono block mb-1">
                02. ARCHITECTURE
              </span>
              <h4 className="text-base font-extrabold text-[#0E0725] mb-1">
                Data Schema & Cloud
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Defining resilient microservices, secure APIs, and database ERDs.
              </p>
              <span className="inline-block mt-2 text-[10px] font-mono text-[#EA580C] bg-orange-50 px-2.5 py-0.5 rounded-md border border-orange-200/60 font-bold">
                Cloud Blueprint
              </span>
            </div>

            {/* STEP 03: UI/UX Prototyping */}
            <div className="absolute top-[250px] left-[475px] w-[165px] h-[165px] z-23 group cursor-pointer transition-transform duration-300 hover:scale-105">
              <div className="absolute inset-0 rounded-full bg-[#75111B] translate-x-[-10px] translate-y-[8px] shadow-lg" />
              <div className="absolute inset-0 rounded-full bg-[#E11D48] translate-x-[-5px] translate-y-[4px]" />
              <div className="absolute inset-0 rounded-full bg-white shadow-[0_10px_25px_rgba(0,0,0,0.12)] border border-slate-100 flex flex-col items-center justify-center p-4 text-center">
                <div className="w-10 h-10 rounded-full bg-rose-50 text-[#E11D48] flex items-center justify-center mb-1">
                  {steps[2].icon}
                </div>
                <span className="text-[10px] font-mono font-bold text-[#E11D48] uppercase tracking-wider">
                  PHASE 03
                </span>
                <span className="text-xs font-black text-[#0E0725] leading-tight">
                  UI/UX Experience
                </span>
              </div>
            </div>

            <div className="absolute top-[355px] left-[250px] w-[210px] text-right z-30">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#E11D48] font-mono block mb-1">
                03. PROTOTYPE
              </span>
              <h4 className="text-base font-extrabold text-[#0E0725] mb-1">
                Figma Prototypes
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Crafting brand-aligned design systems and clickable prototypes.
              </p>
              <span className="inline-block mt-2 text-[10px] font-mono text-[#E11D48] bg-rose-50 px-2.5 py-0.5 rounded-md border border-rose-200/60 font-bold">
                Interactive Figma
              </span>
            </div>

            {/* STEP 04: Iterative Engineering */}
            <div className="absolute top-[355px] left-[600px] w-[165px] h-[165px] z-22 group cursor-pointer transition-transform duration-300 hover:scale-105">
              <div className="absolute inset-0 rounded-full bg-[#0A414E] translate-x-[-10px] translate-y-[8px] shadow-lg" />
              <div className="absolute inset-0 rounded-full bg-[#0284C7] translate-x-[-5px] translate-y-[4px]" />
              <div className="absolute inset-0 rounded-full bg-white shadow-[0_10px_25px_rgba(0,0,0,0.12)] border border-slate-100 flex flex-col items-center justify-center p-4 text-center">
                <div className="w-10 h-10 rounded-full bg-sky-50 text-[#0284C7] flex items-center justify-center mb-1">
                  {steps[3].icon}
                </div>
                <span className="text-[10px] font-mono font-bold text-[#0284C7] uppercase tracking-wider">
                  PHASE 04
                </span>
                <span className="text-xs font-black text-[#0E0725] leading-tight">
                  Full-Stack Code
                </span>
              </div>
            </div>

            <div className="absolute top-[365px] left-[785px] w-[230px] text-left z-30">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#0284C7] font-mono block mb-1">
                04. SPRINT CODE
              </span>
              <h4 className="text-base font-extrabold text-[#0E0725] mb-1">
                Modular Engineering
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Bi-weekly sprints, clean React/Node architecture, and staging reviews.
              </p>
              <span className="inline-block mt-2 text-[10px] font-mono text-[#0284C7] bg-sky-50 px-2.5 py-0.5 rounded-md border border-sky-200/60 font-bold">
                Staging Access
              </span>
            </div>

            {/* STEP 05: Quality Assurance & Launch */}
            <div className="absolute top-[460px] left-[725px] w-[165px] h-[165px] z-21 group cursor-pointer transition-transform duration-300 hover:scale-105">
              <div className="absolute inset-0 rounded-full bg-[#41520F] translate-x-[-10px] translate-y-[8px] shadow-lg" />
              <div className="absolute inset-0 rounded-full bg-[#84CC16] translate-x-[-5px] translate-y-[4px]" />
              <div className="absolute inset-0 rounded-full bg-white shadow-[0_10px_25px_rgba(0,0,0,0.12)] border border-slate-100 flex flex-col items-center justify-center p-4 text-center">
                <div className="w-10 h-10 rounded-full bg-lime-50 text-[#65A30D] flex items-center justify-center mb-1">
                  {steps[4].icon}
                </div>
                <span className="text-[10px] font-mono font-bold text-[#65A30D] uppercase tracking-wider">
                  PHASE 05
                </span>
                <span className="text-xs font-black text-[#0E0725] leading-tight">
                  QA & Launch
                </span>
              </div>
            </div>

            <div className="absolute top-[480px] left-[910px] w-[230px] text-left z-30">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#65A30D] font-mono block mb-1">
                05. RIGOROUS QA
              </span>
              <h4 className="text-base font-extrabold text-[#0E0725] mb-1">
                Zero-Downtime Deploy
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Multi-device regression tests, Web Vitals audit & production deploy.
              </p>
              <span className="inline-block mt-2 text-[10px] font-mono text-[#65A30D] bg-lime-50 px-2.5 py-0.5 rounded-md border border-lime-200/60 font-bold">
                Live QA Signoff
              </span>
            </div>

            {/* STEP 06: Continuous Growth & Scale */}
            <div className="absolute top-[565px] left-[850px] w-[165px] h-[165px] z-20 group cursor-pointer transition-transform duration-300 hover:scale-105">
              <div className="absolute inset-0 rounded-full bg-[#123B17] translate-x-[-10px] translate-y-[8px] shadow-lg" />
              <div className="absolute inset-0 rounded-full bg-[#10B981] translate-x-[-5px] translate-y-[4px]" />
              <div className="absolute inset-0 rounded-full bg-white shadow-[0_10px_25px_rgba(0,0,0,0.12)] border border-slate-100 flex flex-col items-center justify-center p-4 text-center">
                <div className="w-10 h-10 rounded-full bg-emerald-50 text-[#059669] flex items-center justify-center mb-1">
                  {steps[5].icon}
                </div>
                <span className="text-[10px] font-mono font-bold text-[#059669] uppercase tracking-wider">
                  PHASE 06
                </span>
                <span className="text-xs font-black text-[#0E0725] leading-tight">
                  Scale & SLA
                </span>
              </div>
            </div>

            <div className="absolute top-[635px] left-[600px] w-[230px] text-right z-30">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#059669] font-mono block mb-1">
                06. LONG-TERM SCALING
              </span>
              <h4 className="text-base font-extrabold text-[#0E0725] mb-1">
                SLA & Evolution
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Continuous telemetry, performance monitoring & dedicated engineering SLA.
              </p>
              <span className="inline-block mt-2 text-[10px] font-mono text-[#059669] bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200/60 font-bold">
                24/7 Production SLA
              </span>
            </div>

          </div>
        </div>

        {/* ======================================================== */}
        {/* MOBILE VIEW (Visible on screens < lg)                     */}
        {/* Overlapping 3D Cascading Discs (Zero outer cards!)        */}
        {/* ======================================================== */}
        <div className="block lg:hidden">
          
          {/* Mobile Header */}
          <div className="mb-10 text-center">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#6842C2] bg-[#EEE8FA] px-3 py-1 rounded-full mb-2.5 inline-block border border-purple-100">
              STRUCTURED EXECUTION
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0E0725] tracking-tight leading-tight mb-2">
              From First Conversation<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6842C2] to-[#FF5E36]">
                To Production Launch.
              </span>
            </h2>
            <p className="text-slate-500 text-xs leading-relaxed max-w-xs mx-auto">
              A milestone-driven engineering methodology delivering predictable results.
            </p>
          </div>

          {/* Overlapping 3D Cascading Staircase (Directly on page) */}
          <div className="relative w-full max-w-[370px] mx-auto min-h-[560px] py-2">

            {/* STEP 01 (left=8px) */}
            <div className="relative flex items-center mb-[-8px] z-30">
              <div className="relative w-[86px] h-[86px] shrink-0">
                <div className="absolute inset-0 rounded-full bg-[#9E6F05] translate-x-[-5px] translate-y-[5px] shadow-md" />
                <div className="absolute inset-0 rounded-full bg-[#E5A91A] translate-x-[-2px] translate-y-[2px]" />
                <div className="absolute inset-0 rounded-full bg-white shadow-md border border-slate-100 flex flex-col items-center justify-center p-1.5 text-center">
                  <div className="w-6 h-6 rounded-full bg-amber-50 text-[#D99B00] flex items-center justify-center mb-0.5">
                    {steps[0].icon}
                  </div>
                  <span className="text-[8px] font-mono font-bold text-[#D99B00]">01</span>
                  <span className="text-[9px] font-black text-[#0E0725] leading-none">Scope</span>
                </div>
              </div>
              <div className="pl-4 pr-1 py-0.5">
                <span className="text-[9px] font-mono font-bold text-[#D99B00] uppercase block">PHASE 01 &bull; DISCOVERY</span>
                <h4 className="text-xs font-black text-[#0E0725] leading-snug">Deep Dive & Scope</h4>
                <p className="text-[10px] text-slate-500 leading-tight mt-0.5">Map goals, user journeys & KPIs.</p>
                <span className="inline-block mt-1 text-[8px] font-mono text-[#D99B00] bg-amber-50 px-2 py-0.5 rounded font-bold border border-amber-200/50">
                  Scope Spec & KPIs
                </span>
              </div>
            </div>

            {/* STEP 02 (left=22px, overlapping Step 01) */}
            <div className="relative flex items-center mb-[-8px] pl-[14px] z-28">
              <div className="relative w-[86px] h-[86px] shrink-0">
                <div className="absolute inset-0 rounded-full bg-[#A84506] translate-x-[-5px] translate-y-[5px] shadow-md" />
                <div className="absolute inset-0 rounded-full bg-[#F97316] translate-x-[-2px] translate-y-[2px]" />
                <div className="absolute inset-0 rounded-full bg-white shadow-md border border-slate-100 flex flex-col items-center justify-center p-1.5 text-center">
                  <div className="w-6 h-6 rounded-full bg-orange-50 text-[#EA580C] flex items-center justify-center mb-0.5">
                    {steps[1].icon}
                  </div>
                  <span className="text-[8px] font-mono font-bold text-[#EA580C]">02</span>
                  <span className="text-[9px] font-black text-[#0E0725] leading-none">Architect</span>
                </div>
              </div>
              <div className="pl-4 pr-1 py-0.5">
                <span className="text-[9px] font-mono font-bold text-[#EA580C] uppercase block">PHASE 02 &bull; ARCHITECTURE</span>
                <h4 className="text-xs font-black text-[#0E0725] leading-snug">Data Schema & Cloud</h4>
                <p className="text-[10px] text-slate-500 leading-tight mt-0.5">Microservices, database ERD & cloud models.</p>
                <span className="inline-block mt-1 text-[8px] font-mono text-[#EA580C] bg-orange-50 px-2 py-0.5 rounded font-bold border border-orange-200/50">
                  Cloud Blueprint
                </span>
              </div>
            </div>

            {/* STEP 03 (left=38px, overlapping Step 02) */}
            <div className="relative flex items-center mb-[-8px] pl-[28px] z-26">
              <div className="relative w-[86px] h-[86px] shrink-0">
                <div className="absolute inset-0 rounded-full bg-[#75111B] translate-x-[-5px] translate-y-[5px] shadow-md" />
                <div className="absolute inset-0 rounded-full bg-[#E11D48] translate-x-[-2px] translate-y-[2px]" />
                <div className="absolute inset-0 rounded-full bg-white shadow-md border border-slate-100 flex flex-col items-center justify-center p-1.5 text-center">
                  <div className="w-6 h-6 rounded-full bg-rose-50 text-[#E11D48] flex items-center justify-center mb-0.5">
                    {steps[2].icon}
                  </div>
                  <span className="text-[8px] font-mono font-bold text-[#E11D48]">03</span>
                  <span className="text-[9px] font-black text-[#0E0725] leading-none">UI/UX</span>
                </div>
              </div>
              <div className="pl-4 pr-1 py-0.5">
                <span className="text-[9px] font-mono font-bold text-[#E11D48] uppercase block">PHASE 03 &bull; PROTOTYPE</span>
                <h4 className="text-xs font-black text-[#0E0725] leading-snug">Interactive Wireframes</h4>
                <p className="text-[10px] text-slate-500 leading-tight mt-0.5">Brand-aligned UI systems & clickable Figma.</p>
                <span className="inline-block mt-1 text-[8px] font-mono text-[#E11D48] bg-rose-50 px-2 py-0.5 rounded font-bold border border-rose-200/50">
                  Interactive Figma
                </span>
              </div>
            </div>

            {/* STEP 04 (left=54px, overlapping Step 03) */}
            <div className="relative flex items-center mb-[-8px] pl-[42px] z-24">
              <div className="relative w-[86px] h-[86px] shrink-0">
                <div className="absolute inset-0 rounded-full bg-[#0A414E] translate-x-[-5px] translate-y-[5px] shadow-md" />
                <div className="absolute inset-0 rounded-full bg-[#0284C7] translate-x-[-2px] translate-y-[2px]" />
                <div className="absolute inset-0 rounded-full bg-white shadow-md border border-slate-100 flex flex-col items-center justify-center p-1.5 text-center">
                  <div className="w-6 h-6 rounded-full bg-sky-50 text-[#0284C7] flex items-center justify-center mb-0.5">
                    {steps[3].icon}
                  </div>
                  <span className="text-[8px] font-mono font-bold text-[#0284C7]">04</span>
                  <span className="text-[9px] font-black text-[#0E0725] leading-none">Code</span>
                </div>
              </div>
              <div className="pl-4 pr-1 py-0.5">
                <span className="text-[9px] font-mono font-bold text-[#0284C7] uppercase block">PHASE 04 &bull; SPRINT CODE</span>
                <h4 className="text-xs font-black text-[#0E0725] leading-snug">Modular Engineering</h4>
                <p className="text-[10px] text-slate-500 leading-tight mt-0.5">Clean React/Node code & staging reviews.</p>
                <span className="inline-block mt-1 text-[8px] font-mono text-[#0284C7] bg-sky-50 px-2 py-0.5 rounded font-bold border border-sky-200/50">
                  Staging Access
                </span>
              </div>
            </div>

            {/* STEP 05 (left=70px, overlapping Step 04) */}
            <div className="relative flex items-center mb-[-8px] pl-[56px] z-22">
              <div className="relative w-[86px] h-[86px] shrink-0">
                <div className="absolute inset-0 rounded-full bg-[#41520F] translate-x-[-5px] translate-y-[5px] shadow-md" />
                <div className="absolute inset-0 rounded-full bg-[#84CC16] translate-x-[-2px] translate-y-[2px]" />
                <div className="absolute inset-0 rounded-full bg-white shadow-md border border-slate-100 flex flex-col items-center justify-center p-1.5 text-center">
                  <div className="w-6 h-6 rounded-full bg-lime-50 text-[#65A30D] flex items-center justify-center mb-0.5">
                    {steps[4].icon}
                  </div>
                  <span className="text-[8px] font-mono font-bold text-[#65A30D]">05</span>
                  <span className="text-[9px] font-black text-[#0E0725] leading-none">Deploy</span>
                </div>
              </div>
              <div className="pl-4 pr-1 py-0.5">
                <span className="text-[9px] font-mono font-bold text-[#65A30D] uppercase block">PHASE 05 &bull; RIGOROUS QA</span>
                <h4 className="text-xs font-black text-[#0E0725] leading-snug">Zero-Downtime Deploy</h4>
                <p className="text-[10px] text-slate-500 leading-tight mt-0.5">Regression testing, Web Vitals & signoff.</p>
                <span className="inline-block mt-1 text-[8px] font-mono text-[#65A30D] bg-lime-50 px-2 py-0.5 rounded font-bold border border-lime-200/50">
                  Live QA Signoff
                </span>
              </div>
            </div>

            {/* STEP 06 (left=86px, overlapping Step 05) */}
            <div className="relative flex items-center pl-[70px] z-20">
              <div className="relative w-[86px] h-[86px] shrink-0">
                <div className="absolute inset-0 rounded-full bg-[#123B17] translate-x-[-5px] translate-y-[5px] shadow-md" />
                <div className="absolute inset-0 rounded-full bg-[#10B981] translate-x-[-2px] translate-y-[2px]" />
                <div className="absolute inset-0 rounded-full bg-white shadow-md border border-slate-100 flex flex-col items-center justify-center p-1.5 text-center">
                  <div className="w-6 h-6 rounded-full bg-emerald-50 text-[#059669] flex items-center justify-center mb-0.5">
                    {steps[5].icon}
                  </div>
                  <span className="text-[8px] font-mono font-bold text-[#059669]">06</span>
                  <span className="text-[9px] font-black text-[#0E0725] leading-none">SLA</span>
                </div>
              </div>
              <div className="pl-4 pr-1 py-0.5">
                <span className="text-[9px] font-mono font-bold text-[#059669] uppercase block">PHASE 06 &bull; EVOLUTION</span>
                <h4 className="text-xs font-black text-[#0E0725] leading-snug">SLA & Scale</h4>
                <p className="text-[10px] text-slate-500 leading-tight mt-0.5">Continuous telemetry & dedicated SLA.</p>
                <span className="inline-block mt-1 text-[8px] font-mono text-[#059669] bg-emerald-50 px-2 py-0.5 rounded font-bold border border-emerald-200/50">
                  24/7 Production SLA
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
