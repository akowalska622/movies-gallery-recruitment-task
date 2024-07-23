import React from 'react';
import {ThemeProvider} from 'styled-components/native';

export const themeConfig = {
  colors: {
    white: '#FFFDF9',
    black: '#36313D',
    federalBlue: '#0F084B',
    marianBlue: '#26408B',
    lightBlue: '#A6CFD5',
    mintGreen: '#C2E7D9',
  },
  spacing: {
    space4: '4px',
    space8: '8px',
    space16: '16px',
    space24: '24px',
    space32: '32px',
    space40: '40px',
    space48: '48px',
    space56: '56px',
  },
  fonts: ['Lato', 'sans-serif'],
  fontSizes: {
    small: '16px',
    medium: '24px',
    large: '32px',
  },
};

type ThemeProps = {
  children: React.ReactNode;
};

export const Theme = ({children}: ThemeProps) => (
  <ThemeProvider theme={themeConfig}>{children}</ThemeProvider>
);
