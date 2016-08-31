
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

	}
}
