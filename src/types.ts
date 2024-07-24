import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {GENRE_ID} from './constants';

export type RootStackParamList = {
  Home: undefined;
  MovieDetails: {
    movieId: number;
  };
  WishList: undefined;
};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export type GenreId = (typeof GENRE_ID)[keyof typeof GENRE_ID];

export type LoadingState = 'init' | 'loading' | 'ready';

export interface MovieOverview {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieDetails extends MovieOverview {
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  } | null;
  budget: number;
  genres: {id: number; name: string}[];
  homepage: string | null;
  imdb_id: string | null;
  origin_country: string[];
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  production_countries: {iso_3166_1: string; name: string}[];
  revenue: number;
  runtime: number | null;
  spoken_languages: {english_name: string; iso_639_1: string; name: string}[];
  status: string;
  tagline: string;
}
