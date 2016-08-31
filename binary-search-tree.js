var BinaryTreeNode = require('./binary-tree-node');

function BinarySearchTree(value) {
	var self = this;
	self.root = new BinaryTreeNode(value);
	return self;
}

 BinarySearchTree.prototype.insert = function(value) {
	 var current = this.root;
	 while (true) {
		 //if the new value is less than this node's value, go left
		 if (value < current.value) {
			 //if there's no left, then the new node belongs there
			 if (!current.left) {
					current.left = new BinaryTreeNode(value);
					break;
			 } else {
				//update current and continue through the loop
				 current = current.left;
			 }
			 //if the new value is greater than this node's value, go right
		 } else if (value > current.value) {
			 //if there's no right, then the new node belongs there
			 if (!current.right) {
				 current.right = new BinaryTreeNode(value);
				 break;
			 } else {
				//update current and continue the process
				 current = current.right;
			 }
			 //if the new value is equal to the current one, just ignore
		 } else {
			 break;
		 }
	 }
 };

 BinarySearchTree.prototype.remove = function(value) {
	var current = this.root;
	var found = false;
	var parent;
		 //make sure there's a node to search
	 while (!found && current) {
		 //if the value is less than the current node's, go left
		 if (value < current.value) {
			 parent = current;
			 current = current.left;
			 //if the value is greater than the current node's, go right
		 } else if (value > current.value) {
			 parent = current;
			 current = current.right;
			 //values are equal, found it!
		 } else {
			 found = true;
		 }
	 }
	 if (!found) {
		 return;
	 }
	var childCount = (current.left ? 1 : 0) + (current.right ? 1 : 0);
	var replacement;
	var replacementParent;
	if(current === this.root){
		if(childCount === 0){
			this.root = null;
			return;
		}
		if(childCount === 1) {
			this.root = current.left || current.right;
		}
		else {
			replacement = current.left;
			//if there is a right, we need to go get the right most node and set that as the parent;
			if(replacement.right){
				var replacementParent; //this should be renamed to previous parent --> this is really what it will be b/c we will have to actually remove the node from the parent
				while(replacement.right) {
					replacementParent = replacement;
					replacement = replacement.right;
				}
				//here we have to delete/replace the replacement node from its original position
				//if the replacement node has a left, we shift those values to the previous parents right.
				replacementParent.right = replacement.left;
				replacement.right = current.right;
				replacement.left = current.left;
			}else{
				replacement.right = current.right;
			}
			this.root = replacement;
		}
	}
	else{
		//deal with non root
		if(childCount === 0){
			if(parent.value < current.value) {
				parent.left = null;
			}else{
				parent.right = null;
			}
		}else if(childCount === 1){
			//if current value is less than parent, we will reset the left point
			//if we have a valid bst, then we know this will always work (and result in a valid bst)
			if(parent.value < current.value){
				parent.left = current.left ? current.left : current.right;
			}else{
				parent.right = current.left ? current.left : current.right;
			}
		}else{
			replacementParent = current;
			replacement = current.left;
			//same as when working with root, we look for rightmost for "real new root"
			while(replacement.right){
				replacementParent = replacement;
				replacement = replacement.right;
			}
			//here we need to make sure our replace is removed from the the existing nodes
			//here replacementParent contains the replacement...which is soon to be the new parent...to avoid 
			//a circular structure we need to remove the new parent from the tree (we replace with its children...to break the chain)
			if(replacementParent.right === replacement) {
				replacementParent.right = replacement.left;
			}else{
				 //replacement will be on the left when the left most subtree
				 //of the node to remove has no children to the right
				replacementParent.left = replacement.left;
			}
			 //assign children to the replacement
			replacement.right = current.right;
			replacement.left = current.left;
			//place the replacement in the right spot
			if (current.value < parent.value) {
				parent.left = replacement;
			} else {
				parent.right = replacement;
			}

		}
	}
};

BinarySearchTree.prototype.nodeHeight = function(node) {
	if (!node) {
		return 0;
	}
	 /* If tree is not empty then height = 1 + max of left
			height and right heights */
	return 1 + Math.max(this.nodeHeight(node.left), this.nodeHeight(node.right));
};

BinarySearchTree.prototype.height = function() {
	return this.nodeHeight(this.root);
};

BinarySearchTree.prototype.isBalanced = function() {
	var _this = this;
	function nodeBalanced(node) {
		 /* If tree is empty then return true */
		if (!node.left && !node.right) {
			return true;
		}

		/* Get the height of left and right sub trees */
		var lh = _this.nodeHeight(node.left);
		var rh = _this.nodeHeight(node.right);
		if (Math.abs(lh - rh) <= 1 && nodeBalanced(node.left) && nodeBalanced(node.right)) {
			return true;
		}
		/* If we reach here then tree is not height-balanced */
		return false;
	};

	return nodeBalanced(this.root);
};

BinarySearchTree.prototype.contains = function(value) {
	var current = this.root;
	var found = false;
	while(current && !found) {
		if(current.value === value){
			found = true;
		}
		if(value < current.value) {
			current = current.left;
		} else {
			current = current.right;
		}
	}
	return found;
};

BinarySearchTree.prototype.size = function(){
		var length = 0;  
		function traverse(node){
			if (node) {		
				length++;	
				//traverse the left subtree
				if (node.left !== null) {
					traverse(node.left);
				}           
				//traverse the right subtree
				if (node.right !== null) {
					traverse(node.right);
				}
			}        
		}
		traverse(this.root);  
		return length;
};

module.exports = BinarySearchTree;

