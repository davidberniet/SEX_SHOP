import React from 'react';

const Footer = () => {
    return (
        <footer className="mt-12 border-t border-border-dark pt-8 pb-8 text-center text-sm text-slate-500">
            <div className="flex flex-wrap justify-center gap-6 mb-6">
                <a className="hover:text-primary cursor-pointer" onClick={(e) => e.preventDefault()}>Shipping & Returns</a>
                <a className="hover:text-primary cursor-pointer" onClick={(e) => e.preventDefault()}>FAQ</a>
                <a className="hover:text-primary cursor-pointer" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
                <a className="hover:text-primary cursor-pointer" onClick={(e) => e.preventDefault()}>Contact Us</a>
            </div>
            <p>© 2026 Velvet & Vine. All rights reserved. 18+</p>
        </footer>
    );
};

export default Footer;
