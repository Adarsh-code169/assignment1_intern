import React, { useState } from 'react';
import { Check, HelpCircle } from 'lucide-react';

interface Plan {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  ctaText: string;
}

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  
  const plans: Plan[] = [
    {
      name: "Starter",
      price: billingCycle === 'monthly' ? "$99" : "$79",
      description: "Perfect for small clinics with up to 200 patients per month",
      features: [
        "Up to 1,000 WhatsApp messages/month",
        "3 automated flows",
        "Appointment reminders",
        "Basic analytics",
        "Email support",
        "1 staff user"
      ],
      ctaText: "Start 14-day Trial"
    },
    {
      name: "Professional",
      price: billingCycle === 'monthly' ? "$249" : "$199",
      description: "For growing practices with up to 500 patients per month",
      features: [
        "Up to 5,000 WhatsApp messages/month",
        "10 automated flows",
        "Advanced scheduling",
        "Performance dashboard",
        "Priority support",
        "5 staff users",
        "EHR/CRM integration"
      ],
      highlighted: true,
      ctaText: "Get Started"
    },
    {
      name: "Enterprise",
      price: billingCycle === 'monthly' ? "$499" : "$399",
      description: "For multi-location practices and hospitals",
      features: [
        "Unlimited WhatsApp messages",
        "Unlimited automated flows",
        "Custom integrations",
        "Advanced analytics & reporting",
        "Dedicated account manager",
        "Unlimited staff users",
        "HIPAA compliance",
        "API access"
      ],
      ctaText: "Contact Sales"
    }
  ];

  return (
    <section id="pricing" className="section bg-slate-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-slate-600 mb-8">
            Choose the plan that's right for your healthcare facility.
          </p>
          
          <div className="flex items-center justify-center">
            <div className="bg-white p-1 rounded-full shadow-sm inline-flex">
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium ${
                  billingCycle === 'monthly' 
                    ? 'bg-blue-700 text-white' 
                    : 'text-slate-700'
                }`}
                onClick={() => setBillingCycle('monthly')}
              >
                Monthly
              </button>
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium ${
                  billingCycle === 'yearly' 
                    ? 'bg-blue-700 text-white' 
                    : 'text-slate-700'
                }`}
                onClick={() => setBillingCycle('yearly')}
              >
                Yearly
                <span className="ml-1 text-xs font-normal bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative card hover:translate-y-[-8px] ${
                plan.highlighted 
                  ? 'border-2 border-blue-500 shadow-lg' 
                  : 'border border-slate-200'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-700 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-slate-600">/{billingCycle === 'monthly' ? 'month' : 'month, billed annually'}</span>
              </div>
              <p className="text-slate-600 mb-6">{plan.description}</p>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="#contact" 
                className={`btn w-full ${
                  plan.highlighted 
                    ? 'btn-primary' 
                    : 'btn-outline'
                }`}
              >
                {plan.ctaText}
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-white rounded-xl p-6 shadow-md border border-slate-100 max-w-3xl mx-auto">
          <div className="flex items-start">
            <HelpCircle className="h-6 w-6 text-blue-700 mr-3 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold mb-2">Not sure which plan is right for you?</h3>
              <p className="text-slate-600 mb-4">
                We'll help you find the perfect plan for your healthcare facility's needs. Our team can provide a personalized demo and recommendation.
              </p>
              <a href="#contact" className="text-blue-700 font-medium hover:underline">
                Schedule a consultation →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;