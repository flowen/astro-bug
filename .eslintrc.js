module.exports = {
	root: true,
	env: {
		node: true,
		es6: true,
		browser: true,
	},
	extends: ['eslint:recommended', 'plugin:prettier/recommended'],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		quotes: [2, 'single'],
	},
	parser: 'babel-eslint',
	parserOptions: {
		sourceType: 'module',
		allowImportExportEverywhere: true,
	},
}
