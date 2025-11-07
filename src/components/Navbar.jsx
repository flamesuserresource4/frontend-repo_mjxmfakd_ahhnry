import React from 'react';
import { Gamepad2, ShoppingCart } from 'lucide-react';

export default function Navbar({ cartCount, onCartClick }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 grid place-items-center text-white">
            <Gamepad2 size={20} />
          </div>
          <span className="font-semibold text-slate-800 text-lg tracking-tight">TopUp Nexus</span>
        </div>
        <button
          onClick={onCartClick}
          className="relative inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition"
          aria-label="Open cart"
        >
          <ShoppingCart size={18} />
          <span>Cart</span>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 h-5 min-w-[1.25rem] px-1 rounded-full bg-rose-500 text-white text-xs grid place-items-center">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
