/*globals define*/

define([
	"jasmine",
	"jys_number"
], function(
	jasmine,
	number
) {

	jasmine.describe("jys_number", function() {
		jasmine.it("2 [1] => [1 2]", function () {
			jasmine.expect(number(2, [1])).toEqual([1, 2]);
		});

		jasmine.it("2.5 [1] => [1 2.5]", function () {
			jasmine.expect(number(2.5, [1])).toEqual([1, 2.5]);
		});
	});

});