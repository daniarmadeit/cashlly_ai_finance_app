import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, typography, spacing } from '../constants';
import { Button, Input, Dropdown, Search, TextArea, Checkbox, Radio, Toggle } from '../components/ui';

export default function ComponentPreview() {
  const insets = useSafeAreaInsets();
  const [inputValue, setInputValue] = useState('');
  const [errorInput, setErrorInput] = useState('test@email');
  const [dropdownValue, setDropdownValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [textAreaValue, setTextAreaValue] = useState('');
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(true);
  const [selectedRadio, setSelectedRadio] = useState('1');
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(true);

  const dropdownOptions = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={[
        styles.content,
        { paddingTop: insets.top + 20, paddingBottom: insets.bottom + 40 },
      ]}
    >
      {/* Header */}
      <Text style={styles.header}>Component Preview</Text>
      <Text style={styles.subtitle}>Cashlly Design System</Text>

      {/* Buttons Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Buttons</Text>

        <Text style={styles.label}>Large Primary</Text>
        <Button
          title="Continue"
          onPress={() => console.log('Large Primary pressed')}
          size="large"
          variant="primary"
        />

        <Text style={styles.label}>Large Outline</Text>
        <Button
          title="Cancel"
          onPress={() => console.log('Large Outline pressed')}
          size="large"
          variant="outline"
        />

        <Text style={styles.label}>Medium Primary</Text>
        <Button
          title="Save"
          onPress={() => console.log('Medium Primary pressed')}
          size="medium"
          variant="primary"
        />

        <Text style={styles.label}>Medium Outline</Text>
        <Button
          title="Edit"
          onPress={() => console.log('Medium Outline pressed')}
          size="medium"
          variant="outline"
        />

        <Text style={styles.label}>Small Primary</Text>
        <Button
          title="Add"
          onPress={() => console.log('Small Primary pressed')}
          size="small"
          variant="primary"
        />

        <Text style={styles.label}>Small Outline</Text>
        <Button
          title="Remove"
          onPress={() => console.log('Small Outline pressed')}
          size="small"
          variant="outline"
        />

        <Text style={styles.label}>Loading State</Text>
        <Button
          title="Loading"
          onPress={() => {}}
          loading
        />

        <Text style={styles.label}>Disabled State</Text>
        <Button
          title="Disabled"
          onPress={() => {}}
          disabled
        />
      </View>

      {/* Inputs Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Inputs</Text>

        <Text style={styles.label}>Default</Text>
        <Input
          placeholder="First name here"
          value={inputValue}
          onChangeText={setInputValue}
        />

        <Text style={styles.label}>With Value (Field)</Text>
        <Input
          placeholder="Email"
          value="john@example.com"
          onChangeText={() => {}}
        />

        <Text style={styles.label}>Error State</Text>
        <Input
          placeholder="Email"
          value={errorInput}
          onChangeText={setErrorInput}
          error="Invalid email address"
        />

        <Text style={styles.label}>Disabled</Text>
        <Input
          placeholder="Disabled input"
          disabled
        />
      </View>

      {/* Dropdown Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Dropdown</Text>

        <Text style={styles.label}>Default</Text>
        <Dropdown
          placeholder="Select option"
          value={dropdownValue}
          options={dropdownOptions}
          onSelect={setDropdownValue}
        />

        <Text style={styles.label}>Disabled</Text>
        <Dropdown
          placeholder="Disabled dropdown"
          value=""
          options={dropdownOptions}
          onSelect={() => {}}
          disabled
        />
      </View>

      {/* Search Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Search</Text>

        <Text style={styles.label}>Full Width</Text>
        <Search
          size="full"
          value={searchValue}
          onChangeText={setSearchValue}
        />

        <Text style={styles.label}>Small</Text>
        <Search
          size="small"
          value={searchValue}
          onChangeText={setSearchValue}
        />
      </View>

      {/* TextArea Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Text Area</Text>

        <Text style={styles.label}>Default</Text>
        <TextArea
          placeholder="Placeholder"
          value={textAreaValue}
          onChangeText={setTextAreaValue}
        />

        <Text style={styles.label}>Error State</Text>
        <TextArea
          placeholder="Placeholder"
          value="Some text"
          onChangeText={() => {}}
          error="Hint text"
        />

        <Text style={styles.label}>Disabled</Text>
        <TextArea
          placeholder="Placeholder"
          disabled
        />
      </View>

      {/* Checkbox Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Checkbox</Text>

        <Text style={styles.label}>Unchecked</Text>
        <Checkbox
          checked={checkbox1}
          label="Label"
          onPress={setCheckbox1}
        />

        <Text style={styles.label}>Checked</Text>
        <Checkbox
          checked={checkbox2}
          label="Label"
          onPress={setCheckbox2}
        />

        <Text style={styles.label}>Disabled</Text>
        <Checkbox
          checked={false}
          label="Label"
          disabled
        />
      </View>

      {/* Radio Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Radio Button</Text>

        <Text style={styles.label}>Options</Text>
        <Radio
          selected={selectedRadio === '1'}
          label="Option 1"
          onPress={() => setSelectedRadio('1')}
        />
        <View style={{ marginTop: spacing.md }} />
        <Radio
          selected={selectedRadio === '2'}
          label="Option 2"
          onPress={() => setSelectedRadio('2')}
        />
        <View style={{ marginTop: spacing.md }} />
        <Radio
          selected={selectedRadio === '3'}
          label="Option 3"
          onPress={() => setSelectedRadio('3')}
        />

        <Text style={styles.label}>Disabled</Text>
        <Radio
          selected={false}
          label="Disabled option"
          disabled
        />
      </View>

      {/* Toggle Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Toggle / Switch</Text>

        <Text style={styles.label}>Off</Text>
        <Toggle
          value={toggle1}
          onValueChange={setToggle1}
        />

        <Text style={styles.label}>On</Text>
        <Toggle
          value={toggle2}
          onValueChange={setToggle2}
        />

        <Text style={styles.label}>Disabled</Text>
        <Toggle
          value={false}
          disabled
        />
      </View>

      {/* Typography Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Typography</Text>

        <Text style={[styles.typographyItem, typography.largeTitle]}>
          Large Title
        </Text>
        <Text style={[styles.typographyItem, typography.title1]}>
          Title 1
        </Text>
        <Text style={[styles.typographyItem, typography.title2]}>
          Title 2
        </Text>
        <Text style={[styles.typographyItem, typography.title3]}>
          Title 3
        </Text>
        <Text style={[styles.typographyItem, typography.headline]}>
          Headline
        </Text>
        <Text style={[styles.typographyItem, typography.body]}>
          Body text
        </Text>
        <Text style={[styles.typographyItem, typography.body2]}>
          Body 2 text
        </Text>
        <Text style={[styles.typographyItem, typography.callout]}>
          Callout text
        </Text>
        <Text style={[styles.typographyItem, typography.footnote]}>
          Footnote text
        </Text>
      </View>

      {/* Colors Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Colors</Text>

        <View style={styles.colorRow}>
          <View style={[styles.colorBox, { backgroundColor: colors.primary }]} />
          <Text style={styles.colorLabel}>Primary #9A84FF</Text>
        </View>
        <View style={styles.colorRow}>
          <View style={[styles.colorBox, { backgroundColor: colors.success }]} />
          <Text style={styles.colorLabel}>Success #04B155</Text>
        </View>
        <View style={styles.colorRow}>
          <View style={[styles.colorBox, { backgroundColor: colors.error }]} />
          <Text style={styles.colorLabel}>Error #C93838</Text>
        </View>
        <View style={styles.colorRow}>
          <View style={[styles.colorBox, { backgroundColor: colors.info }]} />
          <Text style={styles.colorLabel}>Info #0A8AF3</Text>
        </View>
        <View style={styles.colorRow}>
          <View style={[styles.colorBox, { backgroundColor: colors.accent }]} />
          <Text style={styles.colorLabel}>Accent #FD7B60</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray100,
  },
  content: {
    paddingHorizontal: spacing.xl,
  },
  header: {
    ...typography.largeTitle,
    color: colors.white,
    marginBottom: spacing.xs,
  },
  subtitle: {
    ...typography.body,
    color: colors.gray500,
    marginBottom: spacing['3xl'],
  },
  section: {
    marginBottom: spacing['3xl'],
  },
  sectionTitle: {
    ...typography.title2,
    color: colors.primary,
    marginBottom: spacing.lg,
  },
  label: {
    ...typography.caption2,
    color: colors.gray500,
    marginTop: spacing.lg,
    marginBottom: spacing.sm,
  },
  typographyItem: {
    color: colors.white,
    marginBottom: spacing.sm,
  },
  colorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  colorBox: {
    width: 40,
    height: 40,
    borderRadius: 8,
    marginRight: spacing.md,
  },
  colorLabel: {
    ...typography.body,
    color: colors.white,
  },
});
