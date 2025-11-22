import React from 'react';
import { Image, ImageStyle, StyleProp } from 'react-native';

interface ArrowRightIconProps {
  size?: number;
  style?: StyleProp<ImageStyle>;
}

export const ArrowRightIcon: React.FC<ArrowRightIconProps> = ({ size = 24, style }) => {
  return (
    <Image
      source={require('../../../assets/images/home/icon-arrow-right.png')}
      style={[{ width: size, height: size }, style]}
      resizeMode="contain"
    />
  );
};
