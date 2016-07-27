/*
 * class.js 2013-2-20
 * copyright NHN China Co.,LTD
 */

/**
 * provide class inherit feature
 * 
 * @author <a href="mailto:sunbin@nhn.com">Pliman</a>
 * @version 1.0 2013-2-20 14:46:45
 * @since business_server 1.0.8
 */

var create = function() {
	var args = _toArray(arguments);

	if (args.length === 0) {
		return function() {
		};
	}

	// get parent
	var parent = args[0];
	var clazz = null;
	if (typeof parent != 'function') {
		clazz = function() {
		};
	} else {
		args.shift(0);
		// invoker parent initialize method
		clazz = function() {
			parent.apply(this, arguments);
		};
		clazz.prototype = new parent();
	}

	// mixin
	for ( var i = 0, length = args.length; i < length; i++) {
		// can mixin instance of class(function),but not class(function) itself.
		_deepCopy(clazz.prototype, args[i]);
	}
	clazz.prototype.constructor = clazz;

	return clazz;
};

// convert an object into array
function _toArray(iterable) {
	if (!iterable)
		return [];
	if ('toArray' in Object(iterable))
		return iterable.toArray();
	var length = iterable.length || 0, results = new Array(length);
	while (length--)
		results[length] = iterable[length];
	return results;
}

// overwrite target with source in deep mode
function _deepCopy(target, source) {
	var target = target || {};

	for ( var k in source) {
		var v = source[k];
		if (typeof v === "object") {
			target[k] = (v.constructor === Array) ? [] : {};
			_deepCopy(target[k], v);
		} else {
			target[k] = v;
		}
	}

	return target;
}