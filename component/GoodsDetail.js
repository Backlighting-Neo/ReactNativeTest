'use strict';

import React, {
  AppRegistry,
  Component,
  Text,
  BackAndroid
} from 'react-native';



var GoodsDetail = React.createClass({
  getInitialState: function(){
    BackAndroid.addEventListener('hardwareBackPress', () => {
      this.props.navigator.pop();
      return true;
    });

    return ({});
  },
  render: function() {
    return (
      <Text> 商品详情 </Text>
    );
  }
});

module.exports = GoodsDetail;