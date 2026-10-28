# Contenido canónico del portfolio

Fuente única de verdad para todas las variantes. **Cada palabra de aquí va literal.**
Decidido con el dueño, una frase a una, el 28 de octubre de 2026.

## Reglas duras

- **No se añade ni una frase que no esté en este fichero.** Nada de frases de apoyo bajo
  los titulares, nada de recuentos ("siete puestos", "seis empresas"), nada de cifras
  derivadas, nada de citas, nada de métricas. El dueño ya rechazó todo eso una vez.
- **Los titulares de sección son neutros**: `Sobre mí`, `Experiencia`, `Proyectos`,
  `Habilidades`. No se sustituyen por frases de posicionamiento.
- **Las rayas y los `&` de abajo son del dueño** y se quedan. Como la puerta 19 corta las
  rayas em y en, el sello de cada variante lleva `copy: verbatim` y 19, 58 y 69 pasan a nota.
- **Nada de emoji** (puerta 30a): las banderas y los iconos de los certificados se caen,
  el texto se queda.
- **El stack de cada puesto es una línea de texto plano**, no chips ni píldoras.
- Los logos de empresa son opcionales según el tema; si se usan, **32px o más**, nunca menos.

## `<head>`

```
<title>Jorge Guijarro — Desarrollador Full Stack Senior</title>
description: Portfolio profesional de Jorge Guijarro — Desarrollador Full Stack Senior especializado en Node.js, TypeScript, React y AWS. Madrid, España.
og:title: Jorge Guijarro — Desarrollador Full Stack Senior
og:description: Portfolio de Jorge Guijarro, Desarrollador Full Stack Senior en Cuimo especializado en Node.js, TypeScript, React y AWS. Madrid, España.
og:type: website
og:url: https://jguijarro11.github.io/
og:image: https://jguijarro11.github.io/assets/og-image.jpg  (1200x630)
og:image:alt: Jorge Guijarro del Nuevo — Desarrollador Full Stack Senior
twitter:card: summary_large_image
lang: es
```

Iconos: `assets/favicon.svg`, `assets/favicon-32.png`, `assets/apple-touch-icon.png`.

## Nav

Destinos, en este orden, con estos `id` (los lee el script de sección activa):
`#about` Sobre mí · `#experience` Experiencia · `#projects` Proyectos ·
`#skills` Habilidades · `#contact` Contacto

Marca: `Jorge Guijarro`

## Héroe

- **h1**: `Construyo software que resuelve problemas de negocio.`
- **una frase**: `Ingeniero informático y desarrollador full stack senior en Cuimo. Abierto a proyectos como autónomo.`
- **acciones**, en este orden de peso:
  1. primaria `Escribirme` → `mailto:jguijarro11@gmail.com`
  2. secundaria `Descargar CV` → `files/Jorge_Guijarro_resume.pdf` (con `download`)

No hay tercer bloque de texto en el héroe.

## Sobre mí  ·  `#about`

Titular: `Sobre mí`

```
Ingeniero Informático y Desarrollador Full Stack Senior en Cuimo. Desarrollo la web de
venta, el ERP interno y las integraciones con servicios externos, en contacto constante
con los distintos departamentos para entender sus necesidades y traducirlas en producto.

Trabajo con Node.js y TypeScript en backend, React en frontend, AWS y MongoDB. Antes fui
Backend Tech Lead en Selectra, liderando sistemas en Python (FastAPI, Django) sobre GCP.

Compagino Cuimo con proyectos propios como autónomo: liderazgo técnico, advisory y desarrollo.
```

Retrato: `images/profile.jpg` (900×1125), alt `Jorge Guijarro del Nuevo`, en un
`data-slot="portrait"` con `data-alt="Jorge Guijarro del Nuevo"`. Pie, si el tema lo pide:
`Jorge Guijarro del Nuevo, Madrid.` Sin `loading="lazy"`: en varias capturas no llegó a cargar.

## Experiencia  ·  `#experience`

Titular: `Experiencia`. Siete puestos, del más reciente al más antiguo.

### 1 · Desarrollador Full Stack Senior — Cuimo — `Jun 2026 – Presente`
`images/logos/cuimo.jpeg`
- Desarrollo de funcionalidades para la web de venta de Cuimo.
- Evolución del ERP interno de la empresa.
- Integraciones con servicios externos.
- Contacto constante con los distintos departamentos para entender las necesidades de negocio y trasladarlas a producto.

Stack: `Node.js, TypeScript, React, MongoDB, AWS, Claude.`

### 2 · Backend Tech Lead — Selectra — `Dic 2025 – Jun 2026`
`images/logos/selectra.jpeg`
- Liderazgo técnico del equipo backend y definición de arquitectura.
- Coordinación con producto, frontend y stakeholders para alinear tecnología y negocio.
- Gestión de equipo multidisciplinar en remoto.
- Diseño e implementación de sistemas backend escalables en Python (FastAPI, Django).
- Mejora de la calidad del código con SonarQube y automatización de despliegues en GCP.

Stack: `Python, FastAPI, Django, PostgreSQL, Firestore, Docker, GCP, GitHub Actions, SonarQube.`

### 3 · Ingeniero de Software — Selectra — `Mar 2024 – Dic 2025`
`images/logos/selectra.jpeg`
- Desarrollo de la aplicación web principal en el sector energético para España y Portugal, con foco en integraciones y fiabilidad.
- Desarrollo backend con Ruby on Rails e integración con servicios externos (CRMs, sistemas de calidad).
- Participación en metodologías Agile y despliegues automatizados en GCP.

