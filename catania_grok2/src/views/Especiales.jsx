import React from 'react';
import { Link } from 'react-router-dom';
import './Especiales.css';

const Especiales = () => {
  return (
    <div className="especiales-container">
      <header className="section-header">
        <span className="section-tag">Especiales</span>
        <h1 className="section-title">Productos Especiales</h1>
        <p className="section-description">
          Desarrollamos diseños exclusivos que se adaptan a tus necesidades.
        </p>
      </header>
      <Link to="/" className="back-link">Volver a Inicio</Link>
    </div>
  );
};

export default Especiales;