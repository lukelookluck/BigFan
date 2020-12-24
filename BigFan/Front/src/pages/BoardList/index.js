import React, {Component, useState} from 'react';
import {
  Animated,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  RefreshControl,
} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Icon from 'react-native-vector-icons/Ionicons';
import SingleArticle from '../../components/SingleArticle';
import {ScrollView} from 'react-native-gesture-handler';

const HEADER_MAX_HEIGHT = 300;
const HEADER_SCROLL_DISTANCE = 250;

export default function a() {
  const [scrollY, setScrollY] = useState(new Animated.Value(0));

  // Because of content inset the scroll value will be negative on iOS so bring
  // it back to 0.

  const titleTranslate = scrollY.interpolate({
    inputRange: [0, 250],
    outputRange: [0, -250],
    extrapolate: 'clamp',
  });

  const titleTranslate2 = scrollY.interpolate({
    inputRange: [0, 125, 250],
    outputRange: [0, -125, -250],
    extrapolate: 'clamp',
  });

  const MyHeader2 = () => {
    return (
      <Animated.ScrollView
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        style={{
          // flex: 1,
          // transform: [{translateY: titleTranslate}],
          backgroundColor: '#3e3e3e',
          // justifyContent: 'flex-end',
        }}>
        {articleList}
        {articleList}
        {articleList}
        {articleList}
        {articleList}
      </Animated.ScrollView>
    );
  };
  const Tab = createMaterialTopTabNavigator();
  const articles = [
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

  const articleList = articles.map((article, idx) => {
    return <SingleArticle key={idx} article={article} />;
  });

  return (
    <View style={styles.fill}>
      <Animated.View
        style={{
          flex: 1,
          marginTop: 250,
          marginBottom: -250,
          transform: [{translateY: titleTranslate}],
        }}>
        <Tab.Navigator
          sceneContainerStyle={{}}
          tabBarPosition={'top'}
          tabBarOptions={{
            activeTintColor: '#ffaa00',
            inactiveTintColor: '#d8d8d8',
            indicatorStyle: {
              backgroundColor: '#ffaa00',
            },
            style: {
              // top: 100,
              backgroundColor: '#282d29',
              borderTopColor: '#959595',
              borderTopWidth: 1,
              // borderBottomColor: '#959595',
              // borderBottomWidth: 1,
            },
            labelStyle: {
              fontSize: 12.5,
            },
          }}
          sceneContainerStyle={{backgroundColor: '#282d29'}}>
          <Tab.Screen name="홈" component={MyHeader2} />
          <Tab.Screen name="게시판" component={MyHeader2} />
        </Tab.Navigator>
        {/* <MyHeader2 /> */}
      </Animated.View>
      <Animated.View
        style={[
          styles.bar,
          {
            transform: [{translateY: titleTranslate}],
          },
        ]}>
        <View
          style={{
            backgroundColor: '#3e3e3e',
            height: 250,
            paddingLeft: 20,
            paddingBottom: 35,
            // position: 'absolute',
            justifyContent: 'flex-end',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              marginRight: 30,
            }}>
            <View>
              <Text style={{fontSize: 30}}>'asd</Text>
              <Text>소속(그룹명 or 솔로가수, 배우)</Text>
              <Text>팬 000명</Text>
            </View>
            <TouchableHighlight
              style={{
                // height: 50,
                // width: 50,
                backgroundColor: '#fff1d6',
                borderColor: '#ffaa00',
                borderWidth: 1,
                paddingVertical: 0.75,
                paddingHorizontal: 15,
                borderRadius: 35,
              }}
              underlayColor="#ffaa00"
              onPress={() => {
                console.log('팬+ 눌러짐');
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  paddingVertical: 2.5,
                  paddingLeft: 2.5,
                }}>
                <Text
                  style={{
                    color: '#ff8000',
                    fontSize: 20,
                  }}>
                  팬
                </Text>
                <Icon name="add" style={{fontSize: 30, color: '#ff8000'}} />
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#03A9F4',
    overflow: 'hidden',
    height: HEADER_MAX_HEIGHT,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: HEADER_MAX_HEIGHT,
    resizeMode: 'cover',
  },
  bar: {
    backgroundColor: 'transparent',
    marginTop: Platform.OS === 'ios' ? 28 : 38,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  title: {
    color: 'white',
    fontSize: 18,
  },
  scrollViewContent: {
    // iOS uses content inset, which acts like padding.
    paddingTop: Platform.OS !== 'ios' ? HEADER_MAX_HEIGHT : 0,
  },
  row: {
    height: 40,
    margin: 16,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
