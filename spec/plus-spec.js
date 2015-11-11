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
			var stack = [1, 2];

			plus(stack);

			jasmine.expect(stack).toEqual([3]);
		});
	});

});