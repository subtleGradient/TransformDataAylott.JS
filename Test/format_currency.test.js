// -*- Mode: JavaScript QUnit; tab-width: 4; -*-

module ('formatCurrency')

test ("Should exist", function(){ expect (1)
	
	ok (formatCurrency)
	
})

test ("Number to String", function(){
	
	equal( formatCurrency(.0), '$0');
	equal( formatCurrency(0), '$0');
	equal( formatCurrency(10), '$10.00');
	equal( formatCurrency(10.01), '$10.01');
	equal( formatCurrency(0.5), '$0.50');
	
})

test ("Round Floats", function(){
	
	equal( formatCurrency(.0000000000000000000000001), "$0.00")
	equal( formatCurrency(10.0000000000000000000000001), "$10.00")
	
	equal( formatCurrency(0.005), "$0.01")
	equal( formatCurrency(0.004), "$0.00")
	equal( formatCurrency(0.004999999999), "$0.00")
	equal( formatCurrency(0.004999999999999), "$0.01")
	
})

test ("String to String", function(){
	
	equal( formatCurrency('.0'), '$0');
	equal( formatCurrency('0'), '$0');
	equal( formatCurrency('10'), '$10.00');
	equal( formatCurrency('10.01'), '$10.01');
	
	equal( formatCurrency('$.0'), '$0');
	equal( formatCurrency('$0'), '$0');
	equal( formatCurrency('$10'), '$10.00');
	equal( formatCurrency('$10.01'), '$10.01');
	
	equal( formatCurrency('$ .0'), '$0', "Space after '$'");
	equal( formatCurrency('$ 0'), '$0', "Space after '$'");
	equal( formatCurrency('$ 10'), '$10.00', "Space after '$'");
	equal( formatCurrency('$ 10.01'), '$10.01', "Space after '$'");
	equal( formatCurrency("$ .5"), '$0.50');
	
})


test ("Big Numbers", function(){
	
	equal( formatCurrency(1000), "$1,000.00" )
	equal( formatCurrency(1000000), "$1,000,000.00" )
	equal( formatCurrency(1000000000), "$1,000,000,000.00" )
	
})
