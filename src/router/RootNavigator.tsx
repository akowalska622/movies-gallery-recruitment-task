import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import type {RootStackParamList} from '../types';

import {MovieDetailsScreen, HomeScreen, WishListScreen} from '../screens';
import {HeaderRightButton} from './HeaderRightButton';

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
            backgroundColor: route.params.tintColor || 'white',
          },
          headerTitleStyle: {
            color: route.params.fontColor || 'black',
          },
        })}
      />
      <RootStack.Screen
        name="WishList"
        component={WishListScreen}
        options={{title: 'Wish List'}}
      />
    </RootStack.Navigator>
  );
};
