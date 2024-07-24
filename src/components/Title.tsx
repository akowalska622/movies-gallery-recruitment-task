import {Text} from 'react-native';
import styled from 'styled-components/native';

interface TitleProps {
  color?: string;
  numberOfLines?: number;
}

export const Title = styled(Text).attrs<TitleProps>(({numberOfLines}) => ({
  numberOfLines,
}))<TitleProps>`
  color: ${({color, theme}) => color || theme.colors.text};
  font-size: ${({theme}) => theme.fontSizes.large};
  font-weight: bold;
  margin-bottom: 5px;
`;
