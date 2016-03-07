'use strict';

import React, {
  AppRegistry,
  Component,
  Navigator
} from 'react-native';

import StoreIndex from './component/StoreIndex';

var XhcStore = React.createClass({
  render: function() {
    var defaultName = 'StoreIndex';
    var defaultComponent = StoreIndex;
    
    return (
      <Navigator
        initialRoute={{ name: defaultName, component: defaultComponent }}
        configureScene={(route) => {
          return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
        }}
        renderScene={(route, navigator) => {
          let Component = route.component;
          return <Component {...route.params} navigator={navigator} />
        }}
      />
    );
  }
});



AppRegistry.registerComponent('AwesomeProject', () => XhcStore);