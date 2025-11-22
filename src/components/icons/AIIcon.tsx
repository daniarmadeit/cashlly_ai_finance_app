import React from 'react';
import { Image, ImageStyle, StyleProp } from 'react-native';

interface AIIconProps {
  size?: number;
  style?: StyleProp<ImageStyle>;
}

export const AIIcon: React.FC<AIIconProps> = ({ size = 28, style }) => {
  return (
    <Image
      source={require('../../../assets/images/home/icon-ai.png')}
      style={[{ width: size, height: size }, style]}
      resizeMode="contain"
    />
  );
};
