import {getGenreStyles, getPosterURL} from '../helpers';

describe('getGenreStyles', () => {
  it('should return the correct styles for a adventure movies', () => {
    const genreId = 12;
    const styles = getGenreStyles(genreId);
    expect(styles).toEqual({
      color: '#5a3b81',
      fontColor: '#fff',
      fontFamily: 'Lato-Regular',
    });
  });

  it('should return the correct styles for a animation movies', () => {
    const genreId = 16;
    const styles = getGenreStyles(genreId);
    expect(styles).toEqual({
      color: '#e27d4a',
      fontColor: '#fff',
      fontFamily: 'EduHand-Regular',
    });
  });

  it('should return the correct styles for a documentary movies', () => {
    const genreId = 99;
    const styles = getGenreStyles(genreId);
    expect(styles).toEqual({
      color: '#5C8374',
      fontColor: '#fff',
      fontFamily: 'RobotoCondensed-Regular',
    });
  });
});

describe('getPosterURL', () => {
  it('should return the correct URL for a given poster path', () => {
    const posterPath = '95prV91f4DxkBnLU43YjLbU1m3q.jpg';
    const url = getPosterURL(posterPath);
    expect(url).toBe(`https://image.tmdb.org/t/p/original${posterPath}`);
  });

  it('should handle an empty poster path', () => {
    const posterPath = '';
    const url = getPosterURL(posterPath);
    expect(url).toBe('https://image.tmdb.org/t/p/original');
  });
});
