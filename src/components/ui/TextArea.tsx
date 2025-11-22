import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  TextInputProps,
} from 'react-native';
import { colors } from '../../constants/colors';

interface TextAreaProps extends Omit<TextInputProps, 'style'> {
  error?: string;
  disabled?: boolean;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
}

export const TextArea: React.FC<TextAreaProps> = ({
  error,
  disabled = false,
  containerStyle,
  inputStyle,
  value,
  onFocus,
  onBlur,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const hasValue = !!value && value.length > 0;
  const hasError = !!error;

  const getBorderColor = () => {
    if (disabled) return 'grey';
    if (hasError) return colors.error;
    if (isFocused) return colors.primary;
    return 'transparent';
  };

  const handleFocus = (e: any) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: any) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        style={[
          styles.input,
          {
            borderColor: getBorderColor(),
            color: disabled ? 'grey' : colors.white,
          },
          disabled && styles.disabled,
          inputStyle,
        ]}
        placeholderTextColor={colors.gray500}
        editable={!disabled}
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        multiline
        textAlignVertical="top"
        {...rest}
      />
      {hasError && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  input: {
    height: 105,
    borderRadius: 20,
    backgroundColor: colors.gray200,
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 17,
    lineHeight: 22,
    fontFamily: 'Onest-Regular',
    fontWeight: '400',
    borderWidth: 1,
  },
  disabled: {
    opacity: 0.6,
  },
  errorText: {
    marginTop: 4,
    fontSize: 14,
    lineHeight: 21,
    color: colors.error,
    fontFamily: 'SF Pro Display',
  },
});

export default TextArea;
