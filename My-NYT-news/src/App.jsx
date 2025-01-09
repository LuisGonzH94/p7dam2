import { Routes, Route } from 'react-router-dom';
import { useLanguage } from './context/LanguageContext';

//Import the 'function name' from a 'file'
import Home from './pages/Home';
import Article from './pages/Article';
import Category from './pages/Category';

import Header from './Header';
import './App.css'

function App() {
  const { setLanguage } = useLanguage();

  return (
      <div className="App">
          {/* Opciones de idioma */}
          <div className="language-options">
              <button onClick={() => setLanguage('en')}>EN</button>
              <button onClick={() => setLanguage('es')}>ES</button>
              <button onClick={() => setLanguage('fr')}>FR</button>
              <button onClick={() => setLanguage('pt')}>PT</button>
              <button onClick={() => setLanguage('it')}>IT</button>
              <button onClick={() => setLanguage('ch')}>CH</button>
          </div>

          {/* Cabecera */}
          <Header />

          {/* Rutas */}
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/news/:id" element={<Article />} />
              <Route path="/:category" element={<Category />} />
          </Routes>
      </div>
  );
}

export default App;
