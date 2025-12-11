export interface NavLink {
  label: string;
  href: string;
}

export interface NavbarContent {
  brand: string;
  links: NavLink[];
  cta: string;
}

export interface HeroContent {
  title: string;
  highlight: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export interface PhilosophyContent {
  preTitle: string;
  title: string;
  description: string;
  baker: string; // "Chef Ejecutivo"
  signature: string;
}

export interface MenuItem {
  id: number;
  title: string;
  desc: string;
  price: string;
  image: string;
}

export interface FavoritesContent {
  title: string;
  items: MenuItem[];
}

export interface OmakaseContent {
  title: string;
  description: string;
  cta: string;
}

export interface SocialContent {
  title: string;
  handle: string;
  images: string[];
}

export interface FooterContent {
  brand: {
    name: string;
    tagline: string;
  };
  navigation: {
    title: string;
    links: NavLink[];
  };
  contact: {
    title: string;
    address: string;
    phone: string;
    email: string;
    hours: string;
  };
  newsletter: {
    title: string;
    placeholder: string;
  };
  copyright: string;
}
