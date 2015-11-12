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
			jasmine.expect(times([1, 2])).toEqual([2]);
		});
	});

});