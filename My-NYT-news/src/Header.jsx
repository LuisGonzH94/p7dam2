import React from "react";
import Navbar from "./components/Navbar";
import SearchDialog from './components/SearchDialog';

import { useLanguage } from './context/LanguageContext';

import './assets/chomsky-webfont/style.css';

function Header() {
    const { language } = useLanguage();

    const today = new Date();
    const formatDate = (date, lang) => {
        const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
        return new Intl.DateTimeFormat(lang, options).format(date);
    };

    return (
        <header>
            <div className="banner">
                <div style={{ lineHeight: '0.5' }}>
                    <span className="date">{formatDate(today, language)}</span>
                    <p className="date">Today's Paper</p>
                </div>
                <h1 style={{ fontFamily: 'Chomsky Regular', letterSpacing: '2px', fontWeight: '500' }}>
                    The New York Times
                </h1>
                <DialogDisplay />
            </div>
            <Navbar />
        </header>
    );
}

function DialogDisplay() {
    const openDialog = () => document.getElementById('search-dialog')?.showModal();
    const closeDialog = () => document.getElementById('search-dialog')?.close();

    return (
        <>
            <button className="search-btn" onClick={openDialog}>🔍</button>
            <dialog id="search-dialog">
                <SearchDialog onClose={closeDialog} />
            </dialog>
        </>
    );
}

export default Header;