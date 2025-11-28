import React, { useState, useEffect } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from './Button';

const slides = [
  {
    // Camera
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1920",
    alt: "Professional Camera Equipment"
  },
  {
    // Studio
    image: "https://images.unsplash.com/photo-1590935217281-8f102120d683?auto=format&fit=crop&q=80&w=1920",
    alt: "Creative Photo Studio"
  },
  {
    // Shirt / Fashion
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=1920",
    alt: "Custom Apparel"
  }
];

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background Slideshow */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={slide.image} 
            alt={slide.alt} 
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/70 to-slate-900/40" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block animate-fade-in-up">
            <span className="py-1 px-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold tracking-wide uppercase mb-6 inline-block backdrop-blur-sm">
                Est. 2024
            </span>
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tighter drop-shadow-lg">
          Create. Capture. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200 serif italic">
            Wear the Art.
          </span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-200 mb-10 font-light drop-shadow-md">
          Where visual storytelling meets original style. Clovermade Studio blends photography, videography, and design with a bold clothing line.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#booking">
            <Button size="lg" className="group shadow-xl shadow-emerald-900/30">
              Book a Session 
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
          <a href="#store">
            <Button variant="secondary" size="lg" className="group bg-slate-800/80 backdrop-blur-sm hover:bg-slate-700/90 border border-slate-700">
              Shop Collection
              <Play className="ml-2 w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
            </Button>
          </a>
        </div>
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-emerald-500 w-8' : 'bg-white/30 hover:bg-white/60 w-4'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};