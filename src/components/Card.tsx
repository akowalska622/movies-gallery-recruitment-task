import React from 'react';
import {View, Image, Text} from 'react-native';
import styled from 'styled-components/native';

type Props = {
  title: string;
  backgroundImage?: string;
  tintColor?: string;
};

const CardWrapper = styled(View)<{tintColor?: string}>`
  height: 270px;
  width: 190px;
  border-radius: 6px;
  overflow: hidden;
`;

// TODO check android
const ShadowWrapper = styled(View)`
  position: relative;
  shadow-opacity: 0.2;
  shadow-radius: 12px;
  shadow-color: #000;
  shadow-offset: 0px 0px;
`;

const StyledImage = styled(Image)`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const ContentWrapper = styled(View)<{tintColor?: string}>`
  background-color: ${({tintColor, theme}) =>
    tintColor || theme.colors.primary};
  margin-top: auto;
  min-height: 80px;
  padding: 15px 10px;
  opacity: 0.9;
`;

const Title = styled(Text)`
  color: ${({theme}) => theme.colors.text};
  font-size: ${({theme}) => theme.fontSizes.large};
`;

export const Card = ({title, backgroundImage, tintColor}: Props) => {
  return (
    <ShadowWrapper>
      <CardWrapper tintColor={tintColor}>
        {backgroundImage && (
          <StyledImage source={{uri: backgroundImage}} resizeMode="cover" />
        )}
        <ContentWrapper tintColor={tintColor}>
          <Title>{title}</Title>
        </ContentWrapper>
      </CardWrapper>
    </ShadowWrapper>
  );
};
