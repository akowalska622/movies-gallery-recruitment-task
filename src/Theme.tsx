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
  fonts: ['Lato', 'sans-serif'],
  fontSizes: {
    small: '14px',
    medium: '16px',
    large: '24px',
  },
};

type ThemeProps = {
  children: React.ReactNode;
};

export const Theme = ({children}: ThemeProps) => (
  <ThemeProvider theme={themeConfig}>{children}</ThemeProvider>
);
