import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind class names safely — later classes win over earlier
 * conflicting ones. Used by every UI primitive.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Clamp a number between a min and max. */
export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

/** Linear interpolation. */
export function lerp(start: number, end: number, amount: number) {
  return (1 - amount) * start + amount * end;
}

/** Map a value from one range to another. */
export function mapRange(
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number,
) {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

/** Zero-pad a number for elegant indices: 1 -> "01". */
export function padIndex(n: number, length = 2) {
  return String(n).padStart(length, "0");
}
