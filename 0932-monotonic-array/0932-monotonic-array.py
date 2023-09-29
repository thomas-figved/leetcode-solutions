class Solution:
    def isMonotonic(self, nums: List[int]) -> bool:
        direction = 0
        last_elem = nums[0]
        for idx in range(len(nums)) :
            if(last_elem > nums[idx] ):
                if(direction==0):
                    direction = -1
                elif (direction== 1):
                    return False
            elif(last_elem < nums[idx] ):
                if(direction==0):
                    direction = 1
                elif (direction== -1):
                    return False
            last_elem = nums[idx]
        return True
