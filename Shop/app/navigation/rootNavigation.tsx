import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from './tabsNavigation';

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
};

export default RootNavigation;
