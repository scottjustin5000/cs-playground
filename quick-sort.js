/*
*  recursive, divide and conquer
*  [4, 2, 6, 5, 3, 9]
*  1. base case if array.length === 1, return array (array of 1 is sorted)
*  2. call quicksort for the first time --> quickSort([4, 2, 6, 5, 3, 9], 0, array.length-1)
*  3. partition --> find the middle point of the array (index 3, value 5)
*  4. loop while out left index id less than or equal to our right index
*  5. while the values moving through the array (from left to right) are less than 3, increment out left index pointer
*  6. 4 < 5 -shift, 2 < 5 -shift, 6 > 5 -stop 
*  5. while the values moving through the array (from right to left) are greater than 3, increment out left index pointer
*  6. 9 > 5 -shift, 3 < 5 stop
*  7. if pointers don't match, swap positions (the 6 and the 3, index 2 with index 4) and move both pointers
*  8. [4, 2, 3, 5, 6, 9]
*  9. after previous pointer increments, the pointers are equal (5,5) stop
* 10. return the position of the left pointer (4)
* 11. if the passed in left pointer position is < than the returned pointer position (index) -1, recusively call quickSort([4, 2, 3, 5, 6, 9], 0, index-1)
* 12. if the the returned pointer position (index) is < than the passed in right pointer position, recusively call quickSort([4, 2, 3, 5, 6, 9], index, right)
* 13. continue recursively partitioning the left and right parts of the array until the entire array is sorted. The left and right parts of the array are determined by the index returns after each partition operation.
*/
function swap(items, lp, rp) {
	var temp = items[lp];
		items[lp] = items[rp];
		items[rp] = temp;
}

function partition(items, lp, rp) {
	var middle = items[Math.floor((lp + rp) / 2)];
	while (lp <= rp) {
		while (items[lp] < middle) {
			lp++;
		}
		while (items[rp] > middle) {
			rp--;
		}
		// if the two indices still don't match, swap the values
		if (lp <= rp) {
			swap(items, lp, rp);
			// change indices to continue loop
			lp++;
			rp--;
		}
	}
	return lp;
}

//partition that skips middle and just works 
//right most as pivot point
// function partition (array, lp, rp) {
// 		var q = lp;
// 		for (var j = lp + 1;  j < rp; j++) {
// 				if (array[j] <= array[rp]) {
// 						swap(array, j, q);
// 						q++;
// 				}
// 		}
// 		swap(array, rp, q);
// 		return q;
// }

function quickSort(items, left, right) {
	
		if (items.length === 1) {
			return items;
		}

		var index = partition(items, left, right);
		if (left < index - 1) {
			quickSort(items, left, index - 1);
		}
		if (index < right) {
			quickSort(items, index, right);
		}
		return items;
}
module.exports = {
	sort:quickSort
}