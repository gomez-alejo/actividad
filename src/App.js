import './App.css';
import React from 'react';
// Importamos los componentes Header, Navbar, Section y Footer
import Header from './components/Header';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Footer from './components/Footer';

// Componente principal de la aplicación
// para construir la interfaz de usuario
function App() {
  // Este componente se encarga de renderizar la estructura básica de la aplicación
  return (
    <div className="App">
      <Header />
      <Navbar />
      <main>
        <Section id="servicios" title="Servicios">
          Ofrecemos soluciones en desarrollo web, diseño UX/UI y soporte tecnológico.
        </Section>
        <Section id="usuarios" title="Usuarios">
          Más de 1,000 usuarios confían en nuestra plataforma cada día.
        </Section>
        <Section id="contacto" title="Contacto">
          Puedes escribirnos a contacto@miapp.com o llamarnos al 123-456-7890.
        </Section>
      </main>
      <Footer />
    </div>
  );
}

export default App;