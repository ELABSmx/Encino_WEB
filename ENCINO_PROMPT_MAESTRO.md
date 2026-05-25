# ENCINO_PROMPT_MAESTRO.md
## Prompt maestro para Antigravity IDE — El Encino Residencial

---

## ROL Y OBJETIVO

Eres un desarrollador frontend senior especializado en sitios inmobiliarios de alto impacto. Tu tarea es construir el sitio web completo de **El Encino Residencial**, un fraccionamiento premium en Lagos de Moreno, Jalisco. El sitio debe funcionar como un funnel de ventas: primero enamorar, luego informar, luego convertir.

---

## STACK TÉCNICO

- **Framework:** Next.js 14 (App Router)
- **Estilos:** Tailwind CSS
- **Animaciones:** Framer Motion
- **Formulario:** Formspree (`https://formspree.io/f/REPLACE_WITH_ID`)
- **Deploy:** Vercel
- **Fuentes:** Google Fonts — `Cormorant Garamond` (display/headings) + `DM Sans` (body/UI)

---

## SISTEMA DE DISEÑO

### Paleta de colores
```css
--color-encino-verde:    #1A2B1C;  /* verde bosque profundo — dominante */
--color-encino-crema:    #F4EDD8;  /* arena cálida — fondos claros */
--color-encino-tierra:   #8B5E3C;  /* cobre/tierra — acento */
--color-encino-blanco:   #FAFAF7;  /* blanco roto — texto sobre oscuro */
--color-encino-piedra:   #C4B49A;  /* gris arena — detalles, bordes */
```

### Tipografía
- **Headings:** `Cormorant Garamond`, serif — weight 400/600, tracking normal
- **Body / UI:** `DM Sans`, sans-serif — weight 400/500
- **H1:** `clamp(3rem, 6vw, 5.5rem)`, line-height 1.05
- **H2:** `clamp(2rem, 4vw, 3.5rem)`, line-height 1.1
- **Body:** `1.125rem`, line-height 1.7

### Principios visuales
- Espaciado generoso — secciones con `py-24` o más
- Imágenes siempre de los renders reales del proyecto, nunca stock
- Sin bordes radius en elementos estructurales grandes — esquinas rectas transmiten solidez
- Overlays oscuros sobre video/imagen: `bg-gradient-to-r from-[#1A2B1C]/80 to-transparent`
- Cero banners diagonales, cero efectos de mal gusto

---

## ARQUITECTURA DE LA PÁGINA

One-pager con navegación por anclas. Orden del funnel:

```
1. Hero          #hero
2. El Proyecto   #proyecto
3. Amenidades    #amenidades
4. Lotes         #lotes
5. Ubicación     #ubicacion
6. Contacto      #contacto
```

---

## SECCIONES — ESPECIFICACIONES DETALLADAS

---

### SECCIÓN 1: HERO

**Tipo:** Video background fullscreen con overlay y copy encima

**Comportamiento:**
- `<video autoplay muted loop playsinline>` como fondo absoluto, `object-fit: cover`, 100vh
- Overlay: gradiente `from-[#1A2B1C]/75 via-[#1A2B1C]/30 to-transparent` de izquierda a derecha
- El video fuente debe ser referenciado como `/videos/hero.mp4` — el cliente lo proveerá

**Navbar fija encima del hero:**
- Logo del residencial a la izquierda (placeholder: texto "El Encino Residencial" en Cormorant Garamond hasta tener el archivo)
- Links de anclas al centro: Proyecto · Amenidades · Lotes · Ubicación · Contacto
- Botón CTA a la derecha: "Agendar visita" — fondo `--color-encino-tierra`, texto blanco
- Fondo del nav: transparente sobre el hero, `bg-[#1A2B1C]/90 backdrop-blur-sm` al hacer scroll
- En mobile: hamburger menu

**Copy del hero (columna izquierda, alineado al fondo):**
```
Tagline (DM Sans, uppercase, tracking-widest, 0.75rem, color piedra):
  LAGOS DE MORENO, JALISCO

H1 (Cormorant Garamond):
  Tu terreno en
  el lugar donde
  quieres vivir.

Subtítulo (DM Sans, 1.1rem, blanco/80%):
  595 terrenos residenciales · 18 hectáreas · desde $4,193/mes

CTA primario: botón "Agenda tu visita" → ancla a #contacto
CTA secundario: link "Conocer el proyecto ↓" → ancla a #proyecto
```

**Esquina inferior derecha:** badge sutil `bg-white/10 backdrop-blur-sm rounded-full px-4 py-2` con texto "Lagos de Moreno · Pueblo Mágico"

---

### SECCIÓN 2: EL PROYECTO

**Tipo:** Fondo `--color-encino-crema`, layout dos columnas

**Columna izquierda:** Texto editorial
```
Eyebrow: EL ENCINO RESIDENCIAL
H2: Un residencial diseñado para vivir diferente.
Body: 18 hectáreas en el corazón de Lagos de Moreno con más de 40,000 m² de áreas verdes, infraestructura completa y acceso controlado. Un lugar donde el espacio y la naturaleza son parte de tu día a día.
```

