import React, {useState, useEffect, useContext} from 'react';
import {
  Text,
  Pressable,
  View,
  Alert,
  TouchableHighlight,
  FlatList,
} from 'react-native';
// import axios from 'axios';

import Icon from 'react-native-vector-icons/Ionicons';
// import {CommonContext} from '../../context/CommonContext';
// import AsyncStorage from '@react-native-community/async-storage';

export default function (props) {
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

  // const [bC, setBC] = useState(props.comments);
  const bC = [
    {
      id: 1,
      nickname: '닉네임',
      title: '제목',
      content: '내용',
      likesCnt: 1,
      commentsCnt: 0,
      starName: '스타이름',
      isLiked: false,
    },
    {
      id: 2,
      nickname: '닉네임',
      title: '제목',
      content: '내용',
      likesCnt: 1,
      commentsCnt: 0,
      starName: '스타이름',
      isLiked: true,
    },
    {
      id: 3,
      nickname: '닉네임',
      title: '제목',
      content: '내용',
      likesCnt: 1,
      commentsCnt: 0,
      starName: '스타이름',
      isLiked: false,
    },
  ];

  function getArticleInfo() {
    axios
      .get(
        `${serverUrl}/board/${props.article.boardId}/${props.article.id}?userId=${user.id}`,
        {
          headers: {
            Authorization: user.token,
          },
        },
      )
      .then((res) => {
        props.setRFCmt(false);
        setBC([]);
        setBC(res.data.comments);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          AsyncStorage.clear();
          alert('잘못된 요청입니다.');
        }
      });
  }

  const comments = bC.map((comment, idx) => {
    function likeComment(data) {
      axios
        .post(
          `${serverUrl}/board/${props.boardId}/${data.articleId}/${data.id}/like?userId=${user.id}`,
          {
            headers: {
              Authorization: user.token,
            },
          },
        )
        .then((res) => {
          if (comment.isLiked === true) {
            // setLike(false);
            // setLikeCnt(likeCnt - 1);
            bC[idx] = {
              ...bC[idx],
              isLiked: !bC[idx].isLiked,
              likesCnt: bC[idx].likesCnt - 1,
            };
            setBC([]);
            setBC(bC);
          } else {
            // setLike(true);
            // setLikeCnt(likeCnt + 1);
            bC[idx] = {
              ...bC[idx],
              isLiked: !bC[idx].isLiked,
              likesCnt: bC[idx].likesCnt + 1,
            };
            setBC([]);
            setBC(bC);
          }
        })
        .catch((err) => {
          if (err.response.status === 401) {
            AsyncStorage.clear();
            alert('잘못된 요청입니다.');
          }
        });
    }

    return (
      <View
        key={comment.id}
        style={{
          backgroundColor: '#282d29',
          paddingVertical: 20,
          paddingHorizontal: 10,
          borderTopWidth: 2,
          borderTopColor: '#dbdbdb',
        }}>
        <Pressable
          onLongPress={() => {
            props.setModalVisible3(true);
            props.setMyComment(comment);
          }}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            // backgroundColor: 'red'
          }}>
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
            }}>
            <Icon
              name="person-circle"
              style={{fontSize: 50, color: '#919191'}}
            />
            <View style={{flexDirection: 'column', marginLeft: 5, flex: 1}}>
              <Text
                style={{
                  fontWeight: '700',
                  fontSize: 14,
                  // color: '#5e5e5e',
                  paddingTop: 5,
                  paddingBottom: 2,
                }}>
                {comment.nickname}
              </Text>
              <Text style={{fontSize: 14}}>{comment.content}</Text>
              <View style={{flexDirection: 'row', paddingVertical: 5}}>
                {(comment.likesCnt > 0 && (
                  <Text
                    style={{marginRight: 10, fontSize: 12, color: '#9f9f9f'}}>
                    좋아요 {comment.likesCnt}개
                  </Text>
                )) || <Text></Text>}
                <Text style={{fontSize: 12, color: '#9f9f9f'}}>
                  {getTime(comment.created_at)}
                </Text>
              </View>
            </View>
          </View>
          {(comment.isLiked === false && (
            <TouchableHighlight
              style={{
                borderRadius: 20,
              }}
              onPress={() => {
                likeComment(comment);
              }}
              underlayColor="#3b3d3b">
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
          )) || (
            <TouchableHighlight
              style={{
                borderRadius: 20,
              }}
              onPress={() => likeComment(comment)}
              underlayColor="#3b3d3b">
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
          )}
        </Pressable>
        {/* <ReplyList
          comment={comment.replies}
          boardId={props.boardId}
          modalVisible3={props.modalVisible3}
          setModalVisible3={props.setModalVisible3}
          setMyComment={props.setMyComment}
        /> */}
      </View>
    );
  });
  // }

  return (
    <FlatList
      style={{
        paddingTop: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#dbdbdb',
      }}
      data={bC}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item}) => (
        <View
          key={item.id}
          style={{
            backgroundColor: '#282d29',
            paddingVertical: 20,
            paddingHorizontal: 10,
            borderTopWidth: 2,
            borderTopColor: '#dbdbdb',
          }}>
          <Pressable
            onLongPress={() => {
              props.setModalVisible3(true);
              props.setMyComment(item);
            }}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              // backgroundColor: 'red'
            }}>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
              }}>
              <Icon
                name="person-circle"
                style={{fontSize: 50, color: '#919191'}}
              />
              <View style={{flexDirection: 'column', marginLeft: 5, flex: 1}}>
                <Text
                  style={{
                    fontWeight: '700',
                    fontSize: 14,
                    // color: '#5e5e5e',
                    paddingTop: 5,
                    paddingBottom: 2,
                  }}>
                  {item.nickname}
                </Text>
                <Text style={{fontSize: 14}}>{item.content}</Text>
                <View style={{flexDirection: 'row', paddingVertical: 5}}>
                  {(item.likesCnt > 0 && (
                    <Text
                      style={{
                        marginRight: 10,
                        fontSize: 12,
                        color: '#9f9f9f',
                      }}>
                      좋아요 {item.likesCnt}개
                    </Text>
                  )) || <Text></Text>}
                  <Text style={{fontSize: 12, color: '#9f9f9f'}}>
                    {getTime(item.created_at)}
                  </Text>
                </View>
              </View>
            </View>
            {(item.isLiked === false && (
              <TouchableHighlight
                style={{
                  borderRadius: 20,
                }}
                onPress={() => {
                  likeComment(item);
                }}
                underlayColor="#3b3d3b">
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
            )) || (
              <TouchableHighlight
                style={{
                  borderRadius: 20,
                }}
                onPress={() => likeComment(item)}
                underlayColor="#3b3d3b">
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
            )}
          </Pressable>
          {/* <ReplyList
          comment={comment.replies}
          boardId={props.boardId}
          modalVisible3={props.modalVisible3}
          setModalVisible3={props.setModalVisible3}
          setMyComment={props.setMyComment}
        /> */}
        </View>
      )}
    />
  );
}
