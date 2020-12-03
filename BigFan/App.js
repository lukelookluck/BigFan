import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Button,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {CommonContext} from './src/common/context/CommonContext';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';

import Home from './src/pages/Home';
import Schedule from './src/pages/Schedule';
import BoardList from './src/pages/BoardList';
import MyPage from './src/pages/MyPage';
import StarPage from './src/pages/StarPage';

const Tab = createBottomTabNavigator();

function MyTabs() {
  const myColor = '#ffaa00';
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === '홈') {
            return (
              <Icon
                name={focused ? 'home' : 'home-outline'}
                size={size}
                color={color}
                style={{
                  borderBottomWidth: focused ? 1 : 0,
                  borderBottomColor: myColor,
                }}
              />
            );
          } else if (route.name === '검색') {
            return (
              <Icon
                name={focused ? 'search' : 'search-outline'}
                size={size + 5}
                color={color}
                style={{
                  borderBottomWidth: focused ? 1 : 0,
                  borderBottomColor: myColor,
                }}
              />
            );
          } else if (route.name === '연예인') {
            return (
              <Icon
                name={focused ? 'star' : 'star-outline'}
                size={size}
                color={color}
                style={{
                  borderBottomWidth: focused ? 1 : 0,
                  borderBottomColor: myColor,
                }}
              />
            );
          } else if (route.name === '마이페이지') {
            return (
              <Icon
                name={focused ? 'person-circle' : 'person-circle-outline'}
                size={size + 5}
                color={color}
                style={{
                  borderBottomWidth: focused ? 1 : 0,
                  borderBottomColor: myColor,
                }}
              />
            );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: myColor,
        inactiveTintColor: '#d8d8d8',
        style: {
          height: 60,
          paddingBottom: 5,
          backgroundColor: '#282d29',
          borderTopColor: '#959595',
          borderTopWidth: 1,
        },
        labelStyle: {
          fontSize: 12.5,
          // margin: 10,
          // padding: 10,
        },
      }}
      sceneContainerStyle={{backgroundColor: '#282d29'}}>
      <Tab.Screen name="홈" component={Home} />
      <Tab.Screen name="검색" component={Schedule} />
      <Tab.Screen name="연예인" component={BoardList} />
      <Tab.Screen name="마이페이지" component={MyPage} />
    </Tab.Navigator>
  );
}

const Tab3 = createMaterialTopTabNavigator();

function Temp2() {
  return (
    <Tab3.Navigator>
      <Tab3.Screen name="Home" component={FU} />
      <Tab3.Screen name="Settings" component={FU2} />
    </Tab3.Navigator>
  );
}

function FU() {
  return (
    <ScrollView>
      <View style={{padding: 100}}>
        <Text>asdas</Text>
      </View>
      <View style={{padding: 100}}>
        <Text>asdas</Text>
      </View>
      <View style={{padding: 100}}>
        <Text>asd222as</Text>
      </View>
      <View style={{padding: 100}}>
        <Text>asd33as</Text>
      </View>
      <View style={{padding: 100}}>
        <Text>as44das</Text>
      </View>
    </ScrollView>
  );
}
function FU2() {
  return (
    <ScrollView>
      <View style={{padding: 100}}>
        <Text>asdas</Text>
      </View>
      <View style={{padding: 100}}>
        <Text>asdas</Text>
      </View>
      <View style={{padding: 100}}>
        <Text>asdas3333</Text>
      </View>
      <View style={{padding: 100}}>
        <Text>asd444as</Text>
      </View>
      <View style={{padding: 100}}>
        <Text>asd55as</Text>
      </View>
    </ScrollView>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {backgroundColor: '#282d29'},
      }}>
      <Stack.Screen
        name="BottomTabs"
        options={{headerShown: false}}
        component={MyTabs}
      />
      <Stack.Screen name="MyPage" component={MyPage} />
      <Stack.Screen
        name="StarPage"
        options={({route}) => ({
          title: route.params.name,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerShown: true,
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#282d29',
            borderBottomColor: '#959595',
            borderBottomWidth: 1,
          },
        })}
        component={StarPage}
      />
      {/* <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <CommonContext.Provider value={{}}>
      <NavigationContainer>
        {/* {tempLoading === true &&
          ((user.token === '' && (
            <>
              <Start />
            </>
          )) || <MyStack />)} */}
        <MyStack />
      </NavigationContainer>
    </CommonContext.Provider>
  );
}

const styles = StyleSheet.create({});
