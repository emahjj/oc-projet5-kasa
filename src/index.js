import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import Information from './Pages/Infos';
import Error from './components/Error';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Router>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Accueil" element={<Home />} />
        <Route path="/Apropos" element={<Information />} />
        <Route path="*" element={<Error />} />
    </Routes>
  </Router>
);
