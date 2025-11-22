export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  '2xl': 24,
  '3xl': 32,
  '4xl': 40,
} as const;

export const borderRadius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  full: 9999,
} as const;

export const layout = {
  screenPadding: 20,
  maxContentWidth: 388,
  baseScreenWidth: 428,
  minScreenWidth: 375,

  // Quick Actions
  quickActionMaxWidth: 88,
  quickActionHeight: 86,
  quickActionGap: 12,

  // Bottom Navigation
  bottomNavHeight: 74,
  bottomNavActiveMaxWidth: 150,
  bottomNavTabSize: 62,
} as const;

export type SpacingToken = keyof typeof spacing;
export type BorderRadiusToken = keyof typeof borderRadius;
