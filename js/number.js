/*globals define*/

define(function () {
	return function (number, stack) {
		stack.push(number);

		return stack;
	};
});