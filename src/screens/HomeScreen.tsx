import React from 'react';
import {Text} from 'react-native';
import {useTranslation} from 'react-i18next';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {RootStackParamList} from '../types';

import {APP_ROUTES} from '../routes';
import {GENRE_ID} from '../constants';
import {ScreenWrapper, Button, Gallery} from '../components';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const HomeScreen = ({navigation}: Props) => {
  const {t} = useTranslation();

  return (
    <ScreenWrapper isScrollView>
      <Text>{t('wishlist')}</Text>
      <Gallery genreId={GENRE_ID.ADVENTURE} />
      <Gallery genreId={GENRE_ID.ANIMATION} />
      <Gallery genreId={GENRE_ID.DOCUMENTARY} />

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
