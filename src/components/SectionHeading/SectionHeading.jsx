import styles from './SectionHeading.module.css'

/**
 * SectionHeading — Título de sección con separador decorativo.
 *
 * Props:
 *   title   {string}  Texto del título
 *   sub     {string}  Subtítulo opcional
 *   center  {boolean} Centrar texto (default true)
 *   as      {string}  Tag HTML del heading (default 'h2')
 */
export default function SectionHeading({
  title,
  sub,
  center = true,
  as: Tag = 'h2',
}) {
  return (
    <div className={`${styles.wrap} ${center ? styles.centered : ''}`}>
      <Tag className={styles.title}>{title}</Tag>
      <div className={styles.divider} aria-hidden="true">
        <img src="assets/divider_rune.svg" alt="" className={styles.dividerImg} />
      </div>
      {sub && <p className={styles.sub}>{sub}</p>}
    </div>
  )
}
