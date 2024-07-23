import React from 'react';
import {View, Text, Button} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import type {RootStackParamList} from '../types';
import {APP_ROUTES} from '../routes';

type Props = NativeStackScreenProps<RootStackParamList, 'MovieDetails'>;

export const MovieDetailsScreen = ({navigation}: Props) => {
  return (
    <View>
      <Text>Movie Details screen</Text>
      <Button
        title="Home"
        onPress={() => navigation.navigate(APP_ROUTES.HOME)}
      />
      <Button
        title="Wishlist"
        onPress={() => navigation.navigate(APP_ROUTES.WISHLIST)}
      />
    </View>
  );
};
