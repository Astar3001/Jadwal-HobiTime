import React from 'react';

import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import { createBottomTabNavigator }
from '@react-navigation/bottom-tabs';

import {
  House,
  Compass,
  Bookmark,
  User,
} from 'lucide-react-native';

import Home from '../screens/Home';

import Discover from '../screens/Discover';

import BookmarkScreen from '../screens/Bookmark';

import Profile from '../screens/Profile';

import HobbyDetail from '../screens/HobbyDetail';

import { colors } from '../../assets/theme';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

function MainApp() {

  return (
    <Tab.Navigator

      screenOptions={{

        tabBarHideOnKeyboard: true,

        tabBarActiveTintColor:
          colors.primary(),

        tabBarInactiveTintColor:
          colors.grey(),

        tabBarStyle: {
          height: 65,
          paddingBottom: 10,
          paddingTop: 8,
        },

        tabBarLabelStyle: {
          fontSize: 10,
          marginTop: 5,
        },

      }}
    >

      {/* Home */}
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,

          tabBarIcon: ({ color }) => (
            <House
              color={color}
              size={22}
            />
          ),
        }}
      />

      {/* Discover */}
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{
          headerShown: false,

          tabBarIcon: ({ color }) => (
            <Compass
              color={color}
              size={22}
            />
          ),
        }}
      />

      {/* Bookmark */}
      <Tab.Screen
        name="Bookmark"
        component={BookmarkScreen}
        options={{
          headerShown: false,

          tabBarIcon: ({ color }) => (
            <Bookmark
              color={color}
              size={22}
            />
          ),
        }}
      />

      {/* Profile */}
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,

          tabBarIcon: ({ color }) => (
            <User
              color={color}
              size={22}
            />
          ),
        }}
      />

    </Tab.Navigator>
  );
}

export default function Router() {

  return (
    <Stack.Navigator>

      {/* Main */}
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{
          headerShown: false,
        }}
      />

      {/* Detail */}
      <Stack.Screen
        name="HobbyDetail"
        component={HobbyDetail}
        options={{
          headerShown: false,

          animationEnabled: true,

          gestureEnabled: true,

          gestureDirection: 'horizontal',

          ...TransitionPresets
            .SlideFromRightIOS,
        }}
      />

    </Stack.Navigator>
  );
}