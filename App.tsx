import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import type {RootStackParamList} from './src/types';

import {MovieDetailsScreen, HomeScreen, WishListScreen} from './src/screens';
import {Providers} from './src/Providers';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <Providers>
      <NavigationContainer>
        <RootStack.Navigator initialRouteName="Home">
          <RootStack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Home'}}
          />
          <RootStack.Screen
            name="MovieDetails"
            component={MovieDetailsScreen}
            // TODO add movie title here
            options={{title: 'Movie Details'}}
          />
          <RootStack.Screen
            name="WishList"
            component={WishListScreen}
            options={{title: 'Wish List'}}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </Providers>
  );
};

export default App;
