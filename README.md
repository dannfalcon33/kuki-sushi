# Sitio Web KŪKI Sushi

![KUKI Sushi](./screen/screencapture.png)

Un sitio web minimalista y de alta gama para **KŪKI**, un restaurante de cocina Nikkei japonesa. Este proyecto se enfoca en una estética sofisticada de "modo oscuro", interacciones suaves y una experiencia de usuario premium.

## 🍣 Concepto

**KŪKI** (Atmósfera) representa una fusión entre la precisión japonesa tradicional y el arte culinario moderno. El sitio web refleja esto a través de:

- **Paleta Carbón y Azul Marino Profundo**: Alejándose de los clichés rojos/negros.
- **Visuales Cinemáticos**: Fotografía macro de alta calidad y bucles de video.
- **Tipografía Minimalista**: Una mezcla de Serif editorial y Sans-Serif geométrica.

## 🛠 Tecnologías

- **[Vite](https://vitejs.dev/)**: Herramientas Frontend de Próxima Generación.
- **[React](https://reactjs.org/)**: Librería para construir interfaces de usuario.
- **TypeScript**: Estrictamente tipado para escalabilidad.
- **[Framer Motion](https://www.framer.com/motion/)**: Librería de animación lista para producción.
- **GSAP**: Para animaciones complejas de carrusel.
- **CSS Modules / Vanilla CSS**: Estilizado personalizado con variables CSS para máximo control.

## 📂 Estructura del Proyecto

```
src/
├── assets/         # Imágenes generadas de alta resolución
├── components/     # Componentes UI (Navbar, Hero, Modales, etc.)
├── constants.ts    # Contenido y datos centralizados
├── types.ts        # Interfaces TypeScript
├── App.tsx         # Ensamblaje principal del diseño
└── index.css       # Estilos globales y variables
```

## ✨ Funcionalidades y Experiencia

Esta landing page está diseñada para cautivar al usuario desde el primer segundo:

1.  **Pantalla de Carga (Loader)**:

    - Al entrar, un loader elegante con el logo y una barra de progreso prepara los recursos, asegurando una transición suave al contenido principal.

2.  **Hero Inmersivo con Carrusel GSAP**:

    - La sección principal presenta un carrusel animado dinámico impulsado por **GSAP**, rotando suavemente entre imágenes cinemáticas del restaurante y sus platos, con efectos de entrada de texto.

3.  **Filosofía y Narrativa**:

    - Diseño de pantalla dividida que cuenta la historia de la marca y su conexión con el océano.

4.  **Menú Interactivo**:

    - Carrusel "Drag-to-scroll" (arrastrar para desplazar) que destaca los platos de temporada con precios y descripciones.

5.  **Sistema de Reservas Funcional**:

    - **Modal de Reserva**: Accesible desde el Navbar y la sección Omakase. Permite seleccionar fecha, hora y número de personas con validación de campos en tiempo real.
    - **Confirmación**: Un modal de agradecimiento ("Thank You Page") aparece tras una reserva exitosa.

6.  **Navegación Responsiva**:

    - Totalmente adaptable a dispositivos móviles con un menú hamburguesa suave y superposición de pantalla completa.
    - **Scroll Suave**: Navegación fluida entre las diferentes secciones de la página.

7.  **Prueba Social (Social Proof)**:
    - Galería tipo masonry que simula un feed de Instagram con imágenes de sushi gourmet de alta fidelidad.

## 🚀 Comenzando

1.  **Instalar dependencias**:

    ```bash
    npm install
    ```

2.  **Ejecutar servidor de desarrollo**:

    ```bash
    npm run dev
    ```

3.  **Construir para producción**:
    ```bash
    npm run build
    ```

---

## Live Demo

https://kukisushi.netlify.app/

## Sobre el Desarrollador 👨‍💻

**Yoshua Soto** (Dann Falcon Dev)  
_Fullstack Developer | Especialista en TypeScript_

Creador apasionado por construir aplicaciones que no solo funcionan, sino que asombran. Utilizando la potencia de la IA (Gemini) y tecnologías web modernas, me enfoco en entregar experiencias de usuario (UX) memorables e inmersivas.

📫 **Contacto**

- **Email**: yoshuasoto54@gmail.com
- **WhatsApp**: +58 0422 033 1995

##

![Falcon Studio Dev](banner.png)
