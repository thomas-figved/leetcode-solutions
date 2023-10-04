/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    
    let return_head = null;

    if(list1 == null && list2 == null ) {
      return null;
    } else if(list1 == null ) {
      return list2;
    } else if(list2 == null){
      return list1;
    } else {
      
      if(list1.val < list2.val) {
        return_head = list1;
        list1 = list1.next;
      }else {
        return_head = list2;
        list2 = list2.next;
      }

      let return_list = return_head;

      let i= 0;
      while(list1 != null && list2 != null || i < 100) {
        i++;
        if(list1 == null ) {
          return_list.next = list2
          break
        } else if(list2 == null){
          return_list.next = list1
          break
        } else {
          if(list1.val < list2.val) {
            return_list.next = list1
            list1 = list1.next
          } else {
            return_list.next = list2
            list2 = list2.next
          }
          return_list = return_list.next
        }
      }
    }

    return return_head;
};