/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    //the challenge here is to find what index is n but from the start of the list, since we cannot go through it backward and we don't know the length of it.

    //The solution is to use two pointers with one with a delay of n

    let delayed_node = head;
    let fast_node = head;
    let count = 0;

    while(fast_node != null) {
        if(count > n) {
            delayed_node = delayed_node.next;
        }
        fast_node = fast_node.next;
        count++;
    }
    console.log(count);

    if(count == n) {
        return delayed_node.next;
    }
    else {
        let re_attach = delayed_node.next.next

        delayed_node.next = re_attach
        return head;
    }
};