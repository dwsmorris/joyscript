/*globals define*/

define(function () {
	return function (stack) {
		stack.push(
			stack.pop() *
			stack.pop()
		);

		return stack;
	};
});