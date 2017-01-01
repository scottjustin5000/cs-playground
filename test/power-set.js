var powerSet = require('../recursion/power-set');

describe('test recursive power set', function() {
	it('return powerset for abc', function(done){
		var str = 'abc';  
		var expected = [ '', 'c', 'b', 'bc', 'a', 'ac', 'ab', 'abc' ];
		var set = powerSet.recursive(str);
		set.should.be.instanceOf(Array);
		set.should.have.property('length', expected.length);
		set[0].should.equal('');
		set[1].should.equal('c');
		set[2].should.equal('b');
		set[3].should.equal('bc');
		set[4].should.equal('a');
		set[5].should.equal('ac');
		set[6].should.equal('ab');
		set[7].should.equal('abc');
		done();
	});
	it('return powerset for abca', function(done){
		var str = 'abca';  
		var set = powerSet.recursive(str);
		var expected = [ '','a','c','ca','b','ba','bc','bca','aa','aca','aba','abca' ];
		set.should.be.instanceOf(Array);
		set.should.deepEqual(expected);
		done();
	});
});

describe('test bit shift power set', function() {
	it('return powerset (bit shift) for abc', function(done){
		var str = 'abc';  
		var expected = [ '', 'c', 'b', 'bc', 'a', 'ac', 'ab', 'abc' ];
		var set = powerSet.bin(str);
		set.should.be.instanceOf(Array);
		set.should.have.property('length', expected.length);
		set[0].should.equal('');
		set[1].should.equal('c');
		set[2].should.equal('b');
		set[3].should.equal('bc');
		set[4].should.equal('a');
		set[5].should.equal('ac');
		set[6].should.equal('ab');
		set[7].should.equal('abc');
		done();
	});
	it('return powerset (bit shift) for abc', function(done){
		var str = 'abca';  
		var set = powerSet.bin(str);
		var expected = [ '','a','c','ca','b','ba','bc','bca','aa','aca','aba','abca' ];
		set.should.be.instanceOf(Array);
		set.should.deepEqual(expected);
		done();
	});
});