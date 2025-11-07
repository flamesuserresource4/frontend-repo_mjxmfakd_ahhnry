import React, { useMemo } from 'react';

const packagesByGame = {
  mlbb: [
    { id: 'd1', name: '86 Diamonds', price: 1.99 },
    { id: 'd2', name: '172 Diamonds', price: 3.79 },
    { id: 'd3', name: '257 Diamonds', price: 5.49 },
  ],
  freefire: [
    { id: 'f1', name: '100 Diamonds', price: 1.49 },
    { id: 'f2', name: '310 Diamonds', price: 4.29 },
    { id: 'f3', name: '520 Diamonds', price: 6.79 },
  ],
  genshin: [
    { id: 'g1', name: '60 Genesis Crystals', price: 0.99 },
    { id: 'g2', name: '300+30 Genesis Crystals', price: 4.99 },
    { id: 'g3', name: '980+110 Genesis Crystals', price: 14.99 },
  ],
  steam: [
    { id: 's1', name: '$5 Wallet Code', price: 5.0 },
    { id: 's2', name: '$10 Wallet Code', price: 10.0 },
    { id: 's3', name: '$20 Wallet Code', price: 20.0 },
  ],
};

export default function TopUpForm({ selectedGame, gameName, onAddToCart }) {
  const packages = useMemo(() => packagesByGame[selectedGame] || [], [selectedGame]);

  if (!selectedGame) return null;

  return (
    <section className="py-10 bg-white/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <h3 className="text-xl font-semibold text-slate-900">{gameName} top-up</h3>
          <p className="text-slate-600 text-sm mt-1">Enter your player details and pick a package.</p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              const playerId = data.get('playerId');
              const serverId = data.get('serverId');
              const pkg = packages.find(p => p.id === data.get('package'));
              if (!pkg) return;
              onAddToCart({ gameId: selectedGame, gameName, playerId, serverId, ...pkg, quantity: 1 });
              e.currentTarget.reset();
            }}
            className="mt-6 grid gap-4 md:grid-cols-3"
          >
            <div className="md:col-span-1">
              <label className="text-sm font-medium text-slate-700">Player ID</label>
              <input name="playerId" required placeholder="e.g., 123456789" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div className="md:col-span-1">
              <label className="text-sm font-medium text-slate-700">Server/Zone ID</label>
              <input name="serverId" required placeholder="e.g., 1234" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div className="md:col-span-1">
              <label className="text-sm font-medium text-slate-700">Package</label>
              <select name="package" required className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option value="">Select package</option>
                {packages.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} — ${p.price.toFixed(2)}
                  </option>
                ))}
              </select>
            </div>
            <div className="md:col-span-3 flex justify-end">
              <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-white font-medium hover:bg-indigo-700 transition">
                Add to cart
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
