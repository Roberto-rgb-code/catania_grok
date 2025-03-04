import React from 'react';
import { Link } from 'react-router-dom';
import './Productos.css';
import UniformesIndustriales from '../assets/Uniformes-industriales.jpg';
import ArticulosPromocionales from '../assets/Articulos-Promocionales.jpg';
import PlayerasPolo from '../assets/ventajas-de-usar-playeras-polo-bordadas-para-uniformes.jpg';

const Productos = () => {
  return (
    <>
      <header className="hero-header">
        <div className="hero-container">
          <div className="hero-content">
            <span className="hero-tag">Calidad</span>
            <div className="hero-text-content">
              <h1 className="hero-title">Nuestros Productos</h1>
              <p className="hero-description">
                Descubre la calidad y personalización en cada una de nuestras categorías.
              </p>
            </div>
          </div>
          <div className="hero-actions">
            <button className="btn-primary-alt">Ver más</button>
            <button className="btn-secondary-alt">Cotizar</button>
          </div>
        </div>
      </header>

      <section className="products-section">
        <div className="section-header">
          <span className="section-tag">Productos</span>
          <div className="section-content">
            <h2 className="section-title">
              Descubre Nuestras Amplias Categorías de Productos
            </h2>
            <p className="section-description">
              En Catania, ofrecemos una variedad de productos diseñados para satisfacer las necesidades de tu empresa. Desde uniformes hasta artículos promocionales, cada categoría está pensada para brindarte calidad y distinción.
            </p>
          </div>
        </div>

        <div className="product-categories">
          <div className="category-grid">
            <article className="category-card">
              <Link to="/uniformes">
                <img
                  src={UniformesIndustriales}
                  alt="Uniformes"
                  className="category-image"
                />
                <div className="category-content">
                  <h3 className="category-title">Uniformes</h3>
                  <p className="category-description">
                    Explora nuestra gama de uniformes industriales, médicos y escolares.
                  </p>
                </div>
              </Link>
            </article>
            <article className="category-card">
              <Link to="/promocionales">
                <img
                  src={ArticulosPromocionales}
                  alt="Promocionales"
                  className="category-image"
                />
                <div className="category-content">
                  <h3 className="category-title">Promocionales</h3>
                  <p className="category-description">
                    Personaliza gorras, playeras y más para tu marca.
                  </p>
                </div>
              </Link>
            </article>
            <article className="category-card">
              <Link to="/especiales">
                <img
                  src={PlayerasPolo}
                  alt="Especiales"
                  className="category-image"
                />
                <div className="category-content">
                  <h3 className="category-title">Especiales</h3>
                  <p className="category-description">
                    Desarrollamos diseños exclusivos que se adaptan a tus necesidades.
                  </p>
                </div>
              </Link>
            </article>
          </div>
        </div>

        <div className="section-actions">
          <button className="btn-secondary-outline">Ver más</button>
          <a href="#" className="btn-link">
            <span>Cotizar</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/b1ea117d06c4300f9dad14de1f83b09a745c0f020edba579fec182e08d9e5ecc?placeholderIfAbsent=true"
              alt="Arrow"
              className="link-icon"
            />
          </a>
        </div>
      </section>

      <section className="detailed-products">
        <h2 className="detailed-title">
          Explora nuestras categorías de productos y descubre lo que ofrecemos.
        </h2>

        <div className="detailed-grid">
          <article className="detailed-card">
            <div className="detailed-content">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/0b1be81b8075208d75a799eb8432b3e1dbdae162e87209a67b4a609cc9dfde89?placeholderIfAbsent=true"
                alt="Uniformes Icon"
                className="detailed-icon"
              />
              <div className="detailed-text">
                <h3 className="detailed-card-title">
                  Uniformes de alta calidad para cada necesidad y sector.
                </h3>
                <p className="detailed-description">
                  Nuestros uniformes están diseñados para brindar comodidad y durabilidad en el trabajo.
                </p>
              </div>
            </div>
            <a href="#" className="btn-link">
              <span>Ver</span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/af27fdbf9e3f354a1808ae547e2c98b9dee0cad1d6cbf769d9178551f8ba6a76?placeholderIfAbsent=true"
                alt="Arrow"
                className="link-icon"
              />
            </a>
          </article>

          <article className="detailed-card">
            <div className="detailed-content">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/361a9b83cc025dc630a90fbdc8044aca265bc17b3bb12b44b5549ba02b8acf07?placeholderIfAbsent=true"
                alt="Promocionales Icon"
                className="detailed-icon"
              />
              <div className="detailed-text">
                <h3 className="detailed-card-title">
                  Artículos promocionales que destacan tu marca con estilo y funcionalidad.
                </h3>
                <p className="detailed-description">
                  Desde gorras hasta tazas, tenemos todo para hacer brillar tu marca.
                </p>
              </div>
            </div>
            <a href="#" className="btn-link">
              <span>Cotizar</span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/2c648c99086dabcc02665d7136f3813fa8d9ab4a20d15904140067b9f5dc1586?placeholderIfAbsent=true"
                alt="Arrow"
                className="link-icon"
              />
            </a>
          </article>

          <article className="detailed-card">
            <div className="detailed-content">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/e10f72ca93f731dbe0ceaa5e1ab751fed2051cd01fafa689030dba159c753793?placeholderIfAbsent=true"
                alt="Especiales Icon"
                className="detailed-icon"
              />
              <div className="detailed-text">
                <h3 className="detailed-card-title">
                  Proyectos especiales personalizados para satisfacer tus requerimientos específicos.
                </h3>
                <p className="detailed-description">
                  Creamos diseños exclusivos que se adaptan a la visión de tu empresa.
                </p>
              </div>
            </div>
            <a href="#" className="btn-link">
              <span>Consultar</span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/01649ca23eee3acaef818d0da002d016cd236d8c85562982f33d7b8bfb41ef3e?placeholderIfAbsent=true"
                alt="Arrow"
                className="link-icon"
              />
            </a>
          </article>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-content">
            <h2 className="cta-title">Explora Nuestros Productos Destacados</h2>
            <p className="cta-description">
              Descubre la variedad de uniformes y artículos promocionales que tenemos para ti.
            </p>
          </div>
          <div className="cta-actions">
            <button className="btn-primary-alt">Ver más</button>
            <button className="btn-secondary-alt">Cotizar</button>
          </div>
        </div>
      </section>

      <footer className="main-footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img
              src="src\assets\Logo catania blanco.png"
              alt="Company Logo"
              className="logo-image"
            />
          </div>
          <nav className="footer-links">
            <a href="#" className="footer-link">Inicio Rápido</a>
            <a href="#" className="footer-link">Nuestros Servicios</a>
            <a href="#" className="footer-link">Contáctanos</a>
            <a href="#" className="footer-link">Sobre Nosotros</a>
            <a href="#" className="footer-link">Política de Cookies</a>
          </nav>
          <div className="social-links">
            <a href="#" className="social-link">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/31013d06cddb55c39df4cdeb33b6b48c6fbc05737dd27767b800efb73ded2caf?placeholderIfAbsent=true"
                alt="Social Media"
                className="social-icon"
              />
            </a>
            <a href="#" className="social-link">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/6b655208516b295f93fcc599db21496c8573bd1c8064220879cf53d9462f3bc8?placeholderIfAbsent=true"
                alt="Social Media"
                className="social-icon"
              />
            </a>
            <a href="#" className="social-link">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/b1332e40c061482067062bfab80c125f3ae26fa5c3731b55424bf3b58522d3e0?placeholderIfAbsent=true"
                alt="Social Media"
                className="social-icon"
              />
            </a>
            <a href="#" className="social-link">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/87ec53ece447b3ae9f6e9f06db93c5ac976c08b25cd66b0b4bed7aa0afb5c6f0?placeholderIfAbsent=true"
                alt="Social Media"
                className="social-icon"
              />
            </a>
            <a href="#" className="social-link">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/96a7a2ed4768ad9d7350d6b462c83b8d7e1e12d086b94663c8b9047d3db3718e?placeholderIfAbsent=true"
                alt="Social Media"
                className="social-icon"
              />
            </a>
          </div>
        </div>
        <div className="footer-credits">
          <div className="credits-divider"></div>
          <div className="credits-content">
            <span className="copyright">© 2024 Catania. Todos los derechos reservados.</span>
            <a href="#" className="credits-link">Política de Privacidad</a>
            <a href="#" className="credits-link">Términos de Servicio</a>
            <a href="#" className="credits-link">Configuración de Cookies</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Productos;