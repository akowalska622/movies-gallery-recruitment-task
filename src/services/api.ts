import {GENRE_ID} from '../constants';

type GenreId = (typeof GENRE_ID)[keyof typeof GENRE_ID];

export const fetchFromTMDB = async (
  endpoint: string,
  params: Record<string, string | number>,
) => {
  const url = new URL(endpoint, process.env.TMDB_BASE_URL);

  url.searchParams.append('api_key', process.env.TMDB_API_KEY ?? '');

  for (const [key, value] of Object.entries(params)) {
    url.searchParams.append(key, String(value));
  }
  const parsedUrl = url.toString();

  const response = await fetch(parsedUrl);

  if (!response.ok) {
    throw new Error('Network issues');
  }

  return await response.json();
};

// Returning only 1st page for the sake of simplicity in challenge
export const fetchMoviesByGenre = async (genreId: GenreId) => {
  const response = await fetchFromTMDB('discover/movie', {
    with_genres: genreId,
  });
  return response.results;
};
