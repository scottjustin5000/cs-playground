/*
* divide and conquer. 
* 1. create n number of one item arrays where n is the total number of items in the array. 
* 2. combine the one item arrays back into a single sorted array.
*/
function mergeSort(items) {
	 if (items.length === 1) {
        return items;
    }
	var middle = Math.floor(items.length/2);
	var array1 = items.slice(0, middle);
	var array2 = items.slice(middle);
	return merge(mergeSort(array1), mergeSort(array2)); 
}

function merge(array1, array2) {
	var merged = [];
	var array1Index = 0;
	var array2Index = 0;

	while(array1Index < array1.length && array2Index < array2.length) {
		if(array1[array1Index] < array2[array2Index]) {
			merged.push(array1[array1Index]);
			array1Index++;
		}else{
			merged.push(array2[array2Index]);
			array2Index++;
		}
	}
	return merged.concat(array1.slice(array1Index), array2.slice(array2Index));
}

module.exports ={
	sort:mergeSort
}

