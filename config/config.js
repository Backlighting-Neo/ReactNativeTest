var Dimensions = require('Dimensions');

config = {
	api : 'http://napi.xiaohongchun.com',
	screen: {
		viewport: 640,
		viewportWidth: Dimensions.get('window').width,
		viewportHeight: Dimensions.get('window').height,
		widthPercent: (percent)=>this.viewportWidth*percent/100,
		ratioHeight: (width,ratio)=>(width==-1?config.screen.viewportWidth:width)/ratio,
		size: (size)=>(config.screen.viewportWidth/config.screen.viewport)*size
	}
}

module.exports = config