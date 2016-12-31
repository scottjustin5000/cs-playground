var BoyerMoore = require('../boyer-moore');

describe('test boyer-moore search', function() {

	var alphaNumeric = 'abcdefghijklmnopqrstuvwxyz0123456789';

	it('should return index ', function(done) {

		var bm = new BoyerMoore();
		var index = bm.search(alphaNumeric, 'z0123');
		index.should.equal(25);
		done();
	});
});