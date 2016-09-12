function Queue() {
	this.items = [];
};
Queue.prototype.enqueue = function(obj) {
	this.items.push(obj);
};
Queue.prototype.dequeue = function() {
	return this.items.shift();
};
Queue.prototype.isEmpty = function() {
	return this.items.length === 0;
};

module.exports = Queue;