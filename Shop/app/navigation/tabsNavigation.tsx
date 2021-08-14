import * as React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors, Images} from '../themes';
import {MAIN, MANAGE_ITEMS} from '../config/routes';
import MainScreen from '../views/main';
import ManageItems from '../views/manageItems';

const Tab = createBottomTabNavigator();

const tabBarIcon = (focused: boolean, Icon: React.FC<any>) => (
  <View
    style={
      focused && {
        backgroundColor: colors.green,
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
      }
    }>
    <Icon
      height={25}
      width={25}
      color={focused ? colors.white : colors.green}
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
    <Tab.Screen
      name={MANAGE_ITEMS}
      component={ManageItems}
      options={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => tabBarIcon(focused, Images.Edition),
      }}
    />
  </Tab.Navigator>
);

export default TabNavigation;
