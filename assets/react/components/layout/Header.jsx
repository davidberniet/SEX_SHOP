import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

const Header = ({ onNavigate = () => { } }) => {
    const { user, cartCount, setIsCartOpen } = useApp();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleNavigate = (route, params = null) => {
        setIsMobileMenuOpen(false);
        onNavigate(route, params);
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border-dark bg-background-dark/95 backdrop-blur supports-[backdrop-filter]:bg-background-dark/80">
            <div className="mx-auto flex h-28 max-w-[960px] items-center justify-between px-4 sm:px-6 lg:px-8 relative">

                {/* Desktop Nav (Left) */}
                <nav className="hidden md:flex flex-1 items-center justify-start gap-8 order-1">
                    <a onClick={(e) => { e.preventDefault(); handleNavigate('catalog'); }} className="text-sm font-medium text-slate-300 transition-colors hover:text-primary cursor-pointer">Shop</a>
                    <a onClick={(e) => { e.preventDefault(); handleNavigate('contact'); }} className="text-sm font-medium text-slate-300 transition-colors hover:text-primary cursor-pointer">Contacto</a>
                    <a onClick={(e) => { e.preventDefault(); handleNavigate('about'); }} className="text-sm font-medium text-slate-300 transition-colors hover:text-primary cursor-pointer">Nosotros</a>
                </nav>

                {/* Logo (Left on Mobile, Center on Desktop) */}
                <div className="flex flex-1 justify-start md:justify-center items-center cursor-pointer order-1 md:order-2" onClick={() => handleNavigate('home')}>
                    <img src="/logo.png" alt="Lujusex Picardía & Placer" className="w-[200px] md:w-[300px] h-auto max-h-[80px] md:max-h-[100px] object-contain drop-shadow-[0_0_15px_rgba(236,19,128,0.5)] mix-blend-screen" />
                </div>

                {/* Actions (Right) */}
                <div className="flex flex-1 items-center justify-end gap-1 md:gap-2 order-3">
                    <button
                        aria-label="Search"
                        onClick={() => handleNavigate('catalog', { focusSearch: true })}
                        className="flex size-10 items-center justify-center rounded-lg text-slate-300 transition-colors hover:bg-surface-dark hover:text-primary"
                    >
                        <span className="material-symbols-outlined">search</span>
                    </button>
                    {user?.roles?.includes('ROLE_ADMIN') && (
                        <a href="/admin" aria-label="Admin" title="Panel Administrador" className="flex size-10 items-center justify-center rounded-lg text-slate-300 transition-colors hover:bg-surface-dark hover:text-primary hidden md:flex">
                            <span className="material-symbols-outlined">admin_panel_settings</span>
                        </a>
                    )}
                    <button aria-label="Profile" onClick={() => handleNavigate('profile')} className="flex size-10 items-center justify-center rounded-lg text-slate-300 transition-colors hover:bg-surface-dark hover:text-primary">
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
                    <button
                        aria-label="Menu"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="flex size-10 md:hidden items-center justify-center rounded-lg text-slate-300 transition-colors hover:bg-surface-dark hover:text-primary"
                    >
                        <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-28 left-0 w-full bg-surface-dark border-b border-border-dark shadow-2xl md:hidden animate-in slide-in-from-top-2 duration-200">
                    <nav className="flex flex-col py-4 px-6 space-y-4">
                        <a onClick={(e) => { e.preventDefault(); handleNavigate('catalog'); }} className="text-lg font-medium text-slate-300 hover:text-primary cursor-pointer border-b border-border-dark pb-2">Shop</a>
                        <a onClick={(e) => { e.preventDefault(); handleNavigate('contact'); }} className="text-lg font-medium text-slate-300 hover:text-primary cursor-pointer border-b border-border-dark pb-2">Contacto</a>
                        <a onClick={(e) => { e.preventDefault(); handleNavigate('about'); }} className="text-lg font-medium text-slate-300 hover:text-primary cursor-pointer border-b border-border-dark pb-2">Nosotros</a>
                        {user?.roles?.includes('ROLE_ADMIN') && (
                            <a href="/admin" className="text-lg font-medium text-slate-300 hover:text-primary cursor-pointer flex items-center gap-2">
                                <span className="material-symbols-outlined">admin_panel_settings</span>
                                Panel Administrador
                            </a>
                        )}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
