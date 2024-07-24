import React, {createContext, useState, ReactNode} from 'react';
import {MovieDetails} from '../types';

interface WishListContextType {
  wishlist: MovieDetails[];
  isInWishlist: (movieId: number) => boolean;
  addToWishlist: (movie: MovieDetails) => void;
  removeFromWishlist: (movieId: number) => void;
}

const emptyState: WishListContextType = {
  wishlist: [],
  isInWishlist: () => false,
  addToWishlist: () => {},
  removeFromWishlist: () => {},
};

export const WishListContext = createContext<WishListContextType>(emptyState);

export const WishListProvider = ({children}: {children: ReactNode}) => {
  const [wishlist, setWishlist] = useState<MovieDetails[]>([]);

  const addToWishlist = (movie: MovieDetails) => {
    setWishlist(prevWishlist => [...prevWishlist, movie]);
  };

  const removeFromWishlist = (movieId: number) => {
    setWishlist(prevWishlist =>
      prevWishlist.filter(movie => movie.id !== movieId),
    );
  };

  const isInWishlist = (movieId: number) => {
    return wishlist.some(movie => movie.id === movieId);
  };

  const wishListValue = {
    wishlist,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  };

  return (
    <WishListContext.Provider value={wishListValue}>
      {children}
    </WishListContext.Provider>
  );
};
