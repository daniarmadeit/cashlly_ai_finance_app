import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  FlatList,
  ViewStyle,
} from 'react-native';
import { colors } from '../../constants/colors';

interface DropdownOption {
  label: string;
  value: string;
}

interface DropdownProps {
  placeholder?: string;
  value?: string;
  options: DropdownOption[];
  onSelect: (value: string) => void;
  disabled?: boolean;
  containerStyle?: ViewStyle;
}

export const Dropdown: React.FC<DropdownProps> = ({
  placeholder = 'Select',
  value,
  options,
  onSelect,
  disabled = false,
  containerStyle,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectedOption = options.find((opt) => opt.value === value);
  const hasValue = !!selectedOption;

  const handleSelect = (optionValue: string) => {
    onSelect(optionValue);
    setIsOpen(false);
  };

  const textColor = disabled ? 'grey' : hasValue ? colors.white : colors.gray500;
  const iconColor = disabled ? 'grey' : hasValue ? colors.white : colors.gray500;

  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity
        style={[styles.dropdown, disabled && styles.disabled]}
        onPress={() => !disabled && setIsOpen(true)}
        activeOpacity={0.8}
        disabled={disabled}
      >
        <Text style={[styles.text, { color: textColor }]}>
          {selectedOption?.label || placeholder}
        </Text>
        <View style={styles.iconContainer}>
          <ChevronDown color={iconColor} />
        </View>
      </TouchableOpacity>

      <Modal
        visible={isOpen}
        transparent
        animationType="fade"
        onRequestClose={() => setIsOpen(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setIsOpen(false)}
        >
          <View style={styles.modalContent}>
            <FlatList
              data={options}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.option,
                    item.value === value && styles.optionSelected,
                  ]}
                  onPress={() => handleSelect(item.value)}
                >
                  <Text
                    style={[
                      styles.optionText,
                      item.value === value && styles.optionTextSelected,
                    ]}
                  >
                    {item.label}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const ChevronDown: React.FC<{ color: string }> = ({ color }) => (
  <View style={styles.chevron}>
    <View
      style={[
        styles.chevronLine,
        { backgroundColor: color, transform: [{ rotate: '45deg' }] },
      ]}
    />
    <View
      style={[
        styles.chevronLine,
        { backgroundColor: color, transform: [{ rotate: '-45deg' }] },
      ]}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  dropdown: {
    height: 56,
    borderRadius: 43,
    backgroundColor: colors.gray200,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  disabled: {
    opacity: 0.6,
  },
  text: {
    fontSize: 17,
    lineHeight: 22,
    fontFamily: 'Onest-Regular',
    fontWeight: '400',
    flex: 1,
  },
  iconContainer: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chevron: {
    width: 12,
    height: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chevronLine: {
    width: 8,
    height: 2,
    borderRadius: 1,
    marginHorizontal: -2,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  modalContent: {
    backgroundColor: colors.gray200,
    borderRadius: 16,
    maxHeight: 300,
    overflow: 'hidden',
  },
  option: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray300,
  },
  optionSelected: {
    backgroundColor: colors.gray300,
  },
  optionText: {
    fontSize: 17,
    lineHeight: 22,
    fontFamily: 'Onest-Regular',
    color: colors.white,
  },
  optionTextSelected: {
    color: colors.primary,
    fontFamily: 'Onest-SemiBold',
    fontWeight: '600',
  },
});

export default Dropdown;
