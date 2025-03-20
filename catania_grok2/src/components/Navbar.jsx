import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo-wrapper">
          <img
            src="/Logo catania blanco.png"
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
          <a
           href="mailto:ventas2@catania.com.mx?subject=Solicitud%20de%20información&body=Hola,%20quisiera%20saber%20..."
          >
          <button className="btn btn-secondary-small">Enviar</button>
          </a>

          <a href="tel:+523338533555">
          <button className="btn btn-primary-small">Cotizar</button>
          </a>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;