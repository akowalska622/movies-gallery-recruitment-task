import React from 'react';
import {Text} from 'react-native';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import type {RootStackParamList} from '../types';
import {APP_ROUTES} from '../routes';
import {GENRE_ID} from '../constants';
import {getGenreStyles} from '../helpers';
import {ScreenWrapper, Button} from '../components';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const HomeScreen = ({navigation}: Props) => {
  return (
    <ScreenWrapper>
      <Text style={getGenreStyles(GENRE_ID.ADVENTURE)}>Lato text</Text>
      <Text style={getGenreStyles(GENRE_ID.DOCUMENTARY)}>
        Dancing script text
      </Text>
      <Text style={getGenreStyles(GENRE_ID.ANIMATION)}>Playwrite text</Text>
      <Button onPress={() => navigation.navigate(APP_ROUTES.WISHLIST)}>
        Wishlist
      </Button>
      <Button
        variant="outlined"
        onPress={() =>
          navigation.navigate(APP_ROUTES.DETAILS, {movieId: '123'})
        }>
        Detail
      </Button>
      <Button
        variant="outlined"
        size="large"
        onPress={() =>
          navigation.navigate(APP_ROUTES.DETAILS, {movieId: '123'})
        }>
        Detail
      </Button>

      <Button
        variant="text"
        size="large"
        onPress={() =>
          navigation.navigate(APP_ROUTES.DETAILS, {movieId: '123'})
        }>
        Detail
      </Button>
    </ScreenWrapper>
  );
};
