import React, {useContext} from 'react';
import {View, Text, ScrollView} from 'react-native';
import Header from '../../components/Header';
import FavStar from '../../components/FavStar';
import SingleArticle from '../../components/SingleArticle';

export default function Home({navigation}) {
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

  // const articles = [
  //   {
  //     id: 1,
  //     nickname: '닉네임',
  //     title: '제목',
  //     content: '내용',
  //     likesCnt: 1,
  //     commentsCnt: 0,
  //     starName: '스타이름',
  //   },
  //   {
  //     id: 2,
  //     nickname: '닉네임',
  //     title: '제목',
  //     content: '내용',
  //     likesCnt: 1,
  //     commentsCnt: 0,
  //     starName: '스타이름',
  //   },
  //   {
  //     id: 3,
  //     nickname: '닉네임',
  //     title: '제목',
  //     content: '내용',
  //     likesCnt: 1,
  //     commentsCnt: 0,
  //     starName: '스타이름',
  //   },
  // ];

  const articleList = homeArticles.map((article, idx) => {
    return <SingleArticle key={idx} article={article} />;
  });

  return (
    <ScrollView>
      <Header />
      <FavStar navigation={navigation} />
      {articleList}
      {/* {articleList}
      {articleList} */}
      {/* <View style={{backgroundColor: 'brown', paddingVertical: 30}}>
        <Text>전체게시글..</Text>
      </View> */}
    </ScrollView>
  );
}
