var meetingMerge = require('../exercises/meeting-merge');

describe('test meeting merge', function() {
	
	it('should merge 2 meetings', function(done) {
		
		var times = [{start: 2, end: 4}, {start: 3, end: 9}];
		var merged = meetingMerge.merge(times);
		merged.should.have.property('length', 1);
		merged[0].should.have.property('start', 2);
		merged[0].should.have.property('end', 9);

		done();
	});

	it('should merge 5 meetings to 2', function(done) {
		
		var times = [{start: 1, end: 10}, {start: 2, end: 6}, {start: 3, end: 5}, {start: 11, end: 13}, {start: 7, end: 9}];
		var merged = meetingMerge.merge(times);
		merged.should.have.property('length', 2);
		merged[0].should.have.property('start', 1);
		merged[0].should.have.property('end', 10);

		merged[1].should.have.property('start', 11);
		merged[1].should.have.property('end', 13);

		done();
	});
});