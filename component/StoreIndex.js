'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  ViewPagerAndroid
} from 'react-native';
import config from '../config/config.js';
import Navbar from '../component/NavBar';
import MainScreen from '../component/MainScreen';
import StoreTitle from '../component/StoreTitle';

import GoodsDetail from '../component/GoodsDetail';
const api = config.api;

var StoreIndex = React.createClass({
  styles: {
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
    },
    viewPager: {
      backgroundColor: '#efeff4',
      height: config.screen.viewportHeight - 110
    }
  },
  getInitialState: function() {
    return({
      currentTab: 0,
      navBarItem: []
    })
  },
  componentDidMount: function(){
    this.fetchTagsData();
  },
  fetchTagsData: function() {
    fetch(api+'/goods/tags')
    .then((response) => response.json())
    .then((json)=>{
      this.setState({
        navBarItem: json.data,
        currentTab: json.data[0].tg_id
      });
    })
  },
  changeCurrentTab: function(tgid, index) {
    this.setState({
      currentTab: tgid
    });
    this.viewPager.setPage(index);
  },
  viewPagerChangePage: function(event){
    console.log(this.state.navBarItem[event.nativeEvent.position].tg_id);
    this.setState({
      currentTab: this.state.navBarItem[event.nativeEvent.position].tg_id
    });
  },
  goToGoodsDetail: function(){
    const {navigator} = this.props;
    if(navigator){
      navigator.push({
        name: 'GoodsDetail',
        component: GoodsDetail
      })
    }
  },
  render: function() {
    return (
      <View style={this.styles.container}>
        <StoreTitle />
        <Navbar
          navBarItem={this.state.navBarItem}
          currentTab={this.state.currentTab}
          actionChangeCurrentTab={this.changeCurrentTab} />
        <ViewPagerAndroid
          style={this.styles.viewPager}
          initialPage={0}
          onPageSelected={this.viewPagerChangePage}
          ref={viewPager => { this.viewPager = viewPager; }}>
          {
            this.state.navBarItem.map((item, index)=>{
              return(
                <View key={index}>
                  <MainScreen
                    tagsid={item.tg_id}
                    currentTagsID={this.state.currentTab}
                    goToGoodsDetail={this.goToGoodsDetail} />
                </View>
              )
            })
          }
        </ViewPagerAndroid>
      </View>
    );
  }
})

module.exports = StoreIndex;

AppRegistry.registerComponent('AwesomeProject', () => StoreIndex);