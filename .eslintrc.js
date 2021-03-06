module.exports = {
	env: {
		node: true,
		mocha: true,
	},
	parser: 'babel-eslint',
	extends: ['airbnb', 'prettier'],
	plugins: ['import', 'react', 'jsx-a11y'],
	rules: {
		'comma-dangle': [
			2,
			{
				arrays: 'always-multiline',
				objects: 'always-multiline',
				imports: 'always-multiline',
				exports: 'always-multiline',
				functions: 'ignore',
			},
		],
		'react/no-array-index-key': 'off',
		'react/prop-types': 'off',
		'react/no-multi-comp': 'off',
		'react/jsx-filename-extension': 'off',
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-indent-props': ['error', 'tab'],
		'react/prefer-stateless-function': 'off',
		'react/jsx-filename-extension': 'off',
		'import/no-extraneous-dependencies': 'off',
		'import/no-extraneous-dependencies': 'off',
		'import/no-named-as-default': 'off',
		'import/no-named-as-default-member': 'off',
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'no-unused-expressions': 'off',
		'class-methods-use-this': 'off',
		'no-tabs': 0,
		'no-underscore-dangle': 'off',
		'jsx-a11y/no-static-element-interactions': 'off',
		'import/prefer-default-export': 'off',
		'no-console': 'off',
	},
};
