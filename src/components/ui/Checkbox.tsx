import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../constants/colors';

interface CheckboxProps {
  checked?: boolean;
  label?: string;
  onPress?: (checked: boolean) => void;
  disabled?: boolean;
  containerStyle?: ViewStyle;
  labelStyle?: TextStyle;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked = false,
  label = 'Label',
  onPress,
  disabled = false,
  containerStyle,
  labelStyle,
}) => {
  const handlePress = () => {
    if (!disabled && onPress) {
      onPress(!checked);
    }
  };

  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={handlePress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      <View style={[
        styles.checkbox,
        checked && styles.checkboxChecked,
        disabled && styles.checkboxDisabled,
      ]}>
        {checked && (
          <Ionicons name="checkmark" size={12} color={colors.white} />
        )}
      </View>
      <Text style={[
        styles.label,
        disabled && styles.labelDisabled,
        labelStyle,
      ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'gainsboro',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  checkboxChecked: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  checkboxDisabled: {
    opacity: 0.5,
  },
  label: {
    fontSize: 16,
    lineHeight: 20,
    color: colors.white,
    fontFamily: 'Onest-Regular',
    fontWeight: '400',
  },
  labelDisabled: {
    opacity: 0.5,
  },
});

export default Checkbox;
