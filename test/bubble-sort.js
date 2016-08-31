var BubbleSort = require('../bubble-sort');

describe('test bubble sort', function() {
	it('should sort data (bubble)', function(done){
		var arr = [7,3,9,1,6,5];
		BubbleSort.sort(arr);
		arr[0].should.equal(1);
		arr[1].should.equal(3);
		arr[2].should.equal(5);
		arr[3].should.equal(6);
		arr[4].should.equal(7);
		arr[5].should.equal(9);
		done();
	})
});
