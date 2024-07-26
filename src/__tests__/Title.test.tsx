import React from 'react';
import {screen} from '@testing-library/react-native';

import {Title} from '../components/Title';
import {renderWithProviders} from '../testUtils';

describe('Title component', () => {
  it('renders correctly with default styles', () => {
    renderWithProviders(<Title>Default Title</Title>);

    const title = screen.getByText('Default Title');

    expect(title).toBeTruthy();
  });

  it('applies custom color', () => {
    renderWithProviders(<Title color="red">Colored Title</Title>);

    const title = screen.getByText('Colored Title');

    expect(title.props.style).toMatchObject({color: 'red'});
  });

  it('applies custom fontSize', () => {
    renderWithProviders(<Title fontSize={24}>Large Title</Title>);

    const title = screen.getByText('Large Title');

    expect(title.props.style).toMatchObject({fontSize: 24});
  });

  it('applies custom fontFamily', () => {
    renderWithProviders(<Title fontFamily="Arial">Font Family Title</Title>);

    const title = screen.getByText('Font Family Title');

    expect(title.props.style).toMatchObject({fontFamily: 'Arial'});
  });
});
