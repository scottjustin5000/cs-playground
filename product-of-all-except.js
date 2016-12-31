/***

product of all except at a given index
for example, [1, 7, 3, 4]
should return [84,12,28,21]
***/


module.exports = {
	get: function(input) {
		var results = [];
		var productBefore = 1;
		//get the product of all after index
		for(var i = 0; i < input.length; i++) {
			results.push(productBefore);
			productBefore *= input[i];

		}
		//loop through the array backwards to get our results
		var productAfter = 1;
		for(var j = input.length -1; j >= 0; j--) {
			results[j] *= productAfter;
			productAfter *= input[j];
		}
		return results;
	}
}
