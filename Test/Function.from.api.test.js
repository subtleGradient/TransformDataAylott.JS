// -*- Mode: JavaScript QUnit; tab-width: 4; -*-
if (typeof API != 'object') var API = {};
API ["$lambda"] = function($lambda){
	
	test ('Exists',function(){ok( $lambda )})	
	
	test ("returns function for non-function values", function(){
		
		var myValue = 123.456;
		var myValue_lambda = $lambda( myValue );
		
		equal( myValue_lambda(), myValue )
		
	});
	
	test ("returns function for function values", function(){
		
		var myValue = function(){ return 123.456 };
		var myValue_lambda = $lambda( myValue );
		
		equal( myValue_lambda(), myValue() )
		
	});
	
}



// -*- Mode: JavaScript QUnit; tab-width: 4; -*-
if (typeof API != 'object') var API = {};
API ["Function.from"] = function(Function_from){
	
	test ('Exists', function(){ok( Function_from )})
	
	test ("Masks the original fn value", function(){
		
		var myValue = function(){ return 123.456 };
		var myValue_transformable = Function_from( myValue );
		
		equal( myValue_transformable(), myValue() )
		notEqual( myValue_transformable, myValue, "Must not return the original value");
		
	});
	
	test ("Can get the value as a property", function(){
		
		var myValue = 123.456;
		var myValue_transformable = Function_from( myValue );
		
		equal( myValue_transformable.value, myValue )
		
	});
	
	test ("Can change the value later", function(){
		
		var myValue = 123.456;
		var myValue_transformable = Function_from( myValue );
		
		equal( myValue_transformable(), myValue )
		
		var newValue = 789;
		myValue_transformable.value = newValue;
		
		notEqual( myValue_transformable.value, myValue )
		notEqual( myValue_transformable(), myValue )
		
		equal( myValue_transformable.value, newValue )
		equal( myValue_transformable(), newValue )
		
	});
	
}



