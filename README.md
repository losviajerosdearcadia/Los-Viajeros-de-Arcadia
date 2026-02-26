# Los Viajeros de Arcadia — Sitio Web Oficial

Sitio web completo para la comunidad **Los Viajeros de Arcadia**, construido con Vite + React.
Diseñado para despliegue en GitHub Pages usando HashRouter.

---

## Inicio rápido

```bash
# 1. Instalar dependencias
npm install

# 2. Servidor de desarrollo local
npm run dev

# 3. Abrir en el navegador
# → http://localhost:5173/Los-Viajeros-de-Arcadia/
```

---

## Despliegue en GitHub Pages

### Primera vez

```bash
# 1. Asegúrate de que el repositorio esté en GitHub y tenga GitHub Pages habilitado
#    (Settings → Pages → Source: Deploy from a branch → Branch: gh-pages)

# 2. Construir y desplegar
npm run deploy
```

Esto ejecuta `vite build` y luego usa `gh-pages` para publicar la carpeta `dist`
en la rama `gh-pages` de tu repositorio.

### Despliegues siguientes

```bash
npm run deploy
```

### Verificar la URL

Tu sitio estará disponible en:
```
https://[tu-usuario].github.io/Los-Viajeros-de-Arcadia/
```

> **Nota:** Si cambias el nombre del repositorio en GitHub, actualiza el campo `base`
> en `vite.config.js` y el href del favicon en `index.html`.

---

## Estructura del proyecto

```
Los-Viajeros-de-Arcadia/
├── index.html                    ← Plantilla HTML principal
├── vite.config.js                ← Configuración de Vite (base path)
├── package.json
├── .gitignore
│
├── public/
│   └── assets/                  ← Imágenes y SVGs del sitio
│       ├── crest_arcadia.svg    ← Emblema del grupo
│       ├── icon_north_star.svg  ← Ícono Estrella del Norte
│       ├── icon_campfire.svg    ← Ícono fuego de campamento
│       ├── icon_map.svg         ← Ícono mapa/pergamino
│       ├── divider_rune.svg     ← Separador decorativo
│       ├── bg_stars.svg         ← Fondo cielo estrellado
│       ├── bg_forest.svg        ← Fondo bosque nocturno
│       └── bg_parchment.svg     ← Fondo textura de pergamino
│
└── src/
    ├── index.css                 ← Variables CSS globales y reset
    ├── main.jsx                  ← Entrada de la app (HashRouter aquí)
    ├── App.jsx                   ← Rutas y layout principal
    ├── App.module.css
    │
    ├── components/
    │   ├── Header/               ← Navegación sticky con hamburguesa
    │   ├── Footer/               ← Pie de página
    │   ├── PageHero/             ← Banner de página con fondo
    │   ├── ParchmentCard/        ← Card estilo pergamino
    │   ├── SidebarNav/           ← Nav lateral colapsable
    │   ├── SectionHeading/       ← Título con separador decorativo
    │   └── ScrollToTop/          ← Scroll al inicio en cambio de ruta
    │
    └── pages/
        ├── Home/                 ← Página principal (/)
        ├── Lore/                 ← Lore e Historia (/lore)
        ├── Codigo/               ← Código de Ética (/codigo)
        └── Eventos/              ← Actividades y Eventos (/eventos)
```

---

## Dónde editar los textos

### Página principal (`src/pages/Home/Home.jsx`)
- **Hero**: título, tagline y descripción → busca `heroTitle`, `heroTagline`, `heroDesc`
- **Quiénes somos**: párrafos en la sección `id="quienes-somos"`
- **Qué hacemos**: array `ACTIVITIES_SUMMARY` con emoji, title y text
- **Canales**: array dentro de la sección `id="canales"`
- **Únete**: sección `id="unete"` con pasos y email

### Lore (`src/pages/Lore/Lore.jsx`)
- Cada `<section>` corresponde a un capítulo
- Edita los `<p>` dentro de cada `.sectionBody`
- Para añadir secciones: agrega al array `SECTIONS` y crea el `<section>` correspondiente

### Código de Ética (`src/pages/Codigo/Codigo.jsx`)
- Array `TABS` al inicio del archivo
- Cada tab tiene `articles: [{ num, title, text }]`
- Edita `text` de cada artículo
- Para añadir secciones: agrega un nuevo objeto al array `TABS`

### Eventos (`src/pages/Eventos/Eventos.jsx`)
- Array `ACTIVITIES` con las cards de actividades
- Array `CALENDAR` con los eventos del calendario
- Cada item del calendario tiene: `date`, `title`, `type`, `note`

---

## Cómo reemplazar las imágenes de fondo

Los archivos en `public/assets/` con prefijo `bg_` son SVGs placeholder.
Para reemplazarlos con fotos reales:

1. Coloca tus imágenes en `public/assets/` con los mismos nombres:
   - `bg_stars.jpg` (o `.png`, `.webp`)
   - `bg_forest.jpg`
   - `bg_parchment.jpg`

2. Actualiza las referencias en los componentes:
   - `src/pages/Home/Home.module.css` → `.hero { background-image: url('/assets/bg_stars.jpg') }`
   - `src/components/PageHero/PageHero.jsx` → el prop `bg` de cada página

---

## Paleta de colores

Edita las variables en `src/index.css` (bloque `:root`):

| Variable | Valor | Uso |
|---|---|---|
| `--gold-bright` | `#d4af37` | Dorado brillante, énfasis |
| `--gold-soft` | `#c9a84c` | Dorado suave, subtítulos |
| `--gold-pale` | `#e8d5a3` | Dorado pálido, texto heading |
| `--forest-mid` | `#1a3a2a` | Verde bosque |
| `--night-deep` | `#060d14` | Azul nocturno, fondo |
| `--parchment` | `#f0e6c8` | Beige pergamino |
| `--text-primary` | `#e8d5a3` | Texto principal |
| `--text-secondary` | `#b8a87a` | Texto secundario |

---

## Añadir una nueva página

1. Crea la carpeta `src/pages/NuevaPagina/`
2. Crea `NuevaPagina.jsx` y `NuevaPagina.module.css`
3. Agrega la ruta en `src/App.jsx`:
   ```jsx
   <Route path="/nueva-pagina" element={<NuevaPagina />} />
   ```
4. Agrega el link en `src/components/Header/Header.jsx` (array `NAV_LINKS`)
5. Agrega el link en `src/components/Footer/Footer.jsx`

---

## Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo con hot reload |
| `npm run build` | Construir para producción (genera `/dist`) |
| `npm run preview` | Vista previa del build de producción |
| `npm run deploy` | Build + publicar en GitHub Pages |

---

## Dependencias

- **React 18** — UI
- **react-router-dom 6** — Routing con HashRouter
- **Vite 5** — Bundler y dev server
- **gh-pages** — Deploy a GitHub Pages

Sin librerías de UI externas. CSS puro con CSS Modules.

---

*"No viajamos para escapar, sino para encontrarnos."*
— Los Viajeros de Arcadia
