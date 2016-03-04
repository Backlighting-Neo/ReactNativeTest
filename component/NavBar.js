'use strict';

import React, {
  Component,
  Text,
  View
} from 'react-native';
import commonStyles from '../styles/common';
import config from '../config/config.js';

const api = config.api;

var NavBarItem = React.createClass({
  styles: {
    navItem: {
      fontSize: 15,
      textAlign: 'center',
      margin: 10
    },
    navItemActive: {
      color: '#FF3657'
    }
  },
  changeTab: function(){
    this.props.changeTab(this.props.tgid);
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
    navBar: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'flex-start'
    },
    gap: commonStyles.gap
  },
  getInitialState: function() {
    return({
      navBarItem:[],
      currentItem:0
    })
  },
  componentDidMount: function(){
    this.fetchData();
  },
  fetchData: function() {
    fetch(api+'/goods/tags')
    .then((response) => response.json())
    .then((json)=>{
      this.setState({
        navBarItem: json.data,
        currentItem: json.data[0].tg_id
      });
      this.changeTab(json.data[0].tg_id);
    })
  },
  changeTab: function(tgid) {
    this.setState({
      currentItem: tgid
    });
    this.props.actionChangeCurrentTab(tgid);
  },
  render: function() {
    return (
      <View style={[this.styles.navBar, this.styles.gap]}>
      {
        this.state.navBarItem.map((item, index)=>{
          return(
            <NavBarItem 
              key={index}
              tgid={item.tg_id}
              tg_name={item.tg_name}
              currentTab={this.state.currentItem}
              changeTab={this.changeTab}/>
          )
        })
      }
      </View>
    );
  }
});

module.exports = Navbar;