import React from 'react';
import {FlatList, Text, ListRenderItem} from 'react-native';

import {Card, ScreenWrapper} from '../components';
import {useWishList} from '../context';
import {getPosterURL} from '../helpers';
import {themeConfig} from '../Theme';
import {MovieDetails} from '../types';

const renderWishlistItem: ListRenderItem<MovieDetails> = ({item}) => (
  <Card
    key={item.id.toString()}
    title={item.title}
    year={item.release_date}
    backgroundImage={getPosterURL(item.poster_path)}
    tintColor={themeConfig.colors.wishlist}
    size="small"
  />
);

export const WishListScreen = () => {
  const {wishlist} = useWishList();

  return (
    <ScreenWrapper>
      {wishlist.length > 0 ? (
        <FlatList
          data={wishlist}
          keyExtractor={movie => movie.id.toString()}
          renderItem={renderWishlistItem}
          numColumns={2}
          columnWrapperStyle={{gap: 20, marginBottom: 15}}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <Text> no items </Text>
      )}
    </ScreenWrapper>
  );
};
