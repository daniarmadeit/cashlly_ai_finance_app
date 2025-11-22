import React from 'react';
import { Image, ImageStyle, StyleProp } from 'react-native';

interface ReceiveIconProps {
  size?: number;
  style?: StyleProp<ImageStyle>;
}

export const ReceiveIcon: React.FC<ReceiveIconProps> = ({ size = 24, style }) => {
  return (
    <Image
      source={require('../../../assets/images/home/icon-receive.png')}
      style={[{ width: size, height: size }, style]}
      resizeMode="contain"
    />
  );
};
