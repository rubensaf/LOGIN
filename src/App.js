import React, {useState} from 'react';
import './App.css'; 
import Login from './components/Login';
import Mensaje from './components/mensaje';


const App = () => {
  const [mensaje, setMensaje] = useState('');

  const manejarMensaje = (nuevoMensaje) => {
    setMensaje(nuevoMensaje);
  };

  return (
    <div>
      {mensaje ? (
        <Mensaje mensaje={mensaje} />
      ) : (
        <Login manejarMensaje={manejarMensaje} />
      )}
    </div>
  );
};

export default App;