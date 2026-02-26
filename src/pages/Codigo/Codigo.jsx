import { useEffect, useState, useCallback } from 'react'
import PageHero from '../../components/PageHero/PageHero'
import SidebarNav from '../../components/SidebarNav/SidebarNav'
import styles from './Codigo.module.css'

/* ── Data ── */
const TABS = [
  {
    id: 'fundamentos',
    label: 'A. Fundamentos',
    articles: [
      {
        num: 'Art. 1',
        title: 'Propósito del Código',
        text: 'El presente Código de Ética y Convivencia tiene como propósito establecer los principios, valores y normas que regulan la conducta de todos los miembros de Los Viajeros de Arcadia. No busca controlar ni vigilar, sino ofrecer un marco de referencia común que permita a cada viajero saber qué puede esperar del grupo y qué el grupo espera de él o ella.',
      },
      {
        num: 'Art. 2',
        title: 'Visión del grupo',
        text: 'Los Viajeros de Arcadia aspiran a ser una comunidad donde la creatividad, la fantasía y el compañerismo coexistan sin violencia, discriminación ni jerarquías de poder abusivas. Nuestra visión es un grupo donde cada persona se sienta libre de ser quien es, sin miedo al juicio destructivo ni a la exclusión arbitraria.',
      },
      {
        num: 'Art. 3',
        title: 'Alcance y aplicación',
        text: 'Este Código aplica a todos los espacios del grupo: canales de Discord, grupos de mensajería, redes sociales del colectivo, eventos presenciales y cualquier espacio donde se actúe como representante o miembro de Los Viajeros de Arcadia. La membresía en el grupo implica la aceptación explícita de este Código.',
      },
      {
        num: 'Art. 4',
        title: 'Carácter vivo del Código',
        text: 'Este documento no es inamovible. Podrá ser revisado y actualizado cuando la comunidad, por consenso razonado, considere que alguna norma debe adaptarse a nuevas realidades. Cualquier cambio será anunciado con antelación, explicado con claridad y debatido antes de entrar en vigor.',
      },
      {
        num: 'Art. 5',
        title: 'Principio de buena fe',
        text: 'Se asume que todos los miembros actúan de buena fe hasta que exista evidencia clara de lo contrario. Este principio protege tanto a las personas señaladas como a quienes señalan: no se actúa sobre rumores, sino sobre hechos verificables y testimonios directos.',
      },
      {
        num: 'Art. 6',
        title: 'Hermandad como base',
        text: 'La razón de existir de este grupo no es la perfección disciplinaria, sino la hermandad. El Código es un instrumento al servicio de esa hermandad, no al revés. Cuando la aplicación de una norma genere más daño que el que pretende prevenir, la coordinación revisará el caso con criterio y sensatez.',
      },
    ],
  },
  {
    id: 'convivencia',
    label: 'B. Convivencia',
    articles: [
      {
        num: 'Art. 7',
        title: 'Trato entre miembros',
        text: 'Todos los miembros merecen trato digno, independientemente de su antigüedad en el grupo, su nivel de habilidad en actividades del colectivo, su género, orientación sexual, origen étnico, condición socioeconómica, religión o cualquier otra característica personal. El respeto no es un privilegio; es el punto de partida.',
      },
      {
        num: 'Art. 8',
        title: 'Límites personales',
        text: 'Cada persona tiene el derecho a establecer sus límites de interacción y a que esos límites sean respetados sin cuestionamientos ni presión. Decir "no" a un plan, evento, conversación o solicitud es suficiente respuesta. No se debe exigir explicación ni hacer comentarios negativos sobre quien establece un límite.',
      },
      {
        num: 'Art. 9',
        title: 'Cuidado del espacio compartido',
        text: 'Los espacios digitales y físicos del grupo son responsabilidad colectiva. Se espera que cada miembro contribuya a mantener un ambiente ordenado, abierto y agradable. Esto incluye no monopolizar conversaciones, no inundar canales con contenido fuera de contexto y no generar ruido innecesario en momentos de actividad organizada.',
      },
      {
        num: 'Art. 10',
        title: 'Inclusión activa',
        text: 'Se alienta a los miembros más activos a hacer sentir bienvenidas a las personas recién llegadas. La inclusión no es solo ausencia de rechazo; es presencia de acogida. Presentarse, invitar a participar y hacer espacio para que nuevas voces se expresen son actos de hermandad.',
      },
      {
        num: 'Art. 11',
        title: 'Seguridad emocional',
        text: 'El grupo no es un espacio de terapia, pero sí un espacio donde las personas no deben sentir miedo de expresarse. Se fomentará la escucha activa y la empatía. No se minimizarán las experiencias de otros ("estás exagerando", "es un chiste", "no es para tanto").',
      },
      {
        num: 'Art. 12',
        title: 'Diversidad como riqueza',
        text: 'La diversidad de intereses, estilos, géneros de juego, fandoms y formas de participar no es una debilidad del grupo; es su mayor fortaleza. No se esperará que todos compartan los mismos gustos, sino que todos respeten los gustos ajenos con genuina apertura.',
      },
    ],
  },
  {
    id: 'comunicacion',
    label: 'C. Comunicación',
    articles: [
      {
        num: 'Art. 13',
        title: 'Comunicación directa',
        text: 'Cuando un miembro tenga una queja, incomodidad o problema con otro miembro, se espera que lo comunique de forma directa a esa persona, si la situación lo permite con seguridad. La comunicación directa evita malentendidos, reduce la escalada del conflicto y demuestra respeto hacia el interlocutor.',
      },
      {
        num: 'Art. 14',
        title: 'Prohibición de chismes',
        text: 'Los Viajeros de Arcadia no toleran la difusión de rumores o comentarios negativos sobre miembros del grupo en espacios fuera de la conversación directa con los implicados. Hablar mal de alguien a sus espaldas daña la confianza colectiva y contamina el ambiente del grupo, aunque la información sea verdadera.',
      },
      {
        num: 'Art. 15',
        title: 'Sin subgrupos conspirativos',
        text: 'La creación de subgrupos o chats paralelos cuyo propósito sea criticar, planear acciones en contra o excluir a miembros del grupo principal va en contra del espíritu de hermandad del colectivo. Está permitido tener conversaciones privadas; lo que no está permitido es usarlas para socavar la cohesión del grupo.',
      },
      {
        num: 'Art. 16',
        title: 'Tono constructivo',
        text: 'La crítica es bienvenida cuando es constructiva. Señalar algo que no funciona o que puede mejorar es valioso, siempre que se haga con intención de ayudar, no de herir ni demostrar superioridad. Se pedirá que las críticas vayan acompañadas de propuestas o reflexiones, no solo de señalamientos.',
      },
      {
        num: 'Art. 17',
        title: 'Uso responsable de canales',
        text: 'Cada canal o espacio del grupo tiene un propósito. Se espera que los miembros respeten esa función. Los anuncios van en el canal de anuncios. Los eventos en el canal de eventos. El contenido fuera de contexto en canales generales. Esto no es rigidez: es orden que facilita que todos encuentren lo que necesitan.',
      },
      {
        num: 'Art. 18',
        title: 'Derecho al silencio',
        text: 'Nadie está obligado a responder en tiempo real ni a participar en todas las conversaciones. El silencio no es indiferencia ni descortesía. Se respetará la disponibilidad y los tiempos de cada persona, sin presionarla a responder ni interpretando la ausencia como hostilidad.',
      },
    ],
  },
  {
    id: 'conflictos',
    label: 'D. Conflictos',
    articles: [
      {
        num: 'Art. 19',
        title: 'Normalidad del conflicto',
        text: 'Los conflictos entre personas son normales e inevitables en cualquier comunidad. No son señal de fracaso del grupo; son parte de la convivencia humana. Lo que distingue a una comunidad saludable no es la ausencia de conflicto, sino la capacidad de gestionarlo con honestidad y sin violencia.',
      },
      {
        num: 'Art. 20',
        title: 'Protocolo de resolución — Paso 1: Conversación directa',
        text: 'El primer paso ante cualquier conflicto entre dos o más miembros es la conversación directa y privada entre las partes involucradas. Se intentará resolver el desacuerdo con honestidad, escucha y disposición al entendimiento. Este paso es obligatorio antes de escalar el conflicto.',
      },
      {
        num: 'Art. 21',
        title: 'Protocolo — Paso 2: Mediación',
        text: 'Si la conversación directa no resuelve el conflicto, cualquiera de las partes puede solicitar la intervención de un mediador interno: un miembro del grupo reconocido por su ecuanimidad y sin vínculo de parcialidad con ninguna parte. El mediador no impone soluciones; facilita el diálogo.',
      },
      {
        num: 'Art. 22',
        title: 'Protocolo — Paso 3: Coordinación',
        text: 'Si la mediación no es suficiente o si el conflicto involucra conductas que violan este Código, el caso se eleva a la coordinación del grupo. La coordinación escuchará a todas las partes por separado, revisará evidencias y emitirá una decisión fundamentada dentro de un plazo razonable.',
      },
      {
        num: 'Art. 23',
        title: 'Confidencialidad del proceso',
        text: 'Los conflictos gestionados por mediación o coordinación son confidenciales. La información compartida en ese contexto no podrá difundirse al resto del grupo sin consentimiento de las partes. Las decisiones de la coordinación se comunicarán solo en la medida en que afecten al grupo en su conjunto.',
      },
      {
        num: 'Art. 24',
        title: 'Principio de no represalia',
        text: 'Ningún miembro que reporte un conflicto o señale una conducta indebida sufrirá represalias por haberlo hecho. La intimidación, el ostracismo organizado o cualquier forma de presión sobre quien denuncia se considerará, en sí misma, una conducta grave sujeta a consecuencias.',
      },
    ],
  },
  {
    id: 'no-toleradas',
    label: 'E. Conductas no toleradas',
    articles: [
      {
        num: 'Art. 25',
        title: 'Discriminación',
        text: 'No se tolerará ninguna forma de discriminación basada en género, orientación sexual, etnia, religión, condición socioeconómica, apariencia física, discapacidad, o cualquier otra característica personal. Esto incluye chistes discriminatorios, apodos ofensivos, comentarios "irónicos" de contenido discriminatorio y cualquier forma de exclusión basada en estas características.',
      },
      {
        num: 'Art. 26',
        title: 'Acoso',
        text: 'El acoso en cualquiera de sus formas está terminantemente prohibido: acoso verbal, sexual, emocional, físico o digital. Un comportamiento único puede constituir acoso si es suficientemente grave. La conducta repetida no deseada siempre constituye acoso, independientemente de la intención del agresor.',
      },
      {
        num: 'Art. 27',
        title: 'Manipulación y gaslighting',
        text: 'Manipular la percepción de la realidad de otra persona, hacer que dude de sus propias experiencias, o usar la influencia social dentro del grupo para presionar a alguien a actuar en contra de su voluntad son conductas que no tienen lugar en este grupo.',
      },
      {
        num: 'Art. 28',
        title: 'Violencia',
        text: 'La violencia física o la amenaza de violencia, en cualquier espacio del grupo, resultará en expulsión inmediata y, si aplica, en reporte a las autoridades correspondientes. No existe contexto que justifique el uso de la violencia física en nuestra comunidad.',
      },
      {
        num: 'Art. 29',
        title: 'Difusión no autorizada de información privada',
        text: 'Compartir información personal, fotografías, conversaciones privadas u otros datos de un miembro sin su consentimiento explícito —especialmente con intención de daño— es una violación grave de su privacidad y de la confianza del grupo.',
      },
      {
        num: 'Art. 30',
        title: 'Suplantación y engaño deliberado',
        text: 'Suplantar la identidad de otro miembro, crear perfiles falsos para infiltrarse en el grupo, o mentir deliberadamente sobre hechos relevantes para el grupo o para un proceso de conflicto son conductas que comprometen la integridad colectiva.',
      },
    ],
  },
  {
    id: 'consecuencias',
    label: 'F. Consecuencias',
    articles: [
      {
        num: 'Art. 31',
        title: 'Escala de consecuencias',
        text: 'Las consecuencias ante conductas que violan este Código son proporcionales a la gravedad de la situación. No toda infracción merece el mismo tratamiento. La coordinación evaluará cada caso considerando la gravedad de la conducta, la reiteración, el impacto en las personas afectadas y la disposición a la reparación.',
      },
      {
        num: 'Art. 32',
        title: 'Nivel 1 — Advertencia',
        text: 'Para conductas leves o primeras infracciones sin impacto grave, la coordinación emitirá una advertencia formal privada. La advertencia explica qué conducta fue inadecuada, por qué, y qué se espera que cambie. Quedará registrada internamente.',
      },
      {
        num: 'Art. 33',
        title: 'Nivel 2 — Suspensión temporal',
        text: 'Ante reiteración de conductas leves o una infracción de gravedad moderada, se podrá aplicar una suspensión temporal de uno o más espacios del grupo, con un plazo definido. La suspensión no es un castigo punitivo; es un tiempo de pausa que permite reflexión y ajuste.',
      },
      {
        num: 'Art. 34',
        title: 'Nivel 3 — Expulsión',
        text: 'La expulsión aplica ante conductas graves (violencia, acoso severo, discriminación sistemática, difusión maliciosa de información privada), ante reiteración de conductas que no cesan pese a advertencias previas, o ante comportamientos que hagan inviable la permanencia segura del miembro en el grupo.',
      },
      {
        num: 'Art. 35',
        title: 'Derecho de apelación',
        text: 'Cualquier miembro que considere que una consecuencia fue aplicada de forma injusta tiene el derecho de presentar una apelación ante la coordinación, con argumentos razonados. La coordinación revisará el caso con ojos frescos y emitirá una decisión definitiva.',
      },
      {
        num: 'Art. 36',
        title: 'Transparencia con el grupo',
        text: 'Cuando una expulsión se produzca, el grupo recibirá una comunicación breve que confirme el hecho sin entrar en detalles privados. La transparencia protege la confianza del grupo; la discreción protege la dignidad de todos los involucrados. Ambas son posibles.',
      },
    ],
  },
  {
    id: 'canal-mujeres',
    label: 'G. Canal de Mujeres',
    articles: [
      {
        num: 'Art. 37',
        title: 'Existencia y propósito',
        text: 'Los Viajeros de Arcadia mantienen un espacio específico para mujeres del grupo, reconociendo que existen dinámicas de género que requieren un lugar propio: un canal de comunicación, un espacio de encuentro, o cualquier formato que el grupo decida implementar. Su propósito es la seguridad, el apoyo mutuo y la expresión libre.',
      },
      {
        num: 'Art. 38',
        title: 'Acceso y privacidad',
        text: 'El espacio de mujeres es de acceso restringido a mujeres del grupo. No se exigirá justificación ni se debatirá la identidad de quienes soliciten acceso. Lo que se comparte en ese espacio es confidencial y no debe difundirse fuera de él sin consentimiento explícito de las participantes.',
      },
      {
        num: 'Art. 39',
        title: 'Respeto de la coordinación hacia el espacio',
        text: 'La coordinación general del grupo no accederá a los contenidos del espacio de mujeres sin solicitud explícita de las participantes, excepto en situaciones de emergencia o seguridad que lo requieran. La autonomía de ese espacio es parte de su función protectora.',
      },
      {
        num: 'Art. 40',
        title: 'Protocolo de reporte de situaciones incómodas',
        text: 'Toda mujer que experimente acoso, presión o cualquier conducta que la haga sentir insegura dentro del grupo tiene vía directa para reportarlo a la coordinación o al espacio de mujeres. El reporte puede ser anónimo si así se solicita. Se garantiza seguimiento.',
      },
      {
        num: 'Art. 41',
        title: 'Participación en eventos presenciales',
        text: 'En eventos presenciales, se garantizará que todas las personas —especialmente mujeres y personas de grupos vulnerables— tengan libertad de moverse, salir, rechazar interacciones y pedir ayuda sin que ello genere presión social ni consecuencias negativas. Siempre habrá al menos una persona de referencia designada para asistir si algo no va bien.',
      },
      {
        num: 'Art. 42',
        title: 'Cultura de cuidado colectivo',
        text: 'La seguridad de las mujeres del grupo no es responsabilidad exclusiva de ellas mismas ni del espacio de mujeres. Es responsabilidad colectiva. Todos los miembros están llamados a ser aliados activos: intervenir si observan conductas inapropiadas, acompañar si alguien se siente incómodo, y no mirar hacia otro lado por incomodidad.',
      },
    ],
  },
  {
    id: 'eventos',
    label: 'H. Eventos presenciales',
    articles: [
      {
        num: 'Art. 43',
        title: 'Participación voluntaria',
        text: 'Ningún miembro está obligado a asistir a ningún evento del grupo. La participación es siempre voluntaria. No se ejercerá presión social ni se penalizará la ausencia. Dicho esto, se valorará la participación activa como expresión de compromiso con la comunidad.',
      },
      {
        num: 'Art. 44',
        title: 'Conducta en espacios públicos',
        text: 'Cuando el grupo participe en expos, festivales o eventos públicos como colectivo, cada miembro representa a Los Viajeros de Arcadia. Se espera conducta respetuosa hacia el público general, hacia organizadores y hacia otros colectivos o personas del espacio. Cualquier conducta inapropiada en nombre del grupo tendrá consecuencias internas.',
      },
      {
        num: 'Art. 45',
        title: 'Fotografía y consentimiento',
        text: 'En eventos del grupo o con miembros del grupo, fotografiar o grabar a una persona requiere su consentimiento. Esto aplica especialmente a personas en cosplay: el traje no es un permiso tácito para ser fotografiado. Publicar imágenes de miembros sin su aprobación previa está prohibido.',
      },
      {
        num: 'Art. 46',
        title: 'Alcohol y sustancias',
        text: 'En eventos del grupo, el consumo de alcohol es decisión personal de cada adulto, pero nunca debe afectar el bienestar de otros ni usarse para justificar conductas inapropiadas. Nadie será presionado a consumir alcohol ni ninguna otra sustancia. El estado de embriaguez no exime de responsabilidad por la propia conducta.',
      },
      {
        num: 'Art. 47',
        title: 'Gestión de espacios físicos',
        text: 'En encuentros en espacios físicos (casas, salones, parques), se cuidarán los bienes del anfitrión, se llegará y saldrá en los horarios acordados, y se dejará el espacio en las condiciones en que se encontró. El respeto al espacio ajeno es respeto a quien nos lo presta.',
      },
      {
        num: 'Art. 48',
        title: 'Protocolo de emergencia',
        text: 'En cualquier evento presencial, existirá al menos una persona de referencia designada como punto de contacto para emergencias. Antes del evento, se comunicará esta información a los asistentes. En situaciones de riesgo real, la prioridad es siempre la seguridad de las personas, por encima de cualquier protocolo interno.',
      },
    ],
  },
]

