import React from 'react';
import {ScrollView, View, ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components/native';

import type {GenreId, NavigationProp} from '../types';
import {Card} from './Card';
import {Title} from './Title';
import {useMovies} from '../hooks';
import {getPosterURL, getGenreStyles} from '../helpers';
import {APP_ROUTES} from '../router/routes';
import {themeConfig} from '../Theme';

type Props = {
  genreId: GenreId;
  title: string;
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

const TitleWrapper = styled(View)`
  margin-left: 16px;
`;

const LoadingWrapper = styled(View)`
  height: 150px;
  align-items: center;
  justify-content: center;
`;

export const Gallery = ({genreId, title}: Props) => {
  const navigation = useNavigation<NavigationProp>();
  const {movies, isLoading} = useMovies(genreId);

  return (
    <>
      <TitleWrapper>
        <Title color={themeConfig.colors.black}>{title}</Title>
      </TitleWrapper>
      {isLoading ? (
        <LoadingWrapper>
          <ActivityIndicator size="large" />
        </LoadingWrapper>
      ) : (
        <GalleryView horizontal showsHorizontalScrollIndicator={false}>
          {movies.map(movie => (
            <Card
              key={movie.id}
              title={movie.title}
              year={movie.release_date}
              backgroundImage={getPosterURL(movie.poster_path)}
              tintColor={getGenreStyles(genreId).color}
              size="large"
              onPress={() =>
                navigation.navigate(APP_ROUTES.DETAILS, {
                  movieId: movie.id,
                  title: movie.title,
                  genreId: genreId,
                  navigationTintColor: getGenreStyles(genreId).color,
                  navigationFontColor: getGenreStyles(genreId).fontColor,
                })
              }
            />
          ))}
        </GalleryView>
      )}
    </>
  );
};
