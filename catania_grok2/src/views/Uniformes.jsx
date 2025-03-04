// landing-page/src/views/Uniformes.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SidebarUniformes from '../components/SidebarUniformes';
import './Uniformes.css';

const Uniformes = () => {
  const [uniformes, setUniformes] = useState([]);
  const [filteredUniformes, setFilteredUniformes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 24; // 6x4 = 24 productos por página

  useEffect(() => {
    fetchUniformes();
  }, []);

  const fetchUniformes = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:8000/api/uniformes', {
        headers: {
          'Accept': 'application/json',
        },
      });
      console.log('Respuesta de la API:', response.data); // Depuración
      const data = Array.isArray(response.data) ? response.data : (response.data.data || []);

      // Organizar uniformes por categoría
      const uniformesPorTipo = {
        Industriales: [],
        Médicos: [],
        Escolares: [],
        Corporativos: []
      };

      data.forEach(uniforme => {
        if (uniformesPorTipo.hasOwnProperty(uniforme.categoria)) {
          uniformesPorTipo[uniforme.categoria].push(uniforme);
        }
      });

      const tiposUniformes = [
        { tipo: 'Industriales', productos: uniformesPorTipo.Industriales },
        { tipo: 'Médicos', productos: uniformesPorTipo.Médicos },
        { tipo: 'Escolares', productos: uniformesPorTipo.Escolares },
        { tipo: 'Corporativos', productos: uniformesPorTipo.Corporativos }
      ].filter(tipo => tipo.productos.length > 0);

      setUniformes(tiposUniformes);
      setFilteredUniformes(tiposUniformes);
    } catch (error) {
      setError('Error al obtener los uniformes: ' + error.message);
      console.error('Error al obtener los uniformes:', error.response?.data || error);
      console.log('Respuesta completa del error:', error.response);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (searchTerm) => {
    let filtered = [...uniformes];
    if (searchTerm) {
      filtered = uniformes.map(tipo => ({
        ...tipo,
        productos: tipo.productos.filter(p => 
          p.nombre.toLowerCase().includes(searchTerm.toLowerCase()) || 
          p.descripcion.toLowerCase().includes(searchTerm.toLowerCase()) || 
          p.tipo.toLowerCase().includes(searchTerm.toLowerCase())
        )
      })).filter(tipo => tipo.productos.length > 0);
    }
    setFilteredUniformes(filtered);
    setCurrentPage(1); // Reinicia la paginación al buscar
  };

  const handleFilterChange = (category) => {
    if (category) {
      const filtered = uniformes.filter(tipo => tipo.tipo === category);
      setFilteredUniformes(filtered);
    } else {
      setFilteredUniformes(uniformes);
    }
    setCurrentPage(1); // Reinicia la paginación al filtrar
  };

  // Calcula los productos a mostrar según la página actual
  const getPaginatedProducts = () => {
    const allProducts = filteredUniformes.flatMap(tipo => tipo.productos);
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    return allProducts.slice(startIndex, endIndex);
  };

  // Calcula el número total de páginas
  const totalProducts = filteredUniformes.reduce((acc, tipo) => acc + tipo.productos.length, 0);
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Cargando uniformes...</div>;
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center p-8 text-red-600">
          <p className="text-xl mb-2">Error al cargar los uniformes</p>
          <p>{error}</p>
          <button onClick={() => fetchUniformes()} className="mt-4 btn btn-primary">
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="uniformes-container">
      <header className="section-header">
        <span className="section-tag">Uniformes</span>
        <h1 className="section-title">Nuestros Uniformes</h1>
        <p className="section-description">
          Explora nuestra gama de uniformes industriales, médicos, escolares y corporativos.
        </p>
      </header>

      <div className="uniformes-content">
        <SidebarUniformes 
          onSearch={handleSearch}
          onFilterChange={handleFilterChange}
          categories={uniformes.map(u => u.tipo)}
        />
        
        <div className="products-main">
          <div className="products-header">
            <div className="products-count">
              Mostrando {totalProducts} uniformes
            </div>
          </div>

          <div className="uniformes-grid">
            {getPaginatedProducts().map((uniforme) => {
              const imageSrc = uniforme.foto_path 
                ? `http://localhost:8000/storage/${uniforme.foto_path}` 
                : 'https://via.placeholder.com/300x300?text=No+image'; // Solo foto_path

              return (
                <Link to={`/uniforme/${uniforme.id}`} key={uniforme.id} className="uniforme-card-link">
                  <article className="uniforme-card">
                    <img
                      src={imageSrc}
                      alt={uniforme.nombre}
                      className="uniforme-image"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/300x300?text=No+image';
                        console.error('Error loading image:', e);
                      }}
                    />
                    <div className="uniforme-content">
                      <h3 className="uniforme-title">{uniforme.nombre}</h3>
                      <p className="uniforme-category">Categoría: {uniforme.categoria}</p>
                      <p className="uniforme-type">Tipo: {uniforme.tipo}</p>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>

          {/* Paginación */}
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => setCurrentPage(index + 1)}
                className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      <Link to="/" className="back-link">Volver a Inicio</Link>
    </div>
  );
};

export default Uniformes;