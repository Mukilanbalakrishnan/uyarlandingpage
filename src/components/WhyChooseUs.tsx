import React from 'react';
import { Target, Layers, MessageSquare, ShieldCheck, Check } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const valueProps = [
    {
      num: '01',
      title: 'Requirement-Driven Development',
      description: 'We understand your business before developing your solution.',
      details: 'We dive deep into your workflow, pain points, and customer journeys to make sure every feature built directly impacts your bottom line.',
      icon: Target
    },
    {
      num: '02',
      title: 'Modern Technology Stack',
      description: 'We use modern technologies to create reliable and scalable applications.',
      details: 'Leveraging clean architectures, secure APIs, and performant databases engineered for durability and effortless scaling as your users grow.',
      icon: Layers
    },
    {
      num: '03',
      title: 'Transparent Communication',
      description: 'Stay informed throughout every stage of your project.',
      details: 'No tech jargon confusion. Direct access to your technical leads with milestone reviews, regular progress demos, and clear timelines.',
      icon: MessageSquare
    },
    {
      num: '04',
      title: 'Long-Term Support',
      description: 'We focus on building solutions that support your future business growth.',
      details: 'Our commitment extends beyond deployment. We offer maintenance, security updates, and performance tuning for sustained business continuity.',
      icon: ShieldCheck
    }
  ];

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-slate-50/60 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs font-bold text-purple-700 tracking-widest uppercase bg-purple-50 px-3 py-1 rounded-full border border-purple-100 inline-block mb-3">
            Why Uyar Technologies
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            More Than Development.{' '}
            <span className="text-purple-700 block sm:inline">A Technology Partnership.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We partner with business owners who want reliable engineering, clear milestones, and digital products that perform in the real market.
          </p>
        </div>

        {/* Editorial Two-Column / Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: 4 Editorial Value Propositions */}
          <div className="lg:col-span-7 divide-y divide-slate-200">
            {valueProps.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="py-8 first:pt-0 last:pb-0 group">
                  <div className="flex items-start gap-5">
                    <span className="font-mono text-sm font-bold text-purple-700/60 group-hover:text-purple-700 pt-1 shrink-0 transition-colors">
                      {item.num}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon className="w-5 h-5 text-purple-700 shrink-0" />
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-base font-medium text-slate-700 mb-2">
                        {item.description}
                      </p>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {item.details}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Trust Framework & Engineering Commitment Panel */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <h4 className="text-lg font-bold text-slate-900 mb-2">
              Our Development Standard
            </h4>
            <p className="text-sm text-slate-500 mb-6">
              Every project developed at Uyar Technologies adheres to strict industry quality benchmarks.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { title: 'Clean, Documented Codebase', desc: 'Maintainable structure with no vendor lock-in' },
                { title: 'Responsive Across All Devices', desc: 'Tested across laptops, iPads, iPhones and Android' },
                { title: 'High-Speed Page Performance', desc: 'Core Web Vitals optimized for search & ads' },
                { title: 'Production Security Hardening', desc: 'Encrypted transactions, sanitized inputs & HTTPS' },
                { title: 'Full Intellectual Property Transfer', desc: 'You retain complete ownership of your code' },
              ].map((bench, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-slate-900">{bench.title}</h5>
                    <p className="text-xs text-slate-500">{bench.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-purple-50/60 rounded-xl border border-purple-100">
              <span className="text-xs font-semibold text-purple-900 block mb-1">
                Executive Tech Consultation
              </span>
              <p className="text-xs text-purple-700 leading-relaxed">
                Need guidance on architecture or scoping? Speak directly with our core engineering leads before committing.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

