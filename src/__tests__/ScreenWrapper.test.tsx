import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {ScreenWrapper} from '../components/ScreenWrapper';

describe('<ScreenWrapper />', () => {
  it('renders StyledScrollView when isScrollView is true', () => {
    render(<ScreenWrapper isScrollView={true} />);

    expect(screen.getByTestId('styled-scroll-view')).toBeTruthy();
  });

  it('renders StyledView when isScrollView is false', () => {
    render(<ScreenWrapper isScrollView={false} />);

    expect(screen.getByTestId('styled-view')).toBeTruthy();
  });

  it('renders StyledView when isScrollView is not provided', () => {
    render(<ScreenWrapper />);

    expect(screen.getByTestId('styled-view')).toBeTruthy();
  });
});
