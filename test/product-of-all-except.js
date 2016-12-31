var productOfAll = require('../product-of-all-except');
describe('test product of all except self', function() {
	it('should return ordered list', function(done){
		var prods = productOfAll.get([5,6,9,1]);
		prods[0].should.equal(54);
		prods[1].should.equal(45);
		prods[2].should.equal(30);
		prods[3].should.equal(270);
		done();
	});
});
