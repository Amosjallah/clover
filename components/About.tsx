import React from 'react';
import { SectionHeading } from './SectionHeading';
import { CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Who We Are Text */}
          <div className="animate-fade-in-up order-2 lg:order-1">
            <SectionHeading 
              title="Who We Are" 
              subtitle="Clovermade Studio is a multi-disciplinary creative hub built for makers, dreamers, brands, and storytellers."
              centered={false}
            />
            <div className="prose prose-lg prose-invert text-slate-400">
              <p className="mb-6 leading-relaxed">
                From cinematic videos and striking photography to custom graphics and unique apparel, we craft visuals that speak—and style that stands out.
              </p>
              <p className="mb-8 font-medium text-white text-xl border-l-4 border-emerald-500 pl-4 italic">
                Our mission is simple: <br />
                <span className="text-emerald-400">Turn your vision into art, and turn art into something you can wear.</span>
              </p>
              
              <div className="space-y-4 mt-8">
                <h4 className="text-white font-bold text-lg uppercase tracking-wider">Our Core Values</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {['Originality in every pixel', 'Passion meets craft', 'Storytelling first', 'Style that speaks'].map((item, i) => (
                    <li key={i} className="flex items-center text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Visual Collage */}
          <div className="relative order-1 lg:order-2 h-[500px] w-full hidden md:block">
            <div className="absolute top-0 right-0 w-2/3 h-2/3 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl z-10 hover:z-30 transition-all duration-300 hover:scale-105">
                <img src="https://images.unsplash.com/photo-1542626991-cbc4e32524cc?auto=format&fit=crop&q=80&w=800" alt="Creative Meeting" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent flex items-end p-4">
                    <span className="text-white font-bold text-sm uppercase tracking-widest">The Studio</span>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-3/5 h-3/5 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl z-20 hover:z-30 transition-all duration-300 hover:scale-105">
                <img src="https://images.unsplash.com/photo-1558470598-a5dda9640f6b?auto=format&fit=crop&q=80&w=800" alt="Fashion Design" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent flex items-end p-4">
                    <span className="text-white font-bold text-sm uppercase tracking-widest">Fashion</span>
                </div>
            </div>
            <div className="absolute top-10 left-10 w-40 h-40 bg-slate-800 rounded-full border border-emerald-500/30 flex items-center justify-center z-0 animate-pulse-slow">
                <div className="text-center">
                    <span className="block text-3xl font-bold text-emerald-400">100+</span>
                    <span className="text-xs text-slate-400 uppercase">Projects</span>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};