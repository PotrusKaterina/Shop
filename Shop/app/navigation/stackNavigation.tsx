import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ARCHIVED} from '../config/routes';
import ArchivedScreen from '../views/archived';

const Stack = createStackNavigator<any>();

const StackNavigation = () => {
  return (
    <>
      <Stack.Screen name={ARCHIVED} component={ArchivedScreen} />
    </>
  );
};

export default StackNavigation;
