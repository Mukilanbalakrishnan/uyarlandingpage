import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ConversionBar } from './components/ConversionBar';
import { Services } from './components/Services';
import { BrandStatement } from './components/BrandStatement';
import { SelectedWork } from './components/SelectedWork';
import { WhyUyar } from './components/WhyUyar';
import { DevelopmentJourney } from './components/DevelopmentJourney';
import { Testimonials } from './components/Testimonials';
import { AboutUs } from './components/AboutUs';
import { EnquirySection } from './components/EnquirySection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { metaPixel } from './services/metaPixel';

export function App() {
  const [selectedService, setSelectedService] = useState<string>('Website Development');

  useEffect(() => {
    // Initialize Meta Pixel tracking once on app mount
    metaPixel.init();
  }, []);

  const scrollToEnquiryForm = (service?: string) => {
    if (service) {
      setSelectedService(service);
    }
    const element = document.getElementById('enquiry-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToWork = () => {
    const element = document.getElementById('work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#171717] flex flex-col font-sans selection:bg-[#6842C2] selection:text-white">
      {/* SECTION 01: Sticky Navigation Bar */}
      <Navbar onStartProject={() => scrollToEnquiryForm()} />

      <main className="flex-grow">
        {/* SECTION 02: Impressive Hero Experience with Layered Software Products */}
        <Hero
          onBuildProject={() => scrollToEnquiryForm()}
          onExploreWork={scrollToWork}
          onSelectService={(service) => scrollToEnquiryForm(service)}
        />

        {/* SECTION 03: Immediate Trust Conversion Bar */}
        <ConversionBar />

        {/* SECTION 04: Editorial Asymmetric 12-Column Services Grid */}
        <Services onSelectService={(service) => scrollToEnquiryForm(service)} />

        {/* SECTION 05: Visual Break - Large Editorial Brand Statement */}
        <BrandStatement />

        {/* SECTION 06: Selected Work - Alternating Case-Study Showcase */}
        <SelectedWork />

        {/* SECTION 07: Why Uyar - Two-Column Distinctive Trust Section */}
        <WhyUyar />

        {/* SECTION 08: Development Journey - Interactive 5-Step Timeline */}
        <DevelopmentJourney />

        {/* SECTION 09: Testimonials - Verified Social Proof */}
        <Testimonials />

        {/* SECTION 10: About Us - Purpose & IDEA Lab Hub */}
        <AboutUs onWorkTogether={() => scrollToEnquiryForm()} />

        {/* SECTION 11: High-Conversion Split-Screen Enquiry Form */}
        <EnquirySection selectedService={selectedService} />

        {/* SECTION 12: Final Conversion Section */}
        <FinalCTA onStartProject={() => scrollToEnquiryForm()} />
      </main>

      {/* SECTION 13: Minimalist Enterprise Footer */}
      <Footer />
    </div>
  );
}

export default App;
