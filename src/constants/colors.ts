export const colors = {
  // Primary
  primary: '#9A84FF',
  primary200: '#B3A2FC',

  // Grayscale
  gray100: '#050505',
  gray200: '#141414',
  gray300: '#2A2A2A',
  gray400: '#444444',
  gray500: '#8E8E8E',
  white: '#FFFFFF',

  // Semantic
  success: '#04B155',
  error: '#C93838',
  info: '#0A8AF3',
  accent: '#FD7B60',

  // Transparent
  transparent: 'transparent',
} as const;

export type ColorToken = keyof typeof colors;
