import React, { useState } from 'react';
import './Nosotros.css';

// Componente interno para el carrusel de la sección "history"
const HistoryCarousel = () => {
  const images = [
    "src/assets/Captura de pantalla 2025-03-03 154932.png",
    "src/assets/Captura de pantalla 2025-03-03 154943.png", // Reemplaza con la ruta de la segunda imagen
    "src/assets/Captura de pantalla 2025-03-03 154958.png"  // Reemplaza con la ruta de la tercera imagen
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="history-carousel">
      <button className="carousel-button prev" onClick={prevSlide}>&#10094;</button>
      <img 
        src={images[currentIndex]} 
        alt="Company History" 
        className="history-image" 
      />
      <button className="carousel-button next" onClick={nextSlide}>&#10095;</button>
      <div className="carousel-dots">
        {images.map((_, index) => (
          <span 
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

const Nosotros = () => {
  return (
    <>
      <header className="hero">
        <div className="container">
          <div className="hero-content">
            <span className="tagline">Catania</span>
            <div className="hero-text">
              <h1 className="hero-title">Conócenos</h1>
              <p className="hero-description">
                Con más de 10 años de experiencia, ofrecemos calidad y personalización en uniformes y artículos promocionales.
              </p>
            </div>
          </div>
          <div className="hero-actions">
            <button className="btn btn-primary btn-large">Contáctanos</button>
            <button className="btn btn-secondary btn-large">Más información</button>
          </div>
        </div>
      </header>

      <section className="history">
        <div className="container">
          <div className="history-content">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/361a9b83cc025dc630a90fbdc8044aca265bc17b3bb12b44b5549ba02b8acf07?placeholderIfAbsent=true"
              alt="Company Icon"
              className="history-icon"
            />
            <div className="history-text">
              <h2 className="history-title">
                Conoce la historia de Catania: calidad y compromiso desde el inicio.
              </h2>
              <p className="history-description">
                Catania ha recorrido un camino de excelencia en la fabricación de uniformes y artículos promocionales. Nuestra experiencia y dedicación nos han permitido convertirnos en un referente en el sector, siempre enfocados en las necesidades de nuestros clientes.
              </p>
            </div>
          </div>
          {/* Se reemplaza la imagen única por el carrusel */}
          <HistoryCarousel />
        </div>
      </section>

      <section className="mission-vision">
        <div className="container">
          <div className="section-header">
            <span className="tagline">Catania</span>
            <h2 className="section-title">Nuestra Misión, Visión y Valores</h2>
            <p className="section-description">
              En Catania, nos comprometemos a ofrecer productos de la más alta calidad, siempre priorizando la satisfacción del cliente. Nuestro enfoque profesional y cercano nos distingue en el mercado.
            </p>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/361a9b83cc025dc630a90fbdc8044aca265bc17b3bb12b44b5549ba02b8acf07?placeholderIfAbsent=true"
                alt="Mission Icon"
                className="value-icon"
              />
              <h3 className="value-title">Misión de Catania</h3>
              <p className="value-description">
                Proporcionar uniformes y artículos promocionales excepcionales.
              </p>
            </div>

            <div className="value-card">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/01561eeb825277b88de3052f3d7bfffe74f587d3ca5cb2af0e39ef854b8d83e3?placeholderIfAbsent=true"
                alt="Vision Icon"
                className="value-icon"
              />
              <h3 className="value-title">Visión de Catania</h3>
              <p className="value-description">
                Ser líderes en personalización y calidad en el sector.
              </p>
            </div>

            <div className="value-card">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/0bb2d90fdcb4f9c9fdb70962695e2811f2683fd11041794d014378861750db6e?placeholderIfAbsent=true"
                alt="Values Icon"
                className="value-icon"
              />
              <h3 className="value-title">Nuestros Valores</h3>
              <p className="value-description">
                Calidad, profesionalismo, innovación y cercanía al cliente.
              </p>
            </div>
          </div>

          <div className="section-actions">
            <button className="btn btn-secondary btn-large">Contáctanos</button>
            <a href="#" className="link-button">
              <span>Conócenos</span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/b1ea117d06c4300f9dad14de1f83b09a745c0f020edba579fec182e08d9e5ecc?placeholderIfAbsent=true"
                alt="Arrow"
                className="link-icon"
              />
            </a>
          </div>
        </div>
      </section>

      <section className="advantages">
        <h2 className="advantages-title">
          Ventajas que nos distinguen en el mercado de uniformes y personalización
        </h2>
        <div className="container">
          <div className="advantages-grid">
            <article className="advantage-card">
              <div className="advantage-content">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/43e920c3a18b9ac3204df7005ff5df294f0ba6f5050ab66df1658a8eec212aa0?placeholderIfAbsent=true"
                  alt="Quality Icon"
                  className="advantage-icon"
                />
                <div className="advantage-text">
                  <h3 className="advantage-title">
                    Compromiso con la calidad y la satisfacción del cliente garantizada
                  </h3>
                  <p className="advantage-description">
                    Ofrecemos personalización completa para adaptarnos a las necesidades de cada cliente.
                  </p>
                </div>
              </div>
              <a href="#" className="link-button">
                <span>Conócenos</span>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/fac8ce89feb28a7a0742d7cf8bd90df9140bad2cbdd6a84e01447a7607968e0e?placeholderIfAbsent=true"
                  alt="Arrow"
                  className="link-icon"
                />
              </a>
            </article>

            <article className="advantage-card">
              <div className="advantage-content">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/361a9b83cc025dc630a90fbdc8044aca265bc17b3bb12b44b5549ba02b8acf07?placeholderIfAbsent=true"
                  alt="Delivery Icon"
                  className="advantage-icon"
                />
                <div className="advantage-text">
                  <h3 className="advantage-title">
                    Entregas rápidas y eficientes para que no pierdas tiempo en tu negocio
                  </h3>
                  <p className="advantage-description">
                    Nuestra logística asegura que recibas tus productos en el momento adecuado.
                  </p>
                </div>
              </div>
              <a href="#" className="link-button">
                <span>Infórmate</span>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/b1ea117d06c4300f9dad14de1f83b09a745c0f020edba579fec182e08d9e5ecc?placeholderIfAbsent=true"
                  alt="Arrow"
                  className="link-icon"
                />
              </a>
            </article>

            <article className="advantage-card">
              <div className="advantage-content">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/35712c960ea67cedde110961ccfdd268ccbd284266daeb2e57f72cfe5a61af51?placeholderIfAbsent=true"
                  alt="Design Icon"
                  className="advantage-icon"
                />
                <div className="advantage-text">
                  <h3 className="advantage-title">
                    Diseños exclusivos que reflejan la identidad de tu empresa o institución
                  </h3>
                  <p className="advantage-description">
                    Creamos productos que destacan y representan tus valores corporativos.
                  </p>
                </div>
              </div>
              <a href="#" className="link-button">
                <span>Explora</span>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/75a65baedfec9e71cf4781bfe2ce2eebc2fc5da2fc9bdf03002b95f8609495b0?placeholderIfAbsent=true"
                  alt="Arrow"
                  className="link-icon"
                />
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Descubre Nuestros Servicios y Productos</h2>
            <p className="cta-description">
              Explora nuestra amplia gama de soluciones personalizadas para tu empresa o institución.
            </p>
          </div>
          <div className="cta-actions">
            <button className="btn btn-primary btn-large">Servicios</button>
            <button className="btn btn-secondary btn-large">Productos</button>
          </div>
        </div>
      </section>

      <footer className="footer">
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
                src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/5120e8a2e27f27b1d0a28a382e8fb9cfab572a21bb60c9bfcb5cff7d65c9ad7c?placeholderIfAbsent=true"
                alt="Social Media"
                className="social-icon"
              />
            </a>
          </div>
        </div>
        <div className="footer-credits">
          <div className="divider"></div>
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

export default Nosotros;
