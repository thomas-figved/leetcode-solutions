/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
    let endNotReached1 = true
    let endNotReached2 = true
    let carry = 0
    let resultListHead = null
    let resultPreviousNode = null


    while( endNotReached1 || endNotReached2 ) {

        let sum = 0 

        if(endNotReached1 && endNotReached2) {
            //sum both
            sum = l1.val + l2.val + carry
        }else if(!endNotReached2){
            //sum only l1
            sum = l1.val + carry
        } else {
            //sum only l2
            sum = l2.val + carry
        }

        //we only take the unit and carry the tens over
        carry = sum >= 10 ? 1 : 0
        let newNode = new ListNode(sum % 10)

        if(resultListHead == null) {
            resultListHead = newNode 
            resultPreviousNode = resultListHead
        } else {
            resultPreviousNode.next = newNode
            resultPreviousNode = resultPreviousNode.next
        }

        //we check if we are on the end of the lists
        if(l1.next != null) {
            l1 = l1.next 
        } else {
            endNotReached1 = false
        }

        if(l2.next != null) {
            l2 = l2.next 
        } else {
            endNotReached2 = false
        }
    }

    if(carry>0) {
        //add final node
        let newNode = new ListNode(1)

        resultPreviousNode.next = newNode
        resultPreviousNode = resultPreviousNode.next
    }

    return resultListHead

};