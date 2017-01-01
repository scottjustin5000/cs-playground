var bstChecker = require('../data-structures/bst-checker');
var BinarySearchTree = require('../data-structures/binary-search-tree');

describe('test bstChecker', function() {
	var root;
	before(function(done) {
		root = new BinarySearchTree(100);
 		root.insert(110);
		root.insert(90);
		root.insert(120);
		root.insert(80);
		root.insert(130);
		root.insert(70);
		root.insert(140);
		root.insert(60);
		root.insert(95);
		root.insert(94);
		root.insert(65);
		root.insert(50);
		done();
	});
	describe('test valid bst', function() {
		it('should return valid tree = true', function(done){
			var valid = bstChecker.isValid(root.root);
			valid.should.equal(true);
			done();
		})
	});
});




