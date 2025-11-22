import React from 'react';
import { Image, ImageStyle, StyleProp } from 'react-native';

interface NotificationIconProps {
  size?: number;
  style?: StyleProp<ImageStyle>;
  tintColor?: string;
}

export const NotificationIcon: React.FC<NotificationIconProps> = ({
  size = 24,
  style,
  tintColor
}) => {
  return (
    <Image
      source={require('../../../assets/images/home/icon-notification.png')}
      style={[{ width: size, height: size, tintColor }, style]}
      resizeMode="contain"
    />
  );
};
