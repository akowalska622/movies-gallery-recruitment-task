import React from 'react';
import {screen, fireEvent} from '@testing-library/react-native';
import {Card} from '../components/Card';
import {renderWithProviders} from '../testUtils';

describe('Card component', () => {
  it('renders correctly with default styles', () => {
    renderWithProviders(<Card title="Test Title" year="2021-01-01" />);

    const title = screen.getByTestId('card-title');
    const year = screen.getByTestId('card-year');

    expect(title).toBeTruthy();
    expect(year).toBeTruthy();
  });

  it('applies custom tintColor', () => {
    renderWithProviders(
      <Card title="Test Title" year="2021-01-01" tintColor="blue" />,
    );

    const contentWrapper = screen.getByTestId('card-content');

    expect(contentWrapper.props.style.backgroundColor).toBe('blue');
  });

  it('renders background image correctly', () => {
    const backgroundImage =
      'https://image.tmdb.org/t/p/original95prV91f4DxkBnLU43YjLbU1m3q.jpg';
    renderWithProviders(
      <Card
        title="Test Title"
        year="2021-01-01"
        backgroundImage={backgroundImage}
      />,
    );

    const image = screen.getByTestId('card-image');

    expect(image.props.source.uri).toBe(backgroundImage);
  });

  it('handles onPress event', () => {
    const onPressMock = jest.fn();
    renderWithProviders(
      <Card title="Test Title" year="2021-01-01" onPress={onPressMock} />,
    );

    const cardPressable = screen.getByTestId('card-pressable');

    fireEvent.press(cardPressable);

    expect(onPressMock).toHaveBeenCalled();
  });

  it('applies correct size for small card', () => {
    renderWithProviders(
      <Card title="Test Title" year="2021-01-01" size="small" />,
    );

    const cardWrapper = screen.getByTestId('card-wrapper');

    expect(cardWrapper.props.style.width).toBe(170);
  });

  it('applies correct size for large card', () => {
    renderWithProviders(
      <Card title="Test Title" year="2021-01-01" size="large" />,
    );

    const cardWrapper = screen.getByTestId('card-wrapper');

    expect(cardWrapper.props.style.width).toBe(200);
  });
});
