import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
    const textVariant = {
        hidden: { opacity: 0, x: -100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeInOut",
            },
        },
    };

    const buttonVariant = {
        hidden: { opacity: 0, x: -100 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.2,
                duration: 0.8,
            },
        },
    };

    const imageVariant = {
        hidden: { opacity: 0, x: -100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.4,
                ease: "easeInOut",
            },
        },
    };

    return (
        <div className="space-y-5 py-10 w-4/5 m-auto flex flex-col md:flex-row">
            <div className="w-full space-y-3 space-x-3">
                <motion.h1
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.5 }}
                    variants={textVariant}
                    className="py-5 text-6xl md:text-5xl font-bold"
                >
                    ¡Toma la mejor opción!
                </motion.h1>
                <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.5 }}
                    variants={textVariant}
                    className="text-justify w-4/5 text-3xl md:text-lg"
                >
                    Con StockPro los problemas del manejo de inventario son
                    cosa del pasado.
                </motion.p>
                <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.5 }}
                    variants={textVariant}
                    className="text-justify w-4/5 text-2xl md:text-lg"
                >
                    Somos la mejor opción en aplicaciones de administración de
                    inventario y gestión de proveedores.
                </motion.p>
                <div className="flex justify-center">
                    <motion.a
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.5 }}
                        variants={buttonVariant}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="px-5 py-2 border border-black hover:bg-yellow-400 hover:text-white font-semibold rounded-full"
                    >
                        Registrarse
                    </motion.a>
                </div>
            </div>
            <div className="w-full md:w-1/2">
                <motion.img
                    src="src/assets/stock.jpg"
                    alt=""
                    className="rounded-lg h-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.5 }}
                    variants={imageVariant}
                    whileHover={{ scale: 1.2 }}
                />
            </div>
        </div>
    );
};

export default Hero;