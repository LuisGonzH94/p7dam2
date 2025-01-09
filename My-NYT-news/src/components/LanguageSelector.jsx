import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSelector = () => {

    const { language, setLanguage } = useLanguage();

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
    };

    return (
        <div>
            <select value={language} onChange={handleLanguageChange}>
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
                <option value="pt">Português</option>
                <option value="it">Italiano</option>
                <option value="ch">中文</option>
            </select>
        </div>
    );
};

export default LanguageSelector;