**Columna derecha:** Grid 2×2 de stat cards
```
Card 1: "18" / "hectáreas totales"
Card 2: "595" / "terrenos residenciales"
Card 3: "40,000 m²" / "de parques equipados"
Card 4: "3 km+" / "de trotapista"
```
Cada card: fondo blanco, borde `--color-encino-piedra`, número en Cormorant Garamond 4xl verde oscuro, label en DM Sans sm tierra.

**Imagen:** render de la vista aérea (imagen 6) ocupando full-width debajo de las dos columnas, con `object-position: center top`

---

### SECCIÓN 3: AMENIDADES

**Tipo:** Fondo `--color-encino-verde`, texto blanco

**Header centrado:**
```
Eyebrow: AMENIDADES
H2: Todo lo que necesitas, dentro de tu residencial.
```

**Grid de amenidades — 3 columnas en desktop, 1 en mobile:**

Cada card tiene: imagen de render como fondo, overlay oscuro, ícono SVG, título, descripción breve.

```
Card 1 — imagen: render ciclovía (imagen 1)
  Título: Ciclovía
  Desc: Recorre el residencial en bicicleta de forma segura y continua.

Card 2 — imagen: render pergola/área social (imagen 2)
  Título: Áreas de convivencia
  Desc: Espacios diseñados para reunirte con vecinos y familia.

Card 3 — imagen: render dog park (imagen 3)
  Título: Parque para perros
  Desc: Zona especialmente acondicionada para tus mascotas.

Card 4 — imagen: render cancha/zona deportiva (imagen 4)
  Título: Zonas deportivas
  Desc: Cancha, áreas de ejercicio y más de 40,000 m² de parques.

Card 5 — imagen: render parque infantil (imagen 5)
  Título: Parque infantil
  Desc: Juegos y trotapista de más de 3 km para toda la familia.

Card 6 — sin imagen (card sólido)
  Título: Acceso controlado
  Desc: Barda perimetral y caseta de vigilancia para tu tranquilidad.
```

Cards con hover: `scale(1.02)`, overlay se aclara ligeramente, título sube con `translateY`.

---

### SECCIÓN 4: LO QUE INCLUYE TU TERRENO

**Tipo:** Fondo `--color-encino-crema`, layout limpio

**Header:**
```
Eyebrow: CADA TERRENO INCLUYE
H2: Infraestructura lista desde el primer día.
```

**3 columnas con ícono + título + descripción:**
```
1. Agua y alcantarillado
   Red hidráulica y sanitaria instalada y lista para conectar tu construcción.

2. Red eléctrica
   Instalaciones para servicios ocultos: internet, TV por cable, electricidad.

3. Acceso controlado
   Caseta de vigilancia y barda perimetral en todo el perímetro.
```

**CTA al final de la sección:**
Botón centrado: "Quiero saber el precio por m²" → abre WhatsApp `https://wa.me/5214742480286?text=Hola,%20me%20interesa%20conocer%20el%20precio%20por%20m²%20de%20El%20Encino%20Residencial`

---

### SECCIÓN 5: UBICACIÓN

**Tipo:** Fondo blanco, layout split 50/50

**Mitad izquierda — texto:**
```
Eyebrow: UBICACIÓN
H2: En el corazón de Lagos de Moreno.
Body: Sobre la Autopista Lagos–SLP, a solo 5 km de la glorieta del Blvd. Félix Ramírez Rentería. Con conexión directa a Guadalajara, San Luis Potosí, Aguascalientes y León.
```

Lista de conectividad con íconos de ruta:
```
→ Guadalajara
→ San Luis Potosí
→ Aguascalientes
→ León
```

**Mitad derecha — mapa:**
Google Maps embed con el Plus Code `C43Q+5M` o las coordenadas del fraccionamiento.
Embed iframe con `border: none`, altura 450px, width 100%.

Nota para Antigravity: usar este src para el embed:
```
https://www.google.com/maps/embed/v1/place?key=REPLACE_GOOGLE_MAPS_KEY&q=C43Q%2B5M+47520+Lagos+de+Moreno+Jal
```
Si no hay API key disponible, usar un screenshot del mapa como imagen placeholder con un link a Google Maps.

---

### SECCIÓN 6: PRECIOS

**Tipo:** Fondo `--color-encino-verde`, centrado, alto impacto

**Layout:**
```
Eyebrow: INVERSIÓN
H2: Tu terreno en Lagos de Moreno
    desde $4,193 al mes.

Body: Sin precio total publicado — la información de financiamiento completa
se entrega de forma personalizada. Contáctanos y un asesor te enviará
el plan que mejor se adapta a tu proyecto.

CTA primario: "Solicitar información de precios" → ancla a #contacto
CTA secundario: "Escribir por WhatsApp" → wa.me link
```

Nota: NO fabricar precios totales ni condiciones que el cliente no haya publicado.

