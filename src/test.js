(function(window, undefined){
	function add(a, b){
		var c = 0;
		a = a + c;		// c 未定义
		return a + b;	// 没写分号
	}
})(window);