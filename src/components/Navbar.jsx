import React from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="w-4/5 m-auto flex justify-between items-center py-5">
      <Link to="/">
        <motion.h1 
          whileHover={{ scale: 1.2 }} 
          whileTap={{ scale: 0.95 }} 
          className="text-3xl bg-yellow-400 px-4 py-1 rounded-lg font-bold"
        >
          StockPro
        </motion.h1>
      </Link>
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, staggerChildren: 0.1 }}
        className="hidden md:flex items-center space-x-5"
      >
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <a href="#pricing">Servicios</a>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <a href="#stats">Características</a>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <a href="#insights">Nuestro Equipo</a>
        </motion.li>
      </motion.ul>
      <Link to="/register">
        <motion.button 
          whileHover={{ scale: 1.2 }} 
          whileTap={{ scale: 0.9 }}
          className="px-5 py-2 border border-black hover:bg-yellow-400 hover:text-white font-semibold rounded-full"
        >
          Registro
        </motion.button>
      </Link>
    </div>
  );
};

export default Navbar;