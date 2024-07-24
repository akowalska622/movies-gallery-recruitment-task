import type {GenreId} from './types';

import {GENRE_MAP} from './constants';

export const getGenreStyles = (genreId: GenreId) => GENRE_MAP[genreId]?.styles;

export const getPosterURL = (posterPath: string) =>
  `https://image.tmdb.org/t/p/original${posterPath}`;
