import {
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';

import {Text} from 'react-native';

import AboutContainer from '../screens/About';
import ScheduleScreen from '../screens/Schedule';
import FavesScreen from '../screens/Faves';
import SessionScreen from '../screens/Session';
import SpeakerScreen from '../screens/Speaker';
import MapScreen from '../screens/Map';

import colourStyles from '../config/styles';
import { sharedNavigationOptions } from './config';

const aboutStack = createStackNavigator(
  {
    About: AboutContainer
  },
  { 
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation),
      title: 'About',
      headerLeft: <Text onPress={() => 
        navigation.toggleDrawer()}><Ionicons name="md-menu" size={25} color="black" /></Text>
    })
  }
);

const homeStack = createStackNavigator(
  {
    Schedule: ScheduleScreen,
    Session: SessionScreen
  },
  {
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation),
      title: 'Schedule',
      headerLeft: <Text onPress={() => 
        navigation.toggleDrawer()}><Ionicons name="md-menu" size={25} color="black" /></Text>
    })
  }
);

const mapStack = createStackNavigator(
  {
    Map: MapScreen
  },
  {
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation),
      title: 'Map',
      headerLeft: <Text onPress={() => 
        navigation.toggleDrawer()}><Ionicons name="md-menu" size={25} color="black" /></Text>
    })
  }
);

export const speakerScreen = createStackNavigator(
  {
    Speaker: SpeakerScreen
  },
  {
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: 'black',
        borderBottomColor: 'black'
      },
      headerTitleStyle: {
        color: 'white'
      },
      title: 'About the Speaker',
      headerLeft: <Text onPress={() => 
        navigation.toggleDrawer()}><Ionicons name="md-menu" size={25} color="black" /></Text>
    })
  }
);

const faveStack = createStackNavigator(
  {
    Faves: FavesScreen
  },
  {
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation),
      title: 'Faves',
      headerLeft: <Text onPress={() => 
        navigation.toggleDrawer()}><Ionicons name="md-menu" size={25} color="black" /></Text>
    })
  }
);

aboutStack.navigationOptions = {
  drawerIcon: ({ tintColor }) => (
    <Ionicons name={'md-information-circle'} size={25} color={tintColor} />
  )
};
faveStack.navigationOptions = {
  drawerIcon: ({ tintColor }) => (
    <Ionicons name={'md-heart'} size={25} color={tintColor} />
  )
};
homeStack.navigationOptions = {
  drawerIcon: ({ tintColor }) => (
    <Ionicons name={'md-calendar'} size={25} color={tintColor} />
  )
};
mapStack.navigationOptions = {
  drawerIcon: ({ tintColor }) => (
    <Ionicons name={'md-map'} size={25} color={tintColor} />
  )
};

export default createDrawerNavigator(
  {
    About: aboutStack,
    Schedule: homeStack,
    Faves: faveStack,
    Map: mapStack
  }
);
