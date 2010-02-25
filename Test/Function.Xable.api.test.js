// -*- Mode: JavaScript QUnit; tab-width: 4; -*-
if (typeof API != 'object') var API = {};
API ["Function.Xable"] = function(Xable){
	
	test ("Should transform value using transformers.value function", function(){
		
		var myValue = 123.456;
		var transformable = Xable(myValue);
		
		equal(transformable().value, myValue)
		
		transformable.transformers.value = function(value){
			return "a different value";
		}
		
		notEqual(transformable().value, myValue)
		
	})
	
	test ("Should allow nested transformers", function(){
		
		var myValue = 0;
		var newValue = 4
		
		var transformable = myValue;
		transformable = Xable(transformable).defineTransformer('value', function(value){ return value + 1; });
		equal(transformable().value, 1)
		
		transformable = Xable(transformable).defineTransformer('value', function(value){ return value + 1; });
		equal(transformable().value, 2)
		
		transformable = Xable(transformable).defineTransformer('value', function(value){ return value + 1; });
		equal(transformable().value, 3)
		
		transformable = Xable(transformable).defineTransformer('value', function(value){ return value + 1; });
		console.log(transformable());
		equal(transformable().value, 4)
		
		equal(transformable().value, newValue)
		
	})
	
	test ("Casting to types", function(){
		
		var myValue = 123.456;
		var transformable = Xable(myValue);
		
		equal(transformable().value, myValue)
		equal(typeof transformable().value, typeof myValue)
		
		var newValue = "123.456";
		transformable.transformers.value = String;
		
		notStrictEqual(transformable().value, myValue)
		notEqual(typeof transformable().value, typeof myValue)
		
		strictEqual(transformable().value, newValue)
		equal(typeof transformable().value, typeof newValue)
		
	})
	
	test ("Casting to types: Number", function(){
		
		var myValue = "0xff";
		var transformable = Xable(myValue);
		
		equal(transformable().value, myValue)
		equal(typeof transformable().value, typeof myValue)
		
		var newValue = 0xFF;
		transformable.transformers.value = parseInt;
		
		notStrictEqual(transformable().value, myValue)
		notEqual(typeof transformable().value, typeof myValue)
		
		strictEqual(transformable().value, newValue)
		equal(typeof transformable().value, typeof newValue)
		
	})
	
	test ("Casting to types: Currency", function(){
		
		var myValue = 1000.000000000000000000000000001;
		var transformable = Xable(myValue);
		
		equal(transformable().value, myValue)
		equal(typeof transformable().value, typeof myValue)
		
		var newValue = "$1,000.00";
		transformable.transformers.value = formatCurrency;
		
		notStrictEqual(transformable().value, myValue)
		notEqual(typeof transformable().value, typeof myValue)
		
		strictEqual(transformable().value, newValue)
		equal(typeof transformable().value, typeof newValue)
		
	})
	
	test ("blank value on creation", function(){
		
		var myValue = 1000.000000000000000000000000001;
		var transformable = Xable();
		transformable.setValue(myValue);
		
		equal(transformable().value, myValue)
		equal(typeof transformable().value, typeof myValue)
		
		var newValue = "$1,000.00";
		transformable.transformers.value = formatCurrency;
		
		notStrictEqual(transformable().value, myValue)
		notEqual(typeof transformable().value, typeof myValue)
		
		strictEqual(transformable().value, newValue)
		equal(typeof transformable().value, typeof newValue)
		
	})
	
	test ("new operator and no arguments", function(){
		
		var myValue = 1000.000000000000000000000000001;
		var transformable = new Xable;
		transformable.setValue(myValue);
		
		equal(transformable().value, myValue)
		equal(typeof transformable().value, typeof myValue)
		
		var newValue = "$1,000.00";
		transformable.transformers.value = formatCurrency;
		
		notStrictEqual(transformable().value, myValue)
		notEqual(typeof transformable().value, typeof myValue)
		
		strictEqual(transformable().value, newValue)
		equal(typeof transformable().value, typeof newValue)
		
	})
	
	test ("setTransformer method sets the transformers.value", function(){
		
		var myValue = 1000.000000000000000000000000001;
		var newValue = "$1,000.00";
		var transformable = Xable(myValue).setTransformer(formatCurrency);
		
		strictEqual(transformable().value, newValue)
		equal(typeof transformable().value, typeof newValue)
		
	})
	
	test ("defineTransformer(key, transformer) method sets the transformers[key] to transformer", function(){
		
		var myValue = 1000.000000000000000000000000001;
		var newValue = "$1,000.00";
		var transformable = Xable(myValue).defineTransformer('value', formatCurrency);
		
		strictEqual(transformable().value, newValue)
		equal(typeof transformable().value, typeof newValue)
		
	})
}




