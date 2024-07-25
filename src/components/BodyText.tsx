import {Text, Platform} from 'react-native';
import styled from 'styled-components/native';

interface BodyTextProps {
  color?: string;
  fontSize?: number;
  fontFamily?: string;
}

export const BodyText = styled(Text)<BodyTextProps>`
  color: ${({color, theme}) => color || theme.colors.black};
  font-size: ${({fontSize, theme}) =>
    fontSize
      ? `${fontSize}px`
      : Platform.OS === 'android'
      ? theme.fontSizes.small
      : theme.fontSizes.medium};
  font-family: ${({fontFamily, theme}) => fontFamily || theme.fonts[0]};
`;
