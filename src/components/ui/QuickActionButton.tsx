import React, { ReactNode } from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';
import { colors, typography, layout } from '@/constants';

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
      <Text style={styles.label} numberOfLines={2}>{label}</Text>
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
    ...typography.body2,
    color: colors.white,
    textAlign: 'center',
  },
});
