import {useState} from 'react';

import type {LoadingState} from '../types';

export const useLoading = (initialState: LoadingState = 'init') => {
  const [loadingState, setLoadingState] = useState<LoadingState>(initialState);

  return {
    loadingState,
    setLoadingState,
  };
};
