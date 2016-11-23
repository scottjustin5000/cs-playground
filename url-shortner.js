module.exports = {
	execute: function(value, alpha) {
		var result = '';
		var base = alpha.length;
		while(value > 0) {
			var remainder = value % base;
			result = alpha[remainder-1] + result;
			value = Math.floor(value/base);
		}
		return result;
	}
}