
module.exports = {
	/* 
	*	blocks of time in 30 min blocks for each hour after 9AM
	*	times = [
	*		{start: 2, end: 3}, //10 - 10:30
	* 		{start: 6, end: 9}  //12 -1:30
	*		];
	*/
	merge: function(times) {
		//brute
		var merged = [];
		//order meetings by starting time
		var ordered = times.sort(function(a, b){
    		return a.start > b.start ? 1 : -1;
		});

		var merged = [ordered[0]];

		for(var i = 1; i < ordered.length; i++) {

			var previous = merged[merged.length-1];
			var current = ordered[i];
			//if the current meeting starts before first ends, merge
			if(previous.end >= current.start) {
				//merge and set end to the later end time.
				previous.end = Math.max(previous.end, current.end);
			} else{
				//otherwise add to array
				merged.push(current)
			}
		}
		return merged;
	}
}