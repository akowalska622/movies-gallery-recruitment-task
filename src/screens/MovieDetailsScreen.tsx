import React from 'react';
import {Image, View} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import styled from 'styled-components/native';
import {useTranslation} from 'react-i18next';

import type {RootStackParamList} from '../types';

import {BodyText, Button, ScreenWrapper, Title} from '../components';
import {useMovieDetails} from '../hooks';
import {getGenreStyles, getPosterURL} from '../helpers';

type Props = NativeStackScreenProps<RootStackParamList, 'MovieDetails'>;

const ContentWrapper = styled(View)`
  padding: 0 16px;
`;

const MovieDetailsWrapper = styled(View)`
  margin: 16px 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 8px;
`;

const MovieDetailsSection = styled(View)`
  gap: 8px;
  flex: 1;
`;

const MovieImage = styled(Image)`
  height: 260px;
  width: 160px;
`;

export const MovieDetailsScreen = ({route}: Props) => {
  const {t} = useTranslation();
  const {movieId, genreId} = route.params;
  const {movieDetails, isLoading} = useMovieDetails(movieId);
  const genreStyles = getGenreStyles(genreId);

  const belongsToCollection = !!movieDetails?.belongs_to_collection;

  return (
    <ScreenWrapper isScrollView>
      {isLoading && <Title>Loading...</Title>}
      {!isLoading && !movieDetails && <Title>Movie not found</Title>}
      {!isLoading && movieDetails && (
        <ContentWrapper>
          <Title {...genreStyles} fontSize={40}>
            {movieDetails.title}
          </Title>
          <BodyText {...genreStyles}>{movieDetails.tagline}</BodyText>
          <MovieDetailsWrapper>
            <MovieImage
              source={{uri: getPosterURL(movieDetails.poster_path)}}
            />
            <MovieDetailsSection>
              <Button {...genreStyles}>{t('addToWishlist')}</Button>
              <BodyText {...genreStyles}>
                {t('releaseDate', {date: movieDetails.release_date})}
              </BodyText>
              <BodyText {...genreStyles}>
                {t('runtime', {minutes: movieDetails.runtime})}
              </BodyText>
              <BodyText {...genreStyles}>
                {t('genres', {
                  genres: movieDetails.genres.map(({name}) => name).join(', '),
                })}
              </BodyText>
              <BodyText {...genreStyles}>
                {t('production', {
                  companies: movieDetails.production_companies
                    .map(({name}) => name)
                    .join(', '),
                })}
              </BodyText>
              {belongsToCollection && (
                <BodyText {...genreStyles}>
                  {t('collection', {
                    collection: movieDetails.belongs_to_collection?.name,
                  })}
                </BodyText>
              )}
            </MovieDetailsSection>
          </MovieDetailsWrapper>
          <BodyText {...genreStyles} fontSize={20}>
            {movieDetails.overview}
          </BodyText>
        </ContentWrapper>
      )}
    </ScreenWrapper>
  );
};
