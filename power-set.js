module.exports = {
//var str = 'abc';  
//      level 0   ----->                  ''
//                                   /           \
//                                  /             \
//      level 1  ------->         ''              'a'
//                              / \               /  \
//                             /   \             /    \
//      Level 2  ------->    ''   'b'        'a'    'ab' 
//                          / \     / \       / \     /\
//                        /   \    /   \     /   \   /  \
//      Level 3  -------> ''   'c' 'b'  'bc' 'a' 'ac' 'ab' 'abc'


	recursive: function(str) {
		
		var results = [];
		var hash = {};
		var length = str.length;
		
		function traverse(input, depth) {
			if(depth === length) {
				var val = input.split('').sort().join('');
				if(!hash[val]) { 
					results.push(input);
					hash[val] = 1;
				}
				return;
			}
			//left
			traverse(input, depth+1);
			//right
			traverse(input + str[depth], depth+1);
		}
		traverse('', 0);

		return results;
	},
	
	bin: function(str) {

		function pad(s, size) {
			while (s.length < (size || 2)) {s = "0" + s;}
			return s;
		}

		var result = [];
		var length = str.length;
		var hash = {};

		var setSize = Math.pow(2, str.length);
	
		for(var i = 0; i < setSize; i++) {
			//converting to base 2 and padding 0s to length of string
			var bin = pad((i >>> 0).toString(2), length);
			var val = '';
			for(var j = 0; j < bin.length; j++) {
				//taking advantage of js comparisons here (i.e. == vs ===)
				if(bin[j] == 1) {
					val += str[j];
				}
			}
			var sorted = val.split('').sort().join('');
			if(!hash[sorted]) { 
				result.push(val);
				hash[sorted] = 1;
			}
		}
		return result;
	}

}



