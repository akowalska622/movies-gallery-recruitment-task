import Config from 'react-native-config';

export const fetchCharacters = async (page: number = 1) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?page=${page}`,
  );
  return await response.json();
};
