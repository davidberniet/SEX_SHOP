import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { fetchProduct } from '../data/api';

export function ProductPage({ productId, onBack }) {
    const { addToCart } = useApp();
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState('M');

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function load() {
            setLoading(true);
            setError(null);
            const data = await fetchProduct(productId);
            if (data && !data.error) {
                setProduct(data);
            } else {
                setError("Producto no encontrado");
            }
            setLoading(false);
        }
        if (productId) {
            load();
        }
    }, [productId]);

    if (loading) {
        return (
            <div className="container mx-auto px-4 py-32 text-center max-w-[1200px]">
                <span className="material-symbols-outlined animate-spin text-primary block mx-auto mb-4" style={{ fontSize: '48px' }}>sync</span>
                <p className="text-slate-300">Cargando producto...</p>
            </div>
        );
    }

    if (error || !product) {
        return (
            <div className="container mx-auto px-4 py-32 text-center max-w-[1200px]">
                <span className="material-symbols-outlined text-slate-600 block mx-auto mb-4" style={{ fontSize: '48px' }}>error</span>
                <p className="text-slate-300 mb-6">{error || "Producto no encontrado"}</p>
                <button
                    onClick={onBack}
                    className="text-primary font-bold hover:underline"
                >
                    Volver al catálogo
                </button>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8 max-w-[1200px]">
            <button
                onClick={onBack}
                className="mb-8 flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_back</span>
                Volver al catálogo
            </button>

            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
                {/* Galería de Imágenes */}
                <div className="space-y-4">
                    <div className="aspect-square relative overflow-hidden rounded-2xl bg-surface-dark border border-border-dark flex items-center justify-center">
                        {product.badge && (
                            <div className="absolute left-4 top-4 z-10 rounded bg-primary px-3 py-1 text-xs font-bold uppercase text-white shadow-lg shadow-primary/20">
                                {product.badge}
                            </div>
                        )}
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className={`aspect-square rounded-xl bg-surface-dark border ${i === 1 ? 'border-primary' : 'border-border-dark opacity-60 hover:opacity-100'} cursor-pointer overflow-hidden transition-all text-center`}>
                                <img src={product.image} className="w-full h-full object-cover" alt="Thumbnail" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Info del Producto */}
                <div className="flex flex-col">
                    <div className="mb-6">
                        <p className="text-sm font-bold uppercase tracking-widest text-primary mb-2">{product.category}</p>
                        <h1 className="text-4xl font-black text-white mb-4 tracking-tight">{product.name}</h1>
                        <div className="flex items-end gap-3 mb-6">
                            <span className="text-3xl font-bold text-white">${product.price.toFixed(2)}</span>
                            {product.originalPrice && (
                                <span className="text-lg font-medium text-slate-500 line-through mb-1">${product.originalPrice.toFixed(2)}</span>
                            )}
                        </div>

                        <p className="text-slate-300 text-lg leading-relaxed">
                            Experimenta el pináculo del placer y la sofisticación. Diseñado con materiales de la más alta calidad para ofrecer sensaciones exquisitas, este producto redefinirá tus momentos de intimidad con un toque de elegancia absoluta.
                        </p>
                    </div>

                    <div className="space-y-6 border-t border-border-dark pt-6 mb-8 mt-auto">
                        {/* Tallas - Solo si es ropa interior (Apparel) */}
                        {product.category === 'Apparel' && (
                            <div>
                                <h3 className="text-sm font-bold text-white mb-3 flex justify-between">
                                    Talla <span className="text-primary cursor-pointer hover:underline font-normal text-xs">Guía de tallas</span>
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`w-12 h-12 rounded-lg font-bold text-sm flex items-center justify-center transition-all ${selectedSize === size
                                                ? 'bg-primary text-white shadow-[0_0_15px_rgba(236,19,128,0.3)]'
                                                : 'bg-surface-dark text-slate-300 border border-border-dark hover:border-slate-500 hover:text-white'
                                                }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Selector de Cantidad y Añadir al Carrito */}
                        <div className="flex gap-4">
                            <div className="flex items-center rounded-lg bg-surface-dark border border-border-dark p-1">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                                >
                                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>remove</span>
                                </button>
                                <span className="w-8 text-center font-bold text-white">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                                >
                                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>add</span>
                                </button>
                            </div>

                            <button
                                onClick={() => {
                                    for (let i = 0; i < quantity; i++) addToCart(product);
                                }}
                                className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-white text-background-dark font-bold text-lg hover:bg-slate-200 transition-colors shadow-lg shadow-white/10"
                            >
                                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>shopping_bag</span>
                                Añadir al Carrito
                            </button>
                        </div>
                    </div>

                    {/* Detalles Adicionales */}
                    <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border-dark">
                        <div className="flex gap-3 text-slate-300">
                            <span className="material-symbols-outlined text-primary">local_shipping</span>
                            <div>
                                <p className="font-bold text-sm text-white">Envío Discreto</p>
                                <p className="text-xs">Entrega en 24-48h</p>
                            </div>
                        </div>
                        <div className="flex gap-3 text-slate-300">
                            <span className="material-symbols-outlined text-primary">verified_user</span>
                            <div>
                                <p className="font-bold text-sm text-white">100% Seguro</p>
                                <p className="text-xs">Materiales Body-Safe</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
