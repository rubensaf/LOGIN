import React, { useState } from 'react';
import Mensaje from './mensaje';

const Login = ({ manejarMensaje }) => {
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');

  const handleUsuarioChange = (e) => setUsuario(e.target.value);
  const handleContraseñaChange = (e) => setContraseña(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const usuarios = await response.json();

    const usuarioEncontrado = usuarios.find(user => user.email === usuario);

    if (!usuarioEncontrado) {
      manejarMensaje('Usuario no encontrado');
    } else if (usuarioEncontrado.username !== contraseña) {
      manejarMensaje('Contraseña incorrecta');
    } else {
      manejarMensaje(`Bienvenido, ${usuarioEncontrado.name}!`);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          value={usuario}
          onChange={handleUsuarioChange}
        />
        <input
          type="password"
          placeholder="Username"
          value={contraseña}
          onChange={handleContraseñaChange}
        />
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Login;