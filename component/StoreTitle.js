import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

var StoreTitle = React.createClass({
	styles: {
		storeTitle: {
		  textAlign: 'center',
		  fontSize: 18
		},
		storeTitleView: {
		  height: 40,
		  paddingTop: 10
		},
		cart: {
			position: 'absolute',
			right: 10,
			top: 10,
			width: 21,
			height: 20
		}
	},
	render: function() {
		return (
			<View style={this.styles.storeTitleView}>
			  <Text style={this.styles.storeTitle}>小红唇商城</Text>
			  <Image style={this.styles.cart} source={{uri:'http://static.xiaohongchun.com/store/images/store_cart.png'}} />
			</View>
		);
	}
});

module.exports = StoreTitle;