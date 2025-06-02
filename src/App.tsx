import React, { useState, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Intro from './components/Intro';
import MainLayout from './layouts/MainLayout';
import './styles/global.css';
import LoadingSpinner from './components/LoadingSpinner';

const Inicio = lazy(() => import('./pages/Inicio'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));
const Clients = lazy(() => import('./pages/Clients'));
const Portafolio = lazy(() => import('./pages/Portafolio'));
const Blog = lazy(() => import('./pages/Blog'));
const ArticlePage = lazy(() => import('./pages/Article'));

function App() {
  const [hasEntered, setHasEntered] = useState(false);

  if (!hasEntered) {
    return <Intro onEnter={() => setHasEntered(true)} />;
  }

  return (
    <MainLayout>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/about" element={<About />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/clientes" element={<Clients />} />
          <Route path="/portafolio" element={<Portafolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<ArticlePage />} />
        </Routes>
      </Suspense>
    </MainLayout>
  );
}

export default App;
