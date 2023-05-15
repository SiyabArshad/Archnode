import { View, Text } from 'react-native'
import React from 'react'
import { BottomTabBarProps, BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MessagesTm from '../screens/TeamMemberScreens/MessagesTm';
import TmBidBoard from "../screens/TeamMemberScreens/BidBoardTM";
import Profile from '../screens/ProfileScreens/Profile';
import Appointments from '../screens/TeamMemberScreens/Appointments';

export default function TmBottomTab() {
  return (
    <View>
      <Text>TPBottomTab</Text>
    </View>
  )
}