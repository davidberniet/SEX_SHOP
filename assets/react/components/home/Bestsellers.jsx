import React from 'react';

const homeProducts = [
    {
        id: 1,
        name: "The Wand",
        price: "$120.00",
        originalPrice: null,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWRnB1CQC0ZsiFrIxiIPhI3cgDAToBbUeLD226UozXEkkX7GVAm1Yjc_4KloEHR1R4i2J6lBVq-VkI6psGCkdeG3ug9Z3TZVWmHVKmcZ4li4JyywtrYDwDXy8aX_f4xPbXfi06cIiYL-Utywc1FRrSITUqKBvVs7Vu5Qm3AZQFHxvgw__YHhAes_ca9MUCVkgrNygPqI0dkVC1DrbsanI8oqfJmMHnNVHiOpuNi0WmJIEvLzxM0u7EEcIlODFJBZFM6019hWNzIBI",
        badge: null
    },
    {
        id: 2,
        name: "Silk Massage Oil",
        price: "$45.00",
        originalPrice: null,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxgWuIYTgjYTliaJ_wxhRZHL-xabATdXO5pMYJ4-FFAk5H-SwzwCC7dwP3WosXgAUVJCgxnK7zpq83iZZ6M6tpgPiDQ_Ptu_XJUQ-JWe5VYe7FXGYmJnUJ4zM68NroWMBUdu65QGHmNdJE4-B3l5U9Ekzee9Wr4ly6-6tptHQRwy9loSwvZciTACr6YS0V6RPS5glDRmBCqexpXPdOh80y3tNNhh2azCEKYfxjs3eVw4DJOjYKFoI5Ftxe8HYSDysrVOli8yYWVs8",
        badge: null
    },
    {
        id: 3,
        name: "Noir Silk Blindfold",
        price: "$28.00",
        originalPrice: "$40.00",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDRjBL-fbDc6ZEI23U-Fg1NbQ6seQu-yRJpvlQp0nKUdEggwvfafwfJNFsiUuXC7CCy1IjUVkeApsx3bqWLhCIneLcaGn1QfMMaftwv9_xLQq55_PUvNDHgMTv1_JOkqI2QMOYK2cs59ZpKgrd68z7o60YSEBAIpUzHUbdsvimyeZPr1rzFBuknX12DUdQeW_ROr1yCNv1iqDtvvm9GgL0bbAJqRvRS_pXn-8JsIy1fKCCZGk9mzz8imZs3noPzmgw1X0rqGruet0",
        badge: "Sale"
    },
    {
        id: 4,
        name: "The Sculptor",
        price: "$95.00",
        originalPrice: null,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuhJCel4uG2A9qqMsHu0ykWw3YwPQculZTTisCcaWr_szhYvl_J4Ic9O979W7q6Om0x5dtDZLjdhnJsDJENHTyLnYg2bEhHcbGvNQCUpNPstWcRY7r10EKwAzTc9VXB_AwhLhv0B3QT46_LxMLiSXqS0r6w2ozTkb8RSZceTrgCU-HcnGDZDMAkH93IxpGteIlhTKmzD2_aGcocrZUL14-1jZcKrK-iy14X-ukjLIug7RDOfAQm4u6xPnpf2c7k_XDOf-Kd5t4F5Y",
        badge: null
    }
];

const Bestsellers = () => {
    return (
        <section className="mt-16">
            <div className="flex items-center justify-between px-2 mb-6">
                <h2 className="text-2xl font-bold tracking-tight text-white">Bestsellers</h2>
                <div className="flex gap-2">
                    <button className="flex size-8 items-center justify-center rounded-full bg-surface-dark text-slate-300 hover:bg-slate-700 hover:text-white">
                        <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>chevron_left</span>
                    </button>
                    <button className="flex size-8 items-center justify-center rounded-full bg-surface-dark text-slate-300 hover:bg-slate-700 hover:text-white">
                        <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>chevron_right</span>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {homeProducts.map((product) => (
                    <div key={product.id} className="group flex flex-col gap-3">
                        <div className="relative aspect-square overflow-hidden rounded-xl bg-surface-dark">
                            {product.badge && (
                                <div className="absolute right-3 top-10 z-10 rounded bg-primary px-2 py-0.5 text-[10px] font-bold uppercase text-white">
                                    {product.badge}
                                </div>
                            )}
                            <img alt={product.name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" src={product.image} />

                            <button className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-full bg-background-dark/60 text-white backdrop-blur-sm transition hover:bg-primary hover:text-white">
                                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>favorite</span>
                            </button>

                            <div className="absolute bottom-3 left-3 right-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <button className="w-full rounded-lg bg-white/90 py-2 text-sm font-bold text-background-dark shadow-sm hover:bg-white">
                                    Quick Add
                                </button>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-sm font-medium text-white truncate">{product.name}</h3>
                            <p className="flex items-center gap-2 text-sm font-bold">
                                <span className="text-primary">{product.price}</span>
                                {product.originalPrice && (
                                    <span className="text-xs font-normal text-slate-500 line-through">{product.originalPrice}</span>
                                )}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Bestsellers;
