import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  ViewStyle,
  TextStyle,
  TextInputProps,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../constants/colors';

type SearchSize = 'full' | 'small';

interface SearchProps extends Omit<TextInputProps, 'style'> {
  size?: SearchSize;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
}

export const Search: React.FC<SearchProps> = ({
  size = 'full',
  containerStyle,
  inputStyle,
  placeholder = 'Search...',
  ...rest
}) => {
  const borderRadius = size === 'full' ? 37 : 38;

  return (
    <View style={[styles.container, { borderRadius }, containerStyle]}>
      <Ionicons name="search-outline" size={24} color={colors.white} style={styles.icon} />
      <TextInput
        style={[styles.input, inputStyle]}
        placeholder={placeholder}
        placeholderTextColor={colors.gray500}
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 56,
    width: '100%',
    backgroundColor: colors.gray200,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  icon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 17,
    lineHeight: 22,
    color: colors.white,
    fontFamily: 'Onest-Regular',
    fontWeight: '400',
  },
});

export default Search;
