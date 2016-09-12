var Queue = require('./queue');


module.exports = {
	doBFS: function(graph, source) {
		var bfsInfo = [];

		for (var i = 0; i < graph.length; i++) {
			bfsInfo[i] = {
				distance: null,
				predecessor: null
			};
		}
		bfsInfo[source].distance = 0;

		var queue = new Queue();
		queue.enqueue(source);
		// Traverse the graph
		while (!queue.isEmpty()) {
			// As long as the queue is not empty:
			//  Repeatedly dequeue a vertex u from the queue.
			//  For each neighbor v of u that has not been visited:
			//  Set distance to 1 greater than u's distance
			//  Set predecessor to u
			//  Enqueue v	
			var vertex = queue.dequeue();
			for (var i = 0; i < graph[vertex].length; i++) {
				var j = graph[vertex][i];
				if (bfsInfo[j] && !bfsInfo[j].distance) {
					bfsInfo[j].distance = bfsInfo[vertex].distance + 1;
					bfsInfo[j].predecessor = vertex;
					queue.enqueue(j);
				}
			}
		}
		return bfsInfo;
	}
}
