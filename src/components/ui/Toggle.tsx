import React from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet,
  ViewStyle,
  Animated,
} from 'react-native';
import { colors } from '../../constants/colors';

interface ToggleProps {
  value?: boolean;
  onValueChange?: (value: boolean) => void;
  disabled?: boolean;
  containerStyle?: ViewStyle;
}

export const Toggle: React.FC<ToggleProps> = ({
  value = false,
  onValueChange,
  disabled = false,
  containerStyle,
}) => {
  const handlePress = () => {
    if (!disabled && onValueChange) {
      onValueChange(!value);
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.container,
        value ? styles.containerActive : styles.containerInactive,
        disabled && styles.containerDisabled,
        containerStyle,
      ]}
      onPress={handlePress}
      disabled={disabled}
      activeOpacity={0.8}
    >
      <View
        style={[
          styles.knob,
          value ? styles.knobActive : styles.knobInactive,
        ]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 51,
    height: 31,
    borderRadius: 31,
    justifyContent: 'center',
    position: 'relative',
  },
  containerActive: {
    backgroundColor: colors.primary,
  },
  containerInactive: {
    backgroundColor: colors.gray300,
  },
  containerDisabled: {
    opacity: 0.5,
  },
  knob: {
    width: 27,
    height: 27,
    borderRadius: 27,
    backgroundColor: colors.white,
    position: 'absolute',
  },
  knobActive: {
    right: 2,
  },
  knobInactive: {
    left: 2,
  },
});

export default Toggle;
