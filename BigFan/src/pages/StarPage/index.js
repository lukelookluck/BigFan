import React, {useRef, useState} from 'react';
import {View, Text, Animated} from 'react-native';

import StarPageHome from '../../components/StarPage/Home';
import SaySomething from '../../components/StarPage/SaySome/Base';
import BoardList from '../../components/StarPage/BoardList';
import Album from '../../components/StarPage/Album';
import Info from '../../components/StarPage/Info';

import {
  CollapsibleTabView,
  useCollapsibleScene,
} from 'react-native-collapsible-tab-view';

export default function MyPage({HomeArticles, starName, navigation}) {
  const [index, setIndex] = useState(0);
  const [routes] = React.useState([
    {key: 'first', title: '홈'},
    {key: 'second', title: '하고픈 말'},
    {key: 'third', title: '게시판'},
    {key: 'fourth', title: '앨범'},
    {key: 'fifth', title: '정보'},
  ]);

  const handleIndexChange = (index) => {
    setIndex(index);
  };

  const renderScene = ({route}) => {
    switch (route.key) {
      case 'first':
        return (
          <StarPageHome
            starName={starName}
            HomeArticles={HomeArticles}
            navigation={navigation}
          />
        );
      case 'second':
        return <SaySomething starName={starName} />;
      case 'third':
        return <BoardList />;
      case 'fourth':
        return <Album />;
      case 'fifth':
        return <Info />;
      default:
        return null;
    }
  };

  return (
    <CollapsibleTabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={handleIndexChange}
      // renderHeader={MyHeader}
      // headerHeight={250}
      tabBarProps={{
        indicatorStyle: {
          backgroundColor: '#ffaa00',
        },
        activeColor: '#ffaa00',
        inactiveColor: '#d8d8d8',
        style: {
          backgroundColor: '#282d29',
          borderTopColor: '#959595',
          borderTopWidth: 1,
        },
        labelStyle: {
          fontSize: 12.5,
        },
      }}
    />
  );
}
