import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import type {RootStackParamList} from '../types';

import {MovieDetailsScreen, HomeScreen, WishListScreen} from '../screens';
import {HeaderRightButton} from './HeaderRightButton';
import {themeConfig} from '../Theme';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <RootStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerBackTitleVisible: false,
        headerShadowVisible: true,
      }}>
      <RootStack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Movies', headerRight: HeaderRightButton}}
      />
      <RootStack.Screen
        name="MovieDetails"
        component={MovieDetailsScreen}
        options={({route}) => ({
          title: route.params.title,
          headerStyle: {
            backgroundColor:
              route.params.navigationTintColor || themeConfig.colors.white,
          },
          headerTitleStyle: {
            color: route.params.navigationFontColor || themeConfig.colors.black,
          },
        })}
      />
      <RootStack.Screen
        name="WishList"
        component={WishListScreen}
        options={{
          title: 'Wish List',
          headerStyle: {
            backgroundColor: themeConfig.colors.pink,
          },
          headerTitleStyle: {
            color: themeConfig.colors.text,
          },
        }}
      />
    </RootStack.Navigator>
  );
};
