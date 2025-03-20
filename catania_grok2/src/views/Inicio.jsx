import React from 'react';
import { Link } from 'react-router-dom';
import './Inicio.css';
import UniformesIndustriales from '/assets/Uniformes-industriales.jpg';
import ArticulosPromocionales from '/assets/Articulos-Promocionales.jpg';
import PlayerasPolo from '/assets/ventajas-de-usar-playeras-polo-bordadas-para-uniformes.jpg';

const Inicio = () => {
  return (
    <>
      <header className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">Uniformes y Artículos Promocionales para Todos</h1>
              <p className="hero-subtitle">
                Descubre la calidad y variedad que ofrecemos para vestir tu empresa o institución con estilo y profesionalismo.
              </p>
              <div className="hero-actions">
                <button className="btn-primary">Contáctanos</button>
                <button className="btn-secondary">Cotiza Ahora</button>
              </div>
            </div>

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
          <button className="btn btn-secondary">Ver más</button>
          <a href="#" className="link-with-icon">
            <span>Cotizar</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/ed280c87b2ec3f60ba5a8a4415e94110f00bb81de0a2a1bd58708615b7c7a97f?placeholderIfAbsent=true"
              alt="Arrow"
              className="link-icon"
            />
          </a>
        </div>
      </section>

      <section className="services-section">
        <div className="section-header">
          <div className="header-content">
            <span className="section-tag">Servicios</span>
            <h2 className="section-title">Descubre Nuestros Servicios de Personalización</h2>
          </div>
          <p className="section-description">
            En Catania, ofrecemos una variedad de servicios de personalización para satisfacer todas tus necesidades. Desde grabado láser hasta sublimado, cada opción está diseñada para brindar calidad y durabilidad. Permítenos ayudarte a destacar tu marca con nuestros servicios especializados.
          </p>
        </div>
        <div className="services-grid">
          <article className="service-card">
            <img
              src="\assets\chaqueta.png"
              alt="Variedad de Servicios"
              className="service-icon"
            />
            <h3 className="service-title">Variedad de Servicios Disponibles</h3>
            <p className="service-description">
              Cada servicio está pensado para ofrecerte lo mejor.
            </p>
          </article>
          <article className="service-card">
            <img
              src="\assets\camisa.png"
              alt="Calidad y Personalización"
              className="service-icon"
            />
            <h3 className="service-title">Calidad y Personalización en Cada Proyecto</h3>
            <p className="service-description">
              Transformamos tus ideas en productos únicos.
            </p>
          </article>
          <article className="service-card">
            <img
              src="\assets\uniforme.png"
              alt="Contáctanos"
              className="service-icon"
            />
            <h3 className="service-title">Contáctanos para Más Información</h3>
            <p className="service-description">
              Estamos aquí para ayudarte a crear.
            </p>
          </article>
        </div>
        <div className="section-actions">
          <button className="btn btn-secondary">Ver Más</button>
          <a href="#" className="link-with-icon">
            <span>Servicios</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/ed280c87b2ec3f60ba5a8a4415e94110f00bb81de0a2a1bd58708615b7c7a97f?placeholderIfAbsent=true"
              alt="Arrow"
              className="link-icon"
            />
          </a>
        </div>
      </section>

      <section className="quality-section">
        <div className="section-header">
          <span className="section-tag">Calidad</span>
          <h2 className="section-title">Descubre Nuestros Productos Destacados</h2>
          <p className="section-description">
            En Catania, ofrecemos una variedad de productos diseñados para satisfacer las necesidades de tu empresa. Desde uniformes hasta artículos promocionales, tenemos todo lo que necesitas.
          </p>
        </div>
        <div className="quality-grid">
          <article className="quality-card">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/361a9b83cc025dc630a90fbdc8044aca265bc17b3bb12b44b5549ba02b8acf07?placeholderIfAbsent=true"
              alt="Uniformes"
              className="quality-icon"
            />
            <h3 className="quality-title">Uniformes para Cada Ocasión</h3>
            <p className="quality-description">
              Nuestros uniformes son ideales para cualquier industria.
            </p>
          </article>
          <article className="quality-card">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/97f851acb8d3046ee7493640098c0319bd073cee4d575c7208e511943fa33539?placeholderIfAbsent=true"
              alt="Artículos Promocionales"
              className="quality-icon"
            />
            <h3 className="quality-title">Artículos Promocionales que Impactan</h3>
            <p className="quality-description">
              Aumenta la visibilidad de tu marca con nuestros productos.
            </p>
          </article>
          <article className="quality-card">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/68b4c233da74964e4828a1f49fdef5623cf4862dde66dc6eb1c4dd8af4e9d3d4?placeholderIfAbsent=true"
              alt="Soluciones Especiales"
              className="quality-icon"
            />
            <h3 className="quality-title">Soluciones Especiales a Medida</h3>
            <p className="quality-description">
              Creamos productos personalizados que se adaptan a tus necesidades.
            </p>
          </article>
        </div>
        <div className="section-actions">
          <button className="btn btn-secondary">Ver Más</button>
          <a href="#" className="link-with-icon">
            <span>Cotizar</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/ed280c87b2ec3f60ba5a8a4415e94110f00bb81de0a2a1bd58708615b7c7a97f?placeholderIfAbsent=true"
              alt="Arrow"
              className="link-icon"
            />
          </a>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="section-header">
          <h2 className="section-title">Testimonios de Clientes</h2>
          <p className="section-description">Lo que dicen nuestros clientes satisfechos.</p>
        </div>
        <div className="testimonials-grid">
          <article className="testimonial-card">
            <div className="rating">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/eb836d67db2cb88a07d3bfb6c04e827b8107519d060019054b00f64f4bfcdb6e?placeholderIfAbsent=true"
                alt="Star"
                className="star"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/37883a6fba3ace056b1a03ea77e2a9815b18e62b74b42ad46c1ee92c378d083d?placeholderIfAbsent=true"
                alt="Star"
                className="star"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/a6cb77722ab4547c5ba00b55bd7795508a18c0bfd566c8e55990d135b041c652?placeholderIfAbsent=true"
                alt="Star"
                className="star"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/a6cb77722ab4547c5ba00b55bd7795508a18c0bfd566c8e55990d135b041c652?placeholderIfAbsent=true"
                alt="Star"
                className="star"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/134bb5145f2b4bf6a830b722256841b032a1956d21e22ce91868d93ccf0032da?placeholderIfAbsent=true"
                alt="Star"
                className="star"
              />
            </div>
            <blockquote className="testimonial-quote">
              "La calidad de los uniformes es excepcional y el servicio, impecable."
            </blockquote>
            <div className="testimonial-author">
              <img
                src="\assets\umu.jpeg"
                alt="María López"
                className="author-image"
              />
              <div className="author-info">
                <span className="author-name">María López</span>
                <span className="author-title">Gerente, Coca Cola</span>
              </div>
              <div className="author-divider"></div>
              <img
                src="\assets\Coca-Cola-logo (1).png"
                alt="Company Logo"
                className="company-logo"
              />
            </div>
          </article>
          <article className="testimonial-card">
            <div className="rating">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/eb836d67db2cb88a07d3bfb6c04e827b8107519d060019054b00f64f4bfcdb6e?placeholderIfAbsent=true"
                alt="Star"
                className="star"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/39b0f99ac07fda11985b9ee37235670a3216a51cd0a1f635d5d9ba465d756a37?placeholderIfAbsent=true"
                alt="Star"
                className="star"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/bf2d2cc3be0b30591a2d58770d523f82e4d8564c6ff72aef4906e243f6fbad06?placeholderIfAbsent=true"
                alt="Star"
                className="star"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/191c58afd08f2bf3ec8d1128458678242edcf02a4215ded5f389072f7623a540?placeholderIfAbsent=true"
                alt="Star"
                className="star"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/0e534d2a40d12da36396af7667deba63c164bf8caa602f9902cd8c30ac6ca5ff?placeholderIfAbsent=true"
                alt="Star"
                className="star"
              />
            </div>
            <blockquote className="testimonial-quote">
              "Catania siempre cumple con nuestras expectativas y plazos."
            </blockquote>
            <div className="testimonial-author">
              <img
                src="\assets\diferencia-entre-gerente-y-director.jpg"
                alt="Juan Pérez"
                className="author-image"
              />
              <div className="author-info">
                <span className="author-name">Juan Pérez</span>
                <span className="author-title">Trabajador, solfran</span>
              </div>
              <div className="author-divider"></div>
              <img
                src="\assets\solfran_color.png"
                alt="Company Logo"
                className="company-logo"
              />
            </div>
          </article>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <div className="cta-text">
            <h2 className="cta-title">Descarga nuestro catálogo hoy</h2>
            <p className="cta-description">
              Solicita información sobre nuestros productos y servicios personalizados para tu empresa o institución.
            </p>
          </div>
          <div className="cta-actions">
            <button className="btn btn-primary-alt">Descargar</button>
            <button className="btn btn-secondary-alt">Consultar</button>
          </div>
        </div>
      </section>

      <footer className="main-footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img
              src="\Logo catania blanco.png"
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
                src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/7ae4f0171ecca53d8c3a0688d908f90af9103568ffb475a890b5004b12fbb0f6?placeholderIfAbsent=true"
                alt="Social Media"
                className="social-icon"
              />
            </a>
            <a href="#" className="social-link">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/a189fa197e66326a023943ed5648a93d7b8d7a7e66ae92cbde842e1eb69df910?placeholderIfAbsent=true"
                alt="Social Media"
                className="social-icon"
              />
            </a>
            <a href="#" className="social-link">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/ea2655b2a6406e9c5ef418d4752d0ca75d18f674fbf5c5a0ad097e8d5c483752?placeholderIfAbsent=true"
                alt="Social Media"
                className="social-icon"
              />
            </a>
            <a href="#" className="social-link">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/b7ddadb29dfd732a506b3d7e97a39490da61c4634197af1815a44a6d1bd263ee?placeholderIfAbsent=true"
                alt="Social Media"
                className="social-icon"
              />
            </a>
            <a href="#" className="social-link">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/a019f9560bf3692196da88680e3a168af36177883dce666c75305bc72e50c60a?placeholderIfAbsent=true"
                alt="Social Media"
                className="social-icon"
              />
            </a>
          </div>
        </div>
        <div className="footer-credits">
          <div className="credits-divider"></div>
          <div className="credits-content">
            <span className="copyright">© 2025 Catania. Todos los derechos reservados.</span>
            <a href="#" className="credits-link">Política de Privacidad</a>
            <a href="#" className="credits-link">Términos de Servicio</a>
            <a href="#" className="credits-link">Configuración de Cookies</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Inicio;