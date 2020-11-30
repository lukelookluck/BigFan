import React from 'react';
import {View, Text, TouchableHighlight, ScrollView} from 'react-native';

export default function Home(props) {
  const starList = [
    {id: 1, name: '박효신'},
    {id: 3, name: '진기주'},
    {id: 3, name: '아이유'},
    {id: 4, name: '박재정'},
    {id: 5, name: '트웰브'},
    {id: 6, name: '김현주'},
  ];

  const stars = starList.map((star, idx) => {
    return (
      <TouchableHighlight
        key={idx}
        style={{
          backgroundColor: '#fff1d6',
          borderColor: '#ff8000',
          borderWidth: 1,

          marginRight: 10,
          height: 70,
          width: 70,
          borderRadius: 35,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          console.log(star.name + ' 눌러짐');
          props.navigation.navigate('StarPage', {
            name: star.name,
          });
        }}
        activeOpacity={0.7}
        underlayColor="#ffaa00">
        <View>
          <Text
            style={{
              color: '#ff8000',
              textAlign: 'center',
              textAlignVertical: 'center',
            }}>
            {star.name}
          </Text>
        </View>
      </TouchableHighlight>
    );
  });

  return (
    <View style={{flexDirection: 'row'}}>
      <ScrollView
        style={{
          flexDirection: 'row',
          paddingRight: 10,
          paddingLeft: 5,
          paddingVertical: 10,
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {stars}
      </ScrollView>
      <TouchableHighlight
        style={{
          justifyContent: 'center',
          // backgroundColor: '#ff8000',
        }}
        onPress={() => {
          console.log('모두보기 눌러짐');
        }}
        activeOpacity={0.7}
        underlayColor="#dfdfdf">
        <Text
          style={{
            paddingHorizontal: 7.5,
            color: '#d8d8d8',
            fontSize: 14,
            fontWeight: '700',
            textAlignVertical: 'center',
          }}>
          모두{'\n'}보기
        </Text>
      </TouchableHighlight>
    </View>
  );
}
