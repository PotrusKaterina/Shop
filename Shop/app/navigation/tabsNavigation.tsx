import * as React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors, Images} from '../themes';
import {MAIN} from '../config/routes';
import MainScreen from '../views/main';

const Tab = createBottomTabNavigator();

const tabBarIcon = (focused: boolean, Icon: React.FC<any>) => (
  <View>
    <Icon
      height={25}
      width={25}
      color={focused ? colors.green : colors.white}
    />
  </View>
);

const TabNavigation = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Tab.Screen
      name={MAIN}
      component={MainScreen}
      options={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => tabBarIcon(focused, Images.Store),
      }}
    />
  </Tab.Navigator>
);

export default TabNavigation;
