import React from 'react';
import {View, Image, Text, Pressable} from 'react-native';
import styled from 'styled-components/native';

import {Title} from './Title';
import {BodyText} from './BodyText';

type Props = {
  title: string;
  year: string;
  backgroundImage?: string;
  tintColor?: string;
  onPress?: () => void;
};

const CardWrapper = styled(View)<{tintColor?: string}>`
  position: relative;
  height: 270px;
  width: 190px;
  border-radius: 6px;
  overflow: hidden;
`;

// TODO check android
const ShadowWrapper = styled(View)`
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
  min-height: 90px;
  padding: 15px 10px;
  opacity: 0.9;
`;

export const Card = ({
  title,
  year,
  backgroundImage,
  tintColor,
  onPress,
}: Props) => {
  return (
    <Pressable onPress={onPress}>
      <ShadowWrapper>
        <CardWrapper tintColor={tintColor}>
          {backgroundImage && (
            <StyledImage source={{uri: backgroundImage}} resizeMode="cover" />
          )}
          <ContentWrapper tintColor={tintColor}>
            <Title>{title}</Title>
            <BodyText>{year}</BodyText>
          </ContentWrapper>
        </CardWrapper>
      </ShadowWrapper>
    </Pressable>
  );
};
