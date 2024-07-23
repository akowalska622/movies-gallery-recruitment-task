import React from 'react';
import {ThemeProvider} from 'styled-components/native';

export const themeConfig = {
  // TODO configure colors
  colors: {
    white: '#fff',
    black: '#000',
    primary: '#5a3b81',
    secondary: '#5C8374',
    tertiary: '#93B1A6',
    text: '#fff2f2',
    surface: '#515151',
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
