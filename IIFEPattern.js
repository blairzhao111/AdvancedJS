
var foo = "foo in global scope";

//IIFE PATTERN, immediately invoked function expression, it's a named/anonymous function expression invoked itself immediately.
//the goal for using this pattern is to create a new lexcial scope for hiding your variables and functions which are unnecessaryly exposed to global scope.

//wrap function literal into parentheses to make it a function expression rather than function declaration.
(function IIEF(){

	//now inside IIFE, a brand new function scope is provided.
	var foo = "foo in function scope by using IIFE to create a new scope";
	console.log(foo);

})();

console.log(foo);