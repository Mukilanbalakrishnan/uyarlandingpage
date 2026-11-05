import React from 'react';
import { ArrowRight, MapPin, Building, ShieldCheck } from 'lucide-react';
import bannerImg from '../assets/UYAR Technologies Business Solutions Banner.png';
// import logoImg from '../assets/uyar-horizontal-removebg-preview.png';

interface AboutProps {
  onWorkTogether: () => void;
}

export const About: React.FC<AboutProps> = ({ onWorkTogether }) => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Visual / Workspace Image */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-50">
              <img
                src={bannerImg}
                alt="Uyar Technologies Workspace and Solutions"
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Campus & Lab Location Badge */}
            <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <MapPin className="w-5 h-5 text-purple-700 shrink-0 mt-0.5" />
              <div className="text-xs text-slate-600">
                <span className="font-bold text-slate-900 block mb-0.5">
                  R&D & Engineering Hub:
                </span>
                IDEA Lab, Ground Floor, K.S. Rangasamy College of Technology, Thiruchengodu, Tamil Nadu, India.
              </div>
            </div>
          </div>

          {/* Right Column: Story & Positioning */}
          <div className="lg:col-span-6 flex flex-col items-start">

            <div className="mb-4">
              <img
                // src={logoImg}
                alt="Uyar Technologies"
                className="h-10 w-auto object-contain mb-3"
              />
              <span className="text-xs font-bold text-purple-700 tracking-widest uppercase bg-purple-50 px-3 py-1 rounded-full border border-purple-100 inline-block">
                About The Company
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug mb-6">
              Building Digital Solutions That Matter.
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              Uyar Technologies Private Limited is a software development company focused on helping businesses transform their ideas into reliable digital products. We combine thoughtful design, modern technology, and business-focused development to create solutions built for real-world needs.
            </p>

            <div className="grid grid-cols-2 gap-4 w-full mb-8">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <Building className="w-5 h-5 text-purple-700 mb-2" />
                <h4 className="text-sm font-bold text-slate-900 mb-1">Corporate Software</h4>
                <p className="text-xs text-slate-500">Enterprise systems, custom ERPs, and business databases.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <ShieldCheck className="w-5 h-5 text-emerald-600 mb-2" />
                <h4 className="text-sm font-bold text-slate-900 mb-1">Private Limited Entity</h4>
                <p className="text-xs text-slate-500">Registered Indian tech company with dedicated SLAs.</p>
              </div>
            </div>

            <button
              onClick={onWorkTogether}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-semibold text-base shadow-sm hover:shadow-md transition-all active:translate-y-px cursor-pointer group"
            >
              <span>Let's Work Together</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
