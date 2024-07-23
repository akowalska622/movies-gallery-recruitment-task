import {useState} from 'react';

import type {LoadingState} from '../types';

type Props = {
  initialState?: LoadingState;
};

export const useLoading = ({initialState = 'init'}: Props) => {
  const [loadingState, setLoadingState] = useState<LoadingState>(initialState);

  return {
    loadingState,
    setLoadingState,
  };
};
