import React from 'react';
import { Image, ImageStyle, StyleProp } from 'react-native';

interface HomeIconProps {
  size?: number;
  style?: StyleProp<ImageStyle>;
}

export const HomeIcon: React.FC<HomeIconProps> = ({ size = 24, style }) => {
  return (
    <Image
      source={require('../../../assets/images/home/icon-home.png')}
      style={[{ width: size, height: size }, style]}
      resizeMode="contain"
    />
  );
};
