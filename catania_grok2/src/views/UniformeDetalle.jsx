import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './UniformeDetalle.css';

const UniformeDetalle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [uniforme, setUniforme] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // Índice de la foto seleccionada en la galería
  const [selectedIndex, setSelectedIndex] = useState(0);

  // URL base definida en el entorno
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetchUniforme();
  }, [id]);

  const fetchUniforme = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${apiUrl}/api/uniformes/${id}`, {
        headers: { 'Accept': 'application/json' },
      });
      const data = response.data;
      setUniforme(data);
    } catch (error) {
      setError('Error al obtener el uniforme: ' + error.message);
      console.error('Error en fetchUniforme:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="uniforme-detalle-container">
        <p>Cargando...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="uniforme-detalle-container error">
        <p>{error}</p>
        <button className="btn" onClick={() => navigate('/uniformes')}>
          Volver al catálogo
        </button>
      </div>
    );
  }

  if (!uniforme) {
    return (
      <div className="uniforme-detalle-container error">
        <p>Uniforme no encontrado</p>
        <button className="btn" onClick={() => navigate('/uniformes')}>
          Volver al catálogo
        </button>
      </div>
    );
  }

  // Si no existe un arreglo de fotos, usamos el campo foto_path
  const fotos = (uniforme.fotos && uniforme.fotos.length > 0)
    ? uniforme.fotos
    : (uniforme.foto_path ? [{ foto_path: uniforme.foto_path }] : []);

  return (
    <div className="uniforme-detalle-container">
      <header className="section-header">
        <span className="section-tag">Uniformes</span>
        <h1 className="section-title">Detalles del Uniforme</h1>
      </header>

      <div className="uniforme-detail-content">
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
                alt={uniforme.nombre}
                className="main-image"
              />
            ) : (
              <div className="main-image placeholder">No hay foto</div>
            )}
          </div>
        </div>
        <div className="uniforme-info">
          <h2 className="product-name">{uniforme.nombre}</h2>
          <p className="product-description">{uniforme.descripcion}</p>
          <p className="product-category">Categoría: {uniforme.categoria}</p>
          <p className="product-type">Tipo: {uniforme.tipo}</p>
          <button className="btn" onClick={() => navigate('/uniformes')}>
            Volver al catálogo
          </button>
        </div>
      </div>
    </div>
  );
};

export default UniformeDetalle;
