import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Insights from './components/Insights';
import Stats from './components/Stats';
import Pricing from './components/Pricing';
import backgroundImage from './assets/background.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Importa el componente del formulario de registro
import RegisterForm from './components/RegisterForm';

function App() {
  return (
    <Router>
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
                <section id="insights">  {/* ID para el componente de Insights */}
                  <Insights/>
                </section>
                <section id="stats">  {/* ID para el componente de Stats */}
                  <Stats/>
                </section>
                <section id="pricing">  {/* ID para el componente de Pricing */}
                  <Pricing/>
                </section>

              </>
            }
          />
          
          {/* Ruta para la página de registro */}
          <Route path="/register" element={<RegisterForm />} />
        </Routes>

        {/* Footer  en todas las páginas */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;