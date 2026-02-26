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
                    <div className="flex flex-col items-center">
                        <div className="size-32 md:size-40 rounded-full border-2 border-primary/20 bg-surface-dark p-2 mb-4 overflow-hidden relative shadow-lg shadow-black/50">
                            <div className="absolute inset-2 rounded-full bg-border-dark flex items-center justify-center">
                                <span className="material-symbols-outlined text-5xl text-slate-500">face_2</span>
                            </div>
                        </div>
                        <h4 className="font-bold text-white">Sara Gómez</h4>
                        <span className="text-xs text-slate-400 uppercase tracking-widest mt-1">Founding Director</span>
                    </div>

                    {/* Person 2 */}
                    <div className="flex flex-col items-center">
                        <div className="size-32 md:size-40 rounded-full border-2 border-primary/20 bg-surface-dark p-2 mb-4 overflow-hidden relative shadow-lg shadow-black/50">
                            <div className="absolute inset-2 rounded-full bg-border-dark flex items-center justify-center">
                                <span className="material-symbols-outlined text-5xl text-slate-500">face</span>
                            </div>
                        </div>
                        <h4 className="font-bold text-white">Miguel Torres</h4>
                        <span className="text-xs text-slate-400 uppercase tracking-widest mt-1">CEO</span>
                    </div>
                </div>

                <div className="mt-10 mb-10 h-px w-24 bg-border-dark mx-auto"></div>
                <p className="text-xs uppercase tracking-widest text-primary font-bold mb-10">Con el apoyo siempre de un C-Group de primera</p>

                <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                    <div className="flex flex-col items-center">
                        <div className="size-24 md:size-28 rounded-full border border-border-dark bg-surface-dark mb-3 flex items-center justify-center overflow-hidden">
                             <span className="material-symbols-outlined text-4xl text-slate-600">face</span>
                        </div>
                        <h4 className="font-bold text-slate-200 text-sm">Raúl Muñoz</h4>
                        <span className="text-[10px] text-slate-500 uppercase tracking-wide mt-1">CFO / Growth</span>
                    </div>
                    
                    <div className="flex flex-col items-center">
                        <div className="size-24 md:size-28 rounded-full border border-border-dark bg-surface-dark mb-3 flex items-center justify-center overflow-hidden">
                             <span className="material-symbols-outlined text-4xl text-slate-600">face_3</span>
                        </div>
                        <h4 className="font-bold text-slate-200 text-sm">Celia Segura</h4>
                        <span className="text-[10px] text-slate-500 uppercase tracking-wide mt-1">Brand Strategy</span>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="size-24 md:size-28 rounded-full border border-border-dark bg-surface-dark mb-3 flex items-center justify-center overflow-hidden">
                             <span className="material-symbols-outlined text-4xl text-slate-600">face_4</span>
                        </div>
                        <h4 className="font-bold text-slate-200 text-sm">Antonia Moreno</h4>
                        <span className="text-[10px] text-slate-500 uppercase tracking-wide mt-1">Sales Director</span>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="size-24 md:size-28 rounded-full border border-border-dark bg-surface-dark mb-3 flex items-center justify-center overflow-hidden">
                             <span className="material-symbols-outlined text-4xl text-slate-600">face_5</span>
                        </div>
                        <h4 className="font-bold text-slate-200 text-sm">Carlota Ruíz</h4>
                        <span className="text-[10px] text-slate-500 uppercase tracking-wide mt-1">People / HR</span>
                    </div>
                </div>

            </section>
        </div>
    );
}
