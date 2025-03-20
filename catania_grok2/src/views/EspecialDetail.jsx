// landing-page/src/views/EspecialDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './EspecialDetail.css';

const EspecialDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [especial, setEspecial] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // URL base definida en el entorno para el backend de especiales
  const apiUrl = import.meta.env.VITE_ESPECIALES_API_URL;

  useEffect(() => {
    fetchEspecial();
  }, [id]);

  const fetchEspecial = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${apiUrl}/api/especiales/${id}`, {
        headers: { 'Accept': 'application/json' },
      });
      const data = response.data;
      setEspecial(data);
    } catch (error) {
      setError('Error al obtener el especial: ' + error.message);
      console.error('Error en fetchEspecial:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="especial-detalle-container">
        <p>Cargando...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="especial-detalle-container error">
        <p>{error}</p>
        <button className="btn" onClick={() => navigate('/especiales')}>
          Volver al catálogo
        </button>
      </div>
    );
  }

  if (!especial) {
    return (
      <div className="especial-detalle-container error">
        <p>Especial no encontrado</p>
        <button className="btn" onClick={() => navigate('/especiales')}>
          Volver al catálogo
        </button>
      </div>
    );
  }

  // Si no existe un arreglo de fotos, usamos el campo foto_path
  const fotos = (especial.fotos && especial.fotos.length > 0)
    ? especial.fotos
    : (especial.foto_path ? [{ foto_path: especial.foto_path }] : []);

  return (
    <div className="especial-detalle-container">
      <header className="section-header">
        <span className="section-tag">Especiales</span>
        <h1 className="section-title">Detalles del Producto Especial</h1>
      </header>

      <div className="especial-detail-content">
        <div className="gallery">
          {fotos.length > 1 && (
            <div className="thumbnails">
              {fotos.map((foto, index) => (
                <img
                  key={foto.id || index}
                  src={`${apiUrl}/storage/${foto.foto_path}`}
                  alt={`Thumbnail ${index}`}
                  className={`thumbnail ${index === selectedIndex ? 'active' : ''}`}
                  onClick={() => setSelectedIndex(index)}
                />
              ))}
            </div>
          )}
          <div className="main-image-container">
            {fotos.length > 0 ? (
              <img
                src={`${apiUrl}/storage/${fotos[selectedIndex].foto_path}`}
                alt={especial.nombre}
                className="main-image"
              />
            ) : (
              <div className="main-image placeholder">No hay foto</div>
            )}
          </div>
        </div>
        <div className="especial-info">
          <h2 className="product-name">{especial.nombre}</h2>
          <p className="product-description">{especial.descripcion}</p>
          <p className="product-category">Categoría: {especial.categoria}</p>
          <button className="btn" onClick={() => navigate('/especiales')}>
            Volver al catálogo
          </button>
        </div>
      </div>
    </div>
  );
};

export default EspecialDetail;