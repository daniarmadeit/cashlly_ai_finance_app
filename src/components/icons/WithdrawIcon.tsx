import React from 'react';
import { Image, ImageStyle, StyleProp } from 'react-native';

interface WithdrawIconProps {
  size?: number;
  style?: StyleProp<ImageStyle>;
}

export const WithdrawIcon: React.FC<WithdrawIconProps> = ({ size = 24, style }) => {
  return (
    <Image
      source={require('../../../assets/images/home/icon-wallet.png')}
      style={[{ width: size, height: size }, style]}
      resizeMode="contain"
    />
  );
};
