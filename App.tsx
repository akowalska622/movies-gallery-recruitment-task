import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {Providers} from './src/Providers';
import {RootNavigator} from './src/router/RootNavigator';

const App = () => {
  return (
    <Providers>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Providers>
  );
};

export default App;
