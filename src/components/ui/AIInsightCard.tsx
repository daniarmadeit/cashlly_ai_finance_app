import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { colors, typography } from '@/constants';
import { AIIcon, ArrowRightIcon } from '@/components/icons';

interface AIInsightCardProps {
  onPress: () => void;
}

export const AIInsightCard: React.FC<AIInsightCardProps> = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <ImageBackground
        source={require('../../../assets/images/home/ai-gradient.png')}
        style={styles.background}
        imageStyle={styles.backgroundImage}
      >
        <View style={styles.iconContainer}>
          <AIIcon size={28} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>AI Insights</Text>
          <Text style={styles.subtitle}>Assess How You Spend Money</Text>
        </View>
        <View style={styles.arrowContainer}>
          <ArrowRightIcon size={24} />
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 88,
    borderRadius: 20,
    overflow: 'hidden',
  },
  background: {
    flex: 1,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  backgroundImage: {
    borderRadius: 20,
  },
  iconContainer: {
    width: 56,
    height: 56,
    backgroundColor: colors.gray100,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    ...typography.headline,
    color: colors.gray100,
  },
  subtitle: {
    ...typography.body2,
    color: colors.gray100,
  },
  arrowContainer: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
