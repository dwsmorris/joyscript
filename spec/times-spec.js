/*globals define*/

define([
	"jasmine",
	"jys_times"
], function(
	jasmine,
	times
) {

	jasmine.describe("*", function() {
		jasmine.it("[1, 2] => [2]", function () {
			var stack = [1, 2];

			times(stack);

			jasmine.expect(stack).toEqual([2]);
		});
	});

});