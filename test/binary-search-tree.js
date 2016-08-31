var BinarySearchTree = require('../binary-search-tree');

describe('test binary search tree', function() {

	describe('test insert', function(){
		it('should insert single', function(done) {
			var tree = new BinarySearchTree(100);
			tree.insert(90);
			var size = tree.size();
			size.should.equal(2);
			done();
		});
		it('should insert multiple', function(done) {
			var tree = new BinarySearchTree(100);
			tree.insert(80);
			tree.insert(90);
			var size = tree.size();
			size.should.equal(3);
			done();
		});
		it('should insert multiple w/o duplicates', function(done) {
			var tree = new BinarySearchTree(100);
			tree.insert(80);
			tree.insert(90);
			tree.insert(90);
			var size = tree.size();
			size.should.equal(3);
			done();
		});
	});

	describe('test contains', function(){
		it('should find value 80', function(done) {
			var tree = new BinarySearchTree(100);
			tree.insert(80);
			tree.insert(90);
			var contains = tree.contains(80);
			contains.should.equal(true);
			done();
		});
		it('should not find 70', function(done) {
			var tree = new BinarySearchTree(100);
			tree.insert(80);
			tree.insert(90);
			var contains = tree.contains(70);
			contains.should.equal(false);
			done();
		});

	});

	describe('test remove', function(){
		it('should remove root node', function(done) {
			var tree = new BinarySearchTree(100);
            tree.insert(110);
			tree.insert(90);
			tree.insert(120);
			tree.insert(80);
			tree.insert(130);
			tree.insert(70);
			tree.insert(140);
			tree.insert(60);
			tree.insert(95);
			tree.insert(94);
			tree.insert(65);
			tree.insert(50);
			tree.insert(97);
			
			tree.remove(100);
			var size = tree.size();
			size.should.equal(13);
			tree.root.value.should.equal(97);
			done();
		});

		it('should remove middle node', function(done) {
			var tree = new BinarySearchTree(100);
			tree.insert(110);
			tree.insert(90);
			tree.insert(120);
			tree.insert(80);
			tree.insert(130);
			tree.insert(70);
			tree.insert(140);
			tree.insert(60);
			tree.insert(95);
			tree.insert(94);
			tree.insert(65);
			tree.insert(50);
			tree.insert(97);
			tree.insert(96);
			
			tree.remove(60);
			var size = tree.size();
			var contains = tree.contains(60);
			contains.should.equal(false);
			contains = tree.contains(65); //<--60's right node
			contains.should.equal(true);
			//console.log(JSON.stringify(tree));
			done();
		});
	});

});