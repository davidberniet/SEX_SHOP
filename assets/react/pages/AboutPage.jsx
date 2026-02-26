import React from 'react';

export function AboutPage() {
    return (
        <div className="min-h-screen bg-background-dark py-12">
            {/* Hero Section */}
            <section className="container mx-auto px-4 lg:px-8 mb-24 cursor-default">
                <div className="relative rounded-3xl overflow-hidden bg-surface-dark border border-border-dark flex flex-col md:flex-row shadow-2xl">
                    <div className="md:w-3/5 h-[400px] md:h-[500px] bg-[url('/assets/images/pattern-dark.png')] bg-cover relative">
                        {/* Placeholder image representation for the group photo */}
                        <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px] flex items-center justify-center">
                            <span className="material-symbols-outlined text-white/50 text-8xl">groups</span>
                        </div>
                    </div>
                    <div className="md:w-2/5 p-10 md:p-16 flex flex-col justify-center bg-gradient-to-br from-[#241a1f] to-background-dark relative">
                        {/* Decorative glow */}
                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-primary opacity-10 blur-3xl"></div>
                        
                        <h1 className="text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight relative z-10">
                            Únete<br /><span className="text-primary text-3xl lg:text-4xl mt-2 block">al equipo</span>
                        </h1>
                        <p className="text-lg text-slate-300 font-medium leading-relaxed max-w-sm relative z-10 mb-6">
                            Sexshop discreto con la mejor selección de marcas del mundo.
                        </p>
                        <p className="text-sm text-slate-400 relative z-10">
                            Creemos que el placer debe ser libre, seguro y accesible. Buscamos el mejor talento para potenciar el bienestar íntimo y dar rienda suelta a las fantasías.
                            <br /><br />
                            <strong className="text-primary font-bold block">¿Te sumas a la revolución?</strong>
                        </p>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="container mx-auto px-4 lg:px-8 mb-24 cursor-default text-center">
                <h2 className="text-3xl font-black text-white mb-16">Cuáles son nuestros valores</h2>
                
                <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16">
                    {/* Val 1 */}
                    <div className="flex flex-col items-center max-w-[120px]">
                        <div className="size-24 rounded-full bg-surface-dark border border-border-dark flex flex-col items-center justify-center text-primary mb-4 shadow-[0_0_20px_rgba(236,19,128,0.15)] hover:bg-primary/10 transition-colors transform hover:-translate-y-2 duration-300">
                            <span className="material-symbols-outlined text-4xl mb-1">diversity_3</span>
                        </div>
                        <span className="text-sm font-bold text-slate-200">Confianza y<br/>Diversidad</span>
                    </div>
                    {/* Val 2 */}
                    <div className="flex flex-col items-center max-w-[120px]">
                        <div className="size-24 rounded-full bg-surface-dark border border-border-dark flex flex-col items-center justify-center text-primary mb-4 shadow-[0_0_20px_rgba(236,19,128,0.15)] hover:bg-primary/10 transition-colors transform hover:-translate-y-2 duration-300">
                            <span className="material-symbols-outlined text-4xl mb-1">volunteer_activism</span>
                        </div>
                        <span className="text-sm font-bold text-slate-200">Libertad de<br/>Placer</span>
                    </div>
                    {/* Val 3 */}
                    <div className="flex flex-col items-center max-w-[120px]">
                        <div className="size-24 rounded-full bg-surface-dark border border-border-dark flex flex-col items-center justify-center text-primary mb-4 shadow-[0_0_20px_rgba(236,19,128,0.15)] hover:bg-primary/10 transition-colors transform hover:-translate-y-2 duration-300">
                            <span className="material-symbols-outlined text-4xl mb-1">public</span>
                        </div>
                        <span className="text-sm font-bold text-slate-200">Impacto<br/>Global</span>
                    </div>
                    {/* Val 4 */}
                    <div className="flex flex-col items-center max-w-[120px]">
                        <div className="size-24 rounded-full bg-surface-dark border border-border-dark flex flex-col items-center justify-center text-primary mb-4 shadow-[0_0_20px_rgba(236,19,128,0.15)] hover:bg-primary/10 transition-colors transform hover:-translate-y-2 duration-300">
                            <span className="material-symbols-outlined text-4xl mb-1">favorite</span>
                        </div>
                        <span className="text-sm font-bold text-slate-200">Pasión<br/>Alegre</span>
                    </div>
                    {/* Val 5 */}
                    <div className="flex flex-col items-center max-w-[120px]">
                        <div className="size-24 rounded-full bg-surface-dark border border-border-dark flex flex-col items-center justify-center text-primary mb-4 shadow-[0_0_20px_rgba(236,19,128,0.15)] hover:bg-primary/10 transition-colors transform hover:-translate-y-2 duration-300">
                            <span className="material-symbols-outlined text-4xl mb-1">verified_user</span>
                        </div>
                        <span className="text-sm font-bold text-slate-200">Calidad<br/>Segura</span>
                    </div>
                </div>
                
                <p className="text-sm text-slate-400 max-w-2xl mx-auto mt-12 leading-relaxed">
                    Nuestros valores marcan el camino. Defendemos la educación en todas las edades para que generaciones futuras crezcan en un entorno más empático, seguro y libre de estigmas a nivel mundial.
                </p>
            </section>

            {/* CTA Section */}
            <section className="container mx-auto px-4 lg:px-8 mb-24 cursor-default text-center">
                <h2 className="text-3xl font-black text-white mb-4">Únete al equipo</h2>
                <p className="text-slate-400 mb-8 max-w-lg mx-auto">
                    ¿Te resuena lo que lees? Queremos saber de ti. Echa un vistazo a nuestras ofertas de empleo.
                </p>
                <button type="button" onClick={() => window.location.href='/contact'} className="rounded-full bg-primary px-8 py-3 text-sm font-bold text-white hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 hover:-translate-y-1 transform">
                    Ver posiciones abiertas
                </button>
            </section>

            {/* Video Section */}
            <section className="container mx-auto px-4 lg:px-8 mb-24 cursor-default text-center">
                <h2 className="text-3xl font-black text-white mb-10">Ayúdanos a romper tabúes</h2>
                <div className="max-w-4xl mx-auto bg-surface-dark aspect-video rounded-3xl border border-border-dark shadow-2xl flex items-center justify-center relative overflow-hidden group">
                    <video 
                        src="https://www.platanomelon.com/cdn/shop/videos/c/vp/b0db336e7de54a1ea10144e9d9c9089d/b0db336e7de54a1ea10144e9d9c9089d.HD-1080p-7.2Mbps.mp4?v=0" 
                        className="w-full h-full object-cover"
                        controls 
                        autoPlay 
                        muted 
                        loop
                    ></video>
                </div>
            </section>

            {/* Team Grid */}
            <section className="container mx-auto px-4 lg:px-8 mb-16 cursor-default text-center">
                <h2 className="text-3xl font-black text-white mb-4">Conoce a nuestro equipazo</h2>
                <p className="text-slate-400 mb-12 max-w-lg mx-auto">
                    A tu disposición y siempre orientados en ofrecer a nuestros clientes su experiencia integral y dedicados.
                </p>

                <div className="flex flex-wrap justify-center gap-8 md:gap-14">
                    {/* Person 1 */}
                    <div className="flex flex-col items-center max-w-[200px] text-center">
                        <div className="size-32 md:size-48 rounded-full border-4 border-primary/20 bg-surface-dark mb-4 overflow-hidden relative shadow-lg shadow-black/50 hover:border-primary transition-colors">
                            <img src="/assets/images/equipo-berlanga.jpg" alt="Berlanga" className="w-full h-full object-cover" onError={(e) => { e.target.onerror = null; e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2364748b'%3E%3Cpath d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/%3E%3C/svg%3E" }} />
                        </div>
                        <h4 className="font-bold text-white text-lg">Berlanga</h4>
                        <span className="text-xs text-primary uppercase tracking-widest mt-1 font-bold">CEO</span>
                        <p className="text-sm text-slate-400 mt-2">Experto en juguetes y CSS</p>
                    </div>

                    {/* Person 2 */}
                    <div className="flex flex-col items-center max-w-[200px] text-center">
                        <div className="size-32 md:size-48 rounded-full border-4 border-primary/20 bg-surface-dark mb-4 overflow-hidden relative shadow-lg shadow-black/50 hover:border-primary transition-colors">
                            <img src="/assets/images/equipo-juandi.jpg" alt="Juandi" className="w-full h-full object-cover" onError={(e) => { e.target.onerror = null; e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2364748b'%3E%3Cpath d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/%3E%3C/svg%3E" }} />
                        </div>
                        <h4 className="font-bold text-white text-lg">Juandi</h4>
                        <span className="text-xs text-primary uppercase tracking-widest mt-1 font-bold">CEO</span>
                        <p className="text-sm text-slate-400 mt-2">Experto en lencería y PHP</p>
                    </div>
                    
                    {/* Person 3 */}
                    <div className="flex flex-col items-center max-w-[200px] text-center">
                        <div className="size-32 md:size-48 rounded-full border-4 border-primary/20 bg-surface-dark mb-4 overflow-hidden relative shadow-lg shadow-black/50 hover:border-primary transition-colors">
                            <img src="/assets/images/equipo-hugo.jpg" alt="Hugo" className="w-full h-full object-cover" onError={(e) => { e.target.onerror = null; e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2364748b'%3E%3Cpath d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/%3E%3C/svg%3E" }} />
                        </div>
                        <h4 className="font-bold text-white text-lg">Hugo</h4>
                        <span className="text-xs text-primary uppercase tracking-widest mt-1 font-bold">CEO</span>
                        <p className="text-sm text-slate-400 mt-2">Experto en chochitos y Nginx</p>
                    </div>

                    {/* Person 4 */}
                    <div className="flex flex-col items-center max-w-[200px] text-center">
                        <div className="size-32 md:size-48 rounded-full border-4 border-primary/20 bg-surface-dark mb-4 overflow-hidden relative shadow-lg shadow-black/50 hover:border-primary transition-colors">
                            <img src="/assets/images/equipo-fer.jpg" alt="Fer" className="w-full h-full object-cover" onError={(e) => { e.target.onerror = null; e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2364748b'%3E%3Cpath d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/%3E%3C/svg%3E" }} />
                        </div>
                        <h4 className="font-bold text-white text-lg">Fer</h4>
                        <span className="text-xs text-primary uppercase tracking-widest mt-1 font-bold">CEO</span>
                        <p className="text-sm text-slate-400 mt-2">Experto en muñecas y JavaScript</p>
                    </div>
                </div>

            </section>
        </div>
    );
}
