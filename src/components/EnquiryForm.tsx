import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle, 
  AlertCircle, 
  Loader2, 
  Lock, 
  Phone,
  Mail,
  CheckCircle2
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

export const EnquiryForm: React.FC<{ selectedService?: string }> = ({ selectedService }) => {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    service: selectedService || 'Custom Website Development',
    budget: '₹50,00,000 – ₹1,00,000',
    message: ''
  });

  React.useEffect(() => {
    if (selectedService) {
      setFormData(prev => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [serverMessage, setServerMessage] = useState<string | null>(null);

  const servicesList = [
    'Custom Website Development',
    'Web Application Development',
    'Mobile App Development',
    'SaaS Application',
    'LMS Development',
    'ERP Development',
    'Customized Software',
    'Other'
  ];

  const budgetOptions = [
    'Below ₹25,000',
    '₹25,000 – ₹50,000',
    '₹50,000 – ₹1,00,000',
    '₹1,00,000 – ₹3,00,000',
    'Above ₹3,00,000',
    'Not Decided Yet'
  ];

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Business email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    const cleanPhone = formData.phone.replace(/[\s-]/g, '');
    const indianPhoneRegex = /^(?:\+91|91|0)?[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!indianPhoneRegex.test(cleanPhone)) {
      newErrors.phone = 'Please enter a valid 10-digit Indian phone number (e.g. 9876543210)';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide brief details about your project';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please enter at least 10 characters describing your requirement';
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
    } catch (err: any) {
      console.error('Lead submission failure:', err);
      setServerMessage('Unable to submit enquiry right now. Please call us directly at +91 79040 75373.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="enquiry-form" className="py-20 sm:py-28 bg-slate-50/70 border-b border-slate-200/80 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column - Pitch & Value Consultation */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-purple-700 tracking-widest uppercase bg-purple-50 px-3 py-1 rounded-full border border-purple-100 inline-block mb-4">
                Get In Touch
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                Have a Project in Mind?
              </h2>

              <p className="text-base text-slate-600 leading-relaxed mb-8">
                Tell us what you're planning. Let's explore how we can turn your idea into a powerful digital solution.
              </p>

              {/* Consultation Perks */}
              <div className="space-y-5 mb-10">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-purple-100/70 text-purple-700 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-0.5">
                      Project Consultation
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Discuss your software architecture, feature priorities, and tech feasibility with engineering leads.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-purple-100/70 text-purple-700 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-0.5">
                      Custom Development
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      No cookie-cutter templates. We write clean, bespoke code designed for your unique operational workflow.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-purple-100/70 text-purple-700 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-0.5">
                      Business-Focused Solutions
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Every feature is built with commercial goals in mind: conversion rate, reliability, and smooth user adoption.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Card */}
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">
                Direct Contact
              </span>
              <div className="space-y-2.5">
                <a
                  href="tel:+917904075373"
                  className="flex items-center gap-2.5 text-sm font-semibold text-slate-800 hover:text-purple-700 transition-colors"
                >
                  <Phone className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>+91 79040 75373</span>
                </a>
                <a
                  href="mailto:uyartechnologies26@gmail.com"
                  className="flex items-center gap-2.5 text-sm font-semibold text-slate-800 hover:text-purple-700 transition-colors"
                >
                  <Mail className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>uyartechnologies26@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - The Lead Generation Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xl p-6 sm:p-10 relative">
              
              {isSubmitted ? (
                /* Success State */
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-5 animate-bounce">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Enquiry Received Successfully!
                  </h3>
                  <p className="text-slate-600 max-w-md mx-auto mb-6 text-sm leading-relaxed">
                    {serverMessage || 'Thank you for reaching out. A Senior Solutions Consultant from Uyar Technologies will review your requirements and connect with you within 24 hours.'}
                  </p>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-left text-xs text-slate-600 max-w-sm w-full mb-6 space-y-1.5">
                    <div><strong className="text-slate-800">Client:</strong> {formData.fullName}</div>
                    <div><strong className="text-slate-800">Service:</strong> {formData.service}</div>
                    <div><strong className="text-slate-800">Contact:</strong> {formData.phone} / {formData.email}</div>
                  </div>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        companyName: '',
                        service: 'Custom Website Development',
                        budget: '₹50,000 – ₹1,00,000',
                        message: ''
                      });
                    }}
                    className="text-xs font-semibold text-purple-700 hover:underline cursor-pointer"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                /* The Interactive Form */
                <form onSubmit={handleSubmit} noValidate>
                  
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-1">
                      Let's Discuss Your Project
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500">
                      Fill out the form below and we'll prepare a tailored proposal for your business.
                    </p>
                  </div>

                  {serverMessage && (
                    <div className="mb-6 p-3.5 rounded-lg bg-red-50 border border-red-200 flex items-center gap-2.5 text-xs text-red-700">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{serverMessage}</span>
                    </div>
                  )}

                  <div className="space-y-5">
                    
                    {/* Row 1: Name and Business Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="fullName" className="block text-xs font-semibold text-slate-800 mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="e.g. Rajesh Kumar"
                          autoComplete="name"
                          className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                            errors.fullName 
                              ? 'border-red-400 focus:ring-red-200' 
                              : 'border-slate-200 focus:border-purple-600 focus:ring-purple-100'
                          }`}
                        />
                        {errors.fullName && (
                          <p className="mt-1 text-xs text-red-600 font-medium">{errors.fullName}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-xs font-semibold text-slate-800 mb-1.5">
                          Business Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="name@company.com"
                          autoComplete="email"
                          className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                            errors.email 
                              ? 'border-red-400 focus:ring-red-200' 
                              : 'border-slate-200 focus:border-purple-600 focus:ring-purple-100'
                          }`}
                        />
                        {errors.email && (
                          <p className="mt-1 text-xs text-red-600 font-medium">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    {/* Row 2: Phone Number and Company Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-xs font-semibold text-slate-800 mb-1.5">
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
                          className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                            errors.phone 
                              ? 'border-red-400 focus:ring-red-200' 
                              : 'border-slate-200 focus:border-purple-600 focus:ring-purple-100'
                          }`}
                        />
                        {errors.phone && (
                          <p className="mt-1 text-xs text-red-600 font-medium">{errors.phone}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="companyName" className="block text-xs font-semibold text-slate-800 mb-1.5">
                          Company / Business Name <span className="text-slate-400 font-normal">(Optional)</span>
                        </label>
                        <input
                          type="text"
                          id="companyName"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
                          placeholder="e.g. Apex Enterprises"
                          autoComplete="organization"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-100 transition-all"
                        />
                      </div>
                    </div>

                    {/* Row 3: Service Required and Estimated Budget */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="service" className="block text-xs font-semibold text-slate-800 mb-1.5">
                          Service Required <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 bg-white focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-100 transition-all cursor-pointer"
                        >
                          {servicesList.map((srv, idx) => (
                            <option key={idx} value={srv}>
                              {srv}
                            </option>
                          ))}
                        </select>
                        {errors.service && (
                          <p className="mt-1 text-xs text-red-600 font-medium">{errors.service}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="budget" className="block text-xs font-semibold text-slate-800 mb-1.5">
                          Estimated Budget <span className="text-slate-400 font-normal">(Optional)</span>
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 bg-white focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-100 transition-all cursor-pointer"
                        >
                          {budgetOptions.map((opt, idx) => (
                            <option key={idx} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Row 4: Project Description */}
                    <div>
                      <label htmlFor="message" className="block text-xs font-semibold text-slate-800 mb-1.5">
                        Project Description / Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us what you want to build, key features, and your target timeline..."
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all resize-y ${
                          errors.message 
                            ? 'border-red-400 focus:ring-red-200' 
                            : 'border-slate-200 focus:border-purple-600 focus:ring-purple-100'
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
                      className="w-full py-3.5 px-6 rounded-xl bg-purple-700 hover:bg-purple-800 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-bold text-base shadow-sm hover:shadow-md transition-all active:translate-y-px flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Submitting Project Enquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Project Enquiry</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    {/* Privacy and Trust Assurance */}
                    <div className="flex items-center justify-center gap-2 text-slate-400 text-xs pt-1">
                      <Lock className="w-3.5 h-3.5 text-slate-400" />
                      <span>Your information is strictly protected under NDA. No spam guarantee.</span>
                    </div>

                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
