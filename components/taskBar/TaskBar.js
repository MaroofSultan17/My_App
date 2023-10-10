import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './Home';
import Inbox from './Inbox';
import History from './History';
import Help from './Help';

const Tab = createBottomTabNavigator();

export default function TaskBar({navigator}) {
  return (
    <Tab.Navigator
      screenOptions={({ route}) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'Inbox') {
            iconName = focused ? 'reader' : 'reader-outline';
          }else if (route.name === 'History') {
            iconName = focused ? 'receipt' : 'receipt-outline';
          }else if (route.name === 'Help') {
            iconName = focused ? 'help' : 'help-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={30} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        
      })}
    >
      <Tab.Screen name="Inbox" component={Inbox} />
      <Tab.Screen name="History" component={History} />
      <Tab.Screen name="Home" component={Home}  />
      <Tab.Screen name="Help" component={Help} />
    </Tab.Navigator>
  );
}