// -*- Mode: JavaScript QUnit; tab-width: 4; -*-
if (typeof API != 'object') var API = {};
API ["Function.transformable"] = function(Function_transformable){
	
	test ("Should transform value using transformer function", function(){
		
		var myValue = 123.456;
		var transformable = Function_transformable(myValue);
		
		equal(transformable(), myValue)
		
		transformable.transformer = function(value){
			return "a different value";
		}
		
		notEqual(transformable(), myValue)
		
	})
	
	test ("Should allow nested transformers", function(){
		
		var myValue = 123.456;
		var transformable = Function_transformable(Function_transformable(myValue));
		
		equal(transformable(), myValue)
		
		var newValue = "a different value";
		transformable.value.transformer = function(value){
			return newValue;
		}
		
		notEqual(transformable(), myValue)
		equal(transformable(), newValue)
		
	})
	
	test ("Casting to types", function(){
		
		var myValue = 123.456;
		var transformable = Function_transformable(myValue);
		
		equal(transformable(), myValue)
		equal(typeof transformable(), typeof myValue)
		
		var newValue = "123.456";
		transformable.transformer = String;
		
		notStrictEqual(transformable(), myValue)
		notEqual(typeof transformable(), typeof myValue)
		
		strictEqual(transformable(), newValue)
		equal(typeof transformable(), typeof newValue)
		
	})
	
	test ("Casting to types: Number", function(){
		
		var myValue = "0xff";
		var transformable = Function_transformable(myValue);
		
		equal(transformable(), myValue)
		equal(typeof transformable(), typeof myValue)
		
		var newValue = 0xFF;
		transformable.transformer = parseInt;
		
		notStrictEqual(transformable(), myValue)
		notEqual(typeof transformable(), typeof myValue)
		
		strictEqual(transformable(), newValue)
		equal(typeof transformable(), typeof newValue)
		
	})
	
	test ("Casting to types: Currency", function(){
		
		var myValue = 1000.000000000000000000000000001;
		var transformable = Function_transformable(myValue);
		
		equal(transformable(), myValue)
		equal(typeof transformable(), typeof myValue)
		
		var newValue = "$1,000.00";
		transformable.transformer = formatCurrency;
		
		notStrictEqual(transformable(), myValue)
		notEqual(typeof transformable(), typeof myValue)
		
		strictEqual(transformable(), newValue)
		equal(typeof transformable(), typeof newValue)
		
	})
	
	test ("setTransformer method sets the transformer", function(){
		
		var myValue = 1000.000000000000000000000000001;
		var newValue = "$1,000.00";
		var transformable = Function_transformable(myValue).setTransformer(formatCurrency);
		
		strictEqual(transformable(), newValue)
		equal(typeof transformable(), typeof newValue)
		
	})
	
	test ("valueOf method", function(){
		
		var myValue = 1000.000000000000000000000000001;
		var newValue = "$1,000.00";
		var transformable = Function_transformable(myValue).setTransformer(formatCurrency);
		
		strictEqual(transformable.valueOf(), newValue)
		equal(typeof transformable.valueOf(), typeof newValue)
		
		var valueOf = false
		transformable.setTransformer(function(){ valueOf = true })
		-transformable
		ok( valueOf );
		
	})
	
}




