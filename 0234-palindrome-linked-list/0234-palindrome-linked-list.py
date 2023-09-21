# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        
        values = self.linked_to_list(head, [])
        length = len(values)
        
        for i in range( round(length / 2)): 
            j = (i+1)*-1

            if values[i] != values[j]:
                return False
        return True


    def linked_to_list(self, linked, values):
        values.append(linked.val)

        if linked.next:
            return self.linked_to_list(linked.next, values)

        return values