import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GameGrid from './components/GameGrid';
import TopUpForm from './components/TopUpForm';
import CartDrawer from './components/CartDrawer';

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);
  const [gameName, setGameName] = useState('');

  const handleSelectGame = (id, name) => {
    setSelectedGame(id);
    setGameName(name);
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  const handleAddToCart = (item) => {
    setCart((prev) => [...prev, item]);
    setCartOpen(true);
  };

  const handleRemoveItem = (idx) => {
    setCart((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleCheckout = (total) => {
    alert(`Demo checkout — total: $${total.toFixed(2)}. Integrate payment gateway in backend.`);
    setCart([]);
    setCartOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-violet-50 to-fuchsia-50">
      <Navbar cartCount={cart.length} onCartClick={() => setCartOpen(true)} />
      <Hero />
      <GameGrid onSelect={handleSelectGame} />
      <TopUpForm selectedGame={selectedGame} gameName={gameName} onAddToCart={handleAddToCart} />
      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cart}
        onRemove={handleRemoveItem}
        onCheckout={handleCheckout}
      />
      <footer className="py-10 text-center text-slate-600 text-sm">
        © {new Date().getFullYear()} TopUp Nexus — All rights reserved.
      </footer>
    </div>
  );
}

export default App;
