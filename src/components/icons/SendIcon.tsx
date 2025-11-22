import React from 'react';
import { Image, ImageStyle, StyleProp } from 'react-native';

interface SendIconProps {
  size?: number;
  style?: StyleProp<ImageStyle>;
}

export const SendIcon: React.FC<SendIconProps> = ({ size = 24, style }) => {
  return (
    <Image
      source={require('../../../assets/images/home/icon-send.png')}
      style={[{ width: size, height: size }, style]}
      resizeMode="contain"
    />
  );
};
