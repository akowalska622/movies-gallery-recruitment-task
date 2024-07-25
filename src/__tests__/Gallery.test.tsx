// Gallery.test.tsx
import React from 'react';
import {screen, waitFor} from '@testing-library/react-native';
import {Gallery} from '../components/Gallery';
import {useMovies} from '../hooks';
import {renderWithProviders} from '../testUtils';

jest.mock('../hooks', () => ({
  useMovies: jest.fn(),
}));

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

const mockUseMovies = useMovies as jest.MockedFunction<typeof useMovies>;

const mockedMoviesArray = [
  {
    adult: false,
    backdrop_path: '/fDmci71SMkfZM8RnCuXJVDPaSdE.jpg',
    genre_ids: [16, 10751, 35, 28],
    id: 519182,
    original_language: 'en',
    original_title: 'Despicable Me 4',
    overview:
      'Gru and Lucy and their girls — Margo, Edith and Agnes — welcome a new member to the Gru family, Gru Jr., who is intent on tormenting his dad. Meanwhile, Gru faces a new nemesis in Maxime Le Mal and his femme fatale girlfriend Valentina, forcing the family to go on the run.',
    popularity: 4006.678,
    poster_path: '/3w84hCFJATpiCO5g8hpdWVPBbmq.jpg',
    release_date: '2024-06-20',
    title: 'Despicable Me 4',
    video: false,
    vote_average: 7.253,
    vote_count: 373,
  },
  {
    adult: false,
    backdrop_path: '/wNAhuOZ3Zf84jCIlrcI6JhgmY5q.jpg',
    genre_ids: [28, 12, 878],
    id: 786892,
    original_language: 'en',
    original_title: 'Furiosa: A Mad Max Saga',
    overview:
      'As the world fell, young Furiosa is snatched from the Green Place of Many Mothers and falls into the hands of a great Biker Horde led by the Warlord Dementus. Sweeping through the Wasteland they come across the Citadel presided over by The Immortan Joe. While the two Tyrants war for dominance, Furiosa must survive many trials as she puts together the means to find her way home.',
    popularity: 1849.204,
    poster_path: '/iADOJ8Zymht2JPMoy3R7xceZprc.jpg',
    release_date: '2024-05-22',
    title: 'Furiosa: A Mad Max Saga',
    video: false,
    vote_average: 7.65,
    vote_count: 2262,
  },
];

const genreId = 12;

describe('Gallery component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders title correctly', () => {
    mockUseMovies.mockReturnValue({movies: [], isLoading: false});

    renderWithProviders(<Gallery genreId={genreId} title="Test Title" />);

    const title = screen.getByTestId('gallery-title');
    expect(title).toBeTruthy();
    expect(screen.getByText('Test Title')).toBeTruthy();
  });

  it('shows loading indicator when data is loading', () => {
    mockUseMovies.mockReturnValue({movies: [], isLoading: true});

    renderWithProviders(<Gallery genreId={genreId} title="Test Title" />);

    const loadingWrapper = screen.getByTestId('gallery-loading');
    expect(loadingWrapper).toBeTruthy();

    const loadingIndicator = screen.getByA11yHint('loading');
    expect(loadingIndicator).toBeTruthy();
  });

  it('renders cards when data is available', async () => {
    mockUseMovies.mockReturnValue({
      movies: mockedMoviesArray,
      isLoading: false,
    });

    renderWithProviders(<Gallery genreId={genreId} title="Test Title" />);

    await waitFor(() => {
      expect(screen.getByTestId('gallery-scroll-view')).toBeTruthy();
      mockedMoviesArray.forEach(movie => {
        expect(screen.getByText(movie.title)).toBeTruthy();
      });
    });
  });
});
