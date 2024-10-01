import React from "react";
import { motion } from "framer-motion";
const Insights = () => {
    return (
        <div className="w-4/5 m-auto py-20 flex flex-col md:flex-row justify-between space-x-5 space-y-10 md:space-y-0">
            <div className="md:w-1/3 space-y-4">
                <h2 className="text-3xl font-bold"> Nuestro Equipo</h2>
                <p >Contamos con un equipo altamente calificado para desarrollar 
                    y mantener la aplicacion con el mas optimo rendimiento.</p>
                
            </div>
            <div className="flex items-center space-x-5">
                <div>
                    <motion.img src="src\assets\JuanCarlos.jpeg" alt="" className="w-16 h-16 rounded-full border-4" whileHover={{scale:1.2}}/>
                    <div>
                        <h1 className="font-bold text-lg">Juan carlos Guzman</h1>
                        <p className="text-sm text-gray-600">Ceo , Arquitecto de software, Ingeniero en sistemas y computacion</p>
                    </div> 
                </div> 
                <div>
                    <motion.img src="src\assets\nicolas.jpg" alt="" className="w-16 h-16 rounded-full border-4" whileHover={{scale:1.2}}/>
                    <div>
                        <h1 className="font-bold text-lg">Nicolas Moreno</h1>
                        <p className="text-sm text-gray-600">Desarrollador Backend, Ingeniero en sistemas y computacion</p>
                    </div> 
                </div>
                <div>
                    <motion.img src="src\assets\JhonFreddy.jpeg" alt="" className="w-16 h-16 rounded-full border-4" whileHover={{scale:1.2}} />
                    <div>
                        <h1 className="font-bold text-lg">Jhon Freddy Soto</h1>
                        <p className="text-sm text-gray-600">Desarrollador Frontend, Ingeniero en sistemas y computacion</p>
                    </div> 
                </div>
            </div>
            
        </div>
    );
};

export default Insights;