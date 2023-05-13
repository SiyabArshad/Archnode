import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import * as Font from "expo-font";
import { LogBox } from 'react-native';
//screen and components import
import Loading from './src/components/Loading';
import RolesScreen from './src/screens/OnBoardingScreens/RolesScreen';
import OnBoarding from "./src/screens/OnBoardingScreens/OnBoarding"
import SignupScreen from './src/screens/authScreens/Signup';
import SigninScreen from './src/screens/authScreens/SignIn';
import ForgotPasswordScreen from './src/screens/authScreens/ForgotPassword';
import Profile from './src/screens/ProfileScreens/Profile';
import EditProfile from './src/screens/ProfileScreens/EditProfile';
import ChangePassword from './src/screens/ProfileScreens/ChangePassword';
//imports of trade partner particular
import CompanyOffers from './src/screens/TradePartnerScreens/CompanyOffers';
import OfferDetails from './src/screens/TradePartnerScreens/OfferDetails';
import BidBoard from './src/screens/TradePartnerScreens/BidBoard';
import BidDetails from './src/screens/TradePartnerScreens/BidDetails';
import PlaceBid from './src/screens/TradePartnerScreens/PlaceBid';
//end of trade partner
//other imports
export default function App() {
  LogBox.ignoreAllLogs()
  const [fontsLoaded, error] = Font.useFonts({
    'Montserrat-Black': require('./assets/fonts/Montserrat-Black.ttf'),
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-ExtraBold': require('./assets/fonts/Montserrat-ExtraBold.ttf'),
    'Montserrat-Italic': require('./assets/fonts/Montserrat-Italic.ttf'),
    'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf'),
    'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
    'Montserrat-Thin': require('./assets/fonts/Montserrat-Thin.ttf'),
  });
  if(!fontsLoaded)
  {
    return <Loading visible={true}/>
  }
  return (
    <EditProfile/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
