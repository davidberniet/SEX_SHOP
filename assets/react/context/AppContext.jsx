import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
    const [cartCount, setCartCount] = useState(0);

    const addToCart = (product) => {
        setCartCount(prev => prev + 1);
        console.log("Añadido al carrito:", product.name);
    };

    return (
        <AppContext.Provider value={{ cartCount, addToCart }}>
            {children}
        </AppContext.Provider>
    );
}

export function useApp() {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useApp debe ser usado dentro de un AppProvider');
    }
    return context;
}
