class Solution:
    def maxSubArray(self, nums: List[int]) -> int:

        i = 0
        curr_sum = 0
        curr_max = -999999

        for i in range(len(nums)) :
            curr_sum = curr_sum + nums[i]

            if(curr_sum > curr_max):
                curr_max = curr_sum

            if (curr_sum < 0) :
                curr_sum = 0

        return curr_max
