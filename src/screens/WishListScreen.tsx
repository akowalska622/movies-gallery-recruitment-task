import React from 'react';
import {useTranslation} from 'react-i18next';
import {FlatList, ListRenderItem} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import type {NavigationProp} from '../types';

import {Card, Title, EmptyView} from '../components';
import {useWishList} from '../context';
import {getPosterURL} from '../helpers';
import {themeConfig} from '../Theme';
import {MovieDetails} from '../types';
import {APP_ROUTES} from '../router/routes';

export const WishListScreen = () => {
  const {t} = useTranslation();
  const navigation = useNavigation<NavigationProp>();
  const {wishlist} = useWishList();

  const renderWishlistItem: ListRenderItem<MovieDetails> = ({item}) => (
    <Card
      key={item.id.toString()}
      title={item.title}
      year={item.release_date}
      backgroundImage={getPosterURL(item.poster_path)}
      tintColor={themeConfig.colors.pink}
      size="small"
      onPress={() =>
        navigation.navigate(APP_ROUTES.DETAILS, {
          movieId: item.id,
          title: item.title,
          navigationTintColor: themeConfig.colors.pink,
          navigationFontColor: themeConfig.colors.white,
        })
      }
    />
  );

  return (
    <>
      {wishlist.length > 0 ? (
        <FlatList
          data={wishlist}
          keyExtractor={movie => movie.id.toString()}
          renderItem={renderWishlistItem}
          numColumns={2}
          columnWrapperStyle={{gap: 20, marginBottom: 15}}
          contentContainerStyle={{padding: 16}}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <EmptyView>
          <Title>{t('wishlistEmpty')}</Title>
        </EmptyView>
      )}
    </>
  );
};
