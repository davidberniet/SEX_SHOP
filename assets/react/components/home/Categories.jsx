import React from 'react';

const Categories = () => {
    return (
        <section className="mt-16">
            <div className="flex items-center justify-between px-2 mb-6">
                <h2 className="text-2xl font-bold tracking-tight text-white">Featured Categories</h2>
                <a className="group flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 cursor-pointer" onClick={(e) => e.preventDefault()}>
                    View All
                    <span className="material-symbols-outlined transition-transform group-hover:translate-x-1" style={{ fontSize: '18px' }}>arrow_forward</span>
                </a>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {/* Card 1 */}
                <a className="group relative block aspect-[4/5] overflow-hidden rounded-xl bg-surface-dark cursor-pointer" onClick={(e) => e.preventDefault()}>
                    <div
                        className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
                        data-alt="Elegant luxury toy in soft lighting"
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBp4nwvYGL_YEud6dp76BqJQ_hghAaMwE2lMMLu8IHTWIxrB2SaynIM7Jjg2t4qxiQs-Ax7_4ZT4k0dF2jY-m7XaSg_1SlH0t5__zqu2Y8yBqW8IV1nxbssGsqVGnd5faD-Nv3th4jy-oRsfI7gi2XrsGIkVwGTfRMY_MiL2ODxhGVolhtWHAEXAKP3KsUkKnicn13JmHEnpeKJFZxWTaowCIITUC_mYcOo0Msy5Ff9YCGIF36Yvtymjjx-0-PL610GUp7fQyfs51k')", backgroundSize: 'cover', backgroundPosition: 'center' }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 p-6">
                        <p className="text-xs font-semibold uppercase tracking-wider text-primary/90">Premium</p>
                        <h3 className="text-xl font-bold text-white">Luxury Toys</h3>
                    </div>
                </a>

                {/* Card 2 */}
                <a className="group relative block aspect-[4/5] overflow-hidden rounded-xl bg-surface-dark cursor-pointer" onClick={(e) => e.preventDefault()}>
                    <div
                        className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
                        data-alt="Fine lace lingerie detail"
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD3IBkc5mIbiMmlyA8isoVHAbPD2_xGaqzYyaXGSCR6OzhNzn7BLrFEQTP2m8mVzbIj9P_EU3-eBH7FBpqSrc10qzFUoth2DFs-HiRJxNATh5L4jZawPPbZjWMsuZD9jZAUyn6bRTveWaKnNVV_Bn1mQcvB_2EBMzyz2EZrNOgixZt_4YVXCu-0Ni86CGqz5KjbE1tW6dFHy9HMsjIdiZCBqF_oGbM6Vj2GtNHcpZZ5lZci8BirJnLhQBtN1XpZsJli40SalFirZSM')", backgroundSize: 'cover', backgroundPosition: 'center' }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 p-6">
                        <p className="text-xs font-semibold uppercase tracking-wider text-primary/90">Apparel</p>
                        <h3 className="text-xl font-bold text-white">Fine Lingerie</h3>
                    </div>
                </a>

                {/* Card 3 */}
                <a className="group relative block aspect-[4/5] overflow-hidden rounded-xl bg-surface-dark cursor-pointer" onClick={(e) => e.preventDefault()}>
                    <div
                        className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
                        data-alt="Wellness oils and candles arrangement"
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC2yawi7DTIb1HbI7Vdrai3QanlGt4tYfEI8O3KUaCY4w8TLkREktY4GxubfqA9gIrwLgnqGzYa3YedmyfRFXCERCLGr_jz-D9nm-ng1clwHuJ4gGgYaOJS9Y_0RcIVJ4j00SdFpDPqBR0yclGitOev8pbAEheodASIGMmYmmy4SDQuUKgf5uikpoC6FcCJO-Xbzoqiyj8dJ1z8LV7PE2_3WhJpdMwRUo7eJvNfDMa7Yeed5xiFJ2XUHEKrEVZfkzGvathpfFFCQXU')", backgroundSize: 'cover', backgroundPosition: 'center' }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 p-6">
                        <p className="text-xs font-semibold uppercase tracking-wider text-primary/90">Self-Care</p>
                        <h3 className="text-xl font-bold text-white">Sexual Wellness</h3>
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Categories;
