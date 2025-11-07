import React from 'react';
import { Controller, Flame, Crown, Sword } from 'lucide-react';

const games = [
  {
    id: 'mlbb',
    name: 'Mobile Legends',
    image: 'https://images.unsplash.com/photo-1761395013890-49090392ff0f?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNb2JpbGUlMjBMZWdlbmRzfGVufDB8MHx8fDE3NjI1MDAwNzN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    icon: Crown,
  },
  {
    id: 'freefire',
    name: 'Free Fire',
    image: 'https://images.unsplash.com/photo-1555797487-a1f30b5d8d55?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxGcmVlJTIwRmlyZXxlbnwwfDB8fHwxNzYyNTAwMDczfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    icon: Flame,
  },
  {
    id: 'genshin',
    name: 'Genshin Impact',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop',
    icon: Sword,
  },
  {
    id: 'steam',
    name: 'Steam Wallet',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop',
    icon: Controller,
  },
];

export default function GameGrid({ onSelect }) {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Popular top-ups</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {games.map(({ id, name, image, icon: Icon }) => (
            <button
              key={id}
              onClick={() => onSelect(id, name)}
              className="group relative overflow-hidden rounded-2xl shadow hover:shadow-lg transition focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <img src={image} alt={name} className="h-40 w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center gap-2 text-white">
                <Icon size={18} />
                <span className="font-semibold">{name}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
