import { useState } from "react";
import { CategoryFilter } from "../components/CategoryFilter";
import { ProductCard } from "../components/ProductCard";
import { useApp } from "../context/AppContext";
import { PRODUCTS, CATEGORIES } from "../data/products";

export function CatalogPage({ onNavigate }) {
    const [selectedCategory, setSelectedCategory] = useState("Todos");
    const { addToCart } = useApp();

    const filteredProducts = selectedCategory === "Todos"
        ? PRODUCTS
        : PRODUCTS.filter(p => p.category === selectedCategory);

    return (
        <div className="container mx-auto px-4 py-8 max-w-[960px]">
            <div className="mb-8">
                <h1 className="text-4xl font-black tracking-tight text-white mb-3">
                    Catálogo de Productos
                </h1>
                <p className="text-lg text-slate-300">
                    Descubre nuestra colección completa de productos premium
                </p>
            </div>

            <CategoryFilter
                categories={CATEGORIES}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
            />

            <div className="mb-6">
                <p className="text-sm font-medium text-slate-400">
                    {filteredProducts.length} producto{filteredProducts.length !== 1 ? 's' : ''} disponible{filteredProducts.length !== 1 ? 's' : ''}
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onAddToCart={addToCart}
                        onClick={() => onNavigate('product', product.id)}
                    />
                ))}
            </div>

            {filteredProducts.length === 0 && (
                <div className="text-center py-20 bg-surface-dark rounded-xl border border-border-dark mt-8">
                    <span className="material-symbols-outlined text-slate-600 mb-4 block" style={{ fontSize: '48px' }}>inventory_2</span>
                    <p className="text-slate-300 text-lg font-medium">
                        No hay productos en esta categoría
                    </p>
                    <button
                        onClick={() => setSelectedCategory('Todos')}
                        className="mt-4 text-primary font-bold hover:underline"
                    >
                        Ver todos los productos
                    </button>
                </div>
            )}
        </div>
    );
}
