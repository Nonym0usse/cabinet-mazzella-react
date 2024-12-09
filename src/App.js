import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Header';
import Soins from './pages/Soins';
import Cabinet from './pages/Cabinet';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Team from './pages/Team';
import Sitemap from './pages/Sitemap';
import MentionsLegales from './pages/MentionsLegales';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar /> {/* Add Navbar here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/soins" element={<Soins />} />
          <Route path="/cabinet" element={<Cabinet />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/equipe" element={<Team />} />
          <Route path="/plandusite" element={<Sitemap />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;