import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Button,
  View,
  Text,
  StatusBar,
} from 'react-native';

import rootReducer from './src/redux/modules';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

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
import StarPageContainer from './src/redux/containers/StarPageContainer';

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
        component={StarPageContainer}
      />
      {/* <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
  );
}

export default function App() {
  const homeArticles = [
    {
      id: 1,
      nickname: '닉네임',
      title: '제목',
      content: '내용',
      likesCnt: 1,
      commentsCnt: 0,
      starName: '스타이름',
    },
    {
      id: 2,
      nickname: '닉네임',
      title: '제목',
      content: '내용',
      likesCnt: 1,
      commentsCnt: 0,
      starName: '스타이름',
    },
    {
      id: 3,
      nickname: '닉네임',
      title: '제목',
      content: '내용',
      likesCnt: 1,
      commentsCnt: 0,
      starName: '스타이름',
    },
  ];

  const starPageHomeArticles = [
    {
      id: 1,
      nickname: '닉네임',
      title: '제목starPageHomeArticles',
      content: '내용',
      likesCnt: 1,
      commentsCnt: 0,
      starName: '스타이름',
    },
    {
      id: 2,
      nickname: '닉네임',
      title: '제목',
      content: '내용',
      likesCnt: 1,
      commentsCnt: 0,
      starName: '스타이름',
    },
    {
      id: 3,
      nickname: '닉네임',
      title: '제목',
      content: '내용',
      likesCnt: 1,
      commentsCnt: 0,
      starName: '스타이름',
    },
  ];

  const store = createStore(rootReducer);
  console.log(store.getState());

  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* {tempLoading === true &&
          ((user.token === '' && (
            <>
              <Start />
            </>
          )) || <MyStack />)} */}
        <MyStack />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({});
