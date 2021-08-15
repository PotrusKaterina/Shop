import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from './tabsNavigation';
import {createStackNavigator} from '@react-navigation/stack';
import {TABS} from '../config/routes';
import StackNavigation from './stackNavigation';

const Stack = createStackNavigator<any>();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={TABS}
          options={{headerShown: false}}
          component={TabNavigation}
        />
        {StackNavigation()}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
