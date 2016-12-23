/*
* array [4,3,5,7,9]
* 1. compare 4 to 3, 4 is greater than 3, swap positions
* 2. [3,4,5,7,2,9]
* 3. compare 4 to 5, 4 is not greater than 5, move to  he next position
* 4. [3,4,5,7,2,9]
* 5. compare 5 to 7, 5 is not gtreater 7, move to the next position
* 6. [3,4,5,7,2,9]
* 7. compare 7 to 2, 7 is greater than 2, swap positions
* 8. [3,4,5,2,7,9]
* 9. compare 7 to 9, 7 is not greater than 9
* 10. repeat until we end up with [2,3,4,5,7,9]
*/

module.exports = {
	sort: function(items) {
		var previous = 0;
		var length = items.length;
		while (length > 0) {
			for (var i = 1; i < length; i++) {
				if (items[previous] > items[i]) {
					var temp = items[previous];
					items[previous] = items[i];
					items[i] = temp;
				}
				previous++;
			}
			length--;
			previous = 0;
		}
		return items;
	},
	sort2 : function(items) {
		var temp;
		var endIndex = items.length;
		while(endIndex--) {
			for(var i = 0; i < items.length; i++) {
				if(items[i] > items[i+1]) {
					var temp = items[i];
					items[i] = items[i+1];
					items[i+1] = temp;
				}
			}
		}
		return items;
	}
}
