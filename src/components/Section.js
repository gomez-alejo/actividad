import React from 'react';

// Componente Section
// Este componente se encarga de mostrar las secciones de la aplicación
function Section({ id, title, children }) {
  return (
    <section id={id} className="section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default Section;
