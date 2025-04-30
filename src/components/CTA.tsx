import React, { useState } from 'react';
import { Send, Check } from 'lucide-react';

const CTA: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    facility: '',
    message: '',
    submitted: false,
    loading: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState(prev => ({ ...prev, loading: true }));
    
    // Simulate API call
    setTimeout(() => {
      setFormState(prev => ({ 
        ...prev, 
        submitted: true,
        loading: false
      }));
    }, 1500);
  };

  return (
    <section id="contact" className="section bg-gradient-to-br from-blue-800 to-blue-900 text-white">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Patient Communications?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Schedule a demo and see how ClinicConnect can help your healthcare facility increase patient engagement and grow your practice.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-700 p-2 rounded-full mr-4">
                    <Check className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Quick Implementation</h3>
                    <p className="text-blue-100">Be up and running in less than a day</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-700 p-2 rounded-full mr-4">
                    <Check className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">ROI Guarantee</h3>
                    <p className="text-blue-100">See measurable results in your first month</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-700 p-2 rounded-full mr-4">
                    <Check className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Expert Support</h3>
                    <p className="text-blue-100">Dedicated team to help you succeed</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white text-slate-800 rounded-xl shadow-xl p-6 md:p-8">
              {formState.submitted ? (
                <div className="text-center py-8">
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                  <p className="text-slate-600 mb-6">
                    We've received your request and will contact you within 24 hours to schedule your personalized demo.
                  </p>
                  <button 
                    onClick={() => setFormState(prev => ({ ...prev, submitted: false }))}
                    className="text-blue-700 font-medium hover:underline"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold mb-6">Schedule Your Demo</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                          Full Name*
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="John Smith"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                          Email Address*
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                          Phone Number*
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="facility" className="block text-sm font-medium text-slate-700 mb-1">
                          Facility Type*
                        </label>
                        <select
                          id="facility"
                          name="facility"
                          value={formState.facility}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                          <option value="">Select Facility Type</option>
                          <option value="clinic">Medical Clinic</option>
                          <option value="hospital">Hospital</option>
                          <option value="dental">Dental Practice</option>
                          <option value="diagnostic">Diagnostic Lab</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                        Message (Optional)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Tell us about your specific needs or questions..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={formState.loading}
                      className={`btn btn-primary w-full flex items-center justify-center ${
                        formState.loading ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                    >
                      {formState.loading ? (
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      ) : (
                        <Send className="h-5 w-5 mr-2" />
                      )}
                      {formState.loading ? 'Submitting...' : 'Request Your Demo'}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;