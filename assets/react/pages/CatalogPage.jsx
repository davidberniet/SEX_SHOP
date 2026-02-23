import { useState } from "react";
import { CategoryFilter } from "../components/CategoryFilter";
import { ProductCard } from "../components/ProductCard";
import { useApp } from "../context/AppContext";
import { PRODUCTS, CATEGORIES } from "../data/products";

export function CatalogPage({ onNavigate, routeParams }) {
    const [selectedCategory, setSelectedCategory] = useState("Todos");
    const [searchQuery, setSearchQuery] = useState("");
    const { addToCart } = useApp();

    const filteredProducts = PRODUCTS.filter(p => {
        const matchCategory = selectedCategory === "Todos" || p.category === selectedCategory;
        const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.description?.toLowerCase().includes(searchQuery.toLowerCase());
        return matchCategory && matchSearch;
    });

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

            <div className="flex flex-col md:flex-row gap-4 mb-8 justify-between items-start md:items-center border-b border-border-dark pb-6">
                <CategoryFilter
                    categories={CATEGORIES}
                    selectedCategory={selectedCategory}
                    onSelectCategory={setSelectedCategory}
                />
                <div className="relative w-full md:w-64 shrink-0">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                    <input
                        type="text"
                        placeholder="Buscar productos..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        autoFocus={routeParams?.focusSearch}
                        className="w-full bg-surface-dark border border-border-dark rounded-full pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-slate-500"
                    />
                </div>
            </div>

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
                    <span className="material-symbols-outlined text-slate-600 mb-4 block" style={{ fontSize: '48px' }}>search_off</span>
                    <p className="text-slate-300 text-lg font-medium">
                        No se encontraron productos
                    </p>
                    <button
                        onClick={() => { setSelectedCategory('Todos'); setSearchQuery(''); }}
                        className="mt-4 text-primary font-bold hover:underline"
                    >
                        Limpiar filtros
                    </button>
                </div>
            )}
        </div>
    );
}
