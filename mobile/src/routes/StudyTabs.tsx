import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Favorites from '../pages/Favorites';
import TeacherList from '../pages/TeacherList';

const { Navigator, Screen } = createBottomTabNavigator();

const StudyTabs: React.FC = () => (
  <Navigator
    tabBarOptions={{
      style: {
        elevation: 0,
        shadowOpacity: 0,
        height: 64,
      },
      tabStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
      iconStyle: {
        flex: 0,
        width: 20,
        height: 20,
        color: '#8257E5',
      },

      labelStyle: {
        fontFamily: 'Archivo_700Bold',
        fontSize: 13,
        marginLeft: 16,
      },
      inactiveBackgroundColor: '#fafafc',
      activeBackgroundColor: '#ebebf5',
      inactiveTintColor: '#c1bccc',
      activeTintColor: '#8257E5',
    }}
  >
    <Screen
      name="TeacherList"
      component={TeacherList}
      options={{
        tabBarLabel: 'Proffys',

        tabBarIcon: ({ color, size }) => (
          <Ionicons name="ios-easel-outline" size={size} color={color} />
        ),
      }}
    />
    <Screen
      name="Favorites"
      component={Favorites}
      options={{
        tabBarLabel: 'Favoritos',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="ios-heart-outline" size={size} color={color} />
        ),
      }}
    />
  </Navigator>
);

export default StudyTabs;
