/*globals define*/

define([
	"jasmine",
	"jys_dot"
], function(
	jasmine,
	dot
) {

	jasmine.describe(".", function() {
		jasmine.it("[1, 2] => [1, 2]", function () {
			var stack = [1, 2];

			dot(stack);

			jasmine.expect(stack).toEqual([1, 2]);
		});

		jasmine.it("[1, 2] => console output", function () {
			var stack = [1, 2];

			jasmine.spyOn(console, "log");

			dot(stack);

			jasmine.expect(console.log).toHaveBeenCalledWith([2]);
		});
	});

});