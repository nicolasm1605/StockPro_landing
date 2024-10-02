import React from 'react'
import { motion } from 'framer-motion';
import TratoImage from "../assets/trato.jpg";
import { Link } from 'react-router-dom';

const Pricing = () => {
  const textVariant = {
    hidden:{ opacity: 0, x: -100},
    visible:{
        opacity:1,
        x:0,
        transition: {
            duration:0.8,
            ease:"easeInOut",
        },
    },
  };

  const buttonVariant={
      hidden:{ opacity: 0, x: -100},
      visible:{
          opacity: 1,
          transition: {
              delay: 0.2,
              duration: 0.8,
          },
      },
  };

  const imageVariant = {
      hidden:{ opacity: 0, x: -100},
      visible:{
          opacity:1,
          x:0,
          transition: {
              duration:0.4,
              ease:"easeInOut",
          },
      },
  };
  return (
    <div className='py-10 w-4/5 m-auto flex flex-col md:flex-row justify-between items-center space-y-1 md:space-y-0'>
      <div className='md:w-1/2 space-y-5'>
        <motion.h1 initial="hidden" whileInView="visible"viewport={{amount:0.5}} variants={textVariant}
        className='text-4xl md:text-4xl font-bold'>Aumenta la eficiencia de tu negocio con StockPro</motion.h1>
        <motion.p initial="hidden" whileInView="visible"viewport={{amount:0.5}} variants={textVariant}
        className='text-xl text-gray-600 text-justify'>StockPro ofrece una solución integral que no solo gestiona inventarios
          en tiempo real desde múltiples dispositivos móviles, 
          sino que también optimiza la relación con los proveedores.
          Los meseros pueden hacer pedidos directamente desde la app, 
          actualizando el stock automáticamente, lo que elimina el error 
          humano y reduce tiempos de espera. Además, los administradores 
          tienen acceso a un historial detallado de proveedores, permitiéndoles
           tomar decisiones informadas basadas en datos.</motion.p>
        <div className='  '>
          <h3 className='text-2xl Font-bold'>$59.900cop /mes</h3>
        </div>
        
        <div className='flex justify-center px-10'>
          <Link to="/register">
            <motion.button initial="hidden" whileInView="visible" viewport={{amount:0.5}} variants={buttonVariant} whileHover={{scale:1.1}} whileTap={{scale:0.9}}
              className="space-x-10 px-5 py-2 border border-black bg-yellow-400 hover:text-white font-semibold rounded-full ">
              Registrate ahora </motion.button>
          </Link>
        </div>
        
      </div>
      <div className='px-10'>
        <motion.img src={TratoImage} alt="" className='rounded-lg w-auto h-auto'
        initial="hidden" whileInView="visible" viewport={{amount:0.5}} variants={imageVariant} whileHover={{ scale: 1.1 }}/>
      </div>
      
    </div>
  );
};

export default Pricing;
