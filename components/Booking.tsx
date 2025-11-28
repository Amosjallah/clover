import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { Button } from './Button';
import { Sparkles, Loader2, Copy } from 'lucide-react';
import { generateCreativeConcept } from '../services/geminiService';
import { CreativeConceptResponse } from '../types';

export const Booking: React.FC = () => {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Photography',
    message: ''
  });

  // AI State
  const [aiPrompt, setAiPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [aiConcept, setAiConcept] = useState<CreativeConceptResponse | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAiBrainstorm = async () => {
    if (!aiPrompt.trim()) return;
    setIsGenerating(true);
    const concept = await generateCreativeConcept(aiPrompt);
    setAiConcept(concept);
    setIsGenerating(false);
  };

  const applyConceptToMessage = () => {
    if (!aiConcept) return;
    const formattedMessage = `
Project Title: ${aiConcept.conceptTitle}

Mood/Vibe: ${aiConcept.moodDescription}

Key Visual Elements:
- ${aiConcept.suggestedElements.join('\n- ')}
    `.trim();

    setFormData(prev => ({ ...prev, message: formattedMessage }));
  };

  return (
    <section id="booking" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-600/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-purple-600/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title="Let's Create Something Together" 
          subtitle="Ready to start your project? Tell us your ideas and we'll bring them to life."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Booking Form */}
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-6">Project Request</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-slate-400 mb-2">Service Interest</label>
                <div className="relative">
                    <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all appearance-none cursor-pointer"
                    >
                    <option>Photography</option>
                    <option>Videography</option>
                    <option>Graphic Design</option>
                    <option>Creative Art Projects</option>
                    <option>Apparel & Merch</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-400">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                    </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Project Details</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  placeholder="Tell us about your vision..."
                ></textarea>
              </div>

              <Button type="button" className="w-full h-12 text-lg">Send Request</Button>
            </form>
          </div>

          {/* AI Assistant */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-emerald-500/30 shadow-xl flex flex-col">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-emerald-500/20 p-2 rounded-lg">
                <Sparkles className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Creative Spark AI</h3>
                <p className="text-sm text-slate-400">Stuck on ideas? Let our AI creative director help.</p>
              </div>
            </div>

            <div className="flex-grow space-y-4">
               <label htmlFor="aiInput" className="block text-sm font-medium text-slate-400">Describe a rough idea (e.g. "Music video in a neon city raining")</label>
               <div className="relative">
                 <textarea
                  id="aiInput"
                  rows={3}
                  value={aiPrompt}
                  onChange={(e) => setAiPrompt(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                  placeholder="Type your rough idea here..."
                 />
                 <Button 
                    size="sm" 
                    onClick={handleAiBrainstorm} 
                    disabled={isGenerating || !aiPrompt}
                    className="absolute bottom-3 right-3 py-1 h-8 text-xs bg-purple-600 hover:bg-purple-700"
                  >
                    {isGenerating ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Brainstorm'}
                  </Button>
               </div>

               {aiConcept && (
                 <div className="mt-6 bg-slate-950 rounded-xl p-5 border border-slate-800 animate-fade-in">
                    <div className="flex justify-between items-start mb-2">
                       <h4 className="text-emerald-400 font-bold text-lg">{aiConcept.conceptTitle}</h4>
                       <button onClick={applyConceptToMessage} className="text-slate-500 hover:text-white transition-colors" title="Use this in form">
                         <Copy className="w-4 h-4" />
                       </button>
                    </div>
                    <p className="text-slate-300 text-sm mb-4 italic leading-relaxed">"{aiConcept.moodDescription}"</p>
                    <div>
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Visual Elements</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {aiConcept.suggestedElements.map((el, idx) => (
                          <span key={idx} className="bg-slate-800 text-slate-300 text-xs px-2 py-1 rounded border border-slate-700">
                            {el}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={applyConceptToMessage}
                      className="mt-4 w-full border-slate-700 hover:bg-slate-800 text-slate-300"
                    >
                      Apply Concept to Form
                    </Button>
                 </div>
               )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};