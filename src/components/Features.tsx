import React from 'react';
import { 
  MessageCircle, 
  BarChart, 
  Calendar, 
  RefreshCw, 
  UserCheck, 
  Fingerprint 
} from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="card hover:shadow-lg group">
      <div className="mb-5 inline-flex p-3 rounded-lg bg-blue-50 text-blue-700 group-hover:bg-blue-700 group-hover:text-white transition-colors duration-200">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Automated Follow-ups",
      description: "Send timely, personalized messages to patients based on their appointment status and history."
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Appointment Reminders",
      description: "Reduce no-shows with automated reminders and easy rescheduling via WhatsApp."
    },
    {
      icon: <UserCheck className="h-6 w-6" />,
      title: "Lead Conversion",
      description: "Convert inquiries into appointments with prompt, engaging follow-up sequences."
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "Performance Analytics",
      description: "Track engagement rates, conversion metrics, and ROI with our intuitive dashboard."
    },
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: "Patient Re-engagement",
      description: "Automatically reach out to inactive patients with personalized care recommendations."
    },
    {
      icon: <Fingerprint className="h-6 w-6" />,
      title: "HIPAA Compliant",
      description: "End-to-end encryption and secure messaging protocols that respect patient privacy."
    }
  ];

  return (
    <section id="features" className="section bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Features Designed for Healthcare Providers</h2>
          <p className="text-xl text-slate-600">
            Our WhatsApp automation platform helps you engage patients at every step of their healthcare journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;