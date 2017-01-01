var mergeSort = require('../sort/merge-sort');
describe('test merge-sort', function() {
	describe('test unordered list', function() {
		it('should return ordered list', function(done){
			var sorted = mergeSort.sort([5,6,9,8,1,6,3,21,2,4]);
			sorted[0].should.equal(1);
			sorted[1].should.equal(2);
			sorted[2].should.equal(3);
			sorted[3].should.equal(4);
			sorted[4].should.equal(5);
			sorted[5].should.equal(6);
			sorted[6].should.equal(6);
			sorted[7].should.equal(8);
			sorted[8].should.equal(9);
			sorted[9].should.equal(21);
			done();
		})
	});
});
