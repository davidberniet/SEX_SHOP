import React from 'react';

const Header = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border-dark bg-background-dark/95 backdrop-blur supports-[backdrop-filter]:bg-background-dark/80">
            <div className="mx-auto flex h-16 max-w-[960px] items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary" style={{ fontSize: '28px' }}>spa</span>
                    <span className="text-xl font-bold tracking-tight text-white">Velvet & Vine</span>
                </div>
                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <a className="text-sm font-medium text-slate-300 transition-colors hover:text-primary" href="#">Shop</a>
                    <a className="text-sm font-medium text-slate-300 transition-colors hover:text-primary" href="#">New Arrivals</a>
                    <a className="text-sm font-medium text-slate-300 transition-colors hover:text-primary" href="#">Education</a>
                </nav>
                {/* Actions */}
                <div className="flex items-center gap-2">
                    <button aria-label="Search" className="flex size-10 items-center justify-center rounded-lg text-slate-300 transition-colors hover:bg-surface-dark hover:text-primary">
                        <span className="material-symbols-outlined">search</span>
                    </button>
                    <button aria-label="Cart" className="relative flex size-10 items-center justify-center rounded-lg text-slate-300 transition-colors hover:bg-surface-dark hover:text-primary">
                        <span className="material-symbols-outlined">shopping_bag</span>
                        <span className="absolute right-2 top-2 size-2 rounded-full bg-primary ring-2 ring-background-dark"></span>
                    </button>
                    {/* Mobile Menu Button */}
                    <button aria-label="Menu" className="flex md:hidden size-10 items-center justify-center rounded-lg text-slate-300 transition-colors hover:bg-surface-dark hover:text-primary">
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
