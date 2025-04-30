import React from 'react';
import { MessageSquareText, Activity, UserCheck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Automate Patient Follow-ups with <span className="text-blue-700">WhatsApp</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Convert more leads, reduce no-shows, and improve patient retention with automated WhatsApp messaging for your healthcare facility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn btn-primary text-lg">
                Schedule a Demo
              </a>
              <a href="#how-it-works" className="btn btn-outline text-lg">
                See How It Works
              </a>
            </div>
            
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-2">
                <UserCheck className="h-5 w-5 text-blue-600" />
                <span className="text-slate-700">Increase conversions</span>
              </div>
              <div className="flex items-center space-x-2">
                <Activity className="h-5 w-5 text-blue-600" />
                <span className="text-slate-700">Reduce no-shows</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageSquareText className="h-5 w-5 text-blue-600" />
                <span className="text-slate-700">Personalized care</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute inset-0 bg-blue-700 rounded-xl opacity-10 blur-xl transform -translate-x-4 translate-y-4"></div>
              <div className="relative bg-white rounded-xl shadow-xl overflow-hidden border border-slate-200">
                <div className="bg-blue-700 text-white p-4">
                  <div className="flex items-center space-x-2">
                    <MessageSquareText className="h-5 w-5" />
                    <span className="font-medium">WhatsApp Business</span>
                  </div>
                </div>
                <div className="p-5 space-y-4">
                  <div className="bg-blue-50 p-3 rounded-lg max-w-[80%]">
                    <p className="text-sm">Hello Sofia, this is City Clinic. This is a reminder for your appointment tomorrow at 2:00 PM with Dr. Johnson. Please reply YES to confirm.</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg max-w-[80%] ml-auto">
                    <p className="text-sm">YES</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg max-w-[80%]">
                    <p className="text-sm">Great! Your appointment is confirmed. Would you like us to send you directions to our clinic?</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg max-w-[80%] ml-auto">
                    <p className="text-sm">Yes, please</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg max-w-[80%]">
                    <p className="text-sm">Here's a link to our location: [map link]. We look forward to seeing you!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;