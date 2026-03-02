import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { fetchMyOrders } from '../data/api';

export function ProfilePage({ initialTab = 'profile' }) {
    const [activeTab, setActiveTab] = useState(initialTab);
    const { user } = useApp();
    const [orders, setOrders] = useState([]);
    const [loadingOrders, setLoadingOrders] = useState(false);

    useEffect(() => {
        if (activeTab === 'orders') {
            loadOrders();
        }
    }, [activeTab]);

    async function loadOrders() {
        setLoadingOrders(true);
        const data = await fetchMyOrders();
        setOrders(data);
        setLoadingOrders(false);
    }

    return (
        <div className="container mx-auto px-4 py-8 lg:py-12 max-w-[1000px] flex flex-col md:flex-row gap-8">

            {/* Sidebar Menu */}
            <aside className="md:w-64 shrink-0">
                <div className="sticky top-24 space-y-1">
                    <p className="px-4 text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Ajustes de Cuenta</p>
                    <button
                        onClick={() => setActiveTab('profile')}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition-colors ${activeTab === 'profile' ? 'bg-primary text-white shadow-[0_0_15px_rgba(236,19,128,0.3)]' : 'text-slate-300 hover:bg-surface-dark hover:text-white'}`}
                    >
                        <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>person</span>
                        Mi Perfil
                    </button>
                    <button
                        onClick={() => setActiveTab('orders')}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition-colors ${activeTab === 'orders' ? 'bg-primary text-white shadow-[0_0_15px_rgba(236,19,128,0.3)]' : 'text-slate-300 hover:bg-surface-dark hover:text-white'}`}
                    >
                        <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>inventory_2</span>
                        Mis Pedidos
                    </button>
                    <button
                        onClick={() => setActiveTab('privacy')}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition-colors ${activeTab === 'privacy' ? 'bg-primary text-white shadow-[0_0_15px_rgba(236,19,128,0.3)]' : 'text-slate-300 hover:bg-surface-dark hover:text-white'}`}
                    >
                        <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>lock</span>
                        Privacidad & Envío
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 bg-surface-dark border border-border-dark rounded-2xl p-6 lg:p-10 shadow-2xl">
                {activeTab === 'profile' && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                        <div>
                            <h2 className="text-2xl font-black text-white mb-2">Información Personal</h2>
                            <p className="text-sm text-slate-400">Actualiza tus datos y gestiona cómo nos comunicamos contigo.</p>
                        </div>

                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wide">Nombre o Razón Social</label>
                                    <input type="text" className="w-full bg-background-dark border border-border-dark rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" defaultValue={user?.nombre || ''} />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wide">DNI / NIE / CIF</label>
                                    <input type="text" className="w-full bg-background-dark border border-border-dark rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" defaultValue={user?.nifCif || ''} />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wide">Correo Electrónico</label>
                                    <input type="email" className="w-full bg-background-dark border border-border-dark rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" defaultValue={user?.email || ''} readOnly />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wide">Fecha de Nacimiento</label>
                                    <input type="date" className="w-full bg-background-dark border border-border-dark rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert" defaultValue={user?.fechaNacimiento || ''} />
                                </div>
                            </div>

                            <div className="pt-4 border-t border-border-dark flex gap-4">
                                <button type="button" className="rounded-lg bg-white px-8 py-3 text-sm font-bold text-background-dark hover:bg-slate-200 transition-colors shadow-lg shadow-white/10">
                                    Guardar Cambios
                                </button>
                                <button type="button" onClick={() => window.location.href = '/logout'} className="rounded-lg bg-transparent border border-red-500/50 text-red-500 px-8 py-3 text-sm font-bold hover:bg-red-500/10 transition-colors">
                                    Cerrar Sesión
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                {activeTab === 'orders' && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
                        <div>
                            <h2 className="text-2xl font-black text-white mb-2">Mis Pedidos</h2>
                            <p className="text-sm text-slate-400">Historial de tus compras recientes.</p>
                        </div>
                        {loadingOrders ? (
                            <div className="text-center py-20 text-slate-400">
                                <span className="material-symbols-outlined animate-spin text-primary block mx-auto mb-2" style={{ fontSize: '32px' }}>sync</span>
                                Cargando pedidos...
                            </div>
                        ) : orders.length === 0 ? (
                            <div className="text-center py-20 bg-background-dark rounded-xl border border-border-dark">
                                <span className="material-symbols-outlined text-slate-600 mb-4 block" style={{ fontSize: '48px' }}>inventory_2</span>
                                <p className="text-slate-300 text-lg font-medium">No has realizado ningún pedido todavía.</p>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {orders.map(order => (
                                    <div key={order.id} className="bg-background-dark border border-border-dark rounded-xl p-6">
                                        <div className="flex justify-between items-center mb-4 border-b border-border-dark pb-4">
                                            <div>
                                                <p className="text-sm font-bold text-slate-300">Pedido #{order.id}</p>
                                                <p className="text-xs text-slate-500">{order.fecha}</p>
                                            </div>
                                            <span className="text-lg font-black text-primary border border-primary/20 bg-primary/10 px-3 py-1 rounded-lg">
                                                ${order.total.toFixed(2)}
                                            </span>
                                        </div>
                                        <div className="space-y-3">
                                            {order.detalles.map(detalle => (
                                                <div key={detalle.id} className="flex justify-between items-center text-sm">
                                                    <div className="flex items-center gap-3">
                                                        <span className="font-bold text-slate-400 w-6">{detalle.cantidad}x</span>
                                                        <span className="text-white">{detalle.nombreProducto}</span>
                                                    </div>
                                                    <span className="text-slate-300">${detalle.precioUnitario.toFixed(2)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {activeTab === 'privacy' && (
                    <div className="flex flex-col items-center justify-center py-20 animate-in fade-in duration-500 text-center">
                        <span className="material-symbols-outlined text-border-dark mb-4" style={{ fontSize: '64px' }}>security</span>
                        <h3 className="text-xl font-bold text-white mb-2">Módulo en Construcción</h3>
                        <p className="text-slate-400 text-sm">Próximamente disponible en la siguiente fase.</p>
                    </div>
                )}

            </div>
        </div>
    );
}
