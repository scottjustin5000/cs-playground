
module.exports ={
	isValid: function(treeRoot, lowerBound, upperBound) {
	lowerBound = lowerBound || -Infinity;
	upperBound = upperBound ||  Infinity;

	if (!treeRoot) return true;

	if (treeRoot.value > upperBound || treeRoot.value < lowerBound) {
		return false;
	}
	return this.isValid(treeRoot.left, lowerBound, treeRoot.value) &&
		   this.isValid(treeRoot.right, treeRoot.value, upperBound);

	},
	findInRange: function(node, start, end) {
	   
	   if(!node) {
		return 0;
	   }

	   if(node.value > start && node.value < end) {	
	   		return 1 + this.findInRange(node.left, start, end) + this.findInRange(node.right, start, end);
	   } else if(node.value >= end) {
	   	//if the value is greater than the end range, we try the left
	   		return this.findInRange(node.left, start, end);

	   } else {
	   	//else if the value is less than start range, we try the right side
	   		return this.findInRange(node.right, start, end);
	   }
	},
	areSame: function(node1, node2) {

		if(!node1 && node2) {
			return true;
		} else if(!node1 || !node2) {
			return false;
		}

		return this.areSame(node1.left, node1.right) && this.areSame(node2.left, node2.right);
	},
	nextInOrder: function(node) {
		
	}
}
