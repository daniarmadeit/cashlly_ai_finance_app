import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageSourcePropType } from 'react-native';
import { colors, typography } from '@/constants';

interface QuickSendCardProps {
  name: string;
  avatar: ImageSourcePropType;
  onPress: () => void;
}

export const QuickSendCard: React.FC<QuickSendCardProps> = ({
  name,
  avatar,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.avatarContainer}>
        <Image source={avatar} style={styles.avatar} resizeMode="cover" />
      </View>
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 75,
    alignItems: 'center',
    gap: 8,
  },
  avatarContainer: {
    width: 75,
    aspectRatio: 88 / 91,
    borderRadius: 15,
    overflow: 'hidden',
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  name: {
    ...typography.body2,
    color: colors.white,
    textAlign: 'center',
  },
});
