import {useEffect, useState} from 'react';

import type {MovieDetails} from '../types';

import {fetchMovieById} from '../services/api';

export const useMovieDetails = (movieId: number) => {
  const [movieDetails, setMovieDetails] = useState<MovieDetails>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const res = await fetchMovieById(movieId);
        setMovieDetails(res);
      } catch (error) {
        console.error('Failed to fetch movies by genre:', error);
      }
      setIsLoading(false);
    };

    fetchMovies();
  }, [movieId]);

  return {movieDetails, isLoading};
};
