var conversions = require('../exercises/conversions');

describe('test string conversions', function() {
	it('should convert string to int', function(done){
		
		var three_three = conversions.stringToInt('33');
		three_three.should.be.an.instanceOf(Number);
		three_three.should.equal(33);
		done();
	});
	it('should convert string to float', function(done){
		
		var three_three_point = conversions.stringToFloat('33.033');
		three_three_point.should.be.an.instanceOf(Number);
		three_three_point.should.equal(33.033);
		done();
	});
});