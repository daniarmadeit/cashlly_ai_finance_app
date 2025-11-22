import React, { ReactNode } from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';
import { colors, layout } from '@/constants';
import { useResponsive } from '@/hooks';

interface QuickActionButtonProps {
  icon: ReactNode;
  label: string;
  onPress: () => void;
  style?: ViewStyle;
  width?: number;
  height?: number;
}

export const QuickActionButton: React.FC<QuickActionButtonProps> = ({
  icon,
  label,
  onPress,
  style,
  width,
  height,
}) => {
  const { getResponsiveTypography } = useResponsive();

  // Адаптивная типографика для кнопок: минимум 80% от базового размера
  const labelStyle = getResponsiveTypography('body2', {
    minScale: 0.75,  // на экранах <375px шрифт будет 75% от 15px = ~11px
    maxScale: 1.0,   // на больших экранах максимум 15px
  });

  return (
    <TouchableOpacity
      style={[
        styles.container,
        width && height
          ? { width, height }
          : { flex: 1, maxWidth: layout.quickActionMaxWidth, height: layout.quickActionHeight },
        style,
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {icon}
      <Text
        style={[styles.label, labelStyle]}
        numberOfLines={1}
        adjustsFontSizeToFit
        minimumFontScale={0.7}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(20, 20, 20, 0.3)',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  label: {
    color: colors.white,
    textAlign: 'center',
  },
});
