import React from 'react';
import {screen} from '@testing-library/react-native';

import {BodyText} from '../components/BodyText';
import {renderWithProviders} from '../testUtils';

describe('BodyText component', () => {
  it('renders correctly with default styles', () => {
    renderWithProviders(<BodyText>Default BodyText</BodyText>);

    const bodyText = screen.getByText('Default BodyText');

    expect(bodyText).toBeTruthy();
  });

  it('applies custom color', () => {
    renderWithProviders(<BodyText color="blue">Colored BodyText</BodyText>);

    const bodyText = screen.getByText('Colored BodyText');

    expect(bodyText.props.style).toMatchObject({color: 'blue'});
  });

  it('applies custom fontSize', () => {
    renderWithProviders(<BodyText fontSize={18}>Large BodyText</BodyText>);

    const bodyText = screen.getByText('Large BodyText');

    expect(bodyText.props.style).toMatchObject({fontSize: 18});
  });

  it('applies custom fontFamily', () => {
    renderWithProviders(
      <BodyText fontFamily="Courier">Font Family BodyText</BodyText>,
    );

    const bodyText = screen.getByText('Font Family BodyText');

    expect(bodyText.props.style).toMatchObject({fontFamily: 'Courier'});
  });
});
