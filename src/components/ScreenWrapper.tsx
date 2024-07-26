import React from 'react';
import {View, ScrollView} from 'react-native';
import styled from 'styled-components/native';

const StyledScrollView = styled(ScrollView).attrs(() => ({
  contentContainerStyle: {
    paddingVertical: 16,
  },
  testID: 'styled-scroll-view',
}))`
  flex: 1;
`;

const StyledView = styled(View).attrs(() => ({
  testID: 'styled-view',
}))`
  flex: 1;
  padding: 16px;
`;

export const ScreenWrapper = ({isScrollView = false, ...props}) =>
  isScrollView ? <StyledScrollView {...props} /> : <StyledView {...props} />;
