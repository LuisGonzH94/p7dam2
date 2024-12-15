//import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom';

//Import the 'function name' from a 'file'
import Home from './pages/Home';  
import Article from './pages/Article';
import Category from './pages/Category';

import Header from './Header';
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news/:id" element={<Article />} />
        <Route path="/:category" element={<Category />} />
      </Routes>
    </div>
  );
}

export default App
