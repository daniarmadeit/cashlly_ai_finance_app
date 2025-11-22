import React from 'react';
import { Image, ImageStyle, StyleProp } from 'react-native';

interface TopUpIconProps {
  size?: number;
  style?: StyleProp<ImageStyle>;
}

export const TopUpIcon: React.FC<TopUpIconProps> = ({ size = 24, style }) => {
  return (
    <Image
      source={require('../../../assets/images/home/icon-arrow-up.png')}
      style={[{ width: size, height: size }, style]}
      resizeMode="contain"
    />
  );
};
