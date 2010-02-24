/*
---
provides    : Function.Xable.Observable
description : Lambda with multiple mutable data transformers. Implements Events. Fires "changed" when the value changes
requires    : 
- Function.Xable
# MooTools
- core/1.2:Function
- core/1.2:Events
...
*/
(function(exports, X, Events){

exports.Function.Xable.Observable = function(value){
	var Observable = X(value);
	Observable.extend(new Events);
	var old_setValue = Observable.setValue;
	var oldValues = Observable();
	Observable.setValue = function(newValue){
		var newValues = old_setValue(newValue)();
		for (var key in newValues){
			if (newValues[key] !== oldValues[key])
				Observable.fireEvent('changed' + (key == 'value' ? '' : ':'+key), [newValues[key], key, newValues]);
		}
		oldValues = newValues;
		return Observable;
	}
	return Observable;
};

})(
	typeof exports != 'undefined' ? exports : this,
	exports.Function.Xable,
	Events
);

