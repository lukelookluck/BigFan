import React from 'react';
import {
  View,
  Animated,
  Text,
  TouchableHighlight,
  Image,
  FlatList,
  useWindowDimensions,
} from 'react-native';

import {useCollapsibleScene} from 'react-native-collapsible-tab-view';

export default function Album() {
  const scrollPropsAndRef = useCollapsibleScene('fourth');

  const bC = [
    {id: 1, src: require('./진기주1.jpg')},
    {id: 2, src: require('./진기주2.jpg')},
    {id: 3, src: require('./진기주3.jpg')},
    {id: 4, src: require('./진기주4.gif')},
    {id: 5, src: require('./진기주5.jpg')},
  ];

  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  const myImageWidth = Math.floor(windowWidth / 3) - 2 / 3;

  return (
    <Animated.FlatList
      {...scrollPropsAndRef}
      data={bC}
      numColumns={3}
      columnWrapperStyle={{
        borderTopColor: '#282d29',
        borderTopWidth: 3,
      }}
      renderItem={({item, index}) => (
        <TouchableHighlight
          key={item.id}
          onPress={() => console.log('사진누름')}
          activeOpacity={0.55}
          style={{
            borderLeftColor: index % 3 === 1 ? '#282d29' : '',
            borderLeftWidth: index % 3 === 1 ? 3 : 0,
            borderRightColor: index % 3 === 1 ? '#282d29' : '',
            borderRightWidth: index % 3 === 1 ? 3 : 0,
          }}>
          <Image
            source={item.src}
            resizeMode={'cover'}
            style={{
              width: myImageWidth,
              height: myImageWidth,
              overlayColor: 'white',
            }}
          />
        </TouchableHighlight>
      )}
    />
  );
}
