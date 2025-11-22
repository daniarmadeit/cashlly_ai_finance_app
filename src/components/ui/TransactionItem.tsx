import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageSourcePropType } from 'react-native';
import { colors, typography } from '@/constants';

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
  const isSuccess = status === 'Received';
  const amountColor = isSuccess ? colors.success : colors.error;

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.leftContainer}>
        <Image source={avatar} style={styles.avatar} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <Text style={[styles.amount, { color: amountColor }]}>{amount}</Text>
        <Text style={styles.status}>{status}</Text>
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
    ...typography.body,
    color: colors.white,
  },
  date: {
    ...typography.body,
    color: colors.gray500,
  },
  rightContainer: {
    alignItems: 'flex-end',
  },
  amount: {
    ...typography.callout,
  },
  status: {
    ...typography.callout,
    color: colors.gray500,
  },
});
