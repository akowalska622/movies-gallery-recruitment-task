// Title.test.tsx
import React from 'react';
import {render, screen} from '@testing-library/react-native';

import {Title} from '../components/Title';
import {Providers} from '../Providers';

describe('<Title />', () => {
  it('renders correctly with default styles', () => {
    render(<Title>Default Title</Title>, {wrapper: Providers});

    const title = screen.getByText('Default Title');

    expect(title).toBeTruthy();
    // You might also want to check the default styles if applicable
  });

  // it('applies custom color', () => {
  //   const {getByText} = render(<Title color="red">Colored Title</Title>);

  //   const title = getByText('Colored Title');

  //   // Check if the custom color is applied (You may need to adjust this part based on your testing setup)
  //   expect(title.props.style).toEqual(expect.arrayContaining([{color: 'red'}]));
  // });

  // it('applies custom fontSize', () => {
  //   const {getByText} = render(<Title fontSize={24}>Large Title</Title>);

  //   const title = getByText('Large Title');

  //   // Check if the custom fontSize is applied
  //   expect(title.props.style).toEqual(expect.arrayContaining([{fontSize: 24}]));
  // });

  // it('applies custom fontFamily', () => {
  //   const {getByText} = render(
  //     <Title fontFamily="Arial">Font Family Title</Title>,
  //   );

  //   const title = getByText('Font Family Title');

  //   // Check if the custom fontFamily is applied
  //   expect(title.props.style).toEqual(
  //     expect.arrayContaining([{fontFamily: 'Arial'}]),
  //   );
  // });

  // // Optionally, check if the default theme values are being used
  // it('uses default theme values when no props are provided', () => {
  //   const theme = {
  //     colors: {black: 'black'},
  //     fontSizes: {large: 20},
  //     fonts: ['Lato'],
  //   };
  // });
});
