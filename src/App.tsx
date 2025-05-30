import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Intro from './components/Intro'
import Inicio from './pages/Inicio'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Clients from './pages/Clients'
import Portafolio from './pages/Portafolio'
import Blog from './pages/Blog'
import ArticlePage from './pages/Article'
import MainLayout from './layouts/MainLayout'
import './styles/global.css';

function App() {
  const [hasEntered, setHasEntered] = useState(false)

  if (!hasEntered) {
    return <Intro onEnter={() => setHasEntered(true)} />
  }

  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Inicio />}/>
        <Route path="/about" element={<About />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/clientes" element={<Clients />} />
        <Route path="/portafolio" element={<Portafolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<ArticlePage />} />
      </Routes>
    </MainLayout>
  )
}

export default App
