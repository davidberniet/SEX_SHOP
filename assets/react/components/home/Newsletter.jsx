import React from 'react';

const Newsletter = () => {
    return (
        <section className="mt-16 mb-8 text-center">
            <div className="mx-auto max-w-xl rounded-2xl bg-gradient-to-br from-surface-dark to-background-dark p-8 border border-border-dark">
                <span className="mb-2 block text-2xl text-primary">
                    <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>mail</span>
                </span>
                <h2 className="mb-2 text-xl font-bold text-white">Unlock 10% Off Your First Order</h2>
                <p className="mb-6 text-sm text-slate-400">Join our community for exclusive offers, new arrivals, and wellness tips. Unsubscribe anytime.</p>
                <form className="flex flex-col gap-3 sm:flex-row">
                    <input
                        className="flex-1 rounded-lg border border-border-dark bg-background-dark px-4 py-2.5 text-white placeholder-slate-500 focus:border-primary focus:ring-1 focus:ring-primary"
                        placeholder="Enter your email"
                        type="email"
                    />
                    <button className="rounded-lg bg-primary px-6 py-2.5 text-sm font-bold text-white hover:bg-primary/90 transition-colors" type="submit">
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Newsletter;
