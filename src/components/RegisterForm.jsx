import React, { useState } from 'react';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telefono: ''
  });
  
  // Estado para el mensaje de éxito
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Lógica para enviar los datos al backend (puedes añadirla aquí)

    // Mostrar mensaje de éxito
    setMessage('Datos enviados');

    // Limpiar el formulario
    setFormData({
      name: '',
      email: '',
      telefono: ''
    });
  };

  return (
    <div className="flex py-10">
      <div className="max-w-md mx-auto bg-gray-800 p-6 rounded shadow-md mt-10">
        <h2 className="text-2xl text-yellow-400 font-bold mb-4">Obtén más información</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-yellow-300">Nombre</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-yellow-300">Correo Electrónico</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-yellow-300">Teléfono</label>
            <input
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-yellow-400 text-white font-bold py-2 px-4 rounded"
          >
            Registrarse
          </button>
        </form>

        {/* Mostrar el mensaje de éxito si existe */}
        {message && (
          <div className="mt-4 text-green-500">{message}</div>
        )}
      </div>
    </div>
  );
};

export default RegisterForm;