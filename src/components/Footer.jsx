import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-5">
      <div className="container mx-auto text-center space-y-">
        <div>
        <motion.h1 whileHover={{scale:1.1}} className="text-3xl bg-yellow-400 px-4 py-1 rounded-lg font-bold">StockPro</motion.h1>
          <p className="text-sm">
            © {new Date().getFullYear()} Todos los derechos reservados.
          </p>
        </div>

        <div className="flex justify-center space-x-6">
          <Link to="/">
            <a href="#" className="hover:text-gray-400">Inicio</a>
          </Link>
          
          <a href="#" className="hover:text-gray-400">Servicios</a>
          <a href="#" className="hover:text-gray-400">Contacto</a>
          console.log("hola mundo");
        </div>

        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:text-gray-400">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="hover:text-gray-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-gray-400">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="hover:text-gray-400">
            <i className="fab fa-linkedin"></i>
          </a>
          <p></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;