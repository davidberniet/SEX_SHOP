import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../../data/api';
import { ProductCard } from '../ProductCard';
import { useApp } from '../../context/AppContext';

const Bestsellers = ({ onNavigate }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { addToCart } = useApp();

    useEffect(() => {
        async function load() {
            setLoading(true);
            const data = await fetchProducts();
            // Just take the first 4 for the "bestsellers" mock
            setProducts(data.slice(0, 4));
            setLoading(false);
        }
        load();
    }, []);

    return (
        <section className="mt-16">
            <div className="flex items-center justify-between px-2 mb-6">
                <h2 className="text-2xl font-bold tracking-tight text-white">Bestsellers</h2>
                <div className="flex gap-2">
                    <button className="flex size-8 items-center justify-center rounded-full bg-surface-dark text-slate-300 hover:bg-slate-700 hover:text-white">
                        <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>chevron_left</span>
                    </button>
                    <button className="flex size-8 items-center justify-center rounded-full bg-surface-dark text-slate-300 hover:bg-slate-700 hover:text-white">
                        <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>chevron_right</span>
                    </button>
                </div>
            </div>

            {loading ? (
                <div className="text-center py-10 text-slate-400">
                    <span className="material-symbols-outlined animate-spin text-primary block mx-auto mb-2" style={{ fontSize: '32px' }}>sync</span>
                    Cargando bestsellers...
                </div>
            ) : (
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onAddToCart={addToCart}
                            onClick={() => onNavigate('product', product.id)}
                        />
                    ))}
                </div>
            )}
        </section>
    );
};

export default Bestsellers;
