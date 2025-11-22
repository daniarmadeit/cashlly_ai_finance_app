import React from 'react';
import { Image, ImageStyle, StyleProp } from 'react-native';

interface TargetIconProps {
  size?: number;
  style?: StyleProp<ImageStyle>;
}

export const TargetIcon: React.FC<TargetIconProps> = ({ size = 24, style }) => {
  return (
    <Image
      source={require('../../../assets/images/home/icon-target.png')}
      style={[{ width: size, height: size }, style]}
      resizeMode="contain"
    />
  );
};
