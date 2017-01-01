var UrlShortner = require('../exercises/url-shortner');

describe('test url shortner abcdefghij', function() {
	it('should shorten 123 = abc', function(done){
		
		var short = UrlShortner.execute(123, 'abcdefghij');
		short.should.equal('abc');
		done();
	})
});
