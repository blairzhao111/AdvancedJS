//Before ES6, there are only two scopes in JS, global and function scope.
//Javascript lexcail scope model is decided at compiled time.
//Variables and functions declarations happen at compiled time, assignments and function invocations happen at run time.

// foo is a LHS
var foo = "foo_global"; //varibale foo here has global scope

//function declaration requires that function keyword must be the first apperance in the statement. 
//function desclaration in compilation is treated as an entire unit, including parameter list and function body.
//compiler will recursively enter nested functions, compile any declarations and keep record about their scopes.
function bar(){

	var foo = "foo_bar"; //foo here has function scope belonging to function bar. Local foo here would shadow global foo.

	//function baz has same scope level with previous variable foo, they both belong to scope of function bar.
	function baz(foo){   //parameters are implicitly declared variables.
		foo = "foo_baz";
		console.log(foo);
	}

	baz();
	console.log(foo); 
//Javascript scope model will always look for matches in its current scope, if they are not existing, go fishing at one more upper level.
//scope chain is one-way chain, you can only go upper level, like function level to global level, but reverse is not allowed.
}

//Right here, bar is a RHS 
bar();
console.log(foo);

//this is a function experession, differentiate from function declaration, variable expression is registered into global scope
//but function identifer mar is registered into its own scope, in this case, functiion scope mar.
//also, if it is a function expression, during compiled time, compiler would not check function body, 
//which means it can not be called before its own declaring during runtime. Bescause its identifer doesn't belong to outer scope
//in this case, global scope and already declared variable doesn't have refering value before assignment.

var expression = function mar(){

};

//catch clause has block scope since ES3.
try {

} catch(err){

}