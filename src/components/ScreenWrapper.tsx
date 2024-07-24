import React from 'react';
import {View, ScrollView} from 'react-native';
import styled from 'styled-components/native';

const StyledScrollView = styled(ScrollView).attrs(() => ({
  contentContainerStyle: {
    padding: 24,
  },
}))`
  flex: 1;
`;

const StyledView = styled(View)`
  flex: 1;
  padding: 24px;
`;

export const ScreenWrapper = ({isScrollView = false, ...props}) =>
  isScrollView ? <StyledScrollView {...props} /> : <StyledView {...props} />;
