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
var mergeKLists = function(lists) {
    
    lists_length = lists.length
    result_head = new ListNode(null);
    result_tail = result_head;

    if(lists_length == 0) {
        return result_head.next;
    }

    while(!lists.every((elem)=> elem == null)) {
        let current_minimum = 9999999;
        let minimum_index;
        for(let i = 0; i < lists_length; i++) {
            if(lists[i] != null) {
                if(current_minimum >= lists[i].val) {
                    current_minimum = lists[i].val;
                    minimum_index = i;
                }
            }
        }

        result_tail.next = new ListNode(lists[minimum_index].val)
        lists[minimum_index] = lists[minimum_index].next
        result_tail = result_tail.next
    }
    result_head = result_head.next
    return result_head;

    
};