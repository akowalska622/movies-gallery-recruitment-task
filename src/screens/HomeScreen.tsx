import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import type {RootStackParamList} from '../types';
import {APP_ROUTES} from '../routes';

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

export const HomeScreen = ({navigation}: Props) => {
  return (
    <View>
      <Text style={styles.lato}>Lato text</Text>
      <Text style={styles.dancingScript}>Dancing script text</Text>
      <Text style={styles.playWrite}>Playwrite text</Text>
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
    </View>
  );
};
