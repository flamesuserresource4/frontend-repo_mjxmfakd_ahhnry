import React from 'react';

export default function CartDrawer({ open, onClose, items, onCheckout, onRemove }) {
  const total = items.reduce((sum, it) => sum + it.price * it.quantity, 0);

  return (
    <div className={`fixed inset-0 ${open ? 'pointer-events-auto' : 'pointer-events-none'} z-50`} aria-hidden={!open}>
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      <aside
        className={`absolute right-0 top-0 h-full w-full sm:w-[420px] bg-white shadow-xl border-l border-slate-200 transform transition-transform ${open ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-label="Shopping cart"
      >
        <div className="p-6 border-b border-slate-200 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-900">Your Cart</h3>
          <button onClick={onClose} className="text-slate-500 hover:text-slate-700">Close</button>
        </div>
        <div className="p-6 space-y-4 overflow-y-auto h-[calc(100%-160px)]">
          {items.length === 0 ? (
            <p className="text-slate-600 text-sm">Your cart is empty.</p>
          ) : (
            items.map((it, idx) => (
              <div key={idx} className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-medium text-slate-800">{it.gameName}</p>
                  <p className="text-sm text-slate-600">{it.name}</p>
                  <p className="text-sm text-slate-600">Player: {it.playerId} · Server: {it.serverId}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-slate-900">${(it.price * it.quantity).toFixed(2)}</p>
                  <button onClick={() => onRemove(idx)} className="text-xs text-rose-600 hover:underline">Remove</button>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="p-6 border-t border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <span className="text-slate-600">Total</span>
            <span className="text-lg font-semibold text-slate-900">${total.toFixed(2)}</span>
          </div>
          <button
            onClick={() => onCheckout(total)}
            disabled={items.length === 0}
            className="w-full rounded-lg bg-indigo-600 disabled:bg-slate-300 px-4 py-2 text-white font-medium hover:bg-indigo-700 transition"
          >
            Checkout
          </button>
        </div>
      </aside>
    </div>
  );
}
