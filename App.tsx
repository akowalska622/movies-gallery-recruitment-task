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
            options={{title: 'Movies'}}
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
      </NavigationContainer>
    </Providers>
  );
};

export default App;