---

### SECCIÓN 7: CONTACTO

**ID:** `#contacto`
**Tipo:** Fondo `--color-encino-crema`, layout dos columnas

**Columna izquierda:**
```
H2: Agenda tu visita al residencial.
Body: Uno de nuestros asesores se pondrá en contacto contigo en menos de 24 horas.

WhatsApp directo:
Botón: "Escribir a WhatsApp" con ícono → wa.me/5214742480286
Teléfono: 474 248 0286
```

**Columna derecha — Formulario (Formspree):**

Campos:
- Nombre completo (required)
- Correo electrónico (required)
- Teléfono / WhatsApp (required) — campo tipo `tel`
- Mensaje (textarea, placeholder: "¿Tienes alguna pregunta sobre El Encino?")
- Botón submit: "Enviar mensaje" — fondo verde oscuro, hover tierra

Validación: HTML5 nativo + mensaje de éxito inline al enviar.

---

### FOOTER

**Fondo:** `--color-encino-verde`

**Layout:**
```
Izquierda: Logo + tagline "Lagos de Moreno, Jalisco"
Centro: Links de navegación (anclas)
Derecha: Redes sociales (placeholders — íconos de Facebook e Instagram con href="#" hasta tener URLs reales)
```

Línea inferior: `© 2025 El Encino Residencial. Todos los derechos reservados.`

---

## ANIMACIONES (Framer Motion)

- **Hero copy:** `fadeInUp` con stagger de 0.15s entre tagline → H1 → subtítulo → CTAs
- **Stat cards (sección 2):** contador numérico animado al entrar en viewport (`useInView`)
- **Cards de amenidades:** `fadeInUp` staggered al entrar en viewport
- **Secciones en general:** `opacity: 0 → 1` con `y: 30 → 0` al hacer scroll, duración 0.6s, ease `easeOut`
- **Nav:** transición suave de fondo transparente a sólido al pasar 80px de scroll

---

## SEO

En `app/layout.tsx` o `app/page.tsx`:

```typescript
export const metadata = {
  title: 'El Encino Residencial | Terrenos en Lagos de Moreno, Jalisco',
  description: 'Fraccionamiento residencial en Lagos de Moreno, Jalisco. 595 terrenos con infraestructura completa, más de 40,000 m² de parques, ciclovía y acceso controlado. Desde $4,193/mes.',
  keywords: 'terrenos Lagos de Moreno, fraccionamiento Lagos de Moreno, El Encino Residencial, terrenos Jalisco, lotes residenciales Lagos de Moreno',
  openGraph: {
    title: 'El Encino Residencial | Terrenos en Lagos de Moreno',
    description: 'Tu terreno en el lugar donde quieres vivir. Lagos de Moreno, Jalisco.',
    url: 'https://www.elencinoresidencial.mx',
    siteName: 'El Encino Residencial',
    locale: 'es_MX',
    type: 'website',
  },
}
```

---

## ASSETS REQUERIDOS

Colocar en `/public/`:

```
/public/videos/hero.mp4          ← video hero del cliente
/public/images/render-entrada.jpg     ← ciclovía + portón
/public/images/render-pergola.jpg     ← área social
/public/images/render-dogpark.jpg     ← parque para perros
/public/images/render-deportivo.jpg   ← cancha + trotapista
/public/images/render-infantil.jpg    ← parque infantil
/public/images/render-aereo.jpg       ← vista aérea
/public/images/logo.png               ← logo del residencial (provisional)
```

---

## RESPONSIVE

- **Mobile first** — breakpoints: `sm:640px`, `md:768px`, `lg:1024px`, `xl:1280px`
- Hero: en mobile el copy va centrado, los CTAs apilados verticalmente
- Grid de amenidades: 1 columna en mobile, 2 en tablet, 3 en desktop
- Stats: 2×2 en mobile, 4 en línea en desktop
- Nav mobile: hamburger con menú desplegable `bg-[#1A2B1C]`
- Formulario: columnas colapsadas a una sola en mobile

---

## VARIABLES DE ENTORNO

Crear `.env.local`:
```
NEXT_PUBLIC_FORMSPREE_ID=REPLACE_WITH_YOUR_FORMSPREE_FORM_ID
NEXT_PUBLIC_GOOGLE_MAPS_KEY=REPLACE_WITH_KEY  (opcional)
```

---

## NOTAS FINALES PARA ANTIGRAVITY

1. NO inventar datos que no están en este documento (precios totales, m² por lote, etc.)
2. Todos los textos son en español
3. El logo definitivo está en proceso — usar placeholder de texto hasta recibirlo
4. Los links de redes sociales van como `href="#"` hasta que el cliente los proporcione
5. WhatsApp: `https://wa.me/5214742480286` — usar en todos los CTAs secundarios
6. El Plus Code del mapa es `C43Q+5M, 47520 Lagos de Moreno, Jal.`
7. El sitio debe ser desplegable en Vercel sin configuración adicional
