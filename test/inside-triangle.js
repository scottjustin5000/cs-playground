var insideTriangle = require('../inside-triangle');

describe('test inside-triangle', function() {
	it('should return true', function(done) {

		var alpha = {x: 15, y: 15};
		var beta = {x: 23, y: 30};
		var gamma = {x: 50, y: 35};

		var isInside = insideTriangle.get(alpha, beta, gamma, {x:25, y: 25});

		isInside.should.equal(true);

		done();
	});
});
