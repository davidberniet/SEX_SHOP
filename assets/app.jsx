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
import { CatalogPage } from './react/pages/CatalogPage';
import { ProductPage } from './react/pages/ProductPage';
import { ProfilePage } from './react/pages/ProfilePage';
import { ContactPage } from './react/pages/ContactPage';
import { CartDrawer } from './react/components/layout/CartDrawer';
import { AppProvider } from './react/context/AppContext';
import { useState } from 'react';

function App() {
    const [route, setRoute] = useState('home');
    const [routeParams, setRouteParams] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const navigate = (newRoute, params = null) => {
        setRoute(newRoute);
        setRouteParams(params);
        if (newRoute === 'product' && params) {
            setSelectedProduct(params);
        }
        window.scrollTo(0, 0);
    };

    return (
        <AppProvider>
            <Header onNavigate={navigate} />
            <main className="flex-1">
                {route === 'home' && (
                    <div className="mx-auto max-w-[960px] px-4 sm:px-6 lg:px-8 py-6">
                        <Hero />
                        <Categories />
                        <Bestsellers />
                        <Education />
                        <Newsletter />
                    </div>
                )}
                {route === 'catalog' && (
                    <CatalogPage onNavigate={navigate} routeParams={routeParams} />
                )}
                {route === 'product' && (
                    <ProductPage productId={selectedProduct} onBack={() => navigate('catalog')} />
                )}
                {route === 'profile' && (
                    <ProfilePage />
                )}
                {route === 'contact' && (
                    <ContactPage />
                )}
            </main>
            <Footer />
            <CartDrawer />
        </AppProvider>
    );
}

// Initialization
console.log('Script de vite/react cargado, montando aplicación...');
const rootElement = document.getElementById('react-app');

if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<App />);
    console.log('React montado con éxito en #react-app');
} else {
    console.error('ERROR CRÍTICO: No se encontró el elemento #react-app en el DOM');
}
