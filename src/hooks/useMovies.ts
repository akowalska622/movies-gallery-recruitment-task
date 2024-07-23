import {useEffect, useState} from 'react';

import type {MoviesCollection} from './../types';

import {fetchMoviesByGenre} from './../services/api';
import {useLoading} from './useLoading';
import {GENRE_ID, GENRE_MAP} from '../constants';

export const useMovies = () => {
  const [movies, setMovies] = useState<MoviesCollection>({
    [GENRE_MAP[GENRE_ID.ADVENTURE].key]: [],
    [GENRE_MAP[GENRE_ID.ANIMATION].key]: [],
    [GENRE_MAP[GENRE_ID.DOCUMENTARY].key]: [],
  });
  const {loadingState, setLoadingState} = useLoading();

  useEffect(() => {
    const fetchMovies = async () => {
      setLoadingState('loading');
      try {
        // keep fetching movies separated, so they don't all fail if one fails
        const adventureMovies = await fetchMoviesByGenre(GENRE_ID.ADVENTURE);
        setMovies(prevMovies => ({
          ...prevMovies,
          [GENRE_MAP[GENRE_ID.ADVENTURE].key]: adventureMovies,
        }));

        const animationMovies = await fetchMoviesByGenre(GENRE_ID.ANIMATION);
        setMovies(prevMovies => ({
          ...prevMovies,
          [GENRE_MAP[GENRE_ID.ANIMATION].key]: animationMovies,
        }));

        const documentaryMovies = await fetchMoviesByGenre(
          GENRE_ID.DOCUMENTARY,
        );
        setMovies(prevMovies => ({
          ...prevMovies,
          [GENRE_MAP[GENRE_ID.DOCUMENTARY].key]: documentaryMovies,
        }));
      } catch (error) {
        console.error('Failed to fetch movies by genre:', error);
      }
      setLoadingState('ready');
    };

    fetchMovies();
  }, [setLoadingState]);

  return {movies, loadingState};
};
