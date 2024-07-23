import React from 'react';
import {View, Text, Button} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import type {RootStackParamList} from '../types';
import {APP_ROUTES} from '../routes';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const HomeScreen = ({navigation}: Props) => {
  return (
    <View>
      <Text>Main screen</Text>
      <Button
        title="Wishlist"
        onPress={() => navigation.navigate(APP_ROUTES.WISHLIST)}
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
