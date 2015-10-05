
//the goal for hard binding is to give you guarantee that your specified function's this is always binding to what do you want.
//Bind function receives a function and an object then binds them together.
function bind(func, obj) {
	return function() {
		func.call(obj);
	};
}

var foo = function() {
	console.log(this.bar);
}

var obj1 = { bar : "bar in obj1"};
var obj2 = { bar : "bar in obj2"};

//bind foo function with object one
foo = bind(foo,obj1);

foo();
foo.call(obj2); //foo's this would be obj1 even when explicit binding is used and passin object is different from obj1.

//For more convenient usage, binding method can be augmented into Function object.
if(!Function.prototype.bind2) {
	Function.prototype.bind2 = function(obj){
		var func = this;
		return function(){
			return func.apply(obj,arguments);
		};
	};
}

