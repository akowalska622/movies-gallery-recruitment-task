import React from 'react';
import {ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components/native';

import type {GenreId, NavigationProp} from '../types';
import {Card} from './Card';
import {useMovies} from '../hooks';
import {getPosterURL, getGenreStyles} from '../helpers';
import {APP_ROUTES} from '../routes';

type Props = {
  genreId: GenreId;
};

const GalleryView = styled(ScrollView).attrs(() => ({
  contentContainerStyle: {
    columnGap: 16,
    padding: 16,
    paddingBottom: 32,
  },
}))`
  flex: 1;
`;

export const Gallery = ({genreId}: Props) => {
  const navigation = useNavigation<NavigationProp>();
  // TODO add nice loading state
  const {movies, isLoading} = useMovies(genreId);

  return (
    <GalleryView horizontal showsHorizontalScrollIndicator={false}>
      {movies.map(movie => (
        <Card
          key={movie.id}
          title={movie.title}
          year={movie.release_date}
          backgroundImage={getPosterURL(movie.poster_path)}
          tintColor={getGenreStyles(genreId).color}
          onPress={() =>
            navigation.navigate(APP_ROUTES.DETAILS, {movieId: movie.id})
          }
        />
      ))}
    </GalleryView>
  );
};
