// 'this' means, every functions, while executing, has a reference to its current execution context, called this.
// There are four binding rules to bind 'this' keyword to different execution contexts.
// The precedence of these four rules is 1.new 2.explicit binding 3.implicit binding 4.default

//Default: when function invoked as normal function, its this is binding to global object.
function utility(){
	console.log(this+'\n');
}

utility();

//Implicit Binding: when function invoked as method of an object, this implicitly binds with object that function is called on.
var myObj = {
	name: "myObj",
	myMethod : function print(){
		console.log(this);
		console.log('\n');
	}
};

myObj.myMethod();

//Explicit Binding: when function invoked by Function.call() or Function.apply() methods, a explicit this is passing into function.
var passinObj = {
	name : "passinObj"
};

function bar(){
	console.log(this);
	console.log('\n');
}

bar.apply(passinObj);

//New keyword with Constructor invocation: when function used as constructor by adding prefix new, a new created object is assigned to this.
var createStuff = function(){
	this.name = "newObject";
	console.log(this);
	console.log('\n');
};

new createStuff();

