var ListNode = require('list-node');

function LinkedList (){
var self = this;
self.head;
self.tail;
self.length = 0;

}

LinkedList.prototype.append = function(value) {
	if(!this.length) {
		this.head = new ListNode(value);
		this.tail = head;
	} else{
		this.tail.next = new ListNode(value);
		this.tail = this.tail.next;
	}
	this.length++;
	
};

LinkedList.prototype.insert = function(value, searchValue) {
	var work = this.head;

	while(work) {
		if(work.value == searchValue) {
			var ref = work.next;
			work.next = new ListNode(value);
			work.next.next = ref;

			if(!ref) {
				//when search val is the tail
				//reasign tail
				this.tail = work.next;
			}
			this.length++;
			return;
		}
		work = work.next;
	}
	console.log("not found...");
	
};


LinkedList.prototype.delete = function(location) {
	//1. linked list is a single element, trying to remove 0
	if(location === 0 && this.length ===0) {
		this.head = null;
		this.tail = null;
		this.length = 0;
		return;
	}

	//2. > 1 element, trying to remove the 0th
	if(location == 0) {
		this.head = this.head.next;
		this.length--;
		return;
	}

	var work = this.head;
	var counter = 0;

	while(work) {
		//3. removing the last
		if(counter == (location - 1) && work.next && work.next == this.tail) {
			work.next = work.next.next;
			this.tail = work;
			this.length--;
			return;
		}
		//4. list > 1, not removing head or tail
		else if(counter == (location -1) && work.next){
			work.next = work.next.next;
			this.length--;
			return;

		}
		counter++;
		work = work.next;
	}
	console.log("not found...");
};

LinkedList.prototype.contains = function(value) {

	var work = this.head;

	while(work) {
		if(work.value === value) {
			return true;
		}
		work = work.next;
	}

	return false;
};

module.exports = LinkedList;