import React from 'react';
import { Smartphone, MessageSquare, LineChart, CheckCircle } from 'lucide-react';

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  isLast?: boolean;
}

const Step: React.FC<StepProps> = ({ number, title, description, icon, isLast = false }) => {
  return (
    <div className="flex">
      <div className="flex flex-col items-center mr-6">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-700 text-white font-bold">
          {number}
        </div>
        {!isLast && (
          <div className="w-0.5 h-full bg-blue-200 mt-4"></div>
        )}
      </div>
      <div className="pt-1 pb-8">
        <div className="flex items-center mb-2">
          <div className="mr-3 text-blue-700">
            {icon}
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-slate-600">
          {description}
        </p>
      </div>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="section bg-slate-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How ClinicConnect Works</h2>
          <p className="text-xl text-slate-600">
            Implementing our WhatsApp automation is simple and takes less than a day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-1">
              <Step
                number={1}
                title="Connect Your WhatsApp Business"
                description="We'll help you set up and connect your WhatsApp Business account to our platform in minutes."
                icon={<Smartphone className="h-6 w-6" />}
              />
              
              <Step
                number={2}
                title="Design Your Automation Flows"
                description="Use our intuitive flow builder to create custom message sequences for appointment reminders, follow-ups, and more."
                icon={<MessageSquare className="h-6 w-6" />}
              />
              
              <Step
                number={3}
                title="Integrate With Your Existing Systems"
                description="Connect with your EHR, practice management system, or CRM to ensure seamless data flow."
                icon={<LineChart className="h-6 w-6" />}
              />
              
              <Step
                number={4}
                title="Launch and Monitor Results"
                description="Go live with your automation and track improvements in patient engagement, conversion rates, and revenue."
                icon={<CheckCircle className="h-6 w-6" />}
                isLast={true}
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute inset-0 bg-teal-500 rounded-xl opacity-10 blur-xl transform translate-x-4 translate-y-4"></div>
              <div className="bg-white rounded-xl shadow-xl p-6 border border-slate-200">
                <h3 className="text-xl font-semibold mb-4">Flow Builder</h3>
                <div className="space-y-4">
                  <div className="border-2 border-blue-200 rounded-lg p-4 bg-blue-50">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Initial Contact</span>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Active</span>
                    </div>
                    <p className="text-sm text-slate-600">
                      Hello {'{patient_name}'}, thank you for inquiring about {'{service_name}'}. Would you like to schedule an appointment?
                    </p>
                  </div>
                  
                  <div className="flex justify-center">
                    <div className="h-8 w-0.5 bg-blue-200"></div>
                  </div>
                  
                  <div className="border-2 border-blue-200 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Response Handling</span>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Conditional</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="border border-slate-200 rounded p-2">
                        <p className="font-medium text-green-700">Yes 👍</p>
                        <p className="text-xs text-slate-600">→ Appointment scheduler</p>
                      </div>
                      <div className="border border-slate-200 rounded p-2">
                        <p className="font-medium text-red-700">No 👎</p>
                        <p className="text-xs text-slate-600">→ Info follow-up</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <div className="h-8 w-0.5 bg-blue-200"></div>
                  </div>
                  
                  <div className="border-2 border-dashed border-blue-200 rounded-lg p-4 bg-white">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Appointment Confirmation</span>
                      <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">Template</span>
                    </div>
                    <p className="text-sm text-slate-600">
                      Great! Your appointment is confirmed for {'{appointment_date}'} at {'{appointment_time}'} with {'{doctor_name}'}.
                    </p>
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

export default HowItWorks;