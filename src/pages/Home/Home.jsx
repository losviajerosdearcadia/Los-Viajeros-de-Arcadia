import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import ParchmentCard from '../../components/ParchmentCard/ParchmentCard'
import styles from './Home.module.css'

export default function Home() {
  useEffect(() => {
    document.title = 'Los Viajeros de Arcadia — Inicio'
  }, [])

  return (
    <div className={styles.home}>
      {/* ── HERO ── */}
      <section className={styles.hero} aria-label="Presentación principal">
        <div className={styles.heroOverlay} aria-hidden="true" />
        <div className={`${styles.heroContent} container`}>
          <img
            src="assets/crest_arcadia.svg"
            alt="Emblema de Los Viajeros de Arcadia"
            className={styles.heroCrest}
          />
          <h1 className={styles.heroTitle}>Los Viajeros de Arcadia</h1>
          <p className={styles.heroTagline}>
            Donde los caminos se cruzan bajo la misma estrella
          </p>
          <div className={styles.heroDivider} aria-hidden="true">
            <img src="assets/divider_rune.svg" alt="" />
          </div>
          <p className={styles.heroDesc}>
            Una comunidad de cosplayers, creativos, jugadores y aventureros
            que comparten un ideal: la hermandad sobre la jerarquía,
            el camino sobre el destino.
          </p>
          <div className={styles.heroCtas}>
            <Link to="/lore" className={styles.ctaPrimary}>Descubrir nuestra historia</Link>
            <Link to="/codigo" className={styles.ctaSecondary}>Código de ética</Link>
          </div>
        </div>
        <div className={styles.heroStars} aria-hidden="true" />
      </section>

      {/* ── QUIÉNES SOMOS ── */}
      <section className={styles.section} id="quienes-somos">
        <div className="container">
          <SectionHeading
            title="Quiénes Somos"
            sub="No somos un club. No somos una facción. Somos viajeros."
          />
          <div className={styles.quienesFlex}>
            <div className={styles.quienesText}>
              <p>
                Los Viajeros de Arcadia nacimos de la convicción de que la fantasía no necesita
                fronteras para ser real. Somos personas que encontramos en el cosplay, los juegos
                de rol, los torneos de cartas y las expos un lenguaje común: el de quien construye
                mundos con las manos y los habita con el corazón.
              </p>
              <p>
                Arcadia no es un lugar en el mapa. Es el espacio que se crea cuando personas
                distintas deciden caminar juntas con respeto y con fuego propio. Cada uno trae su
                historia, su arte, su juego favorito, su traje cosido a mano. Juntos hacemos algo
                más grande que cualquiera de nosotros por separado.
              </p>
              <p>
                Estamos presentes en eventos de anime y cultura pop, en festivales medievales,
                en sesiones de D&D alrededor de una mesa, en directos de gaming y en la quietud
                de una sesión de fotos bajo el bosque. Nuestra única brújula es la Estrella del
                Norte: constante, visible para todos, justa con quien la busca.
              </p>
            </div>
            <div className={styles.quienesImage}>
              <img
                src="assets/bg_forest.svg"
                alt="Bosque nocturno bajo las estrellas"
                className={styles.forestImg}
              />
              <div className={styles.quienesQuote}>
                <span aria-hidden="true">✦</span>
                <blockquote>
                  "No viajamos para escapar de la vida,<br />
                  sino para que la vida no escape de nosotros."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── NUESTROS SÍMBOLOS ── */}
      <section className={`${styles.section} ${styles.sectionDark}`} id="simbolos">
        <div className="container">
          <SectionHeading
            title="Nuestros Símbolos"
            sub="Cada imagen que llevamos tiene un peso y una promesa."
          />
          <div className={styles.symbolsGrid}>
            <ParchmentCard
              icon="assets/icon_north_star.svg"
              title="La Estrella del Norte"
              accent
            >
              <p>
                Polaris no se mueve. Mientras el cielo gira, ella permanece. Para Los Viajeros,
                la Estrella del Norte es el símbolo de los valores que no negociamos: la honestidad,
                el respeto y la lealtad al grupo. Cuando dudas del camino, mira arriba.
              </p>
            </ParchmentCard>

            <ParchmentCard
              icon="assets/icon_campfire.svg"
              title="El Fuego de Campamento"
            >
              <p>
                El fuego reúne. No importa cuánto tiempo hayan pasado los viajeros separados;
                al regresar al campamento, el fuego los recibe igual. Es el símbolo de nuestra
                comunidad: cálida, abierta, segura. Aquí todos tienen un lugar junto a las llamas.
              </p>
            </ParchmentCard>

            <ParchmentCard
              icon="assets/icon_map.svg"
              title="El Mapa y el Viaje"
            >
              <p>
                Un mapa no te dice cómo vivir el camino. Te da orientación, pero los pies son
                tuyos. En Arcadia, los eventos, las actividades y los espacios son el mapa:
                pautas, no jaulas. Cada viajero traza su ruta con libertad y responsabilidad.
              </p>
            </ParchmentCard>
          </div>
        </div>
      </section>

      {/* ── QUÉ HACEMOS ── */}
      <section className={styles.section} id="que-hacemos">
        <div className="container">
          <SectionHeading
            title="Qué Hacemos"
            sub="Desde los escenarios de expos hasta las mesas de juego, habitamos todos los mundos."
          />
          <div className={styles.activitiesGrid}>
            {[
              {
                emoji: '⚔️',
                title: 'Cosplay y Expos',
                text: 'Participamos en expos de anime y cultura pop con cosplays elaborados. Organizamos sesiones grupales, desfiles internos y colaboraciones con fotógrafos.',
              },
              {
                emoji: '🎲',
                title: 'Juegos de Rol y Medieval',
                text: 'Desde campañas de D&D hasta festivales medievales con esgrima artística. Si hay dados, mazmorras o taberna de fondo, estamos ahí.',
              },
              {
                emoji: '🎮',
                title: 'Gaming y Directos',
                text: 'Sesiones de gaming colectivo, directos en plataformas, torneos informales entre miembros. La pantalla también es un lugar de encuentro.',
              },
              {
                emoji: '🃏',
                title: 'TCGs y Torneos',
                text: 'Magic: The Gathering, Pokémon TCG, Yu-Gi-Oh! y más. Organizamos tardes de juego, intercambios de cartas y eventos temáticos para todos los niveles.',
              },
              {
                emoji: '📸',
                title: 'Fotografía y Arte',
                text: 'Colaboraciones con fotógrafos aficionados y profesionales. Sesiones temáticas, portfolios de personajes y proyectos visuales compartidos.',
              },
              {
                emoji: '🌿',
                title: 'Encuentros Presenciales',
                text: 'Reuniones informales, picnics temáticos, visitas a eventos. El espacio físico donde la comunidad digital se hace real y los lazos se fortalecen.',
              },
            ].map(({ emoji, title, text }) => (
              <div key={title} className={styles.activityCard}>
                <span className={styles.activityEmoji} role="img" aria-hidden="true">{emoji}</span>
                <h3 className={styles.activityTitle}>{title}</h3>
                <p className={styles.activityText}>{text}</p>
              </div>
            ))}
          </div>
          <div className={styles.activitiesCta}>
            <Link to="/eventos" className={styles.ctaPrimary}>Ver todas las actividades</Link>
          </div>
        </div>
      </section>

      {/* ── CANALES ── */}
      <section className={`${styles.section} ${styles.sectionDark}`} id="canales">
        <div className="container">
          <SectionHeading
            title="Nuestros Canales"
            sub="Encuéntranos donde estés. Siempre hay una hoguera encendida."
          />
          <div className={styles.channelsGrid}>
            {[
              { name: 'Discord', desc: 'El campamento principal. Canales temáticos, anuncios, voz y texto. El lugar donde la comunidad vive día a día.', icon: '💬', soon: true },
              { name: 'Instagram', desc: 'Fotografías de eventos, cosplays, arte y momentos del grupo. El escaparate visual de nuestra comunidad.', icon: '📷', soon: true },
              { name: 'YouTube', desc: 'Directos archivados, resúmenes de eventos, tutoriales de cosplay y gameplay. El registro audiovisual del viaje.', icon: '▶️', soon: true },
              { name: 'TikTok', desc: 'Contenido breve y dinámico: detrás de cámaras, clips de eventos y vida comunitaria en formato corto.', icon: '🎵', soon: true },
            ].map(({ name, desc, icon, soon }) => (
              <div key={name} className={styles.channelCard}>
                <span className={styles.channelIcon} role="img" aria-label={name}>{icon}</span>
                <div className={styles.channelInfo}>
                  <h3 className={styles.channelName}>
                    {name}
                    {soon && <span className={styles.badge}>Próximamente</span>}
                  </h3>
                  <p className={styles.channelDesc}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ÚNETE ── */}
      <section className={styles.joinSection} id="unete">
        <div className={styles.joinBg} aria-hidden="true" />
        <div className={`${styles.joinContent} container`}>
          <img src="assets/icon_north_star.svg" alt="" width="60" height="60" className={styles.joinStar} aria-hidden="true" />
          <SectionHeading
            title="Únete al Viaje"
            sub="No necesitas un traje elaborado ni ser experto en nada. Solo necesitas ganas de caminar con otros."
          />
          <div className={styles.joinGrid}>
            <div className={styles.joinInfo}>
              <h3 className={styles.joinSubtitle}>¿Cómo unirse?</h3>
              <ol className={styles.joinSteps}>
                <li>Encuéntranos en Discord o Instagram (próximamente).</li>
                <li>Preséntate en el canal de bienvenida.</li>
                <li>Lee el Código de Ética del grupo.</li>
                <li>Participa. Eso es todo. No hay prueba de admisión.</li>
              </ol>
            </div>
            <div className={styles.joinContact}>
              <h3 className={styles.joinSubtitle}>Contacto</h3>
              <p className={styles.joinContactText}>
                Por ahora, todos nuestros canales están en construcción.
                Si deseas ponerte en contacto directamente con la coordinación del grupo,
                escríbenos a:
              </p>
              <p className={styles.joinEmail}>
                <strong>contacto@[próximamente].com</strong>
              </p>
              <p className={styles.joinNote}>
                <em>Este espacio se actualizará cuando los canales oficiales estén activos.</em>
              </p>
            </div>
          </div>
          <div className={styles.joinDivider} aria-hidden="true">
            <img src="assets/divider_rune.svg" alt="" />
          </div>
          <Link to="/codigo" className={styles.ctaSecondary}>
            Leer el Código de Ética antes de unirte →
          </Link>
        </div>
      </section>
    </div>
  )
}
