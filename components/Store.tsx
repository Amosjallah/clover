import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { Button } from './Button';
import { ShoppingCart, Eye, X, Filter, Flame } from 'lucide-react';
import { Product } from '../types';

const products: Product[] = [
  {
    id: 1,
    name: "Clovermade Essential Tee",
    category: "T-Shirts",
    price: 35.00,
    image: "https://picsum.photos/400/500?random=1"
  },
  {
    id: 2,
    name: "Studio Snapback",
    category: "Caps",
    price: 28.00,
    image: "https://picsum.photos/400/500?random=2"
  },
  {
    id: 3,
    name: "Creator Cargo Pants",
    category: "Pants",
    price: 85.00,
    image: "https://picsum.photos/400/500?random=3"
  },
  {
    id: 4,
    name: "Neon Drop Hoodie #001",
    category: "Limited Edition",
    price: 120.00,
    image: "https://picsum.photos/400/500?random=4"
  },
  {
    id: 5,
    name: "Oversized Graphic Tee",
    category: "T-Shirts",
    price: 45.00,
    image: "https://picsum.photos/400/500?random=5"
  },
  {
    id: 6,
    name: "Artist Collab Jacket",
    category: "Limited Edition",
    price: 150.00,
    image: "https://picsum.photos/400/500?random=6"
  }
];

interface StoreProps {
  onAddToCart?: () => void;
}

export const Store: React.FC<StoreProps> = ({ onAddToCart }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onAddToCart) onAddToCart();
  };

  return (
    <section id="store" className="py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Wear Creativity" 
          subtitle="Premium materials. Unique designs. Made for creators. Style that speaks—crafted by the same team that creates your visuals."
        />

        {/* Featured Drop Banner */}
        <div className="mb-16 relative rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 shadow-2xl group">
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10"></div>
            <img 
                src="https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80&w=1600" 
                alt="New Drop" 
                className="w-full h-64 md:h-80 object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 z-20 flex flex-col justify-center px-8 md:px-16">
                <span className="inline-flex items-center text-emerald-400 font-bold tracking-widest uppercase text-sm mb-2">
                    <Flame className="w-4 h-4 mr-2" />
                    New Arrival
                </span>
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 max-w-lg leading-tight">
                    The Midnight Series
                </h3>
                <p className="text-slate-300 max-w-md mb-8">
                    Limited edition streetwear inspired by urban nightscapes. Reflective materials, oversized fits, and bold graphics.
                </p>
                <Button onClick={() => setActiveCategory('Limited Edition')} className="w-fit">
                    Shop the Drop
                </Button>
            </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 sticky top-20 z-30 bg-slate-900/95 backdrop-blur py-4 -mx-4 px-4 border-y border-slate-800 md:static md:bg-transparent md:border-none md:p-0 md:m-0">
            <div className="flex items-center space-x-2 bg-slate-950 p-1.5 rounded-lg border border-slate-800 overflow-x-auto max-w-full hide-scrollbar">
                {['All', 'T-Shirts', 'Caps', 'Pants', 'Limited Edition'].map((cat) => (
                    <button 
                        key={cat} 
                        onClick={() => setActiveCategory(cat)}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-all whitespace-nowrap ${
                            activeCategory === cat 
                            ? 'bg-emerald-600 text-white shadow-lg' 
                            : 'text-slate-400 hover:text-white hover:bg-slate-800'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
            <div className="text-slate-500 text-sm font-medium flex items-center">
                <Filter className="w-4 h-4 mr-2" />
                {filteredProducts.length} Products
            </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="group bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-emerald-900/20 transition-all duration-300 cursor-pointer border border-slate-700/50 hover:border-emerald-500/30 flex flex-col h-full"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="relative overflow-hidden aspect-[4/5]">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {product.category === 'Limited Edition' && (
                    <div className="absolute top-3 left-3">
                        <span className="bg-black/70 text-emerald-400 text-[10px] font-bold px-3 py-1 rounded border border-emerald-500/30 backdrop-blur-sm uppercase tracking-wider">
                            Limited
                        </span>
                    </div>
                )}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-[2px]">
                  <Button size="sm" variant="primary" onClick={handleAddToCart} className="shadow-xl">
                    Add to Cart
                  </Button>
                  <Button size="sm" variant="secondary" onClick={(e) => { e.stopPropagation(); setSelectedProduct(product); }} className="bg-white text-slate-900 hover:bg-slate-200">
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <p className="text-slate-500 text-xs font-bold uppercase tracking-wide mb-1">{product.category}</p>
                <h3 className="text-white font-medium text-lg mb-2 truncate group-hover:text-emerald-400 transition-colors">{product.name}</h3>
                <div className="flex justify-between items-center mt-auto pt-4 border-t border-slate-700/50">
                  <span className="text-white font-bold text-lg">${product.price.toFixed(2)}</span>
                  <button 
                    onClick={handleAddToCart}
                    className="p-2 rounded-full bg-slate-700/50 text-slate-300 hover:bg-emerald-500 hover:text-white transition-all transform active:scale-95"
                  >
                    <ShoppingCart className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button variant="outline" size="lg">Shop Full Collection</Button>
        </div>
      </div>

      {/* Product Quick View Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in" onClick={() => setSelectedProduct(null)}>
            <div 
                className="bg-slate-900 rounded-2xl max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden border border-slate-700 relative shadow-2xl"
                onClick={e => e.stopPropagation()}
            >
                <button 
                    onClick={() => setSelectedProduct(null)}
                    className="absolute top-4 right-4 z-10 text-white bg-black/30 hover:bg-black/60 p-2 rounded-full transition-colors backdrop-blur-sm"
                >
                    <X className="w-5 h-5" />
                </button>
                <div className="h-[300px] md:h-auto relative">
                    <img 
                        src={selectedProduct.image} 
                        alt={selectedProduct.name} 
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>
                <div className="p-8 flex flex-col justify-center bg-slate-900">
                    <div className="mb-auto">
                        <span className="inline-block py-1 px-2 rounded bg-emerald-500/10 text-emerald-500 font-bold tracking-wider uppercase text-xs mb-3 border border-emerald-500/20">
                            {selectedProduct.category}
                        </span>
                        <h2 className="text-3xl font-bold text-white mb-4 leading-tight">{selectedProduct.name}</h2>
                        <div className="text-2xl font-bold text-emerald-400 mb-6">${selectedProduct.price.toFixed(2)}</div>
                        <p className="text-slate-400 mb-8 leading-relaxed text-sm">
                            Designed in-house by our artists. Made with premium heavyweight cotton for a structured yet comfortable fit. Perfect for creators on the move.
                            <br /><br />
                            Includes exclusive Clovermade sticker pack.
                        </p>
                    </div>
                    
                    <div className="space-y-4">
                        <Button size="lg" className="w-full justify-between group" onClick={(e) => { handleAddToCart(e); setSelectedProduct(null); }}>
                            <span>Add to Cart</span>
                            <span className="bg-black/10 px-2 py-0.5 rounded text-sm">${selectedProduct.price.toFixed(2)}</span>
                        </Button>
                        <p className="text-center text-xs text-slate-500 uppercase tracking-widest pt-2">Free Shipping on orders over $100</p>
                    </div>
                </div>
            </div>
        </div>
      )}
    </section>
  );
};