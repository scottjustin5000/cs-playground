/*
Find the highest product of any three ints in an array.
Brute force would be to create nested loops and would cost O(n^3)
The approaches below are both O(n).

The first approach just loops through the
array and updates several values:
the highest product of 3
the highest product of 2
the lowest product of 2 (need to handle negatives)
the lowest number
the highest number
the order that each of these are updated matters


The second approach is very similiar but a bit more explicit
We loop through the array updating several variables
highest number
second highest number
third highest number
lowest number (need to handle negative numbers)
second lowest number (need to handle negative numbers)

finally we compare 
highest number * second highest number * third highest number
to 
highest number * lowest number * second lowest number

*/

module.exports = {
	get: function(arr) {
		
		var highestProduct3 = arr[0]*arr[1]*arr[2];
		var highestProduct2 = arr[0]*arr[1];
    	var lowestProduct2 = arr[0]*arr[1];
    	var highest = Math.max(arr[0], arr[1]);
    	var lowest = Math.min(arr[0], arr[1]);
    	var start = 2;
		
		for(var i = start; i < arr.length; i++) {
			var current = arr[i];
			
			highestProduct3 = Math.max(highestProduct3, current * highestProduct2, current * lowestProduct2);
			highestProduct2 = Math.max(highestProduct2, current * highest, current * lowest);
			lowestProduct2 = Math.min(lowestProduct2, lowest * current, highest * current);
			
			lowest = Math.min(current, lowest);
			highest = Math.max(current, highest, lowest);
			
		}

		return highestProduct3;
		
	},
	get2: function(input) {

		var highestNumber = 0;
		var secondHighestNumber = 0;
		var thirdHighestNumber = 0;
		var lowestNumber = 0;
		var secondLowestNumber =0;

		for(var i = 0; i < input.length; i++) {
			if(input[i] > highestNumber) {
				thirdHighestNumber = secondHighestNumber;
				secondHighestNumber = highestNumber;
				highestNumber = input[i];
			} else if(input[i] > secondHighestNumber) {
				thirdHighestNumber = secondHighestNumber;
				secondHighestNumber = input[i];
			} else if(input[i] > thirdHighestNumber) {
				thirdHighestNumber = input[i];
			} else if(input[i] < lowestNumber) {
				secondLowestNumber = lowestNumber;
				lowestNumber = input[i];
			} else if(input[i] < secondLowestNumber) {
				secondLowestNumber = input[i];
			}
		}

		var lowestProduct = (lowestNumber * secondLowestNumber * highestNumber);
		var highestProduct = (highestNumber * secondHighestNumber * thirdHighestNumber);

		return lowestProduct > highestProduct ? lowestProduct : highestProduct; 
	}
}