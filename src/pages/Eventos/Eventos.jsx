import { useEffect, useState } from 'react'
import PageHero from '../../components/PageHero/PageHero'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import styles from './Eventos.module.css'

/* ── Data ── */
const CATEGORIES = [
  { id: 'todos', label: 'Todos' },
  { id: 'cosplay', label: 'Cosplay y Expos' },
  { id: 'medieval', label: 'Medieval y Rol' },
  { id: 'gaming', label: 'Gaming' },
  { id: 'tcg', label: 'TCGs' },
  { id: 'foto', label: 'Fotografía' },
]

const ACTIVITIES = [
  {
    id: 'expos-anime',
    category: 'cosplay',
    emoji: '⚔️',
    title: 'Expos de Anime y Cosplay',
    bg: 'linear-gradient(135deg, #1a0d2a, #2d1a4a)',
    tags: ['Cosplay', 'Expos', 'Convenciones'],
    desc: 'Participamos en expos de anime y cultura pop como grupo organizado. Coordinamos asistencia colectiva, desfiles internos, concursos de cosplay y representación del colectivo. La preparación empieza semanas antes con diseño, confección y sesiones de prueba.',
    how: 'Anuncia tu interés en el canal de eventos. Coordinamos traslados, horarios y puntos de encuentro. Si llevas cosplay, hay un canal dedicado para mostrar avances y recibir feedback.',
    status: 'Próximo evento por confirmar',
  },
  {
    id: 'sesiones-foto',
    category: 'foto',
    emoji: '📸',
    title: 'Sesiones de Fotografía',
    bg: 'linear-gradient(135deg, #0d1a14, #1a3a2a)',
    tags: ['Fotografía', 'Cosplay', 'Arte'],
    desc: 'Organizamos sesiones fotográficas temáticas en locaciones naturales, urbanas o estudios. Colaboramos con fotógrafos amateur y profesionales para crear contenido visual de calidad. Los resultados se comparten en las redes del grupo y con los participantes para su portfolio.',
    how: 'Puede participar cualquier miembro, con o sin cosplay. Anunciamos fechas, locación y temática con antelación. Se coordinan slots de tiempo para que cada persona tenga su espacio.',
    status: 'Próximamente — Primavera 2025',
  },
  {
    id: 'dnd-campanas',
    category: 'medieval',
    emoji: '🎲',
    title: 'Campañas de D&D y Rol',
    bg: 'linear-gradient(135deg, #140d00, #2a1a08)',
    tags: ['D&D', 'Rol', 'Narrativa'],
    desc: 'Organizamos campañas de Dungeons & Dragons, Pathfinder y otros sistemas de rol, tanto para jugadores con experiencia como para quienes se acercan por primera vez. El énfasis está en la narrativa colaborativa, el compañerismo y la diversión sobre la perfección de reglas.',
    how: 'Publica tu interés en el canal de rol. Se forman grupos de 4–6 jugadores con un Dungeon Master voluntario. Las sesiones son semanales o quincenales, en formato presencial o en línea.',
    status: 'Campaña "Las Marcas del Norte" en curso',
  },
  {
    id: 'festivales-medievales',
    category: 'medieval',
    emoji: '🏰',
    title: 'Festivales Medievales',
    bg: 'linear-gradient(135deg, #0d1a0d, #1a3014)',
    tags: ['Medieval', 'Festivales', 'Historia'],
    desc: 'Asistimos a festivales medievales, ferias de recreación histórica y eventos temáticos de fantasía. Algunos miembros participan en actividades de esgrima artística, artesanías y representación de época. Una experiencia donde la fantasía se hace tangible.',
    how: 'Coordinamos asistencia grupal cuando hay festivales en la zona. No se requiere atuendo medieval para participar, aunque es bienvenido. Publicamos información sobre eventos en el canal de actividades.',
    status: 'Próximo festival por confirmar — 2025',
  },
  {
    id: 'gaming-directos',
    category: 'gaming',
    emoji: '🎮',
    title: 'Gaming y Directos',
    bg: 'linear-gradient(135deg, #0d0d1a, #1a1a3a)',
    tags: ['Gaming', 'Directos', 'Streaming'],
    desc: 'Sesiones de gaming colectivo en línea: desde multijugador cooperativo hasta torneos internos informales. También exploramos el streaming con directos donde miembros del grupo comparten su experiencia de juego. La plataforma será anunciada próximamente.',
    how: 'Únete al canal de gaming en Discord. Se organizan sesiones espontáneas y programadas. Cualquier miembro puede proponer un juego o una noche de gaming y convocar participantes.',
    status: 'Canal gaming activo — Directos próximamente',
  },
  {
    id: 'magic',
    category: 'tcg',
    emoji: '🃏',
    title: 'Magic: The Gathering',
    bg: 'linear-gradient(135deg, #1a0a08, #3a1408)',
    tags: ['Magic', 'TCG', 'Torneos'],
    desc: 'Tardes de Magic en formato Commander, Draft o Estándar. Organizamos partidas casuales para todos los niveles, intercambios de cartas y, ocasionalmente, torneos internos con pequeños premios. El objetivo es disfrutar del juego en comunidad, sin la presión del nivel competitivo.',
    how: 'Trae tu mazo o pide prestado uno de los decks comunitarios. Publicamos fechas de tardes de Magic en el canal de TCGs. Bienvenidos jugadores nuevos: enseñamos desde cero.',
    status: 'Tardes de Magic — Mensuales',
  },
  {
    id: 'pokemon-tcg',
    category: 'tcg',
    emoji: '⚡',
    title: 'Pokémon TCG',
    bg: 'linear-gradient(135deg, #0d1a0a, #1a3a14)',
    tags: ['Pokémon', 'TCG', 'Intercambio'],
    desc: 'Sesiones de Pokémon TCG para jugadores de todos los niveles. Desde partidas amistosas hasta torneos de draft con sobres. También organizamos sesiones de intercambio de cartas para que todos puedan completar sets o conseguir cartas que buscan.',
    how: 'Anuncia tu interés en el canal de TCGs. Se organizan mesas según niveles para que tanto principiantes como jugadores avanzados disfruten. Los torneos internos son gratuitos.',
    status: 'Próximo intercambio — Fecha por confirmar',
  },
  {
    id: 'yugioh',
    category: 'tcg',
    emoji: '🌀',
    title: 'Yu-Gi-Oh!',
    bg: 'linear-gradient(135deg, #14080d, #2a1020)',
    tags: ['Yu-Gi-Oh', 'TCG', 'Duelistas'],
    desc: 'Para los duelistas del grupo. Partidas en formatos Clásico, Speed Duel y OCG/TCG. No buscamos el meta perfecto; buscamos duelos divertidos y la nostalgia de un juego que muchos hemos amado desde niños. Los torneos internos tienen un enfoque temático y lúdico.',
    how: 'Únete al canal de TCGs y preséntate como jugador de Yu-Gi-Oh! Coordinamos partidas cuando hay masa crítica de jugadores interesados. Se admiten decks de cualquier era.',
    status: 'Activo — Partidas espontáneas',
  },
  {
    id: 'encuentros-presenciales',
    category: 'medieval',
    emoji: '🌿',
    title: 'Encuentros Presenciales',
    bg: 'linear-gradient(135deg, #0a140d, #142014)',
    tags: ['Presencial', 'Comunidad', 'Informal'],
    desc: 'Reuniones informales del grupo: picnics en parques, visitas colectivas a expos, noches de juegos de mesa, o simplemente pasar el rato. El objetivo es que la comunidad digital tenga momentos físicos donde los lazos se hagan más reales y duraderos.',
    how: 'Cualquier miembro puede proponer un encuentro. Se anuncia en el canal general con fecha, lugar y actividad tentativa. No se requiere ninguna preparación especial; solo ganas de compartir.',
    status: 'Frecuencia variable — Según propuestas',
  },
]

