﻿/*globals require, window*/

require.config({
	baseUrl: "./",
	paths: {
		"ramda": "./dependencies/ramda/dist/ramda",
		"jasmine": "./dependencies/jasmine/lib/jasmine-core/jasmine",
		"jasmine-html": "./dependencies/jasmine/lib/jasmine-core/jasmine-html",
		"boot": "./dependencies/jasmine/lib/jasmine-core/boot"
	},
	shim: {
		'jasmine': {
			exports: 'window'
		},
		'jasmine-html': {
			deps: ['jasmine'],
			exports: 'jasmine'
		},
		'boot': {
			deps: ['jasmine-html'],
			exports: 'jasmine'
		}
	}
});

// Load Jasmine - This will still create all of the normal Jasmine browser globals unless `boot.js` is re-written to use the
// AMD or UMD specs. `boot.js` will do a bunch of configuration and attach it's initializers to `window.onload()`. Because
// we are using RequireJS `window.onload()` has already been triggered so we have to manually call it again. This will
// initialize the HTML Reporter and execute the environment.
require(["./config"], function (config) {

	require.config(config);

	// Load the specs
	require(['boot'], function (
    ) {
		require([
			"./spec/plus-spec",
			"./spec/times-spec",
			"./spec/dot-spec",
			"./spec/number-spec"
		], function (
		) {
			// Initialize the HTML Reporter and execute the environment (setup by `boot.js`)
			window.onload();
		});
	});

});
