import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Setting, FoodGrid, FoodList, Profile} from '../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const screenOptions = ({route}) => ({
  headerShown: false,
  tabBarActiveTintColor: 'white',
  tabBarInactiveTintColor: 'blue',
  tabBarActiveBackgroundColor: '#ED6263',
  tabBarInactiveBackgroundColor: 'white',
  tabBarIcon: ({focused, color, size}) => {
    let screenName = route.name;
    const iconName =
      screenName == 'FoodList'
        ? 'heart'
        : screenName == 'FoodGrid'
          ? 'star'
          : screenName == 'Settings' ? 'cogs' : 'user';
    return (
      <Icon name={iconName} size={22} color={focused ? 'white' : 'blue'} />
    );
  }
});
function UITab() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="FoodList"
        options={{tabBarLabel: 'Food'}}
        component={FoodList}
      />
      <Tab.Screen
        name="FoodGrid"
        options={{tabBarLabel: 'An Vat'}}
        component={FoodGrid}
      />
      <Tab.Screen name="Settings" component={Setting} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
export default UITab;
