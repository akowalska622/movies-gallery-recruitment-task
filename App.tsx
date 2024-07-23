import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import type {RootStackParamList} from './src/types';

import {MovieDetailsScreen, HomeScreen, WishListScreen} from './src/screens';
import {Theme} from './src/Theme';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <Theme>
      <NavigationContainer>
        <RootStack.Navigator initialRouteName="Home">
          <RootStack.Screen name="Home" component={HomeScreen} />
          <RootStack.Screen
            name="MovieDetails"
            component={MovieDetailsScreen}
          />
          <RootStack.Screen name="WishList" component={WishListScreen} />
        </RootStack.Navigator>
      </NavigationContainer>
    </Theme>
  );
};

export default App;
