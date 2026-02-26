import { useState } from 'react'
import styles from './SidebarNav.module.css'

/**
 * SidebarNav — Navegación lateral con soporte de secciones colapsables.
 *
 * Props:
 *   sections  {Array}   Lista de secciones: { id, label, children?: [{ id, label }] }
 *   active    {string}  ID de la sección activa
 *   onSelect  {fn}      Callback cuando se selecciona una sección (id)
 *   title     {string}  Título del panel de nav
 */
export default function SidebarNav({ sections = [], active, onSelect, title = 'Contenido' }) {
  const [expanded, setExpanded] = useState(() => {
    // Expand the section that contains the current active item
    const parent = sections.find(
      (s) => s.id === active || s.children?.some((c) => c.id === active)
    )
    return parent ? parent.id : sections[0]?.id
  })

  const toggleExpand = (id) => {
    setExpanded((prev) => (prev === id ? null : id))
  }

  const handleSelect = (id) => {
    onSelect?.(id)
  }

  return (
    <nav className={styles.nav} aria-label={title}>
      <div className={styles.header}>
        <span className={styles.headerIcon} aria-hidden="true">✦</span>
        <h2 className={styles.headerTitle}>{title}</h2>
      </div>
      <ul className={styles.list} role="list">
        {sections.map((section) => {
          const hasChildren = section.children?.length > 0
          const isExpanded = expanded === section.id
          const isActive =
            active === section.id ||
            section.children?.some((c) => c.id === active)

          return (
            <li key={section.id} className={styles.item}>
              {hasChildren ? (
                /* Collapsible parent */
                <>
                  <button
                    className={`${styles.sectionBtn} ${isActive ? styles.parentActive : ''}`}
                    onClick={() => {
                      toggleExpand(section.id)
                      handleSelect(section.id)
                    }}
                    aria-expanded={isExpanded}
                  >
                    <span className={styles.btnText}>{section.label}</span>
                    <span className={`${styles.chevron} ${isExpanded ? styles.chevronOpen : ''}`} aria-hidden="true">
                      ›
                    </span>
                  </button>
                  <ul
                    className={`${styles.subList} ${isExpanded ? styles.subListOpen : ''}`}
                    aria-hidden={!isExpanded}
                  >
                    {section.children.map((child) => (
                      <li key={child.id}>
                        <button
                          className={`${styles.subBtn} ${active === child.id ? styles.active : ''}`}
                          onClick={() => handleSelect(child.id)}
                          tabIndex={isExpanded ? 0 : -1}
                        >
                          {child.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                /* Simple item */
                <button
                  className={`${styles.sectionBtn} ${active === section.id ? styles.active : ''}`}
                  onClick={() => handleSelect(section.id)}
                >
                  <span className={styles.btnText}>{section.label}</span>
                </button>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
