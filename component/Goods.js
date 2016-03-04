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

		},
		goodsImage: {
			width: 200,
			height: 200
		}
	},
  render: function() {
    return (
      <View style={this.styles.goodsCard}>
      	<Image style={this.styles.goodsImage} source={{uri:this.props.data.g_image}} />
      </View>
    );
  }
});

var DoubleItemGoods = React.createClass({
	render: function() {
		// alert(this.props.data.length);
		if(this.props.data.length == 2) {
			return (
				<View>
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