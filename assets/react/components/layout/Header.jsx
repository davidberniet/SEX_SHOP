import React from 'react';
import { useApp } from '../../context/AppContext';

const Header = ({ onNavigate = () => { } }) => {
    const { cartCount, setIsCartOpen } = useApp();
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border-dark bg-background-dark/95 backdrop-blur supports-[backdrop-filter]:bg-background-dark/80">
            <div className="mx-auto flex h-28 max-w-[960px] items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <div className="flex items-center cursor-pointer" onClick={() => onNavigate('home')}>
                    <img src="/logo.png" alt="Lujusex Picardía & Placer" className="w-[300px] h-auto max-h-[100px] object-contain drop-shadow-[0_0_15px_rgba(236,19,128,0.5)] mix-blend-screen -ml-4" />
                </div>
                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <a onClick={(e) => { e.preventDefault(); onNavigate('catalog'); }} className="text-sm font-medium text-slate-300 transition-colors hover:text-primary cursor-pointer">Shop</a>
                    <a onClick={(e) => { e.preventDefault(); onNavigate('contact'); }} className="text-sm font-medium text-slate-300 transition-colors hover:text-primary cursor-pointer">Contacto</a>
                    <a className="text-sm font-medium text-slate-300 transition-colors hover:text-primary" href="#">Education</a>
                </nav>
                {/* Actions */}
                <div className="flex items-center gap-2">
                    <button
                        aria-label="Search"
                        onClick={() => onNavigate('catalog', { focusSearch: true })}
                        className="flex size-10 items-center justify-center rounded-lg text-slate-300 transition-colors hover:bg-surface-dark hover:text-primary"
                    >
                        <span className="material-symbols-outlined">search</span>
                    </button>
                    <button aria-label="Profile" onClick={() => onNavigate('profile')} className="flex size-10 items-center justify-center rounded-lg text-slate-300 transition-colors hover:bg-surface-dark hover:text-primary">
                        <span className="material-symbols-outlined">person</span>
                    </button>
                    <button
                        aria-label="Cart"
                        onClick={() => setIsCartOpen(true)}
                        className="relative flex size-10 items-center justify-center rounded-lg text-slate-300 transition-colors hover:bg-surface-dark hover:text-primary"
                    >
                        <span className="material-symbols-outlined">shopping_bag</span>
                        {cartCount > 0 ? (
                            <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">
                                {cartCount}
                            </span>
                        ) : (
                            <span className="absolute right-2 top-2 size-2 rounded-full bg-primary ring-2 ring-background-dark"></span>
                        )}
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
