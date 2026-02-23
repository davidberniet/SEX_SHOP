import React from 'react';
import { useApp } from '../../context/AppContext';

export function CartDrawer() {
    const {
        isCartOpen, setIsCartOpen,
        cartItems, removeFromCart, updateQuantity,
        cartTotal
    } = useApp();

    if (!isCartOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-background-dark/80 backdrop-blur-sm z-[100] transition-opacity"
                onClick={() => setIsCartOpen(false)}
            />

            {/* Drawer */}
            <div className="fixed inset-y-0 right-0 z-[110] w-full max-w-md bg-surface-dark border-l border-border-dark shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
                <div className="flex items-center justify-between px-6 py-4 border-b border-border-dark">
                    <h2 className="text-xl font-bold text-white flex items-center gap-2">
                        <span className="material-symbols-outlined">shopping_bag</span>
                        Tu Carrito
                    </h2>
                    <button
                        onClick={() => setIsCartOpen(false)}
                        className="text-slate-400 hover:text-white transition-colors"
                    >
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    {cartItems.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                            <span className="material-symbols-outlined text-slate-600" style={{ fontSize: '64px' }}>shopping_cart</span>
                            <p className="text-slate-400 text-lg">Tu carrito está vacío.</p>
                            <button
                                onClick={() => setIsCartOpen(false)}
                                className="mt-4 text-primary font-bold hover:underline"
                            >
                                Continuar comprando
                            </button>
                        </div>
                    ) : (
                        cartItems.map(item => (
                            <div key={item.id} className="flex gap-4 bg-background-dark rounded-xl p-4 border border-border-dark">
                                <div className="size-20 rounded-lg overflow-hidden bg-surface-dark shrink-0">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1 flex flex-col justify-between">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="font-bold text-white text-sm line-clamp-1">{item.name}</h3>
                                            <p className="text-xs text-slate-400">{item.category}</p>
                                        </div>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-slate-500 hover:text-primary transition-colors"
                                        >
                                            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>delete</span>
                                        </button>
                                    </div>
                                    <div className="flex items-center justify-between mt-2">
                                        <div className="flex items-center rounded-lg bg-surface-dark border border-border-dark">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-white disabled:opacity-50"
                                                disabled={item.quantity <= 1}
                                            >
                                                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>remove</span>
                                            </button>
                                            <span className="w-6 text-center text-sm font-bold text-white">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-white"
                                            >
                                                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>add</span>
                                            </button>
                                        </div>
                                        <span className="font-bold text-primary">${(item.price * item.quantity).toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {cartItems.length > 0 && (
                    <div className="border-t border-border-dark p-6 bg-surface-dark space-y-4">
                        <div className="flex justify-between items-center text-lg">
                            <span className="font-medium text-slate-300">Total</span>
                            <span className="font-bold text-white text-2xl">${cartTotal.toFixed(2)}</span>
                        </div>
                        <button className="w-full rounded-lg bg-white py-4 text-sm font-bold text-background-dark hover:bg-slate-200 transition-colors shadow-lg shadow-white/10 flex justify-center items-center gap-2">
                            Proceder al Pago
                            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>arrow_forward</span>
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}
