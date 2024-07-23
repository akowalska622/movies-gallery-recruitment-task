import styled from 'styled-components/native';

export const ScreenWrapper = styled.View`
  flex: 1;
  padding: ${({theme: {spacing}}) => spacing.space24};
`;
