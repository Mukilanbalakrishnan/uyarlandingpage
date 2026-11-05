import React from 'react';
import { Search, Compass, Terminal, Rocket, HeartHandshake } from 'lucide-react';

export const Workflow: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Discovery',
      subtitle: 'Understand your business, requirements, and objectives.',
      icon: Search,
      deliverable: 'SRS & Architecture Blueprint'
    },
    {
      num: '02',
      title: 'Planning & Design',
      subtitle: 'Define the project structure, user experience, and technical approach.',
      icon: Compass,
      deliverable: 'UI/UX Wireframes & Database Schema'
    },
    {
      num: '03',
      title: 'Development',
      subtitle: 'Build your solution with modern technologies and clean architecture.',
      icon: Terminal,
      deliverable: 'Functional Sprints & Code Milestones'
    },
    {
      num: '04',
      title: 'Testing & Launch',
      subtitle: 'Test, optimize, and deploy your product with zero downtime.',
      icon: Rocket,
      deliverable: 'QA Verification & Live Deployment'
    },
    {
      num: '05',
      title: 'Support & Growth',
      subtitle: 'Provide ongoing assistance, performance tuning, and improvements.',
      icon: HeartHandshake,
      deliverable: 'SLA Support & Feature Scaling'
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 sm:mb-20">
          <span className="text-xs font-bold text-purple-700 tracking-widest uppercase bg-purple-50 px-3 py-1 rounded-full border border-purple-100 inline-block mb-3">
            Our Development Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            From Your Idea to a Working Product.
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            A structured, transparent workflow designed to deliver high-quality software on schedule.
          </p>
        </div>

        {/* Desktop Horizontal Process Timeline */}
        <div className="hidden lg:block relative">
          {/* Subtle connecting horizontal line behind icons */}
          <div className="absolute top-1/4 left-10 right-10 h-0.5 bg-slate-200 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-5 gap-4 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div 
                  key={idx}
                  className="group flex flex-col items-center text-center p-4 rounded-xl transition-all duration-200 hover:-translate-y-1"
                >
                  {/* Step Icon with Number Tag */}
                  <div className="relative mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-white border-2 border-slate-200 shadow-sm flex items-center justify-center text-purple-700 group-hover:border-purple-600 group-hover:bg-purple-700 group-hover:text-white transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="absolute -top-2.5 -right-2 px-2 py-0.5 rounded-full bg-slate-900 text-white font-mono text-[10px] font-bold">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-purple-700 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    {step.subtitle}
                  </p>

                  <span className="text-[11px] font-mono text-purple-700 bg-purple-50/80 px-2 py-1 rounded border border-purple-100/60">
                    {step.deliverable}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile / Tablet Vertical Timeline */}
        <div className="block lg:hidden relative pl-6 border-l-2 border-purple-200 space-y-8 ml-2">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="relative">
                {/* Dot / Node */}
                <div className="absolute -left-[33px] top-0 w-8 h-8 rounded-full bg-white border-2 border-purple-600 text-purple-700 flex items-center justify-center text-xs font-bold shadow-xs">
                  {step.num}
                </div>

                <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-4 h-4 text-purple-600" />
                    <h3 className="text-base font-bold text-slate-900">{step.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 mb-3 leading-relaxed">
                    {step.subtitle}
                  </p>
                  <span className="text-[11px] font-mono text-purple-700 bg-purple-100/60 px-2 py-0.5 rounded">
                    Deliverable: {step.deliverable}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

