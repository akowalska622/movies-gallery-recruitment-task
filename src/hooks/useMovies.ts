import {useEffect, useState} from 'react';

import type {MovieOverview, GenreId} from '../types';

import {fetchMoviesByGenre} from '../services/api';

export const useMovies = (genreId: GenreId) => {
  const [movies, setMovies] = useState<MovieOverview[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const res = await fetchMoviesByGenre(genreId);
        setMovies(res);
      } catch (error) {
        console.error('Failed to fetch movies by genre:', error);
      }
      setIsLoading(false);
    };

    fetchMovies();
  }, [genreId]);

  return {movies, isLoading};
};
