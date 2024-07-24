import React from 'react';
import {View, Text, Button} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import type {RootStackParamList} from '../types';
import {APP_ROUTES} from '../router/routes';

type Props = NativeStackScreenProps<RootStackParamList, 'WishList'>;

export const WishListScreen = ({navigation}: Props) => {
  return (
    <View>
      <Text>Wishlist screen</Text>
      <Button
        title="Home"
        onPress={() => navigation.navigate(APP_ROUTES.HOME)}
      />
      <Button
        title="Details"
        onPress={() =>
          navigation.navigate(APP_ROUTES.DETAILS, {movieId: '123'})
        }
      />
    </View>
  );
};
