var a = function() {
	this.a = function() {
		alert('a')
	};
};
a.prototype.aa = function() {
	alert('aa')
};

var b = function() {
	this.b = function() {
		alert('b')
	};
};

b.prototype.bb = function() {
	alert('bb')
};
b.prototype.bbb = {
	bbb : 'bbb'
};
var c = function() {
	this.c = function() {
		alert('c')
	};
};
c.prototype.cc = function() {
	alert('cc')
};

var d = function() {
	this.d = function() {
		alert('d')
	};
};
d.prototype.dd = function() {
	alert('dd')
};
d.prototype.ddd = {
	ddd : 'ddd'
};

$_.extend(a, b, null, c, null, d, null)
// console.log(a);
alert(a.b);
alert(a.prototype.bb);
// alert(new a().bb);
alert(a.prototype.bbb);
alert(a.prototype.bbb.bbb);
// alert(a.c);
// alert(new a().cc);
// alert(a.prototype.dd);
alert(new a().dd);
alert(a.prototype.ddd);
alert(a.prototype.ddd.ddd);

// $_._extend(a, b,null);

// alert(a.b);
// alert(a.bb);
// alert(a.prototype.bb);
// alert(new a().bb);
