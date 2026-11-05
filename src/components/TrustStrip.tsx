import React from 'react';
import { Briefcase, Cpu, Layers, Headphones } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const capabilities = [
    {
      icon: Briefcase,
      title: 'Business-Focused Development',
      description: 'Engineered specifically around commercial goals and ROI'
    },
    {
      icon: Cpu,
      title: 'Custom-Built Solutions',
      description: 'Tailored codebases without restrictive off-the-shelf limits'
    },
    {
      icon: Layers,
      title: 'Scalable Architecture',
      description: 'Robust systems ready to expand as your volume increases'
    },
    {
      icon: Headphones,
      title: 'End-to-End Project Support',
      description: 'Continuous assistance from initial design through deployment'
    }
  ];

  return (
    <section className="border-y border-slate-200/80 bg-slate-50/70 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="flex items-start gap-3.5 p-2 group transition-all"
              >
                <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-2xs text-purple-700 shrink-0 group-hover:border-purple-300 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

