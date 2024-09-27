import React from "react";
import { motion } from "framer-motion";
const Navbar = () =>{
    return <div className="w-4/5 m-auto flex justify-between items-center py-5">
        <h1 className="text-3xl font-bold">StockPro</h1>
        <motion.ul
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:0.4, staggerChildren:0.1}}
         className="hidden md:flex items-center space-x-5">
            <motion.li whileHover={{scale:1.1}} whileTap={{scale:0.95}}>
                <a href="#">Portafolio</a>
            </motion.li>
            <motion.li whileHover={{scale:1.1}} whileTap={{scale:0.95}}>
                <a href="#">Nuestro Equipo</a>
            </motion.li>
            <motion.li whileHover={{scale:1.1}} whileTap={{scale:0.95}}>
                <a href="#">Careers</a>
            </motion.li>
            <motion.li whileHover={{scale:1.1}} whileTap={{scale:0.95}}>
                <a href="#">Acerca de</a>
            </motion.li>
        </motion.ul>
        <motion.button whileHover={{scale:1.2}} whileTap={{scale:0.9}}
        className="px-5 py-2 border border-black hover:bg-yellow-400 hover:text-white font-semibold rounded-full">
            Registro
        </motion.button>
    </div>;
};

export default Navbar;