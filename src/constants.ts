import {themeConfig} from './Theme';

export const GENRE_ID = {
  ADVENTURE: 12,
  ANIMATION: 16,
  DOCUMENTARY: 99,
} as const;

export const GENRE_MAP = {
  [GENRE_ID.ADVENTURE]: {
    name: 'Adventure',
    styles: {
      color: themeConfig.colors.primary,
      fontFamily: 'Lato-Regular',
    },
  },
  [GENRE_ID.ANIMATION]: {
    name: 'Animation',
    styles: {
      color: themeConfig.colors.secondary,
      fontFamily: 'DancingScript-Regular',
    },
  },
  [GENRE_ID.DOCUMENTARY]: {
    name: 'Documentary',
    styles: {
      color: themeConfig.colors.tertiary,
      fontFamily: 'PlaywriteHRLijeva-Regular',
    },
  },
} as const;
