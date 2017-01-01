var search = require('../search/graph-breadth-first');

describe('test breadth first search', function() {
	it('should set nearest neighbor, distance from root', function(done) {
		var adjList = [
			[1],
			[0, 4, 5],
			[3, 4, 5],
			[2, 6],
			[1, 2],
			[1, 2, 6],
			[3, 5],
			[]
		];
		var bfsInfo = search.doBFS(adjList, 3);
		bfsInfo[0].should.have.property('distance', 4);
		bfsInfo[0].should.have.property('predecessor', 1);
		bfsInfo[1].should.have.property('distance', 3);
		bfsInfo[1].should.have.property('predecessor', 4);
		bfsInfo[2].should.have.property('distance', 1);
		bfsInfo[2].should.have.property('predecessor', 3);
		bfsInfo[3].should.have.property('distance', 2);
		bfsInfo[3].should.have.property('predecessor', 2);
		bfsInfo[4].should.have.property('distance', 2);
		bfsInfo[4].should.have.property('predecessor', 2);
		bfsInfo[5].should.have.property('distance', 2);
		bfsInfo[5].should.have.property('predecessor', 2);
		bfsInfo[6].should.have.property('distance', 1);
		bfsInfo[6].should.have.property('predecessor', 3);
		done();
	});
})
