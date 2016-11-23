module.exports = {
	bottomUpNthFibonacci: function(n) {
		var arr = [0,1];
		function search(i) {
			if(i > n) {
				return;
			}else{
				arr.push(arr[i-2] + arr[i-1]);
				search(i+1);
			}
		}
		search(2);
		return arr[n];
	},
	topDownNthFibonacci : function(n) {
		var result;
		function search(i) {
			if(i<2){
				return i;
			} else {
				return search(i-2) + search(i-1);
			}
		}
		result = search(n);
		return result;
	},
	memoNthFibonacci: function(n) {
		var memo = {};

		function search(index) {
			var value;
			if(memo[index]){
				value = memo[index];
			} else if (index === 0 || index === 1) {
				value = index;
			} else {
				value = search(index - 1) + search(index - 2);
				memo[n] = value;
			}
			return value;
		}
		return search(n);
	},
	iterativeNthFibonacci: function(n) {
		if(n === 0 || n === 1) {
			return n;
		}
		var prevPrev = 0;
    	var prev = 1;
    	var current;

    	for (var x = 2; x <= n; x++) {
        	current = prev + prevPrev;
        	prevPrev = prev;
        	prev = current;
    	}

    	return current;
	}
}
