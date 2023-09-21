class Solution:
    def summaryRanges(self, nums: List[int]) -> List[str]:
        #always put first elem
        return_list = []
        current_range = []

        for i in range(len(nums)):
            current_range.append(nums[i])
        
            if i < len(nums) - 1:
                if  nums[i] + 1 != nums[i+1]:
                    #this is the end of the range we can get add to the array
                    return_list.append(self.range_to_str(current_range))
                    current_range = []
            else:
                return_list.append(self.range_to_str(current_range))
                current_range = []
        return return_list


    def range_to_str(self, range):
        result = ""
        if(len(range) == 1):
            result = str(range[0])
        else:
            result = str(range[0]) + "->" + str(range[-1])
        return result