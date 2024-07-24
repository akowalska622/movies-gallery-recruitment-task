import React from 'react';
import {Text, ScrollView} from 'react-native';
import {useTranslation} from 'react-i18next';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {RootStackParamList} from '../types';

import {APP_ROUTES} from '../routes';
import {GENRE_ID} from '../constants';
import {getGenreStyles} from '../helpers';
import {ScreenWrapper, Button} from '../components';
import {useMovies} from '../hooks';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const HomeScreen = ({navigation}: Props) => {
  const {t} = useTranslation();
  // TODO use this hook inside of gallery component
  const {movies: adventureMovies} = useMovies(GENRE_ID.ADVENTURE);
  const {movies: documentaryMovies} = useMovies(GENRE_ID.ANIMATION);
  const {movies: animationMovies} = useMovies(GENRE_ID.DOCUMENTARY);

  return (
    <ScreenWrapper isScrollView>
      {/*
      <Gallery id={id} /> fetch movies by genre id inside
      */}
      <Text>{t('wishlist')}</Text>
      <Text style={getGenreStyles(GENRE_ID.ADVENTURE)}>
        {adventureMovies.map(movie => movie.title)}
      </Text>
      <Text style={getGenreStyles(GENRE_ID.DOCUMENTARY)}>
        {documentaryMovies.map(movie => movie.title)}
      </Text>
      <Text style={getGenreStyles(GENRE_ID.ANIMATION)}>
        {animationMovies.map(movie => movie.title)}
      </Text>
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
