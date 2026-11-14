import { Inter, Cormorant_Garamond } from "next/font/google";

/**
 * Body / UI typeface — Inter.
 * Self-hosted by next/font (no layout shift, no runtime request).
 */
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
});

/**
 * Display / editorial typeface — Cormorant Garamond.
 * Romantic, airy and high-contrast — it carries the dreamy atmosphere of
 * the hero film. Italics are used for accent words (e.g. "reverie").
 */
export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const fontVariables = `${inter.variable} ${cormorant.variable}`;
