import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableHighlight,
  TextInput,
} from 'react-native';

import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ArticleDetail(props) {
  console.log(props.route.params);

  const [article, setArticle] = useState(props.route.params.article);

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

  // 댓글작성폼 관련
  const [modalVisible, setModalVisible] = useState(false);
  const [isReply, setIsReply] = useState(false);
  const [replyId, setReplyId] = useState(null);
  const [textInput2, setTextInput2] = useState(null);
  // let textInput = '';
  const textInput = useRef(null);

  // 게시글 수정/삭제 모달 관련
  const [modalVisible2, setModalVisible2] = useState(false);

  const [modalVisible3, setModalVisible3] = useState(false);

  return (
    <ScrollView keyboardShouldPersistTaps={'always'}>
      <View
        style={{
          paddingHorizontal: 10,
          // backgroundColor: 'white'
        }}>
        {/* 게시글 상단 */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingVertical: 5,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Icon
              name="person-circle"
              style={{fontSize: 45, color: '#919191'}}
            />
            <View style={{marginLeft: 10, justifyContent: 'center'}}>
              <Text style={{fontSize: 15, fontWeight: '700'}}>
                {article.nickname}
              </Text>
              {/* <Text style={{fontSize: 13, fontWeight: '500', color: '#5e5e5e'}}>
                {getTime(article.created_at)}
              </Text> */}
            </View>
          </View>
          <TouchableHighlight
            style={{
              borderRadius: 20,
            }}
            onPress={() => setModalVisible2(true)}
            underlayColor="#737773">
            <Icon
              name="ellipsis-vertical"
              style={{
                fontSize: 22.5,
                paddingVertical: 4,
                paddingHorizontal: 5,
              }}
            />
          </TouchableHighlight>
          {/* 수정/삭제 모달 */}
          <Modal
            style={{
              margin: 0,
            }}
            animationIn="slideInUp"
            animationInTiming={500}
            animationOut="slideOutDown"
            animationOutTiming={500}
            isVisible={modalVisible2}
            useNativeDriver={true}
            // hideModalContentWhileAnimating={true}
            // onModalShow={() => {
            //   textInput.focus();
            // }}
            onBackdropPress={() => {
              setModalVisible2(false);
            }}
            onBackButtonPress={() => {
              setModalVisible2(false);
            }}>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
                // backgroundColor: 'rgba(52, 52, 52, 0.5)',
              }}>
              <View
                style={{
                  backgroundColor: 'white',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                }}>
                <TouchableHighlight
                  onPress={() => {
                    reviseArticle(article);
                  }}
                  underlayColor="#dfdfdf"
                  style={{
                    backgroundColor: 'white',
                    paddingVertical: 15,
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      flex: 1,
                    }}>
                    <Icon
                      name="build"
                      color="#ff8000"
                      style={{
                        fontSize: 27.5,
                        marginVertical: 5,
                        marginLeft: 10,
                        marginRight: 25,
                        borderRadius: 20,
                      }}
                    />
                    <Text style={{fontSize: 19.5, color: 'black'}}>수정</Text>
                  </View>
                </TouchableHighlight>
                <TouchableHighlight
                  onPress={() => {
                    deleteArticle(article);
                  }}
                  underlayColor="#dfdfdf"
                  style={{
                    backgroundColor: 'white',
                    paddingVertical: 15,
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      flex: 1,
                    }}>
                    <Icon
                      name="trash"
                      color="#ff8000"
                      style={{
                        fontSize: 27.5,
                        marginVertical: 5,
                        marginLeft: 10,
                        marginRight: 25,
                        borderRadius: 20,
                      }}
                    />
                    <Text style={{fontSize: 19.5, color: 'black'}}>삭제</Text>
                  </View>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
        </View>
        {/* 게시글 중단(제목, 내용) */}
        <View style={{paddingVertical: 10}}>
          <Text style={{fontSize: 17.5, fontWeight: '700', marginVertical: 10}}>
            {article.title}
          </Text>
          <Text style={{fontSize: 14}}>{article.content}</Text>
        </View>
        {/* 게시글 하단(좋아요, 댓글) */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 2.5,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: 2,
            }}>
            {(article.isLiked === false && (
              <TouchableHighlight
                style={{
                  borderRadius: 20,
                }}
                onPress={() => {
                  likeArticle(article);
                }}
                underlayColor="#737773">
                <Icon
                  name="heart-outline"
                  color="#ff8000"
                  style={{
                    fontSize: 22.5,
                    paddingVertical: 5,
                    paddingHorizontal: 6,
                    // backgroundColor: 'white',
                    borderRadius: 20,
                  }}
                />
              </TouchableHighlight>
            )) ||
              (article.isLiked === true && (
                <TouchableHighlight
                  style={{
                    borderRadius: 20,
                  }}
                  onPress={() => likeArticle(article)}
                  underlayColor="#737773">
                  <Icon
                    name="heart"
                    color="#ff8000"
                    style={{
                      fontSize: 22.5,
                      paddingVertical: 5,
                      paddingHorizontal: 6,
                      // backgroundColor: 'white',
                      borderRadius: 20,
                    }}
                  />
                </TouchableHighlight>
              ))}
            <Text
              style={{
                fontSize: 18,
                color: '#ff8000',
              }}>
              {article.likesCnt}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: 2,
            }}>
            <TouchableHighlight
              style={{
                borderRadius: 20,
              }}
              onPress={() => {}}
              underlayColor="#737773">
              <Icon
                name="chatbubbles-outline"
                color="#058AB3"
                style={{
                  fontSize: 22.5,
                  paddingVertical: 5,
                  paddingHorizontal: 6,
                  // backgroundColor: 'white',
                  borderRadius: 20,
                }}
              />
            </TouchableHighlight>
            <Text
              style={{
                fontSize: 18,
                color: '#058AB3',
              }}>
              {article.commentsCnt}
            </Text>
          </View>
        </View>
        {/* 게시글 최하단(댓글) */}
        <View style={{paddingVertical: 5}}>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '700',
              }}>
              댓글
            </Text>
            <Text style={{fontSize: 15, marginHorizontal: 7}}>
              {article.commentsCnt}
            </Text>
          </View>
        </View>
        {/* 댓글 작성폼 */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingVertical: 5,
            borderBottomWidth: 2,
            borderBottomColor: '#dbdbdb',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon
              name="person-circle"
              style={{fontSize: 40, color: '#77a6b7'}}
            />
            <View
              style={{
                marginHorizontal: 5,
                flex: 1,
                flexDirection: 'column',
              }}>
              <Text
                onPress={() => {
                  setModalVisible(true);
                  setTimeout(() => {
                    textInput.current.focus();
                  }, 200);
                }}
                style={{
                  flex: 1,
                  textAlignVertical: 'center',
                  color: '#8b8b8b',
                }}>
                댓글 작성하기..
              </Text>
            </View>
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
              // hideModalContentWhileAnimating={true}
              onModalShow={() => {
                // textInput.focus();
              }}
              onBackdropPress={() => {
                textInput.current.blur();
                setModalVisible(false);
                setIsReply(false);
                setTextInput2(null);
              }}
              onBackButtonPress={() => {
                textInput.current.blur();
                setModalVisible(false);
                setIsReply(false);
                setTextInput2(null);
              }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'flex-end',
                  // backgroundColor: 'rgba(52, 52, 52, 0.5)',
                }}>
                {isReply === true && (
                  <View
                    style={{
                      backgroundColor: '#b0b0b0',
                      padding: 15,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={{fontSize: 14, color: '#414141'}}>
                      답글 남기는 중...
                    </Text>
                    <TouchableOpacity
                      activeOpacity={1}
                      onPress={() => {
                        textInput.current.blur();
                        setIsReply(false);
                        setModalVisible(false);
                        setTextInput2(null);
                      }}>
                      <Text style={{fontSize: 14, color: '#414141'}}>취소</Text>
                    </TouchableOpacity>
                  </View>
                )}
                <View
                  style={{
                    backgroundColor: 'white',
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 5,
                  }}>
                  <Icon
                    name="person-circle"
                    style={{
                      fontSize: 40,
                      color: '#ff8000',
                    }}
                  />
                  {(isReply === false && (
                    <TextInput
                      multiline={true}
                      placeholder="댓글 작성하기.."
                      ref={textInput}
                      style={{flex: 1, color: 'black', fontSize: 15}}
                      onChangeText={(text) => {
                        setTextInput2(text);
                      }}
                      value={textInput2}
                    />
                  )) || (
                    <TextInput
                      multiline={true}
                      placeholder="답글 작성하기.."
                      ref={textInput}
                      // ref={(input) => {
                      //   textInput = input;
                      // }}
                      style={{flex: 1, color: 'black', fontSize: 15}}
                      onChangeText={(text) => {
                        setTextInput2(text);
                      }}
                      value={textInput2}
                    />
                  )}
                  {(textInput2 && (
                    <TouchableHighlight
                      style={{
                        borderRadius: 20,
                      }}
                      onPress={() => goComment()}
                      underlayColor="#dfdfdf">
                      <Icon
                        name="paper-plane-outline"
                        color="#058AB3"
                        style={{
                          fontSize: 30,
                          paddingVertical: 5,
                          paddingHorizontal: 6,
                          // backgroundColor: 'white',
                          borderRadius: 20,
                        }}
                      />
                    </TouchableHighlight>
                  )) || <Text></Text>}
                </View>
              </View>
            </Modal>
            {/* <Modal
              style={{
                margin: 30,
              }}
              animationIn="flipInX"
              animationInTiming={500}
              animationOut="flipOutX"
              animationOutTiming={500}
              isVisible={modalVisible3}
              useNativeDriver={true}
              // hideModalContentWhileAnimating={true}
              // onModalShow={() => {
              //   textInput.focus();
              // }}
              onBackdropPress={() => {
                setModalVisible3(false);
              }}
              onBackButtonPress={() => {
                setModalVisible3(false);
              }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  // backgroundColor: 'rgba(52, 52, 52, 0.5)',
                }}>
                <View
                  style={{
                    backgroundColor: 'white',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                  }}>
                  <TouchableHighlight
                    onPress={() => {
                      // deleteArticle(article);
                      setModalVisible3(false);
                      deleteComment(myComment);
                    }}
                    underlayColor="#dfdfdf"
                    style={{
                      backgroundColor: 'white',
                      paddingVertical: 15,
                      flexDirection: 'row',
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        flex: 1,
                      }}>
                      <Icon
                        name="trash"
                        color="#ff8000"
                        style={{
                          fontSize: 27.5,
                          marginVertical: 5,
                          marginLeft: 10,
                          marginRight: 25,
                          borderRadius: 20,
                        }}
                      />
                      <Text style={{fontSize: 19.5, color: 'black'}}>
                        댓글 삭제
                      </Text>
                    </View>
                  </TouchableHighlight>
                </View>
              </View>
            </Modal> */}
          </View>
        </View>
        {/* 댓글목록 파트 */}
        {/* {(myLoading === true && (
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Image
              source={require('../../components/PartBoard/Box/spiner.gif')}
              style={{width: 100, height: 100}}
            />
          </View>
        )) || (
          <CommentList
            article={article}
            comments={comments}
            boardId={article.boardId}
            writeReply={writeReply}
            modalVisible3={modalVisible3}
            setModalVisible3={setModalVisible3}
            setMyComment={setMyComment}
            rFCmt={rFCmt}
            setRFCmt={setRFCmt}
          />
        )} */}
      </View>
    </ScrollView>
  );
}
