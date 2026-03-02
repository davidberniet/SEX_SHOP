import React from 'react';

const Footer = () => {
    return (
        <footer className="mt-12 border-t border-border-dark pt-8 pb-8 text-center text-sm text-slate-500">
            <div className="flex flex-wrap justify-center gap-6 mb-6">
                <a className="hover:text-primary cursor-pointer" onClick={(e) => e.preventDefault()}>Envíos y Devoluciones</a>
                <a className="hover:text-primary cursor-pointer" onClick={(e) => e.preventDefault()}>Preguntas Frecuentes</a>
                <a className="hover:text-primary cursor-pointer" onClick={(e) => e.preventDefault()}>Política de Privacidad</a>
                <a className="hover:text-primary cursor-pointer" onClick={(e) => e.preventDefault()}>Contacto</a>
            </div>
            <p>© 2026 LujuSex. All rights reserved. 18+</p>
        </footer>
    );
};

export default Footer;
