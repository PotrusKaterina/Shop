import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ARCHIVED, MAIN} from '../config/routes';
import ArchivedScreen from '../views/archived';
import MainScreen from '../views/main';

const Stack = createStackNavigator<any>();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name={ARCHIVED} component={ArchivedScreen} /> */}
      <Stack.Screen name={MAIN} component={MainScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
