module.exports = {
	getOverlap: function(rect1, rect2) {

		function findOverlap(point1, distance1, point2, distance2) {

			var highestPoint = Math.max(point1, point2);

			var lowestPoint = Math.min((point1 + distance1), (point2 + distance2));

			//no overlap
			if(highestPoint >= lowestPoint) {
				return;
			}

			var overlapDistance = lowestPoint - highestPoint;

			return { start: highestPoint, distance: overlapDistance };

		}

		var xOverlap = findOverlap(rect1.leftX, rect1.width, rect2.leftX, rect2.width);
		var yOverlap = findOverlap(rect1.bottomY, rect1.height, rect2.bottomY, rect2.height);

		if(!xOverlap || !yOverlap) {
			return;
		}

		return {
			leftX: xOverlap.start,
			width: xOverlap.distance,
			bottomY: yOverlap.start,
			height: yOverlap.height 
		};
	}
}