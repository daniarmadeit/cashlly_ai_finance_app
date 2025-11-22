import React from 'react';
import { Image, ImageStyle, StyleProp } from 'react-native';

interface AnalystIconProps {
  size?: number;
  style?: StyleProp<ImageStyle>;
}

export const AnalystIcon: React.FC<AnalystIconProps> = ({ size = 24, style }) => {
  return (
    <Image
      source={require('../../../assets/images/home/icon-analyst.png')}
      style={[{ width: size, height: size }, style]}
      resizeMode="contain"
    />
  );
};
