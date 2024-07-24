import React from 'react';
import {useTranslation} from 'react-i18next';

import {GENRE_ID} from '../constants';
import {ScreenWrapper, Gallery} from '../components';

export const HomeScreen = () => {
  const {t} = useTranslation();

  return (
    <ScreenWrapper isScrollView showsVerticalScrollIndicator={false}>
      <Gallery genreId={GENRE_ID.ADVENTURE} title={t('adventure')} />
      <Gallery genreId={GENRE_ID.ANIMATION} title={t('animation')} />
      <Gallery genreId={GENRE_ID.DOCUMENTARY} title={t('documentary')} />
    </ScreenWrapper>
  );
};
