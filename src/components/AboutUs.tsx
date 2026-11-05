import React from 'react';
import { ArrowUpRight, MapPin, Building, ShieldCheck } from 'lucide-react';
import bannerImg from '../assets/UYAR Technologies Business Solutions Banner.png';
// import logoImg from '../assets/uyar-horizontal-removebg-preview.png';

interface AboutUsProps {
  onWorkTogether: () => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ onWorkTogether }) => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#FAFAF8] relative border-b border-[#EAEAE6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Visual: Authentic Engineering Workspace & Banner */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden border border-[#EAEAE6] shadow-xl bg-white p-2">
              <img
                src={bannerImg}
                alt="Uyar Technologies Workspace and Solutions"
                loading="lazy"
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            {/* Campus Innovation Hub Badge */}
            <div className="mt-5 p-5 rounded-2xl bg-white border border-[#EAEAE6] shadow-xs flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#EEE8FA] text-[#6842C2] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#6842C2] block mb-0.5">
                  R&D & Engineering Hub
                </span>
                <p className="text-xs text-[#171717]/80 leading-relaxed font-medium">
                  IDEA Lab, Ground Floor, K.S. Rangasamy College of Technology, Thiruchengodu - 637 215, Tamil Nadu, India.
                </p>
              </div>
            </div>
          </div>

          {/* Right Editorial Story */}
          <div className="lg:col-span-6 flex flex-col items-start">

            <div className="mb-5">
              <img
                // src={logoImg}
                alt="Uyar Technologies Logo"
                className="h-10 w-auto object-contain mb-3"
              />
              <span className="text-[11px] font-bold text-[#6842C2] tracking-widest uppercase bg-[#EEE8FA] px-3.5 py-1 rounded-full inline-block">
                ABOUT THE COMPANY
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171717] tracking-tight leading-[1.12] mb-6">
              We Build Technology<br />
              <span className="text-[#6842C2]">With Purpose.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#171717]/80 leading-relaxed font-normal mb-8">
              Uyar Technologies Private Limited helps businesses turn ideas into powerful digital solutions. We combine creative thinking, modern engineering, and business-focused development to create products built for tomorrow.
            </p>

            {/* Two Strategic Entity Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-10">
              <div className="p-5 rounded-2xl bg-white border border-[#EAEAE6]">
                <Building className="w-5 h-5 text-[#6842C2] mb-2.5" />
                <h4 className="text-sm font-bold text-[#171717] mb-1">Corporate Software</h4>
                <p className="text-xs text-[#171717]/60">Enterprise systems, custom ERPs, and resilient databases.</p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#EAEAE6]">
                <ShieldCheck className="w-5 h-5 text-emerald-600 mb-2.5" />
                <h4 className="text-sm font-bold text-[#171717] mb-1">Private Limited Entity</h4>
                <p className="text-xs text-[#171717]/60">Formally registered Indian technology company with strict SLAs.</p>
              </div>
            </div>

            <button
              onClick={onWorkTogether}
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#171717] hover:bg-[#6842C2] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer active:scale-95"
            >
              <span>Let's Build Together</span>
              <ArrowUpRight className="w-4 h-4 text-white/70 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

