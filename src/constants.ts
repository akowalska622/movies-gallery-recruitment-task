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
      color: themeConfig.colors.purple,
      fontColor: themeConfig.colors.white,
      fontFamily: 'Lato-Regular',
    },
  },
  [GENRE_ID.ANIMATION]: {
    name: 'Animation',
    key: 'animation',
    styles: {
      color: themeConfig.colors.orange,
      fontColor: themeConfig.colors.white,
      fontFamily: 'DancingScript-Regular',
    },
  },
  [GENRE_ID.DOCUMENTARY]: {
    name: 'Documentary',
    key: 'documentary',
    styles: {
      color: themeConfig.colors.teal,
      fontColor: themeConfig.colors.white,
      fontFamily: 'PlaywriteHRLijeva-Regular',
    },
  },
} as const;

export const UNKNOWN_GENRE_STYLES = {
  color: themeConfig.colors.pink,
  fontColor: themeConfig.colors.black,
  fontFamily: 'Lato-Regular',
} as const;