Stack: `Ruby on Rails, GCP, Git.`

### 4 · Desarrollador I+D — Alisys — `Sep 2023 – Feb 2024`
`images/logos/alisys.png`
- Desarrollo de API OAuth2 dockerizada y proxy de integración con chatbots.
- Investigación en modelos de lenguaje y despliegues en entornos privados (OKD).

Stack: `Python, Docker, OAuth2, OKD.`

### 5 · Desarrollador — Sabio — `Jul 2022 – Sep 2023`
`images/logos/sabio.jpeg`
- Desarrollo de ChatBots y VoiceBots con Microsoft Bot Framework y Dialogflow CX.
- Integración con APIs backend de clientes y despliegues automatizados.

Stack: `Node.js, TypeScript, Dialogflow CX, MongoDB, Docker, Kubernetes, ArgoCD.`

### 6 · Desarrollador de Software Junior — Fonetic (Sabio Group) — `May 2019 – Jun 2022`
`images/logos/fonetic.jpg`
- Desarrollo de VoiceBots en VoiceXML y JavaScript; servicios backend en Java.
- Participación en proyectos internacionales del sector asegurador y soporte en producción.

Stack: `VoiceXML, JavaScript, Java, Node.js, TypeScript, MongoDB, Docker, Kubernetes.`

### 7 · Becario de Desarrollo de Software — Optiva Media — `Jun 2018 – Dic 2018`
`images/logos/optiva-media.png`
- Desarrollo de funcionalidades backend/frontend y pruebas de integración.
- Colaboración en despliegues y pipelines de integración continua (Jenkins).

Stack: `JavaScript, Node.js, AngularJS, MySQL, Jenkins.`

## Proyectos  ·  `#projects`

Titular: `Proyectos`. Un solo proyecto: **Koi**.

Entrada:
```
Aplicación Android para entrenar en casa, totalmente offline: sin backend, sin cuenta y sin
red. Sustituye una hoja de cálculo que sabía planificar pero no guiar la sesión.
```

- Temporizador guiado basado en **instantes absolutos** en lugar de un contador: sobrevive a la pantalla apagada, a *doze* y a la muerte del proceso por construcción, no por código defensivo.
- Arquitectura por capas con dependencias invertidas y dominio puro, verificado con 269 tests en JVM sin emulador.
- Una única puerta de calidad (`./gradlew qualityCheck`) que CI ejecuta sin variantes, así que un verde local y un verde en CI significan lo mismo.
- Esquema de base de datos versionado en el repositorio: un cambio sin migración rompe la build en vez de un dispositivo.
- Documentación como entregable: ADD, ocho ADR y especificación del formato de intercambio.

Enlace: `Ver en GitHub` → `https://github.com/jguijarro11/my-own-koi`

Ficha (aprobada por el dueño; etiqueta de la tabla: `Ficha`):

| | |
|---|---|
| Plataforma | Android, Kotlin, Jetpack Compose, Material 3 |
| Datos | Room, esquema versionado en el repositorio |
| Inyección | Hilt, Coroutines |
| Pruebas | 269 en JVM, sin emulador |
| Calidad | Gradle, GitHub Actions, detekt, Kover |
| Documentación | ADD, 8 ADR, formato de intercambio |

## Habilidades  ·  `#skills`

Titular: `Habilidades`. Seis categorías, con las etiquetas del dueño:

| Categoría | Contenido |
|---|---|
| `Backend` | Node.js, TypeScript, Python (FastAPI, Django), Ruby on Rails, Java. |
| `Frontend` | React, JavaScript, HTML, CSS. |
| `Cloud & DevOps` | AWS, GCP, Docker, Kubernetes. |
| `Bases de datos` | MongoDB, PostgreSQL, MySQL, Firestore. |
| `Herramientas & IA` | Claude, Git, GitHub Actions. |
| `Idiomas & Certificaciones` | ver abajo |

`Idiomas & Certificaciones`, sin emoji, con los dos enlaces vivos:

- `Español — Nativo`
- `Inglés — Professional Working`
- `Docker DevOps Profesional` → `https://openwebinars.net/cert/zMyRD`
- `Python Avanzado` (sin enlace)
- `Programación asistida por IA` → `https://cursos.trainingit.es/mod/customcert/verify_certificate.php?code=z9a7N7usFl`

## Contacto  ·  `#contact`  (el pie)

**Solo datos. Ninguna frase de cierre, ningún colofón tipográfico.**

- `jguijarro11@gmail.com` → `mailto:jguijarro11@gmail.com`
- `(+34) 638 907 350` → `tel:+34638907350`
- `LinkedIn` → `https://linkedin.com/in/jorge-guijarro-del-nuevo`
- `GitHub` → `https://github.com/jguijarro11`
- `CV en PDF` → `files/Jorge_Guijarro_resume.pdf` (con `download`)
- `© 2026 Jorge Guijarro del Nuevo.`

La marca `Jorge Guijarro del Nuevo` puede ir grande sobre los enlaces si el pie es un mástil.

## Los ocho destinos que no pueden perderse

`files/Jorge_Guijarro_resume.pdf` · `mailto:jguijarro11@gmail.com` · `tel:+34638907350` ·
`https://linkedin.com/in/jorge-guijarro-del-nuevo` · `https://github.com/jguijarro11` ·
`https://github.com/jguijarro11/my-own-koi` · `https://openwebinars.net/cert/zMyRD` ·
`https://cursos.trainingit.es/mod/customcert/verify_certificate.php?code=z9a7N7usFl`
