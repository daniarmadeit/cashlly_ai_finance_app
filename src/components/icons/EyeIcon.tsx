import React from 'react';
import { Image, ImageStyle, StyleProp } from 'react-native';

interface EyeIconProps {
  size?: number;
  style?: StyleProp<ImageStyle>;
}

export const EyeIcon: React.FC<EyeIconProps> = ({ size = 24, style }) => {
  return (
    <Image
      source={require('../../../assets/images/home/icon-eye.png')}
      style={[{ width: size, height: size }, style]}
      resizeMode="contain"
    />
  );
};
