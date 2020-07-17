// Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.
// class ListNode {
//   constructor(val = null, next = null) {
//     this.val = val;
//     this.next = next;
//   }
// }

//Start with a dummy node to begin the list 3 - dummy.next to get the actual head of the L3

var mergeTwoLists = function(l1, l2) {
  let dummyHead = new ListNode(0);

  //reference to dummy is going to keep changing
  // cur is list 3
  let cur = dummyHead;

  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      cur.next = l1;
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2 = l2.next;
    }

    //move on the next node of the dummyHead
    cur = cur.next;
  }

  //If the next values are null for either list, append the remaining
  if (l1 !== null) {
    cur.next = l1;
  }
  if (l2 !== null) {
    cur.next = l2;
  }

  return dummyHead.next;
};

//create a new head/ dummy node
//compare the two lists, and whichever one is smaller, then add it to the head/list
//keep going and then appending to the head
console.log(mergeTwoLists([1, 2, 4, 5, 6], [3, 4, 6, 7, 8]));
