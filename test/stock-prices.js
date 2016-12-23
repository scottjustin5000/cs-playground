var StockPrices = require('../stock-prices');

describe('test Stock Price finder', function() {
	it('should find max profit', function(done) {
		var profit = StockPrices.profit([10, 7, 5, 8, 11, 9]);
		profit.should.equal(6);
		done();
	});
	it('should find max profit when prices decrease all day', function(done) {
		var profit = StockPrices.profit([10, 9, 8, 7, 6, 5]);
		profit.should.equal(-1);
		done();
	});
	it('should find min profit', function(done) {
		var loss = StockPrices.loss([10, 7, 5, 8, 11, 9]);
		loss.should.equal(5);
		done();
	});
});