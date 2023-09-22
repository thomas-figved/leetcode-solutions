class Solution:
    def isPowerOfTwo(self, n: int) -> bool:
        if(n < 0 or str(bin(n)).count('1') != 1 ):
            return False
        else:
            return True
