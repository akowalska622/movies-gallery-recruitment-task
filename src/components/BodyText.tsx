import {Text} from 'react-native';
import styled from 'styled-components/native';

interface BodyTextProps {
  color?: string;
}

export const BodyText = styled(Text)<BodyTextProps>`
  color: ${({color, theme}) => color || theme.colors.text};
  font-size: ${({theme}) => theme.fontSizes.small};
`;
