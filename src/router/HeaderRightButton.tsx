import React from 'react';
import {useNavigation} from '@react-navigation/native';

import type {NavigationProp} from '../types';

import {IconButton} from '../components';
import HeartIcon from '../assets/icons/heart-icon.svg';
import {APP_ROUTES} from './routes';

export const HeaderRightButton = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <IconButton
      icon={HeartIcon}
      onPress={() => navigation.navigate(APP_ROUTES.WISHLIST)}
    />
  );
};
