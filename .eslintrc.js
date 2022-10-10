module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: ['react'],
	rules: {
		'react/react-in-jsx-scope': 'off',
		'no-template-curly-in-string': 'off',
		'no-undef': 'error',
		'no-mixed-spaces-and-tabs': 'off',
		'no-unused-vars': 'warn',
		'no-dupe-keys': 'warn',
		'react/prop-types': 'off'
	}
}
