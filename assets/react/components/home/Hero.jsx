import React, { useState, useEffect } from 'react';

const IMAGES = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAzn60jV9IqqIaGvXdcXt-yhy-LW7NGK52NHt5Yh3qPGAmJ9-LHlee8chg3zYWpbwjKsgtfoefRohv3bm6rljp9riCAxefPOywFa5JZJnIvvMsf-55zOkujPFLFVu64khiBiooAR5J9TwUyOIWCN_8owJ2T95QA6oRkKTOmlLvS_20G5HzRhVpCrfzfOIrvZX4WykCJd2wue5ee2QOw4y6Hkqh8q09IAAg8NkcU3_rWeUPcEjutszx3ujmNDleR18UbxyWcIDMLLIE",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBp4nwvYGL_YEud6dp76BqJQ_hghAaMwE2lMMLu8IHTWIxrB2SaynIM7Jjg2t4qxiQs-Ax7_4ZT4k0dF2jY-m7XaSg_1SlH0t5__zqu2Y8yBqW8IV1nxbssGsqVGnd5faD-Nv3th4jy-oRsfI7gi2XrsGIkVwGTfRMY_MiL2ODxhGVolhtWHAEXAKP3KsUkKnicn13JmHEnpeKJFZxWTaowCIITUC_mYcOo0Msy5Ff9YCGIF36Yvtymjjx-0-PL610GUp7fQyfs51k",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD3IBkc5mIbiMmlyA8isoVHAbPD2_xGaqzYyaXGSCR6OzhNzn7BLrFEQTP2m8mVzbIj9P_EU3-eBH7FBpqSrc10qzFUoth2DFs-HiRJxNATh5L4jZawPPbZjWMsuZD9jZAUyn6bRTveWaKnNVV_Bn1mQcvB_2EBMzyz2EZrNOgixZt_4YVXCu-0Ni86CGqz5KjbE1tW6dFHy9HMsjIdiZCBqF_oGbM6Vj2GtNHcpZZ5lZci8BirJnLhQBtN1XpZsJli40SalFirZSM",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC2yawi7DTIb1HbI7Vdrai3QanlGt4tYfEI8O3KUaCY4w8TLkREktY4GxubfqA9gIrwLgnqGzYa3YedmyfRFXCERCLGr_jz-D9nm-ng1clwHuJ4gGgYaOJS9Y_0RcIVJ4j00SdFpDPqBR0yclGitOev8pbAEheodASIGMmYmmy4SDQuUKgf5uikpoC6FcCJO-Xbzoqiyj8dJ1z8LV7PE2_3WhJpdMwRUo7eJvNfDMa7Yeed5xiFJ2XUHEKrEVZfkzGvathpfFFCQXU"
];

const Hero = ({ onNavigate }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % IMAGES.length);
        }, 5000); // Cambia la imagen cada 5 segundos

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative overflow-hidden rounded-xl bg-surface-dark shadow-2xl">
            {/* Image Background Carousel */}
            <div className="absolute inset-0 z-0">
                {IMAGES.map((url, idx) => (
                    <div
                        key={idx}
                        className={`absolute inset-0 h-full w-full bg-cover bg-center transition-opacity duration-1000 ${idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                            }`}
                        style={{ backgroundImage: `url('${url}')` }}
                    ></div>
                ))}
                {/* Gradient Overlay */}
                <div className="absolute inset-0 z-20 bg-gradient-to-t from-background-dark/90 via-background-dark/50 to-transparent"></div>
            </div>
            {/* Hero Content */}
            <div className="relative z-30 flex min-h-[500px] flex-col justify-end px-6 py-12 sm:px-12 sm:py-16 text-center sm:text-left">
                <div className="max-w-2xl">
                    <span className="mb-3 inline-block rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary backdrop-blur-sm">
                        Nueva Colección
                    </span>
                    <h1 className="mb-4 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                        Intimidad,<br />Reimaginada.
                    </h1>
                    <p className="mb-8 text-lg font-medium text-slate-300 sm:text-xl">
                        Productos de placer selectos para el estilo de vida moderno. Elegantes, seguros para el cuerpo y siempre con envío discreto.
                    </p>
                    <div className="flex flex-col gap-4 sm:flex-row">
                        <button 
                            onClick={() => onNavigate && onNavigate('catalog')}
                            className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-sm font-bold text-white transition-all hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(236,19,128,0.4)] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-dark cursor-pointer">
                            Explorar la Colección
                        </button>
                        <button 
                            onClick={() => onNavigate && onNavigate('about')}
                            className="inline-flex h-12 items-center justify-center rounded-lg border border-slate-600 bg-transparent px-8 text-sm font-bold text-white transition-colors hover:bg-white/10 focus:outline-none cursor-pointer">
                            Ver Lookbook
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
