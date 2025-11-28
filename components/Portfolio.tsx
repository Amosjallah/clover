import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { PortfolioItem } from '../types';
import { X, ZoomIn, ExternalLink } from 'lucide-react';

const items: (PortfolioItem & { client?: string })[] = [
  { id: 1, title: "Neon Nights", category: "Photo", image: "https://picsum.photos/800/600?random=10", description: "Urban night photography series capturing the pulse of the city.", client: "City Mag" },
  { id: 2, title: "Echoes of Nature", category: "Video", image: "https://picsum.photos/800/600?random=11", description: "Documentary short film exploring ancient forests.", client: "NatGeo Local" },
  { id: 3, title: "Vortex Brand Identity", category: "Design", image: "https://picsum.photos/800/600?random=12", description: "Full rebranding package for a tech startup.", client: "Vortex Systems" },
  { id: 4, title: "Silent Fashion", category: "Photo", image: "https://picsum.photos/800/600?random=13", description: "Editorial fashion shoot focusing on minimalism.", client: "Vogue Italia (Sub)" },
  { id: 5, title: "Abstract Album Art", category: "Design", image: "https://picsum.photos/800/600?random=14", description: "Cover art and vinyl package for an indie rock band.", client: "The Echoes" },
  { id: 6, title: "City Motion", category: "Video", image: "https://picsum.photos/800/600?random=15", description: "Timelapse project visualizing traffic patterns.", client: "Metro Dept" },
  { id: 7, title: "Street Art Festival", category: "Collaborations", image: "https://picsum.photos/800/600?random=16", description: "Mural project and live event coverage with local street artists.", client: "Arts Council" },
];

const categories = ['All', 'Video', 'Photo', 'Design', 'Collaborations'];

export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem & { client?: string } | null>(null);

  const filteredItems = activeCategory === 'All' 
    ? items 
    : items.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Our Work" 
          subtitle="A showcase of our best films, photographs, graphics, and artistic collaborations."
        />

        <div className="flex justify-center space-x-2 md:space-x-4 mb-12 flex-wrap gap-y-3">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat 
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/20 transform scale-105' 
                  : 'bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-white border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filteredItems.map((item) => (
            <div 
                key={item.id} 
                className="group relative overflow-hidden rounded-xl aspect-video cursor-pointer bg-slate-900 border border-slate-800"
                onClick={() => setSelectedItem(item)}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    {item.category}
                </span>
                <h3 className="text-white text-xl font-bold leading-tight">{item.title}</h3>
                <div className="flex items-center mt-3 text-slate-300 text-sm">
                    <p className="truncate flex-1">{item.description}</p>
                    <ZoomIn className="w-5 h-5 ml-2 text-emerald-500" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Ticker */}
        <div className="border-t border-slate-800 pt-16 text-center">
            <h4 className="text-sm font-bold text-slate-600 uppercase tracking-widest mb-8">Trusted By</h4>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                {['Vogue Italia', 'Red Bull Arts', 'Sony Music', 'Vice Media', 'Hypebeast'].map((client) => (
                    <span key={client} className="text-xl md:text-2xl font-serif font-bold text-slate-400 hover:text-white transition-colors cursor-default">
                        {client}
                    </span>
                ))}
            </div>
        </div>
        
        <div className="mt-12 text-center">
            <button className="px-8 py-3 rounded-full border border-slate-700 text-slate-400 hover:text-white hover:border-emerald-500 hover:bg-emerald-500/10 transition-all uppercase text-sm font-bold tracking-widest">
                View Full Gallery
            </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-fade-in" onClick={() => setSelectedItem(null)}>
            <div className="relative max-w-6xl w-full bg-slate-900 rounded-lg overflow-hidden border border-slate-800 shadow-2xl flex flex-col md:flex-row max-h-[90vh]" onClick={e => e.stopPropagation()}>
                
                <button 
                    onClick={() => setSelectedItem(null)}
                    className="absolute top-4 right-4 z-20 text-white bg-black/50 hover:bg-emerald-600 p-2 rounded-full transition-colors backdrop-blur-sm"
                >
                    <X className="w-6 h-6" />
                </button>

                {/* Image Container */}
                <div className="w-full md:w-3/4 bg-black flex items-center justify-center relative group">
                    <img 
                        src={selectedItem.image} 
                        alt={selectedItem.title} 
                        className="max-h-[50vh] md:max-h-[90vh] w-full object-contain"
                    />
                </div>

                {/* Sidebar Info */}
                <div className="w-full md:w-1/4 p-8 bg-slate-900 border-l border-slate-800 flex flex-col overflow-y-auto">
                    <div className="mb-6">
                        <span className="text-emerald-500 font-bold uppercase tracking-widest text-xs border border-emerald-500/30 px-2 py-1 rounded bg-emerald-500/10">
                            {selectedItem.category}
                        </span>
                    </div>
                    
                    <h2 className="text-3xl font-bold text-white mb-6 leading-tight">{selectedItem.title}</h2>
                    
                    <div className="space-y-6 flex-grow">
                        <div>
                            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Description</h4>
                            <p className="text-slate-300 text-sm leading-relaxed">{selectedItem.description}</p>
                        </div>
                        
                        {selectedItem.client && (
                            <div>
                                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Client</h4>
                                <p className="text-white text-sm">{selectedItem.client}</p>
                            </div>
                        )}
                        
                        <div>
                             <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Tools Used</h4>
                             <div className="flex flex-wrap gap-2">
                                 {['Adobe Suite', 'Sony Alpha', 'Cinema 4D'].map(tag => (
                                     <span key={tag} className="text-[10px] bg-slate-800 text-slate-400 px-2 py-1 rounded">
                                         {tag}
                                     </span>
                                 ))}
                             </div>
                        </div>
                    </div>

                    <div className="pt-8 mt-auto">
                        <button className="w-full py-3 bg-slate-800 hover:bg-emerald-600 text-white rounded-lg transition-colors flex items-center justify-center font-medium">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Project Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
      )}
    </section>
  );
};