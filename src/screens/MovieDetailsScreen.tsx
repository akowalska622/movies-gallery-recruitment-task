import React from 'react';
import {Image, View, ActivityIndicator} from 'react-native';
import styled from 'styled-components/native';
import {useTranslation} from 'react-i18next';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {RootStackParamList} from '../types';

import {
  BodyText,
  Button,
  ScreenWrapper,
  Title,
  ContentRow,
} from '../components';
import {useMovieDetails} from '../hooks';
import {getGenreStyles, getPosterURL} from '../helpers';
import {useWishList} from '../context';
import {themeConfig} from '../Theme';
import {UNKNOWN_GENRE_STYLES} from '../constants';

import HeartIcon from '../assets/icons/heart-icon.svg';
import PlusIcon from '../assets/icons/plus-outline-icon.svg';

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

const DetailsCard = styled(View)`
  background-color: #e3e3e3;
  padding: 5px;
  gap: 5px;
  border-radius: 6px;
`;

const LoadingWrapper = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const MovieDetailsScreen = ({route}: Props) => {
  const {t} = useTranslation();
  const {movieId, genreId} = route.params;
  const {movieDetails, isLoading} = useMovieDetails(movieId);
  const {addToWishlist, removeFromWishlist, isInWishlist} = useWishList();
  const genreStyles = genreId ? getGenreStyles(genreId) : UNKNOWN_GENRE_STYLES;
  const isMovieInWishlist = isInWishlist(movieId);

  const belongsToCollection = !!movieDetails?.belongs_to_collection;

  if (isLoading) {
    return (
      <LoadingWrapper>
        <ActivityIndicator size="large" />
      </LoadingWrapper>
    );
  }

  return (
    <ScreenWrapper isScrollView>
      {!isLoading && !movieDetails && <Title>{t('movieNotFound')}</Title>}
      {!isLoading && movieDetails && (
        <ContentWrapper>
          <Title {...genreStyles} fontSize={40}>
            {movieDetails.title}
          </Title>

          <BodyText fontFamily={genreStyles.fontFamily}>
            {movieDetails.tagline}
          </BodyText>
          <MovieDetailsWrapper>
            <MovieImage
              source={{uri: getPosterURL(movieDetails.poster_path)}}
            />
            <MovieDetailsSection>
              {!isMovieInWishlist ? (
                <>
                  <BodyText fontFamily={genreStyles.fontFamily} fontSize={18}>
                    {t('watchLater')}
                  </BodyText>
                  <Button
                    {...genreStyles}
                    onPress={() => addToWishlist(movieDetails)}
                    icon={PlusIcon}>
                    {t('addToWishlist')}
                  </Button>
                </>
              ) : (
                <>
                  <ContentRow align="center">
                    <HeartIcon
                      height={20}
                      width={20}
                      color={themeConfig.colors.black}
                    />

                    <BodyText fontFamily={genreStyles.fontFamily} fontSize={18}>
                      {t('inWishlist')}
                    </BodyText>
                  </ContentRow>
                  <Button
                    variant="outlined"
                    {...genreStyles}
                    onPress={() => removeFromWishlist(movieDetails.id)}>
                    {t('removeFromWishlist')}
                  </Button>
                </>
              )}
              <DetailsCard>
                <BodyText fontFamily={genreStyles.fontFamily}>
                  {t('releaseDate', {date: movieDetails.release_date})}
                </BodyText>
                <BodyText fontFamily={genreStyles.fontFamily}>
                  {t('runtime', {minutes: movieDetails.runtime})}
                </BodyText>
                <BodyText fontFamily={genreStyles.fontFamily}>
                  {t('genres', {
                    genres: movieDetails.genres
                      .map(({name}) => name)
                      .join(', '),
                  })}
                </BodyText>
                {belongsToCollection && (
                  <BodyText fontFamily={genreStyles.fontFamily}>
                    {t('collection', {
                      collection: movieDetails.belongs_to_collection?.name,
                    })}
                  </BodyText>
                )}
              </DetailsCard>
            </MovieDetailsSection>
          </MovieDetailsWrapper>
          <BodyText fontFamily={genreStyles.fontFamily} fontSize={20}>
            {movieDetails.overview}
          </BodyText>
        </ContentWrapper>
      )}
    </ScreenWrapper>
  );
};
