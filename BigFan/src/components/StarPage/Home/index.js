import React, {useContext} from 'react';
import {
  View,
  Text,
  Animated,
  TouchableHighlight,
  Dimensions,
  ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import SingleArticle from '../../SingleArticle';

import {useCollapsibleScene} from 'react-native-collapsible-tab-view';
import {CommonContext} from '../../../common/context/CommonContext';

export default function MyPage(props) {
  const articleList = props.HomeArticles.map((article, idx) => {
    return <SingleArticle key={idx} article={article} />;
  });

  const scrollPropsAndRef = useCollapsibleScene('first');

  function MyHeader() {
    return (
      <View
        style={{
          backgroundColor: '#333934',
          height: 220,
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
            <Text style={{fontSize: 30, color: '#259BE5'}}>
              {props.starName}
            </Text>
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
    );
  }

  return (
    <Animated.ScrollView
      {...scrollPropsAndRef}
      style={{
        backgroundColor: '#282d29',
      }}>
      <MyHeader />
      {articleList}
      {articleList}
      {articleList}
    </Animated.ScrollView>
  );
}
