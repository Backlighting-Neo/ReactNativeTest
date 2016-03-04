'use strict';

import React, {
  Component,
  Text,
  View,
  Image
} from 'react-native';
import commonStyles from '../styles/common';
import config from '../config/config.js';

const api = config.api;

var ItemGoods = React.createClass({
	styles: {
		goodsCard: {
			backgroundColor: 'white',
			margin: config.screen.size(10),
			width: config.screen.size(300),
		},
		goodsImage: {
			width: config.screen.size(300),
			height: config.screen.size(300)
		},
		goodsTitle: {
			fontSize: config.screen.size(25),
		},
		goodsName: {
			fontSize: config.screen.size(21),
			color: '#808080'
		},
		goodsInfo: {
			padding: config.screen.size(20)
		},
		goodsPriceView: {
			flex: 1,
			flexDirection: 'row',
			paddingTop: config.screen.size(20)
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
    return (
      <View style={this.styles.goodsCard}>
      	<Image style={this.styles.goodsImage} source={{uri:this.props.data.g_image}} />
      	<View style={this.styles.goodsInfo}>
	      	<Text style={this.styles.goodsTitle} numberOfLines={1}>{this.props.data.g_title}</Text>
	      	<Text style={this.styles.goodsName} numberOfLines={2}>{this.props.data.g_name}</Text>
	      	<View style={this.styles.goodsPriceView}>
	      		<Text style={this.styles.goodsPriceShop}>¥  {this.props.data.g_price_shop} 元</Text>
	      		<Text style={this.styles.goodsPricePromotion}> {this.props.data.g_price_market} 元</Text>
	      	</View>
      	</View>
      </View>
    );
  }
});

var DoubleItemGoods = React.createClass({
	styles: {
		doubleView: {
			flex: 1,
			flexDirection: 'row'
		}
	},
	render: function() {
		// alert(this.props.data.length);
		if(this.props.data.length == 2) {
			return (
				<View style={this.styles.doubleView}>
					<ItemGoods data={this.props.data[0]}/>
					<ItemGoods data={this.props.data[1]}/>
				</View>
			);
		}
		else {
			return (
				<ItemGoods data={this.props.data[0]}/>
			);
		}
		
	}
});

module.exports = DoubleItemGoods;