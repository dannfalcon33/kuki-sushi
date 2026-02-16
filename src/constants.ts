import type {
  NavbarContent,
  HeroContent,
  PhilosophyContent,
  FavoritesContent,
  OmakaseContent,
  SocialContent,
  FooterContent,
} from "./types";

// Images
import heroBg from "./assets/hero-bg.png";
import hero1 from "./assets/hero-1.png";
import hero2 from "./assets/hero-2.png";
import hero3 from "./assets/hero-3.png";
import hero4 from "./assets/hero-4.png";
import philosophyBg from "./assets/philosophy-bg.png";
import card1 from "./assets/carousel-1.png";
import card2 from "./assets/carousel-2.png";
import card3 from "./assets/carousel-3.png";
import omakaseBg from "./assets/omakase-bg.png";
import social1 from "./assets/social-1.png";
import social2 from "./assets/social-2.png";
import social3 from "./assets/social-3.png";
import social4 from "./assets/social-4.png";
import social5 from "./assets/social-5.png";
import social6 from "./assets/social-6.png";

export const NAVBAR_CONTENT: NavbarContent = {
  brand: "KŪKI SUSHI",
  links: [
    { label: "Menu", href: "#menu" },
    { label: "Omakase Experience", href: "#omakase" },
    { label: "About Us", href: "#about" },
    { label: "Gallery", href: "#gallery" },
  ],
  cta: "Book a Table",
};

export const HERO_CONTENT: HeroContent = {
  title: "KŪKI SUSHI",
  highlight: "An Experience from Japan.",
  subtitle:
    "Signature Nikkei cuisine and Omakase bar in the heart of the city. \nIngredients brought in daily.",
  ctaPrimary: "View Seasonal Menu",
  ctaSecondary: "Watch Manifesto Video",
};

export const HERO_BG = heroBg;
export const HERO_IMAGES = [heroBg, hero1, hero2, hero3, hero4];

export const PHILOSOPHY_CONTENT: PhilosophyContent = {
  preTitle: "OUR ESSENCE",
  title: "From the Ocean to the Soul.",
  description:
    "At KŪKI, we understand sushi not just as food, but as a direct connection with nature. Our fishing is sustainable, respecting the cycles of the sea. We don't just serve fish; we honor its origin and the ancient tradition of its preparation.",
  baker: "Executive Chef",
  signature: "Kenji T.",
};

export const PHILOSOPHY_BG = philosophyBg;

export const FAVORITES_CONTENT: FavoritesContent = {
  title: "Seasonal Curation",
  items: [
    {
      id: 1,
      title: "Toro & Gold Nigiri",
      desc: "Bluefin tuna belly, oscietra caviar, 24k gold leaf.",
      price: "$18",
      image: card1,
    },
    {
      id: 2,
      title: "A5 Wagyu & Uni",
      desc: "Seared Miyazaki A5 Wagyu, Hokkaido sea urchin.",
      price: "$24",
      image: card2,
    },
    {
      id: 3,
      title: "Hotate Truffle",
      desc: "Giant scallop, fresh black truffle, white truffle oil.",
      price: "$20",
      image: card3,
    },
    {
      id: 4,
      title: "Toro & Gold Nigiri",
      desc: "Bluefin tuna belly, oscietra caviar, 24k gold leaf.",
      price: "$18",
      image: card1,
    },
  ],
};

export const OMAKASE_CONTENT: OmakaseContent = {
  title: "The Omakase Bar.",
  description:
    "Leave it to the Chef. A 12-course experience designed daily based on the freshest catch. Only 8 seats per shift.",
  cta: "Request Omakase Seat",
};

export const OMAKASE_BG = omakaseBg;

export const SOCIAL_CONTENT: SocialContent = {
  title: "KŪKI Vibes",
  handle: "@kukisushi",
  images: [social1, social2, social3, social4, social5, social6],
};

export const FOOTER_CONTENT: FooterContent = {
  brand: {
    name: "KŪKI",
    tagline: "Redefining the Japanese experience.",
  },
  navigation: {
    title: "Navigation",
    links: [
      { label: "Menu", href: "#menu" },
      { label: "Reservations", href: "#reservations" },
      { label: "Press", href: "#press" },
      { label: "Careers", href: "#careers" },
      { label: "Privacy", href: "#privacy" },
    ],
  },
  contact: {
    title: "Contact",
    address: "La Hoyada Av. Fuerzas Armadas, Caracas Venezuela",
    phone: "+58 422 033 19 95",
    email: "kukisushi@gmail.com",
    hours: "Mon - Sun: 10:00am - 11:00pm",
  },
  newsletter: {
    title: "Join the Circle",
    placeholder: "Your email",
  },
  copyright: "© 2026 KŪKI Sushi. All rights reserved.",
};
