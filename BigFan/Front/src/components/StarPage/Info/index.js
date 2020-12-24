import React from 'react';
import {
  FlatList,
  ScrollView,
  View,
  Text,
  Animated,
  Image,
  TouchableHighlight,
  useWindowDimensions,
} from 'react-native';
import {useCollapsibleScene} from 'react-native-collapsible-tab-view';

export default function Info() {
  const scrollPropsAndRef = useCollapsibleScene('fifth');

  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  const tempData = [
    {id: 1, title: '이름', value: '진기주'},
    {id: 2, title: '출생', value: '1989년 1월 26일 (31세)'},
    {id: 3, title: '신체', value: '171cm | 50kg | B형 | 240mm'},
    {id: 4, title: '소속사', value: '에프엘이엔티 (FL ENT)'},
  ];

  const ProfileImage = Image.resolveAssetSource(
    require('../Album/진기주1.jpg'),
  );

  const ratio = (windowWidth / ProfileImage.width) * 0.8;

  const table = tempData.map((item, index) => (
    <View
      key={item.id}
      style={{
        flexDirection: 'row',
        width: windowWidth * 0.8,
        borderColor: '#d8d8d8',
        borderWidth: 1,
      }}>
      <Text
        style={{
          width: windowWidth * 0.2,
          textAlign: 'center',
          fontWeight: '700',
          fontSize: 15,
          paddingVertical: 10,
          backgroundColor: '#ca8400',
        }}>
        {item.title}
      </Text>
      <Text
        style={{
          paddingVertical: 10,
          fontSize: 15,
          paddingLeft: 10,
        }}>
        {item.value}
      </Text>
    </View>
  ));

  return (
    <Animated.ScrollView {...scrollPropsAndRef}>
      <View style={{alignItems: 'flex-end'}}>
        <TouchableHighlight
          underlayColor="#3b3d3b"
          onPress={() => console.log('편집 누름')}
          style={{
            borderRadius: 15,
            paddingVertical: 15,
            paddingHorizontal: 10,
            margin: 10,
          }}>
          <View style={{}}>
            <Text
              style={{
                fontSize: 15,
                textAlignVertical: 'center',
              }}>
              편집하기
            </Text>
          </View>
        </TouchableHighlight>
      </View>
      <View
        style={{
          alignItems: 'center',
          paddingBottom: 25,
        }}>
        <View style={{}}>
          <Image
            source={require('../Album/진기주1.jpg')}
            resizeMode={'contain'}
            style={{
              width: windowWidth * 0.8,
              height: ProfileImage.height * ratio,
            }}
          />
        </View>
        {table}
      </View>
    </Animated.ScrollView>
  );
}
