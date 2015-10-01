
//IIFE Pattern used to return single module object.
var moduleManager = (function SingleModule(){
	//internal data representation, can be any forms.
	var privateDataStructure;
	//A bunch of private helper functions interacting with data and public API functions.
	var privateHelperFunction1 = function(){};
	var privateHelperFunction2 = function(){};
	var privateHelperFunctionN = function(){};

//Returning public API object, which moduleManger refers to after IIFE invocation.
	var publicAPI = {
		API1 : function() {
			privateHelperFunction1(privateDataStructure);
		},
		API2 : function() {
			privateHelperFunction2();
		},
		APIN : function() {
			privateHelperFunctionN();
		}
	};

	return publicAPI;

})();


//Without IIFE Pattern, used to return multiple module object.
var moduleFactory = function Factory(){
	//internal data representation, can be any forms.
	var privateDataStructure;
	//A bunch of private helper functions interacting with data and public API functions.
	var privateHelperFunction1 = function(){};
	var privateHelperFunction2 = function(){};
	var privateHelperFunctionN = function(){};

//Returning public API object, which moduleManger refers to after IIFE invocation.
//it can return a named object like previous publicAPI object or just return a plain object literal containing public API.
	return {
		API1 : function() {
			privateHelperFunction1(privateDataStructure);
		},
		API2 : function() {
			privateHelperFunction2();
		},
		APIN : function() {
			privateHelperFunctionN();
		}
	};

};

//Using factory to produce more than one module instance.
var module1 = moduleFactory();
var module2 = moduleFactory();
var module3 = moduleFactory();