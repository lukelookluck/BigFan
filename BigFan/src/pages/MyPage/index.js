import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Header from '../../components/Header';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

export default function MyPage() {
  const Tab = createMaterialTopTabNavigator();

  function HomeScreen() {
    return (
      <ScrollView style={{}}>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Hom3123e!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Hom1231e!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Hom123e!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Hom3123e!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Hom1231e!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Hom123e!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
      </ScrollView>
    );
  }

  function SettingsScreen() {
    return (
      <ScrollView style={{}}>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>H123ome!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Hom123e!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>H123ome!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Hom123e!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>H123ome!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Hom123e!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>H123ome!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Hom123e!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
        <Text>Home!</Text>
      </ScrollView>
    );
  }

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
