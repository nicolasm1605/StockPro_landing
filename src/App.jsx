import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Insights from './components/Insights';
import Stats from './components/Stats';
import Pricing from './components/Pricing';
import RegisterForm from './components/RegisterForm';
import backgroundImage from './assets/background.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div
      className="bg-cover"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Navbar />

      {/* Definición de las rutas */}
      <Routes>
        {/* Ruta para la página principal */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <section id="insights">
                <Insights />
              </section>
              <section id="stats">
                <Stats />
              </section>
              <section id="pricing">
                <Pricing />
              </section>
            </>
          }
        />

        {/* Ruta para la página de registro */}
        <Route path="/register" element={<RegisterForm />} />

        {/* Redirección para cualquier ruta no definida a la página principal */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      {/* Footer en todas las páginas */}
      <Footer />
    </div>
  );
}

export default function Wrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
