import React, {ReactNode} from 'react';
import {I18nextProvider} from 'react-i18next';

import i18n from './lang/i18n';
import {Theme} from './Theme';
import {WishListProvider} from './context/WishList';

type Props = {
  children: ReactNode;
};

export const Providers = ({children}: Props) => (
  <I18nextProvider i18n={i18n} defaultNS="translation">
    <Theme>
      <WishListProvider>{children}</WishListProvider>
    </Theme>
  </I18nextProvider>
);
