var fib = require('../fibonacci');

describe('test fibonacci', function() {
	it('should perform bottom up', function(done) {
		var fibVal = fib.bottomUpNthFibonacci(5);
		fibVal.should.equal(5);
		done();
	});
	it('should perform top down', function(done) {
		var fibVal = fib.topDownNthFibonacci(5);
		fibVal.should.equal(5);
		done();
	});
	it('should perform memoized', function(done) {
		var fibVal = fib.memoNthFibonacci(5);
		fibVal.should.equal(5);
		done();
	});
	it('should perform iterative', function(done) {
		var fibVal = fib.iterativeNthFibonacci(5);
		fibVal.should.equal(5);
		done();
	});

});
