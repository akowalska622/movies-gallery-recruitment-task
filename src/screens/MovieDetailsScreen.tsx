import React from 'react';
import {Image, View} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import styled from 'styled-components/native';

import type {RootStackParamList} from '../types';

import {BodyText, Button, ScreenWrapper, Title} from '../components';
import {useMovieDetails} from '../hooks';
import {getGenreStyles, getPosterURL} from '../helpers';

type Props = NativeStackScreenProps<RootStackParamList, 'MovieDetails'>;

const ContentWrapper = styled(View)`
  padding: 0 16px;
`;

const MovieDetails = styled(View)`
  margin: 16px 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 8px;
`;

const MovieImage = styled(Image)`
  height: 260px;
  width: 160px;
`;

export const MovieDetailsScreen = ({route}: Props) => {
  const {movieId, genreId} = route.params;
  const {movieDetails, isLoading} = useMovieDetails(movieId);
  const genreStyles = getGenreStyles(genreId);

  return (
    <ScreenWrapper isScrollView>
      {isLoading && <Title>Loading...</Title>}
      {!isLoading && !movieDetails && <Title>Movie not found</Title>}
      {!isLoading && movieDetails && (
        <ContentWrapper>
          <Title {...genreStyles} fontSize={40}>
            {movieDetails?.title}
          </Title>
          <MovieDetails>
            <MovieImage
              source={{uri: getPosterURL(movieDetails?.poster_path)}}
            />
            <Button {...genreStyles}>Add to wishlist</Button>
          </MovieDetails>
          <BodyText {...genreStyles} fontSize={20}>
            {movieDetails.overview}
          </BodyText>
        </ContentWrapper>
      )}
    </ScreenWrapper>
  );
};
