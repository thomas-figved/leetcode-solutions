class Solution:
    def majorityElement(self, nums: List[int]) -> List[int]:
        
        result = []
        threshold = len(nums) / 3

        for num in set(nums):
            if nums.count(num) > threshold:
                result.append(num)

        return result