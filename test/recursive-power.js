var recursivePow = require('../recursion/recursive-pow');

describe('test recursive pow', function() {
	it('pow(3,0) should = 1', function(done){
		var result = recursivePow.power(3,0);
		result.should.equal(1);
		done();
	});
	it('pow(3,1) should = 3', function(done){
		var result = recursivePow.power(3,1);
		result.should.equal(3);
		done();
	});
	it('pow(3,2) should = 9', function(done){
		var result = recursivePow.power(3,2);
		result.should.equal(9);
		done();
	});
	it('pow(3,-1) should = 1/3', function(done){
		var result = recursivePow.power(3,-1);
		result.should.equal(0.3333333333333333);
		done();
	});
});