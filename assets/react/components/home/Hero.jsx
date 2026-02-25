import React from 'react';

const Hero = () => {
    return (
        <div className="relative overflow-hidden rounded-xl bg-surface-dark shadow-2xl">
            {/* Image Background */}
            <div className="absolute inset-0 z-0">
                <div
                    className="h-full w-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
                    data-alt="Soft focused abstract silk sheets in moody lighting"
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAzn60jV9IqqIaGvXdcXt-yhy-LW7NGK52NHt5Yh3qPGAmJ9-LHlee8chg3zYWpbwjKsgtfoefRohv3bm6rljp9riCAxefPOywFa5JZJnIvvMsf-55zOkujPFLFVu64khiBiooAR5J9TwUyOIWCN_8owJ2T95QA6oRkKTOmlLvS_20G5HzRhVpCrfzfOIrvZX4WykCJd2wue5ee2QOw4y6Hkqh8q09IAAg8NkcU3_rWeUPcEjutszx3ujmNDleR18UbxyWcIDMLLIE')" }}
                ></div>
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-background-dark/50 to-transparent"></div>
            </div>
            {/* Hero Content */}
            <div className="relative z-10 flex min-h-[500px] flex-col justify-end px-6 py-12 sm:px-12 sm:py-16 text-center sm:text-left">
                <div className="max-w-2xl">
                    <span className="mb-3 inline-block rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary backdrop-blur-sm">
                        New Collection
                    </span>
                    <h1 className="mb-4 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                        Intimacy,<br />Reimagined.
                    </h1>
                    <p className="mb-8 text-lg font-medium text-slate-300 sm:text-xl">
                        Curated pleasure products for the modern lifestyle. Elegant, body-safe, and always discreetly shipped.
                    </p>
                    <div className="flex flex-col gap-4 sm:flex-row">
                        <button className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-sm font-bold text-white transition-all hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(236,19,128,0.4)] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-dark">
                            Explore the Collection
                        </button>
                        <button className="inline-flex h-12 items-center justify-center rounded-lg border border-slate-600 bg-transparent px-8 text-sm font-bold text-white transition-colors hover:bg-white/10 focus:outline-none">
                            View Lookbook
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
