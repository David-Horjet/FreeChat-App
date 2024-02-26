import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

import ChatScreen from './ChatScreen'; // Import your screen components

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#3498db',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: '#2c3e50',
          borderTopWidth: 0, // Remove top border on Android
          elevation: 0, // Remove elevation on Android
        },
      }}
    >
      <Tab.Screen
        name="Chats"
        component={ChatScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubbles-outline" color={color} size={size} />
          ),
        }}
      />
      {/* Add more screens with their icons */}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
