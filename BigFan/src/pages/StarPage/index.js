import React, {useRef, useState} from 'react';
import {View, Text, Animated} from 'react-native';

import StarPageHome from '../../components/StarPage/Home';
import SaySomething from '../../components/StarPage/SaySome/Base';
import BoardList from '../../components/StarPage/BoardList';

import {
  CollapsibleTabView,
  useCollapsibleScene,
} from 'react-native-collapsible-tab-view';

export default function MyPage({navigation, route}) {
  const starName = route.params.name;

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

  const renderHeader = () => (
    <View
      style={{
        height: 250,
        backgroundColor: '#2196f3',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4,
      }}>
      <Text style={{color: 'white', fontSize: 24}}>COLLAPSIBLE</Text>
    </View>
  );

  const SomeRoute = ({routeKey, color}) => {
    const scrollPropsAndRef = useCollapsibleScene(routeKey);

    return (
      <Animated.ScrollView
        style={{backgroundColor: color}}
        {...scrollPropsAndRef}>
        <View style={{height: 1500}}>
          <Text>asd</Text>
        </View>
      </Animated.ScrollView>
    );
  };

  const renderScene = ({route}) => {
    switch (route.key) {
      case 'first':
        return <StarPageHome starName={starName} />;
      case 'second':
        return <SaySomething starName={starName} />;
      case 'third':
        return <BoardList />;
      case 'fourth':
        return <SomeRoute routeKey="fourth" color="black" />;
      case 'fifth':
        return <SomeRoute routeKey="fifth" color="black" />;
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
