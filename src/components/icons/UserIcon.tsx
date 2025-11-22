import React from 'react';
import { Image, ImageStyle, StyleProp } from 'react-native';

interface UserIconProps {
  size?: number;
  style?: StyleProp<ImageStyle>;
}

export const UserIcon: React.FC<UserIconProps> = ({ size = 24, style }) => {
  return (
    <Image
      source={require('../../../assets/images/home/icon-user.png')}
      style={[{ width: size, height: size }, style]}
      resizeMode="contain"
    />
  );
};
