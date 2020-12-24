import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  Animated,
  TouchableHighlight,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import SingleArticle from '../../../SingleArticle';
import SayingList from '../SayingList';

import Modal from 'react-native-modal';

import {useCollapsibleScene} from 'react-native-collapsible-tab-view';

export default function MyPage(props) {
  const scrollPropsAndRef = useCollapsibleScene('second');

  // 댓글작성폼 관련
  const [modalVisible, setModalVisible] = useState(false);
  const [textInput2, setTextInput2] = useState(null);
  const textInput = useRef(null);

  return (
    <Animated.FlatList
      {...scrollPropsAndRef}
      keyboardShouldPersistTaps={'always'}
      stickyHeaderIndices={[1]}
      style={{
        backgroundColor: '#333934',
        marginTop: 50,
      }}
      ListHeaderComponent={
        <View>
          <View
            style={{
              paddingHorizontal: 15,
              paddingTop: 30,
              paddingBottom: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: 25,
                  color: '#259BE5',
                  textAlignVertical: 'bottom',
                }}>
                {props.starName}
              </Text>
              <Text style={{fontSize: 18, textAlignVertical: 'bottom'}}>
                에게 하고픈 말!
              </Text>
            </View>
          </View>
          <TouchableHighlight
            style={{backgroundColor: '#333934'}}
            onPress={() => {
              setModalVisible(true);
              setTimeout(() => {
                textInput.current.focus();
              }, 500);
            }}
            underlayColor="#3b3d3b">
            <View
              style={{
                paddingVertical: 20,
                paddingHorizontal: 20,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Icon
                name="chatbubbles-outline"
                style={{
                  color: '#259BE5',
                  fontSize: 35,
                  marginRight: 10,
                  // backgroundColor: '#259BE5',
                  // borderRadius: 25,
                }}
              />
              <Text style={{color: '#9f9f9f', fontSize: 17}}>
                {props.starName}에게 하고픈 말 남기기..
              </Text>
            </View>
          </TouchableHighlight>
          <Modal
            style={{
              margin: 0,
            }}
            animationIn="slideInUp"
            animationInTiming={500}
            animationOut="slideOutDown"
            animationOutTiming={500}
            isVisible={modalVisible}
            useNativeDriver={true}
            onBackdropPress={() => {
              textInput.current.blur();
              setModalVisible(false);
              setTextInput2(null);
            }}
            onBackButtonPress={() => {
              textInput.current.blur();
              setModalVisible(false);
              setTextInput2(null);
            }}>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
              }}>
              <View
                style={{
                  backgroundColor: 'white',
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 5,
                }}>
                <Icon
                  name="chatbubbles-outline"
                  style={{
                    color: '#259BE5',
                    fontSize: 32.5,
                    marginHorizontal: 3,
                  }}
                />
                <TextInput
                  multiline={true}
                  placeholder={props.starName + '에게 하고픈 말 남기기..'}
                  ref={textInput}
                  style={{flex: 1, color: 'black', fontSize: 15}}
                  onChangeText={(text) => {
                    setTextInput2(text);
                  }}
                  value={textInput2}
                />
                {(textInput2 && (
                  <TouchableHighlight
                    style={{
                      borderRadius: 20,
                    }}
                    onPress={() => goComment()}
                    underlayColor="#dfdfdf">
                    <Icon
                      name="paper-plane-outline"
                      color="#ff8000"
                      style={{
                        fontSize: 30,
                        paddingVertical: 5,
                        paddingHorizontal: 6,
                        borderRadius: 20,
                      }}
                    />
                  </TouchableHighlight>
                )) || <Text></Text>}
              </View>
            </View>
          </Modal>
        </View>
      }
      ListFooterComponent={<SayingList />}
    />
  );
}
