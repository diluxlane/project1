/**
 * Site-wide configuration and content maps.
 * Centralised so every section stays declarative and consistent.
 */

export const siteConfig = {
  name: "RÊVERIE",
  tagline: "A Waking Dream",
  description:
    "A cinematic reverie — a slow, luminous journey through light, stillness and wonder. Step into a waking dream where the ordinary turns golden.",
  url: process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined),
} as const;

export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "The Reverie", href: "#reverie" },
  { label: "Experience", href: "#experience" },
  { label: "Gallery", href: "#gallery" },
  { label: "Philosophy", href: "#philosophy" },
];

export const footerLinks: NavLink[] = [
  { label: "Story", href: "#story" },
  { label: "Experience", href: "#experience" },
  { label: "Gallery", href: "#gallery" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Begin", href: "#begin" },
];

export type Social = {
  label: string;
  href: string;
};

export const socials: Social[] = [
  { label: "Project 01", href: "https://github.com/diluxlane/project1" },
  { label: "Journal", href: "#story" },
];

/** Media assets. */
export const assets = {
  heroVideo: "/videos/hero-coat.mp4",
  footerVideo: "/videos/footer.mp4",
  imageHand: "/images/hand.jpg",
  imageMeadow: "/images/meadow.jpg",
  invitation: "/images/invitation.jpg",
  gallery: {
    swirl: "/images/swirl.jpg",
    wander: "/images/wander.jpg",
    bloom: "/images/bloom.jpg",
    hand: "/images/hand.jpg",
    meadow: "/images/meadow.jpg",
  },
} as const;
