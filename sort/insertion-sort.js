/*
*  [8,4,9,2]
*  1. start with 4 (as we start at index 1)
*  2. 4 is less than 8, so move 8 to the right and 4 to the left.
*  3. [4,8,9,2]
*  4. next loop 9
*  5. 9 is not less than 8, so keep in place
*  6. [4,8,9,2]
*  7. next loop 2,
*  8. 2 is less than 9 --> move 9 to the right
*  9. 2 is less than 8 --> move 8 to the right
* 10. 2 is less than 4 --> move to the right
* 11. there is nothing to the left, add 2 to index 0
* 12. [2,4,8,9]
*/
function insert(array, rightIndex, value) {
	//loop through array, starting at passed in index, loop while j is greater than or equal to 0 
	//AND the value of the array at index j is greater than the passed in value
    for(var j = rightIndex; j >= 0 && array[j] > value; j--) {
    	//continue to greather than values to the right (to make room for our less than value)
        array[j + 1] = array[j];
    }   
    //insert our "less than sort"
    array[j + 1] = value; 
}

function sort(array) {
	//loop through array
	for(var i = 1; i < array.length; i++) {
		insert(array, i-1, array[i]);
	}
}

function sort2(array) {
	for(var i = 0; i < array.length; i++) {
		var temp = array[i];
		var pointer = i;
		while(pointer > 0 && temp < array[pointer-1]) {
			array[pointer] = array[pointer-1];
			pointer--;
		}
		array[pointer] = temp;
	}
	return array;
}

module.exports = {
	sort: sort
}