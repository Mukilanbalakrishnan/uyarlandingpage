import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, 
  AlertCircle, 
  Loader2, 
  Lock, 
  Phone, 
  Mail, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { submitProjectEnquiry, type LeadFormData } from '../services/api';
import { metaPixel } from '../services/metaPixel';

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}

export const EnquirySection: React.FC<{ selectedService?: string }> = ({ selectedService }) => {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    service: selectedService || 'Website Development',
    budget: '₹50,000 – ₹1,00,000',
    message: ''
  });

  useEffect(() => {
    if (selectedService) {
      setFormData(prev => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [serverMessage, setServerMessage] = useState<string | null>(null);

  const serviceOptions = [
    'Website Development',
    'Web Application',
    'Mobile Application',
    'SaaS Application',
    'LMS',
    'ERP',
    'Customized Software',
    'Other'
  ];

  const budgetOptions = [
    'Below ₹25,000',
    '₹25,000 – ₹50,000',
    '₹50,000 – ₹1,00,000',
    '₹1,00,000 – ₹3,00,000',
    'Above ₹3,00,000',
    'Not Sure Yet'
  ];

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Business email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address';
    }

    // Indian phone number validation (10 digits starting with 6,7,8,9, optional +91 prefix)
    const cleanPhone = formData.phone.replace(/[\s-]/g, '');
    const indianPhoneRegex = /^(?:\+91|91|0)?[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!indianPhoneRegex.test(cleanPhone)) {
      newErrors.phone = 'Please provide a valid 10-digit Indian phone number';
    }

    if (!formData.service) {
      newErrors.service = 'Please select what you are looking for';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide brief details about your project';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please write at least 10 characters to describe your requirements';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting || isSubmitted) return;

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setServerMessage(null);

    try {
      const response = await submitProjectEnquiry(formData);

      if (response.success) {
        setIsSubmitted(true);
        setServerMessage(response.message);

        // Fire Meta Pixel Lead event ONLY after success confirmation
        metaPixel.trackLead({
          service: formData.service,
          budget: formData.budget,
          eventId: response.eventId
        });

        // Trigger celebratory confetti
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.6 }
        });
      } else {
        setServerMessage(response.message || 'Submission encountered an error. Please try again.');
      }
    } catch (err) {
      console.error('Lead submission failure:', err);
      setServerMessage('Unable to submit enquiry right now. Please call us directly at +91 79040 75373.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="enquiry-form" className="py-24 sm:py-32 bg-[#FAFAF8] relative scroll-mt-12 border-b border-[#EAEAE6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split-Screen Container */}
        <div className="rounded-3xl overflow-hidden border border-[#EAEAE6] shadow-2xl grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Contrast Panel: Deep Charcoal */}
          <div className="lg:col-span-5 bg-[#171717] text-white p-8 sm:p-12 lg:p-14 flex flex-col justify-between relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#6842C2]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 text-white/90 text-xs font-mono tracking-widest uppercase mb-6 backdrop-blur-sm border border-white/10">
                <Sparkles className="w-3.5 h-3.5 text-[#EEE8FA]" />
                <span>START A CONVERSATION</span>
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] mb-6">
                Let's Build Something<br />
                <span className="text-[#EEE8FA]">Exceptional.</span>
              </h2>

              <p className="text-sm sm:text-base text-white/70 leading-relaxed font-normal mb-10">
                Have a business idea or need a powerful digital solution? Tell us what you're planning. Our team is ready to explore the possibilities with you.
              </p>

              {/* 3 Explicit Benefits */}
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-[#6842C2]/40 text-[#EEE8FA] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-0.5">
                      Solutions tailored to your business.
                    </h4>
                    <p className="text-xs text-white/60 leading-relaxed">
                      Custom software built to mirror your operations without restrictive templates.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-[#6842C2]/40 text-[#EEE8FA] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-0.5">
                      Clear project planning.
                    </h4>
                    <p className="text-xs text-white/60 leading-relaxed">
                      Structured milestone roadmaps, architectural reviews, and transparent timelines.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-[#6842C2]/40 text-[#EEE8FA] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-0.5">
                      Dedicated development support.
                    </h4>
                    <p className="text-xs text-white/60 leading-relaxed">
                      Direct access to engineering leads throughout creation, deployment, and expansion.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Contact Footer in Left Panel */}
            <div className="relative z-10 pt-6 border-t border-white/10 space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-white/40 block mb-2">
                Fast Response Line
              </span>
              <a
                href="tel:+917904075373"
                className="flex items-center gap-2.5 text-xs font-semibold text-white/90 hover:text-[#EEE8FA] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#6842C2]" />
                <span>+91 79040 75373 (Mon - Sat)</span>
              </a>
              <a
                href="mailto:uyartechnologies26@gmail.com"
                className="flex items-center gap-2.5 text-xs font-semibold text-white/90 hover:text-[#EEE8FA] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#6842C2]" />
                <span>uyartechnologies26@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Right Panel: Clean White Form Container */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 lg:p-14 flex flex-col justify-center">
            
            {isSubmitted ? (
              <div className="py-12 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#EEE8FA] text-[#6842C2] flex items-center justify-center mb-5 animate-bounce">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#171717] mb-2 tracking-tight">
                  Enquiry Received Successfully!
                </h3>
                <p className="text-[#171717]/70 max-w-md mx-auto mb-6 text-sm leading-relaxed">
                  {serverMessage || 'Thank you for contacting Uyar Technologies. A Senior Solutions Consultant will review your technical specifications and connect with you within 24 hours.'}
                </p>

                <div className="p-5 bg-[#FAFAF8] rounded-2xl border border-[#EAEAE6] text-left text-xs text-[#171717]/80 max-w-sm w-full mb-8 space-y-2">
                  <div><strong className="text-[#171717]">Client:</strong> {formData.fullName}</div>
                  <div><strong className="text-[#171717]">Service:</strong> {formData.service}</div>
                  <div><strong className="text-[#171717]">Phone:</strong> {formData.phone}</div>
                  <div><strong className="text-[#171717]">Email:</strong> {formData.email}</div>
                </div>

                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      fullName: '',
                      email: '',
                      phone: '',
                      companyName: '',
                      service: 'Website Development',
                      budget: '₹50,00,000 – ₹1,00,000',
                      message: ''
                    });
                  }}
                  className="text-xs font-bold text-[#6842C2] hover:underline cursor-pointer"
                >
                  Submit another project enquiry →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                
                <div className="mb-8">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#171717] tracking-tight mb-2">
                    Tell Us About Your Project.
                  </h3>
                  <p className="text-xs sm:text-sm text-[#171717]/60">
                    Provide your requirements below and receive an architectural estimate.
                  </p>
                </div>

                {serverMessage && (
                  <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 flex items-center gap-2.5 text-xs text-red-700">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{serverMessage}</span>
                  </div>
                )}

                <div className="space-y-5">
                  
                  {/* Row 1: Full Name & Email Address */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-bold text-[#171717] mb-1.5 uppercase tracking-wide">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Ramesh Kumar"
                        autoComplete="name"
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-[#171717] bg-[#FAFAF8] placeholder-[#171717]/30 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                          errors.fullName 
                            ? 'border-red-400 focus:ring-red-100' 
                            : 'border-[#EAEAE6] focus:border-[#6842C2] focus:ring-[#EEE8FA]'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-xs text-red-600 font-medium">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-[#171717] mb-1.5 uppercase tracking-wide">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="ramesh@company.com"
                        autoComplete="email"
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-[#171717] bg-[#FAFAF8] placeholder-[#171717]/30 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                          errors.email 
                            ? 'border-red-400 focus:ring-red-100' 
                            : 'border-[#EAEAE6] focus:border-[#6842C2] focus:ring-[#EEE8FA]'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-600 font-medium">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Phone Number & Company Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-[#171717] mb-1.5 uppercase tracking-wide">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 98765 43210"
                        autoComplete="tel"
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-[#171717] bg-[#FAFAF8] placeholder-[#171717]/30 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                          errors.phone 
                            ? 'border-red-400 focus:ring-red-100' 
                            : 'border-[#EAEAE6] focus:border-[#6842C2] focus:ring-[#EEE8FA]'
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-600 font-medium">{errors.phone}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="companyName" className="block text-xs font-bold text-[#171717] mb-1.5 uppercase tracking-wide">
                        Company Name <span className="text-[#171717]/40 font-normal lowercase">(optional)</span>
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="e.g. Apex Enterprises"
                        autoComplete="organization"
                        className="w-full px-4 py-3 rounded-xl border border-[#EAEAE6] text-sm text-[#171717] bg-[#FAFAF8] placeholder-[#171717]/30 focus:bg-white focus:outline-none focus:border-[#6842C2] focus:ring-2 focus:ring-[#EEE8FA] transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 3: Service Selection & Estimated Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="service" className="block text-xs font-bold text-[#171717] mb-1.5 uppercase tracking-wide">
                        What Are You Looking For? <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-[#EAEAE6] text-sm text-[#171717] bg-[#FAFAF8] focus:bg-white focus:outline-none focus:border-[#6842C2] focus:ring-2 focus:ring-[#EEE8FA] transition-all cursor-pointer font-medium"
                      >
                        {serviceOptions.map((opt, i) => (
                          <option key={i} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      {errors.service && (
                        <p className="mt-1 text-xs text-red-600 font-medium">{errors.service}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-xs font-bold text-[#171717] mb-1.5 uppercase tracking-wide">
                        Estimated Project Budget <span className="text-[#171717]/40 font-normal lowercase">(optional)</span>
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-[#EAEAE6] text-sm text-[#171717] bg-[#FAFAF8] focus:bg-white focus:outline-none focus:border-[#6842C2] focus:ring-2 focus:ring-[#EEE8FA] transition-all cursor-pointer font-medium"
                      >
                        {budgetOptions.map((opt, i) => (
                          <option key={i} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 4: Project Description Textarea */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-[#171717] mb-1.5 uppercase tracking-wide">
                      Tell Us About Your Project <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Briefly describe what you want to build, key features, and your expected completion timeline..."
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-[#171717] bg-[#FAFAF8] placeholder-[#171717]/30 focus:bg-white focus:outline-none focus:ring-2 transition-all resize-y ${
                        errors.message 
                          ? 'border-red-400 focus:ring-red-100' 
                          : 'border-[#EAEAE6] focus:border-[#6842C2] focus:ring-[#EEE8FA]'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-600 font-medium">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-full bg-[#6842C2] hover:bg-[#522F9E] disabled:bg-[#EAEAE6] disabled:text-[#171717]/40 disabled:cursor-not-allowed text-white font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-all active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Submitting Your Project Specs...</span>
                      </>
                    ) : (
                      <>
                        <span>Let's Discuss My Project →</span>
                      </>
                    )}
                  </button>

                  {/* Privacy Assurance */}
                  <div className="flex items-center justify-center gap-2 text-[#171717]/40 text-xs pt-1">
                    <Lock className="w-3.5 h-3.5" />
                    <span>Protected under Mutual NDA. No spam guarantee.</span>
                  </div>

                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
