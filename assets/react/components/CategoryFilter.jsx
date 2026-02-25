import React from 'react';

export function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
    return (
        <div className="flex flex-wrap gap-3 mb-8">
            {categories.map(category => (
                <button
                    key={category}
                    onClick={() => onSelectCategory(category)}
                    className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${selectedCategory === category
                            ? "bg-primary text-white shadow-[0_0_15px_rgba(236,19,128,0.3)]"
                            : "bg-surface-dark text-slate-300 hover:bg-slate-800 hover:text-white border border-border-dark"
                        }`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}
