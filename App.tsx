import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Store } from './components/Store';
import { Portfolio } from './components/Portfolio';
import { Booking } from './components/Booking';
import { Contact } from './components/Contact';

function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="bg-slate-950 min-h-screen text-slate-50 selection:bg-emerald-500 selection:text-white">
      <Navbar cartCount={cartCount} />
      <main>
        <Hero />
        <About />
        <Services />
        <Store onAddToCart={handleAddToCart} />
        <Portfolio />
        <Booking />
      </main>
      <Contact />
    </div>
  );
}

export default App;