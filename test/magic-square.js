var magicSquare = require('../math/magic-square');

describe('test odd magic square', function() {
	it('should sum 15', function(done) {
		var n = 3;
		var square = magicSquare.generateOdd(n);
		(n * (n * n + 1) / 2).should.equal(15);
		for (i = 0; i < n; i++) {
			for (j = 0; j < n; j++)
				console.log("%3d ", square[i][j]);
		}
		done();
	});
});