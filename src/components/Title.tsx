import {Text} from 'react-native';
import styled from 'styled-components/native';

interface TitleProps {
  color?: string;
  fontSize?: number;
  fontFamily?: string;
}

export const Title = styled(Text)<TitleProps>`
  color: ${({color, theme}) => color || theme.colors.black};
  font-size: ${({fontSize, theme}) =>
    fontSize ? `${fontSize}px` : theme.fontSizes.large};
  font-family: ${({fontFamily, theme}) => fontFamily || theme.fonts[0]};
  font-weight: bold;
  margin-bottom: 5px;
`;
