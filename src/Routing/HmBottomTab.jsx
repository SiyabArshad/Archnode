import { View, Text } from 'react-native'
import React from 'react'
import { BottomTabBarProps, BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Projects from '../screens/HomeOwnerScreens/Projects';
import MessageOwner from '../screens/HomeOwnerScreens/MessageOwner';
import SharePhoto from '../screens/HomeOwnerScreens/SharePhoto';
import Profile from '../screens/ProfileScreens/Profile';

export default function HmBottomTab() {
  return (
    <View>
      <Text>HmBottomTab</Text>
    </View>
  )
}