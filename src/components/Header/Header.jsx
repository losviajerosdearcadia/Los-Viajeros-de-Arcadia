import { useState, useEffect, useRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import styles from './Header.module.css'

const NAV_LINKS = [
  { to: '/',        label: 'Inicio' },
  { to: '/lore',    label: 'Lore' },
  { to: '/codigo',  label: 'Código' },
  { to: '/eventos', label: 'Eventos' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef(null)
  const btnRef = useRef(null)
  const location = useLocation()

  // Close menu on route change
  useEffect(() => { setOpen(false) }, [location])

  // Scroll shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Trap focus & close on Escape
  useEffect(() => {
    if (!open) return
    const handleKey = (e) => {
      if (e.key === 'Escape') { setOpen(false); btnRef.current?.focus() }
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [open])

  // Close on outside click
  useEffect(() => {
    if (!open) return
    const handleClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [open])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`} role="banner">
      <div className={`${styles.inner} container`}>
        {/* Logo */}
        <NavLink to="/" className={styles.logo} aria-label="Los Viajeros de Arcadia — Inicio">
          <img
            src="assets/crest_arcadia.svg"
            alt=""
            width="40"
            height="48"
            className={styles.logoImg}
          />
          <span className={styles.logoText}>
            <span className={styles.logoMain}>Los Viajeros</span>
            <span className={styles.logoSub}>de Arcadia</span>
          </span>
        </NavLink>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav} aria-label="Navegación principal">
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ''}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          ref={btnRef}
          className={`${styles.hamburger} ${open ? styles.hamburgerOpen : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Nav */}
      <nav
        id="mobile-nav"
        ref={navRef}
        className={`${styles.mobileNav} ${open ? styles.mobileNavOpen : ''}`}
        aria-label="Navegación móvil"
        aria-hidden={!open}
      >
        {NAV_LINKS.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `${styles.mobileNavLink} ${isActive ? styles.active : ''}`
            }
            tabIndex={open ? 0 : -1}
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
