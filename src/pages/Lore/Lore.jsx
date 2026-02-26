import { useEffect, useState, useRef, useCallback } from 'react'
import PageHero from '../../components/PageHero/PageHero'
import SidebarNav from '../../components/SidebarNav/SidebarNav'
import styles from './Lore.module.css'

const SECTIONS = [
  { id: 'origen', label: 'Origen del nombre' },
  { id: 'arcadia-ideal', label: 'Arcadia como ideal' },
  { id: 'estrella-norte', label: 'La Estrella del Norte' },
  { id: 'fuego-campamento', label: 'Fuego de campamento' },
  { id: 'mapa-viaje', label: 'Mapa y viaje' },
  { id: 'valores', label: 'Valores' },
]

export default function Lore() {
  const [active, setActive] = useState('origen')
  const sectionRefs = useRef({})
  const observerRef = useRef(null)
  const isScrollingRef = useRef(false)

  useEffect(() => {
    document.title = 'Lore e Historia — Los Viajeros de Arcadia'
  }, [])

  // Scroll spy with IntersectionObserver
  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect()

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (isScrollingRef.current) return
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible.length > 0) {
          setActive(visible[0].target.id)
        }
      },
      {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    )

    SECTIONS.forEach(({ id }) => {
      const el = sectionRefs.current[id]
      if (el) observerRef.current.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [])

  const scrollToSection = useCallback((id) => {
    const el = sectionRefs.current[id]
    if (!el) return
    isScrollingRef.current = true
    setActive(id)
    const offset = el.getBoundingClientRect().top + window.scrollY - 90
    window.scrollTo({ top: offset, behavior: 'smooth' })
    setTimeout(() => { isScrollingRef.current = false }, 800)
  }, [])

  const setRef = (id) => (el) => { sectionRefs.current[id] = el }

  return (
    <div className={styles.page}>
      <PageHero
        title="Lore e Historia"
        subtitle="El mito que nos da forma. El relato que nos une antes de que supiéramos que éramos un grupo."
        bg="assets/bg_forest.svg"
        size="md"
      />

      <div className={`${styles.layout} container`}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <SidebarNav
            sections={SECTIONS}
            active={active}
            onSelect={scrollToSection}
            title="Capítulos"
          />
        </aside>

        {/* Content */}
        <article className={styles.content}>

          {/* Origen del nombre */}
          <section
            id="origen"
            ref={setRef('origen')}
            className={styles.loreSection}
          >
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionNum}>I.</span>
              Origen del nombre
            </h2>
            <div className={styles.divider}>
              <img src="assets/divider_rune.svg" alt="" />
            </div>
            <div className={styles.sectionBody}>
              <p>
                El nombre <em>Los Viajeros de Arcadia</em> no nació de una votación formal ni de
                una reunión de fundadores. Emergió de una conversación, de la misma manera en que
                emergen las mejores ideas: sin prisa, en el momento justo, cuando las palabras
                encuentran su peso exacto.
              </p>
              <p>
                "Arcadia" fue la palabra que lo cambió todo. No como referencia a un lugar geográfico
                concreto, sino como evocación de algo que todos habíamos sentido alguna vez: ese
                instante en que el tiempo se detiene, las personas a tu alrededor se sienten como
                de toda la vida, y el mundo exterior deja de importar por un momento. Eso es Arcadia.
                No un lugar. Un estado.
              </p>
              <p>
                Y si Arcadia es ese espacio ideal, los que lo habitamos somos necesariamente viajeros.
                Nadie vive en Arcadia de manera permanente. Se llega, se permanece, se vuelve.
                El camino que lleva a ese lugar y el camino que parte de él son parte del mismo viaje.
                Por eso no somos "residentes" ni "guardianes". Somos viajeros. En movimiento. Siempre.
              </p>
              <p>
                El artículo "Los" antes de "Viajeros" fue intencional: define pluralidad, comunidad,
                colectivo. No es un viajero solitario. Es el grupo que comparte el sendero. Cada uno
                con su mochila, su destino soñado, sus cicatrices del camino. Pero juntos bajo la
                misma estrella.
              </p>
            </div>
          </section>

          {/* Arcadia como ideal */}
          <section
            id="arcadia-ideal"
            ref={setRef('arcadia-ideal')}
            className={styles.loreSection}
          >
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionNum}>II.</span>
              Arcadia como ideal
            </h2>
            <div className={styles.divider}>
              <img src="assets/divider_rune.svg" alt="" />
            </div>
            <div className={styles.sectionBody}>
              <p>
                En la tradición clásica griega, Arcadia era una región del Peloponeso habitada por
                pastores simples, alejados del mundo político y sus ambiciones. Para los poetas
                griegos y luego para los renacentistas italianos, Arcadia se convirtió en metáfora:
                el lugar donde la vida es sencilla, justa, armoniosa. Donde la naturaleza y la
                humanidad coexisten sin violencia.
              </p>
              <p>
                Virgilio escribió sus <em>Bucólicas</em> evocando ese mundo pastoril. Sannazaro lo
                resucitó en el Renacimiento. Los pintores barrocos lo plasmaron en lienzos donde
                pastores y ninfas conviven entre ruinas antiguas y cielos perfectos. "Et in Arcadia
                ego" —incluso en Arcadia estoy yo— decía la muerte, recordando que ningún ideal es
                eterno. Pero también puede leerse al revés: incluso yo, el que ha sufrido, he
                estado en Arcadia. He conocido ese estado de plenitud.
              </p>
              <p>
                Para nosotros, Arcadia es eso: el instante en que el cosplay que llevas semanas
                cosiendo finalmente se pone completo. La tarde de D&D donde la narrativa toma vida
                propia. El torneo de cartas donde el rival se convierte en amigo. La fotografía que
                captura algo que no sabes nombrar pero reconoces como verdadero.
              </p>
              <p>
                Arcadia no es un premio para los mejores ni un club exclusivo. Es un estado que se
                alcanza con presencia, con entrega, con la disposición de estar completamente aquí,
                completamente con los demás. Cualquier viajero que llegue con esa disposición
                encontrará su Arcadia entre nosotros.
              </p>
              <blockquote className={styles.blockquote}>
                "Et in Arcadia ego — Y yo también estuve en Arcadia."
                <footer>— Tradición pastoril clásica, resignificada</footer>
              </blockquote>
            </div>
          </section>

          {/* La Estrella del Norte */}
          <section
            id="estrella-norte"
            ref={setRef('estrella-norte')}
            className={styles.loreSection}
          >
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionNum}>III.</span>
              La Estrella del Norte
            </h2>
            <div className={styles.divider}>
              <img src="assets/divider_rune.svg" alt="" />
            </div>
            <div className={styles.sectionBody}>
              <img
                src="assets/icon_north_star.svg"
                alt="La Estrella del Norte"
                className={styles.inlineIcon}
              />
              <p>
                Polaris, la Estrella del Norte, ha guiado a marineros, exploradores y nómadas
                durante milenios. A diferencia de las demás estrellas, no parece moverse.
                Mientras el firmamento rota a lo largo de la noche, ella permanece casi fija sobre
                el Polo Norte. Es el ancla del cielo.
              </p>
              <p>
                Para Los Viajeros de Arcadia, la Estrella del Norte es el símbolo central del grupo
                por una razón sencilla y poderosa: representa los valores que no se mueven aunque
                todo lo demás cambie. En un mundo de modas, conflictos y dinámicas grupales
                cambiantes, necesitamos algo constante que nos oriente.
              </p>
              <p>
                Esos valores fijos son: la honestidad entre compañeros, el respeto irrenunciable
                hacia cada persona, la lealtad al grupo sobre el interés individual, y la apertura
                a quien llega con buenas intenciones. No son reglas impuestas desde afuera.
                Son la estrella que ya existía antes de que supiéramos que formábamos un grupo.
              </p>
              <p>
                Cuando hay conflicto, cuando hay dudas sobre qué hacer o cómo actuar, la pregunta
                es simple: ¿Hacia dónde apunta la Estrella del Norte? ¿Qué diría alguien que valora
                la honestidad y el respeto sobre todo lo demás? Esa brújula interior es la
                Estrella del Norte hecha conducta.
              </p>
              <p>
                En el emblema del grupo, la estrella de ocho puntas ocupa el centro del escudo.
                No por decoración, sino por principio.
              </p>
            </div>
          </section>

          {/* Fuego de campamento */}
          <section
            id="fuego-campamento"
            ref={setRef('fuego-campamento')}
            className={styles.loreSection}
          >
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionNum}>IV.</span>
              El Fuego de Campamento
            </h2>
            <div className={styles.divider}>
              <img src="assets/divider_rune.svg" alt="" />
            </div>
            <div className={styles.sectionBody}>
              <img
                src="assets/icon_campfire.svg"
                alt="El fuego de campamento"
                className={styles.inlineIcon}
              />
              <p>
                El fuego de campamento es, quizás, el símbolo más antiguo de comunidad humana.
                Antes de las ciudades, antes de los idiomas escritos, antes de la política y las
                ideologías, los humanos se reunían alrededor del fuego. El fuego daba luz, calor,
                protección y —sobre todo— un punto de encuentro. Donde hay fuego, hay personas.
                Donde hay personas alrededor del fuego, hay comunidad.
              </p>
              <p>
                Para Los Viajeros, el fuego de campamento representa la calidez del grupo: ese
                espacio donde no hay que actuar de ninguna manera especial, donde las máscaras
                (incluso las de cosplay) pueden quitarse si uno quiere. El campamento es el espacio
                seguro, la zona sin jerarquías sociales rígidas, donde el viajero que regresa
                exhausto del camino encuentra reposo.
              </p>
              <p>
                Nadie es dueño del fuego. Todos lo alimentan. Todos se calientan en él.
                Si alguien trae leña, el fuego crece. Si alguien la sustrae o lo apaga por
                descuido, todos sufren el frío. Esta metáfora define nuestra responsabilidad
                colectiva: la comunidad solo existe porque cada quien aporta algo.
              </p>
              <p>
                También el fuego tiene reglas naturales: no se acerca sin cuidado. No se juega
                con él de manera imprudente. Arden quienes no lo respetan. El entorno de
                calidez que ofrecemos tiene sus límites, y esos límites están escritos en
                nuestro Código de Ética.
              </p>
            </div>
          </section>

          {/* Mapa y viaje */}
          <section
            id="mapa-viaje"
            ref={setRef('mapa-viaje')}
            className={styles.loreSection}
          >
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionNum}>V.</span>
              El Mapa y el Viaje
            </h2>
            <div className={styles.divider}>
              <img src="assets/divider_rune.svg" alt="" />
            </div>
            <div className={styles.sectionBody}>
              <img
                src="assets/icon_map.svg"
                alt="El mapa y el viaje"
                className={styles.inlineIcon}
              />
              <p>
                Un mapa es una promesa y una invitación. Dice: "Hay lugares que aún no has visto.
                Hay rutas que no has recorrido. Hay territorios por descubrir." No te obliga a ir
                a ningún lado. Pero te recuerda que el mundo es más grande que la habitación donde
                duermes.
              </p>
              <p>
                Los Viajeros de Arcadia tienen su propio mapa simbólico. No señala coordenadas
                geográficas sino experiencias: la primera expo en la que participas con un cosplay
                propio, la primera campaña de D&D que terminas, el torneo de cartas donde pierdes
                y aprendes más que cuando ganaste, la sesión de fotos donde algo "hace clic" y te
                das cuenta de que esto lo amas.
              </p>
              <p>
                El mapa también registra lo que hemos hecho como grupo. Las actividades compartidas,
                los eventos, los proyectos. Cada uno añade su propia ruta al mapa colectivo.
                El mapa crece con cada viajero que se une, con cada historia que se suma.
              </p>
              <p>
                Y como todo buen mapa medieval, el nuestro tiene zonas marcadas con "aquí hay
                dragones". Esas zonas son las conductas que no toleramos, los comportamientos que
                rompen la calidez del campamento. No para asustar, sino para advertir: aquí,
                quien elige esa ruta, viaja solo.
              </p>
              <p>
                Pero el mapa, sobre todo, es una invitación. A venir. A explorar. A agregar tu
                propio sendero al territorio de Arcadia.
              </p>
            </div>
          </section>

          {/* Valores */}
          <section
            id="valores"
            ref={setRef('valores')}
            className={styles.loreSection}
          >
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionNum}>VI.</span>
              Valores del Grupo
            </h2>
            <div className={styles.divider}>
              <img src="assets/divider_rune.svg" alt="" />
            </div>
            <div className={styles.sectionBody}>
              <p>
                Los valores no son reglas. Las reglas se acatan. Los valores se encarnan. No los
                seguimos porque alguien nos diga que debemos; los seguimos porque coinciden con
                quiénes queremos ser. Aquí los enunciamos no como mandatos, sino como
                reconocimiento: esto ya está en nosotros. Siempre estuvo.
              </p>

              <div className={styles.valoresGrid}>
                {[
                  {
                    icon: '✦',
                    title: 'Hermandad',
                    desc: 'El grupo existe porque elegimos cuidarnos. No somos compañeros de conveniencia; somos personas que han decidido que el otro importa.',
                  },
                  {
                    icon: '⚖',
                    title: 'Equidad',
                    desc: 'No hay miembros de primera y segunda clase. Antigüedad no otorga impunidad. La voz de quien llega hoy pesa tanto como la de quien fundó el grupo.',
                  },
                  {
                    icon: '🌿',
                    title: 'Respeto',
                    desc: 'Por las personas, sus tiempos, sus límites, sus gustos. El respeto no se exige solo hacia uno mismo: se practica hacia todos.',
                  },
                  {
                    icon: '🔍',
                    title: 'Honestidad',
                    desc: 'Sin chismes, sin máscaras innecesarias, sin dobles mensajes. Lo que se dice de alguien se dice frente a esa persona o no se dice.',
                  },
                  {
                    icon: '🌟',
                    title: 'Entusiasmo',
                    desc: 'Llevamos con orgullo lo que amamos. No nos disculpamos por nuestra pasión. La energía que ponemos en lo que hacemos es lo que nos define.',
                  },
                  {
                    icon: '🧭',
                    title: 'Responsabilidad',
                    desc: 'Cada viajero cuida el fuego. Cada quien responde por sus actos y su impacto en el grupo. La comunidad es de todos; también el deber de cuidarla.',
                  },
                ].map(({ icon, title, desc }) => (
                  <div key={title} className={styles.valorCard}>
                    <span className={styles.valorIcon} aria-hidden="true">{icon}</span>
                    <h3 className={styles.valorTitle}>{title}</h3>
                    <p className={styles.valorDesc}>{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

        </article>
      </div>
    </div>
  )
}
