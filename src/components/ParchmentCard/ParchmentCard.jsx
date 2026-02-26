import styles from './ParchmentCard.module.css'

/**
 * ParchmentCard — Card con estética de pergamino.
 *
 * Props:
 *   icon    {string}  URL de icono SVG opcional
 *   iconAlt {string}  Alt del icono
 *   title   {string}  Título de la card
 *   children          Contenido de la card
 *   accent  {boolean} Si true, muestra borde dorado más brillante
 *   dark    {boolean} Si true, usa fondo oscuro (modo noche) en vez de pergamino
 *   className {string} Clases extra
 */
export default function ParchmentCard({
  icon,
  iconAlt = '',
  title,
  children,
  accent = false,
  dark = false,
  className = '',
}) {
  return (
    <article
      className={[
        styles.card,
        accent ? styles.accent : '',
        dark ? styles.dark : styles.light,
        className,
      ].join(' ')}
    >
      {icon && (
        <div className={styles.iconWrap} aria-hidden="true">
          <img src={icon} alt={iconAlt} className={styles.icon} />
        </div>
      )}
      {title && <h3 className={styles.title}>{title}</h3>}
      <div className={styles.body}>{children}</div>
      {/* Corner ornaments */}
      <span className={`${styles.corner} ${styles.tl}`} aria-hidden="true" />
      <span className={`${styles.corner} ${styles.tr}`} aria-hidden="true" />
      <span className={`${styles.corner} ${styles.bl}`} aria-hidden="true" />
      <span className={`${styles.corner} ${styles.br}`} aria-hidden="true" />
    </article>
  )
}
