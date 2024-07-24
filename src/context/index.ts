import {useContext} from 'react';

import {WishListContext} from './WishList';

export const useWishList = () => useContext(WishListContext);
