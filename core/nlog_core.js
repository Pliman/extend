(function() {
	nlog = function() {
	};

	// 空函数继承的多重继承前面的prototype会被覆盖掉
	nlog.extend = function(child, parent,configuration) {
		for ( var i = 1, length = arguments.length; i < length; i+=2) {
			console.log(i);
			nlog._extend(child, arguments[i], arguments[i + 1]);
		}
	};

	nlog._extend = function(child, parent, configuration) {
		var fn = function(){};
		
		fn.prototype = parent.prototype;
		
		//child.prototype = new fn();
		
		// 使用空函数原型克隆来实现继承
		for(k in fn.prototype){
			child.prototype[k] = fn.prototype[k]
		}
		
		child.prototype.constructor = child;
		
		parent.call(child, configuration);
	};
	
	$_ = nlog;
})();