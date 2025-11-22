import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { colors } from '../../constants/colors';

interface RadioProps {
  selected?: boolean;
  label?: string;
  onPress?: () => void;
  disabled?: boolean;
  containerStyle?: ViewStyle;
  labelStyle?: TextStyle;
}

export const Radio: React.FC<RadioProps> = ({
  selected = false,
  label = 'Label',
  onPress,
  disabled = false,
  containerStyle,
  labelStyle,
}) => {
  const handlePress = () => {
    if (!disabled && onPress) {
      onPress();
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
        styles.radio,
        selected && styles.radioSelected,
        disabled && styles.radioDisabled,
      ]}>
        {selected && <View style={styles.radioInner} />}
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
    gap: 8,
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gainsboro',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  radioSelected: {
    borderColor: colors.primary,
    borderWidth: 1,
  },
  radioInner: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: colors.primary,
  },
  radioDisabled: {
    opacity: 0.5,
  },
  label: {
    fontSize: 17,
    lineHeight: 22,
    color: colors.white,
    fontFamily: 'Onest-Regular',
    fontWeight: '400',
  },
  labelDisabled: {
    opacity: 0.5,
  },
});

export default Radio;
