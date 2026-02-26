import { NavLink } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.inner} container`}>
        {/* Divider top */}
        <div className={styles.divider}>
          <img src="assets/divider_rune.svg" alt="" aria-hidden="true" />
        </div>

        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brand}>
            <img src="assets/crest_arcadia.svg" alt="Emblema de Arcadia" width="56" height="68" className={styles.crest} />
            <p className={styles.motto}>
              "No viajamos para escapar,<br />sino para encontrarnos."
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Pie de página">
            <h3 className={styles.colTitle}>Navegar</h3>
            <ul className={styles.linkList}>
              <li><NavLink to="/">Inicio</NavLink></li>
              <li><NavLink to="/lore">Lore e Historia</NavLink></li>
              <li><NavLink to="/codigo">Código de Ética</NavLink></li>
              <li><NavLink to="/eventos">Actividades</NavLink></li>
            </ul>
          </nav>

          {/* Channels placeholder */}
          <div>
            <h3 className={styles.colTitle}>Canales</h3>
            <ul className={styles.linkList}>
              <li><a href="#/" aria-label="Discord (próximamente)">Discord</a></li>
              <li><a href="#/" aria-label="Instagram (próximamente)">Instagram</a></li>
              <li><a href="#/" aria-label="YouTube (próximamente)">YouTube</a></li>
              <li><a href="#/" aria-label="TikTok (próximamente)">TikTok</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <span className={styles.star} aria-hidden="true">✦</span>
          <p>
            © {new Date().getFullYear()} Los Viajeros de Arcadia.
            Hecho con dedicación y fuego de campamento.
          </p>
        </div>
      </div>
    </footer>
  )
}
