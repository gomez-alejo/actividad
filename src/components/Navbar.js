import React from 'react';

// Componente Navbar
// Este componente se encarga de mostrar la barra de navegación de la aplicación
function Navbar() {
  return (
    <nav className="navbar">
      <a href="#servicios">Servicios</a>
      <a href="#usuarios">Usuarios</a>
      <a href="#contacto">Contacto</a>
      <a href="https://github.com/gomez-alejo/actividad.git">GitHub</a>
    </nav>
  );
}

export default Navbar;
