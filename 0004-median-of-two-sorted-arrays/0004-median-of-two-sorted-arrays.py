class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:

        final_array = nums1 + nums2
        final_array.sort()
        length = len(final_array)
        mid = length / 2

        if length % 2 == 1:
            return final_array[floor(mid)]
        else:
            return (final_array[int(mid)-1] + final_array[int(mid)]) / 2