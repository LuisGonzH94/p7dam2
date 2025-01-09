// import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client';

//import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import App from './App.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <LanguageProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </LanguageProvider>
);