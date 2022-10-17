const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  node;
  constructor(){
    this.node = new ListNode();
  }

  getUnderlyingList() {
    return this.node;
   let current = this.node;
  while (current.next !== null){
    if(current.next === null) return current;
   else current = current.next;
  }
  }

  enqueue(value) {
    if (this.node.value === undefined) {this.node = new ListNode(value) ;                                        
     }
    else {
      let current = this.node;
      while (current.next){
        current = current.next;
      }
      current.next = new ListNode(value);
    }
  }

  dequeue() {
    let current = this.node;
    if (current.next !== null) this.node = current.next;
    else this.node = new ListNode();
    return current.value;
  }
}

module.exports = {
  Queue
};
