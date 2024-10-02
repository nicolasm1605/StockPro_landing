import React from 'react'
import { motion } from 'framer-motion';
import BeneficiosImage from '../assets/beneficios.jpg';
const Stats = () => {
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
  return(
    <div className='py-5 '>
      <div className='w-4/5 space-y-5 m-auto flex flex-col md:flex-row items-center justify-between md:space-y-0'>
        <div className='w-full md:w-1/3'> 
          <motion.img 
            src={BeneficiosImage} alt="" className="w-full rounded-lg h-auto" 
            initial="hidden" whileInView="visible" viewport={{amount:0.5}} variants={imageVariant} whileHover={{ scale: 1.1 }} 
          />
        </div>
        <div className='md:w-1/2 space-y-8'>
          <motion.h1 initial="hidden" whileInView="visible"viewport={{amount:0.5}} variants={textVariant}
          className="text-4xl md:text-6xl font-bold"> Optimiza tu negocio</motion.h1>
          <motion.p initial="hidden" whileInView="visible"viewport={{amount:0.5}} variants={textVariant}
          className="md:text-2xl ">
            Simplifica el manejo de tu inventario y ahorra tiempo con nuestra app diseñada específicamente para bares y restaurantes.
          </motion.p>
          <motion.p initial="hidden" whileInView="visible"viewport={{amount:0.5}} variants={textVariant}
          className="md:text-2xl ">
            Los restaurantes que no usan sistemas automatizados para gestionar inventarios pierden capital en costos operativos debido a errores humanos y mala gestión. Esto impacta directamente en la rentabilidad del negocio
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
