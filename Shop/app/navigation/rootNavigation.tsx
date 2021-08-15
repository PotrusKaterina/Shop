import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from './tabsNavigation';
import {createStackNavigator} from '@react-navigation/stack';
import {SPLASH, TABS} from '../config/routes';
import StackNavigation from './stackNavigation';
import SplashScreen from '../views/splash';

const Stack = createStackNavigator<any>();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name={SPLASH}
          component={SplashScreen}
        />
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
