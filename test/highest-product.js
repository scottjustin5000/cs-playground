var HighestProduct = require('../highest-product');

describe('test highest-product', function() {
	it('should find highest product of 3, approach one', function(done) {
		var highestProduct3 = HighestProduct.get([1, 10, -5, 1, -100]);
		highestProduct3.should.equal(5000);
		done();
	});
	it('should find highest product of 3, approach two', function(done) {
		var highestProduct3 = HighestProduct.get2([1, 10, -5, 1, -100]);
		highestProduct3.should.equal(5000);
		done();
	});
});