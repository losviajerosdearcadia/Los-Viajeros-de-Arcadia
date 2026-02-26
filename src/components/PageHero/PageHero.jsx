import styles from './PageHero.module.css'

/**
 * PageHero — Cabecera de página con imagen de fondo, título y subtítulo.
 *
 * Props:
 *   title        {string}   Título principal
 *   subtitle     {string}   Texto secundario opcional
 *   bg           {string}   URL de imagen de fondo (default: bg_stars.svg)
 *   size         {'lg'|'md'} Altura del hero (default 'md')
 *   overlay      {string}   Color del overlay CSS (default semi-transparente oscuro)
 *   children     {ReactNode} Contenido extra bajo el subtítulo
 */
export default function PageHero({
  title,
  subtitle,
  bg = 'assets/bg_stars.svg',
  size = 'md',
  children,
}) {
  return (
    <section
      className={`${styles.hero} ${styles[size]}`}
      style={{ '--hero-bg': `url(${bg})` }}
      aria-label={`Hero: ${title}`}
    >
      <div className={styles.overlay} aria-hidden="true" />
      <div className={`${styles.content} container`}>
        {/* Decorative star */}
        <img
          src="assets/icon_north_star.svg"
          alt=""
          aria-hidden="true"
          className={styles.star}
        />
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {children && <div className={styles.extra}>{children}</div>}
        {/* Bottom divider */}
        <div className={styles.dividerWrap} aria-hidden="true">
          <img src="assets/divider_rune.svg" alt="" className={styles.divider} />
        </div>
      </div>
    </section>
  )
}
