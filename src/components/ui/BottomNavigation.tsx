import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, layout } from '@/constants';
import { HomeIcon, AnalystIcon, TargetIcon, UserIcon } from '@/components/icons';
import { useResponsive } from '@/hooks';

type TabName = 'Home' | 'Analytics' | 'Target' | 'Profile';

interface BottomNavigationProps {
  activeTab: TabName;
  onTabPress: (tab: TabName) => void;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({
  activeTab,
  onTabPress,
}) => {
  const { getResponsiveTypography } = useResponsive();

  // Адаптивная типографика для активного таба
  const activeLabelStyle = getResponsiveTypography('headline', {
    minScale: 0.8,
    maxScale: 1.0,
  });

  const tabs: { name: TabName; icon: React.FC<any> }[] = [
    { name: 'Home', icon: HomeIcon },
    { name: 'Analytics', icon: AnalystIcon },
    { name: 'Target', icon: TargetIcon },
    { name: 'Profile', icon: UserIcon },
  ];

  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.name;
        const Icon = tab.icon;

        return (
          <TouchableOpacity
            key={tab.name}
            style={[
              styles.tab,
              isActive && styles.activeTab,
            ]}
            onPress={() => onTabPress(tab.name)}
            activeOpacity={0.8}
          >
            <Icon size={24} />
            {isActive && (
              <Text
                style={[styles.activeLabel, activeLabelStyle]}
                numberOfLines={1}
                adjustsFontSizeToFit
                minimumFontScale={0.75}
              >
                {tab.name}
              </Text>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: layout.bottomNavHeight,
    backgroundColor: colors.gray200,
    borderRadius: 57,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  tab: {
    width: layout.bottomNavTabSize,
    height: layout.bottomNavTabSize,
    borderRadius: layout.bottomNavTabSize / 2,
    backgroundColor: colors.gray300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTab: {
    backgroundColor: colors.primary,
    flex: 1,
    maxWidth: layout.bottomNavActiveMaxWidth,
    minWidth: 100,
    paddingHorizontal: 24,
    borderRadius: 57,
    flexDirection: 'row',
    gap: 12,
    width: undefined,
  },
  activeLabel: {
    color: colors.gray100,
  },
});
