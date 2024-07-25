import {ReactElement} from 'react';
import {render, RenderOptions} from '@testing-library/react-native';
import {Providers} from './Providers';

export const renderWithProviders = (
  ui: ReactElement,
  options?: RenderOptions,
) => {
  return render(ui, {wrapper: Providers, ...options});
};
