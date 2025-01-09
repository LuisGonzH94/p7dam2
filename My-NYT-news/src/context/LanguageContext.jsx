import React, { createContext, useState, useContext } from 'react';

// Crear el contexto
const LanguageContext = createContext();

// Proveedor del contexto
export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en'); // Idioma predeterminado: ingles

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

// Hook para usar el contexto
export const useLanguage = () => useContext(LanguageContext);