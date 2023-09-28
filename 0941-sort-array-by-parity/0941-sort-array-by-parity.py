class Solution:
    def sortArrayByParity(self, nums: List[int]) -> List[int]:
        nums_even = list(filter(lambda x: x % 2 == 0, nums))
        nums_odd = list(filter(lambda x: x % 2 == 1, nums))

        return nums_even + nums_odd
