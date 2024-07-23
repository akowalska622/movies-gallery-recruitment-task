import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import styled from 'styled-components/native';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import type {RootStackParamList} from '../types';
import {APP_ROUTES} from '../routes';
import {GENRE_ID} from '../constants';
import {getGenreStyles} from '../helpers';
import {ScreenWrapper} from '../components';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const styles = StyleSheet.create({
  lato: {
    fontFamily: 'Lato-Regular',
    fontSize: 30,
  },
  dancingScript: {
    fontFamily: 'DancingScript-Regular',
    fontSize: 30,
  },
  playWrite: {
    fontFamily: 'PlaywriteHRLijeva-Regular',
    fontSize: 30,
  },
});

interface HeadingProps {
  isHeading?: boolean;
}

const Heading = styled.Text<HeadingProps>`
  font-size: ${({isHeading, theme: {fontSizes}}) =>
    isHeading ? fontSizes.large : fontSizes.small};
  color: ${({theme: {colors}}) => colors.lightBlue};
`;

export const HomeScreen = ({navigation}: Props) => {
  return (
    <ScreenWrapper>
      <Text style={getGenreStyles(GENRE_ID.ADVENTURE)}>Lato text</Text>
      <Text style={styles.dancingScript}>Dancing script text</Text>
      <Text style={styles.playWrite}>Playwrite text</Text>
      <Heading isHeading>Heading</Heading>
      <Button
        title="Wishlist"
        onPress={() => navigation.navigate(APP_ROUTES.WISHLIST)}
      />
      <Button
        title="Details"
        onPress={() =>
          navigation.navigate(APP_ROUTES.DETAILS, {movieId: '123'})
        }
      />
    </ScreenWrapper>
  );
};
