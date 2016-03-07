'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  ListView,
  View,
  Image,
  ToastAndroid
} from 'react-native';
import config from '../config/config.js';

import ItemTopic from './Topic';
import ItemTitle from './Title';
import ItemGoods from './Goods';

const api = config.api;

var MainScreen = React.createClass({
	styles: {
		listView: {
		  backgroundColor: '#efeff4',
		  height: config.screen.viewportHeight - 110
		},
		loading: {
			flex: 1,
			alignItems: 'center',
			justifyContent: 'center'
		},
		loadingImage: {
			width: 50,
			height: 50
		},
		loadingText: {
			marginTop: 10
		}
	},
	sourceData: [],
	getInitialState: function(){
		return{
			dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
			last_gid: -1,
			isLoaded: false
		}
	},
	componentDidMount: function(){
		this.fetchData();
	},
	fetchData: function(){
		let url = api + '/goods/tags/'+this.props.tagsid+(this.state.last_gid==-1?'':('?g_id='+this.state.last_gid));
		console.log(url);
	  fetch(url)
	  .then((response) => response.json())
	  .then((json) => {
	  	if(json.data.length==0){
	  		this.setState({
	  			last_gid: -99
	  		});
	  		ToastAndroid.show('没有更多商品了……', ToastAndroid.SHORT);
	  		return;
	  	}
	  	this.sourceData = this.sourceData.concat(json.data);
	  	let lastGoodsArray = json.data[json.data.length-1].data;
	  	let lastGoodsID = lastGoodsArray[lastGoodsArray.length-1].g_id;
	    this.setState({
	    	last_gid: lastGoodsID,
	      dataSource: this.state.dataSource.cloneWithRows(this.sourceData),
	      isLoaded: true,
	    });
	  })
	  .done();
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
        return (<ItemGoods data={data.data} goToGoodsDetail={this.props.goToGoodsDetail} />)
        break;
      default:
        return (<Text>{data.type}</Text>)
    }
  },
  onEndReached: function(){
  	if(this.state.last_gid>-1)  this.fetchData();
  },
	render: function() {
		if(!this.state.isLoaded){
			return (
				<View style={this.styles.loading}>
					<Image style={this.styles.loadingImage} source={{uri:'http://static.xiaohongchun.com/store/images/logo.png'}} />
					<Text style={this.styles.loadingText}>加载中</Text>
				</View>
				)
		}
		else {
			return (
			  <ListView
			    initialListSize = {10}
			    dataSource={this.state.dataSource}
			    renderRow={this.renderItem}
			    style={this.styles.listView}
			    onEndReached={this.onEndReached}
			    showsVerticalScrollIndicator={false}
	      	showsHorizontalScrollIndicator={false}
			  />
			);
		}
	}
});

module.exports = MainScreen;