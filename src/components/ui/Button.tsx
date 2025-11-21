import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
} from 'react-native';
import { colors } from '../../constants/colors';

type ButtonSize = 'large' | 'medium' | 'small';
type ButtonVariant = 'primary' | 'outline';

interface ButtonProps {
  title: string;
  onPress: () => void;
  size?: ButtonSize;
  variant?: ButtonVariant;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const sizeStyles: Record<ButtonSize, { height: number; borderRadius: number; paddingHorizontal: number; fontSize: number; lineHeight: number }> = {
  large: {
    height: 60,
    borderRadius: 48,
    paddingHorizontal: 12,
    fontSize: 18,
    lineHeight: 23,
  },
  medium: {
    height: 56,
    borderRadius: 56,
    paddingHorizontal: 8,
    fontSize: 15,
    lineHeight: 20,
  },
  small: {
    height: 46,
    borderRadius: 46,
    paddingHorizontal: 16,
    fontSize: 15,
    lineHeight: 20,
  },
};

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  size = 'large',
  variant = 'primary',
  disabled = false,
  loading = false,
  fullWidth = true,
  style,
  textStyle,
}) => {
  const sizeConfig = sizeStyles[size];
  const isPrimary = variant === 'primary';

  const containerStyle: ViewStyle = {
    height: sizeConfig.height,
    borderRadius: sizeConfig.borderRadius,
    paddingHorizontal: sizeConfig.paddingHorizontal,
    backgroundColor: isPrimary ? colors.primary : 'transparent',
    borderWidth: isPrimary ? 0 : 1.5,
    borderColor: isPrimary ? undefined : colors.primary,
    width: fullWidth ? '100%' : undefined,
    opacity: disabled ? 0.5 : 1,
  };

  const labelStyle: TextStyle = {
    fontSize: sizeConfig.fontSize,
    lineHeight: sizeConfig.lineHeight,
    color: isPrimary ? colors.gray100 : colors.primary,
    fontFamily: 'Onest-SemiBold',
    fontWeight: '600',
  };

  return (
    <TouchableOpacity
      style={[styles.container, containerStyle, style]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator
          color={isPrimary ? colors.gray100 : colors.primary}
          size="small"
        />
      ) : (
        <Text style={[styles.label, labelStyle, textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  label: {
    textAlign: 'center',
  },
});

export default Button;
