/*
---
provides    : Function.Xable
description : Lambda with multiple mutable data transformers
requires    : Function.from
...
*/
(function(exports){

var X = exports.Function.Xable = function(privateValue){
	xable.transformers = {
		value: function(value){return value}
	};
	var result = X.result;
	function xable(){
		var results = new result(privateValue);
		for (var transformerName in xable.transformers){
			results[transformerName] = xable.transformers[transformerName]( results[transformerName] || results.value );
		}
		xable.results = results;
		return xable.results;
	}
	xable.defineTransformer = function(transformerName, transformer){
		xable.transformers[transformerName] = transformer;
		xable.setValue(privateValue);
		return xable;
	}
	xable.setTransformer = function(transformer){
		xable.transformers.value = transformer;
		return xable;
	}
	xable.setValue = function(newValue){
		privateValue = newValue;
		return xable;
	}
	xable.valueOf = function(){
		return xable().value;
	}
	return xable;
};

exports.Function.Xable.result = function(value){
	this.value = value;
	value = Function.from(value)();
	if (value instanceof X.result){
		for (var property in value){
			this[property] = value[property];
		}
	}
};

})(typeof exports != 'undefined' ? exports : this);


