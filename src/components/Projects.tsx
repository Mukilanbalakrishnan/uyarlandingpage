import React, { useState } from 'react';
import { ExternalLink, Check, Globe } from 'lucide-react';
import showcase1 from '../assets/Uyar Technologies Project Showcase (1).png';
import showcase2 from '../assets/Uyar Technologies Project Showcase (2).png';
import showcase3 from '../assets/Uyar Technologies Project Showcase (3).png';
import { metaPixel } from '../services/metaPixel';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeShowcaseIndex, setActiveShowcaseIndex] = useState<number>(0);

  const showcaseSheets = [
    {
      title: 'Platforms Showcase 01',
      subtitle: 'SK Catering Services & Master Mind Learning Solutions',
      image: showcase1,
    },
    {
      title: 'Platforms Showcase 02',
      subtitle: 'Suknesh Techcenter & OneRoute India Logistics',
      image: showcase2,
    },
    {
      title: 'Platforms Showcase 03',
      subtitle: 'Sri Sai Wire Netting & Community Organization Portals',
      image: showcase3,
    },
  ];

  const projects = [
    {
      id: 'red-angle',
      number: '01',
      title: 'Red Angle Studio',
      category: 'Creative & Media Platform',
      domain: 'redanglestudio.in',
      url: 'https://redanglestudio.in',
      description: 'A professional platform built to present photography services, portfolios, packages, and enquiries with a clean, visual experience.',
      features: ['Portfolio Showcase', 'Booking Integration', 'High-Res Galleries', 'Responsive Design'],
      type: 'web'
    },
    {
      id: 'sk-tech',
      number: '02',
      title: 'SK Technologies',
      category: 'Technical Training Platform',
      domain: 'sktechnologies.online',
      url: 'https://sktechnologies.online',
      description: 'A structured training platform designed to present technical courses, learning programs, and career-focused training information.',
      features: ['Course Management', 'Trainer Profiles', 'Placement Portal', 'Enquiry System'],
      type: 'lms'
    },
    {
      id: 'sk-catering',
      number: '03',
      title: 'SK Catering Services',
      category: 'Catering & Event Services Platform',
      domain: 'skcateringservices.com',
      url: 'https://skcateringservices.com',
      description: 'A professional website developed to showcase catering services, event offerings, and food experiences with a clean and engaging design.',
      features: ['Menu Presentation', 'Event Package Builder', 'Booking Engine', 'Mobile Optimized'],
      type: 'web'
    },
    {
      id: 'master-mind',
      number: '04',
      title: 'Master Mind Learning Solutions',
      category: 'Training & Learning Platform',
      domain: 'mastermindlearningsolution.com',
      url: 'https://mastermindlearningsolution.com',
      description: 'A modern website developed to present training programs, technical courses, and learning solutions with a structured and user-friendly interface.',
      features: ['Curriculum Showcase', 'Lead Generation', 'Student Inquiries', 'Modern UI/UX'],
      type: 'lms'
    },
    {
      id: 'suknesh',
      number: '05',
      title: 'Suknesh Techcenter',
      category: 'Engineering & Technical Training',
      domain: 'sukneshtechcenter.com',
      url: 'https://sukneshtechcenter.com',
      description: 'A professional website developed to showcase engineering services, technical training programs, and consultancy solutions with a clean and structured interface.',
      features: ['Technical Modules', 'Industrial Consultancy', 'Course Registration', 'Fast Loading'],
      type: 'web'
    },
    {
      id: 'oneroute',
      number: '06',
      title: 'OneRoute India',
      category: 'Logistics & Transportation Platform',
      domain: 'onerouteindia.com',
      url: 'https://onerouteindia.com',
      description: 'A modern website developed to present logistics and transportation services, fleet solutions, and business information with a professional and user-friendly design.',
      features: ['Fleet Overview', 'Pan-India Route Coverage', 'Instant Quote Form', 'Corporate Portal'],
      type: 'erp'
    },
    {
      id: 'sri-sai',
      number: '07',
      title: 'Sri Sai Wire Netting',
      category: 'Manufacturing & Industrial Website',
      domain: 'srisaiwirenetting.in',
      url: 'https://www.srisaiwirenetting.in',
      description: 'A professional website developed to showcase manufacturing products, business information, and services with a clean and industry-focused design.',
      features: ['Product Catalog', 'Specification Sheets', 'Wholesale Enquiries', 'Fast Inquiry Sync'],
      type: 'web'
    },
    {
      id: 'tn-shia',
      number: '08',
      title: 'Tamil Nadu Shia Muslim Jamaat',
      category: 'Community Organization Platform',
      domain: 'tamilnadushiamuslimjamaat.in',
      url: 'https://www.tamilnadushiamuslimjamaat.in',
      description: 'A website developed to provide information about the organization, events, announcements, and community services with a simple and user-friendly interface.',
      features: ['Event Updates', 'Announcements Feed', 'Member Directory', 'Accessible UI'],
      type: 'web'
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.type === activeCategory);

  const handleProjectClick = (title: string, url: string) => {
    metaPixel.trackViewContent(title, 'Recent Projects');
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="py-20 sm:py-28 bg-slate-50/50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-purple-700 tracking-widest uppercase bg-purple-50 px-3 py-1 rounded-full border border-purple-100 inline-block mb-3">
              Selected Deliveries
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              Built With Purpose. Delivered With Precision.
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              A glimpse into the digital solutions we've developed for businesses and institutions.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'web', label: 'Web Applications' },
              { id: 'lms', label: 'LMS & Education' },
              { id: 'erp', label: 'Logistics & Systems' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-purple-700 text-white shadow-2xs'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Visual Platform Previews (From Official Delivery Showcases) */}
        <div className="mb-16 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-slate-100 gap-4">
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                Visual Inspection
              </span>
              <h3 className="text-xl font-bold text-slate-900">
                {showcaseSheets[activeShowcaseIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                {showcaseSheets[activeShowcaseIndex].subtitle}
              </p>
            </div>

            <div className="flex items-center gap-2">
              {showcaseSheets.map((sheet, sIdx) => (
                <button
                  key={sIdx}
                  onClick={() => {
                    setActiveShowcaseIndex(sIdx);
                    metaPixel.trackViewContent(sheet.title, 'Showcase Sheet');
                  }}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all cursor-pointer ${
                    activeShowcaseIndex === sIdx
                      ? 'bg-purple-700 text-white font-bold'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  Sheet {sIdx + 1}
                </button>
              ))}
            </div>
          </div>

          {/* High-Resolution Showcase Image Frame */}
          <div className="relative rounded-xl overflow-hidden bg-slate-100 border border-slate-200 flex items-center justify-center">
            <img
              src={showcaseSheets[activeShowcaseIndex].image}
              alt={showcaseSheets[activeShowcaseIndex].title}
              loading="lazy"
              className="w-full max-h-[560px] object-contain sm:object-cover transition-opacity duration-300"
            />
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-7 sm:p-8 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Card Top Row */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-100">
                      {project.number}
                    </span>
                    <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleProjectClick(project.title, project.url)}
                    className="flex items-center gap-1.5 text-xs font-mono font-medium text-purple-700 hover:text-purple-800 transition-colors"
                  >
                    <span>{project.domain}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 group-hover:text-purple-700 transition-colors">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Project Feature Pills */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {project.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700">
                      <div className="w-3.5 h-3.5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                  <Globe className="w-3.5 h-3.5 text-slate-400" />
                  Live Client Deployment
                </span>

                <button
                  onClick={() => handleProjectClick(project.title, project.url)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-purple-700 hover:text-purple-900 group-hover:underline cursor-pointer"
                >
                  <span>View Project Platform</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
