import {Text} from 'react-native';
import styled from 'styled-components/native';

interface BodyTextProps {
  color?: string;
  fontSize?: number;
  fontFamily?: string;
}

export const BodyText = styled(Text)<BodyTextProps>`
  color: ${({color, theme}) => color || theme.colors.black};
  font-size: ${({fontSize, theme}) =>
    fontSize ? `${fontSize}px` : theme.fontSizes.small};
  font-family: ${({fontFamily, theme}) => fontFamily || theme.fonts[0]};
`;
