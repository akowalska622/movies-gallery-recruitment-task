import React from 'react';
import {View, ScrollView} from 'react-native';
import styled from 'styled-components/native';

const StyledScrollView = styled(ScrollView).attrs(() => ({
  contentContainerStyle: {
    paddingVertical: 16,
  },
}))`
  flex: 1;
`;

const StyledView = styled(View)`
  flex: 1;
  padding: 16px;
`;

export const ScreenWrapper = ({isScrollView = false, ...props}) =>
  isScrollView ? <StyledScrollView {...props} /> : <StyledView {...props} />;
