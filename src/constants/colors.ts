export const colors = {
  // Primary
  primary: '#9A84FF',
  primary200: '#B3A2FC',

  // Shades (from Figma palette 100-700)
  shade100: '#0C0C0C', // Darkest (but use #050505 for background in practice)
  shade200: '#141414', // Dark (cards, inputs background)
  shade300: '#FD7B60', // Accent/Orange
  shade400: '#0A8AF3', // Info/Blue
  shade500: '#2A2A2A', // Medium gray (borders)
  shade600: '#8E8E8E', // Light gray (secondary text, placeholders)
  shade700: '#FFFFFF', // White (primary text)

  // Grayscale aliases (for easier usage in components)
  gray100: '#050505', // Background (slightly darker than shade100)
  gray200: '#141414', // Cards, inputs background (same as shade200)
  gray300: '#2A2A2A', // Borders, dividers (same as shade500)
  gray500: '#8E8E8E', // Secondary text, placeholders (same as shade600)
  white: '#FFFFFF',   // Primary text (same as shade700)

  // Semantic colors
  success: '#04B155', // Green
  error: '#C93838',   // Red
  info: '#0A8AF3',    // Blue (same as shade400)
  accent: '#FD7B60',  // Orange (same as shade300)

  // Transparent
  transparent: 'transparent',
} as const;

export type ColorToken = keyof typeof colors;
