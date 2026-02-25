import React from 'react';

export function ProductCard({ product, onAddToCart, onClick }) {
    return (
        <div className="group flex flex-col gap-3 cursor-pointer" onClick={onClick}>
            <div className="relative aspect-square overflow-hidden rounded-xl bg-surface-dark border border-border-dark">
                {product.badge && (
                    <div className="absolute right-3 top-3 z-10 rounded bg-primary px-2 py-0.5 text-[10px] font-bold uppercase text-white">
                        {product.badge}
                    </div>
                )}
                <img
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={product.image}
                />

                <button
                    onClick={(e) => e.stopPropagation()}
                    className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-full bg-background-dark/60 text-white backdrop-blur-sm transition hover:bg-primary hover:text-white"
                >
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>favorite</span>
                </button>

                <div className="absolute bottom-3 left-3 right-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onAddToCart(product);
                        }}
                        className="w-full rounded-lg bg-white/90 py-2.5 text-sm font-bold text-background-dark shadow-sm hover:bg-white transition-colors"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
            <div className="pt-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">{product.category}</p>
                <h3 className="text-base font-bold text-white truncate">{product.name}</h3>
                <p className="flex items-center gap-2 mt-1">
                    <span className="text-lg font-bold text-primary">${product.price.toFixed(2)}</span>
                    {product.originalPrice && (
                        <span className="text-sm font-normal text-slate-500 line-through">${product.originalPrice.toFixed(2)}</span>
                    )}
                </p>
            </div>
        </div>
    );
}
