import React from 'react';

export function ContactPage() {
    return (
        <div className="container mx-auto px-4 py-12 lg:py-20 max-w-[800px]">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">Hablemos</h1>
                <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                    ¿Tienes dudas sobre un producto, un pedido, o simplemente quieres dejarnos sugerencias? Estamos aquí para ayudarte con total discreción.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-surface-dark border border-border-dark rounded-2xl p-6 text-center hover:border-primary/50 transition-colors">
                    <div className="size-12 rounded-full bg-primary/20 text-primary mx-auto flex items-center justify-center mb-4">
                        <span className="material-symbols-outlined">mail</span>
                    </div>
                    <h3 className="font-bold text-white mb-1">Email</h3>
                    <p className="text-sm text-slate-400">hello@velvetvine.com</p>
                </div>
                <div className="bg-surface-dark border border-border-dark rounded-2xl p-6 text-center hover:border-primary/50 transition-colors">
                    <div className="size-12 rounded-full bg-primary/20 text-primary mx-auto flex items-center justify-center mb-4">
                        <span className="material-symbols-outlined">chat_bubble</span>
                    </div>
                    <h3 className="font-bold text-white mb-1">Chat Web</h3>
                    <p className="text-sm text-slate-400">Lunes a Viernes (9-18h)</p>
                </div>
                <div className="bg-surface-dark border border-border-dark rounded-2xl p-6 text-center hover:border-primary/50 transition-colors">
                    <div className="size-12 rounded-full bg-primary/20 text-primary mx-auto flex items-center justify-center mb-4">
                        <span className="material-symbols-outlined">location_on</span>
                    </div>
                    <h3 className="font-bold text-white mb-1">Logística</h3>
                    <p className="text-sm text-slate-400">Madrid, España</p>
                </div>
            </div>

            <div className="bg-surface-dark border border-border-dark rounded-2xl p-6 md:p-10 shadow-2xl">
                <h2 className="text-2xl font-bold text-white mb-6">Envíanos un mensaje</h2>
                <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-300 uppercase tracking-wide">Tu Nombre</label>
                            <input type="text" className="w-full bg-background-dark border border-border-dark rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="Juan Perez" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-300 uppercase tracking-wide">Tu Correo</label>
                            <input type="email" className="w-full bg-background-dark border border-border-dark rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="juan@ejemplo.com" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-300 uppercase tracking-wide">Asunto</label>
                        <select className="w-full bg-background-dark border border-border-dark rounded-lg px-4 py-3 text-slate-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none cursor-pointer">
                            <option value="duda">Duda sobre producto</option>
                            <option value="pedido">Estado de mi pedido</option>
                            <option value="devolucion">Devoluciones / Garantía</option>
                            <option value="otro">Otro</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-300 uppercase tracking-wide">Mensaje</label>
                        <textarea rows="5" className="w-full bg-background-dark border border-border-dark rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-y" placeholder="¿En qué podemos ayudarte?"></textarea>
                    </div>

                    <button type="button" className="w-full rounded-lg bg-primary px-8 py-4 text-sm font-bold text-white hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(236,19,128,0.3)] hover:shadow-[0_0_30px_rgba(236,19,128,0.5)] flex justify-center items-center gap-2">
                        <span>Enviar Mensaje</span>
                        <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>send</span>
                    </button>
                </form>
            </div>
        </div>
    );
}
