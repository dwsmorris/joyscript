/*globals define*/

define([
	"jasmine",
	"jys_plus"
], function(
	jasmine,
	plus
) {

	jasmine.describe("+", function() {
		jasmine.it("[1, 2] => [3]", function () {
			jasmine.expect(plus([1, 2])).toEqual([3]);
		});
	});

});