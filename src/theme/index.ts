import { colors } from '../constants/colors';
import { typography, fontFamily } from '../constants/typography';
import { spacing, borderRadius, layout } from '../constants/spacing';

export const theme = {
  colors,
  typography,
  fontFamily,
  spacing,
  borderRadius,
  layout,

  // Component-specific tokens
  components: {
    button: {
      sizes: {
        large: { height: 56, paddingHorizontal: 24 },
        medium: { height: 48, paddingHorizontal: 20 },
        small: { height: 40, paddingHorizontal: 16 },
      },
      variants: {
        primary: {
          backgroundColor: colors.primary,
          textColor: colors.gray100,
          borderColor: 'transparent',
        },
        outline: {
          backgroundColor: 'transparent',
          textColor: colors.primary,
          borderColor: colors.primary,
        },
      },
    },
    input: {
      height: 56,
      backgroundColor: colors.gray200,
      borderColor: colors.gray300,
      borderColorFocus: colors.primary,
      borderColorError: colors.error,
      textColor: colors.white,
      placeholderColor: colors.gray500,
      borderRadius: borderRadius.md,
      padding: 16,
    },
    textArea: {
      minHeight: 120,
      backgroundColor: colors.gray200,
      borderColor: colors.gray300,
      borderRadius: borderRadius.md,
      padding: 16,
    },
    toggle: {
      trackWidth: 51,
      trackHeight: 31,
      thumbSize: 27,
      trackOff: colors.gray300,
      trackOn: colors.primary,
      thumb: colors.white,
    },
    checkbox: {
      size: 24,
      borderRadius: 6,
      borderColor: colors.gray500,
      checkedBackground: colors.primary,
    },
    radio: {
      size: 24,
      borderColor: colors.gray500,
      selectedColor: colors.primary,
      innerSize: 12,
    },
  },

  // Shadows (minimal for dark theme)
  shadows: {
    sm: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.3,
      shadowRadius: 2,
      elevation: 2,
    },
    md: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.4,
      shadowRadius: 6,
      elevation: 4,
    },
    lg: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.5,
      shadowRadius: 15,
      elevation: 8,
    },
  },
} as const;

export type Theme = typeof theme;

// Re-export constants
export { colors, typography, fontFamily, spacing, borderRadius, layout };
