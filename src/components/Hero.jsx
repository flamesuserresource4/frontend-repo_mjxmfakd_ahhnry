import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-violet-50 to-fuchsia-50" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 items-center gap-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-3 py-1 text-xs text-indigo-700 mb-4">
              <Sparkles size={14} />
              <span>Instant Delivery · Secure Payments</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Top up your favorite games in seconds
            </h1>
            <p className="mt-4 text-slate-600 text-lg">
              Choose a game, enter your player ID, pick a package and pay. Credits arrive instantly to your account.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 opacity-90" />
            <div className="absolute inset-6 rounded-xl bg-white/90 backdrop-blur shadow-xl p-6 flex flex-col justify-center">
              <p className="text-slate-700 text-sm">Trusted by thousands of gamers. 24/7 support. Global coverage.</p>
              <div className="mt-4 flex gap-3">
                <div className="h-2 flex-1 rounded bg-indigo-200" />
                <div className="h-2 flex-1 rounded bg-violet-200" />
                <div className="h-2 flex-1 rounded bg-fuchsia-200" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
