import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo-wrapper">
          <img
            src="src\assets\Logo catania blanco.png"
            alt="Company Logo"
            className="logo-image"
          />
        </div>
        <div className="nav-content">
          <div className="nav-links">
            <Link to="/" className="nav-link">Inicio</Link>
            <Link to="/nosotros" className="nav-link">Nosotros</Link>
            <Link to="/servicios" className="nav-link">Servicios</Link>
            <Link to="/productos" className="nav-link">Productos</Link>
            <Link to="/contacto" className="nav-link">Contacto</Link>
          </div>
          <div className="nav-actions">
            <button className="btn btn-secondary-small">Enviar</button>
            <button className="btn btn-primary-small">Cotizar</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;