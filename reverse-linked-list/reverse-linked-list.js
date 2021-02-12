/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    //console.log(head.next.next)
    
    let current = head
    let previous = null
    
    while (current) { // 1
        const temp = current.next // 2
        current.next = previous // null
        previous = current // 1
        current = temp // 2
        //console.log(previous)
    }
    
    return previous
    
//     const newNode = new ListNode(5, null)
//     const newNode1 = new ListNode(8, newNode)
//     console.log(newNode1)
    
};