import { useWindowDimensions } from 'react-native';

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
  };
};
