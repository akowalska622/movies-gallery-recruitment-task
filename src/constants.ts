import {themeConfig} from './Theme';

export const GENRE_ID = {
  ADVENTURE: 12,
  ANIMATION: 16,
  DOCUMENTARY: 99,
} as const;

export const GENRE_MAP = {
  [GENRE_ID.ADVENTURE]: {
    name: 'Adventure',
    key: 'adventure',
    styles: {
      color: themeConfig.colors.primary,
      fontColor: themeConfig.colors.white,
      fontFamily: 'Lato-Regular',
    },
  },
  [GENRE_ID.ANIMATION]: {
    name: 'Animation',
    key: 'animation',
    styles: {
      color: themeConfig.colors.secondary,
      fontColor: themeConfig.colors.white,
      fontFamily: 'DancingScript-Regular',
    },
  },
  [GENRE_ID.DOCUMENTARY]: {
    name: 'Documentary',
    key: 'documentary',
    styles: {
      color: themeConfig.colors.tertiary,
      fontColor: themeConfig.colors.white,
      fontFamily: 'PlaywriteHRLijeva-Regular',
    },
  },
} as const;
