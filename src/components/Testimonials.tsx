import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
  rating: number;
  image: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "ClinicConnect's WhatsApp automation has transformed our patient follow-up process. We've seen a 40% reduction in no-shows and a 25% increase in lead conversion.",
      author: "Dr. Sarah Chen",
      position: "Medical Director",
      company: "Pacific Heights Medical Group",
      rating: 5,
      image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "The ROI has been incredible. Our staff spends less time on phone calls and more time with patients, while our patient satisfaction scores have improved by 35%.",
      author: "Mark Johnson",
      position: "Operations Manager",
      company: "Westside Diagnostic Center",
      rating: 5,
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "The ease of implementation was what sold us. Within days, we had automated flows for appointment reminders, follow-ups, and post-visit care instructions.",
      author: "Dr. Anita Patel",
      position: "Chief Medical Officer",
      company: "Bayside Health Network",
      rating: 4,
      image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="section bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-slate-600">
            Healthcare providers are seeing real results with our WhatsApp automation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-slate-100">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-700 text-white px-8 py-2 rounded-full font-medium">
              Success Story
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <div className="relative w-32 h-32 mx-auto">
                  <div className="absolute inset-0 bg-teal-500 rounded-full opacity-20 blur transform -translate-x-1 translate-y-1"></div>
                  <img 
                    src={currentTestimonial.image} 
                    alt={currentTestimonial.author} 
                    className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-lg relative"
                  />
                </div>
              </div>
              
              <div className="md:w-2/3 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < currentTestimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-300'}`} 
                    />
                  ))}
                </div>
                
                <blockquote className="text-lg italic text-slate-700 mb-6">
                  "{currentTestimonial.quote}"
                </blockquote>
                
                <div>
                  <p className="font-semibold text-slate-900">{currentTestimonial.author}</p>
                  <p className="text-slate-600">{currentTestimonial.position}, {currentTestimonial.company}</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-4">
              <button 
                onClick={goToPrevious}
                className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6 text-slate-700" />
              </button>
              <button 
                onClick={goToNext}
                className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6 text-slate-700" />
              </button>
            </div>
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-700' : 'bg-slate-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;