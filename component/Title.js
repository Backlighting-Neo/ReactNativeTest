'use strict';

import React, {
  Component,
  Text,
  View
} from 'react-native';
import commonStyles from '../styles/common';
import config from '../config/config.js';

var ItemTitle = React.createClass({
	styles: {
		titleText: {
			width: 200,
			height: 20,
			// backgroundColor: 'red'
			borderLeftWidth: 2,
			borderLeftColor: '#ff3657',
			marginLeft: 10,
			paddingLeft: 5,
			marginTop: 5,
			marginBottom: 5
		}
	},
  render: function() {
  	// alert('data.text='+this.props.data[0].text);
    return (
    	<View style={this.styles.titleText}>
	      <Text>{this.props.data[0].text}</Text>
      </View>
    );
  }
});

module.exports = ItemTitle;