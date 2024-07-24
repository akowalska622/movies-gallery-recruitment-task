import React from 'react';
import {View, Image, Pressable} from 'react-native';
import styled from 'styled-components/native';

import {Title} from './Title';
import {BodyText} from './BodyText';
import {themeConfig} from '../Theme';

type Props = {
  title: string;
  year: string;
  size?: 'small' | 'large';
  backgroundImage?: string;
  tintColor?: string;
  onPress?: () => void;
};

const CardWrapper = styled(View)<{
  tintColor?: string;
  size?: 'small' | 'large';
}>`
  position: relative;
  height: 270px;
  width: ${({size}) => (size === 'small' ? '170px' : '200px')};
  border-radius: 6px;
  overflow: hidden;
`;
// TODO check android
const ShadowWrapper = styled(View)`
  shadow-opacity: 0.2;
  shadow-radius: 8px;
  shadow-color: #000;
  shadow-offset: 10px 10px;
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
  height: 110px;
  padding: 15px 10px;
  opacity: 0.9;
`;

export const Card = ({
  title,
  year,
  backgroundImage,
  tintColor,
  onPress,
  size = 'small',
}: Props) => {
  return (
    <Pressable onPress={onPress}>
      <ShadowWrapper>
        <CardWrapper tintColor={tintColor} size={size}>
          {backgroundImage && (
            <StyledImage source={{uri: backgroundImage}} resizeMode="cover" />
          )}
          <ContentWrapper tintColor={tintColor}>
            <Title numberOfLines={2} color={themeConfig.colors.white}>
              {title}
            </Title>
            <BodyText color={themeConfig.colors.white}>
              {year.split('-')[0]}
            </BodyText>
          </ContentWrapper>
        </CardWrapper>
      </ShadowWrapper>
    </Pressable>
  );
};
