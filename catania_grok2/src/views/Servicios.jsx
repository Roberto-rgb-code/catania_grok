import React from 'react';
import './Servicios.css';

const Servicios = () => {
  return (
    <main className="services">
      <header className="services-header">
        <div className="header-content">
          <h1 className="header-title">Nuestros Servicios</h1>
          <p className="header-description">
            Ofrecemos soluciones de personalización que se adaptan a todas tus necesidades. Descubre la calidad y diversidad de nuestros servicios, diseñados para destacar tu marca.
          </p>
        </div>
      </header>

      <section className="service-section laser-section">
        <div className="container">
          <div className="service-content">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/361a9b83cc025dc630a90fbdc8044aca265bc17b3bb12b44b5549ba02b8acf07?placeholderIfAbsent=true"
              alt="Laser icon"
              className="service-icon"
            />
            <div className="service-details">
              <h2 className="service-title">
                Grabado Láser: Precisión y calidad en cada detalle de tu diseño.
              </h2>
              <p className="service-description">
                El grabado láser es un proceso que utiliza un rayo láser para marcar o cortar materiales con gran precisión. Ideal para personalizar productos, ofrece una impresión de alta calidad y durabilidad, adaptándose a tus necesidades específicas.
              </p>
            </div>
          </div>
          <img
            src="src\assets\grabado laser.jpeg"
            alt="Laser service"
            className="service-image"
          />
        </div>
      </section>

      <section className="service-section dtf-section">
        <div className="container">
          <div className="service-content">
            <div className="section-header">
              <span className="service-tag">DTF</span>
              <div className="section-text">
                <h2 className="service-title">
                  Impresión DTF: Detalles que Marcan la Diferencia
                </h2>
                <p className="service-description">
                  La impresión DTF permite transferir diseños vibrantes sobre diversas superficies. Es perfecta para crear prendas personalizadas con colores intensos y gran detalle.
                </p>
              </div>
            </div>
            <div className="service-actions">
              <button className="btn btn-secondary">Solicitar</button>
              <a href="#" className="btn-link">
                <span>Más info</span>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/d4aed70e652b9a334e2a683ba9bfef5c04d880fcb9b8ad7514c3dabef58a54d7?placeholderIfAbsent=true"
                  alt="Arrow"
                  className="link-icon"
                />
              </a>
            </div>
          </div>
          <img
            src="src\assets\dtf.jpeg"
            alt="DTF service"
            className="service-image"
          />
        </div>
      </section>

      <section className="service-section sublimation-section">
        <div className="container">
          <div className="service-content">
            <div className="service-details">
              <h2 className="service-title">
                Sublimado: la técnica perfecta para personalizar tus prendas con estilo.
              </h2>
              <p className="service-description">
                El sublimado es un proceso de impresión que utiliza calor para transferir tintas a tejidos, especialmente poliéster. Ideal para crear diseños vibrantes y duraderos que resalten en cualquier prenda.
              </p>
            </div>
            <ul className="feature-list">
              <li className="feature-item">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/7dfe5d12063eb7de47e0c0116514aa08715079663186ed34f3067a8f59362633?placeholderIfAbsent=true"
                  alt="Check"
                  className="feature-icon"
                />
                <span className="feature-text">Colores vibrantes y diseños personalizados.</span>
              </li>
              <li className="feature-item">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/7dfe5d12063eb7de47e0c0116514aa08715079663186ed34f3067a8f59362633?placeholderIfAbsent=true"
                  alt="Check"
                  className="feature-icon"
                />
                <span className="feature-text">Durabilidad excepcional en cada estampado.</span>
              </li>
              <li className="feature-item">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/7dfe5d12063eb7de47e0c0116514aa08715079663186ed34f3067a8f59362633?placeholderIfAbsent=true"
                  alt="Check"
                  className="feature-icon"
                />
                <span className="feature-text">Perfecto para prendas deportivas y promocionales.</span>
              </li>
            </ul>
          </div>
          <img
            src="src\assets\dtf.jpeg"
            alt="Sublimation service"
            className="service-image"
          />
        </div>
      </section>

      <section className="service-section embroidery-section">
        <div className="container">
          <div className="service-content">
            <div className="section-header">
              <span className="service-tag">Bordado</span>
              <div className="section-text">
                <h2 className="service-title">
                  La Elegancia y Durabilidad del Bordado
                </h2>
                <p className="service-description">
                  El bordado es un proceso de costura que utiliza hilos para crear diseños en telas. Ideal para uniformes y artículos promocionales, ofrece un acabado profesional y atractivo.
                </p>
              </div>
            </div>
            <div className="stats-row">
              <div className="stat-item">
                <span className="stat-number">50%</span>
                <p className="stat-description">
                  Apariencia profesional y alta resistencia en cada prenda.
                </p>
              </div>
              <div className="stat-item">
                <span className="stat-number">50%</span>
                <p className="stat-description">
                  Personalización premium para destacar tu marca.
                </p>
              </div>
            </div>
            <div className="service-actions">
              <button className="btn btn-secondary">Cotiza</button>
              <a href="#" className="btn-link">
                <span>Más</span>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/d4aed70e652b9a334e2a683ba9bfef5c04d880fcb9b8ad7514c3dabef58a54d7?placeholderIfAbsent=true"
                  alt="Arrow"
                  className="link-icon"
                />
              </a>
            </div>
          </div>
          <img
            src="src\assets\bordado-750x410.jpg"
            alt="Embroidery service"
            className="service-image"
          />
        </div>
      </section>

      <section className="service-section screen-printing-section">
        <div className="container">
          <div className="service-content">
            <div className="service-details">
              <h2 className="service-title">
                Serigrafía: La técnica perfecta para tus proyectos de impresión a gran escala
              </h2>
              <p className="service-description">
                La serigrafía es un proceso de impresión que utiliza una malla para transferir tinta sobre diversos materiales. Es ideal para crear diseños vibrantes y duraderos en grandes cantidades.
              </p>
            </div>
            <ul className="feature-list">
              <li className="feature-item">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/7dfe5d12063eb7de47e0c0116514aa08715079663186ed34f3067a8f59362633?placeholderIfAbsent=true"
                  alt="Check"
                  className="feature-icon"
                />
                <span className="feature-text">Ideal para grandes tirajes y colores sólidos.</span>
              </li>
              <li className="feature-item">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/7dfe5d12063eb7de47e0c0116514aa08715079663186ed34f3067a8f59362633?placeholderIfAbsent=true"
                  alt="Check"
                  className="feature-icon"
                />
                <span className="feature-text">Versatilidad en materiales como tela, plástico y papel.</span>
              </li>
              <li className="feature-item">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/7dfe5d12063eb7de47e0c0116514aa08715079663186ed34f3067a8f59362633?placeholderIfAbsent=true"
                  alt="Check"
                  className="feature-icon"
                />
                <span className="feature-text">Solicita tu cotización y empieza a personalizar.</span>
              </li>
            </ul>
          </div>
          <img
            src="src\assets\serigrafia.jpeg"
            alt="Screen printing service"
            className="service-image"
          />
        </div>
      </section>

      <section className="service-section pad-printing-section">
        <div className="container">
          <div className="service-content">
            <div className="section-header">
              <span className="service-tag">Tampografía</span>
              <div className="section-text">
                <h2 className="service-title">
                  Tampografía: Innovación en Personalización de Productos
                </h2>
                <p className="service-description">
                  La tampografía es un método de impresión que permite transferir imágenes a superficies irregulares. Es ideal para objetos promocionales pequeños, garantizando un acabado de alta calidad.
                </p>
              </div>
            </div>
            <ul className="feature-list">
              <li className="feature-item">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/feb26ea0b9ce5a67a4c73ec5132bc98d6ca5b7a954d3de0b3f5cd37c29b1b6b5?placeholderIfAbsent=true"
                  alt="Check"
                  className="feature-icon"
                />
                <span className="feature-text">Precisión en superficies irregulares para objetos promocionales.</span>
              </li>
              <li className="feature-item">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/feb26ea0b9ce5a67a4c73ec5132bc98d6ca5b7a954d3de0b3f5cd37c29b1b6b5?placeholderIfAbsent=true"
                  alt="Check"
                  className="feature-icon"
                />
                <span className="feature-text">Ideal para artículos pequeños y personalizados.</span>
              </li>
              <li className="feature-item">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/feb26ea0b9ce5a67a4c73ec5132bc98d6ca5b7a954d3de0b3f5cd37c29b1b6b5?placeholderIfAbsent=true"
                  alt="Check"
                  className="feature-icon"
                />
                <span className="feature-text">Impresión duradera y de alta calidad garantizada.</span>
              </li>
            </ul>
            <div className="service-actions">
              <button className="btn btn-secondary">Cotizar</button>
              <a href="#" className="btn-link">
                <span>Más Info</span>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/d4aed70e652b9a334e2a683ba9bfef5c04d880fcb9b8ad7514c3dabef58a54d7?placeholderIfAbsent=true"
                  alt="Arrow"
                  className="link-icon"
                />
              </a>
            </div>
          </div>
          <img
            src="src\assets\tampografia.jpeg"
            alt="Pad printing service"
            className="service-image"
          />
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <div className="cta-text">
            <h2 className="cta-title">Solicita tu cotización hoy</h2>
            <p className="cta-description">
              Contáctanos para obtener más información sobre nuestros servicios de personalización y calidad garantizada.
            </p>
          </div>
          <div className="cta-actions">
            <button className="btn btn-primary-alt">Cotizar</button>
            <button className="btn btn-secondary-alt">Más</button>
          </div>
        </div>
      </section>

      <footer className="main-footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img
              src="src\assets\Logo catania blanco.png"
              alt="Logo"
              className="footer-logo-image"
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
                alt="Social media"
                className="social-icon"
              />
            </a>
            <a href="#" className="social-link">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/6b655208516b295f93fcc599db21496c8573bd1c8064220879cf53d9462f3bc8?placeholderIfAbsent=true"
                alt="Social media"
                className="social-icon"
              />
            </a>
            <a href="#" className="social-link">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/b1332e40c061482067062bfab80c125f3ae26fa5c3731b55424bf3b58522d3e0?placeholderIfAbsent=true"
                alt="Social media"
                className="social-icon"
              />
            </a>
            <a href="#" className="social-link">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/87ec53ece447b3ae9f6e9f06db93c5ac976c08b25cd66b0b4bed7aa0afb5c6f0?placeholderIfAbsent=true"
                alt="Social media"
                className="social-icon"
              />
            </a>
            <a href="#" className="social-link">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/96a7a2ed4768ad9d7350d6b462c83b8d7e1e12d086b94663c8b9047d3db3718e?placeholderIfAbsent=true"
                alt="Social media"
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
    </main>
  );
};

export default Servicios;