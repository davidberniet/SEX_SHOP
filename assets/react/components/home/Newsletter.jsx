import React from 'react';
import { useApp } from '../../context/AppContext';

const Newsletter = () => {
    const { user } = useApp();

    if (user) {
        return null; // hide if logged in
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        window.location.href = '/register';
    };

    return (
        <section className="mt-16 mb-8 text-center">
            <div className="mx-auto max-w-xl rounded-2xl bg-gradient-to-br from-surface-dark to-background-dark p-8 border border-border-dark">
                <span className="mb-2 block text-2xl text-primary">
                    <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>person_add</span>
                </span>
                <h2 className="mb-2 text-xl font-bold text-white">Desbloquea un 10% en tu primer pedido</h2>
                <p className="mb-6 text-sm text-slate-400">Únete a nuestra comunidad para ofertas exclusivas, novedades y consejos de bienestar.</p>
                <div className="flex justify-center mt-6">
                    <button onClick={handleSubmit} className="rounded-lg bg-primary px-10 py-3 text-base font-bold text-white hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 hover:-translate-y-1 transform">
                        Crear tu cuenta ahora
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