/* ── Component ── */
export default function Codigo() {
  const [activeTab, setActiveTab] = useState('fundamentos')
  const [copyMsg, setCopyMsg] = useState('')

  useEffect(() => {
    document.title = 'Código de Ética — Los Viajeros de Arcadia'
  }, [])

  const currentSection = TABS.find((t) => t.id === activeTab)

  const copyLink = useCallback(() => {
    const url = `${window.location.origin}${window.location.pathname}#/codigo?sec=${activeTab}`
    navigator.clipboard.writeText(url).then(() => {
      setCopyMsg('¡Enlace copiado!')
      setTimeout(() => setCopyMsg(''), 2500)
    })
  }, [activeTab])

  const sidebarSections = TABS.map((t) => ({ id: t.id, label: t.label }))

  return (
    <div className={styles.page}>
      <PageHero
        title="Código de Ética y Convivencia"
        subtitle="Las reglas del campamento. No para controlar, sino para que todos puedan estar seguros alrededor del fuego."
        bg="assets/bg_parchment.svg"
        size="md"
      />

      {/* Table of contents summary */}
      <div className={`${styles.toc} container`}>
        <h2 className={styles.tocTitle}>
          <span aria-hidden="true">✦</span> Resumen de secciones
        </h2>
        <div className={styles.tocGrid}>
          {TABS.map((tab) => (
            <button
              key={tab.id}
              className={`${styles.tocItem} ${activeTab === tab.id ? styles.tocActive : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main layout */}
      <div className={`${styles.layout} container`}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <SidebarNav
            sections={sidebarSections}
            active={activeTab}
            onSelect={setActiveTab}
            title="Secciones"
          />
        </aside>

        {/* Content */}
        <main className={styles.content}>
          {currentSection && (
            <div key={activeTab} className={styles.tabContent}>
              {/* Section header */}
              <div className={styles.contentHeader}>
                <h2 className={styles.contentTitle}>{currentSection.label}</h2>
                <button
                  className={styles.copyBtn}
                  onClick={copyLink}
                  title="Copiar enlace a esta sección"
                  aria-live="polite"
                >
                  {copyMsg || '🔗 Copiar enlace'}
                </button>
              </div>

              <div className={styles.divider}>
                <img src="assets/divider_rune.svg" alt="" />
              </div>

              {/* Articles */}
              <div className={styles.articlesList}>
                {currentSection.articles.map((art) => (
                  <article key={art.num} className={styles.article}>
                    <header className={styles.articleHeader}>
                      <span className={styles.articleNum}>{art.num}</span>
                      <h3 className={styles.articleTitle}>{art.title}</h3>
                    </header>
                    <p className={styles.articleText}>{art.text}</p>
                  </article>
                ))}
              </div>

              {/* Navigation between sections */}
              <div className={styles.sectionNav}>
                {TABS.findIndex((t) => t.id === activeTab) > 0 && (
                  <button
                    className={styles.navBtn}
                    onClick={() => {
                      const idx = TABS.findIndex((t) => t.id === activeTab)
                      setActiveTab(TABS[idx - 1].id)
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                  >
                    ← Sección anterior
                  </button>
                )}
                {TABS.findIndex((t) => t.id === activeTab) < TABS.length - 1 && (
                  <button
                    className={`${styles.navBtn} ${styles.navBtnNext}`}
                    onClick={() => {
                      const idx = TABS.findIndex((t) => t.id === activeTab)
                      setActiveTab(TABS[idx + 1].id)
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                  >
                    Sección siguiente →
                  </button>
                )}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
