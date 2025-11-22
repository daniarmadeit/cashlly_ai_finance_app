import { useWindowDimensions, TextStyle } from 'react-native';
import { typography } from '@/constants';

const BASE_WIDTH = 428; // iPhone 14 Pro
const MIN_WIDTH = 375; // iPhone SE
const MAX_CONTENT_WIDTH = 388; // from Figma

export const useResponsive = () => {
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();

  const scale = screenWidth / BASE_WIDTH;
  const isSmallDevice = screenWidth < 375;
  const isMediumDevice = screenWidth >= 375 && screenWidth < 414;
  const isLargeDevice = screenWidth >= 414;

  const padding = 20;
  const contentWidth = screenWidth - padding * 2;

  // Quick Actions responsive calculation
  const quickActionGap = 12;
  const quickActionCount = 4;
  const totalGaps = (quickActionCount - 1) * quickActionGap;

  // Calculate size maintaining 88x86 aspect ratio (almost square)
  const quickActionSize = Math.min(
    (contentWidth - totalGaps) / quickActionCount,
    88 // max size from Figma
  );

  const quickActionWidth = quickActionSize;
  const quickActionHeight = Math.round(quickActionSize * (86 / 88)); // maintain aspect ratio

  // Bottom Navigation responsive calculation
  const bottomNavActiveMaxWidth = 150;
  const bottomNavTabWidth = 62;

  /**
   * Adaptive typography system
   * Scales font size based on screen width with constraints:
   * - minScale: minimum size multiplier (default 0.85 = 85% of base size)
   * - maxScale: maximum size multiplier (default 1.0 = 100% of base size)
   *
   * Algorithm:
   * 1. Calculate scale factor based on screen width vs base width
   * 2. Apply min/max constraints
   * 3. Return scaled typography style
   */
  const getResponsiveFontSize = (
    baseFontSize: number,
    minScale: number = 0.8,
    maxScale: number = 1.0
  ): number => {
    const scaleFactor = Math.max(minScale, Math.min(scale, maxScale));
    return Math.round(baseFontSize * scaleFactor);
  };

  const getResponsiveTypography = (
    styleKey: keyof typeof typography,
    options?: {
      minScale?: number;
      maxScale?: number;
      forceOneLineHeight?: boolean; // для кнопок и коротких текстов
    }
  ): TextStyle => {
    const baseStyle = typography[styleKey];
    const minScale = options?.minScale ?? 0.8;
    const maxScale = options?.maxScale ?? 1.0;

    const fontSize = getResponsiveFontSize(baseStyle.fontSize, minScale, maxScale);

    // Пропорционально масштабируем lineHeight
    const lineHeightScale = fontSize / baseStyle.fontSize;
    const lineHeight = options?.forceOneLineHeight
      ? fontSize // для кнопок делаем lineHeight = fontSize для одной строки
      : Math.round(baseStyle.lineHeight * lineHeightScale);

    return {
      ...baseStyle,
      fontSize,
      lineHeight,
    };
  };

  return {
    screenWidth,
    screenHeight,
    scale,
    isSmallDevice,
    isMediumDevice,
    isLargeDevice,
    padding,
    contentWidth,
    quickActionWidth,
    quickActionHeight,
    quickActionGap,
    bottomNavActiveMaxWidth,
    bottomNavTabWidth,
    getResponsiveFontSize,
    getResponsiveTypography,
  };
};
