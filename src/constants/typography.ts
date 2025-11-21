import { TextStyle } from 'react-native';

const fontFamily = {
  regular: 'Onest-Regular',
  semiBold: 'Onest-SemiBold',
} as const;

export const typography = {
  largeTitle: {
    fontFamily: fontFamily.semiBold,
    fontSize: 34,
    lineHeight: 44,
    fontWeight: '600',
  },
  title1: {
    fontFamily: fontFamily.semiBold,
    fontSize: 28,
    lineHeight: 36,
    fontWeight: '600',
  },
  title2: {
    fontFamily: fontFamily.semiBold,
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '600',
  },
  title3: {
    fontFamily: fontFamily.semiBold,
    fontSize: 20,
    lineHeight: 26,
    fontWeight: '600',
  },
  headline: {
    fontFamily: fontFamily.semiBold,
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '600',
  },
  subheadline: {
    fontFamily: fontFamily.semiBold,
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '600',
  },
  body: {
    fontFamily: fontFamily.regular,
    fontSize: 17,
    lineHeight: 22,
    fontWeight: '400',
  },
  body2: {
    fontFamily: fontFamily.regular,
    fontSize: 15,
    lineHeight: 18,
    fontWeight: '400',
  },
  callout: {
    fontFamily: fontFamily.regular,
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '400',
  },
  caption1: {
    fontFamily: fontFamily.semiBold,
    fontSize: 18,
    lineHeight: 23,
    fontWeight: '600',
  },
  caption2: {
    fontFamily: fontFamily.semiBold,
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '600',
  },
  footnote: {
    fontFamily: fontFamily.regular,
    fontSize: 13,
    lineHeight: 16,
    fontWeight: '400',
  },
} as const satisfies Record<string, TextStyle>;

export type TypographyToken = keyof typeof typography;

export { fontFamily };
