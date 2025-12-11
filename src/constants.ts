import type { 
  NavbarContent, 
  HeroContent, 
  PhilosophyContent, 
  FavoritesContent, 
  OmakaseContent, 
  SocialContent, 
  FooterContent 
} from './types';

// Images
import heroBg from './assets/hero-bg.png';
import philosophyBg from './assets/philosophy-bg.png';
import card1 from './assets/carousel-1.png';
import card2 from './assets/carousel-2.png';
import card3 from './assets/carousel-3.png';
import omakaseBg from './assets/omakase-bg.png';
import social1 from './assets/social-1.png';
import social2 from './assets/social-2.png';
import social3 from './assets/social-3.png';

export const NAVBAR_CONTENT: NavbarContent = {
  brand: "KŪKI SUSHI",
  links: [
    { label: "Menú", href: "#menu" },
    { label: "Experiencia Omakase", href: "#omakase" },
    { label: "Nosotros", href: "#about" },
    { label: "Galería", href: "#gallery" }
  ],
  cta: "Reservar Mesa"
};

export const HERO_CONTENT: HeroContent = {
  title: "Más que Sushi.",
  highlight: "Un Experiencia del Japón.",
  subtitle: "Cocina Nikkei de autor y barra Omakase en el corazón de la ciudad. \nIngredientes traídos diariamente.",
  ctaPrimary: "Ver Menú de Temporada",
  ctaSecondary: "Ver Video Manifiesto"
};

export const HERO_BG = heroBg;

export const PHILOSOPHY_CONTENT: PhilosophyContent = {
  preTitle: "NUESTRA ESENCIA",
  title: "Del Océano al Alma.",
  description: "En KŪKI, entendemos el sushi no como comida, sino como una conexión directa con la naturaleza. Nuestra pesca es sostenible, respetando los ciclos del mar. No solo servimos pescado, honramos su origen y la tradición milenaria de su preparación.",
  baker: "Chef Ejecutivo",
  signature: "Kenji T."
};

export const PHILOSOPHY_BG = philosophyBg;

export const FAVORITES_CONTENT: FavoritesContent = {
  title: "Curaduría de Temporada",
  items: [
    {
      id: 1,
      title: "Toro & Gold Nigiri",
      desc: "Ventresca de atún azul, caviar oscietra, pan de oro 24k.",
      price: "$18",
      image: card1
    },
    {
      id: 2,
      title: "A5 Wagyu & Uni",
      desc: "Wagyu Miyazaki A5 sellado, erizo de Hokkaido.",
      price: "$24",
      image: card2
    },
    {
      id: 3,
      title: "Hotate Truffle",
      desc: "Vieira gigante, trufa negra fresca, aceite de trufa blanca.",
      price: "$20",
      image: card3
    },
    {
      id: 4,
      title: "Toro & Gold Nigiri",
      desc: "Ventresca de atún azul, caviar oscietra, pan de oro 24k.",
      price: "$18",
      image: card1
    }
  ]
};

export const OMAKASE_CONTENT: OmakaseContent = {
  title: "La Barra Omakase.",
  description: "Déjate en manos del Chef. Una experiencia de 12 tiempos diseñada diariamente según la captura más fresca. Solo 8 asientos por turno.",
  cta: "Solicitar Asiento Omakase"
};

export const OMAKASE_BG = omakaseBg;

export const SOCIAL_CONTENT: SocialContent = {
  title: "KŪKI Vives",
  handle: "@kukisushi",
  images: [social1, social3, social2, social3, social1, social2]
};

export const FOOTER_CONTENT: FooterContent = {
  brand: {
    name: "KŪKI",
    tagline: "Redefiniendo la experiencia japonesa."
  },
  navigation: {
    title: "Navegación",
    links: [
      { label: "Menú", href: "#menu" },
      { label: "Reservas", href: "#reservations" },
      { label: "Prensa", href: "#press" },
      { label: "Carreras", href: "#careers" },
      { label: "Privacidad", href: "#privacy" }
    ]
  },
  contact: {
    title: "Contacto",
    address: "La Hoyada Av. Fuerzas Armadas, Caracas Venezuela",
    phone: "+58 422 033 19 95",
    email: "kukisushi@gmail.com",
    hours: "Lun - Dom: 10:00am - 11:00pm"
  },
  newsletter: {
    title: "Únete al círculo",
    placeholder: "Tu correo electrónico"
  },
  copyright: "© 2026 KŪKI Sushi. Todos los derechos reservados."
};
