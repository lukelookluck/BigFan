import React, {useState, useEffect, useContext} from 'react';
import {
  Text,
  Pressable,
  Animated,
  View,
  Alert,
  TouchableHighlight,
  FlatList,
} from 'react-native';
// import axios from 'axios';

import Icon from 'react-native-vector-icons/Ionicons';

import {useCollapsibleScene} from 'react-native-collapsible-tab-view';

// import {CommonContext} from '../../context/CommonContext';
// import AsyncStorage from '@react-native-community/async-storage';

export default function (props) {
  const scrollPropsAndRef = useCollapsibleScene('third');

  // const {serverUrl, user, setUser} = useContext(CommonContext);
  // useEffect(() => {
  //   getArticleInfo();
  // }, []);

  // if (props.rFCmt === true) {
  //   getArticleInfo();
  // }

  function getTime(myTime) {
    let theTime = null;

    const now = new Date();
    const old = new Date(myTime);
    const gap = now - old;
    const sec_gap = Math.floor(gap / 1000);
    const min_gap = Math.floor(sec_gap / 60);
    const hour_gap = Math.floor(min_gap / 60);
    const day_gap = Math.floor(hour_gap / 24);
    const mon_gap = Math.floor(day_gap / 12);

    if (mon_gap >= 1) {
      theTime = mon_gap + '월 전';
    } else {
      if (day_gap >= 1) {
        theTime = day_gap + '일 전';
      } else {
        if (hour_gap >= 1) {
          theTime = hour_gap + '시간 전';
        } else {
          if (min_gap >= 1) {
            theTime = min_gap + '분 전';
          } else {
            if (sec_gap >= 1) {
              theTime = sec_gap + '초 전';
            } else {
              theTime = '등록 중';
            }
          }
        }
      }
    }
    return theTime;
  }

  const bC = [
    {
      id: 1,
      boardname: '공지사항',
      likesCnt: 1,
      articlesCnt: 7,
      isFav: false,
    },
    {
      id: 2,
      boardname: '자유게시판',
      likesCnt: 1,
      articlesCnt: 300,
      isFav: true,
    },
    {
      id: 3,
      boardname: '질문대답',
      likesCnt: 1,
      articlesCnt: 20,
      isFav: false,
    },
    {
      id: 4,
      boardname: '회원작품',
      likesCnt: 1,
      articlesCnt: 100,
      isFav: false,
    },
    {
      id: 5,
      boardname: '친목/장터',
      likesCnt: 1,
      articlesCnt: 250,
      isFav: true,
    },
  ];

  return (
    <Animated.FlatList
      {...scrollPropsAndRef}
      // style={{borderBottomWidth: 2, borderBottomColor: '#dbdbdb'}}
      data={bC}
      keyExtractor={(item) => item.id.toString()}
      ListHeaderComponent={<View></View>}
      ListHeaderComponentStyle={{borderTopWidth: 2, borderTopColor: '#dbdbdb'}}
      renderItem={({item}) => (
        <TouchableHighlight
          key={item.id}
          style={{
            backgroundColor: '#282d29',
            paddingVertical: 20,
            paddingHorizontal: 10,
            borderBottomWidth: 2,
            borderBottomColor: '#dbdbdb',
          }}
          onPress={() => console.log(item.boardname + '게시판 누름')}
          underlayColor="#3b3d3b">
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              <Text style={{fontSize: 22.5}}>{item.boardname}</Text>
              <View
                style={{
                  flexDirection: 'row',
                  paddingTop: 10,
                  alignItems: 'center',
                }}>
                <Icon name="chatbox-ellipses-outline" size={22.5} />
                <Text style={{fontSize: 14, flex: 1, paddingHorizontal: 10}}>
                  {item.articlesCnt}
                </Text>
              </View>
            </View>
            <TouchableHighlight
              onPress={() => console.log('별 누름')}
              underlayColor="#3b3d3b"
              style={{
                borderRadius: 35,
              }}>
              <Icon
                name={item.isFav === true ? 'star' : 'star-outline'}
                style={{
                  color: item.isFav === true ? '#ffaa00' : '#d8d8d8',
                  fontSize: 22.5,
                  paddingVertical: 6,
                  paddingHorizontal: 7,
                }}
              />
            </TouchableHighlight>
          </View>
        </TouchableHighlight>
      )}
    />
  );
}
