import React from 'react';
import {Text} from 'react-native';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {RootStackParamList} from '../types';

import {APP_ROUTES} from '../routes';
import {GENRE_ID} from '../constants';
import {getGenreStyles} from '../helpers';
import {ScreenWrapper, Button} from '../components';
import {useMovies} from '../hooks';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const HomeScreen = ({navigation}: Props) => {
  const {movies, loadingState} = useMovies();

  return (
    <ScreenWrapper>
      {/* TODO add loading spinner or skeleton loading */}
      {loadingState === 'loading' && <Text>Loading...</Text>}
      {loadingState === 'ready' && (
        <>
          <Text style={getGenreStyles(GENRE_ID.ADVENTURE)}>
            {movies.adventure.map(movie => movie.title)}
          </Text>
          <Text style={getGenreStyles(GENRE_ID.DOCUMENTARY)}>
            {movies.documentary.map(movie => movie.title)}
          </Text>
          <Text style={getGenreStyles(GENRE_ID.ANIMATION)}>
            {movies.animation.map(movie => movie.title)}
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
        </>
      )}
    </ScreenWrapper>
  );
};
