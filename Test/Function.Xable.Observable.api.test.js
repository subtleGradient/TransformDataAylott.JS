// -*- Mode: JavaScript QUnit; tab-width: 4; -*-
if (typeof API != 'object') var API = {};
API ["Function.Xable.Observable"] = function(XOble){
	
	test ("fires the 'changed' event", function(){
		
		var myValue = 123.456
		var newValue = 789
		var xo = XOble(myValue)
		var changed = false;
		
		ok( xo.addEvent )
		ok( xo.addEvent('changed', function(){ changed = true }) )
		ok(! changed )
		
		xo.setValue(newValue)
		
		ok( changed )
		
	})
	
	test ("fires the 'changed' event only when the value actually changed", function(){
		
		var myValue = 123.456
		var newValue = 789
		var xo = XOble(myValue)
		var changed = false;
		
		ok( xo.addEvent )
		ok( xo.addEvent('changed', function(){ changed = true }) )
		ok(! changed )
		
		changed = false;
		xo.setValue(myValue)
		
		ok(! changed )
		
		changed = false;
		xo.setValue(String(myValue), "Must use strict comparison to determine when to fire")
		ok( changed )
		
		changed = false;
		xo.setValue(newValue)
		ok( changed )
		
	})
	
	test ("fires the 'changed:transformerKey' event for named transformers", function(){
		
		var myValue = 123.456
		var newValue = 789
		var xo = XOble(myValue);
		ok( xo.addEvent )
		
		var changed = false;
		xo.addEvent('changed:key', function(){ changed = true })
		ok(! changed )
		
		changed = false;
		xo.defineTransformer('key',function(value){return value})
		ok( changed )
		
		changed = false;
		xo.setValue(myValue)
		ok(! changed )
		
		changed = false;
		xo.setValue(String(myValue), "Must use strict comparison to determine when to fire")
		ok( changed )
		
		changed = false;
		xo.setValue(newValue)
		ok( changed )
		
	})
	
};


