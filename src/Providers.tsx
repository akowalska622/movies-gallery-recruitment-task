import React, {ReactNode} from 'react';
import {I18nextProvider} from 'react-i18next';

import i18n from './lang/i18n';
import {Theme} from './Theme';

type Props = {
  children: ReactNode;
};

export const Providers = ({children}: Props) => (
  <I18nextProvider i18n={i18n} defaultNS="translation">
    <Theme>{children}</Theme>
  </I18nextProvider>
);
