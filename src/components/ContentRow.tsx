import React, {ReactNode} from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';

type Props = {
  children: ReactNode;
  justify?: 'center' | 'flex-start' | 'flex-end' | 'space-between';
  align?: 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'stretch';
  reverse?: boolean;
};

const StyledRow = styled(View)<Props>`
  flex-direction: ${({reverse}) => (reverse ? 'row-reverse' : 'row')};
  justify-content: ${({justify}) => justify || 'flex-start'};
  align-items: ${({align}) => align || 'stretch'};
  gap: 10px;
`;

export const ContentRow: React.FC<Props> = ({children, ...props}) => (
  <StyledRow {...props}>{children}</StyledRow>
);
