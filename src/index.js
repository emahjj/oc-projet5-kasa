import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './utils/style/main.scss';
import './utils/style/variables.scss';
import Home from './pages/Home/index.jsx';
import Fiche from './pages/Fiche/index.jsx';
import Information from './pages/Infos';
import Error from './components/Error';
import Header from './components/Header';
import Footer from './components/Footer';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Router>
    <Header />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/a-propos" element={<Information />} />
        <Route path="/fiche-logement" element={<Fiche />} />
        <Route path="/fiche-logement/:id" element={<Fiche />} />
        <Route path="*" element={<Error />} />
    </Routes>
    <Footer />
  </Router>
);