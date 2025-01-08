import React from "react";
import Navbar from "./components/Navbar";
import SearchDialog from './components/SearchDialog';

import './assets/chomsky-webfont/style.css';

function Header() {
    return (
        <header>
            <div className="banner">
                <div style={{ lineHeight: '0.5' }}>
                    <span>{new Date().toLocaleDateString()}</span>
                    <p>Today's Paper</p>
                </div>
                <h1
                    style={{
                        fontFamily: "Chomsky Regular",
                        fontSize: "3.5rem",
                        letterSpacing: "2px",
                        fontWeight: "500",
                    }}
                >
                    The New York Times
                </h1>
                <DialogDisplay />
            </div>
            <Navbar />
        </header>
    );
}

function DialogDisplay() {
    const openDialog = () => {
        const dialog = document.getElementById('search-dialog');
        if (dialog) dialog.showModal();
    };

    const closeDialog = () => {
        const dialog = document.getElementById('search-dialog');
        if (dialog) dialog.close();
    };

    return (
        <>
            <button onClick={openDialog}>Search</button>
            <dialog id="search-dialog">
                <SearchDialog onClose={closeDialog} />
            </dialog>
        </>
    );
}

export default Header;