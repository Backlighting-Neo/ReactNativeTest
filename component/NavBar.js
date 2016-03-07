'use strict';

import React, {
  Component,
  Text,
  View,
  ScrollView
} from 'react-native';
import commonStyles from '../styles/common';
import config from '../config/config.js';

const api = config.api;

var NavBarItem = React.createClass({
  styles: {
    navItem: {
      fontSize: 13,
      textAlign: 'center',
      margin: 10,
      width: config.screen.size(100)
    },
    navItemActive: {
      color: '#FF3657'
    }
  },
  changeTab: function(){
    this.props.changeTab(this.props.tgid, this.props.index);
  },
  render: function() {
    return (
      <Text
        style={[this.styles.navItem, this.props.currentTab==this.props.tgid?this.styles.navItemActive:{}]}
        onPress={this.changeTab}>
        {this.props.tg_name}
      </Text>
    );
  }
});

var Navbar = React.createClass({
  styles: {
    gap: commonStyles.gap
  },
  changeTab: function(tgid, index) {
    this.props.actionChangeCurrentTab(tgid, index);
  },
  render: function() {
    return (
      <ScrollView
        horizontal={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
      {
        this.props.navBarItem.map((item, index)=>{
          return(
            <NavBarItem 
              key={index}
              index={index}
              tgid={item.tg_id}
              tg_name={item.tg_name}
              currentTab={this.props.currentTab}
              changeTab={this.changeTab}/>
          )
        })
      }
      </ScrollView>
    );
  }
});

module.exports = Navbar;