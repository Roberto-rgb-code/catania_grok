import React from 'react';
import './Contacto.css';

const Contacto = () => {
  return (
    <main className="main-content">
      <section className="contact-info-section">
        <header className="section-header">
          <span className="section-tag">Contacto</span>
          <h1 className="section-title">Contáctanos</h1>
          <p className="section-description">
            Estamos aquí para ayudarte con tus consultas.
          </p>
        </header>

        <div className="contact-cards">
          <div className="contact-row">
            <article className="contact-card">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/a35b853c507e45f8fc2eeb3840934c3da80a9986b60deb15f1adf40d674c16e4?placeholderIfAbsent=true"
                alt="Email icon"
                className="card-icon"
              />
              <div className="card-content">
                <h3 className="card-title">Email</h3>
                <p className="card-text">Escríbenos a:</p>
                <a href="mailto:contacto@catania.com" className="card-link">
                  contacto@catania.com
                </a>
              </div>
            </article>

            <article className="contact-card">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/1e229700f5e5a999f0813701f15f227da88fea1538d544b77380d3a68d4ed440?placeholderIfAbsent=true"
                alt="Phone icon"
                className="card-icon"
              />
              <div className="card-content">
                <h3 className="card-title">Teléfono</h3>
                <p className="card-text">Llámanos al:</p>
                <a href="tel:+34912345678" className="card-link">
                  +34 912 345 678
                </a>
              </div>
            </article>

            <article className="contact-card">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/82849431ac26a1ce74cf6982899ed7ae92887dcadf9e0e1fcd639b184a74592b?placeholderIfAbsent=true"
                alt="Office icon"
                className="card-icon"
              />
              <div className="card-content">
                <h3 className="card-title">Oficina</h3>
                <p className="card-text">Calle Ejemplo 123, Madrid, España</p>
                <a href="#" className="link-with-arrow">
                  Obtener Direcciones
                </a>
              </div>
            </article>
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/9db2df93a2653a23568b8c141e73ab4da3446054b56a3906d286f8b26928b8ba?placeholderIfAbsent=true"
            alt="Contact illustration"
            className="contact-image"
          />
        </div>
      </section>

      <section className="contact-form-section">
        <header className="section-header">
          <span className="section-tag">Contacto</span>
          <h2 className="section-title">Contáctanos</h2>
          <p className="section-description">
            Estamos aquí para ayudarte con tus consultas.
          </p>
        </header>

        <form className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">Nombre</label>
              <input type="text" id="firstName" className="form-input" />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Apellido</label>
              <input type="text" id="lastName" className="form-input" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Correo</label>
              <input type="email" id="email" className="form-input" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Número telefónico</label>
              <input type="tel" id="phone" className="form-input" />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="topic">Selecciona un tema</label>
            <div className="select-wrapper">
              <select id="topic" className="form-select">
                <option value="">Selecciona uno...</option>
              </select>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/293582c4b6e917a9daa1f474f6d43c9b422055e404a239003f2d99a11bfb1b4f?placeholderIfAbsent=true"
                alt="Select arrow"
                className="select-arrow"
              />
            </div>
          </div>

          <fieldset className="radio-group">
            <legend>¿Cómo te describirías?</legend>
            <div className="radio-options">
              <div className="radio-row">
                <label className="radio-label">
                  <input type="radio" name="description" value="option1" />
                  <span className="radio-text">Opción uno</span>
                </label>
                <label className="radio-label">
                  <input type="radio" name="description" value="option2" />
                  <span className="radio-text">Opción dos</span>
                </label>
              </div>
              <div className="radio-row">
                <label className="radio-label">
                  <input type="radio" name="description" value="option3" />
                  <span className="radio-text">Opción tres</span>
                </label>
                <label className="radio-label">
                  <input type="radio" name="description" value="option4" />
                  <span className="radio-text">Opción cuatro</span>
                </label>
              </div>
              <div className="radio-row">
                <label className="radio-label">
                  <input type="radio" name="description" value="option5" />
                  <span className="radio-text">Opción cinco</span>
                </label>
                <label className="radio-label">
                  <input type="radio" name="description" value="other" />
                  <span className="radio-text">Otro</span>
                </label>
              </div>
            </div>
          </fieldset>

          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              className="form-textarea"
              placeholder="Escribe tu mensaje..."
            ></textarea>
          </div>

          <label className="checkbox-label">
            <input type="checkbox" className="form-checkbox" />
            <span className="checkbox-text">Acepto los Términos</span>
          </label>

          <button type="submit" className="btn btn-primary btn-submit">
            Enviar
          </button>
        </form>
      </section>

      <section className="partners-section">
        <div className="container">
          <h2 className="partners-title">
            Utilizado por las principales empresas del mundo
          </h2>
          <div className="partners-logos">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/98c82e8268c5b89aa188185253fb8140bb9264c1fc1671111bcbf0abf8c162c9?placeholderIfAbsent=true"
              alt="Partner logo"
              className="partner-logo"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/e2bb1e2a565532432ea6c0b40cb82174844c6fa38aa92f78ec120c8a06789638?placeholderIfAbsent=true"
              alt="Partner logo"
              className="partner-logo"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/2d943c87bc3675ee2ccd3ae6bc8b57ad5bb219d2014aa6e351de76e359f222b3?placeholderIfAbsent=true"
              alt="Partner logo"
              className="partner-logo"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/c5249c80b0c5ce72bddf7a7240f6f723cb51187431cc0bd76dc81bad8b745e20?placeholderIfAbsent=true"
              alt="Partner logo"
              className="partner-logo"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/c42b66f92eab4565a74c662a67f1ef914af79388022450a580f958a4737734e5?placeholderIfAbsent=true"
              alt="Partner logo"
              className="partner-logo"
            />
          </div>
        </div>
      </section>

      <section className="faq-section">
        <header className="section-header">
          <h2 className="section-title">FAQs</h2>
          <p className="section-description">
            Aquí encontrarás las respuestas a las preguntas más frecuentes sobre nuestros servicios.
          </p>
        </header>

        <div className="faq-list">
          <details className="faq-item">
            <summary className="faq-question">
              <span>¿Cuáles son los horarios?</span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/a5a12482792e3792fd68f8a29482ccc0ae8c220359f03e0f710c5149d9d116a0?placeholderIfAbsent=true"
                alt="Toggle"
                className="faq-toggle"
              />
            </summary>
            <p className="faq-answer">
              Nuestros horarios de atención son de lunes a viernes, de 9:00 a 18:00 horas. Los sábados atendemos de 10:00 a 14:00 horas. Estamos cerrados los domingos.
            </p>
          </details>

          <details className="faq-item">
            <summary className="faq-question">
              <span>¿Dónde están ubicados?</span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/a5a12482792e3792fd68f8a29482ccc0ae8c220359f03e0f710c5149d9d116a0?placeholderIfAbsent=true"
                alt="Toggle"
                className="faq-toggle"
              />
            </summary>
            <p className="faq-answer">
              Estamos ubicados en la Calle Principal 123, Ciudad. Puedes encontrarnos fácilmente cerca del parque central. Consulta nuestro mapa para más detalles.
            </p>
          </details>

          <details className="faq-item">
            <summary className="faq-question">
              <span>¿Cómo puedo contactarlos?</span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/a5a12482792e3792fd68f8a29482ccc0ae8c220359f03e0f710c5149d9d116a0?placeholderIfAbsent=true"
                alt="Toggle"
                className="faq-toggle"
              />
            </summary>
            <p className="faq-answer">
              Puedes contactarnos a través de nuestro formulario en línea o llamándonos al 123-456-7890. También puedes enviarnos un correo a info@catania.com. Estamos aquí para ayudarte.
            </p>
          </details>

          <details className="faq-item">
            <summary className="faq-question">
              <span>¿Tienen servicio a domicilio?</span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/a5a12482792e3792fd68f8a29482ccc0ae8c220359f03e0f710c5149d9d116a0?placeholderIfAbsent=true"
                alt="Toggle"
                className="faq-toggle"
              />
            </summary>
            <p className="faq-answer">
              Sí, ofrecemos servicio a domicilio para pedidos mayores a un monto específico. Asegúrate de consultar las condiciones en nuestra sección de servicios. Estamos comprometidos a facilitarte la experiencia.
            </p>
          </details>

          <details className="faq-item">
            <summary className="faq-question">
              <span>¿Puedo personalizar mis pedidos?</span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/19212d5c728649939294929a3b45f164/6edff1e654cb94c1e034d7d7f29f868b6239cc5c9c814b537028f003172cd4ea?placeholderIfAbsent=true"
                alt="Toggle"
                className="faq-toggle"
              />
            </summary>
            <p className="faq-answer">
              Por supuesto, ofrecemos opciones de personalización para todos nuestros productos. Puedes elegir colores, diseños y más. Contáctanos para discutir tus necesidades específicas.
            </p>
          </details>  
        </div>

        <div className="faq-cta">
          <div className="cta-content">
            <h3 className="cta-title">¿Aún tienes dudas?</h3>
            <p className="cta-text">Estamos aquí para ayudarte.</p>
          </div>
          <button className="btn btn-secondary">Contactar</button>
        </div>
      </section>
    </main>
  );
};

export default Contacto;