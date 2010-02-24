/*
---
provides    : Function.from
description : Lambda with mutable value
...
*/
if (typeof exports == 'undefined') var exports = this;


exports.Function.from = function(value){
	lambda.value = value;
	function lambda(){
		var value = lambda.value;
		if (typeof value == 'function')
			return value();
		return value;
	}
	return lambda;
};


