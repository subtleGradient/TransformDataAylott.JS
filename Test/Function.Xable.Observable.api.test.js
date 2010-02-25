// -*- Mode: JavaScript QUnit; tab-width: 4; -*-
if (typeof API != 'object') var API = {};
API ["Function.Xable.Observable"] = function(XOble){
	
	test ("fires the 'change' event", function(){
		
		var myValue = 123.456
		var newValue = 789
		var xo = XOble(myValue)
		var change = false;
		
		ok( xo.addEvent )
		ok( xo.addEvent('change', function(){ change = true }) )
		ok(! change )
		
		xo.setValue(newValue)
		
		ok( change )
		
	})
	
	test ("fires the 'change' event only when the value actually change", function(){
		
		var myValue = 123.456
		var newValue = 789
		var xo = XOble(myValue)
		var change = false;
		
		ok( xo.addEvent )
		ok( xo.addEvent('change', function(){ change = true }) )
		ok(! change )
		
		change = false;
		xo.setValue(myValue)
		
		ok(! change )
		
		change = false;
		xo.setValue(String(myValue), "Must use strict comparison to determine when to fire")
		ok( change )
		
		change = false;
		xo.setValue(newValue)
		ok( change )
		
	})
	
	test ("fires the 'change:transformerKey' event for named transformers", function(){
		
		var myValue = 123.456
		var newValue = 789
		var xo = XOble(myValue);
		ok( xo.addEvent )
		
		var change = false;
		xo.addEvent('change:key', function(){ change = true })
		ok(! change )
		
		change = false;
		xo.defineTransformer('key',function(value){return value})
		ok( change )
		
		change = false;
		xo.setValue(myValue)
		ok(! change )
		
		change = false;
		xo.setValue(String(myValue), "Must use strict comparison to determine when to fire")
		ok( change )
		
		change = false;
		xo.setValue(newValue)
		ok( change )
		
	})
	
};


