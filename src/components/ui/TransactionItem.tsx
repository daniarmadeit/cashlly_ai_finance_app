import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageSourcePropType } from 'react-native';
import { colors } from '@/constants';
import { useResponsive } from '@/hooks';

interface TransactionItemProps {
  name: string;
  date: string;
  amount: string;
  status: 'Received' | 'Faild';
  avatar: ImageSourcePropType;
  onPress: () => void;
}

export const TransactionItem: React.FC<TransactionItemProps> = ({
  name,
  date,
  amount,
  status,
  avatar,
  onPress,
}) => {
  const { getResponsiveTypography } = useResponsive();

  const isSuccess = status === 'Received';
  const amountColor = isSuccess ? colors.success : colors.error;

  const nameStyle = getResponsiveTypography('body', {
    minScale: 0.85,
    maxScale: 1.0,
  });

  const dateStyle = getResponsiveTypography('body', {
    minScale: 0.85,
    maxScale: 1.0,
  });

  const amountStyle = getResponsiveTypography('callout', {
    minScale: 0.85,
    maxScale: 1.0,
  });

  const statusStyle = getResponsiveTypography('callout', {
    minScale: 0.85,
    maxScale: 1.0,
  });

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.leftContainer}>
        <Image source={avatar} style={styles.avatar} />
        <View style={styles.textContainer}>
          <Text style={[styles.name, nameStyle]} numberOfLines={1}>{name}</Text>
          <Text style={[styles.date, dateStyle]} numberOfLines={1}>{date}</Text>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <Text style={[styles.amount, amountStyle, { color: amountColor }]} numberOfLines={1}>
          {amount}
        </Text>
        <Text style={[styles.status, statusStyle]} numberOfLines={1}>{status}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    backgroundColor: colors.gray200,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    color: colors.white,
  },
  date: {
    color: colors.gray500,
  },
  rightContainer: {
    alignItems: 'flex-end',
  },
  amount: {
    // color applied dynamically
  },
  status: {
    color: colors.gray500,
  },
});
