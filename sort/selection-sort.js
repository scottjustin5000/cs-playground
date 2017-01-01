/*
*  [8,4,9,2]
*  1. start with 8 (index 0)
*  2. find index of min (to the right of index 0)...which is index 3 (value 2)
*  3. swap values at index 0 with value at index 3
*  4. [2,4,9,8]
*  5. next loop 4 (index 1)
*  6. 2. find index of min (to the right of index 1)...there is nothing lower than current value 4
*  7. [2,4,9,8]
*  8. next loop 9 (index 2)
*  9. find index of min (to the right of index 2)...which is index 3 (value 8)
* 10. [2,4,8,9]
*/
function swap(array, firstIndex, secondIndex) {
	var temp = array[firstIndex];
	array[firstIndex] = array[secondIndex];
	array[secondIndex] = temp;
}

//get the index of the (next) min value in array
function indexOfMinimum(array, startIndex) {

	var minValue = array[startIndex];
	var minIndex = startIndex;

	for(var i = minIndex + 1; i < array.length; i++) {
		if(array[i] < minValue) {
			minIndex = i;
			minValue = array[i];
		}
	} 
	return minIndex;
}

function sort(array) {
	//loop through the array
	for(var i = 0; i < array.length; i++) {
		//get the index of the next min in array
		var index = indexOfMinimum(array, i);
		//swap the position of the current value with the min value
		swap(array, i, index);
	}
}

module.exports = {
	sort: sort
}
