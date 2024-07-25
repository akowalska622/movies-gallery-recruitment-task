import React from 'react';
import {ThemeProvider} from 'styled-components/native';

export const themeConfig = {
  colors: {
    white: '#fff',
    black: '#000',
    purple: '#5a3b81',
    orange: '#e27d4a',
    teal: '#5C8374',
    pink: '#a433a0',
    text: '#fff2f2',
    surface: '#515151',
    border: '#bcbcbc',
  },
  fonts: ['Lato', 'sans-serif'],
  fontSizes: {
    small: '16px',
    medium: '20px',
    large: '24px',
    extraLarge: '24px',
  },
};

type ThemeProps = {
  children: React.ReactNode;
};

export const Theme = ({children}: ThemeProps) => (
  <ThemeProvider theme={themeConfig}>{children}</ThemeProvider>
);
