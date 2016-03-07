'use strict';

import React, {
  Component,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';
import commonStyles from '../styles/common';
import config from '../config/config.js';

const api = config.api;

var TopicGoods = React.createClass({
	styles: {
		goodsCard: {
			width: config.screen.size(167),
			height: config.screen.size(242),
			marginLeft: config.screen.size(16),
			marginTop: config.screen.size(16),
			marginBottom: config.screen.size(16),
		},
		goodsImage: {
			width: config.screen.size(165),
			height: config.screen.size(165),
			borderWidth: config.screen.size(1),
			borderColor: '#e7e7e7'
		},
		goodsName: {
			fontSize: config.screen.size(19),
			color: '#19181e',
			marginTop: config.screen.size(16),
		},
		// goodsNameView: {
		// 	height: config.screen.size(41),
		// 	width: config.screen.size(165),
		// 	overflow: 'hidden'
		// },
		goodsPriceView: {
			flex: 1,
			flexDirection: 'row',
			// justifyContent: 'flex-end',
		},
		goodsPriceShop: {
			fontSize: config.screen.size(21),
			color: '#ff1a40',
		},
		goodsPricePromotion: {
			fontSize: config.screen.size(15),
			color: '#a0a0a0',
			textDecorationLine: 'line-through',
			textDecorationStyle: 'solid',
			textDecorationColor: '#a0a0a0'
		}
	},
	render: function() {
		if(this.props.data.more){
			return (
				<View style={this.styles.goodsCard}>
					<Image style={this.styles.goodsImage} source={{uri:'http://static.xiaohongchun.com/store/images/seeAll.png'}} />
				</View>
			)
		}
		else {
			return (
				<View style={this.styles.goodsCard}>
					<Image style={this.styles.goodsImage} source={{uri:this.props.data.g_image}} />
					<Text style={this.styles.goodsName} numberOfLines={1}>{this.props.data.g_name}</Text>
					<View style={this.styles.goodsPriceView}>
						<Text style={this.styles.goodsPriceShop}>¥  {this.props.data.g_price_shop} 元</Text>
						<Text style={this.styles.goodsPricePromotion}> {this.props.data.g_price_market} 元</Text>
					</View>
				</View>
			);
		}
	}
});

var ItemTopic = React.createClass({
	styles: {
		topicView: {
			backgroundColor: 'white'
		},
		topicImage: {
			width: config.screen.viewportWidth,
			height: config.screen.ratioHeight(-1,640/384)
		}
	},
  render: function() {
    return (
      <View style={this.styles.topicView}>
      	<Image style={this.styles.topicImage} source={{uri: this.props.data[0].t_image}} />
      	<ScrollView horizontal={true}
	      	showsVerticalScrollIndicator={false}
	      	showsHorizontalScrollIndicator={false}>
      	{
      		this.props.data[0].goods.map((element, index)=>{
      			return (<TopicGoods data={element} key={index} />)
      		})
      	}
      	</ScrollView>
      </View>
    );
  }
});

module.exports = ItemTopic;