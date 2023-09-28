class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:


        #first sort the intervals
        intervals = sorted(intervals)
        idx = 0
        while(idx < len(intervals) -1):

            if intervals[idx][1] >= intervals[idx+1][0]:
                if(intervals[idx][1] < intervals[idx+1][1]):
                    intervals[idx][1] = intervals[idx+1][1]

                del intervals[idx+1]
                idx = idx-1
            idx = idx+1

            
        return intervals