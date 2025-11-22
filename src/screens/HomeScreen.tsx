import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, typography, spacing, layout } from '@/constants';
import { useResponsive } from '@/hooks/useResponsive';
import {
  QuickActionButton,
  QuickSendCard,
  AIInsightCard,
  TransactionItem,
  BottomNavigation,
} from '@/components/ui';
import {
  TopUpIcon,
  SendIcon,
  ReceiveIcon,
  WithdrawIcon,
  EyeIcon,
  NotificationIcon,
} from '@/components/icons';

export const HomeScreen: React.FC = () => {
  const [balanceVisible, setBalanceVisible] = useState(true);
  const [activeTab, setActiveTab] = useState<'Home' | 'Analytics' | 'Target' | 'Profile'>('Home');
  const { quickActionWidth, quickActionHeight } = useResponsive();

  const quickSendUsers = [
    { name: 'Irma', avatar: require('../../assets/images/home/avatar-irma.png') },
    { name: 'Lily', avatar: require('../../assets/images/home/avatar-lily.png') },
    { name: 'Claire', avatar: require('../../assets/images/home/avatar-claire.png') },
    { name: 'Judith', avatar: require('../../assets/images/home/avatar-judith.png') },
    { name: 'Jenny', avatar: require('../../assets/images/home/avatar-jenny.png') },
  ];

  const transactions = [
    {
      name: 'Jenny',
      date: '2025-1-25',
      amount: '+150.25 USD',
      status: 'Received' as const,
      avatar: require('../../assets/images/home/transaction-jenny.png'),
    },
    {
      name: 'Esther',
      date: '2025-2-12',
      amount: '+150.25 USD',
      status: 'Faild' as const,
      avatar: require('../../assets/images/home/transaction-esther.png'),
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header with gradient */}
        <LinearGradient
          colors={['#9a84ff', '#b09bf2', '#5c4f99']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          locations={[0, 0.3475, 1]}
          style={styles.header}
        >
          {/* Status Bar Area */}
          <View style={styles.statusBarArea} />

          {/* Profile Section */}
          <View style={styles.profileSection}>
            <View style={styles.profileInfo}>
              <Image
                source={require('../../assets/images/home/profile.png')}
                style={styles.profileAvatar}
              />
              <View style={styles.profileText}>
                <Text style={styles.profileName}>Hello, Liza</Text>
                <Text style={styles.profileGreeting}>Good Morning!</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.notificationButton} activeOpacity={0.8}>
              <NotificationIcon size={24} tintColor={colors.gray100} />
            </TouchableOpacity>
          </View>

          {/* Balance Section */}
          <View style={styles.balanceSection}>
            <Text style={styles.balanceLabel}>Total Balance</Text>
            <View style={styles.balanceRow}>
              <Text style={styles.balanceAmount}>
                {balanceVisible ? '$4,523.90' : '****'}
              </Text>
              <TouchableOpacity
                onPress={() => setBalanceVisible(!balanceVisible)}
                activeOpacity={0.8}
              >
                <EyeIcon size={24} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Quick Actions */}
          <View style={styles.quickActions}>
            <QuickActionButton
              icon={<TopUpIcon size={24} />}
              label="Top Up"
              onPress={() => console.log('Top Up')}
              width={quickActionWidth}
              height={quickActionHeight}
            />
            <QuickActionButton
              icon={<SendIcon size={24} />}
              label="Send"
              onPress={() => console.log('Send')}
              width={quickActionWidth}
              height={quickActionHeight}
            />
            <QuickActionButton
              icon={<ReceiveIcon size={24} />}
              label="Request"
              onPress={() => console.log('Request')}
              width={quickActionWidth}
              height={quickActionHeight}
            />
            <QuickActionButton
              icon={<WithdrawIcon size={24} />}
              label="Withdraw"
              onPress={() => console.log('Withdraw')}
              width={quickActionWidth}
              height={quickActionHeight}
            />
          </View>
        </LinearGradient>

        {/* Quick Send Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Quick Send</Text>
            <TouchableOpacity activeOpacity={0.8}>
              <Text style={styles.viewAllText}>View all</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.quickSendList}
            style={styles.quickSendScroll}
          >
            {quickSendUsers.map((user, index) => (
              <QuickSendCard
                key={index}
                name={user.name}
                avatar={user.avatar}
                onPress={() => console.log(`Send to ${user.name}`)}
              />
            ))}
          </ScrollView>
        </View>

        {/* AI Insights */}
        <View style={styles.section}>
          <AIInsightCard onPress={() => console.log('AI Insights')} />
        </View>

        {/* Recent Transactions */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Transaction</Text>
            <TouchableOpacity activeOpacity={0.8}>
              <Text style={styles.viewAllText}>View all</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.transactionsList}>
            {transactions.map((transaction, index) => (
              <TransactionItem
                key={index}
                name={transaction.name}
                date={transaction.date}
                amount={transaction.amount}
                status={transaction.status}
                avatar={transaction.avatar}
                onPress={() => console.log(`Transaction ${transaction.name}`)}
              />
            ))}
          </View>
        </View>

        {/* Bottom spacing for navigation */}
        <View style={styles.bottomSpacer} />
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavContainer}>
        <BottomNavigation
          activeTab={activeTab}
          onTabPress={(tab) => setActiveTab(tab)}
        />
      </View>

      {/* Home Indicator */}
      <View style={styles.homeIndicator} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray100,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 140,
  },
  header: {
    paddingHorizontal: layout.screenPadding,
    paddingBottom: spacing.xl,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  statusBarArea: {
    height: 47,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  profileAvatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  profileText: {
    gap: 0,
  },
  profileName: {
    ...typography.title3,
    color: colors.white,
  },
  profileGreeting: {
    ...typography.body2,
    color: colors.white,
  },
  notificationButton: {
    width: 40,
    height: 40,
    backgroundColor: colors.white,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  balanceSection: {
    gap: 6,
    marginBottom: 22,
  },
  balanceLabel: {
    ...typography.headline,
    color: colors.white,
  },
  balanceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 23,
  },
  balanceAmount: {
    ...typography.largeTitle,
    color: colors.white,
  },
  quickActions: {
    flexDirection: 'row',
    gap: layout.quickActionGap,
  },
  section: {
    paddingHorizontal: layout.screenPadding,
    marginTop: 23,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  sectionTitle: {
    ...typography.headline,
    color: colors.white,
  },
  viewAllText: {
    ...typography.body,
    color: colors.primary,
  },
  quickSendScroll: {
    width: '100%',
  },
  quickSendList: {
    gap: 12,
    paddingRight: layout.screenPadding,
  },
  transactionsList: {
    gap: 20,
  },
  bottomSpacer: {
    height: 40,
  },
  bottomNavContainer: {
    position: 'absolute',
    bottom: 40,
    left: layout.screenPadding,
    right: layout.screenPadding,
  },
  homeIndicator: {
    position: 'absolute',
    bottom: 8,
    left: '50%',
    marginLeft: -67,
    width: 134,
    height: 5,
    backgroundColor: colors.white,
    borderRadius: 100,
  },
});