/* Placeholder calendar events */
const CALENDAR = [
  { date: 'Por confirmar', title: 'Expo Anime Ciudad', type: 'cosplay', note: 'Asistencia grupal — Detalles próximamente' },
  { date: 'Por confirmar', title: 'Sesión de fotografía — Parque Botánico', type: 'foto', note: 'Temática: Fantástica — Coordinación en canal de fotos' },
  { date: 'Mensual', title: 'Tarde de Magic Commander', type: 'tcg', note: 'Fecha exacta: anunciada el mes en curso' },
  { date: 'Quincenal', title: 'Campaña D&D — "Las Marcas del Norte"', type: 'medieval', note: 'Grupo cerrado — Consultar en canal de rol' },
  { date: 'Por confirmar', title: 'Festival Medieval Regional', type: 'medieval', note: 'Pendiente de confirmación de fechas' },
  { date: 'Semanal/variable', title: 'Gaming nocturno online', type: 'gaming', note: 'Convocatoria espontánea en canal de gaming' },
]

const TYPE_COLORS = {
  cosplay:  '#8b4fd8',
  foto:     '#2d6a3a',
  medieval: '#8b4a10',
  tcg:      '#1a4a8b',
  gaming:   '#1a1a6b',
}

export default function Eventos() {
  const [filter, setFilter] = useState('todos')

  useEffect(() => {
    document.title = 'Actividades y Eventos — Los Viajeros de Arcadia'
  }, [])

  const filtered = filter === 'todos'
    ? ACTIVITIES
    : ACTIVITIES.filter((a) => a.category === filter)

  return (
    <div className={styles.page}>
      <PageHero
        title="Actividades y Eventos"
        subtitle="Desde los escenarios de expo hasta la mesa de juego. Todos los mundos tienen un lugar aquí."
        bg="assets/bg_forest.svg"
        size="md"
      />

      <div className="container">
        {/* ── Category filter ── */}
        <div className={styles.filterWrap}>
          {CATEGORIES.map(({ id, label }) => (
            <button
              key={id}
              className={`${styles.filterBtn} ${filter === id ? styles.filterActive : ''}`}
              onClick={() => setFilter(id)}
              aria-pressed={filter === id}
            >
              {label}
            </button>
          ))}
        </div>

        {/* ── Activity cards ── */}
        <div className={styles.grid}>
          {filtered.map((act) => (
            <article key={act.id} className={styles.card}>
              <div
                className={styles.cardBg}
                style={{ background: act.bg }}
                aria-hidden="true"
              >
                <span className={styles.cardEmoji} role="img" aria-hidden="true">{act.emoji}</span>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardTags}>
                  {act.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                <h3 className={styles.cardTitle}>{act.title}</h3>
                <p className={styles.cardDesc}>{act.desc}</p>

                <div className={styles.cardSection}>
                  <h4 className={styles.cardSectionTitle}>
                    <span aria-hidden="true">→</span> Cómo participar
                  </h4>
                  <p className={styles.cardSectionText}>{act.how}</p>
                </div>

                <div className={styles.cardStatus}>
                  <span className={styles.statusDot} aria-hidden="true" />
                  <span className={styles.statusText}>{act.status}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className={styles.empty}>
            <p>No hay actividades en esta categoría todavía. ¡Próximamente!</p>
          </div>
        )}

        {/* ── Calendar ── */}
        <section className={styles.calendarSection} id="calendario">
          <SectionHeading
            title="Calendario de Actividades"
            sub="Las fechas son placeholders editables. Actualiza este archivo cuando tengas fechas confirmadas."
          />

          <div className={styles.calendarWrap}>
            <div className={styles.calendarNote}>
              <span aria-hidden="true">✦</span>
              <p>
                Este calendario es provisional. Las fechas exactas se confirman en los canales
                del grupo con suficiente antelación. Suscríbete al canal de anuncios para
                no perder ninguna convocatoria.
              </p>
            </div>

            <div className={styles.calendarList}>
              {CALENDAR.map((ev, i) => (
                <div key={i} className={styles.calendarItem}>
                  <div
                    className={styles.calendarDot}
                    style={{ background: TYPE_COLORS[ev.type] || '#c9a84c' }}
                    aria-hidden="true"
                  />
                  <div className={styles.calendarInfo}>
                    <div className={styles.calendarDate}>{ev.date}</div>
                    <div className={styles.calendarTitle}>{ev.title}</div>
                    <div className={styles.calendarNote2}>{ev.note}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className={styles.legend}>
              {Object.entries(TYPE_COLORS).map(([type, color]) => (
                <div key={type} className={styles.legendItem}>
                  <span className={styles.legendDot} style={{ background: color }} />
                  <span className={styles.legendLabel}>
                    {CATEGORIES.find((c) => c.id === type)?.label || type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Proposal CTA ── */}
        <section className={styles.proposalSection}>
          <div className={styles.proposalCard}>
            <img src="assets/icon_campfire.svg" alt="" width="64" height="64" aria-hidden="true" />
            <div className={styles.proposalText}>
              <h3 className={styles.proposalTitle}>¿Tienes una idea?</h3>
              <p>
                Cualquier viajero puede proponer una actividad. Acércate al canal de eventos
                en Discord y comparte tu idea. El fuego lo encendemos entre todos.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
