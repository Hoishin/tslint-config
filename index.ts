export = {
	rules: {
		// TypeScript-specific
		'adjacent-overload-signatures': true,
		'no-any': true,
		'no-inferrable-types': true,
		'no-unnecessary-type-assertion': true,
		'no-var-requires': true,
		'only-arrow-functions': true,
		'prefer-for-of': true,
		'promise-function-async': true,
		'unified-signatures': true,

		// Functionality
		'await-promise': true,
		'ban-comma-operator': true,
		forin: true,
		'label-position': true,
		'no-arg': true,
		'no-conditional-assignment': true,
		'no-duplicate-super': true,
		'no-duplicate-switch-case': true,
		'no-duplicate-variable': true,
		'no-dynamic-delete': true,
		'no-eval': true,
		'no-floating-promises': true,
		'no-for-in-array': true,
		'no-inferred-empty-object-type': true,
		'no-invalid-template-strings': true,
		'no-invalid-this': true,
		'no-misused-new': true,
		'no-null-keyword': true,
		'no-object-literal-type-assertion': true,
		'no-return-await': true,
		'no-shadowed-variable': true,
		'no-sparse-arrays': true,
		'no-string-literal': true,
		'no-string-throw': true,
		'no-unbound-method': true,
		'no-unnecessary-class': true,
		'no-unsafe-any': true,
		'no-unsafe-finally': true,
		'no-unused-expression': true,
		'no-use-before-declare': true,
		'no-var-keyword': true,
		'no-void-expression': true,
		'prefer-object-spread': true,
		radix: true,
		'restrict-plus-operands': true,
		'triple-equals': true,
		'use-default-type-parameter': true,
		'use-isnan': true,

		// Maintainability
		'cyclomatic-complexity': [true, 10],
		deprecation: true,
		'linebreak-style': [true, 'LF'],
		'max-classes-per-file': [true, 1],
		'no-default-export': true,
		'no-duplicate-imports': true,
		'no-mergeable-namespace': true,
		'no-require-imports': true,
		'prefer-const': true,
		'prefer-readonly': true,

		// Style
		'array-type': [true, 'array-simple'],
		'arrow-return-shorthand': true,
		'binary-expression-operand-order': true,
		'callable-types': true,
		'class-name': true,
		encoding: true,
		'interface-over-type-literal': true,
		'no-angle-bracket-type-assertion': true,
		'no-boolean-literal-compare': true,
		'no-irregular-whitespace': true,
		'no-parameter-properties': true,
		'no-redundant-jsdoc': true,
		'no-unnecessary-callback-wrapper': true,
		'no-unnecessary-initializer': true,
		'number-literal-format': true,
		'object-literal-key-quotes': [true, 'as-needed'],
		'object-literal-shorthand': true,
		'one-variable-per-declaration': true,
		'ordered-imports': [
			true,
			{
				'import-sources-order': 'case-insensitive',
				'grouped-imports': false,
				'named-imports-order': 'case-insensitive',
				'module-source-path': 'full',
			},
		],
		'prefer-function-over-method': true,
		'prefer-method-signature': true,
		'prefer-switch': true,
		'prefer-template': true,
		'prefer-while': true,
		'return-undefined': true,
	},
};
