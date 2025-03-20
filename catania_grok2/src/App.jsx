// landing-page/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './views/Inicio';
import Nosotros from './views/Nosotros';
import Servicios from './views/Servicios';
import Productos from './views/Productos';
import Contacto from './views/Contacto';
import Uniformes from './views/Uniformes';
import Promocionales from './views/Promocionales';
import Especiales from './views/Especiales';
import UniformeDetalle from './views/UniformeDetalle';
import ProductDetail from './views/ProductDetail';
import Sidebar from './components/Sidebar';
import EspecialDetail from './views/EspecialDetail';
import WhatsAppWidget from './components/WhatsAppWidget'; // Asegúrate de crear este componente

// Componente Layout para envolver las rutas
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet /> {/* Aquí se renderizan las rutas */}
      <WhatsAppWidget /> {/* Widget visible en todas las vistas */}
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="nosotros" element={<Nosotros />} />
          <Route path="servicios" element={<Servicios />} />
          <Route path="productos" element={<Productos />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="uniformes" element={<Uniformes />} />
          <Route path="promocionales" element={<Promocionales />} />
          <Route path="especiales" element={<Especiales />} />
          <Route path="uniforme/:id" element={<UniformeDetalle />} />
          <Route path="promocionales/product/:id" element={<ProductDetail />} />
          <Route path="sidebar" element={<Sidebar />} /> {/* Corregí "Sidebar" a minúscula por convención */}
          <Route path="/especiales" element={<Especiales />} />
          <Route path="/especial/:id" element={<EspecialDetail />} />  
        </Route>
      </Routes>
    </Router>
  );
}

export default App;