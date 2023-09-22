class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        
        found={}
        for idx, val in enumerate(nums):
            if val in found.keys():
                return val
            else:
                found[val] = 1