// landing-page/src/views/UniformeDetalle.jsx
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

  useEffect(() => {
    fetchUniforme();
  }, [id]);

  const fetchUniforme = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:8000/api/uniformes/${id}`);
      const data = response.data; // Ajusta según si es response.data o response.data.data
      setUniforme(data);
    } catch (error) {
      setError('Error al obtener el uniforme: ' + error.message);
      console.error('Error al obtener el uniforme:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Cargando...</div>;
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center p-8 text-red-600">
          <p className="text-xl mb-2">Error</p>
          <p>{error}</p>
          <button onClick={() => navigate('/uniformes')} className="mt-4 btn btn-primary">
            Volver al catálogo
          </button>
        </div>
      </div>
    );
  }

  if (!uniforme) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center p-8 text-red-600">
          <p className="text-xl mb-2">Uniforme no encontrado</p>
          <button onClick={() => navigate('/uniformes')} className="mt-4 btn btn-primary">
            Volver al catálogo
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="uniforme-detalle-container">
      <header className="section-header">
        <span className="section-tag">Uniformes</span>
        <h1 className="section-title">Detalles del Uniforme</h1>
      </header>

      <div className="product-detail">
        <div className="product-image-container">
          {uniforme.foto_path ? (
            <img src={`http://localhost:8000/storage/${uniforme.foto_path}`} alt={uniforme.nombre} className="product-image" />
          ) : (
            <div className="product-image placeholder">No hay foto</div>
          )}
        </div>
        <div className="product-info">
          <h2 className="product-name">{uniforme.nombre}</h2>
          <p className="product-description">{uniforme.descripcion}</p>
          <p className="product-type">Categoría: {uniforme.categoria}</p>
          <p className="product-type">Tipo: {uniforme.tipo}</p>
          <button className="btn btn-primary mt-4" onClick={() => navigate('/uniformes')}>
            Volver al catálogo
          </button>
        </div>
      </div>
    </div>
  );
};

export default UniformeDetalle;