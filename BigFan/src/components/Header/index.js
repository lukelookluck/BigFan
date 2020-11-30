import React, {useContext} from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {CommonContext} from '../../../src/common/context/CommonContext';

export default function Header(props) {
  const {serverUrl, user, setUser} = useContext(CommonContext);

  const onPress = () => {
    props.setPressed(false);
    // props.setMyloading(false);
    props.setTemp(null);
    props.refreshWholeArticleList();
    props.setClick(null);
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 15,
        backgroundColor: '#259BE5',
        borderBottomWidth: 1,
        borderBottomColor: '#12689c',
        height: 56,
      }}>
      <View>
        {(props.pressed === true && (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 6.5,
            }}>
            <TouchableHighlight
              style={{padding: 3.5, borderRadius: 25}}
              onPress={onPress}
              underlayColor="#dfdfdf">
              <Icon
                name="arrow-back-circle-outline"
                style={{color: 'white'}}
                size={32.5}
              />
            </TouchableHighlight>
            <Text
              style={{
                paddingLeft: 5,
                color: 'white',
                fontWeight: '700',
                fontSize: 18,
              }}>
              {props.name}
            </Text>
          </View>
        )) || (
          <View
            style={{
              paddingLeft: 15,
              // backgroundColor: 'red',
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: '700',
                fontSize: 22.5,
                textAlignVertical: 'bottom',
              }}>
              로고
            </Text>
          </View>
        )}
      </View>
      <View
        style={{flexDirection: 'row', alignItems: 'center', marginVertical: 5}}>
        {/* <View style={{marginRight: 15}}>
          <TouchableHighlight
            style={{borderRadius: 25, padding: 5}}
            onPress={() => props.navigation.navigate('Search')}
            underlayColor="#dfdfdf">
            <Icon style={{color: 'white'}} name="search-outline" size={30} />
          </TouchableHighlight>
        </View> */}

        <View style={{}}>
          <TouchableHighlight
            style={{padding: 5}}
            onPress={() => props.navigation.navigate('MyPage')}
            underlayColor="#dfdfdf">
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Icon style={{color: 'white'}} name="happy-outline" size={30} />
              <Text>건의하기</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
}
