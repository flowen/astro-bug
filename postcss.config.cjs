// const doiuse = require('doiuse')

module.exports = {
	plugins: [
		require('postcss-nested'),
		require('autoprefixer'),
		// doiuse({
		// 	browsers: [
		// 		"defaults",
		// 		"> 1%",
		// 		"last 2 versions",
		// 		"not dead"
		// 	],
		// 	ignore: ['fontface'],
		// 	onFeatureUsage: function(usageInfo) {
		// 		console.log(usageInfo.message);
		// 	}
		// })
	],
}
