import { createRoot } from 'react-dom/client';
import React from 'react';
import './styles/app.css';

// Import components
import Header from './react/components/layout/Header';
import Footer from './react/components/layout/Footer';
import Hero from './react/components/home/Hero';
import Categories from './react/components/home/Categories';
import Bestsellers from './react/components/home/Bestsellers';
import Education from './react/components/home/Education';
import Newsletter from './react/components/home/Newsletter';

function Home() {
    return (
        <>
            <Header />
            <main className="flex-1">
                <div className="mx-auto max-w-[960px] px-4 sm:px-6 lg:px-8 py-6">
                    <Hero />
                    <Categories />
                    <Bestsellers />
                    <Education />
                    <Newsletter />
                </div>
            </main>
            <Footer />
        </>
    );
}

// Initialization
console.log('Script de vite/react cargado, montando aplicación...');
const rootElement = document.getElementById('react-app');

if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<Home />);
    console.log('React montado con éxito en #react-app');
} else {
    console.error('ERROR CRÍTICO: No se encontró el elemento #react-app en el DOM');
}
