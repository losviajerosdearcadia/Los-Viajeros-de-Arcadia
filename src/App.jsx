import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Home from './pages/Home/Home'
import Lore from './pages/Lore/Lore'
import Codigo from './pages/Codigo/Codigo'
import Eventos from './pages/Eventos/Eventos'
import styles from './App.module.css'

function AnimatedRoutes() {
  const location = useLocation()
  const mainRef = useRef(null)

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.classList.remove(styles.fadeIn)
      // Force reflow
      void mainRef.current.offsetHeight
      mainRef.current.classList.add(styles.fadeIn)
    }
  }, [location.pathname])

  return (
    <main ref={mainRef} className={styles.main}>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/lore" element={<Lore />} />
        <Route path="/codigo" element={<Codigo />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  )
}

function NotFound() {
  useEffect(() => { document.title = 'Página no encontrada — Los Viajeros de Arcadia' }, [])
  return (
    <div style={{
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1rem',
      textAlign: 'center',
      padding: '2rem',
    }}>
      <img src="assets/icon_north_star.svg" alt="" width="80" height="80" style={{ opacity: 0.5 }} />
      <h1 style={{ fontSize: '2rem', color: 'var(--gold-soft)' }}>Sendero no encontrado</h1>
      <p style={{ color: 'var(--text-secondary)' }}>
        Esta ruta no aparece en nuestros mapas. Quizás el camino aún no ha sido trazado.
      </p>
      <a href="#/" style={{
        color: 'var(--gold-bright)',
        border: '1px solid var(--border-gold)',
        padding: '0.5rem 1.5rem',
        borderRadius: 'var(--radius-sm)',
      }}>Volver al inicio</a>
    </div>
  )
}

export default function App() {
  return (
    <div className={styles.app}>
      <ScrollToTop />
      <Header />
      <AnimatedRoutes />
      <Footer />
    </div>
  )
}
