/*globals define*/

define(function (require) {

	return {
		paths: {
			"jys_ramda": require.toUrl("./dependencies/ramda/dist/ramda"),
			"jys_jasmine": require.toUrl("./dependencies/jasmine/lib/jasmine-core/jasmine"),
			"jys_jasmine-html": require.toUrl("./dependencies/jasmine/lib/jasmine-core/jasmine-html"),
			"jys_boot": require.toUrl("./dependencies/jasmine/lib/jasmine-core/boot"),
			"jys_plus": require.toUrl("./js/plus"),
			"jys_times": require.toUrl("./js/times"),
			"jys_dot": require.toUrl("./js/dot")
		},
		shim: {
			'jys_jasmine': {
				exports: 'window'
			},
			'jys_jasmine-html': {
				deps: ['jys_jasmine'],
				exports: 'jasmine'
			},
			'jys_boot': {
				deps: ['jys_jasmine-html'],
				exports: 'jasmine'
			}
		}
	};
});
