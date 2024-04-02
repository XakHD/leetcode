// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.

 

// Example 1:

// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6
// Example 2:

// Input: lists = []
// Output: []
// Example 3:

// Input: lists = [[]]
// Output: []
 

// Constraints:

// k == lists.length
// 0 <= k <= 104
// 0 <= lists[i].length <= 500
// -104 <= lists[i][j] <= 104
// lists[i] is sorted in ascending order.
// The sum of lists[i].length will not exceed 104.

//My Solution

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

class MinHeap {
    constructor() {
        this.heap = [];
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    parent(i) {
        return Math.floor((i - 1) / 2);
    }

    left(i) {
        return 2 * i + 1;
    }

    right(i) {
        return 2 * i + 2;
    }

    getMin() {
        return this.heap[0];
    }

    insert(node) {
        this.heap.push(node);
        let current = this.heap.length - 1;
        while (current !== 0 && this.heap[current].val < this.heap[this.parent(current)].val) {
            this.swap(current, this.parent(current));
            current = this.parent(current);
        }
    }

    extractMin() {
        const minimum = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        let current = 0;
        while (this.left(current) < this.heap.length) {
            let smaller = this.left(current);
            if (this.right(current) < this.heap.length && this.heap[this.right(current)].val < this.heap[this.left(current)].val) {
                smaller = this.right(current);
            }
            if (this.heap[smaller].val > this.heap[current].val) {
                break;
            }
            this.swap(smaller, current);
            current = smaller;
        }
        return minimum;
    }
}

var mergeKLists = function(lists) {
    const minHeap = new MinHeap();
    for (let list of lists) {
        if (list) {
            minHeap.insert(list);
        }
    }

    const dummy = new ListNode();
    let current = dummy;
    while (minHeap.heap.length) {
        const minimum = minHeap.extractMin();
        current.next = minimum;
        current = current.next;
        if (minimum.next) {
            minHeap.insert(minimum.next);
        }
    }
    return dummy.next;
};