import React from 'react';
import { SectionHeading } from './SectionHeading';
import { Film, Aperture, PenTool, Lightbulb, Camera, Sliders, Rocket } from 'lucide-react';

const services = [
  {
    icon: <Film className="w-10 h-10 text-emerald-400" />,
    title: "Videography",
    description: "Cinematic storytelling for your most important moments. Clean editing, crisp visuals, and professional production from start to finish.",
    features: [
        "Events", 
        "Music Videos", 
        "Fashion Films", 
        "Brand Promos", 
        "Short Documentaries"
    ]
  },
  {
    icon: <Aperture className="w-10 h-10 text-emerald-400" />,
    title: "Photography",
    description: "High-end photography for every occasion. We capture moments with clarity, emotion, and style.",
    features: [
        "Portraits", 
        "Fashion & Editorial", 
        "Weddings", 
        "Product & Branding", 
        "Creative Concepts"
    ]
  },
  {
    icon: <PenTool className="w-10 h-10 text-emerald-400" />,
    title: "Graphic Design & Art",
    description: "Visuals that elevate your identity. Fresh, modern, artistic designs tailored to your brand’s voice.",
    features: [
        "Logos & Branding", 
        "Posters & Cover Art", 
        "Digital Illustrations", 
        "Social Media Graphics",
        "Merch Design"
    ]
  }
];

const processSteps = [
    { icon: <Lightbulb className="w-6 h-6" />, title: "Concept", desc: "We define your vision." },
    { icon: <Camera className="w-6 h-6" />, title: "Creation", desc: "Shooting & designing." },
    { icon: <Sliders className="w-6 h-6" />, title: "Refinement", desc: "Editing to perfection." },
    { icon: <Rocket className="w-6 h-6" />, title: "Launch", desc: "Ready for the world." },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Our Services" 
          subtitle="From cinematic videos and striking photography to custom graphics, we craft visuals that speak."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 group"
            >
              <div className="bg-slate-950 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-emerald-900/10 group-hover:text-emerald-300 transition-colors shadow-lg shadow-black/20 border border-slate-800">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-slate-400 mb-8 leading-relaxed h-24">
                {service.description}
              </p>
              <div className="space-y-3 border-t border-slate-700/50 pt-6">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center text-slate-300 text-sm group-hover:text-white transition-colors">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3 group-hover:shadow-[0_0_8px_rgba(16,185,129,0.6)] transition-shadow" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-slate-950 rounded-2xl p-8 md:p-12 border border-slate-800">
            <div className="text-center mb-10">
                <h3 className="text-2xl font-bold text-white mb-2">How We Work</h3>
                <p className="text-slate-400">From idea to reality in four simple steps.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                {/* Connector Line (Desktop) */}
                <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-800 z-0"></div>
                
                {processSteps.map((step, idx) => (
                    <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                        <div className="w-24 h-24 bg-slate-900 border-2 border-slate-700 rounded-full flex items-center justify-center mb-4 group-hover:border-emerald-500 group-hover:text-emerald-400 transition-all shadow-xl">
                            {step.icon}
                        </div>
                        <h4 className="text-lg font-bold text-white mb-1">{step.title}</h4>
                        <p className="text-sm text-slate-500">{step.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};