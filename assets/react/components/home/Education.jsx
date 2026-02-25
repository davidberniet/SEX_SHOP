import React from 'react';

const Education = () => {
    return (
        <section className="mt-16 rounded-xl bg-surface-dark px-6 py-12 md:px-12">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                <div>
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">Pleasure with Confidence</h2>
                    <p className="mb-6 text-slate-300">
                        We believe sexual wellness is a vital part of a healthy lifestyle. Our products are body-safe, curated by experts, and delivered with the utmost discretion.
                    </p>
                    <ul className="mb-8 space-y-4">
                        <li className="flex items-start gap-3">
                            <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>check</span>
                            </span>
                            <span className="text-sm text-slate-300"><strong>100% Body-Safe Materials:</strong> Medical grade silicone and free from phthalates.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>check</span>
                            </span>
                            <span className="text-sm text-slate-300"><strong>Discrete Packaging:</strong> Plain boxes with no branding on the outside.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>check</span>
                            </span>
                            <span className="text-sm text-slate-300"><strong>Expert Guides:</strong> Educational resources to help you explore safely.</span>
                        </li>
                    </ul>
                    <a className="inline-flex items-center gap-2 font-bold text-primary hover:underline cursor-pointer" onClick={(e) => e.preventDefault()}>
                        Read our Wellness Guide
                        <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
                    </a>
                </div>
                <div className="relative aspect-video overflow-hidden rounded-lg md:aspect-auto md:h-80">
                    <div
                        className="h-full w-full bg-cover bg-center"
                        data-alt="Abstract soft lighting on skin texture"
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC1CAhFvsB-oIinKp-Nglt8jK43Gkif_FaZ7GlBMYC3N_DWNnM7HYkRuvn0DoL4pIftC9QzfKLQxMEQ3TJnfMHFrcR15mkqKvRl8s7Wa1KiK01VypgiSGNSGPMp2O-MyQO4EM-l6uV1T1jtd5ZwWoe3fD3j1SBeT9YnTsMWtT3Qkbpyy3skneHviYriazvk7lUUXCVgnsKGTxOlZM_ZYGmwa3-WGOCf8TI_Gk3EeUMEpxehBqELUZJfNdCn4aSMlmFU-z6q0a66XWY')" }}
                    ></div>
                </div>
            </div>
        </section>
    );
};

export default Education;
