/*
---
provides    : Function.transformable
description : Lambda with mutable data transformer
requires    : Function.from
...
*/
if (typeof exports == 'undefined') var exports = this;

exports.Function.transformable = function(value){
	transformableLambda.value = value;
	transformableLambda.transformer = function(value){return value};
	function transformableLambda(){
		return transformableLambda.transformer(Function.from(transformableLambda.value)());
	}
	transformableLambda.valueOf = transformableLambda;
	transformableLambda.setTransformer = function(transformer){
		transformableLambda.transformer = transformer;
		return transformableLambda;
	}
	return transformableLambda;
};


