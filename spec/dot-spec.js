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
			jasmine.expect(dot([1, 2])).toEqual([1, 2]);
		});

		jasmine.it("[1, 2] => console output", function () {
			jasmine.spyOn(console, "log");

			dot([1, 2]);

			jasmine.expect(console.log).toHaveBeenCalledWith(2);
		});
	});

});