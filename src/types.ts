import {GENRE_ID} from './constants';

export type RootStackParamList = {
  Home: undefined;
  MovieDetails: {
    movieId: string;
  };
  WishList: undefined;
};

export type GenreId = (typeof GENRE_ID)[keyof typeof GENRE_ID];
