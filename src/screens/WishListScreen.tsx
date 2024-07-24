import React from 'react';
import {View} from 'react-native';

import {Card} from '../components';
import {useWishList} from '../context';
import {getPosterURL} from '../helpers';
import {themeConfig} from '../Theme';

export const WishListScreen = () => {
  const {wishlist} = useWishList();

  // TODO flatlist
  return (
    <View>
      {wishlist.map(movie => (
        <Card
          key={movie.id}
          title={movie.title}
          year={movie.release_date}
          backgroundImage={getPosterURL(movie.poster_path)}
          tintColor={themeConfig.colors.wishlist}
        />
      ))}
    </View>
  );
};
