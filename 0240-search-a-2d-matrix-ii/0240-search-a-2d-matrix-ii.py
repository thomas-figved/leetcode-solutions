class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        i = 0

        m = len(matrix)
        # n = len(matrix[0])

        while (i < m):
            # if i + 1 < m:
            #     if matrix[i+1][0] > target :
            #         return (target in matrix[i+1])

            if target in matrix[i]:
                return True
            i += 1
        return False