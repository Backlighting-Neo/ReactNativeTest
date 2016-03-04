'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  ListView,
  View,
  Image
} from 'react-native';
import config from './config/config.js';


import Navbar from './component/NavBar';
import ItemTopic from './component/Topic';
import ItemTitle from './component/Title';
import ItemGoods from './component/Goods';

const api = config.api;

var StoreIndex = React.createClass({
  styles: {
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
    },
    listView: {
      paddingTop: 0,
      backgroundColor: '#efeff4',
      height: config.screen.viewportHeight
    },
    storeTitle: {
      textAlign: 'center',
      fontSize: 18
    },
    storeTitleView: {
      height: 40,
      paddingTop: 10
    }
  },
  getInitialState: function() {
    return({
      currentTab: 0,
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
      loader: false
    })
  },
  componentDidMount: function(){
    this.fetchData(1);
  },
  fetchData: function(tags_id){
    fetch(api + '/goods/tags/'+tags_id)
    .then((response) => response.json())
    .then((json) => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(json.data),
        loaded: true,
      });
    })
    .done();
  },
  changeCurrentTab: function(tgid) {
    this.setState({
      currentTab: tgid
    });
    this.fetchData(tgid);
  },
  renderItem: function(data) {
    switch(data.type){
      case 'topic':
        return (<ItemTopic data={data.data} />)
        break;
      case 'title':
        return (<ItemTitle data={data.data} />)
        break;
      case 'goods':
        return (<ItemGoods data={data.data} />)
        break;
      default:
        return (<Text>{data.type}</Text>)
    }
  },
  render: function() {
    return (
      <View>
      
        <View style={this.styles.storeTitleView}>
          <Text style={this.styles.storeTitle}>小红唇商城</Text>
        </View>
      
        <Navbar actionChangeCurrentTab={this.changeCurrentTab} />
        <ListView
          initialListSize = {10}
          dataSource={this.state.dataSource}
          renderRow={this.renderItem}
          style={this.styles.listView}
        />
      </View>
    );
  }
})


AppRegistry.registerComponent('AwesomeProject', () => StoreIndex);